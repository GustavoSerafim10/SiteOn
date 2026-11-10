import { useRef } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { exemplos, exemplosSecao, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { PlanetaBorda } from '../components/PlanetaBorda'
import { Reveal } from '../components/Reveal'

/**
 * Painel "Exemplos": estilos de site ILUSTRATIVOS (não são clientes nem cases).
 * Os projetos reais ficam na seção Portfólio.
 */
export function Exemplos() {
  const trilho = useRef<HTMLUListElement>(null)
  const mover = (direcao: 1 | -1) => {
    const el = trilho.current
    if (!el) return
    const cartao = el.querySelector('li')
    el.scrollBy({ left: (cartao ? cartao.getBoundingClientRect().width + 20 : 300) * direcao, behavior: 'smooth' })
  }
  const seta =
    'flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:border-cyan hover:text-cyan'

  return (
    <section aria-labelledby="exemplos-titulo" className="relative overflow-hidden py-14 sm:py-20">
      <PlanetaBorda src={marca.lua2} className="top-0 -right-32 hidden w-72 opacity-70 lg:block" />
      <div aria-hidden="true" className="brilho brilho-violeta -top-20 right-1/4 h-[24rem] w-[24rem]" />

      <div className="shell relative">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-navy/40 p-6 shadow-[0_0_60px_-20px_rgb(22_119_255/0.6)] backdrop-blur-md sm:p-10">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="eyebrow">{exemplosSecao.selo}</span>
              <h2 id="exemplos-titulo" className="mt-4 text-3xl leading-tight font-extrabold sm:text-4xl lg:text-[2.75rem]">
                {exemplosSecao.tituloAntes}
                <span className="text-gradient-vivo">{exemplosSecao.tituloDestaque}</span>
              </h2>
              <p className="mt-3 text-base text-slate-300 sm:text-lg">{exemplosSecao.subtitulo}</p>
            </div>
            <div className="flex gap-3 xl:hidden">
              <button type="button" aria-label="Exemplo anterior" aria-controls="exemplos-trilho" onClick={() => mover(-1)} className={seta}>
                <ArrowLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" aria-label="Próximo exemplo" aria-controls="exemplos-trilho" onClick={() => mover(1)} className={seta}>
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>

          <ul
            id="exemplos-trilho"
            ref={trilho}
            tabIndex={0}
            aria-label="Estilos de site (role para os lados)"
            className="-mx-2 mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-2 pt-1 pb-3 [scrollbar-width:none] xl:grid xl:grid-cols-4 xl:overflow-visible [&::-webkit-scrollbar]:hidden"
          >
            {exemplos.map((ex, i) => (
              <Reveal as="li" key={ex.titulo} delay={i * 90} className="w-[78%] shrink-0 snap-start sm:w-[45%] lg:w-[31%] xl:w-auto">
                <article className="card group overflow-hidden hover:-translate-y-1 hover:shadow-[0_14px_44px_-12px_rgb(139_92_246/0.6)]">
                  <div className="aspect-[358/200] overflow-hidden border-b border-white/10">
                    <img
                      src={ex.imagem}
                      alt={`Ilustração de um ${ex.titulo}`}
                      width={358}
                      height={200}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 p-5">
                    <div>
                      <h3 className="font-display text-base font-bold text-white">{ex.titulo}</h3>
                      <p className="mt-1 text-sm text-slate-300">{ex.descricao}</p>
                    </div>
                    <ExternalLink
                      href={WHATSAPP_LINK}
                      aria-label={`Quero um site no estilo ${ex.titulo}`}
                      title="Quero um site neste estilo"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-all group-hover:border-cyan group-hover:bg-cyan/10 group-hover:text-cyan"
                    >
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </ExternalLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
