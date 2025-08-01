import { useState } from "react"

import {
  Lock,
  Bell,
  Shield,
  Car,
  X,
  Microchip,
  RectangleEllipsis,
  Cpu,
} from "lucide-react"
import { FormProvider, useForm } from "react-hook-form"
import { Card, CardContent, CardHeader } from "../../../shared/ui/card"
import { Button } from "../../../shared/ui/button"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../shared/ui/table"
import { Switch } from "../../../shared/ui/switch"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "../../../shared/ui/pagination"
import { mockVehicles } from "../data/mockVehicles"
import {
  FormField,
  FormInput,
  FormLabel,
  FormMessage,
  FormRoot,
} from "../../../shared/ui/form-novo"
import { VehiclesCards } from "./VehiclesCards"

const VehiclesTable = () => {
  const [vehicles, setVehicles] = useState(mockVehicles)
  const [openModal, setOpenModal] = useState(false)
  const methods = useForm()
  const handleAddVehicle = () => {
    console.log("OI")
    setOpenModal((prev) => !prev)
  }

  const handleBlockVehicle = (id: string, isBlocked: boolean) => {
    const newVehicles = vehicles.map((vehicle) =>
      vehicle.id === id ? { ...vehicle, isBlocked: !isBlocked } : vehicle
    )
    setVehicles(newVehicles)
  }

  return (
    <>
      <Card>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Veículos rastreados</h2>
          <div className="flex gap-2">
            <Button
              size="sm"
              variant="outline"
              className="flex items-center gap-2"
              onClick={handleAddVehicle}
            >
              <Car className="h-4 w-4" />
              Adicionar veículo
            </Button>
          </div>
        </div>

        <VehiclesCards
          vehicles={vehicles}
          handleBlockVehicle={handleBlockVehicle}
        />

        <div className="hidden sm:block">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Modelo</TableHead>
                <TableHead>Placa</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Última Localização</TableHead>
                <TableHead>Bloqueio</TableHead>
                <TableHead className="text-right">Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {vehicles.map((vehicle) => (
                <TableRow key={vehicle.id}>
                  <TableCell className="font-medium">{vehicle.model}</TableCell>
                  <TableCell>{vehicle.plate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <span
                        className={`w-2 h-2 rounded-full ${
                          vehicle.status === "online"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      />
                      <span className="capitalize">{vehicle.status}</span>
                    </div>
                  </TableCell>
                  <TableCell>{vehicle.lastLocation}</TableCell>
                  <TableCell>
                    <Switch
                      checked={vehicle.isBlocked}
                      onCheckedChange={() =>
                        handleBlockVehicle(vehicle.id, vehicle.isBlocked)
                      }
                    />
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="icon" variant="ghost">
                        <Lock className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Bell className="h-4 w-4" />
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Shield className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="p-4 border-t">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </Card>

      {openModal && (
        <div className="fixed inset-0 w-full h-full flex items-center justify-center bg-black/50 z-40 p-4">
          <Card className="bg-background w-full max-w-2xl mx-4 sm:mx-auto rounded-md">
            <CardHeader className="flex justify-between items-center flex-row">
              <h2 className="text-lg sm:text-xl font-semibold text-foreground">
                Adicionar Veículo
              </h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setOpenModal(false)}
              >
                <X className="h-4 w-4 text-foreground" />
              </Button>
            </CardHeader>

            <CardContent>
              <FormProvider {...methods}>
                <FormRoot>
                  <div className="space-y-4">
                    <FormField name="model">
                      <FormLabel htmlFor="model">
                        <Car className="h-5 w-5 text-primary" />
                        Modelo
                      </FormLabel>
                      <FormInput id="model" placeholder="Chevrolet Onix" />
                      <FormMessage />
                    </FormField>

                    <FormField name="license-plate">
                      <FormLabel htmlFor="license-plate">
                        <RectangleEllipsis className="h-5 w-5 text-primary" />
                        Placa
                      </FormLabel>
                      <FormInput id="license-plate" placeholder="JQK2M47" />
                      <FormMessage />
                    </FormField>

                    <FormField name="tracker">
                      <FormLabel htmlFor="tracker">
                        <Cpu className="h-5 w-5 text-primary" />
                        Rastreador
                      </FormLabel>
                      <FormInput
                        id="tracker"
                        placeholder="8944500102198400493"
                      />
                      <FormMessage />
                    </FormField>

                    <Button
                      type="submit"
                      className="w-full"
                      onClick={() => {
                        console.log("Form submitted")
                        setOpenModal(false)
                      }}
                    />
                  </div>
                </FormRoot>
              </FormProvider>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  )
}

export default VehiclesTable
