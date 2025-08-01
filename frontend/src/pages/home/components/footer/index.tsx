import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Shield,
  HeartHandshake,
} from "lucide-react"
import { Button } from "../../../../shared/ui/button"
import { Separator } from "../../../../shared/ui/separator"
import { Link } from "react-router"
import { sectionsMock } from "./data/sections-mock"
import { Logo } from "../../../../shared/ui/logo"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-8">
        {/* Top section with logo and brief description */}
        <div className="grid grid-cols-1 md:grid-cols-8 gap-8 mb-10">
          <div className="col-span-1 md:col-span-3">
            <Logo />
            <p className="text-muted-foreground mb-6">
              Soluções avançadas de rastreamento e segurança para seu veículo.
              Tecnologia de ponta para sua total tranquilidade.
            </p>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="icon" className="rounded-full">
                <Instagram size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Facebook size={18} />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin size={18} />
              </Button>
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {sectionsMock.map((section) => (
              <div key={section.column}>
                <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={section.id}>
                      <a
                        href={link.url || "#"}
                        className="text-muted-foreground hover:text-primary transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="col-span-1 md:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">(00) 0000-0000</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground break-all">
                  contato@trackersafe.com.br
                </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span className="text-muted-foreground">
                  Av. Principal, 123
                  <br />
                  Centro, Cidade - UF
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section with copyright and terms */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <HeartHandshake className="h-5 w-5 text-primary" />
            <p>© {currentYear} TrackerSafe. Todos os direitos reservados.</p>
          </div>

          <div className="flex flex-wrap justify-center md:justify-end gap-6">
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              to="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
