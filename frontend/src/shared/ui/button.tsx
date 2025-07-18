import type { ButtonHTMLAttributes, ReactNode } from "react"

type ButtonProps = {
  children?: ReactNode
  variant:
    | "primary"
    | "secondary"
    | "ghost"
    | "link"
    | "destructive"
    | "outline"
  size?: "sm" | "md" | "lg" | "icon"
  className?: string
} & ButtonHTMLAttributes<HTMLButtonElement>

const type = {
  primary: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  destructive:
    "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline:
    "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
}

const base =
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2  disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"

const sizeVariant = {
  md: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`${base} ${type[variant]} ${sizeVariant[size]} ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </button>
  )
}
