import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ELIFs Playground',
  description: '',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth snap-y select-none relative">
      <body className={`${inter.className} bg-neutral-950 text-neutral-50 overflow-x-hidden relative`}>{children}</body>
    </html>
  )
}
