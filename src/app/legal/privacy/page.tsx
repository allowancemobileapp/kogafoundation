import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Your privacy is important to us.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto prose dark:prose-invert">
        <p>This is a placeholder for the Privacy Policy. A full privacy policy should be generated and placed here, covering data collection, usage, storage, and user rights related to the registration, nomination, and payment processes.</p>
        <h2>1. Information We Collect</h2>
        <p>We collect information you provide directly to us, such as when you register for the event, submit a nomination, or otherwise communicate with us.</p>
        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect to administer the conference, process payments, manage nominations, and communicate with you.</p>
      </div>
    </div>
  );
}
