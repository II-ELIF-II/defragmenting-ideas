import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/ProviderComp'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ELIFS PLAYGROUND',
  description: 'A little corner in the internet for me to post and share my coding adventures and misadventures!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" className="scroll-smooth snap-y select-none relative">
      <body className={`${inter.className} bg-neutral-950 text-neutral-50 overflow-x-hidden relative`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
