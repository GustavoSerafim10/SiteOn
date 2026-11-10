import { diferenciais, diferenciaisSecao } from '../content'
import { Icon } from '../components/Icon'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

export function Diferenciais() {
  return (
    <section aria-labelledby="diferenciais-titulo" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="diferenciais-titulo" {...diferenciaisSecao} />

        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diferenciais.map((d, i) => (
            <Reveal as="li" key={d.titulo} delay={i * 100} className="flex">
              <div className="card w-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-cyan/20 to-violet/20 text-cyan">
                  <Icon nome={d.icone} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold">{d.titulo}</h3>
                <p className="mt-2 text-sm leading-relaxed text-cinza">{d.descricao}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
