import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'

type Props = { params: { lang: Locale } }

export default async function Home({ params: { lang } }: Props) {
  const { page } = await getDictionary(lang)

  return (
    <main></main>
  )
}
