import { diferenciais, diferenciaisSecao, marca, WHATSAPP_LINK } from '../content'
import { Icon } from '../components/Icon'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

/** Uma cor de destaque por cartão, todas da paleta da marca */
const destaques = [
  { chip: 'from-cyan to-blue', brilho: 'hover:shadow-[0_12px_40px_-12px_rgb(0_212_255/0.55)]' },
  { chip: 'from-blue to-violet', brilho: 'hover:shadow-[0_12px_40px_-12px_rgb(22_119_255/0.55)]' },
  { chip: 'from-violet to-fuchsia-500', brilho: 'hover:shadow-[0_12px_40px_-12px_rgb(139_92_246/0.55)]' },
  { chip: 'from-cyan to-violet', brilho: 'hover:shadow-[0_12px_40px_-12px_rgb(0_212_255/0.45)]' },
]

/** Texto + astronauta da marca à esquerda; grade 2×2 de diferenciais à direita */
export function Diferenciais() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="relative overflow-hidden py-20 sm:py-28">
      <div aria-hidden="true" className="brilho brilho-ciano top-1/3 -left-24 h-[30rem] w-[30rem]" />

      <div className="shell relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 xl:gap-24">
        <Reveal className="relative">
          <span className="eyebrow">{diferenciaisSecao.selo}</span>
          <h2
            id="diferenciais-titulo"
            className="mt-5 text-[1.7rem] leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl"
          >
            {diferenciaisSecao.tituloAntes}
            <span className="text-gradient-vivo whitespace-nowrap">{diferenciaisSecao.tituloDestaque}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{diferenciaisSecao.texto}</p>
          <ExternalLink href={WHATSAPP_LINK} className="btn-primary mt-9 px-7 py-4 text-lg">
            <WhatsAppIcon className="h-5 w-5" />
            {diferenciaisSecao.botao}
          </ExternalLink>

          {/* astronauta da identidade visual, com bordas esfumadas */}
          <div className="relative mt-10 hidden max-w-md lg:block">
            <div aria-hidden="true" className="brilho brilho-violeta inset-6" />
            <img
              src={marca.astronauta}
              alt=""
              aria-hidden="true"
              width={485}
              height={532}
              loading="lazy"
              decoding="async"
              className="relative w-full [mask-image:radial-gradient(ellipse_50%_50%_at_50%_48%,#000_55%,transparent_100%)]"
            />
          </div>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 xl:gap-6">
          {diferenciais.map((d, i) => {
            const cor = destaques[i % destaques.length]
            return (
              <Reveal as="li" key={d.titulo} delay={i * 100} className={`flex ${i % 2 === 1 ? 'sm:mt-10' : ''}`}>
                <div className={`card w-full p-7 hover:-translate-y-1 sm:p-9 ${cor.brilho}`}>
                  <span
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${cor.chip}`}
                  >
                    <Icon nome={d.icone} className="h-7 w-7" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold">{d.titulo}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slate-300">{d.descricao}</p>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
