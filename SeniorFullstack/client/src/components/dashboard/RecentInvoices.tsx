import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function RecentInvoices() {
  const invoices = [
    { id: "INV-2023-001", date: "Oct 01, 2023", amount: "$9.99", status: "Paid", service: "Pro Cloud Hosting" },
    { id: "INV-2023-002", date: "Sep 01, 2023", amount: "$9.99", status: "Paid", service: "Pro Cloud Hosting" },
    { id: "INV-2023-003", date: "Aug 01, 2023", amount: "$9.99", status: "Paid", service: "Pro Cloud Hosting" },
  ];

  return (
    <Card className="border-slate-200 shadow-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-base font-medium text-slate-700">Recent Invoices</CardTitle>
        <Button variant="link" className="text-primary h-auto p-0 text-sm">View All</Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-transparent border-slate-100">
              <TableHead className="w-[100px] text-xs uppercase">Invoice #</TableHead>
              <TableHead className="text-xs uppercase">Service</TableHead>
              <TableHead className="text-xs uppercase">Date</TableHead>
              <TableHead className="text-xs uppercase">Amount</TableHead>
              <TableHead className="text-xs uppercase text-right">Status</TableHead>
              <TableHead className="w-[50px]"></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id} className="hover:bg-slate-50 border-slate-100">
                <TableCell className="font-medium text-slate-700 text-xs sm:text-sm">{invoice.id}</TableCell>
                <TableCell className="text-slate-600 text-xs sm:text-sm">{invoice.service}</TableCell>
                <TableCell className="text-slate-500 text-xs sm:text-sm">{invoice.date}</TableCell>
                <TableCell className="text-slate-700 font-semibold text-xs sm:text-sm">{invoice.amount}</TableCell>
                <TableCell className="text-right">
                  <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-200 border-none text-xs">
                    {invoice.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary">
                    <Download size={16} />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}