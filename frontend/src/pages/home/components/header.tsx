import { Menu, X } from "lucide-react"
import { useState } from "react"
import Button from "../../../shared/ui/button"
import { ToggleTheme } from "../../../shared/ui/toggle-theme"
import { NavBar } from "./navbar"
import { Logo } from "../../../shared/ui/logo"

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((prev) => !prev)
  }
  return (
    <header className=" fixed top-0 left-0 right-0 z-50 transition-all duration-300 ">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Logo />

        <NavBar className="hidden md:flex items-center gap-8">
          <ToggleTheme />
          <Button variant="primary" className="ml-4">
            Comece agora
          </Button>
        </NavBar>

        <div className="flex items-center md:hidden gap-2">
          <ToggleTheme />
          <Button variant="ghost" size="icon" onClick={toggleMenu}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <NavBar className="flex flex-col gap-4">
              <Button variant="primary" className="w-full mt-2">
                Comece Agora
              </Button>
            </NavBar>
          </div>
        </div>
      )}
    </header>
  )
}
