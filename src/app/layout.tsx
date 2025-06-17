import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL('https://ca-shafaf.github.io/shafaf.ca'),
  title: "Shafaf - Chartered Accountant & Finance Professional",
  description: "Qualified Chartered Accountant and passionate finance professional with extensive experience in taxation, business consultancy, and financial advisory.",
  keywords: [
    "Chartered Accountant",
    "Tax Planning",
    "Business Consultancy",
    "Financial Advisory",
    "GST",
    "Tax Compliance",
    "Financial Education",
    "Business Finance",
    "Indian Taxation",
    "Accounting Services"
  ],
  authors: [{ name: "Shafaf" }],
  openGraph: {
    title: "Shafaf - Chartered Accountant & Finance Professional",
    description: "Expert in taxation, business consultancy, and financial advisory services",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased min-h-screen flex flex-col bg-white`}>
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
