import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export function LoginForm() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
      <Card>
        <CardHeader>
          <CardTitle>Entrar em sua conta</CardTitle>
          <CardDescription>
            Insira seu e-mail cadastrado na prefeitura abaixo para acessar sua
            conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='flex flex-col gap-6'>
              <div className='grid gap-3'>
                <Input
                  id='email'
                  type='email'
                  placeholder='Seu e-mail'
                  required
                />
              </div>
              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <a
                    href='#'
                    className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                  >
                    Esqueceu sua senha?
                  </a>
                </div>
                <Input
                  id='password'
                  type='password'
                  required
                  placeholder='Senha'
                />
              </div>
              <div className='flex flex-col gap-3'>
                <Link
                  href='/dashboard'
                  type='submit'
                  className='w-full border rounded-md bg-primary text-white flex items-center justify-center h-9 text-sm'
                >
                  Entrar
                </Link>
                <Button variant='outline' className='w-full'>
                  Entrar com Google
                </Button>
              </div>
            </div>
            <div className='mt-4 text-center text-sm'>
              Não tem uma conta?{' '}
              <a href='#' className='underline underline-offset-4'>
                Cadastrar
              </a>
            </div>
          </form>
        </CardContent>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Acesso via Certificado Digital</CardTitle>
          <CardDescription>
            Insira seu certificado digital para acessar sua conta.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link
            href='/dashboard'
            type='submit'
            className='w-full border rounded-md bg-primary text-white flex items-center justify-center h-9 px-4 text-sm'
          >
            Entrar com Certificado Digital
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
