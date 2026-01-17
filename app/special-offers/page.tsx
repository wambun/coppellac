'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import {
  ArrowRight,
  Phone,
  Tag,
  Percent,
  CheckCircle,
  Star,
  Award,
  Shield,
} from 'lucide-react';

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

const offers = [
  {
    title: 'AC Tune-Up Special',
    description: 'Get your air conditioning system ready for summer with our comprehensive tune-up service.',
    discount: '$89',
    originalPrice: '$149',
    features: [
      'Complete system inspection',
      'Filter replacement included',
      'Refrigerant level check',
      'Thermostat calibration',
    ],
    highlight: true,
    color: 'bg-primary-main',
  },
  {
    title: 'Duct Cleaning',
    description: 'Improve your indoor air quality with professional duct cleaning services.',
    discount: '25% OFF',
    features: [
      'Complete duct system cleaning',
      'Allergen removal',
      'Free air quality assessment',
      'Sanitization included',
    ],
    highlight: false,
    color: 'bg-secondary-main',
  },
  {
    title: 'New System Installation',
    description: 'Upgrade to a new energy-efficient HVAC system and save on installation.',
    discount: 'Up to $500 OFF',
    features: [
      'Free in-home estimate',
      'Flexible financing available',
      '10-year warranty included',
      'Energy Star certified systems',
    ],
    highlight: false,
    color: 'bg-navy-main',
  },
  {
    title: 'Heating System Check',
    description: 'Prepare for winter with our complete heating system inspection and tune-up.',
    discount: '$79',
    originalPrice: '$129',
    features: [
      'Full safety inspection',
      'Burner cleaning',
      'Heat exchanger check',
      'Carbon monoxide test',
    ],
    highlight: false,
    color: 'bg-primary-main',
  },
];

export default function SpecialOffersPage() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section - Navy gradient style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC special offers"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-main/95 via-navy-main/85 to-navy-main/70" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-secondary-main rounded-full px-4 py-2 mb-6"
            >
              <Tag className="w-4 h-4 text-white" />
              <span className="text-white text-[14px] font-semibold">Special Offers</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white mt-4 leading-[1.05] tracking-[-3px]"
            >
              Special HVAC{' '}
              <span className="text-primary-main">Deals.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-white/80 leading-[1.7] max-w-[480px]"
            >
              Please take advantage of our special offers. Our HVAC technicians are primed to help with your heating and air conditioning needs.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                CLAIM OFFER
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:972-462-1882"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                (972) 462-1882
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Current Offers
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              Limited Time Deals
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              Take advantage of these special offers and save on your HVAC services.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {offers.map((offer, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className={`relative rounded-[24px] overflow-hidden ${
                  offer.highlight ? 'ring-2 ring-primary-main' : ''
                }`}
              >
                {offer.highlight && (
                  <div className="absolute top-4 right-4 bg-secondary-main text-white text-[12px] font-bold px-3 py-1 rounded-full z-10">
                    POPULAR
                  </div>
                )}
                <div className="bg-white p-8 h-full border border-gray-100 rounded-[24px]">
                  <div className={`w-14 h-14 ${offer.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <Percent className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-[22px] font-bold text-navy-main mb-2">{offer.title}</h3>
                  <p className="text-[15px] text-[#3B3B3B]/70 mb-4">{offer.description}</p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-[32px] font-bold text-primary-main">{offer.discount}</span>
                    {offer.originalPrice && (
                      <span className="text-[18px] text-[#3B3B3B]/50 line-through">{offer.originalPrice}</span>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {offer.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                        <span className="text-[14px] text-[#3B3B3B]/80">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 w-full bg-navy-main hover:bg-navy-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                    >
                      Claim This Offer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* American Standard Section */}
      <section className="py-20 bg-navy-main">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[24px] overflow-hidden border-4 border-white/20">
                <Image
                  src="https://images.unsplash.com/photo-1631545806609-35d4ae440431?w=800&auto=format&fit=crop&q=80"
                  alt="American Standard HVAC equipment"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary-main rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Featured Brand
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mt-4 leading-[1.1] tracking-[-2px]">
                Some of the Best Moments in Life Happen at Home
              </h2>
              <p className="mt-6 text-[16px] text-white/70 leading-[1.8]">
                American Standard Heating and Air works smarter to make all those moments more comfortable.
              </p>
              <p className="mt-4 text-[16px] text-white/70 leading-[1.8]">
                When it comes to finding ways to make your home comfortable, you don&apos;t need to look any further. With their experience and know-how, your local independent American Standard Heating & Air Conditioning dealer can handle all your heating and air conditioning needs.
              </p>
              <p className="mt-4 text-[16px] text-white/70 leading-[1.8]">
                Add to that their focus on customer satisfaction and commitment to quality and you see why so many people choose American Standard for their homes.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  CALL TODAY
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary-main font-semibold text-[14px] tracking-wide uppercase">
              — Why Choose Us
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              The Coppell AC Difference
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {[
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description: 'Fully licensed, bonded, and insured for your peace of mind. License # TACLA00066993E',
                color: 'bg-primary-main',
              },
              {
                icon: Star,
                title: '40+ Years Experience',
                description: 'Family-owned and operated since 1983, serving the Coppell community with pride.',
                color: 'bg-secondary-main',
              },
              {
                icon: Award,
                title: 'Satisfaction Guaranteed',
                description: 'We stand behind our work with a 100% satisfaction guarantee on all services.',
                color: 'bg-navy-main',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-[#F6F7F9] rounded-[20px] p-8 text-center"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[20px] font-bold text-navy-main mb-3">{item.title}</h3>
                <p className="text-[15px] text-[#3B3B3B]/70 leading-[1.7]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-main via-secondary-dark to-navy-main">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Tag className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Don&apos;t Miss Out on These Deals!
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              These special offers won&apos;t last forever. Contact us today to take advantage of our limited-time deals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Claim Your Offer
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-white text-navy-main px-7 py-4 rounded-full text-[15px] font-semibold transition-colors hover:bg-gray-100"
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
