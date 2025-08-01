import { useEffect, useRef, useState } from "react"
import { CheckCircle2, XCircle, Table as TableIcon } from "lucide-react"
import { Card, CardContent } from "../../../../shared/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../../../../shared/ui/tabs"

import { features } from "./data/feature-mock"
import { ComparativeTable } from "./components/comparative-table"
import { PlanCard } from "./components/plan-card"
import { PlanTabs } from "./components/plan-tabs"

function PricingSection() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">(
    "monthly"
  )
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible")
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section id="planos" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 " ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Escolha o plano <span className="text-primary">ideal</span> para
            você
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Opções flexíveis para atender às suas necessidades com o melhor
            custo-benefício
          </p>

          <PlanTabs
            billingPeriod={billingPeriod}
            setBillingPeriod={setBillingPeriod}
          />
        </div>

        {/* Plans Cards */}
        <PlanCard billingPeriod={billingPeriod} />

        {/* Features Comparison Table */}
        <div className="">
          <div className="flex items-center gap-2 justify-center mb-8">
            <TableIcon className="h-5 w-5 text-primary" />
            <h3 className="text-2xl font-bold text-center">
              Tabela comparativa
            </h3>
          </div>

          {/* Mobile view - Tabs */}
          <div className="md:hidden">
            <Tabs defaultValue="tracker">
              <TabsList className="grid grid-cols-3 mb-4">
                <TabsTrigger value="tracker">Tracker</TabsTrigger>
                <TabsTrigger value="blocking">+Blocking</TabsTrigger>
                <TabsTrigger value="troia">+Tróia</TabsTrigger>
              </TabsList>

              {["tracker", "blocking", "troia"].map((tabValue) => (
                <TabsContent key={tabValue} value={tabValue}>
                  <Card>
                    <CardContent className="pt-4">
                      <ul className="space-y-2">
                        {features.map((feature) => {
                          let included = false
                          if (tabValue === "tracker") included = feature.tracker
                          if (tabValue === "blocking")
                            included = feature.blocking
                          if (tabValue === "troia") included = feature.troia

                          return (
                            <li
                              key={feature.id}
                              className="flex items-center justify-between py-2 border-b border-border"
                            >
                              <span>{feature.name}</span>
                              {included ? (
                                <CheckCircle2 className="h-5 w-5 text-primary" />
                              ) : (
                                <XCircle className="h-5 w-5 text-muted-foreground" />
                              )}
                            </li>
                          )
                        })}
                      </ul>
                    </CardContent>
                  </Card>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          {/* Desktop view - Table */}
          <div className="hidden md:block overflow-hidden rounded-lg border border-border">
            <ComparativeTable />
          </div>
        </div>
      </div>
    </section>
  )
}

export default PricingSection
