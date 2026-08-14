import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  title: 'Mohammad Vasim — Full Stack MERN Developer & AI Engineer',
  description:
    'Portfolio of Mohammad Vasim, a Full Stack MERN Developer and AI-powered web application engineer from Lucknow, India. Building modern, scalable, intelligent software.',
  generator: 'Mohammad Vasim Portfolio Engine',
  keywords: [
    'Mohammad Vasim',
    'Full Stack Developer',
    'MERN Developer',
    'AI Engineer',
    'Software Engineer',
    'Portfolio',
  ],
  openGraph: {
    title: 'Mohammad Vasim — Full Stack MERN Developer & AI Engineer',
    description:
      'Building modern, scalable, AI-powered web applications with beautiful user experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#030712',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`bg-background ${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased font-sans noise">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
