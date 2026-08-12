"use client"

import { useCallback, useLayoutEffect, useState } from "react"
import { THEME_STORAGE_KEY } from "@/lib/theme-script"

type Theme = "light" | "dark"

function getStoredTheme(): Theme {
  if (typeof window === "undefined") return "light"
  return document.documentElement.classList.contains("dark") ? "dark" : "light"
}

/**
 * .dark 클래스 기반 다크모드 훅. 별도 Context/Provider 없이
 * head 인라인 스크립트가 적용한 클래스를 읽고 토글한다.
 * useLayoutEffect는 dev StrictMode 재마운트가 클래스를 리셋하는 것을 보정한다.
 */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(getStoredTheme)

  useLayoutEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark")
  }, [theme])

  const setTheme = useCallback((next: Theme) => {
    localStorage.setItem(THEME_STORAGE_KEY, next)
    setThemeState(next)
  }, [])

  const toggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark")
  }, [theme, setTheme])

  return { theme, setTheme, toggle }
}
