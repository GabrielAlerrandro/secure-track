import { X, Car, Settings, Bell, Shield, Lock } from "lucide-react"
import { Button } from "../../../shared/ui/button"
import { Link } from "react-router"

interface AdminSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
}

const AdminSidebar = ({ open, setOpen }: AdminSidebarProps) => {
  return (
    <>
      <div
        className={`fixed inset-0 z-30 bg-background/80 backdrop-blur-xs lg:hidden transition-opacity ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      />
      <div
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-background border-r border-border transform transition-transform duration-200 lg:translate-x-0 lg:static lg:w-64 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-border lg:border-b-0">
          <span className="text-xl font-bold text-primary">Painel Admin</span>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(false)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="py-4">
          <nav className="px-2 space-y-1">
            <Link
              to="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-primary/10 text-primary"
            >
              <Car className="h-5 w-5" />
              Veículos
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent"
            >
              <Lock className="h-5 w-5" />
              Bloqueios
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent"
            >
              <Bell className="h-5 w-5" />
              Alertas
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent"
            >
              <Shield className="h-5 w-5" />
              Segurança
            </Link>
            <Link
              to="/admin"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-foreground hover:bg-accent"
            >
              <Settings className="h-5 w-5" />
              Configurações
            </Link>
          </nav>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
