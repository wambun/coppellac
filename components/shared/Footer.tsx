'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { footerLinks } from '@/data/config/footerLinks';

// Animation variants - matching Heatfix exactly
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

export const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={`w-full bg-[#F6F7F9] ${className || ''}`}>
      {/* Contact Form Section */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] leading-[1.1] tracking-[-2px]">
              Book Your HVAC Service Now
            </h2>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mt-10 space-y-6"
            >
              <motion.div variants={fadeInUp}>
                <p className="text-[14px] text-[#3B3B3B]/60 mb-1">Office Address:</p>
                <a
                  href="https://maps.app.goo.gl/qZeaD2udM7AuEPSVA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
                >
                  436 Southwestern Blvd, Coppell, TX 75019
                </a>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-[14px] text-[#3B3B3B]/60 mb-1">Email Address:</p>
                <a
                  href="mailto:service@coppellac.com"
                  className="text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
                >
                  service@coppellac.com
                </a>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <p className="text-[14px] text-[#3B3B3B]/60 mb-1">Phone Number:</p>
                <a
                  href="tel:972-462-1882"
                  className="text-[#3B3B3B] font-medium hover:text-primary-main transition-colors"
                >
                  (972) 462-1882
                </a>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10"
            >
              <p className="text-[14px] text-[#3B3B3B]/60 mb-3">Follow Us:</p>
              <div className="flex items-center gap-4">
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-main)' }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, backgroundColor: 'var(--primary-main)' }}
                  whileTap={{ scale: 0.95 }}
                  href="https://www.twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:text-white transition-colors"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-[24px] p-8 lg:p-10"
          >
            <form className="space-y-5">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 bg-[#F6F7F9] rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-[#F6F7F9] rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 bg-[#F6F7F9] rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px]"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary-main hover:bg-primary-dark text-white rounded-full py-4 font-semibold text-[15px] transition-colors inline-flex items-center justify-center gap-2"
              >
                GET A CALL BACK
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/images/logo.png"
                  alt="Coppell Heating and Air Conditioning"
                  width={140}
                  height={68}
                  className="h-10 w-auto"
                />
              </motion.div>
            </Link>

            {/* Links */}
            <div className="flex flex-wrap items-center justify-center gap-6">
              {footerLinks.slice(0, 1).map((column) => (
                column.links.slice(0, 4).map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-[#3B3B3B]/70 hover:text-primary-main text-[14px] transition-colors"
                  >
                    {link.title}
                  </Link>
                ))
              ))}
            </div>

            {/* License */}
            <div className="flex items-center gap-2 text-[14px] text-[#3B3B3B]/60">
              <ShieldCheck className="w-4 h-4" />
              <span>License # TACLA00066993E</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-[14px] text-[#3B3B3B]/60">
              &copy; {new Date().getFullYear()} Coppell Heating and Air Conditioning, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
