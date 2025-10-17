import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { EventSchema } from "@/components/event-schema";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <EventSchema />
      </head>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  );
}
