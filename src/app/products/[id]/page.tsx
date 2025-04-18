'use client'

import { Suspense } from 'react'
import ProductDetailPage from '@/components/pages/ProductDetailPage'

export default function ProductDetail({ params }: { params: { id: string } }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductDetailPage productId={params.id} />
    </Suspense>
  )
} 