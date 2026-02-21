import type { Metadata } from 'next'
import { Outfit, Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import '../styles/globals.css'

const outfit = Outfit({
  subsets: ["latin"],
  variable: '--font-outfit'
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'Portafolio - Gaston Ferrari',
  description: 'Portafolio profesional de Gastón Ferrari, Programador Full Stack y docente nivel medio, técnico y superior con orientación en informática.',
  icons: {
    icon: '/img/portafolio.ico',
    apple: '/img/portafolio.ico',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
