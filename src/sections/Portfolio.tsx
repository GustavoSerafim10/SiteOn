import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink as ExternalLinkIcon } from 'lucide-react'
import { marca, portfolio, portfolioSecao } from '../content'
import type { ItemPortfolio } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { PlanetaBorda } from '../components/PlanetaBorda'
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
        className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
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

/** Portfólio em carrossel: rola com o dedo, com as setas ou pelo teclado */
export function Portfolio() {
  const trilho = useRef<HTMLUListElement>(null)

  const mover = (direcao: 1 | -1) => {
    const el = trilho.current
    if (!el) return
    const cartao = el.querySelector('li')
    const passo = cartao ? cartao.getBoundingClientRect().width + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: passo * direcao, behavior: 'smooth' })
  }

  const botaoSeta =
    'flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-navy/60 text-white transition-colors hover:border-cyan hover:text-cyan'

  return (
    <section id="portfolio" aria-labelledby="portfolio-titulo" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-ciano top-1/3 -left-32 h-[28rem] w-[28rem]" />
      <PlanetaBorda src={marca.lua} className="-top-24 -right-40 hidden w-[24rem] opacity-60 lg:block" />

      <div className="shell relative">
        <SectionHeading id="portfolio-titulo" {...portfolioSecao}>
          <div className="mt-6 flex gap-3 lg:justify-end">
            <button type="button" aria-label="Projeto anterior" aria-controls="portfolio-trilho" onClick={() => mover(-1)} className={botaoSeta}>
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" aria-label="Próximo projeto" aria-controls="portfolio-trilho" onClick={() => mover(1)} className={botaoSeta}>
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </SectionHeading>

        <ul
          id="portfolio-trilho"
          ref={trilho}
          tabIndex={0}
          aria-label="Projetos (role para os lados)"
          className="-mx-2 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth px-2 pt-2 pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {portfolio.map((item, i) => (
            <Reveal
              as="li"
              key={item.titulo}
              delay={Math.min(i, 3) * 100}
              className="flex w-[86%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
            >
              <article className="card group flex w-full flex-col overflow-hidden hover:-translate-y-1">
                <div className="relative aspect-[16/10] overflow-hidden rounded-t-[1.2rem] border-b border-white/10">
                  <Capa item={item} />
                  <span
                    className={`absolute bottom-4 left-4 rounded-full px-3 py-1 text-xs font-bold shadow-lg ${estiloEtiqueta[item.tipo]}`}
                  >
                    {portfolioSecao.etiquetas[item.tipo]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-slate-300">{item.descricao}</p>
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
          ))}
        </ul>
      </div>
    </section>
  )
}
