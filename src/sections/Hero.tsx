import { ArrowRight } from 'lucide-react'
import { hero, INSTAGRAM_LINK, INSTAGRAM_USUARIO, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Icon } from '../components/Icon'

const classeDestaque = {
  ciano: 'text-gradient-ciano',
  violeta: 'text-gradient-violeta',
}

export function Hero() {
  return (
    <section
      id="topo"
      aria-labelledby="hero-titulo"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20 lg:pt-32 lg:pb-28"
    >
      {/* cena completa da marca: astronauta, planeta e asteroides (à direita no desktop, atrás do texto no celular) */}
      <img
        src={marca.heroCena}
        alt=""
        aria-hidden="true"
        width={1672}
        height={941}
        decoding="async"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover object-[62%_center] [mask-image:linear-gradient(180deg,#000_70%,transparent)] lg:left-auto lg:w-[74%] lg:[mask-image:linear-gradient(90deg,transparent,#000_32%),linear-gradient(180deg,#000_72%,transparent)] lg:[mask-composite:intersect]"
      />
      {/* véu só do lado do texto (a cena se dissolve no fundo vivo da página) */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#0b0e2a]/90 via-[#0b0e2a]/70 to-[#0b0e2a]/30 lg:from-[#0b0e2a]/85 lg:via-[#0b0e2a]/35 lg:to-transparent"
      />
      <div aria-hidden="true" className="brilho brilho-violeta top-1/3 -left-40 h-[30rem] w-[30rem]" />

      <div className="shell relative">
        <div className="max-w-2xl xl:max-w-3xl">
          <span className="eyebrow">{hero.selo}</span>

          <h1
            id="hero-titulo"
            className="mt-6 text-[2.2rem] leading-[1.08] font-extrabold sm:text-5xl lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[5rem]"
          >
            {hero.tituloPartes.map((p, i) =>
              p.destaque ? (
                <span key={i} className={`${classeDestaque[p.destaque]} whitespace-nowrap`}>
                  {p.texto}
                </span>
              ) : (
                <span key={i}>{p.texto}</span>
              ),
            )}
          </h1>

          <p className="mt-7 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg xl:text-xl">{hero.subtitulo}</p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-8 py-4 text-lg">
              <WhatsAppIcon className="h-5 w-5" />
              {hero.botaoPrincipal}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ExternalLink>
            <a href="#portfolio" className="btn-secondary bg-midnight/40 px-8 py-4 text-lg backdrop-blur-sm">
              {hero.botaoSecundario}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-7 gap-y-3">
            {hero.selos.map((selo) => (
              <li key={selo.texto} className="flex items-center gap-2 text-sm font-medium text-slate-200 sm:text-[0.95rem]">
                <Icon nome={selo.icone} className="h-5 w-5 text-cyan" />
                {selo.texto}
              </li>
            ))}
          </ul>

          <ExternalLink
            href={INSTAGRAM_LINK}
            className="mt-8 flex items-start gap-2 text-sm font-medium text-slate-300 transition-colors hover:text-cyan sm:inline-flex sm:items-center"
          >
            <InstagramIcon className="mt-0.5 h-4 w-4 shrink-0 text-pink-300 sm:mt-0" />
            <span>
              {hero.instagramTexto}: <span className="font-semibold whitespace-nowrap text-white">{INSTAGRAM_USUARIO}</span>
            </span>
          </ExternalLink>
        </div>
      </div>
    </section>
  )
}
