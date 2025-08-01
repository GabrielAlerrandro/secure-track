import type { ReactNode } from "react"
import React from "react"
import { cn } from "../util/tw-merge"

interface BadgeProps {
  className?: string
  variant: "primary" | "outline"
  children: ReactNode
}

const type = {
  primary: "bg-primary/10 text-primary",
  outline: "bg-secondary/50",
}

export function Badge({ className, variant, children }: Readonly<BadgeProps>) {
  return (
    <div className="flex flex-wrap">
      <div
        className={cn(
          `flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${type[variant]}`,
          className
        )}
      >
        {children}
      </div>
    </div>
  )
}

export function Icon({ children }) {
  return (
    <div>
      {React.cloneElement(children, {
        className: cn("w-3.5 h-3.5 text-primary", children.props.className),
      })}
    </div>
  )
}

export function Description({ children }) {
  return <span>{children}</span>
}
