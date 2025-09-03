import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const invoices = [
  {
    invoice: 'IPTU',
    paymentStatus: 'Pago',
    totalAmount: 'R$850,00',
    paymentMethod: 'Parcela 2/6',
  },
  {
    invoice: 'Taxa de Lixo',
    paymentStatus: 'Pendente',
    totalAmount: 'R$150,00',
    paymentMethod: 'Boleto bancário',
  },
  {
    invoice: 'ISS Autônomo',
    paymentStatus: 'Aberto',
    totalAmount: 'R$350,00',
    paymentMethod: 'Pix',
  },
  {
    invoice: 'Alvará Comércio',
    paymentStatus: 'Pago',
    totalAmount: 'R$450,00',
    paymentMethod: 'Cartão de Crédito',
  },
  {
    invoice: 'Iluminação Pública',
    paymentStatus: 'Pago',
    totalAmount: 'R$550,00',
    paymentMethod: 'Boleto bancário',
  },
  {
    invoice: 'Taxa de fiscalização',
    paymentStatus: 'Pago',
    totalAmount: 'R$200,00',
    paymentMethod: 'Transferência bancária',
  },
  {
    invoice: 'Multa de postura',
    paymentStatus: 'Pendente',
    totalAmount: 'R$300,00',
    paymentMethod: 'Transferência bancária',
  },
]

export function DataTable() {
  return (
    <Table>
      <TableCaption>
        Resumo geral (total em aberto, total pago no ano, histórico dos últimos
        5 anos).
      </TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className='w-[100px]'>Tributo</TableHead>
          <TableHead>Situação</TableHead>
          <TableHead>Tipo</TableHead>
          <TableHead className='text-right'>Valor</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.invoice}>
            <TableCell className='font-medium'>{invoice.invoice}</TableCell>
            <TableCell>
              <Badge
                className={
                  invoice.paymentStatus === 'Pago'
                    ? 'bg-teal-600'
                    : invoice.paymentStatus === 'Pendente'
                      ? 'bg-yellow-400'
                      : 'bg-red-400'
                }
                variant='default'
              >
                {invoice.paymentStatus}
              </Badge>
            </TableCell>
            <TableCell>{invoice.paymentMethod}</TableCell>
            <TableCell className='text-right'>{invoice.totalAmount}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className='text-right'>R$2.850,00</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}
