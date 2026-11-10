import { useState } from 'react'
import { marca } from '../content'

/**
 * Mostra o logo SVG de public/brand/. Se o arquivo ainda não existir,
 * cai para o texto "GUVIX" em Orbitron.
 */
export function Logo({ src = marca.logoHorizontal, className = 'h-8' }: { src?: string; className?: string }) {
  const [falhou, setFalhou] = useState(false)

  if (falhou) {
    return (
      <span className="font-display text-xl font-extrabold tracking-[0.2em] text-white">
        GUV<span className="text-gradient">IX</span>
      </span>
    )
  }

  return <img src={src} alt={marca.nome} className={`${className} w-auto`} onError={() => setFalhou(true)} />
}
