import React from 'react'
import { Metadata } from 'next'
import { CartProvider } from '@/context/CartContext'
import StyledComponentsRegistry from '@/lib/registry'
import { GlobalStyles } from '@/GlobalStyles'
import Header from '@/components/Header'
import Footer from '@/components/FooterNew'

export const metadata: Metadata = {
  title: 'Boutique Store',
  description: 'A boutique online store with high-quality products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <CartProvider>
            <GlobalStyles />
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
              <Header />
              <main style={{ flex: 1 }}>
                {children}
              </main>
              <Footer />
            </div>
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
} 