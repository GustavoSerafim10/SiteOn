import type { ReactNode } from 'react'

/**
 * Notebook (e celular opcional) sobre uma plataforma de anéis de luz,
 * com uma órbita inclinada em volta, como nas artes da GUVIX.
 * Puramente decorativo (aria-hidden). O conteúdo das telas vem por props.
 */
export function LaptopHolografico({
  tela,
  telaCelular,
  className = '',
}: {
  tela: ReactNode
  telaCelular?: ReactNode
  className?: string
}) {
  return (
    <div aria-hidden="true" className={`relative pb-[14%] ${className}`}>
      {/* plataforma: anéis de luz */}
      <div className="absolute inset-x-0 bottom-0 h-[30%]">
        <span className="absolute inset-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgb(22_119_255/0.55),rgb(139_92_246/0.25)_45%,transparent_70%)] blur-md" />
        <span className="absolute inset-x-[4%] inset-y-[12%] rounded-[50%] border border-blue/60 bg-[#0b1430]/60 shadow-[0_0_30px_rgb(22_119_255/0.5)]" />
        <span className="absolute inset-x-[10%] inset-y-[24%] rounded-[50%] border-2 border-cyan/80 shadow-[0_0_24px_rgb(0_212_255/0.9)]" />
        <span className="absolute inset-x-[24%] inset-y-[38%] rounded-[50%] border border-violet/80 shadow-[0_0_18px_rgb(139_92_246/0.9)]" />
      </div>

      {/* órbita inclinada atrás do notebook */}
      <span className="absolute top-[30%] left-1/2 h-[42%] w-[112%] -translate-x-1/2 -rotate-[12deg] rounded-[50%] border-2 border-violet/50 shadow-[0_0_22px_rgb(139_92_246/0.5)]" />

      {/* notebook */}
      <div className="animate-float relative mx-auto w-[76%]">
        <div className="rounded-t-2xl border border-white/20 bg-[#0d1428] p-[1.6%] shadow-[0_30px_60px_-20px_rgb(0_0_0/0.8),0_0_40px_-10px_rgb(0_212_255/0.5)]">
          <div className="aspect-[16/10] overflow-hidden rounded-lg">{tela}</div>
        </div>
        <div className="-mx-[5%] h-3 rounded-b-xl bg-gradient-to-b from-slate-300 via-slate-500 to-slate-700" />
        <div className="mx-auto h-1 w-1/5 rounded-b-md bg-slate-800" />
      </div>

      {/* celular sobreposto, à direita */}
      {telaCelular && (
        <div className="animate-float absolute right-[3%] bottom-[12%] w-[21%] [animation-delay:-3s]">
          <div className="rounded-[1.1rem] border border-white/20 bg-[#0d1428] p-[5%] shadow-[0_20px_40px_-10px_rgb(0_0_0/0.8),0_0_30px_-8px_rgb(139_92_246/0.7)]">
            <div className="aspect-[9/18] overflow-hidden rounded-[0.8rem]">{telaCelular}</div>
          </div>
        </div>
      )}
    </div>
  )
}
