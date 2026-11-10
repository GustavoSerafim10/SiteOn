import { processo, processoSecao } from '../content'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

/** Linha do tempo: nós brilhantes ligados por um traço em degradê */
export function Processo() {
  return (
    <section id="processo" aria-labelledby="processo-titulo" className="band relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-azul -top-32 left-1/4 h-[28rem] w-[28rem]" />
      <div aria-hidden="true" className="brilho brilho-violeta -right-32 bottom-0 h-[26rem] w-[26rem]" />

      <div className="shell relative">
        <SectionHeading id="processo-titulo" {...processoSecao} />

        <ol className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {/* traço que liga os passos (desktop) */}
          <span
            aria-hidden="true"
            className="absolute top-8 right-[12%] left-[12%] hidden h-0.5 rounded-full bg-gradient-to-r from-cyan via-blue to-violet opacity-70 shadow-[0_0_14px_rgb(0_212_255/0.6)] lg:block"
          />

          {processo.map((passo, i) => (
            <Reveal as="li" key={passo.titulo} delay={i * 120} className="relative flex flex-col">
              {/* nó da linha do tempo */}
              <div className="relative z-10 mx-auto mb-6 hidden lg:block">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-cyan via-blue to-violet p-[2px] shadow-[0_0_30px_-4px_rgb(0_212_255/0.7)]">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-midnight text-cyan">
                    <Icon nome={passo.icone} className="h-6 w-6" />
                  </span>
                </span>
              </div>

              <div className="card flex-1 p-6 hover:-translate-y-1 sm:p-8">
                <div className="flex items-center justify-between">
                  <span className="text-gradient font-display text-5xl leading-none font-extrabold">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/25 to-violet/25 text-cyan lg:hidden">
                    <Icon nome={passo.icone} className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-bold">{passo.titulo}</h3>
                <p className="mt-2 text-base leading-relaxed text-slate-300">{passo.descricao}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
