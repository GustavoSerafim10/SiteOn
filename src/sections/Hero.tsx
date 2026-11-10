import { ArrowRight, Check } from 'lucide-react'
import { hero, INSTAGRAM_LINK, INSTAGRAM_USUARIO, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-36 lg:pt-32 lg:pb-44"
    >
      {/* quadriculado + brilho de canto */}
      <div aria-hidden="true" className="grade" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[44rem] w-[44rem] rounded-full bg-[radial-gradient(circle,rgb(0_212_255/0.38),rgb(139_92_246/0.22)_45%,transparent_70%)] blur-2xl"
      />
      <div aria-hidden="true" className="brilho brilho-violeta top-1/3 -left-40 h-[30rem] w-[30rem]" />
      {/* horizonte de planeta */}
      <div aria-hidden="true" className="planeta top-[calc(100%-90px)] lg:top-[calc(100%-120px)]" />

      <div className="shell relative grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-12 xl:gap-20">
        <div>
          <span className="eyebrow">{hero.selo}</span>

          <h1
            id="hero-titulo"
            className="mt-6 text-[2.15rem] leading-[1.1] font-extrabold sm:text-5xl lg:text-[3.6rem] xl:text-[4.2rem] 2xl:text-[4.9rem]"
          >
            {hero.tituloAntes}
            <span className="text-gradient-vivo whitespace-nowrap">{hero.tituloDestaque}</span>
            {hero.tituloDepois}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg xl:max-w-2xl xl:text-xl">
            {hero.subtitulo}
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-8 py-4 text-lg">
              <WhatsAppIcon className="h-5 w-5" />
              {hero.botaoPrincipal}
            </ExternalLink>
            <a href="#portfolio" className="btn-secondary px-8 py-4 text-lg">
              {hero.botaoSecundario}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {hero.selos.map((selo) => (
              <li key={selo} className="flex items-center gap-2 text-sm font-medium text-slate-300 sm:text-[0.95rem]">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan/15 text-cyan">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" strokeWidth={3} />
                </span>
                {selo}
              </li>
            ))}
          </ul>

          <ExternalLink
            href={INSTAGRAM_LINK}
            className="mt-8 flex items-start gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan sm:inline-flex sm:items-center"
          >
            <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 sm:mt-0" />
            <span>
              {hero.instagramTexto}: <span className="font-semibold whitespace-nowrap text-white">{INSTAGRAM_USUARIO}</span>
            </span>
          </ExternalLink>
        </div>

        {/* cena: o astronauta da marca flutua em direção à lua, como se fosse pegá-la */}
        <div aria-hidden="true" className="relative mx-auto aspect-[1/0.95] w-full max-w-sm sm:max-w-lg lg:max-w-[44rem]">
          {/* brilho atrás da lua */}
          <div className="brilho brilho-violeta top-[2%] right-[4%] h-[60%] w-[60%] opacity-70" />
          <div className="brilho brilho-ciano top-[10%] right-[20%] h-[40%] w-[40%]" />

          <img
            src={marca.lua}
            alt=""
            width={640}
            height={639}
            decoding="async"
            className="cena-lua absolute top-0 right-0 w-[64%]"
          />

          {/* rastro de luz do astronauta até a lua */}
          <div className="absolute top-[40%] left-[38%] h-0.5 w-[26%] origin-left -rotate-[38deg] rounded-full bg-gradient-to-r from-cyan/0 via-cyan/60 to-violet/0 blur-[1px]" />

          <img
            src={marca.astronautaFlutuando}
            alt=""
            width={764}
            height={955}
            decoding="async"
            className="cena-astronauta absolute bottom-0 left-0 w-[52%]"
          />
        </div>
      </div>
    </section>
  )
}
