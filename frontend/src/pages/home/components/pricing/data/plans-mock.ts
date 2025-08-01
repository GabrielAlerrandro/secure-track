export const plans = [
  {
    id: 1,
    name: "Tracker",
    description: "Rastreamento básico para quem deseja mais tranquilidade",
    monthlyPrice: 29,
    yearlyPrice: 290,
    features: [
      "Rastreamento em tempo real",
      "Histórico de percursos",
      "Aplicativo mobile",
    ],
    popularPlan: false,
  },
  {
    id: 2,
    name: "Tracker + Blocking",
    description: "Proteção intermediária com bloqueio remoto",
    monthlyPrice: 39,
    yearlyPrice: 390,
    features: [
      "Tudo do plano Tracker",
      "Bloqueio remoto do veículo",
      "Acionamento de alarme",
    ],
    popularPlan: true,
  },
  {
    id: 3,
    name: "Tracker + Blocking + Tróia",
    description: "Proteção completa com sistema de segurança avançado",
    monthlyPrice: 49,
    yearlyPrice: 490,
    features: [
      "Tudo do plano anterior",
      "Sistema Tróia de segurança",
      "Suporte prioritário",
    ],
    popularPlan: false,
  },
]
