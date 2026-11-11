import { botaoFlutuanteInstagramLabel, botaoFlutuanteLabel, INSTAGRAM_LINK, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'

/** Botões flutuantes: Instagram (menor) logo acima do WhatsApp */
export function BotaoWhatsApp() {
  return (
    <div className="fixed right-4 bottom-4 z-40 flex flex-col items-center gap-3 sm:right-6 sm:bottom-6">
      <ExternalLink
        href={INSTAGRAM_LINK}
        aria-label={botaoFlutuanteInstagramLabel}
        title={botaoFlutuanteInstagramLabel}
        className="flex h-11 w-11 items-center justify-center rounded-full bg-instagram text-white ring-1 ring-white/20 transition-transform hover:scale-105 sm:h-12 sm:w-12"
      >
        <InstagramIcon className="h-5 w-5 sm:h-6 sm:w-6" />
      </ExternalLink>
      <ExternalLink
        href={WHATSAPP_LINK}
        aria-label={botaoFlutuanteLabel}
        title={botaoFlutuanteLabel}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF38] text-white shadow-[0_8px_30px_-6px_rgb(31_175_56/0.6)] ring-1 ring-white/20 transition-transform hover:scale-105 sm:h-16 sm:w-16"
      >
        <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
      </ExternalLink>
    </div>
  )
}
