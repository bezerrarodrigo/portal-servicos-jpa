'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import {
  certidaoFinanceiraPessoaDTO,
  validarAutenticidadeCertidaoDTO,
} from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-separator'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type ValidarAutenticidadeCertidaoDTO = z.infer<
  typeof validarAutenticidadeCertidaoDTO
>

export default function AutenticidadeCertidao() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ValidarAutenticidadeCertidaoDTO>({
    resolver: zodResolver(validarAutenticidadeCertidaoDTO),
    defaultValues: {
      numero: '',
      codigo: '',
    },
  })

  //functions
  const onsubmit = (data: ValidarAutenticidadeCertidaoDTO) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-4 py-8">
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle>Validar Autenticidade Certidão</CardTitle>
          <CardDescription>
            Informe os dados abaixo para validar a autenticidade da certidão.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="space-y-2">
              <Input
                placeholder="Número da certidão"
                {...register('numero')}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '')
                  const maskedValue = value
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d)/, '$1.$2')
                    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
                    .replace(/(-\d{2})\d+?$/, '$1')
                  e.target.value = maskedValue
                }}
                maxLength={14}
              />
              {errors.numero && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.numero.message}
                </p>
              )}
              <Input
                placeholder="Código de autenticidade"
                {...register('codigo')}
              />
              {errors.codigo && (
                <p className="text-red-500 mt-1 text-sm">
                  {errors.codigo.message}
                </p>
              )}
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <Button variant="outline" onClick={() => reset()}>
                Limpar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Emitir
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
