import Header from '@/components/organisms/Header/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Moonhut',
  description: 'Moonhut is an online marketplace for holiday destination booking and home rentals.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
