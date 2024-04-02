'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { Search } from 'lucide-react'

import { Input } from './input'

import { useGetCep } from '@/app/hooks/use-get-cep'
import { maskCep } from '@/app/common/utils/masks'

const formSchema = z.object({
  cep: z
    .string()
    .min(9, { message: 'O campo CEP prcisa ter no mínimo 8 caracteres' })
    .max(9, { message: 'O campo CEP prcisa ter no máximo 8 caracteres' })
})

type CepSubmitSchema = z.infer<typeof formSchema>

export function CepForm() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<CepSubmitSchema>({
    mode: 'onTouched',
    reValidateMode: 'onChange',
    resolver: zodResolver(formSchema)
  })

  const { fetchApi, mutate } = useGetCep()

  function onSubmit(data: CepSubmitSchema) {
    try {
      mutate(fetchApi(data.cep))
    } catch (error) {
      return error
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-2 text-slate-400">
        <Input
          {...register('cep', {
            onChange: (e) => (e.target.value = maskCep(e.target.value))
          })}
          type="text"
          label="Digite um CEP"
          placeholder="Ex: 77814-440"
          errorMessage={errors.cep?.message}
          rightIcon={
            <button type="submit">
              <Search className="cursor-pointer size-7" />
            </button>
          }
        />
      </div>
    </form>
  )
}
