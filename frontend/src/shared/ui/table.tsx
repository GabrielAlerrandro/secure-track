import type { HTMLAttributes } from "react"
import { cn } from "../util/tw-merge"

export function Table({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableElement>>) {
  return (
    <div className="relative w-full overflow-auto">
      <table
        className={cn("w-full caption-bottom text-sm", className)}
        {...rest}
      />
    </div>
  )
}

export function TableHeader({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableSectionElement>>) {
  return <thead className={cn("[&_tr]:border-b", className)} {...rest} />
}

export function TableBody({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableSectionElement>>) {
  return (
    <tbody className={cn("[&_tr:last-child]:border-0", className)} {...rest} />
  )
}

export function TableFooter({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableSectionElement>>) {
  return (
    <tfoot
      className={cn(
        "border-t bg-muted/50 font-medium last:[&>tr]:border-b-0",
        className
      )}
      {...rest}
    />
  )
}

export function TableRow({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableRowElement>>) {
  return (
    <tr
      className={cn(
        "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
        className
      )}
      {...rest}
    />
  )
}
export function TableHead({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableCellElement>>) {
  return (
    <th
      className={cn(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...rest}
    />
  )
}
export function TableCell({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableCellElement>>) {
  return (
    <td
      className={cn(
        "p-4 align-middle [&:has([role=checkbox])]:pr-0",
        className
      )}
      {...rest}
    />
  )
}

export function TableCaption({
  className,
  ...rest
}: Readonly<HTMLAttributes<HTMLTableCaptionElement>>) {
  return (
    <caption
      className={cn("mt-4 text-sm text-muted-foreground", className)}
      {...rest}
    />
  )
}
