import { ArrowRight } from 'lucide-react'
import { diferenciais, diferenciaisSecao, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'

const cores = [
  { icone: 'text-cyan', brilho: 'hover:shadow-[0_14px_44px_-12px_rgb(0_212_255/0.55)]' },
  { icone: 'text-violet', brilho: 'hover:shadow-[0_14px_44px_-12px_rgb(139_92_246/0.6)]' },
  { icone: 'text-blue', brilho: 'hover:shadow-[0_14px_44px_-12px_rgb(22_119_255/0.6)]' },
  { icone: 'text-fuchsia-400', brilho: 'hover:shadow-[0_14px_44px_-12px_rgb(192_132_252/0.55)]' },
]

/** Diferenciais: texto, botão e notebook holográfico à esquerda; 4 cartões à direita */
export function Diferenciais() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-ciano top-1/3 -left-24 h-[30rem] w-[30rem]" />
      <div aria-hidden="true" className="brilho brilho-violeta -right-24 bottom-0 h-[26rem] w-[26rem]" />

      <div className="shell relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-14 xl:gap-20">
        <Reveal>
          <span className="eyebrow">{diferenciaisSecao.selo}</span>
          <h2
            id="diferenciais-titulo"
            className="mt-5 text-[1.9rem] leading-[1.12] font-extrabold sm:text-4xl lg:text-[2.9rem] 2xl:text-[3.3rem]"
          >
            {diferenciaisSecao.tituloAntes}
            <span className="text-gradient-vivo">{diferenciaisSecao.tituloDestaque}</span>
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{diferenciaisSecao.texto}</p>
          <ExternalLink href={WHATSAPP_LINK} className="btn-primary mt-8 px-7 py-4 text-lg">
            <WhatsAppIcon className="h-5 w-5" />
            {diferenciaisSecao.botao}
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </ExternalLink>

          {/* notebook holográfico com o símbolo G/X (arte da marca), bordas esfumadas */}
          <img
            src={marca.diferenciaisNotebook}
            alt=""
            aria-hidden="true"
            width={740}
            height={410}
            loading="lazy"
            decoding="async"
            className="mt-8 w-full max-w-2xl [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_62%,transparent_100%)]"
          />
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2">
          {diferenciais.map((d, i) => {
            const cor = cores[i % cores.length]
            return (
              <Reveal as="li" key={d.titulo} delay={i * 90} className="flex">
                <div className={`card w-full p-6 hover:-translate-y-1 sm:p-7 ${cor.brilho}`}>
                  <Icon nome={d.icone} className={`h-9 w-9 drop-shadow-[0_0_10px_currentColor] ${cor.icone}`} />
                  <h3 className="mt-5 font-display text-base leading-snug font-bold text-white sm:text-lg">{d.titulo}</h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">{d.descricao}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
