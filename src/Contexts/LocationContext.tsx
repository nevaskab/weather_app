import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { Weather } from "../Types/Weather";
import {
  getWeatherByCity,
  getWeatherByCoords,
} from "../services/weatherService";

type LocationContextProps = {
  weather: Weather | null;
  loading: boolean;
  error: string | null;
  fetchByCity: (city: string) => Promise<void>;
};

const LocationContext = createContext<LocationContextProps | undefined>(
  undefined
);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [weather, setWeather] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (pos) => {
          try {
            const data = await getWeatherByCoords(
              pos.coords.latitude,
              pos.coords.longitude
            );
            setWeather(data);
          } 
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          catch (err) {
            setError("Erro ao buscar clima pela localização");
          } 
          finally {
            setLoading(false);
          }
        },
        () => {
          setError("Permissão de localização negada");
          setLoading(false);
        }
      );
    } 
    else {
      setError("Geolocalização não é suportada");
      setLoading(false);
    }
  }, []);

  const fetchByCity = async (city: string) => {
    setLoading(true);
    try {
      const data = await getWeatherByCity(city);
      setWeather(data);
      setError(null);
    } catch {
      setError("Cidade não encontrada");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <LocationContext.Provider value={{ weather, loading, error, fetchByCity }}>
      {children}
    </LocationContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLocation() {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error("useLocation deve ser usado dentro de LocationProvider");
  return context;
}
