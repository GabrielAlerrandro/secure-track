import type { InputHTMLAttributes } from "react"
import { cn } from "../util/tw-merge"

export function Input({
  className,
  type,
  ...rest
}: Readonly<InputHTMLAttributes<HTMLInputElement>>) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      {...rest}
    />
  )
}
