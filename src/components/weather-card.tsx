import Image from 'next/image'

import {
  kelvinToCelsius,
  metersPerSecondToKilometersPerHour
} from '@/app/common/utils/converter-unities'
import { useGetCep } from '@/app/hooks/use-get-cep'
import { useGetWeather } from '@/app/hooks/use-get-weather'
import { weatherConditionsConverter } from '@/app/common/utils/weather-conditions-converter'

export function WeatherCard() {
  const { lat, lon } = useGetCep()

  const shouldFetch = Boolean(lat && lon)

  const { data } = useGetWeather({
    shouldFetch,
    lat,
    lon
  })

  const mainWeather = data?.weather[0]?.main
  const conditionConverted = mainWeather
    ? weatherConditionsConverter[mainWeather]
    : 'Clouds'

  if (!data) {
    return (
      <p className="text-slate-300 animate-pulse">
        Sem informações climáticas...
      </p>
    )
  }

  return (
    <>
      {data && (
        <section className="w-auto flex flex-wrap justify-between p-4 bg-slate-700 rounded-md shadow-md">
          <div>
            <div className="flex gap-4 items-center">
              <div className="flex gap-1 text-slate-300 items-center">
                <Image
                  width={60}
                  height={60}
                  alt="Icone referente a atual condição climática"
                  src={`https://openweathermap.org/img/wn/${data?.weather[0].icon}@2x.png`}
                  priority
                />
                <p className=" text-2xl font-semibold">
                  {kelvinToCelsius(data?.main?.temp as number)}
                </p>
                <span className="text-sm -mt-1">°C</span>
              </div>

              <div className="text-xs text-slate-400">
                <p>Umidade: {data?.main.humidity}%</p>
                <p>
                  Vento:{' '}
                  {metersPerSecondToKilometersPerHour(
                    data?.wind.speed as number
                  )}{' '}
                  km/h
                </p>
              </div>
            </div>
          </div>

          <div className="text-lg text-slate-400 leading-6">
            <p>{conditionConverted}</p>
            <p>{data?.weather[0].description}</p>
          </div>
        </section>
      )}
    </>
  )
}
