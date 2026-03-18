import axios from "axios";

const API_KEY =import.meta.env.REACT_APP_OPENWEATHER_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5";
const GEO_URL = "http://api.openweathermap.org/geo/1.0/direct";

export const getWeatherByCoords = async (lat: number, lon: number) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      lat,
      lon,
      units: "metric",
      lang: "pt_br",
      appid: API_KEY,
    }
  })
  return response.data;
}

export const getWeatherByCity = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: "metric",
      lang: "pt_br",
      appid: API_KEY,
    }
  })
  return response.data;
}

export const getCitySuggestions = async (search: string) => {
  if (!search) return [];

  const response = await axios.get(`${GEO_URL}`, {
    params:{
      q: search,
      limit: 5,
      appid: API_KEY,
    }
  })
  return response.data;
}
