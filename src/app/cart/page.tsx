'use client'

import { Suspense } from 'react'
import CartPage from '@/components/pages/CartPage'

export default function Cart() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPage />
    </Suspense>
  )
} 