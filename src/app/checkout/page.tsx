'use client'

import { Suspense } from 'react'
import CheckoutPage from '@/components/pages/CheckoutPage'

export default function Checkout() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CheckoutPage />
    </Suspense>
  )
} 