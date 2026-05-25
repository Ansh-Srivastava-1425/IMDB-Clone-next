'use client'

import { MdLightMode, MdDarkMode } from "react-icons/md"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeSwitch() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null  // ← guard BEFORE using theme

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <div>
      <button onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}>
        {currentTheme === 'dark'
          ? <MdLightMode className="text-xl cursor-pointer hover:text-amber-500" />
          : <MdDarkMode className="text-xl cursor-pointer hover:text-amber-500" />}
      </button>
    </div>
  )
}