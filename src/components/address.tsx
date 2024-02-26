'use client'

import { MapPin } from 'lucide-react'
import dynamic from 'next/dynamic'
import { Suspense, useMemo } from 'react'

import { Modal } from './modal'
import { Button } from './Button'
import { WeatherCard } from './weather-card'
import { CardSkeleton } from './card-skeleton'

import { useDisclosure } from '@/app/hooks/use-disclosure'
import { useGetCep } from '@/app/hooks/use-get-cep'
import { maskCep } from '@/app/common/utils/masks'

export default function Address() {
  const Map = useMemo(
    () =>
      dynamic(() => import('./map'), {
        loading: () => <p>A map is loading</p>,
        ssr: false
      }),
    []
  )

  const { isOpen, onClose, onOpen } = useDisclosure()

  const { data, hasError } = useGetCep()

  if (hasError) {
    return <p className="text-slate-300">Ops, algo deu errado...</p>
  }

  const hasCoordinates = Boolean(data?.location?.coordinates?.latitude)

  return (
    <>
      {data && (
        <>
          <section className=" w-full max-w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2 ">
              <div className="col-span-2 md:col-span-3">
                <p className="text-start text-lg text-slate-300">
                  Logradouro/Nome
                </p>
                <p className="text-md text-slate-400">{data?.street}</p>
              </div>

              <div>
                <p className="text-start text-lg text-slate-300">
                  Bairro/Distrito
                </p>
                <p className="text-md text-slate-400">{data?.neighborhood}</p>
              </div>

              <div>
                <p className="text-start text-lg text-slate-300">
                  Localidade/UF
                </p>
                <p className="text-md text-slate-400">
                  {data?.city}/{data?.state}
                </p>
              </div>

              <div>
                <p className="text-start text-lg text-slate-300">CEP</p>
                <p className="text-md text-slate-400">{maskCep(data?.cep)}</p>
              </div>
            </div>
          </section>

          <Suspense fallback={<CardSkeleton />}>
            <WeatherCard />
          </Suspense>

          {hasCoordinates && (
            <footer className="flex gap-3 flex-wrap">
              <Button.root onClick={onOpen}>
                <Button.icon>
                  <MapPin className="size-6 cursor-pointer" />
                </Button.icon>
                <Button.text>Ver no mapa</Button.text>
              </Button.root>
            </footer>
          )}
        </>
      )}

      <Modal isOpen={isOpen} onClose={onClose}>
        <Map />
      </Modal>
    </>
  )
}
