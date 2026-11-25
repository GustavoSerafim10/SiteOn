import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

/**
 * Content-Security-Policy: diz ao navegador de onde o site pode carregar scripts,
 * estilos, fontes e imagens. Qualquer script injetado de outro lugar é bloqueado.
 *
 * O GitHub Pages não deixa configurar cabeçalhos HTTP, então a política vai numa
 * <meta> no index.html. Só entra no build de produção, porque o servidor de
 * desenvolvimento do Vite precisa de scripts inline para o hot reload.
 *
 * Se um dia o site carregar algo de um domínio novo (ex.: analytics, vídeo do
 * YouTube, formulário), o domínio precisa ser adicionado aqui.
 */
const CSP = [
  "default-src 'self'",
  "script-src 'self'",
  "style-src 'self' https://fonts.googleapis.com",
  "font-src 'self' https://fonts.gstatic.com data:",
  "img-src 'self' data:",
  "connect-src 'self'",
  "manifest-src 'self'",
  "object-src 'none'",
  "frame-src 'none'",
  "base-uri 'self'",
  "form-action 'none'",
  'upgrade-insecure-requests',
].join('; ')

function contentSecurityPolicy(): Plugin {
  return {
    name: 'content-security-policy',
    apply: 'build',
    transformIndexHtml: () => [
      {
        tag: 'meta',
        attrs: { 'http-equiv': 'Content-Security-Policy', content: CSP },
        injectTo: 'head-prepend',
      },
    ],
  }
}

export default defineConfig({
  // No GitHub Pages o site fica em /SiteOn/; localmente (e em domínio próprio) fica na raiz
  base: process.env.BASE_PATH ?? '/',
  plugins: [react(), tailwindcss(), contentSecurityPolicy()],
  build: {
    // Não publica o código-fonte original junto com o site
    sourcemap: false,
  },
})
