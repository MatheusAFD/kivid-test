import useSWR from 'swr'

import { WeatherResponse } from '../common/@types/weather-response'
import { fetcher } from '../common/utils/swr'

interface GetWeatherParams {
  shouldFetch: boolean
  lat?: string
  lon?: string
}

export function useGetWeather({ shouldFetch, lat, lon }: GetWeatherParams) {
  const api_key = process.env.NEXT_PUBLIC_WEATHER_KEY

  const { data, error, isLoading } = useSWR<WeatherResponse>(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&lang=pt&appid=${api_key}`,
    shouldFetch ? fetcher : null,
    {
      suspense: true
    }
  )

  return { data, isLoading, error }
}
