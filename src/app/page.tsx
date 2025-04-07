import Image from 'next/image'

import { HeroSearch } from '@/components/hero-search'
import { ServiceCardOnline } from '@/components/service-card-online'
import { ServiceCardPerfil } from '@/components/service-card-perfil'
import { ServiceCardTributos } from '@/components/service-card-tributo'
import {
  cidadaoItems,
  empresaItens,
  imovelItens,
  iptuItems,
  issItems,
  itbiItems,
  taxaItems,
} from '@/lib/data'

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col antialiased">
        <div className="flex flex-1 flex-col space-y-6 py-10">
          <div className="flex w-full items-center justify-center px-4">
            <Image
              src="/logoPrefeitura.png"
              alt="Logo Prefeitura"
              width={400}
              height={400}
            />
          </div>
          <HeroSearch />
          <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-3">
            <ServiceCardTributos
              title="Serviços por Tributo"
              subtitle="Encontre o serviço ou a informação
             selecionando o tributo relacionado."
              servicosIss={issItems}
              servicosIptu={iptuItems}
              servicosItbi={itbiItems}
              servicosTaxas={taxaItems}
            />
            <ServiceCardPerfil
              title="Serviços por Perfil"
              subtitle="Encontre o serviço ou a informação
             selecionando o perfil desejado."
              servicosImovel={imovelItens}
              servicosEmpresa={empresaItens}
              servicosCidadao={cidadaoItems}
            />
            <ServiceCardOnline
              title="Aplicações Online"
              subtitle="Selecione a aplicação ou serviço online
desejado para acesso específico."
            />
          </div>
        </div>
      </main>
    </>
  )
}
