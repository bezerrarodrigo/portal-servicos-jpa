import './globals.css'

import type { Metadata } from 'next'
import React from 'react'

import { Header } from '@/components/header'
import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Portal de Serviços | João Pessoa',
  description: 'Prefeitura de João Pessoa',
  icons: {
    icon: '/favicon.png',
  },
}

const currentYear = new Date().getFullYear()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>
        <Header />
        {children}
        <footer className="flex items-center p-10  h-10 bg-gray-700 justify-center">
          <p className="text-xs text-center md:text-sm text-gray-400">
            © {currentYear} Prefeitura de João Pessoa.Todos os direitos
            reservados. <br />
            Desenvolvido por DSF - Inteligência Tributária Municipal.
          </p>
        </footer>
      </body>
    </html>
  )
}
