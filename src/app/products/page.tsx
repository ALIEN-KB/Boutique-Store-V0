import { Suspense } from 'react'
import ProductsPage from '@/components/pages/ProductsPage'

// This allows product page to be statically generated at build time with initial data
// while still supporting client-side interactivity
export default function Products({
  searchParams
}: {
  searchParams?: { [key: string]: string | string[] | undefined }
}) {
  // Pass any search parameters to the client component
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPage initialSearchParams={searchParams} />
    </Suspense>
  )
} 