import Link from 'next/link'
import React from 'react'

export default function CategoryCard() {
  return (
    <Link href="/category" className='bg-red-500 w-max py-1 px-4 rounded-lg text-sm md:text-md md:px-6'>Style</Link>
  )
}
