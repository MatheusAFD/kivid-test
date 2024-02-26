import useSWRMutation from 'swr'

import { CepResponse } from '../common/@types/cep-response'

export function useGetCep() {
  async function fetchApi(cep: string) {
    const data = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)

    return await data.json()
  }

  const { data, mutate } = useSWRMutation<CepResponse>('cep')

  const hasError = data?.type === 'service_error'

  const lat = data?.location?.coordinates?.latitude
  const lon = data?.location?.coordinates?.longitude

  return { data, hasError, lat, lon, mutate, fetchApi }
}
