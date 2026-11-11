import { Check } from 'lucide-react'
import { chamadaFinal, INSTAGRAM_LINK, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

/** "Vamos começar?": faixa de ponta a ponta, texto à esquerda e close do astronauta saindo pela direita */
export function ChamadaFinal() {
  return (
    <section
      aria-labelledby="cta-titulo"
      className="relative overflow-hidden"
    >
      {/* fundo próprio, dissolvido em cima e embaixo para não ter emenda com as seções vizinhas */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-cover bg-center [mask-image:linear-gradient(180deg,transparent,#000_18%,#000_82%,transparent)]"
        style={{
          // véu à esquerda só o suficiente para o texto; nebulosa viva no resto
          backgroundImage: `linear-gradient(90deg, rgb(10 12 40 / 0.85) 0%, rgb(10 12 40 / 0.55) 45%, rgb(10 12 40 / 0.1) 100%),
            url('${marca.fundoNebula}')`,
        }}
      />
      <div aria-hidden="true" className="grade opacity-30" />
      <div aria-hidden="true" className="brilho brilho-ciano -top-32 left-10 h-80 w-80" />

      {/* close do astronauta, esfumado à esquerda e embaixo para se fundir ao fundo */}
      <img
        src={marca.astronautaCloseup}
        alt=""
        aria-hidden="true"
        width={445}
        height={362}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-y-0 right-0 hidden h-full w-[50%] object-cover object-[72%_center] [mask-image:linear-gradient(90deg,transparent,#000_35%),linear-gradient(180deg,transparent,#000_22%,#000_80%,transparent)] [mask-composite:intersect] lg:block"
      />

      <Reveal className="shell relative py-20 sm:py-28 lg:py-32">
        <div className="max-w-2xl">
          <span className="eyebrow">{chamadaFinal.selo}</span>
          <h2
            id="cta-titulo"
            className="mt-5 text-[1.9rem] leading-[1.12] font-bold sm:text-5xl lg:text-[3.2rem] 2xl:text-[3.8rem]"
          >
            {chamadaFinal.tituloAntes}
            <span className="text-gradient-vivo whitespace-nowrap">{chamadaFinal.tituloDestaque}</span>
            {chamadaFinal.tituloDepois}
          </h2>
          <p className="mt-5 text-base text-slate-300 sm:text-xl">{chamadaFinal.subtitulo}</p>

          <ul className="mt-8 space-y-3.5">
            {chamadaFinal.garantias.map((g) => (
              <li key={g} className="flex items-center gap-3.5 text-base font-medium text-white sm:text-lg">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-cyan to-blue text-midnight">
                  <Check className="h-4 w-4" aria-hidden="true" strokeWidth={3.5} />
                </span>
                {g}
              </li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl">
              <WhatsAppIcon className="h-6 w-6" />
              {chamadaFinal.botao}
            </ExternalLink>
            <ExternalLink href={INSTAGRAM_LINK} className="btn-instagram px-8 py-4 text-lg sm:py-5">
              <InstagramIcon className="h-5 w-5" />
              {chamadaFinal.botaoInstagram}
            </ExternalLink>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
