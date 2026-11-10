import { INSTAGRAM_LINK, marca, rodape, SLOGAN, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Logo } from '../components/Logo'

const estiloLink =
  'inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm font-medium text-slate-200 transition-colors hover:border-cyan hover:text-cyan'

export function Rodape() {
  const ano = new Date().getFullYear()
  return (
    <footer className="relative border-t border-white/10 py-12 pb-28 sm:pb-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 text-center sm:px-6 md:flex-row md:justify-between md:text-left">
        <div>
          <Logo src={marca.logoMonoBranco} className="h-7" />
          <p className="mt-3 text-sm text-cinza">{SLOGAN}</p>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-3">
          <li>
            <ExternalLink href={WHATSAPP_LINK} className={estiloLink}>
              <WhatsAppIcon className="h-4 w-4" />
              {rodape.whatsappLabel}
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href={INSTAGRAM_LINK} className={estiloLink}>
              <InstagramIcon className="h-4 w-4" />
              {rodape.instagramLabel}
            </ExternalLink>
          </li>
        </ul>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-4 text-center text-xs text-cinza sm:px-6">
        © {ano} {rodape.direitos}
      </p>
    </footer>
  )
}
