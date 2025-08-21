import { Separator } from '@radix-ui/react-separator'
import { MenuIcon, User } from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import Link from 'next/link'

export function Header() {
  return (
    <header className="border-b">
      <div className="flex h-16 items-center justify-between gap-6 px-6">
        <Avatar>
          <AvatarImage src="" alt="Avatar usuário" />
          <AvatarFallback>
            <User size={18} />
          </AvatarFallback>
        </Avatar>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden mr-auto" variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
              <SheetDescription>Principais serviços</SheetDescription>
            </SheetHeader>
            <div className="p-4 space-y-6">
              <Link href="/">Inicial</Link>
              <Separator className="mt-2" />
              <a href="#" target="_blank">
                Carta de Serviços
              </a>
              <Separator className="mt-2" />
              <a href="#" target="_blank" rel="noreferrer">
                Usuário
              </a>
              <Separator className="mt-2" />
              <a
                href="https://www.joaopessoa.pb.gov.br/"
                target="_blank"
                rel="noreferrer"
              >
                Prefeitura
              </a>
              <Separator className="mt-2" />
              <a
                href="https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1"
                target="_blank"
                rel="noreferrer"
              >
                Legislação
              </a>
              <Separator className="mt-2" />
              <a href="#" target="_blank">
                Dúvidas Frequentes
              </a>
            </div>
          </SheetContent>
        </Sheet>
        <nav className="hidden gap-8 lg:flex">
          <Link href="/">Inicial</Link>
          <Separator style={{ height: 24 }} orientation="vertical" />
          <a href="#" target="_blank">
            Carta de Serviços
          </a>
          <Separator style={{ height: 24 }} orientation="vertical" />
          <a href="#" target="_blank" rel="noreferrer">
            Usuário
          </a>
          <Separator style={{ height: 24 }} orientation="vertical" />
          <a
            href="https://www.joaopessoa.pb.gov.br/"
            target="_blank"
            rel="noreferrer"
          >
            Prefeitura
          </a>
          <Separator style={{ height: 24 }} orientation="vertical" />
          <a
            href="https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1"
            target="_blank"
            rel="noreferrer"
          >
            Legislação
          </a>
          <Separator style={{ height: 24 }} orientation="vertical" />
          <a href="#" target="_blank">
            Dúvidas Frequentes
          </a>
        </nav>
        <Link
          className="cursor-pointer text-sm rounded-sm px-2 py-1 border-1 text-red-500"
          href="/screens/login"
        >
          Entrar
        </Link>
      </div>
    </header>
  )
}
