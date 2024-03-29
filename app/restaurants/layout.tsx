import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/app/ui/global.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lista Rango',
  description: 'Lista Rango, onde irá listar os melhores restaurantes da região.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className='w-full h-16 bg-teal-500'></header>
        <main className='container mx-auto'>{children}</main>
      </body>
    </html>
  )
}
