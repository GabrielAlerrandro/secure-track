import { Card, CardContent } from "../../../../../shared/ui/card"
import type { FeatureCardProps } from "../type"

export function FeatureCard({
  title,
  description,
  icon,
}: Readonly<FeatureCardProps>) {
  return (
    <Card className="border border-border ">
      <CardContent className="p-6">
        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
          {icon}
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  )
}
