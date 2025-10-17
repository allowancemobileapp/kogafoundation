import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CONFERENCE_DETAILS } from "@/lib/constants";

export default function AdminSettingsPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Site Settings</CardTitle>
        <CardDescription>
          Manage general event details and API keys.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
            <Label>Event Date</Label>
            <Input defaultValue={CONFERENCE_DETAILS.date} />
        </div>
         <div className="space-y-2">
            <Label>Venue</Label>
            <Input defaultValue={CONFERENCE_DETAILS.venue} />
        </div>
         <div className="space-y-2">
            <Label>Contact Phone</Label>
            <Input defaultValue={CONFERENCE_DETAILS.contactPhone} />
        </div>
        <div className="space-y-2">
            <Label>Paystack Secret Key</Label>
            <Input type="password" defaultValue="test_sk_xxxxxxxx" />
        </div>
        <div className="space-y-2">
            <Label>Stripe Secret Key</Label>
            <Input type="password" defaultValue="sk_test_xxxxxxxx" />
        </div>
        <Button>Save Settings</Button>
      </CardContent>
    </Card>
  );
}
