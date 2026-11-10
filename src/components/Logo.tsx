import { useState } from 'react'
import { marca } from '../content'

/**
 * Mostra um logo SVG de public/brand/. Se o arquivo não existir,
 * cai para o texto "GUVIX" em Orbitron.
 */
export function Logo({
  src = marca.logoCompacto,
  className = 'h-9',
  alt = marca.nome,
}: {
  src?: string
  className?: string
  alt?: string
}) {
  const [falhou, setFalhou] = useState(false)

  if (falhou) {
    return (
      <span className="font-display text-xl font-extrabold tracking-[0.14em]" role="img" aria-label={marca.nome}>
        <span className="text-metal">GUVI</span>
        <span className="text-gradient">X</span>
      </span>
    )
  }

  return <img src={src} alt={alt} className={`${className} w-auto`} onError={() => setFalhou(true)} />
}
