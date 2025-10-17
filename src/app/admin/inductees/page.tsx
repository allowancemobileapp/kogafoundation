
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { exportToCsv } from "@/lib/utils";
import { Download } from "lucide-react";

const placeholderInductees = [
  { candidate: 'Grace Adebayo', age: 65, paymentStatus: 'Paid', status: 'Accepted' },
  { candidate: 'Esther Chukwu', age: 58, paymentStatus: 'Paid', status: 'Accepted' },
  { candidate: 'Mercy Bello', age: 72, paymentStatus: 'Pending', status: 'Applied' },
  { candidate: 'Faith Okoro', age: 51, paymentStatus: 'Failed', status: 'Applied' },
  { candidate: 'Hope Ibrahim', age: 68, paymentStatus: 'Paid', status: 'Accepted' },
];


export default function AdminInducteesPage() {
  const handleExport = () => {
    exportToCsv('inductees.csv', placeholderInductees);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Inductees</CardTitle>
          <CardDescription>
            Manage Elderstateswomen Hall of Faith inductions.
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
              <TableHead>Candidate</TableHead>
              <TableHead>Age</TableHead>
              <TableHead>Payment Status</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {placeholderInductees.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No inductees yet.
                </TableCell>
              </TableRow>
            ) : (
              placeholderInductees.map((ind) => (
                <TableRow key={ind.candidate}>
                  <TableCell className="font-medium">{ind.candidate}</TableCell>
                  <TableCell>{ind.age}</TableCell>
                  <TableCell>{ind.paymentStatus}</TableCell>
                  <TableCell>{ind.status}</TableCell>
                  <TableCell className="space-x-2">
                      <Button variant="outline" size="sm">View</Button>
                      <Button variant="secondary" size="sm">Certificate</Button>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
