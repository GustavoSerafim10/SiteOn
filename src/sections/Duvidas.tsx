import { ChevronDown } from 'lucide-react'
import { duvidas, duvidasSecao, INSTAGRAM_LINK, INSTAGRAM_USUARIO, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { PlanetaBorda } from '../components/PlanetaBorda'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

/** Acordeão nativo com <details>/<summary>: acessível por teclado e leitor de tela. */
export function Duvidas() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="relative overflow-x-clip py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-violeta top-10 -right-40 h-[30rem] w-[30rem]" />
      <div aria-hidden="true" className="brilho brilho-ciano bottom-10 -left-40 h-[24rem] w-[24rem]" />
      <PlanetaBorda src={marca.lua} className="-bottom-24 -left-44 hidden w-[22rem] opacity-70 lg:block" />
      <div className="shell relative grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16 xl:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <span className="eyebrow">{duvidasSecao.selo}</span>
          <h2
            id="duvidas-titulo"
            className="mt-5 text-[1.7rem] leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl"
          >
            {duvidasSecao.tituloAntes}
            <span className="text-gradient whitespace-nowrap">{duvidasSecao.tituloDestaque}</span>
          </h2>
          <p className="mt-4 text-base text-slate-300 sm:text-lg">{duvidasSecao.subtitulo}</p>

          <div className="card mt-10 hidden p-7 lg:block">
            <p className="font-display text-base font-bold text-white">{duvidasSecao.ajudaTitulo}</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">{duvidasSecao.ajudaTexto}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-5 py-3 text-sm">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </ExternalLink>
              <ExternalLink href={INSTAGRAM_LINK} className="btn-secondary px-5 py-3 text-sm">
                <InstagramIcon className="h-4 w-4" />
                {INSTAGRAM_USUARIO}
              </ExternalLink>
            </div>
          </div>
        </Reveal>

        <Reveal className="space-y-3">
          {duvidas.map((d) => (
            <details key={d.pergunta} className="card group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-5 py-5 text-left font-semibold text-white sm:px-7 sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{d.pergunta}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-cyan transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-6 text-sm leading-relaxed text-slate-300 sm:px-7 sm:text-base">{d.resposta}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
