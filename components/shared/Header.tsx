'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, X, ChevronDown } from 'lucide-react';
import { headerNavLinks } from '@/data/config/headerNavLinks';

export const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`w-full fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-sm' : 'bg-white'
      } ${className || ''}`}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-[72px]">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Image
                src="/images/logo.png"
                alt="Coppell Heating and Air Conditioning"
                width={240}
                height={117}
                className="h-[76px] w-auto"
                priority
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-1">
            {/* All Pages Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1 px-4 py-2 text-[15px] text-[#3B3B3B] font-medium hover:text-primary-main transition-colors">
                All Pages
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {headerNavLinks.slice(1, 3).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-[15px] text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Button - Heatfix style */}
          <div className="hidden lg:flex items-center">
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-[#3B3B3B] hover:bg-[#2a2a2a] text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors"
              >
                CONTACT US
                <span className="w-5 h-5 bg-primary-main rounded-full flex items-center justify-center">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#3B3B3B]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="lg:hidden overflow-hidden"
            >
              <div className="flex flex-col gap-2 pb-6">
                {headerNavLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="block px-4 py-3 text-[#3B3B3B] font-medium hover:text-primary-main hover:bg-gray-50 rounded-xl transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: headerNavLinks.length * 0.1 }}
                  className="mt-2 px-4"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-[#3B3B3B] text-white px-5 py-3 rounded-full text-[14px] font-semibold w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    CONTACT US
                    <span className="w-5 h-5 bg-primary-main rounded-full flex items-center justify-center">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M1 9L9 1M9 1H3M9 1V7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default Header;
