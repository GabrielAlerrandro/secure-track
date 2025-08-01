import { ChevronDown } from "lucide-react"
import { cn } from "../util/tw-merge"
import * as AccordionPrimitive from "@radix-ui/react-accordion"

import type { ComponentPropsWithoutRef } from "react"

export const Accordion = AccordionPrimitive.Root

export function AccordionItem({
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>) {
  return (
    <AccordionPrimitive.Item className={cn("border-b", className)} {...rest} />
  )
}
export function AccordionTrigger({
  children,
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>) {
  return (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        className={cn(
          "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180 cursor-pointer hover:text-primary",
          className
        )}
        {...rest}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}
export function AccordionContent({
  children,
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>) {
  return (
    <AccordionPrimitive.Content
      className="overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...rest}
    >
      <div className={cn("pb-4 pt-0", className)}>{children}</div>
    </AccordionPrimitive.Content>
  )
}
