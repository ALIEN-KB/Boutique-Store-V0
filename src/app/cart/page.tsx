'use client'

import { Suspense } from 'react'
import CartPage from '@/pages/CartPage'

export default function Cart() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CartPage />
    </Suspense>
  )
} 