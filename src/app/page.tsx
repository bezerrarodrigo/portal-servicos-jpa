import { ServiceCardOnline } from '@/components/service-card-online'
import Image from 'next/image'
import { HeroSearch } from '@/components/hero-search'

import { ServiceCardPerfil } from '@/components/service-card-perfil'
import { ServiceCardTributos } from '@/components/service-card-tributo'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  cidadaoItems,
  empresaItens,
  imovelItens,
  iptuItems,
  issItems,
  itbiItems,
  taxaItems,
} from '@/lib/data'

import { Video } from 'lucide-react'

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
          <div className="px-4">
            <h1 className="text-center text-2xl font-bold text-gray-800">
              Vídeos explicativos
            </h1>
            <p className="text-center text-gray-600">
              Assista aos vídeos abaixo para aprender como utilizar os serviços
              online da Prefeitura.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <Card className="w-full sm:w-80 border border-red-300">
                <CardHeader>
                  <CardTitle>Emissão de boletos</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Saiba como realizar acordos e imprimir parcelas de forma
                    rápida e fácil.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="cursor-pointer w-full" variant="ghost">
                        Ver vídeo
                        <Video color="red" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Emissão de boleto</DialogTitle>
                        <DialogDescription>
                          Saiba como realizar acordos e imprimir parcelas de
                          forma rápida e fácil.
                        </DialogDescription>
                      </DialogHeader>
                      <div>
                        <div>
                          <video
                            width="620"
                            height="500"
                            controls
                            preload="none"
                            autoPlay={true}
                          >
                            <source
                              src="/videos/emissaoBoleto.mp4"
                              type="video/mp4"
                            />
                            Seu navegador não suporta o elemento de vídeo.
                          </video>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <a
                    className="text-gray-500 hover:text-foreground text-xs"
                    href="https://receita.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL"
                    target="_blank"
                  >
                    Clique aqui e emita seu boleto
                  </a>
                </CardFooter>
              </Card>
              <Card className="w-full sm:w-80 border border-red-300">
                <CardHeader>
                  <CardTitle>Emissão Nota Fiscal Avulsa</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">
                    Cadastre-se para emitir notas fiscais avulsas de forma
                    simples e rápida.
                  </p>
                </CardContent>
                <CardFooter className="flex flex-col gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="cursor-pointer w-full" variant="ghost">
                        Ver vídeo
                        <Video color="red" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>Cadastro Nota Avulsa</DialogTitle>
                        <DialogDescription>
                          Aprenda a se cadastrar para emitir notas fiscais
                          avulsas de forma simples e rápida.
                        </DialogDescription>
                      </DialogHeader>
                      <div>
                        <div>
                          <video
                            width="620"
                            height="500"
                            controls
                            preload="none"
                            autoPlay={true}
                          >
                            <source
                              src="/videos/cadastroNA.mp4"
                              type="video/mp4"
                            />
                            Seu navegador não suporta o elemento de vídeo.
                          </video>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  <a
                    className="text-gray-500 hover:text-foreground text-xs"
                    href="https://receita.joaopessoa.pb.gov.br/notafiscal/paginas/portal-avulsa/#/"
                    target="_blank"
                  >
                    Clique aqui e cadastre-se
                  </a>
                </CardFooter>
              </Card>
            </div>
          </div>
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
