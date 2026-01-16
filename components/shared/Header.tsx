'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MenuIcon, XIcon, PhoneIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { headerNavLinks } from '@/data/config/headerNavLinks';

export const Header = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={`w-full bg-white sticky top-0 z-50 ${className || ''}`}>
      <div className="container-wide mx-auto px-6">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 bg-primary-main rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">C</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl text-gray-900 leading-tight">
                Coppell AC
              </span>
              <span className="text-xs text-gray-500 hidden sm:block">
                Since 1983
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {headerNavLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-primary-main font-medium transition-colors"
              >
                {link.title}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Button
              asChild
              className="bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-6 py-3 h-auto font-semibold"
            >
              <Link href="tel:972-462-1882">
                <PhoneIcon className="w-4 h-4 mr-2" />
                (972) 462-1882
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden pb-6">
            <div className="flex flex-col gap-4">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-main font-medium py-2 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.title}
                </Link>
              ))}
              <Button
                asChild
                className="bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-6 py-3 h-auto font-semibold mt-2"
              >
                <Link href="tel:972-462-1882">
                  <PhoneIcon className="w-4 h-4 mr-2" />
                  (972) 462-1882
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
