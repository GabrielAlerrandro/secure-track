import type { ReactNode } from "react"
import { NavLink } from "react-router"

type NavBarProps = {
  children?: ReactNode
  className?: string
}

const navItens = [
  { label: "Funcionalidades", href: "#funcionalidades" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
  { label: "Admin", href: "/admin" },
]

export function NavBar({ children, className }: Readonly<NavBarProps>) {
  return (
    <nav className={className}>
      {navItens.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.href}
            className="text-sm font-medium hover:text-primary transition-colors py-2"
          >
            {item.label}
          </NavLink>
        </li>
      ))}
      {children}
    </nav>
  )
}
