import {
  IconAlertCircle,
  IconCar,
  IconCoin,
  IconEdit,
  IconId,
  IconMap,
  IconMoneybag,
  IconPin,
} from '@tabler/icons-react'

import { Badge } from '@/components/ui/badge'
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

export function SectionCards() {
  return (
    <div className='*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4'>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>IPTU - Valor anual</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            R$438,69
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <IconMoneybag />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Parcelas pagas <IconCoin className='size-4' />
          </div>
          <div className='text-muted-foreground'>2/10</div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Mobiliário</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            4 Imóveis
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <IconMap />
              Ver local
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Uso principal <IconPin className='size-4' />
          </div>
          <div className='text-muted-foreground'>Comercial</div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Veículos - IPVA</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            R$145,67
          </CardTitle>
          <CardAction>
            <Badge variant='outline'>
              <IconCar />
              4/8
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Documentação
            <IconId className='size-4' />
          </div>
          <div className='text-muted-foreground'>Licenciamento</div>
        </CardFooter>
      </Card>
      <Card className='@container/card'>
        <CardHeader>
          <CardDescription>Notificação</CardDescription>
          <CardTitle className='text-2xl font-semibold tabular-nums @[250px]/card:text-3xl'>
            2 alertas
          </CardTitle>
          <CardAction>
            <Badge className='bg-yellow-200' variant='outline'>
              <IconAlertCircle />
              Atenção
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className='flex-col items-start gap-1.5 text-sm'>
          <div className='line-clamp-1 flex gap-2 font-medium'>
            Complete informações de cadastro
            <IconEdit className='size-4' />
          </div>
          <div className='text-muted-foreground'>
            Atualização Cadastral 2025
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
