import { ArrowRight, Check } from 'lucide-react'
import { hero, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'
import { DeviceMockup } from '../components/DeviceMockup'

export function Hero() {
  return (
    <section id="topo" aria-labelledby="hero-titulo" className="relative pt-32 pb-20 sm:pt-36 lg:pt-44 lg:pb-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <span className="eyebrow">{hero.selo}</span>

          <h1
            id="hero-titulo"
            className="mt-5 text-[2rem] leading-[1.15] font-extrabold sm:text-5xl lg:text-[3.4rem]"
          >
            {hero.tituloAntes}
            <span className="text-gradient">{hero.tituloDestaque}</span>
            {hero.tituloDepois}
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-cinza sm:text-lg lg:mx-0">
            {hero.subtitulo}
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-7 py-4 text-lg">
              <WhatsAppIcon className="h-5 w-5" />
              {hero.botaoPrincipal}
            </ExternalLink>
            <a href="#portfolio" className="btn-secondary px-7 py-4 text-lg">
              {hero.botaoSecundario}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-9 flex flex-wrap justify-center gap-x-6 gap-y-3 lg:justify-start">
            {hero.selos.map((selo) => (
              <li key={selo} className="flex items-center gap-2 text-sm font-medium text-slate-300">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                </span>
                {selo}
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden lg:block">
          <DeviceMockup />
        </div>
      </div>
    </section>
  )
}
