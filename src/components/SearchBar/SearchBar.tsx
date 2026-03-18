import { useEffect, useState } from "react";
import Search from "../../assets/Search-icon";
import "./SearchBar.css";
import { useWeather } from "../../Contexts/WeatherContext";
import { useLocation } from "../../Contexts/LocationContext";
import { getCitySuggestions } from "../../services/weatherService";

export default function SearchBar() {
	const [city, setCity] = useState("")
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const [suggestions, setSuggestions] = useState<any[]>([])
	const { searchCity } = useWeather()
	const { fetchByCity } = useLocation()

	useEffect(() => {
		const delayDebounce = setTimeout(async () => {
			if(city.length > 2) {
				const data = await getCitySuggestions(city)
				setSuggestions(data)
			} 
			else{
				setSuggestions([])
			}
		}, 500)
		return () => clearTimeout(delayDebounce)
	}, [city])

	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	const handleSelectCity = (selectedCity: any) => {
		const cityName = `${selectedCity.name}, ${selectedCity.country}`
		setCity(cityName)
		setSuggestions([])
		fetchByCity(cityName)
		searchCity(cityName)
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault()
		if(!city.trim()) return
		fetchByCity(city)
		searchCity(city)
		setSuggestions([])
	}

	return (
		<div className="serach-conteiner">
			<div className="search-bar">
				<Search />
				<form onSubmit={handleSubmit}>
					<input 
					className="search-text"
					type="search" value={city} placeholder="Pesquise uma cidade..." onChange={(e) => setCity(e.target.value)}/>
				</form>
			</div>
			{suggestions.length > 0 && (
                <ul className="suggestions-list">
                    {suggestions.map((item, index) => (
                        <li key={index} onClick={() => handleSelectCity(item)}>
                            {item.name}, {item.state && `${item.state}, `} {item.country}
                        </li>
                    ))}
                </ul>
            )}
		</div>
	)
}