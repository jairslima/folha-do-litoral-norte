import dados from './cidades.json'

export type Cidade = { nome: string; slug: string; regiao: string; ibge: number }

const REGIOES_DADOS: Record<string, { nome: string }> = dados.regioes

export const CIDADES: Cidade[] = dados.cidades

export const REGIOES: string[] = Object.values(REGIOES_DADOS).map((r) => r.nome)

export function slugParaCidade(slug: string) {
  return CIDADES.find((c) => c.slug === slug)
}

export function nomeParaSlug(nome: string) {
  return CIDADES.find((c) => c.nome.toLowerCase() === nome.toLowerCase())?.slug
}

const SLUG_POR_REGIAO: Record<string, string> = Object.fromEntries(
  Object.entries(REGIOES_DADOS).map(([slug, r]) => [r.nome, slug])
)
const REGIAO_POR_SLUG: Record<string, string> = Object.fromEntries(
  Object.entries(REGIOES_DADOS).map(([slug, r]) => [slug, r.nome])
)

export function regiaoParaSlug(regiao: string) {
  return SLUG_POR_REGIAO[regiao]
}

export function slugParaRegiao(slug: string) {
  return REGIAO_POR_SLUG[slug]
}
