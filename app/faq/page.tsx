'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import {
  ArrowRight,
  Phone,
  ChevronDown,
  MessageCircle,
  HelpCircle,
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

const faqItems = [
  {
    question: 'What is "Freon" and Do I Need to Change Mine Out?',
    answer: `Freon is a common name for refrigerants used in A/C systems to remove heat and keep your space cool. Older systems, especially those installed before the 2010s, often use R22, a hydrochlorofluorocarbon invented in 1928. R22 circulates through the copper lines of your system and helps cool your home or office.

You generally do not need to replace the refrigerant in your system unless there's a leak. However, R22 is now very limited and expensive due to EPA regulations that restricted its sale.

Modern systems no longer use R22. Up until recently, R410a was the standard, which is much safer for the environment. As of January 1st, 2025, R410a has been banned, and the newer refrigerant R454b is now used. R454b is more environmentally friendly and efficient, so if you're installing a new system or replacing your refrigerant, your technician will use this.`,
  },
  {
    question: 'What Is The Most Efficient Heating and Air Conditioning System?',
    answer: `According to leading research, American Standard Platinum series equipment has the fewest breakdowns over the past 15 years. Moreover, these systems are generally quite safe, quiet and environmentally friendly. We proudly install and service American Standard equipment and can help you choose the right system for your home or business.`,
  },
  {
    question: 'Is It Cheaper to Heat With Gas Or Electric?',
    answer: `While it may seem tempting to invest in an electric heating system, gas heating systems are far more affordable. This is because electricity is more expensive per unit than natural gas. Over a lifetime, homeowners will spend thousands of dollars more on electricity than on gas. However, electric heat pumps can be very efficient in moderate climates like North Texas, especially the newer high-efficiency models.`,
  },
  {
    question: 'What Size System Do I Need For My House?',
    answer: `That depends on a lot of little things that add up to a large picture. The old school way of doing it was roughly 400-500 square feet per ton. This is no longer used due to houses being built much tighter and with better code enforcements. Best thing to do is to get a Heat Load done on your home to know exactly what your home needs. Our technicians can perform a proper heat load calculation to ensure you get the right size system.`,
  },
  {
    question: 'How Often Should I Replace My Air Filter?',
    answer: `We recommend checking your air filter monthly and replacing it every 1-3 months, depending on factors like whether you have pets, allergies, or live in a dusty area. A dirty filter restricts airflow, making your system work harder and potentially leading to higher energy bills and premature system failure.`,
  },
  {
    question: 'What Are Signs That My HVAC System Needs Repair?',
    answer: `Watch for these warning signs: unusual noises (grinding, squealing, banging), weak or no airflow, inconsistent temperatures between rooms, strange odors from vents, frequent cycling on and off, unexplained increases in energy bills, or ice forming on your AC unit. If you notice any of these, call us for a diagnostic check.`,
  },
  {
    question: 'Do You Offer Emergency HVAC Services?',
    answer: `Yes! We understand that HVAC emergencies don't wait for convenient times. We offer 24/7 emergency service for our customers in the Coppell area. If your heating or cooling system fails unexpectedly, give us a call and we'll dispatch a technician as quickly as possible.`,
  },
  {
    question: 'How Can I Improve My Indoor Air Quality?',
    answer: `There are several ways to improve indoor air quality: regular filter changes, duct cleaning, adding air purification systems, installing UV lights in your HVAC system, controlling humidity levels, and ensuring proper ventilation. We offer comprehensive indoor air quality solutions and can assess your home's specific needs.`,
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      variants={fadeInUp}
      className="bg-white rounded-[20px] border border-gray-100 overflow-hidden shadow-sm"
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left"
      >
        <span className="text-[17px] font-semibold text-navy-main pr-4">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-primary-main flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 text-[15px] text-[#3B3B3B]/70 leading-[1.8] whitespace-pre-line">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section - Navy gradient style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hvac-repair-25.jpg"
            alt="HVAC frequently asked questions"
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
              <span className="text-white/90 text-[14px] font-medium">FAQ</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white mt-4 leading-[1.05] tracking-[-3px]"
            >
              Frequently Asked{' '}
              <span className="text-primary-main">Questions.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-white/80 leading-[1.7] max-w-[480px]"
            >
              It&apos;s our job to help shine a light on questions that you may have about heating and air conditioning. Browse our FAQ below or contact us for personalized answers.
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
                ASK A QUESTION
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

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F6F7F9]">
        <div className="max-w-[900px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Common Questions
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              HVAC Questions Answered
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              Find answers to common questions about heating, air conditioning, and HVAC maintenance.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                <MessageCircle className="w-8 h-8 text-primary-main" />
              </div>
              <h2 className="text-[36px] md:text-[44px] font-bold text-navy-main leading-[1.1] tracking-[-2px]">
                Still Have Questions?
              </h2>
              <p className="mt-4 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                Can&apos;t find the answer you&apos;re looking for? Our team of HVAC experts is here to help. Contact us and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                  >
                    Contact Us
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    href="tel:972-462-1882"
                    className="inline-flex items-center gap-2 border border-gray-200 hover:border-primary-main text-navy-main px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    (972) 462-1882
                  </Link>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[24px] overflow-hidden">
                <Image
                  src="/images/ac-repair-5.jpg"
                  alt="HVAC technician ready to answer questions"
                  width={560}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
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
            <HelpCircle className="w-12 h-12 text-white/80 mx-auto mb-6" />
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Ready for Expert HVAC Service?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Our experienced team is standing by to help with all your heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Schedule Service
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
