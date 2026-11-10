/**
 * Planeta/lua decorativo, parcialmente fora da seção (como nas artes da marca).
 * Posição e tamanho vêm por className (ex.: "-left-40 top-10 w-80").
 */
export function PlanetaBorda({ src, className = '' }: { src: string; className?: string }) {
  return (
    <img
      src={src}
      alt=""
      aria-hidden="true"
      loading="lazy"
      decoding="async"
      className={`pointer-events-none absolute select-none drop-shadow-[0_0_60px_rgb(139_92_246/0.35)] ${className}`}
    />
  )
}
