import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "../util/tw-merge"
import type { ComponentPropsWithoutRef } from "react"

export function Tabs({
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof TabsPrimitive.Root>>) {
  return (
    <TabsPrimitive.Root
      className={cn("flex w-full flex-col", className)}
      {...rest}
    />
  )
}
export function TabsList({
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof TabsPrimitive.List>>) {
  return (
    <TabsPrimitive.List
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground ",
        className
      )}
      {...rest}
    />
  )
}

export function TabsTrigger({
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>>) {
  return (
    <TabsPrimitive.Trigger
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-xs  cursor-pointer",
        className
      )}
      {...rest}
    />
  )
}

export function TabsContent({
  className,
  ...rest
}: Readonly<ComponentPropsWithoutRef<typeof TabsPrimitive.Content>>) {
  return (
    <TabsPrimitive.Content
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ",
        className
      )}
      {...rest}
    />
  )
}
