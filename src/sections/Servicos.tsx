import { ArrowRight } from 'lucide-react'
import { marca, PRECO_A_PARTIR_DE, servicos, servicosSecao, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { Icone3D } from '../components/Icone3D'
import { PlanetaBorda } from '../components/PlanetaBorda'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

const coresIcones = [
  'from-cyan via-blue to-[#3b4fd8]',
  'from-blue via-[#3b4fd8] to-violet',
  'from-emerald-400 via-[#1FAF38] to-cyan',
  'from-violet via-[#6d4cf0] to-blue',
]

/** Serviços: 4 cartões verticais com ícone, título, descrição e "Saber mais" (como na referência) */
export function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="relative overflow-hidden bg-cover bg-center py-20 sm:py-28"
      style={{
        backgroundImage: `linear-gradient(180deg, #080d1b 0%, rgb(8 13 27 / 0.84) 15%, rgb(8 13 27 / 0.84) 85%, #080d1b 100%),
          url('${marca.fundoNebula}')`,
      }}
    >
      <PlanetaBorda src={marca.lua2} className="top-1/4 -left-48 hidden w-80 opacity-80 lg:block" />
      <div aria-hidden="true" className="brilho brilho-azul top-24 -right-32 h-[30rem] w-[30rem]" />

      <div className="shell relative">
        <SectionHeading id="servicos-titulo" {...servicosSecao} />

        {PRECO_A_PARTIR_DE && (
          <p className="-mt-6 mb-10 text-lg font-semibold text-white">
            Sites a partir de <span className="text-cyan">{PRECO_A_PARTIR_DE}</span>
          </p>
        )}

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-6">
          {servicos.map((s, i) => (
            <Reveal as="li" key={s.titulo} delay={i * 100} className="flex">
              <article
                className={`card group relative flex w-full flex-col items-center px-6 pt-9 pb-7 text-center hover:-translate-y-1.5 hover:shadow-[0_16px_50px_-14px_rgb(0_212_255/0.55)] ${
                  s.destaque ? 'ring-1 ring-cyan/40' : ''
                }`}
              >
                {s.destaque && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan to-violet px-3 py-1 text-xs font-bold whitespace-nowrap text-midnight">
                    {s.destaque}
                  </span>
                )}
                <Icone3D nome={s.icone} cor={coresIcones[i % coresIcones.length]} tamanho="h-20 w-20" icone="h-10 w-10" />
                <h3 className="mt-5 font-display text-lg leading-snug font-bold text-white">{s.titulo}</h3>
                <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-slate-300">{s.descricao}</p>
                <ExternalLink
                  href={WHATSAPP_LINK}
                  aria-label={`${servicosSecao.botao}: ${s.titulo}`}
                  className="btn-secondary mt-6 px-5 py-2.5 text-sm group-hover:border-cyan"
                >
                  {servicosSecao.botao}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </ExternalLink>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="mt-8 text-sm text-slate-400">{servicosSecao.observacao}</p>
      </div>
    </section>
  )
}
