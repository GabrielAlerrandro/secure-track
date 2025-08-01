import {
  Controller,
  useFormContext,
  useFormState,
  type ControllerRenderProps,
  type FieldError,
  type FieldValues,
} from "react-hook-form"
import { FormFieldProvider, useFormField } from "../hooks/useFormContext"
import { cn } from "../util/tw-merge"
import { Input } from "./input"
import { Label } from "./label"
import type {
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  ReactNode,
} from "react"

interface FormRootProps extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode
}

export function FormRoot({ children, ...props }: Readonly<FormRootProps>) {
  return <form {...props}>{children}</form>
}

interface FormFieldProps {
  name: string
  children: ReactNode
}

interface FormControllerProps<T extends FieldValues> {
  name: string
  children: (field: ControllerRenderProps<T>) => ReactNode
}

export function FormField({ name, children }: Readonly<FormFieldProps>) {
  const { control } = useFormContext()
  const { errors } = useFormState({ control })

  const fieldError = errors?.[name] as FieldError | undefined
  const id = `field-${name}`
  const formMessageId = `${id}-message`

  return (
    <FormFieldProvider
      value={{
        name,
        id,
        error: fieldError,
        formMessageId,
      }}
    >
      <div className="space-y-2">{children}</div>
    </FormFieldProvider>
  )
}

interface FormLabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode
}

export function FormLabel({
  htmlFor,
  children,
  ...props
}: Readonly<FormLabelProps>) {
  return (
    <Label
      htmlFor={htmlFor}
      className="font-medium flex items-center gap-2 text-sm"
      {...props}
    >
      {children}
    </Label>
  )
}

type FormInputProps = InputHTMLAttributes<HTMLInputElement>

export function FormInput(props: Readonly<FormInputProps>) {
  const { id, error, formMessageId } = useFormField()
  return (
    <Input
      id={id}
      aria-describedby={formMessageId}
      aria-invalid={!!error}
      {...props}
    />
  )
}

interface FormDescriptionProps {
  className?: string
  children: ReactNode
}

export function FormDescription({
  className,
  children,
}: Readonly<FormDescriptionProps>) {
  return (
    <p className={cn("text-sm text-muted-foreground", className)}>{children}</p>
  )
}

export function FormMessage() {
  const { error, formMessageId } = useFormField()

  if (!error) return null

  return (
    <p id={formMessageId} className="text-sm text-destructive">
      {error.message}
    </p>
  )
}

export function FormController<T>({
  name,
  children,
}: Readonly<FormControllerProps<T>>) {
  const { control } = useFormContext()
  const { errors } = useFormState({ control })

  const fieldError = errors?.[name] as FieldError | undefined
  const id = `field-${name}`
  const formMessageId = `${id}-message`

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormFieldProvider
          value={{
            name,
            id,
            error: fieldError,
            formMessageId,
          }}
        >
          <div>{children(field)}</div>
        </FormFieldProvider>
      )}
    />
  )
}
