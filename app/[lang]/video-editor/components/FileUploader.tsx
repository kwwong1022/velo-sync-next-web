import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionaries"

type Props = { lang: Locale }

export default function FileUploader({ lang }: Props) {
    return (
        <div>
            File Uploader
        </div>
    )
}