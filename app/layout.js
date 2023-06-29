import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Poster',
  description: 'Internship task',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}
