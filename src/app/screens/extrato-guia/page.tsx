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
import { certidaoFinanceiraPessoaDTO } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { Separator } from '@radix-ui/react-separator'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

type CertidaoFinanceiraPessoaDTO = z.infer<typeof certidaoFinanceiraPessoaDTO>

export default function ExtratoGuia() {
  const {
    register,
    handleSubmit,
    reset,
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
      <Card className="max-w-2xl w-full">
        <CardHeader>
          <CardTitle>Extrato de Débitos</CardTitle>
          <CardDescription>
            Informe os dados abaixo para emitir seu extrato.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onsubmit)}>
            <div className="space-y-2"></div>
            <div className="flex gap-2 justify-end mt-4">
              <Button variant="outline" onClick={() => reset()}>
                Limpar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                Pesquisar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
