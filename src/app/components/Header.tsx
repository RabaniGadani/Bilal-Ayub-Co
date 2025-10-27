'use client';

import Link from 'next/link';
import { useState } from 'react';
import Image from 'next/image';

const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Home');

  const handleTabClick = (name: string) => {
    setActiveTab(name);
    setIsMenuOpen(false); // close mobile menu on tab click
  };

  // Checks if route matches (optionally you could match on href === router.pathname here if desired for SSR)
  // But per spec, click determines active
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0">
              {/* Logo Image */}
              <Link href="/" className="flex items-center" aria-label="Home" onClick={() => handleTabClick('Home')}>
                <div className="relative w-10 h-10 bg-primary rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/Bilal Ayub & Co.jpg"
                    alt="Bilal Ayub & Co Logo"
                    fill
                    sizes="40px"
                    className="object-cover rounded-full"
                  />
                </div>
              </Link>
            </div>
            <Link
              href="/"
              className="ml-3 text-xl font-semibold text-gray-900"
              onClick={() => handleTabClick('Home')}
            >
              Bilal Ayub & Co.
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => handleTabClick(item.name)}
                className={`text-gray-700 hover:text-primary font-medium transition-colors ${
                  activeTab === item.name ? 'text-primary font-bold border-b-2 border-primary' : ''
                } pb-1`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/contact" 
              className={`bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-dark transition-colors
                ${activeTab === 'Book' ? 'ring-2 ring-primary-dark' : ''}
              `}
              onClick={() => handleTabClick('Book')}
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary rounded-lg mt-2">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleTabClick(item.name)}
                  className={`block px-3 py-2 text-gray-700 hover:text-primary font-medium rounded
                    ${activeTab === item.name ? 'bg-primary text-white shadow font-bold' : ''}
                  `}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className={`block px-3 py-2 bg-primary text-white rounded-lg font-semibold text-center mt-4 ${
                  activeTab === 'Book' ? 'ring-2 ring-primary-dark' : ''
                }`}
                onClick={() => handleTabClick('Book')}
              >
                Book Consultation
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
