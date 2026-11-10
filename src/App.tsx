import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { FaixaServicos } from './sections/FaixaServicos'
import { Servicos } from './sections/Servicos'
import { Portfolio } from './sections/Portfolio'
import { Processo } from './sections/Processo'
import { Diferenciais } from './sections/Diferenciais'
import { Duvidas } from './sections/Duvidas'
import { ChamadaFinal } from './sections/ChamadaFinal'
import { Rodape } from './sections/Rodape'
import { BotaoWhatsApp } from './sections/BotaoWhatsApp'

export default function App() {
  return (
    <>
      <div className="starfield" aria-hidden="true" />
      <Header />
      <main id="conteudo" className="relative z-10">
        <Hero />
        <FaixaServicos />
        <Servicos />
        <Portfolio />
        <Processo />
        <Diferenciais />
        <Duvidas />
        <ChamadaFinal />
      </main>
      <div className="relative z-10">
        <Rodape />
      </div>
      <BotaoWhatsApp />
    </>
  )
}
