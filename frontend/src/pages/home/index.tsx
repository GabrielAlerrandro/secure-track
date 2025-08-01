import { Cta } from "./components/cta"
import { FeaturesSection } from "./components/feature"
import Footer from "./components/footer"
import Header from "./components/header"
import { HeroSection } from "./components/hero"
import PricingSection from "./components/pricing"
import TestimonialsSection from "./components/testimonials"
import FaqSection from "./faq"
import LeadFormSection from "./lead"

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <Cta /> {/* OK */}
        <LeadFormSection />
        <FaqSection />
        <Footer />
      </main>
    </div>
  )
}
