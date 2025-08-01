import type { HTMLAttributes } from "react"
import { cn } from "../util/tw-merge"

export function Card({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div
      className={cn(
        `rounded-lg border bg-card text-card-foreground shadow-xs`,
        className
      )}
      {...rest}
    />
  )
}

export function CardHeader({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn(`flex flex-col space-y-1.5 p-6`, className)} {...rest} />
  )
}

export function CardTitle({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLHeadingElement>>) {
  return (
    <h3
      className={cn(
        `text-2xl font-semibold leading-none tracking-tight`,
        className
      )}
      {...rest}
    />
  )
}

export function CardDescription({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLParagraphElement>>) {
  return (
    <p className={cn(`text-sm text-muted-foreground`, className)} {...rest} />
  )
}

export function CardContent({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return <div className={cn(`p-6 pt-0 `, className)} {...rest} />
}

export function CardFooter({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLDivElement>>) {
  return (
    <div className={cn(`flex items-center p-6 pt-0`, className)} {...rest} />
  )
}
