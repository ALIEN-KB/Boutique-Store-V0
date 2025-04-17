'use client'

import { Suspense } from 'react'
import HomePage from '@/pages/HomePageFixed'

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomePage />
    </Suspense>
  )
} 