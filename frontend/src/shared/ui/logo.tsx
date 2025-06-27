import { Link } from "react-router"

export function Logo() {
  return (
    <div className="flex items-center">
      <Link to="/" className="text-xl font-bold text-primary">
        Tracker<span className="text-foreground">Safe</span>
      </Link>
    </div>
  )
}
