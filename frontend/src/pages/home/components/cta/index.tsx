import { Smartphone } from "lucide-react"
import { Badge, Icon } from "../../../../shared/ui/badge"

export function Cta() {
  return (
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-center flex-col">
        <div className="max-w-2xl mx-auto text-center">
          <Badge
            variant="outline"
            className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 mx-auto "
          >
            <Icon>
              <Smartphone className="w-6 h-6" />
            </Icon>
          </Badge>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Controle total,{" "}
            <span className="text-primary">onde você estiver</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Nosso app permite rastrear, bloquear e acionar o alarme do seu
            veículo com apenas um toque. Tenha a tranquilidade de controlar seu
            veículo de qualquer lugar.
          </p>
        </div>
      </div>
    </div>
  )
}
