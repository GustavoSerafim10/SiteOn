import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { botaoOrcamento, INSTAGRAM_LINK, INSTAGRAM_USUARIO, menu, PRECO_A_PARTIR_DE, WHATSAPP_LINK } from '../content'
import { Logo } from '../components/Logo'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'

export function Header() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const [ativo, setAtivo] = useState<string | null>(null)
  const botaoRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const onScroll = () => {
      setRolou(window.scrollY > 12)
      // seção ativa: a última cujo topo já passou de 40% da altura da tela
      const linha = window.innerHeight * 0.4
      let atual: string | null = null
      for (const item of menu) {
        const el = document.querySelector(item.href)
        if (el && el.getBoundingClientRect().top <= linha) atual = item.href
      }
      setAtivo(atual)
    }
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

      <div className="shell flex h-[72px] items-center justify-between gap-6 lg:h-20">
        <a href="#topo" className="flex shrink-0 items-center" aria-label="Guvix, voltar ao início">
          <Logo className="h-9 lg:h-10" alt="" />
        </a>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-8 xl:gap-10">
            {menu.map((item) => {
              const atual = ativo === item.href
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    aria-current={atual ? 'location' : undefined}
                    className={`group relative py-2 text-[0.95rem] font-medium transition-colors hover:text-cyan ${
                      atual ? 'text-cyan' : 'text-slate-200'
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden="true"
                      className={`absolute -bottom-0.5 left-0 h-0.5 rounded-full bg-gradient-to-r from-cyan to-violet transition-all duration-300 ${
                        atual ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <ExternalLink
            href={INSTAGRAM_LINK}
            aria-label={`Instagram ${INSTAGRAM_USUARIO}`}
            title={`Instagram ${INSTAGRAM_USUARIO}`}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 text-slate-200 transition-colors hover:border-cyan hover:text-cyan sm:inline-flex"
          >
            <InstagramIcon className="h-5 w-5" />
          </ExternalLink>
          <ExternalLink href={WHATSAPP_LINK} className="btn-primary hidden px-5 py-3 text-sm sm:inline-flex">
            <WhatsAppIcon className="h-4 w-4" />
            {botaoOrcamento}
          </ExternalLink>

          <button
            ref={botaoRef}
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-white hover:bg-white/5 lg:hidden"
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
        className="border-t border-white/10 bg-midnight/95 pb-6 backdrop-blur-md lg:hidden"
      >
        <div className="shell">
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
          <div className="flex gap-3">
            <ExternalLink
              href={WHATSAPP_LINK}
              onClick={() => setAberto(false)}
              className="btn-primary flex-1 px-5 py-3 text-base"
            >
              <WhatsAppIcon className="h-5 w-5" />
              {botaoOrcamento}
            </ExternalLink>
            <ExternalLink
              href={INSTAGRAM_LINK}
              onClick={() => setAberto(false)}
              aria-label={`Instagram ${INSTAGRAM_USUARIO}`}
              className="btn-secondary h-12 w-12 shrink-0"
            >
              <InstagramIcon className="h-5 w-5" />
            </ExternalLink>
          </div>
        </div>
      </nav>
    </header>
  )
}
