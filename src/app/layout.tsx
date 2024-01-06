import type { Metadata } from 'next';
import { Chakra_Petch } from 'next/font/google';
import { AuthProvider } from '@/components/ProviderComp';
import './globals.css';

const chakraPetch = Chakra_Petch({ subsets: ['latin'], weight: '400' })

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
      <head>
        <meta name="google-site-verification" content="oVN-kcUbuE64IE6k9hdfy0Z7YzbpvK-VnhBzzwEt0FM" />
      </head>
      <body className={`${chakraPetch.className} bg-neutral-950 text-neutral-50 overflow-x-hidden relative`}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
