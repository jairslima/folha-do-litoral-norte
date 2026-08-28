import type { Metadata } from 'next'
import { MARCA } from '@/lib/marca'
import { CIDADES, REGIOES, regiaoParaSlug } from '@/lib/cidades'

export const metadata: Metadata = {
  title: `Sobre — ${MARCA.nome}`,
  description: `Conheça a ${MARCA.nome}, agência de notícias locais do Litoral Norte do Rio Grande do Sul.`,
}

export default function SobrePage() {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="font-serif text-3xl font-bold text-azul mb-6">Sobre a {MARCA.nome}</h1>

      <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
        <p>
          A <strong>{MARCA.nome}</strong> nasceu com um propósito simples: trazer as notícias que
          realmente importam para quem vive no Litoral Norte do Rio Grande do Sul, dos balneários
          à encosta da serra e às lagoas do interior.
        </p>
        <p>
          Nada de notícias nacionais ou internacionais. Aqui você encontra o que acontece em
          Torres, Capão da Canoa, Tramandaí, Osório, Arroio do Sal, Imbé, Cidreira e em toda a região.
        </p>
        <p>
          Publicamos <strong>três vezes ao dia, todos os dias</strong>: uma notícia de manhã,
          uma ao meio-dia e uma à noite. Sempre a mais relevante do momento, sempre com o link
          para você ler a íntegra na fonte original.
        </p>
        <p>
          Nossa missão é ser o maior banco de notícias locais do Litoral Norte, organizadas por
          cidade, para que você encontre facilmente o que acontece na sua cidade.
        </p>

        <h2 className="font-serif text-xl font-bold text-azul mt-8">Cidades cobertas</h2>
        <div className="grid grid-cols-2 gap-4 not-prose">
          {REGIOES.map(regiao => {
            const slugRegiao = regiaoParaSlug(regiao)
            return (
              <div key={regiao} className="bg-gray-50 rounded-lg p-4 col-span-2 sm:col-span-1">
                <h3 className="font-semibold text-azul text-sm uppercase tracking-wide mb-2">{regiao}</h3>
                <ul className="text-sm text-gray-600 space-y-0.5">
                  {CIDADES.filter(c => c.regiao === slugRegiao).map(c => <li key={c.nome}>· {c.nome}</li>)}
                </ul>
              </div>
            )
          })}
        </div>

        <h2 className="font-serif text-xl font-bold text-azul mt-8">Contato</h2>
        <p>
          Para sugestões de pauta, correções ou informações:{' '}
          <a href={`mailto:${MARCA.email}`} className="text-azul hover:text-dourado underline">
            {MARCA.email}
          </a>
        </p>
        <p>
          Siga também nas redes:{' '}
          <a href={MARCA.facebookUrl} target="_blank" rel="noopener noreferrer" className="text-azul hover:text-dourado underline">
            facebook.com/afolhadolitoralnorte
          </a>
        </p>
      </div>
    </div>
  )
}
