import { FormProvider, useForm } from "react-hook-form"
import {Button} from "../../shared/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../shared/ui/card"
import { Logo } from "../../shared/ui/logo"
import z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Lock, Mail } from "lucide-react"
import {
  FormField,
  FormInput,
  FormLabel,
  FormMessage,
  FormRoot,
} from "../../shared/ui/form-novo"

const loginSchema = z.object({
  email: z.email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(1, "Password is required"),
})

type LoginSchema = z.infer<typeof loginSchema>

export function Teste() {
  const methods = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  })

  function handleSubmit(data: LoginSchema) {
    console.log(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4 py-12">
      <div className="w-full max-w-md">
        <div className="text-center mb-8 flex items-center justify-center flex-col">
          <Logo />
          <p className="text-muted-foreground">
            Soluções avançadas de rastreamento e segurança para seu veículo.
          </p>
        </div>
        <Card>
          <CardHeader className="flex items-center justify-center">
            <CardTitle className="flex items-center flex-col">
              Sign in
            </CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <FormProvider {...methods}>
            <FormRoot onSubmit={methods.handleSubmit(handleSubmit)}>
              <div className="space-y-4 p-6 pt-0">
                <FormField name="email">
                  <FormLabel
                    htmlFor="field-email"
                    className="flex items-center gap-2 text-base"
                  >
                    <Mail className="h-4 w-4 text-primary" />
                    Email
                  </FormLabel>
                  <FormInput
                    id="field-email"
                    placeholder="johndoe@gmail.com"
                    {...methods.register("email")}
                  />
                  <FormMessage />
                </FormField>

                <FormField name="password">
                  <FormLabel
                    htmlFor="field-password"
                    className="flex items-center gap-2 text-base"
                  >
                    <Lock className="h-4 w-4 text-primary" />
                    Password
                  </FormLabel>

                  <FormInput
                    id="field-password"
                    placeholder="Enter your password"
                    {...methods.register("password")}
                  />
                  <FormMessage />
                </FormField>
              </div>

              <div className="flex flex-col space-y-4  items-center p-6 pt-0">
                <Button size="md" variant="primary" className="w-full">
                  Sign in
                </Button>

                <Button variant="link" size="sm">
                  Forgot password?
                </Button>
              </div>
            </FormRoot>
          </FormProvider>
        </Card>

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>Demo credentials:</p>
          <p>Admin: admin@gmail.com / password</p>
          <p>User: user@gmail.com / password</p>
        </div>
      </div>
    </div>
  )
}
