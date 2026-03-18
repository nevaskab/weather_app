import { createContext, useContext, useState, type ReactNode } from "react";
import { getWeatherByCity } from "../services/weatherService";
import type { Weather } from "../Types/Weather";

type WeatherContextProps = {
    weather: Weather | null
    searchCity: (city: string) => Promise <void>
}

const WeatherContext = createContext<WeatherContextProps | undefined>(undefined)

export function WeatherProvider({ children }: {children: ReactNode}) {
    const [weather, setWeather] = useState<Weather | null>(null)

    const searchCity = async(city: string) => {
        try {
            const data = await getWeatherByCity(city)
            setWeather(data)
        }
        catch (error) {
            console.error("Erro ao buscar clima: ", error)
            setWeather(null)
        }
    }

    return (
        <WeatherContext.Provider value = {{ weather, searchCity}}>
            {children}
        </WeatherContext.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useWeather(){
    const context = useContext(WeatherContext)
    if(!context) {
        throw new Error("useWeather error")
    }
    return context
}