import { createContext, useContext } from "react"
import type { FieldError } from "react-hook-form"

interface FormFieldContextType {
  name: string
  id: string
  error?: FieldError
  formMessageId: string
}

export const FormFieldContext = createContext<FormFieldContextType | undefined>(
  undefined
)

export const FormFieldProvider = FormFieldContext.Provider

export function useFormField() {
  const context = useContext(FormFieldContext)
  if (!context) {
    throw new Error("useFormField must be used within a FormField")
  }
  return context
}
