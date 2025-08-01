import { AlarmClock, Lock, MapPin, Shield } from "lucide-react"
import type { FeatureProps } from "../type"

export const features: FeatureProps[] = [
  {
    id: 1,
    title: "Rastreamento em tempo real",
    description:
      "Acompanhe a localização exata do seu veículo em tempo real através do nosso aplicativo intuitivo.",
    icon: MapPin,
  },
  {
    id: 2,
    title: "Bloqueio remoto",
    description:
      "Bloqueie o motor do seu veículo remotamente em caso de roubo ou uso não autorizado.",
    icon: Lock,
  },
  {
    id: 3,

    title: "Acionamento de alarme via app",
    description:
      "Acione o alarme do seu veículo diretamente pelo aplicativo em situações de emergência.",
    icon: AlarmClock,
  },
  {
    id: 4,
    title: "Sistema Tróia",
    description:
      "Nossa tecnologia exclusiva de segurança avançada que garante proteção máxima para o seu veículo.",
    icon: Shield,
  },
]
