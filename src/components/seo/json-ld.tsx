export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Intiora Indonesia",
    url: "https://intiora.ai",
    logo: "https://intiora.ai/logo-intiora.webp",
    description:
      "Platform AI Agent Omnichannel untuk Customer Service & Sales 24/7 di Indonesia.",
    sameAs: [
      "https://twitter.com/intiora_ai",
      "https://linkedin.com/company/intiora",
      "https://instagram.com/intiora.ai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      telephone: "+62-21-500-INTIORA",
      email: "support@intiora.ai",
      availableLanguage: ["Indonesian", "English"],
    },
  };

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Intiora AI Omnichannel Platform",
    operatingSystem: "Web-based, Cloud",
    applicationCategory: "BusinessApplication",
    description:
      "AI Agent & Omnichannel CRM untuk otomatisasi customer service, broadcast WhatsApp, dan sales qualification 24/7.",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "IDR",
      lowPrice: "299000",
      highPrice: "899000",
      offerCount: "3",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "3200",
      bestRating: "5",
      worstRating: "1",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
    </>
  );
}
