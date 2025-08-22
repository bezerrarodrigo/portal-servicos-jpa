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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { certidaoFinanceiraPessoaDTO } from '@/types'
import { zodResolver } from '@hookform/resolvers/zod'
import { on } from 'events'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { set, z } from 'zod'

type CertidaoFinanceiraPessoaDTO = z.infer<typeof certidaoFinanceiraPessoaDTO>

export default function ExtratoGuia() {
  //states
  const [isLoading, setIsLoading] = useState(false)

  //hooks
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
  function onsubmit() {
    setIsLoading(true)
  }

  return (
    <div className="flex flex-col items-center min-h-screen max-w-7xl mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle>Extrato de Débitos</CardTitle>
          <CardDescription>
            Informe os dados abaixo para emitir seu extrato.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit(onsubmit)}>
            <div className="grid grid-cols-3 gap-2">
              <Select>
                <SelectTrigger className="w-auto">
                  <SelectValue placeholder="Cadastro" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="imi">
                    Imobiliário - IM Imobiliária
                  </SelectItem>
                  <SelectItem value="imc">
                    Imobiliário - IM Cartográfica
                  </SelectItem>
                  <SelectItem value="mob">
                    Mobiliário - Empresa/Autônomo
                  </SelectItem>
                  <SelectItem value="pessoa">Pessoa - PF/PJ</SelectItem>
                </SelectContent>
              </Select>
              <Input placeholder="Inscrição Imobiliária" />
              <Input placeholder="Imóvel" disabled />
            </div>
            <div className="grid grid-cols-6 gap-2">
              <Input placeholder="Exercício" />
              <Input placeholder="Número Auto Infração" />
              <Input placeholder="Lançamento" />
              <Input placeholder="Número da dívida" />
              <Input placeholder="Número CDA" />
              <Input placeholder="Número CDA Sistema Anterior" />
            </div>
            <div className="flex gap-2 justify-end mt-4">
              <Button variant="outline" onClick={() => setIsLoading(false)}>
                Limpar
              </Button>
              <Button type="button" disabled={isSubmitting} onClick={onsubmit}>
                Pesquisar
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      {isLoading && (
        <>
          <Separator className="my-4" />
          <Card className="w-full bg-muted">
            <CardHeader>
              <CardTitle>Resultados da Pesquisa</CardTitle>
              <CardDescription>
                Abaixo estão os resultados encontrados para o extrato de
                débitos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-semibold">
                      Valores
                    </TableHead>
                    <TableHead className="font-semibold">
                      Quantidade de Guias
                    </TableHead>
                    <TableHead className="font-semibold">Emolumentos</TableHead>
                    <TableHead className="font-semibold">Honorários</TableHead>
                    <TableHead className="font-semibold">Lançado</TableHead>
                    <TableHead className="font-semibold">Atualizado</TableHead>
                    <TableHead className="font-semibold">
                      Juros/Multa/Desconto
                    </TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Devidos</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 235,23</TableCell>
                    <TableCell>R$ 5.433,02</TableCell>
                    <TableCell>R$ 9.351,08</TableCell>
                    <TableCell>R$ 12.398,31</TableCell>
                    <TableCell>R$ 9.878,23</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>A pagar</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
          <Card className="w-full  mt-4">
            <CardHeader>
              <CardTitle>Itens do Cálculo</CardTitle>
              <CardDescription>
                Abaixo estão os resultados encontrados para o extrato de
                débitos.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] font-semibold">
                      Valores
                    </TableHead>
                    <TableHead className="font-semibold">
                      Quantidade de Guias
                    </TableHead>
                    <TableHead className="font-semibold">Emolumentos</TableHead>
                    <TableHead className="font-semibold">Honorários</TableHead>
                    <TableHead className="font-semibold">Lançado</TableHead>
                    <TableHead className="font-semibold">Atualizado</TableHead>
                    <TableHead className="font-semibold">
                      Juros/Multa/Desconto
                    </TableHead>
                    <TableHead>Total</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Devidos</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 235,23</TableCell>
                    <TableCell>R$ 5.433,02</TableCell>
                    <TableCell>R$ 9.351,08</TableCell>
                    <TableCell>R$ 12.398,31</TableCell>
                    <TableCell>R$ 9.878,23</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>A pagar</TableCell>
                    <TableCell>0</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                    <TableCell>R$ 0,00</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  )
}
