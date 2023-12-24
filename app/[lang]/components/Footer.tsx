require('dotenv').config()
import 'dotenv/config'
import { Locale } from "@/i18n.config"
import { getDictionary } from "@/lib/dictionaries"
import { GoGitBranch } from "react-icons/go";
import Link from "next/link"

type Props = { lang: Locale }

export default async function Footer({ lang }: Props) {
    const { navigation, page } = await getDictionary(lang)

    return (
        <footer className="flex justify-center mt-auto w-screen bg-zinc-200 text-sm">
            <nav className="px-12 py-8 w-full max-w-screen-xl">
                <div className="flex justify-between">
                    <div className="w-screen sm:w-[50%]">
                        <div className="text-base font-normal mb-2">{page.home.title}</div>
                        <div>{page.home.descriptionShort}</div>
                    </div>

                    <div className="hidden sm:flex flex-col w-[30%]">
                        <div className="text-base font-normal mb-2">{navigation.features.title}</div>
                        <Link href={`/${lang}/video-editor/`}>{navigation.videoEditor.title}</Link>
                        <Link href={`/${lang}/video-planner/`}>{navigation.workoutPlanner.title}</Link>
                    </div>
                </div>

                <div className="flex mt-6">
                    <Link href={`/${lang}/terms-and-conditions`}>{navigation.termsAndConditions.title}</Link>
                    <Link href={`/${lang}/privacy-policy`} className="mx-6">{navigation.privacyPolicy.title}</Link>
                    <div className="flex items-center cursor-pointer">
                        <GoGitBranch size={16} />
                        <div className="mx-2">{process.env.ENV}</div>
                        <div>v0.1.0</div>
                    </div>
                </div>
            </nav>
        </footer>
    )
}