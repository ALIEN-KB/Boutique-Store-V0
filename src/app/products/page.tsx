'use client'

import { Suspense } from 'react'
import ProductsPage from '@/pages/ProductsPage'

export default function Products() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage />
    </Suspense>
  )
} 