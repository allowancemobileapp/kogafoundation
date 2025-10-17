import Image from 'next/image';
import { cn } from "@/lib/utils";

export function Logo({ className, ...props }: { className?: string }) {
  return (
    <div className={cn("relative h-10 w-24", className)} {...props}>
      <Image
        src="https://crwwlgwjdclhvwqwspoa.supabase.co/storage/v1/object/public/koga-events/logo.png"
        alt="KOGA Events Logo"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
