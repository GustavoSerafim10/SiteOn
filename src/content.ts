/**
 * ============================================================
 *  CONTEÚDO DO SITE GUVIX
 *  Edite os textos, links e listas aqui. Os componentes em
 *  src/sections/ apenas leem estes dados.
 * ============================================================
 */

// ------------------------------------------------------------
// Contatos e constantes
// ------------------------------------------------------------

export const WHATSAPP_NUMERO = '5561991965836'

export const WHATSAPP_MENSAGEM = 'Olá! Vim pelo site da Guvix e quero um orçamento para o meu site.'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`

export const INSTAGRAM_LINK = 'https://instagram.com/gu_vix'
export const INSTAGRAM_USUARIO = '@gu_vix'

export const DOMINIO = 'guvix.com.br'

/**
 * Preço inicial. Deixe `null` para NÃO mostrar preço em lugar nenhum.
 * Exemplo: 'R$ 497' → exibe "Sites a partir de R$ 497" no topo e em Serviços.
 */
export const PRECO_A_PARTIR_DE: string | null = null

export const SLOGAN = 'Tecnologia que transforma.'

// ------------------------------------------------------------
// Marca (arquivos em public/brand/)
// Se o arquivo não existir, o site mostra "GUVIX" em texto.
// ------------------------------------------------------------

export const marca = {
  logoHorizontal: '/brand/guvix-logo-horizontal.svg',
  logoMonoBranco: '/brand/guvix-logo-mono-branco.svg',
  nome: 'GUVIX',
}

// ------------------------------------------------------------
// Cabeçalho
// ------------------------------------------------------------

export const menu = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
]

export const botaoOrcamento = 'Orçamento'

// ------------------------------------------------------------
// Hero (topo)
// ------------------------------------------------------------

export const hero = {
  selo: 'CRIAÇÃO DE SITES',
  // O título é montado como: antes + [destaque em gradiente] + depois
  tituloAntes: 'Seu negócio ',
  tituloDestaque: 'no ar',
  tituloDepois: ' com um site profissional',
  subtitulo:
    'Sites modernos, rápidos e prontos para o celular, para o seu cliente te encontrar e chamar no WhatsApp.',
  botaoPrincipal: 'Quero meu site',
  botaoSecundario: 'Ver portfólio',
  selos: ['Feito para celular', 'Domínio no seu nome', 'Suporte direto'],
}

// ------------------------------------------------------------
// Serviços
// Ícones: nomes disponíveis em src/components/Icon.tsx
// ------------------------------------------------------------

export type IconeNome =
  | 'landing'
  | 'institucional'
  | 'catalogo'
  | 'celular'
  | 'rapido'
  | 'dominio'
  | 'atendimento'

export interface Servico {
  icone: IconeNome
  titulo: string
  descricao: string
  inclui: string[]
  destaque?: string
}

export const servicosSecao = {
  selo: 'SERVIÇOS',
  tituloAntes: 'O site certo para o ',
  tituloDestaque: 'seu negócio',
  subtitulo: 'Escolha o formato que combina com o momento da sua empresa.',
  botao: 'Pedir orçamento',
  observacao: 'Domínio, hospedagem e funcionalidades extras são combinados no orçamento.',
}

export const servicos: Servico[] = [
  {
    icone: 'landing',
    titulo: 'Página única (Landing Page)',
    descricao:
      'Uma página com seus serviços, fotos, localização, botão de WhatsApp e redes sociais. Ideal para começar.',
    inclui: ['Seus serviços e fotos', 'Mapa e localização', 'Botão de WhatsApp', 'Links das redes sociais'],
  },
  {
    icone: 'institucional',
    titulo: 'Site institucional',
    descricao: 'De 3 a 5 páginas, com a história do negócio, serviços, galeria e contato.',
    inclui: ['De 3 a 5 páginas', 'História do negócio', 'Galeria de fotos', 'Página de contato'],
    destaque: 'Mais procurado',
  },
  {
    icone: 'catalogo',
    titulo: 'Catálogo com pedido pelo WhatsApp',
    descricao:
      'Seus produtos com fotos e preços, e o cliente faz o pedido direto no seu WhatsApp.',
    inclui: ['Produtos com fotos e preços', 'Organização por categorias', 'Pedido direto no WhatsApp'],
  },
]

// ------------------------------------------------------------
// Portfólio
// tipo 'demonstracao' SEMPRE mostra a etiqueta "Projeto demonstrativo".
// imagem: caminho em public/portfolio/ (ex.: '/portfolio/padaria.webp').
// Se `imagem` ficar vazia, é gerado um placeholder em CSS com `cor`.
// ------------------------------------------------------------

export interface ItemPortfolio {
  titulo: string
  descricao: string
  imagem: string
  link?: string
  tipo: 'cliente' | 'demonstracao'
  /** Só usado no placeholder em CSS: gradiente de fundo */
  cor?: [string, string]
}

export const portfolioSecao = {
  selo: 'PORTFÓLIO',
  tituloAntes: 'Projetos ',
  tituloDestaque: 'recentes',
  subtitulo: 'Alguns exemplos do tipo de site que eu crio.',
  etiquetaDemonstracao: 'Projeto demonstrativo',
  etiquetaCliente: 'Cliente',
  botaoVer: 'Ver site',
}

export const portfolio: ItemPortfolio[] = [
  {
    titulo: 'Padaria Exemplo',
    descricao: 'Página única com cardápio, horários, localização e pedido pelo WhatsApp.',
    imagem: '',
    tipo: 'demonstracao',
    cor: ['#F59E0B', '#B45309'],
  },
  {
    titulo: 'Estúdio de Beleza Exemplo',
    descricao: 'Site institucional com serviços, galeria de trabalhos e agendamento pelo WhatsApp.',
    imagem: '',
    tipo: 'demonstracao',
    cor: ['#EC4899', '#8B5CF6'],
  },
  {
    titulo: 'Loja de Roupas Exemplo',
    descricao: 'Catálogo de produtos com fotos, preços e pedido direto no WhatsApp.',
    imagem: '',
    tipo: 'demonstracao',
    cor: ['#00D4FF', '#1677FF'],
  },
]

// ------------------------------------------------------------
// Como funciona
// ------------------------------------------------------------

export const processoSecao = {
  selo: 'COMO FUNCIONA',
  tituloAntes: 'Do primeiro contato ao ',
  tituloDestaque: 'site no ar',
  subtitulo: 'Um processo simples, em quatro passos.',
}

export const processo = [
  { titulo: 'Conversa', descricao: 'Você me conta sobre o seu negócio pelo WhatsApp.' },
  { titulo: 'Proposta', descricao: 'Envio o escopo, o prazo e o valor, sem surpresas.' },
  { titulo: 'Criação', descricao: 'Desenvolvo o site e você acompanha e pede ajustes.' },
  { titulo: 'No ar', descricao: 'Publico no seu domínio e te entrego tudo funcionando.' },
]

// ------------------------------------------------------------
// Diferenciais
// ------------------------------------------------------------

export const diferenciaisSecao = {
  selo: 'DIFERENCIAIS',
  tituloAntes: 'Por que escolher a ',
  tituloDestaque: 'Guvix',
}

export const diferenciais: { icone: IconeNome; titulo: string; descricao: string }[] = [
  {
    icone: 'celular',
    titulo: 'Pensado para celular',
    descricao: 'A maioria dos seus clientes vai acessar pelo telefone.',
  },
  { icone: 'rapido', titulo: 'Rápido de verdade', descricao: 'Site leve, que abre em segundos.' },
  { icone: 'dominio', titulo: 'Domínio no seu nome', descricao: 'O endereço é seu, sem amarras.' },
  {
    icone: 'atendimento',
    titulo: 'Atendimento direto',
    descricao: 'Você fala comigo, sem intermediários.',
  },
]

// ------------------------------------------------------------
// Dúvidas frequentes
// ------------------------------------------------------------

export const duvidasSecao = {
  selo: 'DÚVIDAS',
  tituloAntes: 'Perguntas ',
  tituloDestaque: 'frequentes',
}

export const duvidas = [
  {
    pergunta: 'Quanto custa um site?',
    resposta:
      'Depende do tipo e do que você precisa. Me chama no WhatsApp que eu passo um orçamento sem compromisso.',
  },
  {
    pergunta: 'Em quanto tempo fica pronto?',
    // PLACEHOLDER: confirmar prazos
    resposta:
      'Uma página única costuma ficar pronta em poucos dias. Sites maiores, conforme o escopo. O prazo vai combinado na proposta.',
  },
  {
    pergunta: 'O domínio fica no meu nome?',
    resposta: 'Sim. O domínio é registrado no seu CPF ou CNPJ e é seu.',
  },
  {
    pergunta: 'Tem mensalidade?',
    // PLACEHOLDER: confirmar valores
    resposta:
      'A criação é paga uma vez. Hospedagem, suporte e pequenas alterações podem ser contratados num plano mensal opcional.',
  },
  {
    pergunta: 'Quantas alterações posso pedir?',
    // PLACEHOLDER: confirmar quantas
    resposta:
      'A proposta inclui rodadas de ajustes antes da entrega. O número fica combinado por escrito.',
  },
  {
    pergunta: 'Vou aparecer no Google?',
    resposta:
      'O site é feito com as boas práticas de SEO e pode ser cadastrado no Google Meu Negócio para te encontrarem na sua região.',
  },
  {
    pergunta: 'Como faço o pagamento?',
    // PLACEHOLDER: confirmar
    resposta: 'Normalmente 50% para começar e 50% na entrega.',
  },
]

// ------------------------------------------------------------
// Chamada final e rodapé
// ------------------------------------------------------------

export const chamadaFinal = {
  tituloAntes: 'Pronto para colocar seu negócio ',
  tituloDestaque: 'no ar',
  tituloDepois: '?',
  subtitulo: 'Me chama no WhatsApp e receba um orçamento sem compromisso.',
  botao: 'Falar no WhatsApp',
}

export const rodape = {
  direitos: 'Guvix. Todos os direitos reservados.',
  whatsappLabel: 'WhatsApp',
  instagramLabel: INSTAGRAM_USUARIO,
}

export const botaoFlutuanteLabel = 'Conversar no WhatsApp'
