'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MenuIcon, X, ChevronDown, Phone } from 'lucide-react';
import { headerNavLinks, NavLink } from '@/data/config/headerNavLinks';

export const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLink = (link: NavLink, index: number) => {
    if (link.children) {
      return (
        <div
          key={link.title}
          className="relative"
          onMouseEnter={() => setOpenDropdown(link.title)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <button className="flex items-center gap-1 px-4 py-2 text-[15px] text-[#3B3B3B] font-medium hover:text-primary-main transition-colors">
            {link.title}
            <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === link.title ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {openDropdown === link.title && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden z-50"
              >
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-4 py-3 text-[14px] text-[#3B3B3B] font-medium hover:text-primary-main hover:bg-gray-50 transition-colors"
                  >
                    {child.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    }

    return (
      <Link
        key={link.href}
        href={link.href}
        className="px-4 py-2 text-[15px] text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
      >
        {link.title}
      </Link>
    );
  };

  const renderMobileNavLink = (link: NavLink, index: number) => {
    if (link.children) {
      return (
        <motion.div
          key={link.title}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
        >
          <button
            onClick={() => setMobileDropdown(mobileDropdown === link.title ? null : link.title)}
            className="w-full flex items-center justify-between px-4 py-3 text-[#3B3B3B] font-medium hover:text-primary-main hover:bg-gray-50 rounded-xl transition-colors"
          >
            {link.title}
            <ChevronDown className={`w-4 h-4 transition-transform ${mobileDropdown === link.title ? 'rotate-180' : ''}`} />
          </button>
          <AnimatePresence>
            {mobileDropdown === link.title && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden bg-gray-50 rounded-xl ml-4 mr-4"
              >
                {link.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className="block px-4 py-3 text-[14px] text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
                    onClick={() => {
                      setIsOpen(false);
                      setMobileDropdown(null);
                    }}
                  >
                    {child.title}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      );
    }

    return (
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
    );
  };

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

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {headerNavLinks.map((link, index) => renderNavLink(link, index))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="tel:972-462-1882"
              className="flex items-center gap-2 text-[15px] text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
            >
              <Phone className="w-4 h-4" />
              (972) 462-1882
            </Link>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors"
              >
                GET A QUOTE
                <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
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
              <div className="flex flex-col gap-1 pb-6">
                {headerNavLinks.map((link, index) => renderMobileNavLink(link, index))}

                {/* Mobile Phone */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: headerNavLinks.length * 0.1 }}
                  className="mt-2 px-4"
                >
                  <Link
                    href="tel:972-462-1882"
                    className="flex items-center justify-center gap-2 border border-gray-200 text-[#3B3B3B] px-5 py-3 rounded-full text-[14px] font-semibold w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone className="w-4 h-4" />
                    (972) 462-1882
                  </Link>
                </motion.div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (headerNavLinks.length + 1) * 0.1 }}
                  className="mt-2 px-4"
                >
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-5 py-3 rounded-full text-[14px] font-semibold w-full transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    GET A QUOTE
                    <span className="w-5 h-5 bg-white/20 rounded-full flex items-center justify-center">
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
