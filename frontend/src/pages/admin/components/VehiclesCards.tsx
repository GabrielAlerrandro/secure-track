import { Bell, Lock, Shield } from "lucide-react"
import { Button } from "../../../shared/ui/button"
import { Switch } from "../../../shared/ui/switch"

export const VehiclesCards = ({ vehicles, handleBlockVehicle }) => {
  return (
    <div className="space-y-4 px-4 sm:hidden">
      {vehicles.map((vehicle) => (
        <div
          key={vehicle.id}
          className="border rounded-lg p-4 shadow-sm bg-background"
        >
          <div className="flex justify-between items-center mb-2">
            <h3 className="font-semibold text-lg">{vehicle.model}</h3>
            <span
              className={`w-3 h-3 rounded-full ${
                vehicle.status === "online" ? "bg-green-500" : "bg-red-500"
              }`}
              title={vehicle.status}
            />
          </div>
          <p>
            <strong>Placa:</strong> {vehicle.plate}
          </p>
          <p>
            <strong>Última Localização:</strong> {vehicle.lastLocation}
          </p>
          <div className="flex items-center justify-between mt-3">
            <div className="flex items-center gap-2">
              <Switch
                checked={vehicle.isBlocked}
                onCheckedChange={() =>
                  handleBlockVehicle(vehicle.id, vehicle.isBlocked)
                }
              />
              <span>Bloqueado</span>
            </div>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" aria-label="Bloquear">
                <Lock className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Notificações">
                <Bell className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" aria-label="Segurança">
                <Shield className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
