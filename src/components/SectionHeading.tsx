import { Reveal } from './Reveal'

export function SectionHeading({
  id,
  selo,
  tituloAntes,
  tituloDestaque,
  subtitulo,
}: {
  id: string
  selo: string
  tituloAntes: string
  tituloDestaque: string
  subtitulo?: string
}) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <span className="eyebrow">{selo}</span>
      <h2 id={id} className="mt-4 text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl">
        {tituloAntes}
        <span className="text-gradient whitespace-nowrap">{tituloDestaque}</span>
      </h2>
      {subtitulo && <p className="mt-4 text-base text-cinza sm:text-lg">{subtitulo}</p>}
    </Reveal>
  )
}
