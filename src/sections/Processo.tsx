import { processo, processoSecao } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Processo() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="band relative py-20 sm:py-28">
      <div className="shell">
        <SectionHeading id="processo-titulo" {...processoSecao} />

        <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {processo.map((passo, i) => (
            <Reveal as="li" key={passo.titulo} delay={i * 120} className="relative flex">
              <div className="card w-full p-6 sm:p-8">
                <div className="flex items-center gap-4">
                  <span className="font-display text-4xl font-extrabold text-transparent [-webkit-text-stroke:1px_rgb(0_212_255/0.7)] sm:text-5xl">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {/* conector até o próximo passo (desktop) */}
                  {i < processo.length - 1 && (
                    <span
                      aria-hidden="true"
                      className="hidden h-px flex-1 bg-gradient-to-r from-cyan/60 to-transparent lg:block"
                    />
                  )}
                </div>
                <h3 className="mt-6 text-lg font-bold sm:text-xl">{passo.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cinza sm:text-base">{passo.descricao}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
