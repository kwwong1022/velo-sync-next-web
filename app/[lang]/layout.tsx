
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

type Params = { params: { lang: Locale } }

type Props = {
  children: React.ReactNode
  params: { lang: Locale }
}

export async function generateMetadata({ params }: Params) {
  const { page } = await getDictionary(params.lang)
  return {
    title: page.home.title,
    description: page.home.descriptionFull,
  }
}

export default function RootLayout({ children, params }: Props) {
  return (
    <html lang={params.lang}>
      <body className={`${inter.className} bg-neutral-50 text-neutral-700 text-base font-light flex flex-col min-h-screen`}>
        <Header lang={params.lang} />
        {children}
        <Footer lang={params.lang} />
      </body>
    </html>
  )
}
