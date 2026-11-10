import { diferenciais, diferenciaisSecao, WHATSAPP_LINK } from '../content'
import { Icon } from '../components/Icon'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

/** Layout dividido: texto à esquerda, grade 2×2 à direita */
export function Diferenciais() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="relative py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16 xl:gap-24">
        <Reveal>
          <span className="eyebrow">{diferenciaisSecao.selo}</span>
          <h2
            id="diferenciais-titulo"
            className="mt-5 text-[1.7rem] leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl"
          >
            {diferenciaisSecao.tituloAntes}
            <span className="text-gradient whitespace-nowrap">{diferenciaisSecao.tituloDestaque}</span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">{diferenciaisSecao.texto}</p>
          <ExternalLink href={WHATSAPP_LINK} className="btn-primary mt-9 px-7 py-4 text-lg">
            <WhatsAppIcon className="h-5 w-5" />
            {diferenciaisSecao.botao}
          </ExternalLink>
        </Reveal>

        <ul className="grid gap-5 sm:grid-cols-2 xl:gap-6">
          {diferenciais.map((d, i) => (
            <Reveal as="li" key={d.titulo} delay={i * 100} className="flex">
              <div className="card w-full p-6 sm:p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                  <Icon nome={d.icone} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-bold">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300 sm:text-base">{d.descricao}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
