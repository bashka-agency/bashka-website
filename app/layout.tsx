import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BookingProvider } from "@/app/components/booking/BookingProvider";
import BookingModal from "@/app/components/booking/BookingModal";
import StickyBookingBar from "@/app/components/StickyBookingBar";
import { SITE_URL, BUSINESS } from "@/app/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = "Bashka Digital — Marketing agencija Čačak i Beograd";
const description =
  "Bashka Digital je marketing agencija u Čačku i Beogradu — društvene mreže, produkcija sadržaja, kampanje i web. Zakažite besplatan poziv i pokrenimo vaš sledeći projekat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  openGraph: {
    title,
    description,
    url: SITE_URL,
    siteName: BUSINESS.name,
    locale: "sr_RS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: BUSINESS.name,
  description: BUSINESS.description,
  url: SITE_URL,
  email: BUSINESS.email,
  telephone: BUSINESS.phone,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressCountry: BUSINESS.addressCountry,
  },
  areaServed: BUSINESS.areaServed,
  sameAs: BUSINESS.sameAs,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="sr"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#14150f]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <BookingProvider>
          {children}
          <BookingModal />
          <StickyBookingBar />
        </BookingProvider>
      </body>
    </html>
  );
}
