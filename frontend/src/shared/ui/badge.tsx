import type { ReactElement } from "react"
import React from "react"

interface BadgeProps {
  description: string
  icon?: ReactElement<{ className?: string }>
  className?: string
  variant: "primary" | "outline"
}

const type = {
  primary: "bg-primary/10 text-primary",
  outline: "bg-secondary/50",
}

export function Badge({ icon, description, className, variant }: BadgeProps) {
  return (
    <div className="flex flex-wrap">
      <div
        className={`flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full ${className} ${type[variant]}`}
      >
        {icon &&
          React.isValidElement(icon) &&
          React.cloneElement(icon, { className: "w-3.5 h-3.5 text-primary" })}
        <span>{description}</span>
      </div>
    </div>
  )
}
