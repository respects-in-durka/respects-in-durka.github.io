"use client"

import "./globals.css"
import React, { MouseEvent, useCallback, useEffect, useState } from "react"
import DarkModeContextProvider from "@/app/components/darkmode"
import ContextMenu from "@/app/components/context"
import Image from "next/image"
import HeaderComponent from "@/app/components/header"

type ContextMenuState = {
  visible: boolean
  x: number
  y: number
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuState, setMenuState] = useState<ContextMenuState>({} as ContextMenuState)
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false)

  const contextMenuHandler = useCallback((event: MouseEvent<HTMLDivElement>) => {
    event.preventDefault()

    setMenuState({
      x: event.pageX, y: event.pageY, visible: !menuState.visible
    })
  }, [menuState, setMenuState])

  const clickHandler = useCallback(() => {
    setMenuState((prevState: ContextMenuState) => (
      { ...prevState, visible: false }
    ))
  }, [setMenuState])

  useEffect(() => {
    const keyDownHandler = (event: KeyboardEvent) => {
      if (process.env.NODE_ENV !== "production") return

      if (event.ctrlKey && event.key.toLowerCase() === "u") {
        event.preventDefault()
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        return
      }

      if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() === "i") {
        event.preventDefault()
        setIsModalVisible(true)

        setTimeout(() => setIsModalVisible(false), 4500)
      }
    }

    window.addEventListener("keydown", keyDownHandler)

    return () => {
      window.removeEventListener("keydown", keyDownHandler)
    }
  }, [])

  return (
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@100..800&display=swap"
            rel="stylesheet" />
      <link rel="icon" type="image/png" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
      <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon.png" />
      <meta name="viewport"
            content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0" />

      <title>respects-in-durka</title>
    </head>
    <body>
    <div onContextMenu={contextMenuHandler} onClick={clickHandler}>
      <DarkModeContextProvider>
        <div className="overflow-hidden relative">
          <div
            className={"transition-switch dark:bg-dark-600 bg-light-200 h-screen"}>
            <HeaderComponent />
            {children}
          </div>
          {menuState.visible && <ContextMenu top={menuState.y} left={menuState.x} />}
          {isModalVisible &&
            <div className="absolute top-0 left-0 z-20 h-screen w-screen bg-black">
              <div className="flex-center h-screen">
                <Image src="/assets/trolled.gif" alt="" width="256" height="256" />
              </div>
            </div>
          }
        </div>
      </DarkModeContextProvider>
    </div>
    </body>
    </html>
  )
}