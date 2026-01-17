'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import {
  ArrowRight,
  Phone,
  CreditCard,
  CheckCircle,
  Calendar,
  Shield,
  Clock,
  DollarSign,
  Percent,
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

const benefits = [
  {
    icon: Percent,
    title: 'Special Interest Rates',
    description: 'Take advantage of promotional financing with special 0% interest rates on qualifying purchases.',
    color: 'bg-primary-main',
  },
  {
    icon: Calendar,
    title: 'Flexible Terms',
    description: 'Choose from a variety of payment terms that fit your budget and lifestyle.',
    color: 'bg-secondary-main',
  },
  {
    icon: Clock,
    title: 'Quick Approval',
    description: 'Our simple online application process means you can get approved quickly and start your project sooner.',
    color: 'bg-navy-main',
  },
  {
    icon: Shield,
    title: 'No Hidden Fees',
    description: 'Transparent terms with no hidden fees or surprises. What you see is what you get.',
    color: 'bg-primary-main',
  },
  {
    icon: CreditCard,
    title: 'Use For Any Service',
    description: 'Financing available for repairs, maintenance, and new system installations.',
    color: 'bg-secondary-main',
  },
  {
    icon: DollarSign,
    title: 'Budget-Friendly',
    description: 'Break up the cost into manageable monthly payments that fit your budget.',
    color: 'bg-navy-main',
  },
];

export default function FinancingPage() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section - Navy gradient style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hvac-repair-23.jpg"
            alt="HVAC financing options"
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
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary-main rounded-full animate-pulse" />
              <span className="text-white/90 text-[14px] font-medium">Payment Options</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white mt-4 leading-[1.05] tracking-[-3px]"
            >
              HVAC Payment{' '}
              <span className="text-primary-main">Options.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-white/80 leading-[1.7] max-w-[480px]"
            >
              We believe comfort shouldn&apos;t break the bank. That&apos;s why we offer flexible financing options to help you get the HVAC services you need, when you need them.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                APPLY NOW
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

      {/* Buy Today, Pay Over Time */}
      <section className="py-20 bg-white">
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
                — Flexible Financing
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
                Buy Today, Pay Over Time
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                We accept many forms of payment. Our financing through Wells Fargo brings you convenient options to fit your budget.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                {[
                  'Revolving line of credit that you can use over and over again',
                  'Special financing where available',
                  'Convenient monthly payments to fit your budget',
                  'Easy-to-use online account management',
                  'Ask about our special 0% financing on qualified units',
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

              <p className="mt-6 text-[14px] text-[#3B3B3B]/60">
                This credit card is issued with approved credit by Wells Fargo Bank, N.A. Equal Housing Lender.
              </p>

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="https://retailservices.wellsfargo.com/pl/0024205254"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
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
                  src="/images/hvac-repair-1.png"
                  alt="Credit card payment"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 bg-white rounded-[20px] p-6 shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-full flex items-center justify-center">
                    <CreditCard className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <p className="text-[24px] font-bold text-primary-main leading-none">0%</p>
                    <p className="text-[13px] text-[#3B3B3B]/60 mt-1">Financing Available*</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-20 bg-gradient-to-b from-[#F6F7F9] to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-secondary-main font-semibold text-[14px] tracking-wide uppercase">
              — Benefits
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              Why Finance With Us?
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              Make your HVAC investment more manageable with our flexible financing options.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-[20px] p-8 shadow-sm border border-gray-100"
              >
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-6`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-bold text-navy-main mb-3">{benefit.title}</h3>
                <p className="text-[15px] text-[#3B3B3B]/70 leading-[1.7]">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-navy-main">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Process
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mt-4 leading-[1.1] tracking-[-2px]">
              How Financing Works
            </h2>
            <p className="mt-4 text-[16px] text-white/70 max-w-[600px] mx-auto">
              Getting started with financing is easy. Follow these simple steps to get the HVAC services you need today.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                step: '1',
                title: 'Apply Online',
                description: 'Complete our simple online application. It only takes a few minutes.',
              },
              {
                step: '2',
                title: 'Get Approved',
                description: 'Receive a quick decision on your application. Most approvals happen within minutes.',
              },
              {
                step: '3',
                title: 'Schedule Service',
                description: 'Once approved, schedule your service and enjoy your new comfort!',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-20 h-20 bg-primary-main text-white rounded-full flex items-center justify-center text-[32px] font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-[20px] font-bold text-white mb-3">{item.title}</h3>
                <p className="text-[15px] text-white/70 leading-[1.7]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-12"
          >
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="inline-block">
              <Link
                href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
              >
                Apply for Financing
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
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
            <CreditCard className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Questions About Financing?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Our team is happy to answer any questions you have about our financing options. Contact us today to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Contact Us
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
            <p className="mt-6 text-[13px] text-white/50">
              * Subject to credit approval. Ask for details.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
