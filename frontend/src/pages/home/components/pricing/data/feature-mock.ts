import type { PlanFeature } from "../type"

export const features: PlanFeature[] = [
  {
    id: 1,
    name: "Rastreamento",
    tracker: true,
    blocking: true,
    troia: true,
  },
  {
    id: 2,
    name: "Bloqueio remoto",
    tracker: false,
    blocking: true,
    troia: true,
  },
  {
    id: 3,
    name: "Acionamento de alarme",
    tracker: false,
    blocking: true,
    troia: true,
  },
  {
    id: 4,
    name: "Tróia (segurança ativa)",
    tracker: false,
    blocking: false,
    troia: true,
  },
]
