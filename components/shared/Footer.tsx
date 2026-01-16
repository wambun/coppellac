'use client';

import Link from 'next/link';
import { MapPinIcon, PhoneIcon, MailIcon, ShieldCheckIcon, ArrowRightIcon } from 'lucide-react';
import { Button } from '@/components/shared/ui/button';
import { footerLinks } from '@/data/config/footerLinks';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`w-full bg-[#f6f7f9] ${className || ''}`}>
      {/* Contact Form Section */}
      <div className="container-wide mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Book Your HVAC Service Now
            </h2>

            <div className="mt-10 space-y-6">
              <div>
                <p className="text-sm text-gray-500 mb-1">Office Address:</p>
                <a
                  href="https://maps.app.goo.gl/qZeaD2udM7AuEPSVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:text-primary-main transition-colors"
                >
                  436 Southwestern Blvd, Coppell, TX 75019
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Email Address:</p>
                <a
                  href="mailto:service@coppellac.com"
                  className="text-gray-900 font-medium hover:text-primary-main transition-colors"
                >
                  service@coppellac.com
                </a>
              </div>

              <div>
                <p className="text-sm text-gray-500 mb-1">Phone Number:</p>
                <a
                  href="tel:972-462-1882"
                  className="text-gray-900 font-medium hover:text-primary-main transition-colors"
                >
                  (972) 462-1882
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-10">
              <p className="text-sm text-gray-500 mb-3">Follow Us:</p>
              <div className="flex items-center gap-4">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-main hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-primary-main hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white rounded-3xl p-8 lg:p-10">
            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-4 bg-[#f6f7f9] rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-4 bg-[#f6f7f9] rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-4 bg-[#f6f7f9] rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-primary-main hover:bg-primary-dark text-white rounded-2xl py-4 h-auto font-semibold text-base"
              >
                GET A CALL BACK
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="container-wide mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-main rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg text-gray-900 leading-tight">
                  Coppell AC
                </span>
              </div>
            </Link>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.slice(0, 1).map((column) => (
                column.links.slice(0, 4).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-600 hover:text-primary-main text-sm transition-colors"
                  >
                    {link.title}
                  </Link>
                ))
              ))}
            </div>

            {/* License */}
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <ShieldCheckIcon className="w-4 h-4" />
              <span>License # TACLA00066993E</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Coppell Heating and Air Conditioning, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
