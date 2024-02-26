export interface CepResponse {
  cep: string
  state: string
  city: string
  neighborhood: string
  street: string
  service: string
  location: Location
  type: 'service_error'
}

export interface Location {
  type: string
  coordinates: Coordinates
}

export interface Coordinates {
  longitude: string
  latitude: string
}
