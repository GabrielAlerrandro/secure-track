import { CheckCircle2, XCircle } from "lucide-react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../../../../../shared/ui/table"
import { features } from "../data/feature-mock"

export function ComparativeTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[300px]">Funcionalidade</TableHead>
          <TableHead className="text-center">Tracker</TableHead>
          <TableHead className="text-center">Blocking</TableHead>
          <TableHead className="text-center">Tróia</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {features.map((feature) => (
          <TableRow key={feature.id}>
            <TableCell className="font-medium">{feature.name}</TableCell>
            <TableCell className="text-center">
              {feature.tracker ? (
                <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.blocking ? (
                <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
              )}
            </TableCell>
            <TableCell className="text-center">
              {feature.troia ? (
                <CheckCircle2 className="h-5 w-5 text-primary mx-auto" />
              ) : (
                <XCircle className="h-5 w-5 text-muted-foreground mx-auto" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
