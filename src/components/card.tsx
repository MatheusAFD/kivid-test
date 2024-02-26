import Address from './address'
import { CepForm } from './cep-form'

export function Card() {
  return (
    <div className="w-11/12 md:w-[750px] max-w-full p-4 md:p-8 rounded-md bg-slate-800 mt-24">
      <div className="flex flex-col gap-4">
        <h1 className="text-slate-400 text-2xl">CEP Search</h1>

        <div className="flex flex-col gap-4">
          <CepForm />
          <Address />
        </div>
      </div>
    </div>
  )
}
