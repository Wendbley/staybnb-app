import './globals.css'
import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import Header from './components/Header'

const inter = Nunito({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Staybnb App',
  description: 'Clone of Staybnb App',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
