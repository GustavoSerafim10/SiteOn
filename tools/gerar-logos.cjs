// Gera os SVGs da marca GUVIX (símbolo G/X reconstruído + textos em contornos)
// Uso: npm run logos   (gera os arquivos em public/brand/)
// Fontes: Orbitron 900 e Montserrat 600 (licença OFL), convertidas em contornos,
// para que os SVGs fiquem idênticos em qualquer lugar, sem depender de fonte instalada.
const fs = require('fs')
const path = require('path')
const opentype = require('opentype.js')

const OUT = process.argv[2] || path.join(__dirname, '..', 'public', 'brand')
const F = (p) => path.join(__dirname, '..', 'node_modules', '@fontsource', p)
// opentype.js 2 removeu o loadSync: lê o arquivo e passa para o parse
const carregarFonte = (p) => opentype.parse(fs.readFileSync(F(p)))
const orbitron = carregarFonte('orbitron/files/orbitron-latin-900-normal.woff')
const montserrat = carregarFonte('montserrat/files/montserrat-latin-600-normal.woff')

/** Converte texto em path com espaçamento entre letras. Retorna {d, width}. */
function textPath(font, text, x, y, size, tracking = 0) {
  let cursor = x
  const parts = []
  const scale = size / font.unitsPerEm
  const glyphs = font.stringToGlyphs(text)
  glyphs.forEach((g, i) => {
    const p = g.getPath(cursor, y, size)
    parts.push(p.toPathData(2))
    cursor += g.advanceWidth * scale
    if (i < glyphs.length - 1) {
      const kern = font.getKerningValue(g, glyphs[i + 1]) * scale
      cursor += kern + tracking
    }
  })
  return { d: parts.join(''), width: cursor - x }
}

// ------------------------------------------------------------------
// Símbolo G/X (viewBox de trabalho 240×200)
// ------------------------------------------------------------------
const SYM = {
  // "C" hexagonal do G
  corpo: 'M66 36 H206 L184 66 H84 L58 100 L84 134 H132 L110 164 H66 L28 100 Z',
  // barra central do G
  barra: 'M112 86 H200 L182 112 H112 Z',
  // traço diagonal (gradiente) que forma o X
  traco: 'M176 86 H210 L142 178 H108 Z',
  orbita: { cx: 122, cy: 104, rx: 114, ry: 34, rot: -22 },
}

function defs(id, mono) {
  if (mono) return ''
  return `
    <linearGradient id="${id}-metal" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FFFFFF"/>
      <stop offset=".42" stop-color="#DCE3EF"/>
      <stop offset=".55" stop-color="#9AA6BD"/>
      <stop offset="1" stop-color="#EEF2F9"/>
    </linearGradient>
    <linearGradient id="${id}-traco" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#00D4FF"/>
      <stop offset=".45" stop-color="#1677FF"/>
      <stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="${id}-orbita" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00D4FF"/>
      <stop offset=".6" stop-color="#1677FF"/>
      <stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
    <linearGradient id="${id}-x" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00D4FF"/>
      <stop offset=".5" stop-color="#1677FF"/>
      <stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>`
}

/** Símbolo dentro de um <g>. mono: cor única (ou null para colorido). */
function simbolo(id, mono, extraTransform = '') {
  const o = SYM.orbita
  const metal = mono || `url(#${id}-metal)`
  const traco = mono || `url(#${id}-traco)`
  const orb = mono || `url(#${id}-orbita)`
  const ell = (stroke, width, extra) =>
    `<ellipse cx="${o.cx}" cy="${o.cy}" rx="${o.rx}" ry="${o.ry}" transform="rotate(${o.rot} ${o.cx} ${o.cy})" fill="none" stroke="${stroke}" stroke-width="${width}" stroke-linecap="butt" ${extra}/>`
  const FRENTE = 'pathLength="360" stroke-dasharray="125 235" stroke-dashoffset="-92"'
  const TRAS = 'pathLength="360" stroke-dasharray="240 120" stroke-dashoffset="-214"'
  return `<g ${extraTransform ? `transform="${extraTransform}"` : ''}>
    <mask id="${id}-m" maskUnits="userSpaceOnUse" x="-20" y="-20" width="280" height="240">
      <rect x="-20" y="-20" width="280" height="240" fill="#fff"/>
      ${ell('#000', 17, FRENTE)}
    </mask>
    ${ell(orb, 7, TRAS)}
    <g mask="url(#${id}-m)">
      <path d="${SYM.corpo}" fill="${metal}"/>
      <path d="${SYM.barra}" fill="${metal}"/>
      <path d="${SYM.traco}" fill="${traco}"/>
    </g>
    ${ell(orb, 7, FRENTE)}
    ${mono ? '' : '<path d="M30 52 l3 -10 l3 10 l10 3 l-10 3 l-3 10 l-3 -10 l-10 -3 Z" fill="#FFFFFF" opacity=".9"/>'}
  </g>`
}

function svg(w, h, body, title) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="t">
  <title id="t">${title}</title>
  ${body}
</svg>
`
}

// ------------------------------------------------------------------
// Logo horizontal
// ------------------------------------------------------------------
function horizontal(id, mono) {
  const SX = 0 // símbolo ocupa 0..240
  const TX = 292 // início do texto
  const guvi = textPath(orbitron, 'GUVI', TX, 128, 112, 6)
  const x = textPath(orbitron, 'X', TX + guvi.width + 6, 128, 112, 0)
  const largTexto = guvi.width + 6 + x.width
  const tag1 = 'TECNOLOGIA QUE '
  const tag2 = 'TRANSFORMA.'
  // ajusta o espaçamento do slogan para alinhar com a largura do logotipo
  const base1 = textPath(montserrat, tag1, 0, 0, 21, 0).width
  const base2 = textPath(montserrat, tag2, 0, 0, 21, 0).width
  const n = tag1.length + tag2.length - 1
  const track = (largTexto - base1 - base2) / n
  const t1 = textPath(montserrat, tag1, TX + 2, 176, 21, track)
  const t2 = textPath(montserrat, tag2, TX + 2 + t1.width + track, 176, 21, track)
  const W = Math.ceil(TX + largTexto + 8)
  const metal = mono || `url(#${id}-metalT)`
  const xFill = mono || `url(#${id}-x)`
  const tagFill = mono || '#E2E8F0'
  const tag2Fill = mono || `url(#${id}-tag)`
  const extraDefs = mono
    ? ''
    : `<linearGradient id="${id}-metalT" gradientUnits="userSpaceOnUse" x1="0" y1="46" x2="0" y2="130">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".45" stop-color="#DCE3EF"/>
      <stop offset=".56" stop-color="#9AA6BD"/><stop offset="1" stop-color="#EEF2F9"/></linearGradient>
    <linearGradient id="${id}-tag" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#00D4FF"/><stop offset="1" stop-color="#1677FF"/></linearGradient>
    <linearGradient id="${id}-div" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#00D4FF" stop-opacity="0"/><stop offset=".5" stop-color="#00D4FF"/>
      <stop offset="1" stop-color="#8B5CF6" stop-opacity="0"/></linearGradient>`
  const body = `<defs>${defs(id, mono)}${extraDefs}</defs>
  ${simbolo(id, mono, `translate(${SX} 0)`)}
  <rect x="262" y="34" width="2.5" height="150" fill="${mono || `url(#${id}-div)`}"/>
  <path d="${guvi.d}" fill="${metal}"/>
  <path d="${x.d}" fill="${xFill}"/>
  <path d="${t1.d}" fill="${tagFill}"/>
  <path d="${t2.d}" fill="${tag2Fill}"/>`
  return svg(W, 200, body, 'GUVIX — Tecnologia que transforma.')
}

// ------------------------------------------------------------------
// Ícone de perfil (círculo)
// ------------------------------------------------------------------
function perfil(id) {
  const body = `<defs>${defs(id, null)}
    <linearGradient id="${id}-anel" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#00D4FF"/><stop offset=".5" stop-color="#1677FF"/><stop offset="1" stop-color="#8B5CF6"/>
    </linearGradient>
    <radialGradient id="${id}-fundo" cx=".5" cy=".42" r=".6">
      <stop offset="0" stop-color="#17264B"/><stop offset="1" stop-color="#080D1B"/>
    </radialGradient></defs>
  <circle cx="256" cy="256" r="244" fill="url(#${id}-fundo)"/>
  <circle cx="256" cy="256" r="240" fill="none" stroke="url(#${id}-anel)" stroke-width="12"/>
  ${simbolo(id, null, 'translate(256 256) scale(1.72) translate(-122 -106)')}`
  return svg(512, 512, body, 'GUVIX')
}

/** Símbolo + GUVIX, sem slogan: para o cabeçalho (o slogan ficaria ilegível em 40px) */
function compacto(id) {
  const TX = 262
  const guvi = textPath(orbitron, 'GUVI', TX, 146, 112, 6)
  const x = textPath(orbitron, 'X', TX + guvi.width + 6, 146, 112, 0)
  const W = Math.ceil(TX + guvi.width + 6 + x.width + 8)
  const body = `<defs>${defs(id, null)}
    <linearGradient id="${id}-metalT" gradientUnits="userSpaceOnUse" x1="0" y1="64" x2="0" y2="148">
      <stop offset="0" stop-color="#FFFFFF"/><stop offset=".45" stop-color="#DCE3EF"/>
      <stop offset=".56" stop-color="#9AA6BD"/><stop offset="1" stop-color="#EEF2F9"/></linearGradient></defs>
  ${simbolo(id, null)}
  <path d="${guvi.d}" fill="url(#${id}-metalT)"/>
  <path d="${x.d}" fill="url(#${id}-x)"/>`
  return svg(W, 200, body, 'GUVIX')
}

/** Só o símbolo, fundo transparente (para usar no site) */
function soSimbolo(id) {
  return svg(240, 200, `<defs>${defs(id, null)}</defs>${simbolo(id, null)}`, 'GUVIX')
}

fs.mkdirSync(OUT, { recursive: true })
fs.writeFileSync(path.join(OUT, 'guvix-logo-horizontal.svg'), horizontal('h', null))
fs.writeFileSync(path.join(OUT, 'guvix-logo-mono-branco.svg'), horizontal('b', '#FFFFFF'))
fs.writeFileSync(path.join(OUT, 'guvix-logo-mono-preto.svg'), horizontal('p', '#0A0A0A'))
fs.writeFileSync(path.join(OUT, 'guvix-icone-perfil.svg'), perfil('i'))
fs.writeFileSync(path.join(OUT, 'guvix-logo-compacto.svg'), compacto('c'))
fs.writeFileSync(path.join(OUT, 'guvix-simbolo.svg'), soSimbolo('s'))
for (const f of fs.readdirSync(OUT)) console.log(f, fs.statSync(path.join(OUT, f)).size, 'bytes')
