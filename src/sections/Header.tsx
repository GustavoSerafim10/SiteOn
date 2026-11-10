import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { botaoOrcamento, menu, PRECO_A_PARTIR_DE, WHATSAPP_LINK } from '../content'
import { Logo } from '../components/Logo'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'

export function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const botaoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => setRolou(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Esc fecha o menu e devolve o foco ao botão
  useEffect(() => {
    if (!aberto) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setAberto(false)
        botaoRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [aberto])

  const fundo = rolou || aberto ? 'bg-midnight/85 backdrop-blur-md border-white/10' : 'border-transparent'

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${fundo}`}>
      <a
        href="#conteudo"
        className="sr-only rounded-md bg-blue-btn px-4 py-2 text-white focus:not-sr-only focus:absolute focus:top-3 focus:left-3"
      >
        Pular para o conteúdo
      </a>

      {PRECO_A_PARTIR_DE && (
        <div className="bg-navy/80 py-1.5 text-center text-xs font-semibold text-white sm:text-sm">
          Sites a partir de <span className="text-cyan">{PRECO_A_PARTIR_DE}</span>
        </div>
      )}

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#topo" className="flex items-center" aria-label="Guvix, voltar ao início">
          <Logo className="h-8" />
        </a>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="text-sm font-medium text-slate-300 transition-colors hover:text-cyan">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <ExternalLink href={WHATSAPP_LINK} className="btn-primary hidden px-5 py-2.5 text-sm sm:inline-flex">
            <WhatsAppIcon className="h-4 w-4" />
            {botaoOrcamento}
          </ExternalLink>

          <button
            ref={botaoRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/5 md:hidden"
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setAberto((v) => !v)}
          >
            {aberto ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </div>

      <nav
        id="menu-mobile"
        aria-label="Principal (celular)"
        hidden={!aberto}
        className="border-t border-white/10 bg-midnight/95 px-4 pb-6 backdrop-blur-md md:hidden"
      >
        <ul className="flex flex-col py-2">
          {menu.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setAberto(false)}
                className="block rounded-lg px-2 py-3 text-base font-medium text-slate-200 hover:bg-white/5 hover:text-cyan"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ExternalLink href={WHATSAPP_LINK} onClick={() => setAberto(false)} className="btn-primary w-full px-5 py-3 text-base">
          <WhatsAppIcon className="h-5 w-5" />
          {botaoOrcamento}
        </ExternalLink>
      </nav>
    </header>
  )
}
