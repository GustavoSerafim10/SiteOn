import type { AnchorHTMLAttributes } from 'react'

/**
 * Link externo: sempre abre em nova aba com rel seguro.
 * `target` e `rel` vêm depois das props para que nenhum uso consiga sobrescrevê-los
 * (sem `noopener`, a página aberta ganharia acesso ao `window.opener` do site).
 */
export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a {...props} target="_blank" rel="noopener noreferrer" />
}
