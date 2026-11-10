import { INSTAGRAM_LINK, marca, menu, rodape, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Logo } from '../components/Logo'

const estiloLink =
  'inline-flex items-center gap-2.5 text-sm font-medium text-slate-300 transition-colors hover:text-cyan sm:text-[0.95rem]'

export function Rodape() {
  const ano = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 pt-16 pb-40 sm:pb-12">
      <div className="shell grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {/* logo completo, com o slogan "Tecnologia que transforma." */}
          <Logo src={marca.logoHorizontal} className="h-16 sm:h-20" alt="GUVIX — Tecnologia que transforma." />
        </div>

        <nav aria-label="Rodapé">
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
            {rodape.tituloNavegacao}
          </p>
          <ul className="mt-5 space-y-3">
            {menu.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={estiloLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className="font-display text-xs font-semibold tracking-[0.2em] text-cyan uppercase">
            {rodape.tituloContato}
          </p>
          <ul className="mt-5 space-y-3">
            <li>
              <ExternalLink href={WHATSAPP_LINK} className={estiloLink}>
                <WhatsAppIcon className="h-5 w-5" />
                {rodape.whatsappLabel}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={INSTAGRAM_LINK} className={estiloLink}>
                <InstagramIcon className="h-5 w-5" />
                {rodape.instagramLabel}
              </ExternalLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="shell mt-14">
        <p className="border-t border-white/10 pt-8 text-xs text-cinza">
          © {ano} {rodape.direitos}
        </p>
      </div>
    </footer>
  )
}
