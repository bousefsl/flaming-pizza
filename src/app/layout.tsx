//Next
import type { Metadata } from "next"
//Fonts
import { Anton, Great_Vibes } from "next/font/google"
//Styles
import "./globals.css"
//Components
import NavBar from "@/components/global/NavBar"
import Footer from "@/components/global/Footer"

const antonSans = Anton({
  variable: "--font-anton-sans",
  subsets: ["latin"],
  weight: "400",
})

const greatVibes = Great_Vibes({
  variable: "--font-great-vibes",
  subsets: ["latin"],
  weight: "400",
})

export const metadata: Metadata = {
  title: "Flaming Pizza",
  description: "A NextJS demo for a mock Pizza website",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${antonSans.variable} ${greatVibes.variable} antialiased`}>
        {/*Necessary for footer to stick to the bottom*/}
        <div className="min-h-screen flex flex-col">
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
