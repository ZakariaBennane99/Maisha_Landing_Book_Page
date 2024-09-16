'use client'; // Since we are handling window scroll and state

import { useState, useEffect } from 'react';

export default function Header() {
  const [isSticky, setSticky] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 75) {
        setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isSticky ? 'sticky' : ''}`} >
      <div className='logo'>
        <img src="/logo.svg" alt="Logo" />
      </div>
      <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} href="#">Home</a></li>
          <li><a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} href="#chapters">Chapters</a></li>
          <li><a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} href="#order">Order</a></li>
          <li><a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} href="#merch">Merch</a></li>
          <li><a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} href="#about">About</a></li>
          <li><a onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} href="#contact">Contact</a></li>
        </ul>
      </nav>
      <div
        className={`hamburger ${isMobileMenuOpen ? 'is-active' : ''}`}
        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
      >
        <span />
        <span />
        <span />
      </div>
    </header>
  );
}
