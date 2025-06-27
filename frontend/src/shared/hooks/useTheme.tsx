import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react"
import {
  getThemeFromLocalStorage,
  setThemeInLocalStorage,
} from "../util/fetchLocalStorage"

type ThemeProviderProps = {
  children: ReactNode
}

type ThemeContextType = {
  theme: "light" | "dark"
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function ThemeProvider({ children }: Readonly<ThemeProviderProps>) {
  const [theme, setTheme] = useState(
    () => getThemeFromLocalStorage() || "light"
  )

  const value = useMemo(() => ({ theme, toggleTheme }), [theme])

  useEffect(() => {
    const root = document.documentElement
    const oldTheme = theme === "dark" ? "light" : "dark"

    root.classList.remove(oldTheme)
    root.classList.add(theme)
    setThemeInLocalStorage(theme)
  }, [theme])

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

function useTheme() {
  const context = useContext(ThemeContext)

  if (context == undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
}

export { ThemeProvider, useTheme }
