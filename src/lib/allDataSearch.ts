const allServices = [
  {
    text: 'Emitir Guia ISS',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA',
  },
  {
    text: 'Emitir Guia ISS Autônomo',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRGUIAISSAUTONOMO',
  },
  {
    text: 'Nota Fiscal de Serviços',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal',
  },
  {
    text: 'Nota Fiscal de Serviços Avulsa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal-avulsa',
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Validar Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
  },
  {
    text: 'Certidão de Baixa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=MOB_CB',
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/portal-web/paginas/inicial/',
  },
  {
    text: 'Legislação',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Certidão Financeira Imóvel',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMO_CNDIPTU',
  },
  {
    text: 'Emitir Guia IPTU/TCR-Taxa de Lixo',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL',
  },
  {
    text: 'Emitir Memória de Cálculo do Imóvel',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMOVEL',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Validar Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/portal-web/paginas/inicial/',
  },
  {
    text: 'Legislação',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Emitir Guia ITBI-e',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf',
  },
  {
    text: 'Sistema ITBI-e',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/portal/index.html',
  },
  {
    text: 'Certidão Negativa de Transferência Imobiliária',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/certidao/certidaoPortalData.jsf?faces-redirect=true',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Validar Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
  },
  {
    text: 'Legislação',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Emitir Guia TLFF',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA',
  },
  {
    text: 'Emitir Guia TLFF Autonômo',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRGUIAISSAUTONOMO',
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/portal-web/paginas/inicial/',
  },
  {
    text: 'Reemitir Certidão/Declaração',
    href: 'https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Legislação',
    href: 'https://www.joaopessoa.pb.gov.br/pc/consultaLegislacao.xhtml?tipo=1',
  },
  {
    text: 'Certidão Financeira Imóvel',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAIMO',
  },
  {
    text: 'Emitir Guia IPTU/TCR-Taxa de Lixo',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL',
  },
  {
    text: 'Emitir Memória de Cálculo do Imóvel',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMOVEL',
  },
  {
    text: 'Emitir Guia ITBI-e',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf',
  },
  {
    text: 'Emitir Guia SIAT',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI',
  },
  {
    text: 'Sistema ITBI-e',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.jsf',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Validar Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/portal-web/paginas/inicial/',
  },
  {
    text: 'Emitir Guia ISS/TLFF',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOEMPRESA',
  },
  {
    text: 'Emitir Guia ISS/TLFF Autonômo',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRGUIAISSAUTONOMO',
  },
  {
    text: 'Nota Fiscal de Serviços',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal',
  },
  {
    text: 'Nota Fiscal de Serviços Avulsa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal-avulsa',
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES',
  },
  {
    text: 'Certidão Conjunta Positiva com Efeito de Negativa de Débitos Municipais e da Dívida Ativa do Município',
    href: 'https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=PES_CCNDA',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Validar Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO',
  },
  {
    text: 'Certidão de Baixa',
    href: 'https://portal.teresina.pi.gov.br/dsf_the_portal/inicial.do?evento=montaMenu&acronym=MOB_CB',
  },
  {
    text: 'Certidão de Estimativa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=MOB_CB',
  },
  {
    text: 'DESIF',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/desif-web/paginas/portal/index.html',
  },
  {
    text: 'Domicílio Tributário Eletrônico  ',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dte/paginas/portal',
  },
  {
    text: 'Certidão Financeira Pessoa',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAPES',
  },
  {
    text: 'Certidão Financeira Imóvel',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRCERTIDAOFINANCEIRAIMO',
  },
  {
    text: 'Emitir Guia IPTU/TCR-Taxa de Lixo',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EXTRATOIMOVEL',
  },
  {
    text: 'Emitir Memória de Cálculo do Imóvel',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=IMOVEL',
  },
  {
    text: 'Emitir Guia ITBI-e',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/guiaitbi/emiteGuiaPortalList.',
  },
  {
    text: 'Emitir Guia SIAT',
    href: 'hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=EMITIRITBI  ',
  },
  {
    text: 'Sistema ITBI-e',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/itbi/paginas/portal/index.html',
  },
  {
    text: 'Reemitir Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=REEMITIRCERTIDAO',
  },
  {
    text: 'Validar Certidão',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/dsf_jpa_portal/inicial.do?evento=montaMenu&acronym=VALIDARCERTIDAO  ',
  },
  {
    text: 'Portal de Parcelamento e Negociação',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/portal-web/paginas/inicial/',
  },
  {
    text: 'Cadastro como Tomador da Nota',
    href: 'https://serem-hml.joaopessoa.pb.gov.br/notafiscal/paginas/portal',
  },
]

const uniqueServices = Array.from(
  new Map(allServices.map((service) => [service.text, service])).values(),
)

export const filteredServices = uniqueServices
