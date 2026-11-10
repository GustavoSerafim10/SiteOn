import { Building2, Globe, Headset, LayoutTemplate, ShoppingBag, Smartphone, Zap } from 'lucide-react'
import type { LucideProps } from 'lucide-react'
import type { ComponentType } from 'react'
import type { IconeNome } from '../content'

const mapa: Record<IconeNome, ComponentType<LucideProps>> = {
  landing: LayoutTemplate,
  institucional: Building2,
  catalogo: ShoppingBag,
  celular: Smartphone,
  rapido: Zap,
  dominio: Globe,
  atendimento: Headset,
}

export function Icon({ nome, ...props }: { nome: IconeNome } & LucideProps) {
  const Componente = mapa[nome]
  return <Componente aria-hidden="true" {...props} />
}
