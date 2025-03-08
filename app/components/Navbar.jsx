'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setIsSmallScreen(window.innerWidth < 768);
        if (window.innerWidth >= 768) {
          setIsOpen(false);
        }
      }
    };

    if (typeof window !== 'undefined') {
      setIsSmallScreen(window.innerWidth < 768);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="relative flex items-center justify-between p-4">
      <div className="flex items-center">
        <Image src="/Logo.jpg" alt="Logo" width={50} height={50} className="mr-4" />
      </div>

      <div className="flex items-center">
        {isSmallScreen && (
          <button className="text-2xl text-white" onClick={toggleMenu}>
            {isOpen ? '✕' : '☰'}
          </button>
        )}
      </div>

      {(isOpen || !isSmallScreen) && (
        <div
          className={`${
            isSmallScreen
              ? 'absolute top-20 right-4 bg-[#1] shadow-md rounded-md w-48'
              : 'flex space-x-4'
          }`}
        >
          <Link href="/" className="block p-2 text-white hover:bg-red-600">
            Home
          </Link>
          <Link href="/" className="block p-2 text-white hover:bg-red-600">
            <button disabled="disabled">Store</button>
          </Link>
          <Link href="/about" className="block p-2 text-white hover:bg-red-600">
            About Us
          </Link>
          <Link href="/" className="block p-2 text-white hover:bg-red-600">
          <button disabled="disabled">Contact Us</button>
          </Link>
          <Link href="/FAQ" className="block p-2 text-white hover:bg-red-600">
            FAQ
          </Link>
          <Link href="/appointment" className="block p-2 text-white hover:bg-red-600">
            Appointment
          </Link>
        </div>
      )}
    </nav>
  );
};

export default HamburgerNavbar;