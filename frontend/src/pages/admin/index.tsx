import { useState } from "react"
import AdminHeader from "./components/AdminHeader"
import AdminSidebar from "./components/AdminSidebar"
import VehiclesTable from "./components/VehiclesTable"

const AdminPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col bg-background ">
      <AdminHeader setSidebarOpen={setSidebarOpen} />
      <div className="flex flex-1">
        <AdminSidebar open={sidebarOpen} setOpen={setSidebarOpen} />
        <main className="flex-1 px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Painel Administrativo</h1>
            <p className="text-muted-foreground">
              Gerencie veículos e acione funcionalidades
            </p>
          </div>
          <VehiclesTable />
        </main>
      </div>
    </div>
  )
}

export default AdminPage
