import { botaoFlutuanteLabel, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'

export function BotaoWhatsApp() {
  return (
    <ExternalLink
      href={WHATSAPP_LINK}
      aria-label={botaoFlutuanteLabel}
      title={botaoFlutuanteLabel}
      className="fixed right-4 bottom-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF38] text-white shadow-[0_8px_30px_-6px_rgb(31_175_56/0.6)] ring-1 ring-white/20 transition-transform hover:scale-105 sm:right-6 sm:bottom-6 sm:h-16 sm:w-16"
    >
      <WhatsAppIcon className="h-7 w-7 sm:h-8 sm:w-8" />
    </ExternalLink>
  )
}
