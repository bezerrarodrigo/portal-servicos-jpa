import './globals.css'

import type { Metadata } from 'next'
import React from 'react'

import { ConditionalHeader } from '@/components/conditional-header'
import { ConditionalFooter } from '@/components/conditional-footer'
import { inter } from '@/lib/fonts'

export const metadata: Metadata = {
  title: 'Portal de Serviços | João Pessoa',
  description: 'Prefeitura de João Pessoa',
  icons: {
    icon: '/favicon.png',
  },
}

const yearNow = new Date().getFullYear()

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt">
      <body className={`${inter.className} antialiased`}>
        <ConditionalHeader />
        {children}
        <ConditionalFooter />
      </body>
    </html>
  )
}
