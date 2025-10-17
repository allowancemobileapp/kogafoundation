
'use client';

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { exportToCsv } from "@/lib/utils";
import { Download } from "lucide-react";

const placeholderNominations = [
  { nominee: 'Olivia Martin', category: 'Community Impact', nominator: 'John Doe', status: 'New' },
  { nominee: 'Jackson Lee', category: 'Youth Leadership', nominator: 'Jane Smith', status: 'Shortlisted' },
  { nominee: 'Sophia Williams', category: 'Innovation in Ministry', nominator: 'Alice Johnson', status: 'Under Review' },
  { nominee: 'Liam Brown', category: 'Community Impact', nominator: 'Bob Williams', status: 'Winner' },
  { nominee: 'Ava Jones', category: 'Youth Leadership', nominator: 'Charlie Brown', status: 'Rejected' },
];

export default function AdminNominationsPage() {
  const handleExport = () => {
    exportToCsv('nominations.csv', placeholderNominations);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Nominations</CardTitle>
          <CardDescription>
            Review and manage all award nominations.
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
              <TableHead>Nominee</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Nominator</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {placeholderNominations.length === 0 ? (
               <TableRow>
                <TableCell colSpan={5} className="h-24 text-center">
                  No nominations yet.
                </TableCell>
              </TableRow>
            ) : (
              placeholderNominations.map((nom) => (
                <TableRow key={nom.nominee}>
                  <TableCell className="font-medium">{nom.nominee}</TableCell>
                  <TableCell>{nom.category}</TableCell>
                  <TableCell>{nom.nominator}</TableCell>
                  <TableCell>{nom.status}</TableCell>
                  <TableCell><Button variant="outline" size="sm">Review</Button></TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
