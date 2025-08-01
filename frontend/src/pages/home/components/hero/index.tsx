import { ArrowRight, Bell, Download, Lock, Shield } from "lucide-react"
import { Badge, Description, Icon } from "../../../../shared/ui/badge"
import { Button } from "../../../../shared/ui/button"

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 lg:pb-32 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="space-y-8 transition-all duration-700 translate-y-0 opacity-100">
            <div className="flex items-center justify-center">
              <Badge
                variant="primary"
                className="bg-primary/10 text-primary font-semibold"
              >
                <Icon>
                  <Shield />
                </Icon>
                <Description>Segurança garantida 24/7</Description>
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Proteção em tempo real.
              <br />
              <span className="text-primary">Controle com um toque.</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Rastreamento veicular avançado, bloqueio remoto e acionamento de
              alarme diretamente pelo seu celular, onde quer que você esteja.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="primary"
                size="lg"
                className="gap-2 rounded-full group"
              >
                Comece Agora
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 rounded-full"
              >
                <Download className="w-4 h-4" />
                Baixar App
              </Button>
            </div>

            <div className="pt-6">
              <p className="text-sm text-muted-foreground mb-4">
                Disponível em:
              </p>
              <div className="flex items-center justify-center gap-4">
                <div className="w-fit hover:opacity-80 transition-opacity cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/1280px-Download_on_the_App_Store_Badge.svg.png"
                    alt="App Store"
                    className="h-10"
                  />
                </div>
                <div className="w-fit hover:opacity-80 transition-opacity cursor-pointer">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png"
                    alt="Google Play"
                    className="h-10"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              <Badge variant="outline">
                <Icon>
                  <Lock />
                </Icon>
                <Description>Bloqueio Remoto</Description>
              </Badge>

              <Badge variant="outline">
                <Icon>
                  <Lock />
                </Icon>
                <Description>Alerta em Tempo Real</Description>
              </Badge>

              <Badge variant="outline">
                <Icon>
                  <Shield />
                </Icon>
                <Description>Sistema Tróia</Description>
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Enhaced Background  */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full filter blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-primary/10 rounded-full filter blur-3xl" />
      <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-primary/10 rounded-full" />
      <div className="absolute bottom-1/4 right-1/3 w-24 h-24 bg-primary/5 rounded-full" />
    </section>
  )
}
