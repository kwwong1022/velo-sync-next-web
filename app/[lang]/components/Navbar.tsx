'use client'

import Link from 'next/link'
import { useState } from 'react'
import { IconContext } from 'react-icons'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

type Props = {
    lang: string,
    navigation: any
}

export default function Navbar({ lang, navigation }: Props) {
    const [ isNavOpen, setIsNavOpen ] = useState(false)

    const handleNavToggle = () => {
        setIsNavOpen(!isNavOpen)
    }

    return (
        <>
            <nav className="sticky flex justify-center w-full h-16 shadow-md z-10 bg-neutral-50">
                <div className="w-full max-w-screen-xl">
                    <div className="flex justify-between items-center w-full h-full px-8">
                        <Link className="px-2 py-4 text-xl font-normal" href={`/${lang}/`}>
                            {navigation.home.title}
                        </Link>

                        <div className="flex justify-between items-center h-full">
                            <ul className="hidden sm:flex items-center">
                                <li className="mx-3">
                                    <Link className="p-2" href={`/${lang}/video-editor/`}>
                                        {navigation.videoEditor.title}
                                    </Link>
                                </li>

                                <li className="mx-3">
                                    <Link className="p-2" href={`/${lang}/workout-planner/`}>
                                        {navigation.workoutPlanner.title}
                                    </Link>
                                </li>
                            </ul>

                            <div className="hidden sm:flex ml-2 w-2 h-1/2 border-l-2 border-l-grey" />

                            <Link className="hidden ml-4 rounded-full bg-gray-200 w-8 h-8" href={`/${lang}/user`} />

                            <Link className="hidden sm:flex items-center ml-5 px-4 h-8 rounded-md bg-gray-800 text-gray-200 font-normal" href={`/${lang}/user`}>
                                {navigation.login.title}
                            </Link>

                            {
                                isNavOpen
                                ? (<>
                                    <div className="flex ml-6 sm:hidden pl-24" onClick={handleNavToggle}>
                                        <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                                            <AiOutlineClose size={24} />
                                        </IconContext.Provider>
                                    </div>
                                </>)
                                : (<>
                                    <div className="flex ml-6 sm:hidden pl-24" onClick={handleNavToggle}>
                                        <IconContext.Provider value={{ style: { cursor: 'pointer' } }}>
                                            <AiOutlineMenu size={24} />
                                        </IconContext.Provider>
                                    </div>
                                </>)
                            }
                        </div>
                    </div>
                </div>
            </nav>

            <nav className={
                isNavOpen
                ? "fixed top-16 right-0 w-screen px-16 pb-16 bg-neutral-100 sm:hidden ease-in duration-300 z-0"
                : "fixed top-[-100%] right-0 w-screen z-0 ease-in duration-500"
            }>
                <ul>
                    <li className="pt-16">
                        <Link href={`/${lang}/video-editor/`}>
                            {navigation.videoEditor.title}
                        </Link>
                    </li>
                    <li className="pt-8">
                        <Link href={`/${lang}/workout-planner/`}>
                            {navigation.workoutPlanner.title}
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}