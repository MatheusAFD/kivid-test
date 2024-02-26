// eslint-disable-next-line import/order
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import { latLng } from 'leaflet'

import { useGetCep } from '@/app/hooks/use-get-cep'

export default function Map() {
  const { data, lat, lon } = useGetCep()

  const coordinates = latLng(Number(lat), Number(lon))

  return (
    <>
      {data && (
        <MapContainer
          center={coordinates}
          zoom={17}
          scrollWheelZoom={true}
          className="w-full h-full"
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={coordinates}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      )}
    </>
  )
}
