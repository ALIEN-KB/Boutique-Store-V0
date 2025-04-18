import { Suspense } from 'react'
import { HomePageContent } from '@/components/pages/HomePageContent'
import { featuredProducts } from '@/utils/sampleData'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePageContent products={featuredProducts} />
    </Suspense>
  )
} 