'use client'

import { useState } from 'react'

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command'
import { Input } from '@/components/ui/input'
import { filteredServices } from '@/lib/allDataSearch'

export function HeroSearch() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="flex m-0 bg-red-400">
        <div className="flex w-full flex-col items-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Portal de Serviços
          </h1>
          <Input
            className="bg-white w-full md:w-1/2"
            placeholder="Busca rápida por serviço..."
            onFocus={() => setOpen(true)}
          />
          <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Digite para pesquisar e clique na opção desejada..." />
            <CommandList>
              <CommandEmpty>Sem resultados.</CommandEmpty>
              <CommandGroup heading="Resultados">
                {filteredServices.map((service) => {
                  return (
                    <CommandItem key={service.id}>
                      <a href={service.href} target="_blank">
                        {service.text}
                      </a>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
          <div className="flex flex-col gap-4 text-white">
            <ul className="flex flex-col gap-2 md:gap-1">
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CNDIPTU"
                target="_blank"
              >
                Certidão Negativa de IPTU
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=IMO_CPCENIPTU"
                target="_blank"
              >
                Certidão Positiva com Efeito de Negativa IPTU
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA"
                target="_blank"
              >
                Certidão Conjunta Negativa e da Dívida Ativa
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA"
                target="_blank"
              >
                Emissão de guia ISS/Taxas
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href="https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL"
                target="_blank"
              >
                Emissão de Guia IPTU/COSIP/TCRD
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-14 items-center justify-center bg-red-300">
        <h3 className="font-bold text-red-700 lg:text-lg text-sm">
          <a
            href="https://serem-hml.joaopessoa.pb.gov.br/portal-web/paginas/inicial/"
            target="_blank"
          >
            Acesse o Portal de Parcelamento e Negociação
          </a>
        </h3>
      </div>
    </>
  )
}
