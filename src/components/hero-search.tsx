"use client";

import { useState } from "react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from "@/components/ui/command";
import { Input } from "@/components/ui/input";
import { filteredServices } from "@/lib/allDataSearch";

export function HeroSearch() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="flex m-0 bg-red-400">
        <div className="flex w-full flex-col items-center gap-4 p-8">
          <h1 className="text-2xl md:text-4xl font-bold text-white">
            Portal de Serviços
          </h1>
          <Input
            className="bg-white w-full md:w-1/2 max-w-[600px]"
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
                    <CommandItem key={service.text}>
                      <a href={service.href} target="_blank">
                        {service.text}
                      </a>
                    </CommandItem>
                  );
                })}
              </CommandGroup>
            </CommandList>
          </CommandDialog>
          <div className="flex flex-col gap-4 text-white">
            <ul className="flex flex-col gap-2 md:gap-1">
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES`}
                target="_blank"
              >
                Certidão Financeira Pessoa
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAIMO`}
                target="_blank"
              >
                Certidão Financeira Imóvel
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=CERTIDAOBAIXAINSCRICAOMUNICIPAL`}
                target="_blank"
              >
                Certidão Baixa da Inscrição Municipal
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=COMPROVANTEINSCRICAOESITUACAOMUNICIPAL`}
                target="_blank"
              >
                Comprovante de Inscrição e de Situação Cadastral
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`}
                target="_blank"
              >
                Emissão de guia ISS/Taxas
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL`}
                target="_blank"
              >
                IPTU Anos Anteriores
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href="https://jpa.dsfweb.com.br/portal-web/paginas/iptu/index.jsf"
                target="_blank"
              >
                Emissão de guia IPTU/TCR 2026
              </a>
              <a
                className="hover:underline font-light text-sm text-center md:text-left"
                href={`${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=INDICADORECONOMICO`}
                target="_blank"
              >
                Consultar indicadores econômicos
              </a>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex h-14 items-center justify-center bg-red-300">
        <h3 className="font-bold text-red-700 lg:text-lg text-sm">
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`}
            target="_blank"
          >
            Acesse o Portal de Parcelamento e Negociação
          </a>
        </h3>
      </div>
    </>
  );
}
