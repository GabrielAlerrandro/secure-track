import { Quote } from "lucide-react"

import { testimonials } from "./data/mock"
import { CarouselCustom } from "./components/carousel"
import type { Testimonial } from "./type"

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que nossos <span className="text-primary">clientes</span> dizem
          </h2>
          <p className="text-muted-foreground text-lg">
            Mais de 2.000 veículos monitorados em tempo real
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <CarouselCustom
            className="max-w-4xl mx-auto"
            items={testimonials}
            renderCardContent={(testimonial: Testimonial) => (
              <>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-medium">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
                <Quote className="w-8 h-8 text-primary/20 mb-2" />
                <p className="text-muted-foreground">{testimonial.content}</p>
              </>
            )}
          />
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
