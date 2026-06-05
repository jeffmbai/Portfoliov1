import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { DM_Sans, JetBrains_Mono } from "next/font/google"
import ClientLayout from "./client-layout"
import { personalInfo } from "@/lib/data"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
})

export const metadata: Metadata = {
  title: `${personalInfo.name} | ${personalInfo.title}`,
  description: personalInfo.summary,
  openGraph: {
    title: `${personalInfo.name} | ${personalInfo.title}`,
    description: personalInfo.summary,
    url: personalInfo.portfolio,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${dmSans.variable} ${jetbrains.variable} font-sans min-h-screen bg-background text-foreground`}
        suppressHydrationWarning
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  )
}
