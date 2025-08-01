import { CheckCircle2 } from "lucide-react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../../../shared/ui/card"
import { plans } from "../data/plans-mock"
import type { Plans } from "../type"
import {Button} from "../../../../../shared/ui/button"

export function PlanCard({ billingPeriod }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
      {plans.map((plan: Plans) => (
        <Card
          key={plan.id}
          className={`border ${
            plan.popularPlan
              ? "border-primary shadow-lg shadow-primary/10 relative"
              : "border-border"
          } card-hover-effect`}
        >
          {plan.popularPlan && (
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white text-xs font-medium px-3 py-1 rounded-full">
              Mais popular
            </div>
          )}
          <CardHeader className="pt-8">
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className="text-muted-foreground">{plan.description}</p>
          </CardHeader>
          <CardContent>
            <div className="mb-6">
              <p className="text-4xl font-bold">
                R$
                {billingPeriod === "monthly"
                  ? plan.monthlyPrice
                  : plan.yearlyPrice}
                <span className="text-sm text-muted-foreground font-normal">
                  {billingPeriod === "monthly" ? "/mês" : "/ano"}
                </span>
              </p>
            </div>
            <ul className="space-y-3">
              {plan.features.map((feature, i) => (
                <li key={feature[i]} className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-primary mr-2 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            <Button
              variant={plan.popularPlan ? "primary" : "outline"}
              className="w-full"
            >
              Escolher plano
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
