import { Shield } from "lucide-react"
import { Link } from "react-router"

export function Logo() {
  return (
    <div className="flex items-center gap-1 mb-4">
      <Shield className="text-primary h-7 w-7" />
      <Link to="/" className="text-xl font-bold text-primary">
        Tracker<span className="text-foreground">Safe</span>
      </Link>
    </div>
  )
}
