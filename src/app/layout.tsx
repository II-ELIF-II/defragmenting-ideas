import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { AuthProvider } from '@/components/ProviderComp'
import { getEnvironment } from './utilities'

const inter = Inter({ subsets: ['latin'] })

export async function generateMetadata(Params: any) {
  const {params, searchParams} = Params;

  const getFeaturedSummary = async() => {
    const res = await fetch(getEnvironment().concat("/api/postSumFeatured"),{
      cache: "no-store",
    });
  
    if(!res.ok){
      throw new Error("Failed")
    }
  
    return res.json()
  };

  const [Post] = await getFeaturedSummary();

  return {
    icons: {
      icon: '/favicon.ico'
    },
    title: "ELIFS PLAYGROUND",
    description: "",
    openGraph: {
      images: Post.thumbnail,
    },
  };
};

// export const metadata: Metadata = {
//   title: 'ELIFS PLAYGROUND',
//   description: '',
// }

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
