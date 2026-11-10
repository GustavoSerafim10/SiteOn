import { Icon } from './Icon'
import type { IconeNome } from '../content'

/**
 * Ícone com aparência "3D": bloco em degradê com reflexo, borda clara,
 * brilho e uma base de luz embaixo (como nas artes da GUVIX).
 */
export function Icone3D({
  nome,
  cor = 'from-blue via-[#3b4fd8] to-violet',
  tamanho = 'h-16 w-16',
  icone = 'h-8 w-8',
}: {
  nome: IconeNome
  cor?: string
  tamanho?: string
  icone?: string
}) {
  return (
    <span aria-hidden="true" className="relative inline-flex shrink-0 flex-col items-center">
      <span
        className={`relative z-10 flex items-center justify-center rounded-2xl bg-gradient-to-br text-white shadow-[0_12px_30px_-6px_rgb(22_119_255/0.75),inset_0_1px_0_rgb(255_255_255/0.4),inset_0_-6px_12px_rgb(8_13_27/0.35)] ring-1 ring-white/25 transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[-4deg] ${tamanho} ${cor}`}
      >
        <span className="absolute inset-x-2 top-1 h-1/2 rounded-t-xl bg-gradient-to-b from-white/30 to-transparent" />
        <Icon nome={nome} className={`relative drop-shadow-[0_0_10px_rgb(0_212_255/0.9)] ${icone}`} />
      </span>
      {/* base de luz */}
      <span className="-mt-2 h-4 w-[130%] rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgb(0_212_255/0.6),transparent_70%)] blur-[2px]" />
    </span>
  )
}
