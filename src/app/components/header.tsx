"use client"

import Image from "next/image"
import Link from "next/link"
import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react"
import { DarkModeContext, DarkModeContextType } from "@/app/components/darkmode"
import { AiFillHome, AiOutlineMenuFold } from "react-icons/ai"
import { FaMoon, FaSun } from "react-icons/fa"
import { GoProject } from "react-icons/go"

const HeaderMenuComponent = (props: { active: boolean, setActive: Dispatch<SetStateAction<boolean>> }) => {
  const [height, setHeight] = useState<number>(0)

  useEffect(() => {
    setHeight(document.body.clientHeight - 80)
  }, [])

  return (
    <div style={{ height: height, right: props.active ? 0 : "-100%" }}
         className="absolute top-0 mt-[80px] transition-all duration-300 ease-in delay-[0ms] text-base md:text-xl lg:text-2xl z-10 transition-switch flex flex-col items-end space-y-2 w-full bg-light-300 text-dark-700 dark:bg-dark-500 dark:text-light-300">
      <div className="m-4">
        <Link href="/" onClick={() => props.setActive(false)}>
          <div className="cursor-pointer hover:underline"><AiFillHome className="inline mr-2" />Home</div>
        </Link>
        <Link href="/projects" onClick={() => props.setActive(false)}>
          <div className="cursor-pointer hover:underline"><GoProject className="inline mr-2" />Projects</div>
        </Link>
      </div>
    </div>
  )
}

const HeaderControlComponent = () => {
  const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
  const { dark, toggleTheme } = useContext<DarkModeContextType>(DarkModeContext)

  return (
    <div className="flex flex-row items-center">
      <label className="inline-flex relative items-center cursor-pointer">
        <div
          className="w-[46px] h-[26px] rounded-full border-2 border-light-700 inline-flex relative items-center cursor-pointer mr-2 dark:border-dark-200">
          <input onChange={toggleTheme} type="checkbox" className="sr-only" checked={dark} />
          <div
            className="w-[20px] h-[20px] mx-[1px] transition-switch rounded-full bg-light-700 flex items-center justify-center dark:bg-dark-200"
            style={{ transform: dark ? "translateX(100%)" : "" }}>
            {dark ? <FaMoon className="text-dark-700" /> : <FaSun className="text-light-200" />}
          </div>
        </div>
      </label>
      <div onClick={() => setIsMenuVisible(!isMenuVisible)} className="text-light-700 dark:text-dark-200">
        <AiOutlineMenuFold size="30px"
                           className={`transition-switch ${isMenuVisible ? "rotate-180" : ""}`} />
      </div>
      <HeaderMenuComponent active={isMenuVisible} setActive={setIsMenuVisible} />
    </div>
  )
}

const HeaderComponent = () => {
  return (
    <div className="bg-light-400 dark:bg-dark-700 w-screen h-[80px] transition-switch px-4">
      <div className="flex items-center justify-between h-full">
        <Link href="/">
          <Image src="/assets/logo.jpg" alt="" width="64" height="64"
                 className="rounded-full cursor-pointer" />
        </Link>
        <HeaderControlComponent />
      </div>
    </div>
  )
}

export default HeaderComponent