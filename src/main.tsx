import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'

/**
 * Proteção contra clickjacking: se outro site tentar exibir este dentro de um <iframe>
 * (para enganar o visitante com cliques por cima), o site não é renderizado.
 * O ideal seria o cabeçalho `frame-ancestors`/`X-Frame-Options`, mas o GitHub Pages
 * não permite cabeçalhos, e essas diretivas não funcionam via <meta>.
 */
function estaDentroDeIframe() {
  try {
    return window.self !== window.top
  } catch {
    return true
  }
}

const root = document.getElementById('root')!

if (estaDentroDeIframe()) {
  const aviso = document.createElement('a')
  aviso.href = window.location.href
  aviso.target = '_blank'
  aviso.rel = 'noopener noreferrer'
  aviso.textContent = 'Abrir o site da Guvix'
  root.append(aviso)
} else {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
}
