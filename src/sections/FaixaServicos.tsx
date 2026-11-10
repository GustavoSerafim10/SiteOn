import { faixaServicos } from '../content'
import { Icon } from '../components/Icon'

/** Faixa de ponta a ponta logo abaixo do topo, no estilo da arte da marca */
export function FaixaServicos() {
  return (
    <div className="band relative">
      <ul className="shell flex flex-wrap items-center justify-center gap-x-8 gap-y-4 py-7 lg:justify-between lg:gap-x-6">
        {faixaServicos.map((item, i) => (
          <li key={item.texto} className="flex items-center gap-3 text-sm font-medium text-slate-200 sm:text-[0.95rem]">
            {i > 0 && <span aria-hidden="true" className="mr-3 hidden h-6 w-px bg-white/10 lg:mr-6 lg:block" />}
            <Icon nome={item.icone} className="h-5 w-5 shrink-0 text-cyan" />
            {item.texto}
          </li>
        ))}
      </ul>
    </div>
  )
}
