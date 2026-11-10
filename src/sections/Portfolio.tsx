import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { portfolio, portfolioSecao } from '../content'
import type { ItemPortfolio } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const estiloEtiqueta: Record<ItemPortfolio['tipo'], string> = {
  cliente: 'bg-cyan text-midnight',
  proprio: 'bg-gradient-to-r from-cyan to-violet text-midnight',
  demonstracao: 'bg-midnight/85 text-white ring-1 ring-white/25',
  interno: 'bg-midnight/85 text-white ring-1 ring-violet/60',
}

function Capa({ item }: { item: ItemPortfolio }) {
  if (item.imagem) {
    return (
      <img
        src={item.imagem}
        alt={`Captura de tela do projeto ${item.titulo}`}
        loading="lazy"
        decoding="async"
        width={1200}
        height={750}
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
      />
    )
  }

  // Placeholder gerado em CSS: gradiente + nome
  const [c1, c2] = item.cor ?? ['#1677FF', '#8B5CF6']
  return (
    <div
      role="img"
      aria-label={`Imagem ilustrativa do ${item.titulo}`}
      className="flex h-full w-full items-center justify-center p-6"
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      <span className="text-center font-display text-lg font-bold text-white drop-shadow-[0_2px_8px_rgb(0_0_0/0.45)] sm:text-xl">
        {item.titulo}
      </span>
    </div>
  )
}

export function Portfolio() {
  return (
    <section id="portfolio" aria-labelledby="portfolio-titulo" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-ciano top-1/3 -left-32 h-[28rem] w-[28rem]" />
      <div className="shell relative">
        <SectionHeading id="portfolio-titulo" {...portfolioSecao} />

        <ul className="grid gap-6 md:grid-cols-2 xl:gap-8">
          {portfolio.map((item, i) => {
            // com quantidade ímpar, o último cartão ocupa a linha toda (capa à esquerda, texto à direita)
            const largo = portfolio.length % 2 === 1 && i === portfolio.length - 1
            return (
            <Reveal as="li" key={item.titulo} delay={(i % 2) * 120} className={`flex ${largo ? 'md:col-span-2' : ''}`}>
              <article
                className={`card group flex w-full flex-col overflow-hidden hover:-translate-y-1 ${largo ? 'md:flex-row md:items-center' : ''}`}
              >
                <div
                  className={`relative aspect-[16/10] overflow-hidden border-white/10 ${
                    largo
                      ? 'rounded-t-[1.2rem] border-b md:w-1/2 md:shrink-0 md:rounded-l-[1.2rem] md:rounded-tr-none md:border-r md:border-b-0'
                      : 'rounded-t-[1.2rem] border-b'
                  }`}
                >
                  <Capa item={item} />
                  <span
                    className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-bold shadow-lg ${estiloEtiqueta[item.tipo]}`}
                  >
                    {portfolioSecao.etiquetas[item.tipo]}
                  </span>
                </div>

                <div className={`flex flex-1 flex-col p-6 sm:p-8 ${largo ? 'xl:p-12' : ''}`}>
                  <h3 className={`font-bold ${largo ? 'text-xl md:text-2xl' : 'text-xl'}`}>{item.titulo}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">{item.descricao}</p>
                  {item.link && (
                    <ExternalLink href={item.link} className="btn-secondary mt-6 self-start px-5 py-2.5 text-sm">
                      {portfolioSecao.botaoVer}
                      <span className="sr-only">: {item.titulo} (abre em nova aba)</span>
                      <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                    </ExternalLink>
                  )}
                </div>
              </article>
            </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
