import { ArrowRight } from 'lucide-react'
import { beneficios, marca, PRECO_A_PARTIR_DE, servicos, servicosSecao, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'
import { Icon } from '../components/Icon'
import { Icone3D } from '../components/Icone3D'
import { LaptopHolografico } from '../components/LaptopHolografico'
import { PlanetaBorda } from '../components/PlanetaBorda'
import { Reveal } from '../components/Reveal'

/** Cores dos ícones, alternando pela paleta da marca */
const coresIcones = [
  'from-cyan via-blue to-[#3b4fd8]',
  'from-blue via-[#3b4fd8] to-violet',
  'from-emerald-400 via-[#1FAF38] to-cyan',
  'from-violet via-[#6d4cf0] to-blue',
  'from-cyan via-blue to-violet',
  'from-violet via-fuchsia-500 to-blue',
]

/** Tela do notebook: a marca GUVIX sobre o espaço */
function TelaMarca() {
  return (
    <div className="flex h-full items-center justify-center bg-[radial-gradient(ellipse_at_30%_20%,#1d2f66,#080d1b_70%)] p-[8%]">
      <img src={marca.logoHorizontal} alt="" className="w-full drop-shadow-[0_0_24px_rgb(0_212_255/0.45)]" />
    </div>
  )
}

/**
 * Serviços (como na referência): título, botão e notebook com a marca à esquerda;
 * 6 cartões à direita; faixa de benefícios reais embaixo.
 */
export function Servicos() {
  return (
    <section
      id="servicos"
      aria-labelledby="servicos-titulo"
      className="relative overflow-hidden bg-cover bg-center py-20 sm:py-28"
      style={{
        backgroundImage: `linear-gradient(180deg, #080d1b 0%, rgb(8 13 27 / 0.82) 14%, rgb(8 13 27 / 0.82) 86%, #080d1b 100%),
          url('${marca.fundoNebula}')`,
      }}
    >
      <div aria-hidden="true" className="brilho brilho-azul top-24 -right-32 h-[32rem] w-[32rem]" />
      <div aria-hidden="true" className="brilho brilho-violeta bottom-20 -left-40 h-[26rem] w-[26rem]" />
      <PlanetaBorda src={marca.lua2} className="top-10 -left-40 hidden w-72 opacity-70 lg:block" />
      <PlanetaBorda src={marca.lua} className="-top-32 -right-32 hidden w-80 opacity-60 lg:block" />

      <div className="shell relative">
        <div className="grid items-center gap-14 xl:grid-cols-[0.85fr_1.15fr] xl:gap-14">
          {/* ---------- Esquerda: título + notebook ---------- */}
          <Reveal>
            <span className="eyebrow">{servicosSecao.selo}</span>
            <h2
              id="servicos-titulo"
              className="mt-5 text-[1.9rem] leading-[1.1] font-extrabold sm:text-5xl xl:text-[3.2rem] 2xl:text-[3.6rem]"
            >
              {servicosSecao.tituloAntes}
              <span className="text-gradient-vivo whitespace-nowrap">{servicosSecao.tituloDestaque}</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{servicosSecao.subtitulo}</p>
            {PRECO_A_PARTIR_DE && (
              <p className="mt-4 text-lg font-semibold text-white">
                Sites a partir de <span className="text-cyan">{PRECO_A_PARTIR_DE}</span>
              </p>
            )}
            <ExternalLink href={WHATSAPP_LINK} className="btn-primary mt-8 px-7 py-4 text-lg">
              <WhatsAppIcon className="h-5 w-5" />
              {servicosSecao.botaoPrincipal}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </ExternalLink>

            <LaptopHolografico tela={<TelaMarca />} className="mt-12 hidden max-w-xl sm:block" />
          </Reveal>

          {/* ---------- Direita: 6 cartões ---------- */}
          <ul className="grid gap-5 sm:grid-cols-2">
            {servicos.map((s, i) => (
              <Reveal as="li" key={s.titulo} delay={(i % 2) * 90 + Math.floor(i / 2) * 60} className="flex">
                <article
                  className={`card group relative flex w-full items-start gap-5 p-6 hover:-translate-y-1 hover:shadow-[0_14px_44px_-12px_rgb(139_92_246/0.6)] ${
                    s.destaque ? 'ring-1 ring-cyan/40' : ''
                  }`}
                >
                  {s.destaque && (
                    <span className="absolute -top-3 right-5 rounded-full bg-gradient-to-r from-cyan to-violet px-3 py-1 text-xs font-bold text-midnight">
                      {s.destaque}
                    </span>
                  )}
                  <Icone3D nome={s.icone} cor={coresIcones[i % coresIcones.length]} />

                  <div className="flex min-h-full flex-1 flex-col">
                    <h3 className="font-display text-base leading-snug font-bold text-white sm:text-lg">{s.titulo}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">{s.descricao}</p>
                    <ExternalLink
                      href={WHATSAPP_LINK}
                      aria-label={`${servicosSecao.botao}: ${s.titulo}`}
                      title={servicosSecao.botao}
                      className="mt-4 flex h-10 w-10 items-center justify-center self-end rounded-full border border-white/30 text-white transition-all group-hover:border-cyan group-hover:bg-cyan/10 group-hover:text-cyan hover:translate-x-0.5"
                    >
                      <ArrowRight className="h-5 w-5" aria-hidden="true" />
                    </ExternalLink>
                  </div>
                </article>
              </Reveal>
            ))}
          </ul>
        </div>

        {/* ---------- Faixa de benefícios ---------- */}
        <Reveal className="mt-14 rounded-3xl border border-white/15 bg-navy/50 shadow-[0_0_40px_-12px_rgb(22_119_255/0.5)] backdrop-blur-sm">
          <ul className="grid divide-white/10 sm:grid-cols-2 lg:grid-cols-4 lg:divide-x">
            {beneficios.map((b) => (
              <li key={b.titulo} className="flex items-center gap-4 px-6 py-6 sm:px-7">
                <Icon nome={b.icone} className="h-9 w-9 shrink-0 text-cyan drop-shadow-[0_0_10px_rgb(0_212_255/0.7)]" />
                <div>
                  <p className="font-display text-sm font-bold text-white sm:text-[0.95rem]">{b.titulo}</p>
                  <p className="mt-1 text-sm text-slate-300">{b.descricao}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 text-sm text-slate-400">{servicosSecao.observacao}</p>
      </div>
    </section>
  )
}
