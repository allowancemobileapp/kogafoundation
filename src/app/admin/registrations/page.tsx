
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { exportToCsv } from "@/lib/utils";
import { Download } from "lucide-react";

const placeholderRegistrations = [
  { name: 'John Doe', email: 'john.doe@example.com', ticketType: 'Conference', paymentStatus: 'Paid', date: '2024-05-20' },
  { name: 'Jane Smith', email: 'jane.smith@example.com', ticketType: 'Conference', paymentStatus: 'Unpaid', date: '2024-05-19' },
  { name: 'Alice Johnson', email: 'alice.j@example.com', ticketType: 'Conference', paymentStatus: 'Paid', date: '2024-05-21' },
  { name: 'Bob Williams', email: 'bob.w@example.com', ticketType: 'Conference', paymentStatus: 'Paid', date: '2024-05-22' },
  { name: 'Charlie Brown', email: 'charlie.b@example.com', ticketType: 'Volunteer', paymentStatus: 'N/A', date: '2024-05-18' },
];

export default function AdminRegistrationsPage() {
  const handleExport = () => {
    exportToCsv('registrations.csv', placeholderRegistrations);
  };

  return (
     <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Registrations</CardTitle>
          <CardDescription>
            Manage and view all conference registrations.
          </CardDescription>
        </div>
        <Button size="sm" variant="outline" onClick={handleExport}>
          <Download className="h-4 w-4 mr-2" />
          Export CSV
        </Button>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Ticket Type</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {placeholderRegistrations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No registrations yet.
                </TableCell>
              </TableRow>
            ) : (
              placeholderRegistrations.map((reg) => (
                <TableRow key={reg.email}>
                  <TableCell className="font-medium">{reg.name}</TableCell>
                  <TableCell>{reg.email}</TableCell>
                  <TableCell>{reg.ticketType}</TableCell>
                  <TableCell>{reg.paymentStatus}</TableCell>
                  <TableCell>{reg.date}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
