import ActiveSectionContextProvider from '@/context/active-section-context'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Juan Pablo Cerda',
  description: 'Juan Pablo`s portfolio website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ActiveSectionContextProvider>
          <Navbar/>
          {children}
          <Analytics />
        </ActiveSectionContextProvider>
      </body>
    </html>
  )
}
