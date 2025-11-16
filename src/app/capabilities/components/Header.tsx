'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
        <Link href="/" className="text-3xl font-bold tracking-tight">
          <span className="font-serif italic">Blind</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-10">
          <Link
            href="/capabilities"
            className="text-xs font-semibold tracking-wider uppercase hover:text-gray-600 transition"
          >
            Capabilities
          </Link>
          <Link
            href="/work"
            className="text-xs font-semibold tracking-wider uppercase hover:text-gray-600 transition"
          >
            Work
          </Link>
          <Link
            href="/events"
            className="text-xs font-semibold tracking-wider uppercase hover:text-gray-600 transition"
          >
            Events
          </Link>
          <Link
            href="/blog"
            className="text-xs font-semibold tracking-wider uppercase hover:text-gray-600 transition"
          >
            Blog
          </Link>
          <Link
            href="/studio"
            className="text-xs font-semibold tracking-wider uppercase hover:text-gray-600 transition"
          >
            Studio
          </Link>
          <Link
            href="/contact"
            className="text-xs font-semibold tracking-wider uppercase hover:text-gray-600 transition"
          >
            Contact
          </Link>
        </nav>

        <button className="text-gray-900 hover:text-gray-600 transition">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}
