import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionaries"

type Props = { lang: Locale }

export default function Footer({ lang }: Props) {
    const { navigation } = await getDictionary(lang)
    
    return (
        <footer></footer>
    )
}