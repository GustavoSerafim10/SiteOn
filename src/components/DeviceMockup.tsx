/**
 * Mockup em CSS puro de um notebook e um celular exibindo um site genérico.
 * Puramente decorativo (aria-hidden).
 */

function SiteGenerico({ compacto = false }: { compacto?: boolean }) {
  const g = compacto ? 'gap-1.5 p-2' : 'gap-3 p-4'
  return (
    <div className={`flex h-full flex-col bg-[#0b1430] ${g}`}>
      {/* barra de navegação */}
      <div className="flex items-center justify-between">
        <div className={`rounded-full bg-gradient-to-r from-cyan to-violet ${compacto ? 'h-1.5 w-8' : 'h-2.5 w-16'}`} />
        {!compacto && (
          <div className="flex gap-2">
            <div className="h-1.5 w-8 rounded-full bg-white/20" />
            <div className="h-1.5 w-8 rounded-full bg-white/20" />
            <div className="h-1.5 w-8 rounded-full bg-white/20" />
          </div>
        )}
        {compacto && <div className="h-1.5 w-3 rounded-sm bg-white/30" />}
      </div>

      {/* hero */}
      <div className={`rounded-lg bg-gradient-to-br from-blue/40 via-navy to-violet/30 ${compacto ? 'p-2' : 'p-4'}`}>
        <div className={`rounded-full bg-white/80 ${compacto ? 'h-1.5 w-3/4' : 'h-3 w-2/3'}`} />
        <div className={`mt-1.5 rounded-full bg-white/40 ${compacto ? 'h-1 w-1/2' : 'h-2 w-1/2'}`} />
        <div className={`mt-2 rounded-full bg-blue ${compacto ? 'h-2 w-10' : 'h-4 w-20'}`} />
      </div>

      {/* cartões */}
      <div className={`grid ${compacto ? 'grid-cols-1 gap-1.5' : 'grid-cols-3 gap-2'}`}>
        {Array.from({ length: compacto ? 2 : 3 }).map((_, i) => (
          <div key={i} className={`rounded-md bg-navy/90 ${compacto ? 'p-1.5' : 'p-2.5'}`}>
            <div className={`rounded bg-cyan/50 ${compacto ? 'h-1.5 w-1.5' : 'h-3 w-3'}`} />
            <div className={`mt-1.5 rounded-full bg-white/30 ${compacto ? 'h-1 w-2/3' : 'h-1.5 w-3/4'}`} />
            <div className={`mt-1 rounded-full bg-white/15 ${compacto ? 'h-1 w-1/2' : 'h-1.5 w-1/2'}`} />
          </div>
        ))}
      </div>

      {!compacto && (
        <>
          {/* galeria */}
          <div className="grid grid-cols-4 gap-2">
            {['from-cyan/40 to-blue/30', 'from-violet/40 to-navy', 'from-blue/40 to-violet/30', 'from-cyan/30 to-navy'].map(
              (g) => (
                <div key={g} className={`aspect-[4/3] rounded-md bg-gradient-to-br ${g}`} />
              ),
            )}
          </div>
          {/* faixa de contato */}
          <div className="mt-auto flex items-center justify-between rounded-md bg-navy/70 p-2.5">
            <div className="space-y-1.5">
              <div className="h-1.5 w-24 rounded-full bg-white/40" />
              <div className="h-1.5 w-16 rounded-full bg-white/15" />
            </div>
            <div className="h-4 w-16 rounded-full bg-[#1FAF38]/80" />
          </div>
        </>
      )}
    </div>
  )
}

export function DeviceMockup() {
  return (
    <div aria-hidden="true" className="relative mx-auto w-full animate-float">
      {/* brilho de fundo */}
      <div className="absolute inset-x-10 top-10 bottom-0 -z-10 rounded-full bg-blue/20 blur-3xl" />

      {/* notebook */}
      <div className="relative">
        <div className="rounded-t-2xl border border-white/10 bg-[#0d1428] p-2.5 shadow-2xl shadow-black/50">
          <div className="mb-2 flex items-center gap-1.5 px-1">
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="h-2 w-2 rounded-full bg-white/20" />
            <span className="ml-3 h-3 flex-1 rounded-full bg-white/5" />
          </div>
          <div className="aspect-[16/10] overflow-hidden rounded-md border border-white/5">
            <SiteGenerico />
          </div>
        </div>
        <div className="mx-auto h-3 w-[108%] -translate-x-[3.7%] rounded-b-xl bg-gradient-to-b from-slate-500 to-slate-700" />
        <div className="mx-auto h-1 w-24 rounded-b-md bg-slate-800" />
      </div>

      {/* celular */}
      <div className="absolute -right-2 -bottom-8 w-[30%] rounded-[1.4rem] border border-white/15 bg-[#0d1428] p-1.5 shadow-2xl shadow-black/60 ring-1 ring-cyan/20">
        <div className="mx-auto mb-1 h-1 w-8 rounded-full bg-white/20" />
        <div className="aspect-[9/17] overflow-hidden rounded-[1rem]">
          <SiteGenerico compacto />
        </div>
      </div>
    </div>
  )
}
