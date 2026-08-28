import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import CityNav from '@/components/CityNav'
import Footer from '@/components/Footer'
import { MARCA } from '@/lib/marca'
import { CIDADES } from '@/lib/cidades'

export const metadata: Metadata = {
  title: `${MARCA.nome} — Notícias Locais do Litoral Norte do RS`,
  description: `${MARCA.slogan}. Publicamos três vezes ao dia, todos os dias.`,
  keywords: `notícias, ${CIDADES.map((c) => c.nome).join(', ')}, Litoral Norte, RS`,
  openGraph: {
    title: MARCA.nome,
    description: `Notícias 100% locais do Litoral Norte do RS`,
    url: MARCA.dominio,
    siteName: MARCA.nome,
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <CityNav />
        <main className="max-w-7xl mx-auto px-4 py-6 min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
