interface WeatherConditions {
  Thunderstorm: string
  Drizzle: string
  Rain: string
  Snow: string
  Atmosphere: string
  Clear: string
  Clouds: string
  [key: string]: string // Adicionando uma assinatura de índice
}

export const weatherConditionsConverter: WeatherConditions = {
  Thunderstorm: 'Tempestade',
  Drizzle: 'Chuvisco',
  Rain: 'Chuva',
  Snow: 'Neve',
  Atmosphere: 'Atmosfera',
  Clear: 'Céu Limpo',
  Clouds: 'Núvens'
}
