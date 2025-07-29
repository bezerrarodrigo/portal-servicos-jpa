'use client'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { certidaoFinanceiraPessoaDTO } from '@/types'

type CertidaoFinanceiraPessoaDTO = z.infer<typeof certidaoFinanceiraPessoaDTO>

export default function CertidaoFinanceira() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CertidaoFinanceiraPessoaDTO>({
    resolver: zodResolver(certidaoFinanceiraPessoaDTO),
    defaultValues: {
      cpf: '',
    },
  })

  //functions
  const onsubmit = (data: CertidaoFinanceiraPessoaDTO) => {
    console.log(data)
  }

  return (
    <div className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-4 py-8">
      <Card className="max-w-xl w-full">
        <CardHeader>
          <CardTitle>Certidão Financeira Pessoal Física</CardTitle>
          <CardDescription>
            Informe seu CPF para emitir sua certidão.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <Input
              placeholder="Digite seu CPF"
              {...register('cpf')}
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
            {errors.cpf && (
              <p className="text-red-500 mt-1 text-sm">{errors.cpf.message}</p>
            )}
            <div className="flex gap-2 justify-end mt-4">
              <Button variant="outline">Cancelar</Button>
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
