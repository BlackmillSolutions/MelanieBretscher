import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import CookieConsentBanner from "@/components/cookie-consent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Melanie Bretscher - Osteopathie & Naturheilkunde in Aachen",
  description:
    "Professionelle osteopathische und naturheilkundliche Versorgung mit personalisierten Behandlungsplänen. Spezialisiert auf Osteopathie, Ohrakupunktur, Phytotherapie und Physiotherapie.",
  keywords:
    "Osteopathie, Naturheilkunde, Ohrakupunktur, Phytotherapie, Physiotherapie, Aachen, Melanie Bretscher",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
        <CookieConsentBanner />
      </body>
    </html>
  )
}
