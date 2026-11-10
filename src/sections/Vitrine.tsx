import { vitrine, vitrineSecao } from '../content'
import type { ItemVitrine } from '../content'

/** Mini-site desenhado em CSS. Puramente ilustrativo. */
function Cartao({ item, comCelular }: { item: ItemVitrine; comCelular: boolean }) {
  const [c1, c2] = item.cores
  const claro = item.fundo === 'claro'
  const pagina = claro ? 'bg-white' : 'bg-[#0b1020]'
  const linhaForte = claro ? 'bg-slate-800/80' : 'bg-white/80'
  const linhaFraca = claro ? 'bg-slate-400/40' : 'bg-white/25'
  const bloco = claro ? 'bg-slate-100' : 'bg-white/10'

  return (
    <div
      className="relative h-[230px] w-[320px] shrink-0 overflow-hidden rounded-2xl p-5 sm:h-[260px] sm:w-[380px]"
      style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }}
    >
      {/* janela do navegador */}
      <div className={`absolute top-6 left-5 w-[78%] overflow-hidden rounded-lg shadow-2xl shadow-black/40 ${pagina}`}>
        <div className="flex items-center gap-1 bg-black/20 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-white/60" />
        </div>
        <div className="p-3">
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-extrabold tracking-wide uppercase" style={{ color: claro ? c1 : 'rgb(255 255 255 / 0.75)' }}>
              {item.nicho}
            </span>
            <div className="flex gap-1">
              <span className={`h-1 w-4 rounded-full ${linhaFraca}`} />
              <span className={`h-1 w-4 rounded-full ${linhaFraca}`} />
              <span className={`h-1 w-4 rounded-full ${linhaFraca}`} />
            </div>
          </div>
          <p className={`mt-2.5 text-[13px] leading-tight font-extrabold ${claro ? 'text-slate-900' : 'text-white'}`}>
            {item.titulo}
          </p>
          <div className={`mt-1.5 h-1 w-3/4 rounded-full ${linhaFraca}`} />
          <span className="mt-2.5 inline-flex items-center rounded-full bg-[#1FAF38] px-2.5 py-1 text-[8px] font-bold text-white">
            {item.botao}
          </span>
          <div className="mt-3 grid grid-cols-3 gap-1.5">
            {[0, 1, 2].map((i) => (
              <div key={i} className={`rounded-md p-1.5 ${bloco}`}>
                <div className="aspect-[4/3] rounded" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})`, opacity: 0.55 + i * 0.15 }} />
                <div className={`mt-1 h-1 w-3/4 rounded-full ${linhaForte}`} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* celular sobreposto */}
      {comCelular && (
        <div className={`absolute right-4 bottom-[-14px] w-[26%] overflow-hidden rounded-[14px] border-4 border-[#0b1020] shadow-2xl shadow-black/50 ${pagina}`}>
          <div className="p-1.5">
            <span className="block text-[6px] font-extrabold uppercase" style={{ color: claro ? c1 : 'rgb(255 255 255 / 0.75)' }}>
              {item.nicho}
            </span>
            <div className="mt-1.5 aspect-square rounded" style={{ background: `linear-gradient(135deg, ${c1}, ${c2})` }} />
            <div className={`mt-1.5 h-1 w-full rounded-full ${linhaForte}`} />
            <div className={`mt-1 h-1 w-2/3 rounded-full ${linhaFraca}`} />
            <span className="mt-1.5 block h-2.5 rounded-full bg-[#1FAF38]" />
            <div className={`mt-1.5 h-6 rounded ${bloco}`} />
          </div>
        </div>
      )}
    </div>
  )
}

function Trilho({ itens, reverso }: { itens: ItemVitrine[]; reverso?: boolean }) {
  // a lista é duplicada para o movimento ficar contínuo
  const duplicada = [...itens, ...itens]
  return (
    <div className={`vitrine-trilho ${reverso ? 'reverso' : ''}`}>
      {duplicada.map((item, i) => (
        <Cartao key={`${item.nicho}-${i}`} item={item} comCelular={(i + (reverso ? 1 : 0)) % 2 === 0} />
      ))}
    </div>
  )
}

/** Duas faixas de sites ilustrativos rolando em sentidos opostos */
export function Vitrine() {
  return (
    <section aria-label={vitrineSecao.legenda} className="relative py-10 sm:py-14">
      <p className="shell mb-6 flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-slate-300 uppercase sm:text-sm">
        <span aria-hidden="true" className="h-px w-8 bg-gradient-to-r from-cyan to-violet" />
        {vitrineSecao.legenda}
      </p>
      <div className="vitrine space-y-5" aria-hidden="true">
        <Trilho itens={vitrine[0]} />
        <Trilho itens={vitrine[1]} reverso />
      </div>
    </section>
  )
}
