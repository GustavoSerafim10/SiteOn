import { processo, processoSecao } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Processo() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="processo-titulo" {...processoSecao} />

        <ol className="relative grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* linha do tempo: vertical no celular, horizontal no desktop */}
          <span
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-6 w-px bg-gradient-to-b from-cyan via-blue to-violet lg:top-6 lg:right-[12.5%] lg:bottom-auto lg:left-[12.5%] lg:h-px lg:w-auto lg:bg-gradient-to-r"
          />
          {processo.map((passo, i) => (
            <Reveal
              as="li"
              key={passo.titulo}
              delay={i * 120}
              className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center"
            >
              <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan/50 bg-midnight font-display text-base font-bold text-cyan shadow-[0_0_24px_-6px_rgb(0_212_255/0.6)]">
                {i + 1}
              </span>
              <div className="pt-1.5 lg:pt-0">
                <h3 className="text-lg font-bold">{passo.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cinza lg:mx-auto lg:max-w-[15rem]">
                  {passo.descricao}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
