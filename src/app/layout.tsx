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
    "Custom kitchen design in Cape Coral, Florida. Specializing in Woodharbor cabinetry. Beautiful, functional kitchens tailored to your lifestyle.",
  keywords: [
    "kitchen designer",
    "kitchen design Cape Coral",
    "kitchen remodel Cape Coral FL",
    "Woodharbor cabinetry",
    "custom kitchen cabinets",
    "kitchen designer near me",
    "Cape Coral kitchen remodeling",
    "Lisa Wilson Design",
    "luxury kitchen design Florida",
    "Southwest Florida kitchen designer",
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
        url: "/portfolio/kitchen-waterfront-view.jpg",
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
    images: ["/portfolio/kitchen-waterfront-view.jpg"],
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Lisa Wilson Design",
              description:
                "Custom kitchen design in Cape Coral, Florida. Specializing in Woodharbor cabinetry.",
              url: "https://lisawilsondesign.com",
              telephone: "+1-239-336-9975",
              email: "lisawilsondesign@gmail.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Cape Coral",
                addressRegion: "FL",
                addressCountry: "US",
              },
              areaServed: {
                "@type": "Place",
                name: "Cape Coral, FL",
              },
              priceRange: "$$",
              image: "/portfolio/kitchen-waterfront-view.jpg",
              sameAs: [],
            }),
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
