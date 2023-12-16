import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = {
    en: () => import('@/constant/dictionaries/en.json').then((module) => module.default),
    zh: () => import('@/constant/dictionaries/zh.json').then((module) => module.default),
}

export const getDictionary = async (locale: Locale) => dictionaries[locale]()