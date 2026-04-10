import type { Metadata, Viewport } from "next"
import { Inter, Space_Grotesk } from "next/font/google"
import { GoogleAnalytics } from "@next/third-parties/google"
import { AnalyticsProvider } from "@/components/analytics-provider"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  title: "TuneVote - Collaborative Music Voting App for Parties & Groups",
  description:
    "TuneVote: The best collaborative music voting app. Create sessions, suggest songs, and let friends vote democratically on what plays next. Ideal for parties, road trips, workouts, and DJs.",
  keywords: [
    "collaborative playlist",
    "music voting",
    "party music app",
    "democratic playlist",
    "shared music session",
    "TuneVote",
  ],
  authors: [{ name: "TuneVote" }],
  creator: "TuneVote",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tunevote.com",
    siteName: "TuneVote",
    title: "TuneVote - Play music democratically",
    description:
      "Create a session and let everyone vote on which song comes next. Perfect for parties, car rides, and sports.",
    images: [
      {
        url: "https://tunevote.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "TuneVote collaborative music voting app",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TuneVote - Play music democratically",
    description: "Create a session and let everyone vote on which song comes next.",
    images: ["https://tunevote.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/og-image.png",
    apple: "/og-image.png",
  },
  metadataBase: new URL("https://tunevote.com"),
}

export const viewport: Viewport = {
  themeColor: "#A855F7",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "TuneVote",
              applicationCategory: "MultimediaSoftware",
              operatingSystem: "Web Browser",
              offers: {
                "@type": "Offer",
                price: "0",
              },
              description: "Collaborative music sessions with live voting",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased bg-background text-foreground`}>
        <AnalyticsProvider>
          {children}
        </AnalyticsProvider>
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  )
}
