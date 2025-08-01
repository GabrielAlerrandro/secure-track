import { NavLink } from "react-router"
import { navItens } from "../data/navItens"
import type { NavBarProps } from "../type"

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
