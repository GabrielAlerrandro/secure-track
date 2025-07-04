import Header from "./components/header"
import { HeroSection } from "./components/hero-section"

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
      </main>
    </div>
  )
}
