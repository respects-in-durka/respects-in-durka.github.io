"use client"

import { SiSpring } from "react-icons/si"
import { FaJava } from "react-icons/fa"
import { FcLinux } from "react-icons/fc"

export default function Index() {
  return (
    <div className="flex-center h-screen">
      <div className="text-base md:text-lg lg:text-2xl mx-4 -translate-y-1/2 text-dark-700 dark:text-light-300">
        <div className="flex-center">Hello! I&apos;m Walertin.</div>
        Self-taught <FaJava className="inline text-[#f89820]" /> developer, <SiSpring className="inline text-[#6EB33F]" /> lover <FcLinux className="inline"/> and enjoyer.
        <div className={"flex-center"}>
          I live inside your CPU
        </div>
      </div>
    </div>
  )
}
