export default function TermsPage() {
  return (
    <div className="container py-12 md:py-20">
      <h1 className="text-4xl font-extrabold tracking-tight text-center font-headline lg:text-5xl">
        Terms of Service
      </h1>
      <p className="mt-4 max-w-3xl mx-auto text-center text-lg text-muted-foreground">
        Please read these terms carefully.
      </p>
      
      <div className="mt-12 max-w-4xl mx-auto prose dark:prose-invert">
        <p>This is a placeholder for the Terms of Service. A full terms of service document should be generated and placed here, covering event policies, payment and refund policies, code of conduct, and limitations of liability.</p>
        <h2>1. Registration and Payment</h2>
        <p>All registrations are subject to availability and full payment. Please see registration page for fees. Refunds will be handled on a case-by-case basis.</p>
        <h2>2. Code of Conduct</h2>
        <p>All attendees, speakers, sponsors, and volunteers at our conference are required to agree with the following code of conduct.</p>
      </div>
    </div>
  );
}
