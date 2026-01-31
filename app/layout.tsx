import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Portafolio - Gaston Ferrari',
  description: 'Portafolio profesional de Gastón Ferrari, Programador Full Stack y docente nivel medio, técnico y superior con orientación en informática.',
  generator: 'v0.app',
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
      <body className={`${poppins.className} font-sans antialiased`} suppressHydrationWarning>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
