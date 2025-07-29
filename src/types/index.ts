import z from 'zod'

export const certidaoFinanceiraPessoaDTO = z.object({
  cpf: z
    .string()
    .min(1, 'CPF é obrigatório.')
    .regex(
      /^\d{3}\.\d{3}\.\d{3}-\d{2}$|^\d{11}$/,
      'CPF deve ter formato válido (XXX.XXX.XXX-XX ou 11 dígitos).',
    )
    .refine((cpf) => {
      // Remove formatação
      const cleanCpf = cpf.replace(/[^\d]/g, '')

      // Verifica se tem 11 dígitos
      if (cleanCpf.length !== 11) return false

      // Verifica se todos os dígitos são iguais
      if (/^(\d)\1{10}$/.test(cleanCpf)) return false

      // Validação do primeiro dígito verificador
      let sum = 0
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cleanCpf[i]) * (10 - i)
      }
      let digit1 = 11 - (sum % 11)
      if (digit1 >= 10) digit1 = 0

      // Validação do segundo dígito verificador
      sum = 0
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cleanCpf[i]) * (11 - i)
      }
      let digit2 = 11 - (sum % 11)
      if (digit2 >= 10) digit2 = 0

      return (
        parseInt(cleanCpf[9]) === digit1 && parseInt(cleanCpf[10]) === digit2
      )
    }, 'CPF inválido.'),
})

export const validarAutenticidadeCertidaoDTO = z.object({
  numero: z.string().min(1, 'Número da certidão é obrigatório.'),
  codigo: z.string().min(1, 'Código de autenticidade é obrigatório.'),
})
