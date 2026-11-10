import { ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { portfolio, portfolioSecao } from '../content'
import type { ItemPortfolio } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

function Capa({ item }: { item: ItemPortfolio }) {
  if (item.imagem) {
    return (
      <img
        src={item.imagem}
        alt={`Captura de tela do site ${item.titulo}`}
        loading="lazy"
        decoding="async"
        width={800}
        height={500}
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
    <section id="portfolio" aria-labelledby="portfolio-titulo" className="relative py-20 sm:py-28">
      <div className="shell">
        <SectionHeading id="portfolio-titulo" {...portfolioSecao} />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {portfolio.map((item, i) => (
            <Reveal as="li" key={item.titulo} delay={i * 100} className="flex">
              <article className="card group flex w-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[1.2rem]">
                  <Capa item={item} />
                  <span
                    className={`absolute top-3 left-3 rounded-full px-3 py-1 text-xs font-bold ${
                      item.tipo === 'demonstracao' ? 'bg-midnight/85 text-white ring-1 ring-white/25' : 'bg-cyan text-midnight'
                    }`}
                  >
                    {item.tipo === 'demonstracao' ? portfolioSecao.etiquetaDemonstracao : portfolioSecao.etiquetaCliente}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-bold sm:text-lg">{item.titulo}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-cinza">{item.descricao}</p>
                  {item.link && (
                    <ExternalLink
                      href={item.link}
                      className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-cyan hover:underline"
                    >
                      {portfolioSecao.botaoVer}
                      <span className="sr-only">: {item.titulo} (abre em nova aba)</span>
                      <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                    </ExternalLink>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
