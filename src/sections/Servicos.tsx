import { ArrowRight, Check } from 'lucide-react'
import { PRECO_A_PARTIR_DE, servicos, servicosSecao, WHATSAPP_LINK } from '../content'
import { Icon } from '../components/Icon'
import { ExternalLink } from '../components/ExternalLink'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Servicos() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-azul top-24 -right-32 h-[32rem] w-[32rem]" />
      <div aria-hidden="true" className="brilho brilho-violeta bottom-0 -left-40 h-[26rem] w-[26rem]" />
      <div className="shell relative">
        <SectionHeading id="servicos-titulo" {...servicosSecao} />

        {PRECO_A_PARTIR_DE && (
          <p className="-mt-6 mb-10 text-lg font-semibold text-white">
            Sites a partir de <span className="text-cyan">{PRECO_A_PARTIR_DE}</span>
          </p>
        )}

        <ul className="grid gap-6 lg:grid-cols-3 xl:gap-8">
          {servicos.map((s, i) => (
            <Reveal as="li" key={s.titulo} delay={i * 100} className="flex">
              <article
                className={`card group flex w-full flex-col p-6 sm:p-8 2xl:p-10 ${
                  s.destaque ? 'ring-1 ring-cyan/40 lg:-translate-y-2 lg:hover:-translate-y-3' : 'hover:-translate-y-1'
                }`}
              >
                {s.destaque && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-cyan to-violet px-3 py-1 text-xs font-bold text-midnight">
                    {s.destaque}
                  </span>
                )}

                <div className="flex items-center justify-between gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/25 to-violet/25 text-cyan">
                    <Icon nome={s.icone} className="h-6 w-6" />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 py-1 pr-3 pl-1 text-xs font-semibold text-white">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/20 transition-transform group-hover:translate-x-0.5">
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </span>
                    {s.etiqueta}
                  </span>
                </div>

                <h3 className="mt-6 text-xl leading-snug font-bold 2xl:text-2xl">{s.titulo}</h3>
                <p className="mt-3 text-base leading-relaxed text-slate-300">{s.descricao}</p>

                <ul className="mt-6 mb-8 space-y-3">
                  {s.inclui.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.95rem] text-slate-100">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" aria-hidden="true" strokeWidth={3} />
                      {item}
                    </li>
                  ))}
                </ul>

                <ExternalLink
                  href={WHATSAPP_LINK}
                  className={`${s.destaque ? 'btn-primary' : 'btn-secondary'} mt-auto w-full px-5 py-3 text-base`}
                  aria-label={`${servicosSecao.botao}: ${s.titulo}`}
                >
                  {servicosSecao.botao}
                </ExternalLink>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-10 text-sm text-slate-400">{servicosSecao.observacao}</p>
      </div>
    </section>
  )
}
