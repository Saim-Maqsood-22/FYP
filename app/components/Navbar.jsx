'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const SimpleHamburgerNavbar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsSmallScreen(window.innerWidth < 768); // Adjust breakpoint as needed
      }
    };

    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  },);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/Logo.jpg"
              alt="Logo"
              width={50}
              height={50}
              className="mr-4"
              priority // Optionally preload the image
            />
          </Link>
          <Link href="/" className="text-lg font-bold">
            Med Magic
          </Link>
        </div>

        {/* Hamburger Icon (Small Screens) */}
        {isSmallScreen ? (
          <button
            className="text-2xl focus:outline-none"
            onClick={toggleMenu}
          >
            ☰
          </button>
        ) : (
          /* Navigation Links (Large Screens) */
          <nav className="hidden sm:block">
            <ul className="flex space-x-4">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Store
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact
                </Link>
              </li>
              <li>
              <Link href="/FAQ" className="hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:text-gray-300">
                Appointments
              </Link>
            </li>
            </ul>
          </nav>
        )}
      </div>

      {/* Mobile Menu (Small Screens) */}
      {isSmallScreen && showMenu && (
        <nav className="bg-gray-700 py-2">
          <ul className="flex flex-col items-center space-y-2">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/" className="hover:text-gray-300">
                Store
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gray-300">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/FAQ" className="hover:text-gray-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/appointment" className="hover:text-gray-300">
                Appointments
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default SimpleHamburgerNavbar;