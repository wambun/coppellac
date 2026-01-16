'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';

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

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section - Heatfix style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&auto=format&fit=crop&q=80"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[600px]">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-primary-main font-semibold text-[14px] tracking-wide uppercase"
            >
              — Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-[#3B3B3B] mt-4 leading-[1.05] tracking-[-3px]"
            >
              Get In Touch{' '}
              <span className="text-primary-main">Today.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-[#3B3B3B]/70 leading-[1.7] max-w-[480px]"
            >
              Have questions about your HVAC system? Need a quick repair, maintenance service, or a custom consultation? We&apos;re here to help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="tel:972-462-1882"
                className="inline-flex items-center gap-2 bg-[#3B3B3B] hover:bg-[#2a2a2a] text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                <Phone className="w-4 h-4" />
                CALL (972) 462-1882
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Contact Information
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                Let&apos;s Talk About Your HVAC Needs
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                Whether you have a question about our HVAC services, need emergency assistance, or want to schedule a routine maintenance visit, we&apos;re here to help.
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-10 space-y-6"
              >
                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] text-[#3B3B3B]">Phone</h3>
                    <a
                      href="tel:972-462-1882"
                      className="text-primary-main hover:text-primary-dark text-[17px] font-medium"
                    >
                      (972) 462-1882
                    </a>
                    <p className="text-[14px] text-[#3B3B3B]/60 mt-1">24/7 Emergency Service Available</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] text-[#3B3B3B]">Email</h3>
                    <a
                      href="mailto:service@coppellac.com"
                      className="text-primary-main hover:text-primary-dark font-medium"
                    >
                      service@coppellac.com
                    </a>
                    <p className="text-[14px] text-[#3B3B3B]/60 mt-1">We respond within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] text-[#3B3B3B]">Office Address</h3>
                    <p className="text-[15px] text-[#3B3B3B]/70">
                      436 Southwestern Blvd.<br />
                      Coppell, Texas 75019 USA
                    </p>
                    <a
                      href="https://goo.gl/maps/qZeaD2udM7AuEPSVA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-main hover:text-primary-dark text-[14px] font-semibold mt-2 inline-flex items-center"
                    >
                      Get Directions
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] text-[#3B3B3B]">Business Hours</h3>
                    <p className="text-[15px] text-[#3B3B3B]/70">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-[14px] text-primary-main font-semibold mt-2">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-[#F6F7F9] rounded-[24px] p-8 lg:p-10"
            >
              <h3 className="text-[24px] font-bold text-[#3B3B3B] mb-6">Send Us a Message</h3>

              {formSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-[20px] font-bold text-[#3B3B3B] mb-2">Thank You!</h3>
                  <p className="text-[15px] text-[#3B3B3B]/70">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 bg-primary-main hover:bg-primary-dark text-white rounded-full px-8 py-3.5 font-semibold text-[15px] transition-colors"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full px-5 py-4 bg-white rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full px-5 py-4 bg-white rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full px-5 py-4 bg-white rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px]"
                    />
                  </div>
                  <div>
                    <select
                      className="w-full px-5 py-4 bg-white rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-[15px] text-[#3B3B3B]/60"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Service Type</option>
                      <option value="ac-repair">AC Repair</option>
                      <option value="heating">Heating Services</option>
                      <option value="maintenance">HVAC Maintenance</option>
                      <option value="duct-cleaning">Duct Cleaning</option>
                      <option value="installation">New Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your HVAC needs... *"
                      required
                      rows={5}
                      className="w-full px-5 py-4 bg-white rounded-[16px] border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all resize-none text-[15px]"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full bg-primary-main hover:bg-primary-dark text-white rounded-full py-4 font-semibold text-[15px] transition-colors inline-flex items-center justify-center gap-2"
                  >
                    Send Message
                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Call CTA */}
      <section className="py-20 bg-primary-main">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Need Immediate Assistance?
            </h2>
            <p className="mt-6 text-[17px] text-white/90 max-w-[600px] mx-auto leading-[1.7]">
              For emergencies, call us directly. Our team is available 24/7 to help with urgent HVAC issues.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-white text-primary-main px-7 py-4 rounded-full text-[15px] font-semibold transition-colors hover:bg-gray-100"
                >
                  <Phone className="w-5 h-5" />
                  Call (972) 462-1882
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Our Location
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
              Find Us
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="aspect-video bg-gray-300 rounded-[24px] overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.98!3d32.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU3JzAwLjAiTiA5NsKwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coppell Heating and Air Conditioning Location"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
