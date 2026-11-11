import { INSTAGRAM_LINK, INSTAGRAM_USUARIO, marca, menu, rodape, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Logo } from '../components/Logo'

const tituloColuna = 'font-display text-xs font-semibold tracking-[0.2em] text-white uppercase'
const link = 'text-sm text-slate-300 transition-colors hover:text-cyan'

/** Rodapé no formato da referência: logo | navegação em linha | contato | copyright + redes */
export function Rodape() {
  const ano = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[radial-gradient(ellipse_60%_120%_at_45%_100%,rgb(22_119_255/0.18),transparent_70%)] pt-14 pb-40 sm:pb-14">
      <div className="shell grid items-start gap-10 md:grid-cols-2 xl:grid-cols-[1.2fr_1.3fr_0.8fr_1.1fr] xl:items-center">
        <Logo src={marca.logoHorizontal} className="h-14 sm:h-16" alt="GUVIX — Tecnologia que transforma." />

        <nav aria-label="Rodapé">
          <p className={tituloColuna}>{rodape.tituloNavegacao}</p>
          <ul className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            {menu.map((item, i) => (
              <li key={item.href} className="flex items-center gap-3">
                {i > 0 && <span aria-hidden="true" className="h-3.5 w-px bg-white/25" />}
                <a href={item.href} className={link}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={tituloColuna}>{rodape.tituloContato}</p>
          <ul className="mt-4 space-y-2">
            <li>
              <ExternalLink href={WHATSAPP_LINK} className={`${link} inline-flex items-center gap-2`}>
                <WhatsAppIcon className="h-4 w-4 text-green-400" />
                {rodape.whatsappLabel}
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href={INSTAGRAM_LINK} className={`${link} inline-flex items-center gap-2`}>
                <InstagramIcon className="h-4 w-4 text-pink-300" />
                {rodape.instagramLabel}
              </ExternalLink>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-4 xl:items-end">
          <p className="text-sm text-slate-400">
            © {ano} {rodape.direitos}
          </p>
          <div className="flex gap-3">
            <ExternalLink
              href={INSTAGRAM_LINK}
              aria-label={`Instagram ${INSTAGRAM_USUARIO}`}
              className="bg-instagram flex h-10 w-10 items-center justify-center rounded-full text-white transition-transform hover:scale-105"
            >
              <InstagramIcon className="h-5 w-5" />
            </ExternalLink>
            <ExternalLink
              href={WHATSAPP_LINK}
              aria-label="WhatsApp"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1FAF38] text-white shadow-[0_0_20px_-4px_rgb(37_211_102/0.7)] transition-transform hover:scale-105"
            >
              <WhatsAppIcon className="h-5 w-5" />
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}
