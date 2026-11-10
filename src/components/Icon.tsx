import {
  Building2,
  CodeXml,
  FileText,
  Globe,
  Headset,
  LayoutTemplate,
  MessageCircle,
  Rocket,
  ShoppingBag,
  Smartphone,
  Zap,
} from 'lucide-react'
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
  conversa: MessageCircle,
  proposta: FileText,
  criacao: CodeXml,
  lancamento: Rocket,
}

export function Icon({ nome, ...props }: { nome: IconeNome } & LucideProps) {
  const Componente = mapa[nome]
  return <Componente aria-hidden="true" {...props} />
}
