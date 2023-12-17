import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import Link from 'next/link'

type Props = { lang: Locale }

export default async function Header({ lang }: Props) {
    const { navigation } = await getDictionary(lang)

    return (
        <header>
            <nav className="sticky w-full h-16 shadow-md">
                <div className="flex justify-between items-center w-full h-full px-8">
                    <Link className="px-2 py-4 text-xl font-normal" href={`/${lang}/`}>Velo Sync</Link>

                    <div className="flex justify-between items-center h-full">
                        <ul className="hidden sm:flex items-center">
                            <li className="mx-3">
                                <Link className="p-2" href={`/${lang}/video-editor/`}>
                                    Video Editor
                                </Link>
                            </li>

                            <li className="mx-3">
                                <Link className="p-2" href={`/${lang}/workout-planner/`}>
                                    Workout Planner
                                </Link>
                            </li>
                        </ul>

                        <div className="hidden sm:flex ml-2 w-2 h-1/2 border-l-2 border-l-grey" />

                        <Link className="hidden ml-4 rounded-full bg-gray-200 w-8 h-8" href={`/${lang}/user`} />

                        <Link className="hidden sm:flex items-center ml-5 px-4 h-8 rounded-md bg-gray-800 text-gray-200 font-normal" href={`/${lang}/user`}>Login</Link>

                        <div className="flex ml-6 sm:hidden"></div>
                    </div>
                </div>
            </nav>
        </header>
    )
}