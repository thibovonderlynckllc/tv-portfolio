'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from "next/link";

const Navbar = () => {
  const [showSticky, setShowSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      { root: null, threshold: 1 }
    );
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      if (sentinelRef.current) observer.unobserve(sentinelRef.current);
    };
  }, []);

  // Sluit menu bij klik op link (alleen mobiel)
  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = (
    <div className="flex flex-col gap-8 items-center w-full">
      <Link href="#skills" onClick={handleLinkClick} className="text-lg font-normal">
        Skills
      </Link>
      <Link href="#projects" onClick={handleLinkClick} className="text-lg font-normal">
        Projects
      </Link>
      <Link href="#testimonials" onClick={handleLinkClick} className="text-lg font-normal">
        Testimonials
      </Link>
      <Link href="#contact" onClick={handleLinkClick} className="w-full flex justify-center">
        <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-10 py-3 rounded-full cursor-pointer text-base font-semibold w-full max-w-xs">Contact me</button>
      </Link>
    </div>
  );

  // Custom navlink component met gradient underline
  const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
    <Link 
      href={href} 
      className="text-base font-normal relative group"
    >
      {children}
      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-orange-600 group-hover:w-full transition-all duration-300 opacity-0 group-hover:opacity-100"></span>
    </Link>
  );

  const navContent = (
    <>
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">Thibo</h2>
      </div>
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 ml-auto"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <div className="w-8 h-8 flex items-center justify-center">
          <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? 'rotate-45' : '-translate-y-2'}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`absolute w-6 h-0.5 bg-white transform transition-all duration-300 ${isMenuOpen ? '-rotate-45' : 'translate-y-2'}`}></span>
        </div>
      </button>
      {/* Desktop menu */}
      <div className="hidden md:block">
        <div className="flex gap-12 items-center">
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <Link href="#contact" className="text-base font-normal">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full cursor-pointer">Contact me</button>
          </Link>
        </div>
      </div>
    </>
  );

  return (
    <>
      {/* Original navbar */}
      <nav className="container mx-auto pt-12 px-4 md:px-0 flex justify-between items-center relative">
        {navContent}
      </nav>
      <div ref={sentinelRef} style={{ height: 1 }}></div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-0 left-0 w-full h-full bg-neutral-950/95 backdrop-blur-md z-40 flex flex-col items-center px-4"
          >
            <div className="w-full flex justify-between items-center pt-8 pb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-normal">Thibo</h2>
              <button
                className="p-2"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
              </button>
            </div>
            <div className="flex-1 flex flex-col justify-center w-full">
              {navLinks}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky navbar with animation */}
      <AnimatePresence>
        {showSticky && (
          <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="fixed top-0 left-0 w-full z-50 bg-neutral-950/90 shadow-lg backdrop-blur-md transition-all duration-300"
          >
            <div className="container mx-auto px-4 md:px-0 py-4 relative flex justify-between items-center">
              {navContent}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
