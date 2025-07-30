import { Building2, HandCoins, MapPinned, ReceiptText } from 'lucide-react'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ServiceCardTributosProps } from '@/lib/types'
import Link from 'next/link'

export function ServiceCardTributos({
  title,
  subtitle,
  servicosIss,
  servicosIptu,
  servicosItbi,
  servicosTaxas,
}: ServiceCardTributosProps) {
  return (
    <Card className="rounded-xs h-auto">
      <CardHeader className="border-b pb-2 border-red-500">
        <CardTitle className="text-red-500">{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="hover:no-underline cursor-pointer">
              <span className="flex gap-2 font-light text-xs">
                <ReceiptText />
                ISS - Imposto Sobre Serviços de Qualquer Natureza
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosIss?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 hover:text-foreground text-xs"
                      href={item.href}
                      target="_blank"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="hover:no-underline cursor-pointer">
              <span className="flex gap-2 font-light text-xs">
                <MapPinned />
                IPTU - Imposto Predial Territorial Urbano
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosIptu?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 hover:text-foreground text-xs"
                      href={item.href}
                      target="_blank"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="hover:no-underline cursor-pointer">
              <span className="flex gap-2 font-light text-xs">
                <Building2 />
                ITBI - Imposto sobre Transmissão de Bens Imóveis
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosItbi?.map((item, index) => (
                  <li key={index}>
                    <Link
                      className="text-gray-500 hover:text-foreground text-xs"
                      href={item.href}
                      target="_self"
                    >
                      {item.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="hover:no-underline cursor-pointer">
              <span className="flex gap-2 font-light">
                <HandCoins />
                Taxas
              </span>
            </AccordionTrigger>
            <AccordionContent>
              <ul className="mt-2 space-y-1">
                {servicosTaxas?.map((item, index) => (
                  <li key={index}>
                    <a
                      className="text-gray-500 hover:text-foreground text-xs"
                      href={item.href}
                      target="_blank"
                    >
                      {item.text}
                    </a>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}
