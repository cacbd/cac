import type { Metadata } from "next";
import { DM_Sans, Fraunces } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cac.bd"),
  title: "Cambridge Academic Centre Chittagong | English, IELTS & Personal Development Courses",
  description:
    "Cambridge Academic Centre Chittagong is a premium English Language and Personal Development Institute. We offer IELTS, TOEFL, Speaking, Listening, Reading, Writing, Grammar, Business English, Public Speaking, Confidence Building and Leadership Development programmes for children, teenagers, adults and professionals. 146 North Nalapara, Chittagong. Call +44 7762 308 545.",
  keywords: [
    "IELTS Chittagong",
    "TOEFL Chittagong",
    "English course Chittagong",
    "spoken English Bangladesh",
    "Cambridge Academic Centre",
    "English coaching Chittagong",
    "IELTS preparation Bangladesh",
    "business English course",
    "English for kids Chittagong",
  ],
  authors: [{ name: "Cambridge Academic Centre" }],
  creator: "Cambridge Academic Centre",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cac.bd",
    siteName: "Cambridge Academic Centre Chittagong",
    title: "Cambridge Academic Centre Chittagong",
    description:
      "Premium English courses for all ages. Speak • Learn • Achieve • Succeed.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Cambridge Academic Centre Chittagong",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cambridge Academic Centre Chittagong",
    description:
      "Premium English courses for all ages. Speak • Learn • Achieve • Succeed.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://cac.bd",
  },
};

const schemaOrg = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Cambridge Academic Centre Chittagong",
  description:
    "Premium English language teaching centre offering IELTS, TOEFL, Spoken English and 11+ courses for all ages.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "146 North Nalapara",
    addressLocality: "Chittagong",
    addressCountry: "BD",
  },
  telephone: "+447762308545",
  url: "https://cac.bd",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "English Courses",
    itemListElement: [
      { "@type": "Course", name: "IELTS Preparation" },
      { "@type": "Course", name: "TOEFL Preparation" },
      { "@type": "Course", name: "Spoken English" },
      { "@type": "Course", name: "Business English" },
      { "@type": "Course", name: "English for Kids & Teens" },
      { "@type": "Course", name: "Reading Skills" },
      { "@type": "Course", name: "Writing Skills" },
      { "@type": "Course", name: "Listening Skills" },
      { "@type": "Course", name: "Grammar & Vocabulary" },
      { "@type": "Course", name: "Interview & Presentation Skills" },
      { "@type": "Course", name: "Professional Development" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${fraunces.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrg) }}
        />
      </head>
      <body>
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-J058LXT8R6"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-J058LXT8R6');
          `}
        </Script>
      </body>
    </html>
  );
}
