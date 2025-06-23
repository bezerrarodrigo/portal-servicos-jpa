const allServices = [
  {
    text: 'Emitir Guia ISS',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`,
  },
  {
    text: 'Emitir Guia ISS Autônomo',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`,
  },
  {
    text: 'Nota Fiscal de Serviços',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/notafiscal/paginas/portal`,
  },
  {
    text: 'Nota Fiscal de Serviços Avulsa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/notafiscal/paginas/portal-avulsa`,
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES`,
  },
  {
    text: 'Reemitir Certidão',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Validar Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO`,
  },
  {
    text: 'Certidão de Baixa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=CERTIDAOBAIXAINSCRICAOMUNICIPAL`,
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`,
  },
  {
    text: 'Legislação (Lei Complementar)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Legislação (Decreto)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=2',
  },
  {
    text: 'Emitir Guia IPTU/TCR-Taxa de Lixo',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL`,
  },
  {
    text: 'Emitir Memória de Cálculo do Imóvel',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMOVEL`,
  },
  {
    text: 'Reemitir Certidão',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Validar Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO`,
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`,
  },
  {
    text: 'Legislação (Lei Complementar)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Legislação (Decreto)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=2',
  },
  {
    text: 'Emitir Guia ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf`,
  },
  {
    text: 'Sistema ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/portal/index.html`,
  },
  {
    text: 'Emitir / Reemitir Certidão de Transferência Imobiliária ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/certidao/certidaoPortalList.jsf`,
  },
  {
    text: 'Validar autenticidade certidão ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/confirmarautenticidadecertidao/confirmarAutenticidadeCertidaoPortalList.jsf`,
  },
  {
    text: 'Reemitir Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Validar Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO`,
  },
  {
    text: 'Legislação (Lei Complementar)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Legislação (Decreto)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=2',
  },
  {
    text: 'Emitir Guia TFLF',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`,
  },
  {
    text: 'Emitir Guia TFLF Autonômo',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`,
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES`,
  },
  {
    text: 'Reemitir Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`,
  },
  {
    text: 'Legislação (Lei Complementar)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Legislação (Decreto)',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=2',
  },
  {
    text: 'Certidão Financeira Imóvel',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAIMO`,
  },
  {
    text: 'Emitir Guia IPTU/TCR-Taxa de Lixo',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL`,
  },
  {
    text: 'Emitir Memória de Cálculo do Imóvel',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMOVEL`,
  },
  {
    text: 'Emitir Guia ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf`,
  },
  {
    text: 'Emitir Guia SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI`,
  },
  {
    text: 'Sistema ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf`,
  },
  {
    text: 'Reemitir Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Validar Certidão ',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO`,
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`,
  },
  {
    text: 'Emitir Guia ISS/TFLF',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`,
  },
  {
    text: 'Emitir Guia ISS/TFLF Autonômo',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA`,
  },
  {
    text: 'Nota Fiscal de Serviços',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/notafiscal/paginas/portal`,
  },
  {
    text: 'Nota Fiscal de Serviços Avulsa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/notafiscal/paginas/portal-avulsa`,
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES`,
  },
  {
    text: 'Reemitir Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Validar Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO`,
  },
  {
    text: 'Certidão de Baixa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=CERTIDAOBAIXAINSCRICAOMUNICIPAL`,
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`,
  },
  {
    text: 'DESIF',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/desif-web/paginas/portal/index.html`,
  },
  {
    text: 'Domicílio Tributário Eletrônico  ',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dte/paginas/portal`,
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES`,
  },
  {
    text: 'Emitir Guia IPTU/TCR-Taxa de Lixo',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL`,
  },
  {
    text: 'Emitir Memória de Cálculo do Imóvel',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMOVEL`,
  },
  {
    text: 'Emitir Guia ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf`,
  },
  {
    text: 'Emitir Guia SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI`,
  },
  {
    text: 'Sistema ITBI-e',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/itbi/paginas/portal/index.html`,
  },
  {
    text: 'Reemitir Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO`,
  },
  {
    text: 'Validar Certidão SIAT',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO`,
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/portal-web/paginas/inicial/`,
  },
  {
    text: 'Cadastro como Tomador da Nota',
    href: `${process.env.NEXT_PUBLIC_BASE_URL}/notafiscal/paginas/portal`,
  },
  {
    text: 'Impressão e Autenticidade de Notas Fiscais Avulsas até 31/05/2025',
    href: 'https://www.joaopessoa.pb.gov.br/pc',
  },
  {
    text: 'Impressão e Autenticidade de ITBIs até 31/05/2025 ',
    href: 'https://www.joaopessoa.pb.gov.br/pc/',
  },
]

const uniqueServices = Array.from(
  new Map(allServices.map((service) => [service.text, service])).values(),
)

new Map(allServices.map((service) => [service.text, service])).values()

export const filteredServices = uniqueServices
