import { FeatureCard } from "./components/feature-card"
import { features } from "./data/features-mock"

export const FeaturesSection = () => {
  return (
    <section id="funcionalidades" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Funcionalidades <span className="text-primary">avançadas</span> para
            sua segurança
          </h2>
          <p className="text-muted-foreground text-lg">
            Nosso sistema de rastreamento oferece recursos completos para
            proteger seu veículo em qualquer situação.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ id, title, description, icon: Icon }) => (
            <FeatureCard
              key={id}
              title={title}
              description={description}
              icon={<Icon />}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
