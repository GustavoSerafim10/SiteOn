import { Check } from 'lucide-react'
import { PRECO_A_PARTIR_DE, servicos, servicosSecao, WHATSAPP_LINK } from '../content'
import { Icon } from '../components/Icon'
import { ExternalLink } from '../components/ExternalLink'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Servicos() {
  return (
    <section id="servicos" aria-labelledby="servicos-titulo" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="servicos-titulo" {...servicosSecao} />

        {PRECO_A_PARTIR_DE && (
          <p className="-mt-6 mb-10 text-center text-lg font-semibold text-white">
            Sites a partir de <span className="text-cyan">{PRECO_A_PARTIR_DE}</span>
          </p>
        )}

        <ul className="mx-auto grid max-w-xl gap-6 lg:max-w-none lg:grid-cols-3">
          {servicos.map((s, i) => (
            <Reveal as="li" key={s.titulo} delay={i * 100} className="flex">
              <article
                className={`card flex w-full flex-col p-6 sm:p-7 ${s.destaque ? 'lg:-translate-y-2 ring-1 ring-cyan/40' : ''}`}
              >
                {s.destaque && (
                  <span className="absolute -top-3 left-6 rounded-full bg-gradient-to-r from-cyan to-violet px-3 py-1 text-xs font-bold text-midnight">
                    {s.destaque}
                  </span>
                )}

                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                  <Icon nome={s.icone} className="h-6 w-6" />
                </span>

                <h3 className="mt-5 text-lg leading-snug font-bold">{s.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cinza">{s.descricao}</p>

                <ul className="mt-5 mb-7 space-y-2.5">
                  {s.inclui.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-slate-200">
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

        <p className="mt-10 text-center text-sm text-cinza">{servicosSecao.observacao}</p>
      </div>
    </section>
  )
}
