import { Check } from 'lucide-react'
import { chamadaFinal, INSTAGRAM_LINK, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

/** "Vamos começar?": cartão com chamada à esquerda e garantias à direita */
export function ChamadaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="relative overflow-hidden pt-16 pb-40 sm:pt-20 sm:pb-48">
      <div aria-hidden="true" className="planeta top-[calc(100%-110px)]" />

      <div className="shell relative">
        <Reveal className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-navy via-navy-deep to-midnight p-7 sm:p-12 xl:p-16">
          <div aria-hidden="true" className="grade opacity-70" />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-cyan/20 blur-3xl"
          />
          <img
            src={marca.simbolo}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -bottom-44 hidden w-[26rem] opacity-[0.08] xl:block"
          />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center lg:gap-16">
            <div>
              <span className="eyebrow">{chamadaFinal.selo}</span>
              <h2
                id="cta-titulo"
                className="mt-5 text-[1.9rem] leading-[1.12] font-bold sm:text-5xl lg:text-[3.2rem] 2xl:text-[3.8rem]"
              >
                {chamadaFinal.tituloAntes}
                <span className="text-gradient-vivo whitespace-nowrap">{chamadaFinal.tituloDestaque}</span>
                {chamadaFinal.tituloDepois}
              </h2>
              <p className="mt-5 max-w-2xl text-base text-slate-300 sm:text-xl">{chamadaFinal.subtitulo}</p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl">
                  <WhatsAppIcon className="h-6 w-6" />
                  {chamadaFinal.botao}
                </ExternalLink>
                <ExternalLink href={INSTAGRAM_LINK} className="btn-secondary px-8 py-4 text-lg sm:py-5">
                  <InstagramIcon className="h-5 w-5" />
                  {chamadaFinal.botaoInstagram}
                </ExternalLink>
              </div>
            </div>

            <ul className="space-y-5 lg:border-l lg:border-white/10 lg:pl-12">
              {chamadaFinal.garantias.map((g) => (
                <li key={g} className="flex items-center gap-4 text-base font-medium text-white sm:text-lg">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-blue text-midnight">
                    <Check className="h-4 w-4" aria-hidden="true" strokeWidth={3.5} />
                  </span>
                  {g}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
