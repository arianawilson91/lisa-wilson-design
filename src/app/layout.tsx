import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Lisa Wilson Design | Kitchen Designer in Cape Coral, FL",
  description:
    "Custom kitchen design and remodeling in Cape Coral, Florida. Authorized Woodharbor cabinetry dealer. Kitchen renovation, custom cabinets, and design consultation for Southwest Florida homes.",
  keywords: [
    "kitchen designer Cape Coral",
    "kitchen design Cape Coral FL",
    "kitchen remodel Cape Coral",
    "kitchen renovation Fort Myers",
    "kitchen designer Fort Myers",
    "kitchen designer Naples FL",
    "Woodharbor cabinetry",
    "Woodharbor cabinets Florida",
    "custom kitchen cabinets Cape Coral",
    "custom cabinets Southwest Florida",
    "kitchen designer near me",
    "Cape Coral kitchen remodeling",
    "Lisa Wilson Design",
    "luxury kitchen design Florida",
    "Southwest Florida kitchen designer",
    "kitchen remodel Southwest Florida",
    "kitchen layout design",
    "countertop selection",
    "cabinet refacing Cape Coral",
  ],
  authors: [{ name: "Lisa Wilson Design" }],
  openGraph: {
    title: "Lisa Wilson Design | Luxury Kitchen Designer",
    description:
      "Custom kitchen design in Cape Coral, Florida. Specializing in Woodharbor cabinetry. Beautiful, functional kitchens tailored to your lifestyle.",
    url: "https://lisawilsondesign.com",
    siteName: "Lisa Wilson Design",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://lisawilsondesign.com/portfolio/kitchen-waterfront-view.jpg",
        width: 1200,
        height: 630,
        alt: "Lisa Wilson Design - Luxury Kitchen Design in Cape Coral, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lisa Wilson Design | Kitchen Designer in Cape Coral, FL",
    description:
      "Custom kitchen design in Cape Coral, Florida. Specializing in Woodharbor cabinetry.",
    images: ["https://lisawilsondesign.com/portfolio/kitchen-waterfront-view.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://lisawilsondesign.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "@id": "https://lisawilsondesign.com/#business",
                name: "Lisa Wilson Design",
                description:
                  "Custom kitchen design and remodeling in Cape Coral, Florida. Specializing in Woodharbor cabinetry, kitchen renovation, and custom cabinets for Southwest Florida homes.",
                url: "https://lisawilsondesign.com",
                telephone: "+1-239-336-9975",
                email: "lisawilsondesign@gmail.com",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Cape Coral",
                  addressRegion: "FL",
                  addressCountry: "US",
                },
                areaServed: [
                  { "@type": "City", name: "Cape Coral, Florida" },
                  { "@type": "City", name: "Fort Myers, Florida" },
                  { "@type": "City", name: "Naples, Florida" },
                  { "@type": "City", name: "Bonita Springs, Florida" },
                  { "@type": "City", name: "Estero, Florida" },
                ],
                priceRange: "$$",
                image: "https://lisawilsondesign.com/portfolio/kitchen-waterfront-view.jpg",
                sameAs: [],
                hasOfferCatalog: {
                  "@type": "OfferCatalog",
                  name: "Kitchen Design Services",
                  itemListElement: [
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Kitchen Design & Remodeling",
                        description:
                          "Full-service kitchen design and renovation from concept to completion, including space planning, layout optimization, and material selection.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Custom Cabinetry",
                        description:
                          "Authorized dealer of Woodharbor custom and semi-custom cabinetry. Premium American-made cabinets built to your specifications.",
                      },
                    },
                    {
                      "@type": "Offer",
                      itemOffered: {
                        "@type": "Service",
                        name: "Design Consultation",
                        description:
                          "Expert guidance for kitchen remodel projects, including budget planning, layout optimization, and personalized design direction.",
                      },
                    },
                  ],
                },
                review: [
                  {
                    "@type": "Review",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                    },
                    author: { "@type": "Person", name: "Sarah M." },
                    reviewBody:
                      "Lisa transformed our kitchen beyond what we imagined. Her eye for detail and understanding of how we live made all the difference.",
                  },
                  {
                    "@type": "Review",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                    },
                    author: { "@type": "Person", name: "James & Karen T." },
                    reviewBody:
                      "From the very first consultation, Lisa listened to exactly what we wanted. The Woodharbor cabinets she recommended are stunning.",
                  },
                  {
                    "@type": "Review",
                    reviewRating: {
                      "@type": "Rating",
                      ratingValue: "5",
                    },
                    author: { "@type": "Person", name: "Michelle R." },
                    reviewBody:
                      "Working with Lisa was effortless. She handled everything and kept us on budget. We get compliments on our kitchen every single time we entertain.",
                  },
                ],
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "5",
                  reviewCount: "3",
                },
              },
            ]),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} antialiased font-[family-name:var(--font-geist-sans)]`}
      >
        {children}
      </body>
    </html>
  );
}
