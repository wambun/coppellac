'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { services, servicesList } from '@/data/content/services';
import {
  ArrowRight,
  CheckCircle,
  Phone,
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

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section - Heatfix style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC services"
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
              — Our Services
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-[#3B3B3B] mt-4 leading-[1.05] tracking-[-3px]"
            >
              Expert HVAC Services in{' '}
              <span className="text-primary-main">Coppell.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-[#3B3B3B]/70 leading-[1.7] max-w-[480px]"
            >
              At Coppell Heating and Air Conditioning, we specialize in providing comprehensive HVAC solutions for homes and businesses alike.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#3B3B3B] hover:bg-[#2a2a2a] text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                REQUEST ESTIMATE
                <span className="w-6 h-6 bg-primary-main rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
              <Link
                href="tel:972-462-1882"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-50 text-[#3B3B3B] px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors border border-gray-200"
              >
                <Phone className="w-4 h-4" />
                (972) 462-1882
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — What We Offer
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
              Our Services
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              From routine maintenance to emergency repairs, we&apos;ve got all your HVAC needs covered.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-[20px] overflow-hidden group border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1585771724684-38269d6639fd' : index === 1 ? '1621905251189-08b45d6a269e' : index === 2 ? '1581578731548-c64695cc6952' : index === 3 ? '1504328345606-18bbc8c9d7d1' : index === 4 ? '1558618666-fcd25c85cd64' : index === 5 ? '1621905252507-b35492cc74b4' : index === 6 ? '1585771724684-38269d6639fd' : '1621905251189-08b45d6a269e'}?w=400&auto=format&fit=crop&q=80`}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Discount Badge */}
                  {service.discount && (
                    <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-md">
                      <span className="text-[22px] font-bold text-[#3B3B3B]">{service.discount.replace('%', '')}</span>
                      <span className="text-[14px] font-bold text-[#3B3B3B]">%</span>
                      <p className="text-[11px] font-semibold text-primary-main">OFF</p>
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-bold text-[#3B3B3B] group-hover:text-primary-main transition-colors">{service.title}</h3>
                  <p className="mt-2 text-[14px] text-[#3B3B3B]/60 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-[14px] font-semibold text-[#3B3B3B] hover:text-primary-main transition-colors"
                  >
                    BOOK NOW
                    <span className="w-5 h-5 bg-primary-main rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Why Choose Us
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                Quality Service You Can Trust
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                It&apos;s our prerogative to provide the very best heating and cooling service. To that end, we are licensed, bonded, and insured. That means that when we work on your residential or commercial HVAC system, you will have the satisfaction of knowing that we are highly qualified.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                {[
                  'Licensed, bonded, and insured',
                  'Experienced, certified technicians',
                  'On-time, reliable service',
                  'Upfront, transparent pricing',
                  '100% satisfaction guarantee',
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-[#3B3B3B]/80">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC technician"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Complete List
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
              Full Service List
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              Please review all of our services and give us a call if you have any questions.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto"
          >
            {servicesList.map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="flex items-center gap-3 bg-[#F6F7F9] rounded-[16px] p-4"
              >
                <CheckCircle className="w-5 h-5 text-primary-main flex-shrink-0" />
                <span className="font-medium text-[15px] text-[#3B3B3B]">{service}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#3B3B3B]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Need HVAC Service?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Contact us today for a free estimate. Our experienced team is ready to help with all your heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-white text-[#3B3B3B] px-7 py-4 rounded-full text-[15px] font-semibold transition-colors hover:bg-gray-100"
                >
                  <Phone className="w-4 h-4" />
                  (972) 462-1882
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
