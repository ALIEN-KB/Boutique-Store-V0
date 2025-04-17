import { NextResponse } from 'next/server'
import { allProducts } from '@/utils/sampleData'

export async function GET() {
  try {
    return NextResponse.json({ products: allProducts })
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 })
  }
} 