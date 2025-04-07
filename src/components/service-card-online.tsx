import {
  BrickWall,
  FileBadgeIcon,
  FileDigitIcon,
  Globe,
  House,
  HousePlus,
  Landmark,
  Mail,
  MonitorCheck,
  MonitorUpIcon,
  NotepadText,
  NotepadTextDashedIcon,
  Trees,
  Truck,
} from 'lucide-react'

import { ServiceCard } from '@/components/service-card'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ServiceCardProps } from '@/lib/types'

const onlineItems = [
  {
    title: 'DTE',
    subtitle: 'Domicílio Tributário Eletrônico',
    icon: <Mail />,
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dte/paginas/portal',
  },
  {
    title: 'NFS-e',
    subtitle: 'Nota Fiscal Eletrônico de Serviços',
    icon: <NotepadText />,
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal',
  },
  {
    title: 'NFS-e Avulsa',
    subtitle: 'Nota Fiscal Eletrônico Avulsa',
    icon: <NotepadTextDashedIcon />,
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal-avulsa',
  },
  {
    title: 'DES-IF',
    subtitle: 'Declaração Eletrônica de Serviços',
    icon: <Landmark />,
    href: 'https://serem-hml.joaopessoa.pb.gov.br/desif-web/paginas/portal/index.html',
  },
  {
    title: 'ITBI-e',
    subtitle: 'Transferências e cessões de imóveis',
    icon: <HousePlus />,
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/portal/index.html',
  },
]

export function ServiceCardOnline({ title, subtitle }: ServiceCardProps) {
  return (
    <Card className="rounded-xs">
      <CardHeader className="border-b pb-2 border-red-500">
        <CardTitle className="text-red-500">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        {onlineItems.map((item) => (
          <ServiceCard
            key={item.title}
            title={item.title}
            subtitle={item.subtitle}
            icon={item.icon}
            href={item.href}
          />
        ))}
      </CardContent>
    </Card>
  )
}
