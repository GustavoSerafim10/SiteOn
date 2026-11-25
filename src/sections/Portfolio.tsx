import { useRef } from 'react'
import { ArrowLeft, ArrowRight, ExternalLink as ExternalLinkIcon, Eye } from 'lucide-react'
import { GITHUB_LINK, hero, marca, portfolio, portfolioSecao } from '../content'
import type { ItemPortfolio } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { LaptopHolografico } from '../components/LaptopHolografico'
import { PlanetaBorda } from '../components/PlanetaBorda'
import { Reveal } from '../components/Reveal'

/** Tela do notebook: miniatura do próprio site da GUVIX (topo com o astronauta) */
function TelaSite() {
  return (
    <div
      className="relative flex h-full items-center bg-cover bg-center px-[7%]"
      style={{ backgroundImage: `linear-gradient(90deg, rgb(8 13 27 / 0.92) 35%, rgb(8 13 27 / 0.2)), url('${marca.fundoNebula}')` }}
    >
      <img src={marca.logoCompacto} alt="" className="absolute top-[7%] left-[7%] h-[8%]" />
      <div className="relative z-10 w-[55%]">
        <p className="font-display text-[clamp(0.55rem,1.6vw,1.1rem)] leading-tight font-extrabold text-white">
          {hero.tituloAntes}
          <span className="text-gradient">{hero.tituloDestaque}</span>
        </p>
        <span className="mt-[6%] inline-block rounded-full bg-blue-btn px-[8%] py-[3%] text-[clamp(0.35rem,0.8vw,0.6rem)] font-bold text-white">
          {hero.botaoPrincipal}
        </span>
      </div>
      <img src={marca.astronautaAlcancando} alt="" className="absolute right-[2%] bottom-0 h-[92%]" />
    </div>
  )
}

/** Tela do celular: versão móvel do mesmo topo */
function TelaSiteCelular() {
  return (
    <div
      className="relative flex h-full flex-col bg-cover bg-center p-[10%]"
      style={{ backgroundImage: `linear-gradient(180deg, rgb(8 13 27 / 0.9) 30%, rgb(8 13 27 / 0.3)), url('${marca.fundoNebula}')` }}
    >
      <img src={marca.logoCompacto} alt="" className="h-[5%] self-start" />
      <p className="mt-[18%] font-display text-[clamp(0.4rem,1vw,0.7rem)] leading-tight font-extrabold text-white">
        {hero.tituloAntes}
        <span className="text-gradient">{hero.tituloDestaque}</span>
      </p>
      <img src={marca.astronautaAlcancando} alt="" className="mt-auto w-full" />
    </div>
  )
}

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
        <div className="mb-12 grid items-center gap-10 xl:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <span className="eyebrow">{portfolioSecao.selo}</span>
            <h2
              id="portfolio-titulo"
              className="mt-5 text-[2.1rem] leading-[1.1] font-extrabold sm:text-5xl xl:text-[3.4rem] 2xl:text-[3.8rem]"
            >
              {portfolioSecao.tituloAntes}
              <span className="text-gradient-vivo">{portfolioSecao.tituloDestaque}</span>
            </h2>
            <p className="mt-4 text-xl text-white sm:text-2xl">{portfolioSecao.subtitulo}</p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{portfolioSecao.texto}</p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <ExternalLink href={GITHUB_LINK} className="btn-primary px-7 py-4 text-base sm:text-lg">
                <Eye className="h-5 w-5" aria-hidden="true" />
                {portfolioSecao.botaoTodos}
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </ExternalLink>
              <button type="button" aria-label="Projeto anterior" aria-controls="portfolio-trilho" onClick={() => mover(-1)} className={botaoSeta}>
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Próximo projeto" aria-controls="portfolio-trilho" onClick={() => mover(1)} className={botaoSeta}>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </Reveal>

          <LaptopHolografico
            tela={<TelaSite />}
            telaCelular={<TelaSiteCelular />}
            className="mx-auto hidden w-full max-w-2xl sm:block"
          />
        </div>

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
                    {item.etiqueta ?? portfolioSecao.etiquetas[item.tipo]}
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3 className="text-xl font-bold">{item.titulo}</h3>
                  <p className="mt-2 flex-1 text-base leading-relaxed text-slate-300">{item.descricao}</p>
                  {(item.link || item.linkApp) && (
                    <div className="mt-6 flex flex-wrap gap-3">
                      {item.link && (
                        <ExternalLink href={item.link} className="btn-secondary px-5 py-2.5 text-sm">
                          {portfolioSecao.botaoVer}
                          <span className="sr-only">: {item.titulo} (abre em nova aba)</span>
                          <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                        </ExternalLink>
                      )}
                      {item.linkApp && (
                        <ExternalLink href={item.linkApp} className="btn-primary px-5 py-2.5 text-sm">
                          {portfolioSecao.botaoApp}
                          <span className="sr-only">: {item.titulo} (abre em nova aba)</span>
                          <ExternalLinkIcon className="h-4 w-4" aria-hidden="true" />
                        </ExternalLink>
                      )}
                    </div>
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
