import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import FeatureIntro from './components/FeatureIntro'
import FileUploader from './components/FileUploader'
import VideoProgress from './components/VideoProgress'
import VideoEditorUI from './components/VideoEditor'

type Props = { 
    params: { 
        lang: Locale 
    } 
}

export default function VideoEditor({ params: { lang } }: Props) {
    return (
        <main className="flex flex-col justify-center items-center w-screen">
            {/* 1. Show feature introduction + login content if user not logged in */}
            <FeatureIntro lang={lang} />

            {/* 2. Show upload page if user has logged in */}
            <FileUploader lang={lang} />

            {/* 3. Show video process status page if user has video processing in the backend */}
            <VideoProgress lang={lang} />

            {/* 4. Show video editor if user doesn't have video processing in the backend */}
            <VideoEditorUI lang={lang} />
        </main>
    )
}