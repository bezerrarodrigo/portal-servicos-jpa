'use client'

import { usePathname } from 'next/navigation'

export function ConditionalFooter() {
  const pathname = usePathname()
  const yearNow = new Date().getFullYear()

  if (pathname === '/dashboard') {
    return null
  }

  return (
    <footer className="flex items-center p-10  h-10 bg-gray-700 justify-center">
      <p className="text-xs text-center md:text-sm text-gray-400">
        © {yearNow} Prefeitura de João Pessoa.Todos os direitos reservados.{' '}
        <br />
        Desenvolvido por DSF - Inteligência Tributária Municipal.
      </p>
    </footer>
  )
}
