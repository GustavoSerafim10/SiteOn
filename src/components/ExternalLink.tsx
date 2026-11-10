import type { AnchorHTMLAttributes } from 'react'

/** Link externo: sempre abre em nova aba com rel seguro. */
export function ExternalLink(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
  return <a target="_blank" rel="noopener noreferrer" {...props} />
}
