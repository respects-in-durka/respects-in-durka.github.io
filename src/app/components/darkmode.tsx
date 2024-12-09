"use client"

import {ReactNode, useEffect, useState} from "react"
import {createContext} from "react"

export type DarkModeContextType = {
    dark: boolean
    toggleTheme: () => void
}

type ThemeContextProviderProps = {
    children: ReactNode
}

const DarkModeContextProvider = (props: ThemeContextProviderProps) => {
    const [darkMode, setDarkMode] = useState<boolean>(true)

    useEffect(() => {
        const value = localStorage.getItem("darkMode")
        setDarkMode(value === "true" || (!value && window.matchMedia("(prefers-color-scheme: dark)").matches))
    }, [])

    useEffect(() => {
        localStorage.setItem("dark", String(darkMode))
        if (darkMode) {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark")
        }
    }, [darkMode])

    return (
        <DarkModeContext.Provider value={{dark: darkMode, toggleTheme: () => setDarkMode(!darkMode)}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}

export default DarkModeContextProvider
export const DarkModeContext = createContext<DarkModeContextType>({} as DarkModeContextType)