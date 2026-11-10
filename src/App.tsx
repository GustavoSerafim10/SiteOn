import { Header } from './sections/Header'
import { Hero } from './sections/Hero'
import { Exemplos } from './sections/Exemplos'
import { Servicos } from './sections/Servicos'
import { Diferenciais } from './sections/Diferenciais'
import { Portfolio } from './sections/Portfolio'
import { Processo } from './sections/Processo'
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
        <Exemplos />
        <Servicos />
        <Diferenciais />
        <Portfolio />
        <Processo />
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
