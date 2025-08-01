import { Moon, Sun } from "lucide-react"
import { Button } from "./button"
import { useTheme } from "../hooks/useTheme"

export function ToggleTheme() {
  const { theme, toggleTheme } = useTheme()
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      aria-label={theme ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {theme ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Button>
  )
}
