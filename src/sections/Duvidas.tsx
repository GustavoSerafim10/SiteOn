import { ChevronDown } from 'lucide-react'
import { duvidas, duvidasSecao } from '../content'
import { Reveal } from '../components/Reveal'
import { SectionHeading } from '../components/SectionHeading'

/** Acordeão nativo com <details>/<summary>: acessível por teclado e leitor de tela. */
export function Duvidas() {
  return (
    <section id="duvidas" aria-labelledby="duvidas-titulo" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionHeading id="duvidas-titulo" {...duvidasSecao} />

        <Reveal className="space-y-3">
          {duvidas.map((d) => (
            <details key={d.pergunta} className="card group">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-[1.25rem] px-5 py-4 text-left font-semibold text-white sm:px-6 sm:py-5 [&::-webkit-details-marker]:hidden">
                <span>{d.pergunta}</span>
                <ChevronDown
                  className="h-5 w-5 shrink-0 text-cyan transition-transform duration-200 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-cinza sm:px-6 sm:text-base">{d.resposta}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
