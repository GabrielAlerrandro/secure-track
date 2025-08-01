import * as SeparatorPrimitive from "@radix-ui/react-separator"
import { cn } from "../util/tw-merge"
import type { ComponentPropsWithoutRef } from "react"

export function Separator({
  className,
  orientation,
  decorative,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>>) {
  return (
    <SeparatorPrimitive.Root
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className
      )}
      {...rest}
    />
  )
}
