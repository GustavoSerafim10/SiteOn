import { chamadaFinal, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

export function ChamadaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-navy via-navy-deep to-midnight px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden="true"
            className="absolute -top-24 left-1/2 h-48 w-[36rem] max-w-full -translate-x-1/2 rounded-full bg-cyan/15 blur-3xl"
          />
          <div aria-hidden="true" className="absolute -right-16 -bottom-24 h-56 w-56 rounded-full bg-violet/20 blur-3xl" />

          <h2 id="cta-titulo" className="relative mx-auto max-w-2xl text-2xl leading-tight font-bold sm:text-3xl lg:text-4xl">
            {chamadaFinal.tituloAntes}
            <span className="text-gradient">{chamadaFinal.tituloDestaque}</span>
            {chamadaFinal.tituloDepois}
          </h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-cinza sm:text-lg">{chamadaFinal.subtitulo}</p>

          <ExternalLink
            href={WHATSAPP_LINK}
            className="btn-primary relative mt-9 px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl"
          >
            <WhatsAppIcon className="h-6 w-6" />
            {chamadaFinal.botao}
          </ExternalLink>
        </Reveal>
      </div>
    </section>
  )
}
