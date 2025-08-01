import { useRef, useEffect } from "react"

import { Mail, CheckCircle2, User, Phone, MapPin } from "lucide-react"

import { zodResolver } from "@hookform/resolvers/zod"
import { FormProvider, useForm } from "react-hook-form"
import * as z from "zod"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../shared/ui/card"

import { Separator } from "../../../shared/ui/separator"
import { Input } from "../../../shared/ui/input"
import { Checkbox } from "../../../shared/ui/checkbox"
import { Button } from "../../../shared/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../../shared/ui/form"

const LeadFormSection = () => {
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

  const handlePhoneChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (value: string) => void
  ) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length > 0) {
      value = `(${value.substring(0, 2)}${
        value.length > 2 ? ") " : ""
      }${value.substring(2, 7)}${value.length > 7 ? "-" : ""}${value.substring(
        7,
        11
      )}`
    }

    onChange(value)
  }

  const formSchema = z.object({
    name: z
      .string()
      .min(3, { message: "Nome deve ter pelo menos 3 caracteres" }),
    phone: z.string().min(14, { message: "Telefone inválido" }),
    city: z
      .string()
      .min(2, { message: "Cidade deve ter pelo menos 2 caracteres" }),
    whatsapp: z.boolean().default(false),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      phone: "",
      city: "",
      whatsapp: false,
    },
  })

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log("Form data:", data)
  }

  return (
    <section
      id="contato"
      className="py-24 bg-linear-to-b from-secondary/10 to-background"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 " ref={sectionRef}>
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-8 mx-auto">
              <Mail className="h-10 w-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Quer saber mais? Nós entramos em contato com você!
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Preencha o formulário abaixo e nossa equipe entrará em contato
              para tirar todas as suas dúvidas e oferecer a melhor solução para
              suas necessidades.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Atendimento rápido</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Resposta em até 24h</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <span>Consultoria gratuita</span>
              </div>
            </div>
          </div>

          <Card className=" border-primary/10 shadow-xl bg-card/95 backdrop-blur-sm overflow-hidden">
            <div className="grid md:grid-cols-5 relative">
              <div className="bg-primary/5 p-8 md:p-10 md:col-span-2 relative overflow-hidden hidden md:block">
                <div className="absolute inset-0 bg-primary/5 z-0" />
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-6">
                    Benefícios do nosso atendimento
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Consultor especializado</p>
                        <p className="text-sm text-muted-foreground">
                          Um consultor dedicado irá atender você
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Orçamento personalizado</p>
                        <p className="text-sm text-muted-foreground">
                          Soluções adaptadas à sua necessidade
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium">Demonstração gratuita</p>
                        <p className="text-sm text-muted-foreground">
                          Conheça o sistema antes de assinar
                        </p>
                      </div>
                    </li>
                  </ul>

                  <Separator className="my-8" />

                  <div className="space-y-4">
                    <p className="font-medium">Fale diretamente conosco:</p>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-primary" />
                      <span>(11) 9999-9999</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-primary" />
                      <span>contato@empresa.com.br</span>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
                <div className="absolute -top-10 -left-10 w-40 h-40 rounded-full bg-primary/10 blur-3xl"></div>
              </div>

              <div className="p-8 md:p-10 md:col-span-3">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl">
                    Solicite mais informações
                  </CardTitle>
                  <CardDescription>
                    Nossa equipe responderá em até 24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base">
                                <User className="h-4 w-4 text-primary" />
                                Nome completo
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="Digite seu nome"
                                  {...field}
                                  className="border-input/60 focus-visible:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="flex items-center gap-2 text-base">
                                <Phone className="h-4 w-4 text-primary" />
                                Telefone
                              </FormLabel>
                              <FormControl>
                                <Input
                                  placeholder="(00) 00000-0000"
                                  value={field.value}
                                  onChange={(e) =>
                                    handlePhoneChange(e, field.onChange)
                                  }
                                  className="border-input/60 focus-visible:ring-primary"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2 text-base">
                              <MapPin className="h-4 w-4 text-primary" />
                              Cidade
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Digite sua cidade"
                                {...field}
                                className="border-input/60 focus-visible:ring-primary"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="whatsapp"
                        render={({ field }) => (
                          <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md p-4 bg-secondary/30">
                            <FormControl>
                              <Checkbox
                                checked={field.value}
                                onCheckedChange={field.onChange}
                              />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                              <FormLabel>
                                Quero receber contato por WhatsApp
                              </FormLabel>
                              <FormDescription>
                                Receba atualizações e informações via WhatsApp
                              </FormDescription>
                            </div>
                          </FormItem>
                        )}
                      />

                      <Button
                        variant="primary"
                        type="submit"
                        className="w-full py-6 text-lg font-medium transition-all hover:scale-[1.02]"
                        disabled={form.formState.isSubmitting}
                      >
                        {form.formState.isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Enviando...
                          </span>
                        ) : (
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5" />
                            Quero Saber Mais
                          </span>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
                <CardFooter className="px-0 pt-6 mt-6 border-t flex flex-col items-start">
                  <p className="text-sm text-muted-foreground">
                    *Ao preencher o formulário, você concorda com nossa{" "}
                    <a href="#" className="text-primary hover:underline">
                      política de privacidade
                    </a>
                    .
                  </p>
                </CardFooter>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default LeadFormSection
