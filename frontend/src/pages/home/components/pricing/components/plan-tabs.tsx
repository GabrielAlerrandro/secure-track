import { Button } from "../../../../../shared/ui/button"

export function PlanTabs({ billingPeriod, setBillingPeriod }) {
  return (
    <div className="flex justify-center mb-8 ">
      <div className="border border-border rounded-sm p-2 flex gap-2 ">
        <Button
          variant={billingPeriod === "monthly" ? "primary" : "ghost"}
          className={`rounded-sm ${
            billingPeriod === "monthly" ? "" : "hover:text-primary"
          }`}
          onClick={() => setBillingPeriod("monthly")}
        >
          Mensal
        </Button>
        <Button
          variant={billingPeriod === "yearly" ? "primary" : "ghost"}
          className={`rounded-full ${
            billingPeriod === "yearly" ? "" : "hover:text-primary"
          }`}
          onClick={() => setBillingPeriod("yearly")}
        >
          Anual{" "}
          <span className="text-xs ml-1 opacity-75">(2 meses grátis)</span>
        </Button>
      </div>
    </div>
  )
}
