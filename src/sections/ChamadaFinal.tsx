import { chamadaFinal, INSTAGRAM_LINK, marca, WHATSAPP_LINK } from '../content'
import { ExternalLink } from '../components/ExternalLink'
import { InstagramIcon, WhatsAppIcon } from '../components/BrandIcons'
import { Reveal } from '../components/Reveal'

/** Faixa final de ponta a ponta, com o horizonte de planeta e o símbolo da marca */
export function ChamadaFinal() {
  return (
    <section aria-labelledby="cta-titulo" className="band relative overflow-hidden pt-24 pb-40 sm:pt-28 sm:pb-48">
      <div aria-hidden="true" className="planeta top-[calc(100%-110px)]" />
      <img
        src={marca.simbolo}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[-8%] hidden w-[42rem] -translate-y-1/2 opacity-[0.1] lg:block"
      />

      <Reveal className="shell relative">
        <h2
          id="cta-titulo"
          className="max-w-4xl text-[1.9rem] leading-[1.12] font-bold sm:text-5xl lg:text-[3.4rem] 2xl:text-[4rem]"
        >
          {chamadaFinal.tituloAntes}
          <span className="text-gradient whitespace-nowrap">{chamadaFinal.tituloDestaque}</span>
          {chamadaFinal.tituloDepois}
        </h2>
        <p className="mt-6 max-w-2xl text-base text-cinza sm:text-xl">{chamadaFinal.subtitulo}</p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <ExternalLink href={WHATSAPP_LINK} className="btn-primary px-8 py-4 text-lg sm:px-10 sm:py-5 sm:text-xl">
            <WhatsAppIcon className="h-6 w-6" />
            {chamadaFinal.botao}
          </ExternalLink>
          <ExternalLink href={INSTAGRAM_LINK} className="btn-secondary px-8 py-4 text-lg sm:py-5">
            <InstagramIcon className="h-5 w-5" />
            {chamadaFinal.botaoInstagram}
          </ExternalLink>
        </div>
      </Reveal>
    </section>
  )
}
