import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

/**
 * Cabeçalho de seção alinhado à esquerda; no desktop o subtítulo
 * vai para a direita, aproveitando a largura da tela.
 */
export function SectionHeading({
  id,
  selo,
  tituloAntes,
  tituloDestaque,
  subtitulo,
  children,
}: {
  id: string
  selo: string
  tituloAntes: string
  tituloDestaque: string
  subtitulo?: string
  children?: ReactNode
}) {
  return (
    <Reveal className="mb-12 flex flex-col gap-5 lg:mb-16 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
      <div className="max-w-3xl">
        <span className="eyebrow">{selo}</span>
        <h2
          id={id}
          className="mt-5 text-[1.7rem] leading-[1.15] font-bold sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl"
        >
          {tituloAntes}
          <span className="text-gradient whitespace-nowrap">{tituloDestaque}</span>
        </h2>
      </div>
      {(subtitulo || children) && (
        <div className="max-w-md lg:pb-1 lg:text-right">
          {subtitulo && <p className="text-base text-cinza sm:text-lg">{subtitulo}</p>}
          {children}
        </div>
      )}
    </Reveal>
  )
}
