export type PlanFeature = {
  id: number
  name: string
  tracker: boolean
  blocking: boolean
  troia: boolean
}

export type Plans = {
  id: number
  name: string
  description: string
  monthlyPrice: number
  yearlyPrice: number
  features: string[]
  popularPlan: boolean
}
