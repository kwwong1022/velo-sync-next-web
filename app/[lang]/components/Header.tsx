import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Navbar from './Navbar'

type Props = { lang: Locale }

export default async function Header({ lang }: Props) {
    const { navigation } = await getDictionary(lang)

    return (
        <Navbar lang={lang} navigation={navigation} />
    )
}