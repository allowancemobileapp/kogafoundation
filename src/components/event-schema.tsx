import { CONFERENCE_DETAILS } from '@/lib/constants';

export function EventSchema() {
  const event = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": CONFERENCE_DETAILS.name,
    "startDate": "2025-12-05T10:00:00+01:00",
    "endDate": "2025-12-05T18:00:00+01:00",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "eventStatus": "https://schema.org/EventScheduled",
    "location": {
      "@type": "Place",
      "name": "Lagos State Government Secretariat Hall",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Lagos State Government Secretariat",
        "addressLocality": "Ikeja",
        "addressRegion": "Lagos",
        "postalCode": "100281",
        "addressCountry": "NG"
      }
    },
    "image": [
      `${CONFERENCE_DETAILS.domain}/og-image.png`
     ],
    "description": CONFERENCE_DETAILS.subheadline,
    "organizer": {
      "@type": "Organization",
      "name": "KOGA Faith Foundation",
      "url": CONFERENCE_DETAILS.domain
    },
    "offers": {
      "@type": "Offer",
      "url": `${CONFERENCE_DETAILS.domain}/register`,
      "price": "10000",
      "priceCurrency": "NGN",
      "availability": "https://schema.org/InStock",
      "validFrom": new Date().toISOString().split('T')[0]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(event) }}
    />
  );
}
