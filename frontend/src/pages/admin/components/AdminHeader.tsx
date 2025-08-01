import { Link } from "react-router"
import { Button } from "../../../shared/ui/button"
import { Menu } from "lucide-react"
import { ToggleTheme } from "../../../shared/ui/toggle-theme"

interface AdminHeaderProps {
  setSidebarOpen: (open: boolean) => void
}

const AdminHeader = ({ setSidebarOpen }: AdminHeaderProps) => {
  return (
    <header className="bg-background border-b border-border sticky top-0 z-40">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden mr-3"
          >
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-primary">
              Tracker<span className="text-foreground">Safe</span>
            </span>
            <span className="bg-primary/10 text-primary text-xs py-0.5 px-2 rounded-full">
              Admin
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ToggleTheme />
          <Link to="/">
            <Button variant="outline" size="sm">
              Voltar ao site
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

export default AdminHeader
