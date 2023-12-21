// Local imports from project
import './globals.css'
import { AuthContextProvider } from '@/context/AuthContext'
import { Navbar } from '@/components/navbar'

export const metadata = {
  title: 'The Coffin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthContextProvider>
          <Navbar />
          {children}
        </AuthContextProvider>
      </body>
    </html>
  )
}
