/**
 * ============================================================
 *  CONTEÚDO DO SITE GUVIX
 *  Edite os textos, links e listas aqui. Os componentes em
 *  src/sections/ apenas leem estes dados.
 * ============================================================
 */

/** Prefixo dos arquivos de public/ ("/" localmente, "/SiteOn/" no GitHub Pages) */
const BASE = import.meta.env.BASE_URL

// ------------------------------------------------------------
// Contatos e constantes
// ------------------------------------------------------------

export const WHATSAPP_NUMERO = '5561991965836'

export const WHATSAPP_MENSAGEM = 'Olá! Vim pelo site da Guvix e quero um orçamento para o meu site.'

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`

export const INSTAGRAM_LINK = 'https://www.instagram.com/gu_vix/'
export const INSTAGRAM_USUARIO = '@gu_vix'

export const DOMINIO = 'guvix.com.br'

/**
 * Preço inicial. Deixe `null` para NÃO mostrar preço em lugar nenhum.
 * Exemplo: 'R$ 497' → exibe "Sites a partir de R$ 497" no topo e em Serviços.
 */
export const PRECO_A_PARTIR_DE: string | null = null

export const SLOGAN = 'Tecnologia que transforma.'

// ------------------------------------------------------------
// Marca (arquivos em public/brand/, gerados por `npm run logos`)
// Se algum arquivo faltar, o site mostra "GUVIX" em texto.
// ------------------------------------------------------------

export const marca = {
  /** Símbolo + GUVIX, sem slogan (cabeçalho) */
  logoCompacto: `${BASE}brand/guvix-logo-compacto.svg`,
  /** Símbolo + GUVIX + slogan (rodapé) */
  logoHorizontal: `${BASE}brand/guvix-logo-horizontal.svg`,
  logoMonoBranco: `${BASE}brand/guvix-logo-mono-branco.svg`,
  simbolo: `${BASE}brand/guvix-simbolo.svg`,
  /** Lua com fundo transparente (bordas do topo e do portfólio) */
  lua: `${BASE}brand/lua.webp`,
  /** Astronauta estendendo a mão (topo) */
  astronautaAlcancando: `${BASE}brand/astronauta-alcancando.webp`,
  /** Close do astronauta com a lua ao fundo, 445×362 (bloco final) */
  astronautaCloseup: `${BASE}brand/guvix-hero-astronauta.webp`,
  /** Segunda lua, usada nas bordas das seções */
  lua2: `${BASE}brand/lua-2.webp`,
  /** Fundo de nebulosa (Serviços e bloco final) */
  fundoNebula: `${BASE}brand/guvix-fundo-espacial-nebula.webp`,
  /** Cena completa do astronauta com planeta e asteroides (topo) */
  heroCena: `${BASE}brand/guvix-hero-cena.webp`,
  /** Notebook holográfico com o símbolo G/X (Diferenciais) */
  diferenciaisNotebook: `${BASE}brand/diferenciais-notebook.webp`,
  nome: 'GUVIX',
}

// ------------------------------------------------------------
// Exemplos (painel logo abaixo do topo)
// São ESTILOS ILUSTRATIVOS, não clientes nem cases reais.
// O texto do painel deixa isso claro. Os projetos reais ficam em `portfolio`.
// ------------------------------------------------------------

export const exemplosSecao = {
  selo: 'EXEMPLOS',
  tituloAntes: 'Estilos de ',
  tituloDestaque: 'site',
  subtitulo: 'Exemplos ilustrativos do que dá para criar para o seu negócio.',
}

export const exemplos: { titulo: string; descricao: string; imagem: string }[] = [
  { titulo: 'Landing Page', descricao: 'Uma página direta ao ponto.', imagem: `${BASE}brand/exemplo-landing.webp` },
  { titulo: 'Site Institucional', descricao: 'A presença completa da sua marca.', imagem: `${BASE}brand/exemplo-institucional.webp` },
  { titulo: 'Dashboard', descricao: 'Painéis para acompanhar seus dados.', imagem: `${BASE}brand/exemplo-dashboard.webp` },
  { titulo: 'E-commerce', descricao: 'Vitrine de produtos on-line.', imagem: `${BASE}brand/exemplo-ecommerce.webp` },
]

// ------------------------------------------------------------
// Cabeçalho
// ------------------------------------------------------------

export const menu = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Portfólio', href: '#portfolio' },
  { label: 'Como funciona', href: '#processo' },
  { label: 'Dúvidas', href: '#duvidas' },
]

/** Item de rede social no fim do menu do topo (abre em nova aba) */
export const menuRedeSocial = { label: 'Instagram', href: INSTAGRAM_LINK }

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
  /** Título com palavras em destaque, como na referência ('ciano' ou 'violeta') */
  tituloPartes: [
    { texto: 'Seu ' },
    { texto: 'negócio', destaque: 'ciano' },
    { texto: ' no ar com um site ' },
    { texto: 'profissional', destaque: 'violeta' },
  ] as { texto: string; destaque?: 'ciano' | 'violeta' }[],
  selos: [
    { icone: 'celular', texto: 'Feito para celular' },
    { icone: 'dominio', texto: 'Domínio no seu nome' },
    { icone: 'escudo', texto: 'Suporte direto' },
  ] as { icone: IconeNome; texto: string }[],
  instagramTexto: 'Veja os bastidores no Instagram',
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
  | 'conversa'
  | 'proposta'
  | 'criacao'
  | 'lancamento'
  | 'escudo'

export interface Servico {
  icone: IconeNome
  titulo: string
  descricao: string
  destaque?: string
}

export const servicosSecao = {
  selo: 'SERVIÇOS',
  tituloAntes: 'O site certo para o ',
  tituloDestaque: 'seu negócio',
  subtitulo: 'Escolha o formato que combina com o momento da sua empresa.',
  botao: 'Saber mais',
  observacao: 'Domínio, hospedagem e funcionalidades extras são combinados no orçamento.',
}

/** Serviços oferecidos (sem E-commerce: não foi confirmado como serviço) */
export const servicos: Servico[] = [
  {
    icone: 'landing',
    titulo: 'Página única (Landing Page)',
    descricao: 'Seus serviços, fotos, localização e botão de WhatsApp numa página.',
  },
  {
    icone: 'institucional',
    titulo: 'Site institucional',
    descricao: 'De 3 a 5 páginas: história, serviços, galeria e contato.',
    destaque: 'Mais procurado',
  },
  {
    icone: 'catalogo',
    titulo: 'Catálogo com pedido pelo WhatsApp',
    descricao: 'Produtos com fotos e preços, e o pedido chega no seu WhatsApp.',
  },
  {
    icone: 'criacao',
    titulo: 'Desenvolvimento personalizado',
    descricao: 'Sistemas, painéis e aplicações web sob medida.',
  },
]

// ------------------------------------------------------------
// Diferenciais — só benefícios reais. Sem prometer prazo,
// suporte contínuo, notas de desempenho ou resultados.
// ------------------------------------------------------------

export const diferenciaisSecao = {
  selo: 'DIFERENCIAIS',
  tituloAntes: 'Por que escolher a ',
  tituloDestaque: 'Guvix',
  texto:
    'Um site que trabalha por você: aparece bem no celular, carrega rápido e leva o cliente direto para a conversa no WhatsApp.',
  botao: 'Quero meu site',
}

export const diferenciais: { icone: IconeNome; titulo: string; descricao: string }[] = [
  { icone: 'celular', titulo: 'Pensado para celular', descricao: 'A maioria dos seus clientes vai acessar pelo celular.' },
  { icone: 'rapido', titulo: 'Rápido de verdade', descricao: 'Site leve, que abre rápido e navega sem travar.' },
  { icone: 'dominio', titulo: 'Domínio no seu nome', descricao: 'O endereço do seu site fica com a sua marca.' },
  { icone: 'atendimento', titulo: 'Atendimento direto', descricao: 'Você fala comigo, sem intermediários.' },
]

// ------------------------------------------------------------
// Portfólio
// tipo define a etiqueta do cartão:
//   'cliente'      → "Cliente"              (site feito para um cliente)
//   'proprio'      → "Projeto próprio"      (projeto seu, não encomendado)
//   'demonstracao' → "Projeto demonstrativo" (exemplo fictício)
//   'interno'      → "Sistema interno"      (uso interno, sem link público; capa desfocada)
// Nunca marque como 'cliente' algo que não foi feito para um cliente.
// imagem: caminho em public/portfolio/ (captura de tela 1200×750, 16:10).
// Se `imagem` ficar vazia, é gerado um placeholder em CSS com `cor`.
// ------------------------------------------------------------

export interface ItemPortfolio {
  titulo: string
  descricao: string
  imagem: string
  link?: string
  /** Link do app em funcionamento, quando o projeto tem um (mostra o botão "Abrir o app") */
  linkApp?: string
  tipo: 'cliente' | 'proprio' | 'demonstracao' | 'interno'
  /** Troca o texto da etiqueta só deste item (ex.: "Projeto privado" num item 'interno') */
  etiqueta?: string
  /** Só usado no placeholder em CSS: gradiente de fundo */
  cor?: [string, string]
}

export const portfolioSecao = {
  selo: 'PORTFÓLIO',
  tituloAntes: 'Meu ',
  tituloDestaque: 'Portfólio',
  subtitulo: 'Projetos que eu desenvolvi.',
  texto: 'Sites demonstrativos e sistemas criados por mim. É só clicar para ver funcionando.',
  /** Abre a grade com todos os projetos na própria página */
  botaoTodos: 'Ver todos os projetos',
  /** Fecha a grade e volta ao carrossel */
  botaoMenos: 'Ver menos',
  etiquetas: {
    cliente: 'Cliente',
    proprio: 'Projeto próprio',
    demonstracao: 'Projeto demonstrativo',
    interno: 'Sistema interno',
  },
  botaoVer: 'Ver projeto',
  botaoApp: 'Abrir o app',
}

export const portfolio: ItemPortfolio[] = [
  {
    titulo: 'Personal Trainer',
    descricao:
      'Site para personal trainer em Brasília: planos com preço, passo a passo do atendimento, galeria de treinos, dúvidas frequentes e aula experimental pelo WhatsApp.',
    imagem: `${BASE}portfolio/personal-trainer.webp`,
    link: 'https://guvix-demo-personal.vercel.app/',
    tipo: 'demonstracao',
  },
  {
    titulo: 'Pousada Serra Aurora',
    descricao:
      'Site para pousada em Pirenópolis: acomodações com preço, galeria de fotos, consulta de datas e reserva direta pelo WhatsApp.',
    imagem: `${BASE}portfolio/pousada-serra-aurora.webp`,
    link: 'https://pousada-sooty.vercel.app/',
    tipo: 'demonstracao',
  },
  {
    titulo: "Chef's Match",
    descricao:
      'Plataforma que conecta profissionais da gastronomia, restaurantes e fornecedores: vagas com compatibilidade explicada, cotações comparadas e reputação nos dois sentidos.',
    imagem: `${BASE}portfolio/chef-match.webp`,
    link: 'https://gustavoserafim10.github.io/SiteChef-Match/',
    linkApp: 'https://chef-match-app.vercel.app/',
    tipo: 'proprio',
  },
  {
    titulo: 'Nightfolio',
    descricao:
      'Controle financeiro pessoal com painel, extrato, metas e projeção de investimentos calculada em Rust/WebAssembly.',
    imagem: `${BASE}portfolio/nightfolio.webp`,
    link: 'https://gustavoserafim10.github.io/CadernoFinancas/',
    tipo: 'proprio',
  },
  {
    titulo: 'ServiceFlow',
    descricao:
      'Sistema de chamados de TI com painel de indicadores: SLA cumprido, tempo médio de resolução e chamados por prioridade e categoria.',
    imagem: `${BASE}portfolio/serviceflow.webp`,
    link: 'https://gustavoserafim10.github.io/serviceflow/#/',
    tipo: 'proprio',
  },
  {
    titulo: 'Análise de Fut',
    descricao:
      'Motor de análise pré-jogo: cadastro da partida, estatísticas, odds de mercado e um checklist até a decisão.',
    // Projeto particular, de uso privado: sem link e com capa desfocada.
    // A captura original fica em _originais/portfolio/ (fora do public/ e fora do git).
    imagem: `${BASE}portfolio/analisefut.webp`,
    tipo: 'interno',
    etiqueta: 'Projeto privado',
  },
  {
    titulo: 'QuantifySports',
    descricao:
      'Laboratório de partidas: compara as estatísticas dos times e usa simulação Monte Carlo para estimar o valor das odds.',
    imagem: `${BASE}portfolio/quantify.webp`,
    link: 'https://gustavoserafim10.github.io/ProjetoQuantiFy/',
    tipo: 'proprio',
  },
  {
    titulo: 'Assistente de Mudanças',
    descricao:
      'Painel de gestão de mudanças integrado ao GLPI: volume por mês e por tipo, sistemas mais afetados, lead time e acompanhamento ao vivo.',
    // Capa propositalmente desfocada: o sistema usa dados internos reais.
    imagem: `${BASE}portfolio/assistente-mudancas.webp`,
    // Sem link: https://gustavoserafim10.github.io/assistente-mudancas/ retorna 404
    // (não há repositório público com esse nome). Se publicar uma versão com
    // dados fictícios, adicione `link` aqui e troque a capa por uma sem desfoque.
    tipo: 'interno',
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

export const processo: { icone: IconeNome; titulo: string; descricao: string }[] = [
  { icone: 'conversa', titulo: 'Conversa', descricao: 'Você me conta sobre o seu negócio pelo WhatsApp.' },
  { icone: 'proposta', titulo: 'Proposta', descricao: 'Envio o escopo, o prazo e o valor, sem surpresas.' },
  { icone: 'criacao', titulo: 'Criação', descricao: 'Desenvolvo o site e você acompanha e pede ajustes.' },
  { icone: 'lancamento', titulo: 'No ar', descricao: 'Publico no seu domínio e te entrego tudo funcionando.' },
]

// ------------------------------------------------------------
// Dúvidas frequentes
// ------------------------------------------------------------

export const duvidasSecao = {
  selo: 'DÚVIDAS',
  tituloAntes: 'Perguntas ',
  tituloDestaque: 'frequentes',
  subtitulo: 'Tire suas dúvidas e encontre respostas rápidas.',
  ajudaTitulo: 'Ficou alguma dúvida?',
  ajudaTexto: 'Me chama no WhatsApp ou no Instagram que eu respondo pessoalmente.',
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
  selo: 'VAMOS COMEÇAR?',
  tituloAntes: 'Pronto para colocar seu negócio ',
  tituloDestaque: 'no ar',
  tituloDepois: '?',
  subtitulo: 'Me chama no WhatsApp e receba um orçamento sem compromisso.',
  garantias: [
    'Você fala direto comigo, sem intermediários',
    'Orçamento sem compromisso',
    'Domínio registrado no seu nome',
  ],
  botao: 'Falar no WhatsApp',
  botaoInstagram: 'Seguir no Instagram',
}

export const rodape = {
  direitos: 'Guvix. Todos os direitos reservados.',
  whatsappLabel: 'WhatsApp',
  instagramLabel: INSTAGRAM_USUARIO,
  tituloNavegacao: 'Navegação',
  tituloContato: 'Contato',
}

export const botaoFlutuanteLabel = 'Conversar no WhatsApp'
export const botaoFlutuanteInstagramLabel = 'Abrir o Instagram da Guvix'
