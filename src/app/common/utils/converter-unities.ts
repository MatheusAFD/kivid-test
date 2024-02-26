export function kelvinToCelsius(kelvin: number) {
  return String((kelvin - 273.15).toFixed(0))
}

export function metersPerSecondToKilometersPerHour(metersPerSecond: number) {
  return (metersPerSecond * 3.6).toFixed(1)
}
