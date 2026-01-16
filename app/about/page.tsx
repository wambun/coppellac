'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { testimonials } from '@/data/content/testimonials';
import { services } from '@/data/content/services';
import {
  ArrowRight,
  ShieldCheck,
  Heart,
  CheckCircle,
  Star,
  Wrench,
  Award,
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

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section - Heatfix style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC team"
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
              — About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-[#3B3B3B] mt-4 leading-[1.05] tracking-[-3px]"
            >
              Your Trusted HVAC Partner Since{' '}
              <span className="text-primary-main">1983.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-[#3B3B3B]/70 leading-[1.7] max-w-[480px]"
            >
              At Coppell Heating and Air Conditioning, we believe that every home and business deserves perfect comfort. Family-owned and operated for over 40 years.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#3B3B3B] hover:bg-[#2a2a2a] text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                GET IN TOUCH
                <span className="w-6 h-6 bg-primary-main rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: '40+', label: 'Years of Experience' },
              { value: '10,000+', label: 'Happy Customers' },
              { value: '4.9/5', label: 'Customer Rating' },
              { value: '24/7', label: 'Emergency Service' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <p className="text-[42px] md:text-[52px] font-bold text-primary-main leading-none">{stat.value}</p>
                <p className="mt-2 text-[15px] text-[#3B3B3B]/60">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story Section - Image Left, Content Right */}
      <section className="py-20 bg-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image with floating card */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC professional at work"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Floating Stats Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -right-6 bg-white rounded-[20px] p-6 shadow-xl"
              >
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <p className="text-[32px] font-bold text-primary-main leading-none">4.9/5</p>
                    <p className="text-[13px] text-[#3B3B3B]/60 mt-1">Customer Rating</p>
                  </div>
                  <div className="w-px h-14 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-[32px] font-bold text-primary-main leading-none">1000+</p>
                    <p className="text-[13px] text-[#3B3B3B]/60 mt-1">Happy Clients</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Our Story
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                A Family Legacy of Comfort
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                Founded in 1983, Coppell Heating and Air Conditioning, Inc. has been a cornerstone of the Coppell community for over four decades. What started as a small family business has grown into a trusted name in HVAC services.
              </p>
              <p className="mt-4 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                As a family-owned business, we prioritize the needs of our community. When you give us a call, you receive the full breadth of our expertise. Whether you need a new air conditioner or a furnace repair, we&apos;ve got you covered.
              </p>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#3B3B3B] hover:text-primary-main transition-colors"
                >
                  View our services
                  <span className="w-6 h-6 bg-primary-main rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
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
              — Our Values
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
              Our Core Values
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              The principles that guide everything we do
            </p>
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
                icon: ShieldCheck,
                title: 'Pure Integrity',
                description: 'We believe in honest, transparent service. No hidden fees, no unnecessary upsells — just straightforward solutions to your HVAC needs.',
              },
              {
                icon: Award,
                title: 'True Quality',
                description: 'We use only the best equipment and parts, backed by manufacturer warranties. Our technicians are certified and continuously trained.',
              },
              {
                icon: Heart,
                title: 'Client First',
                description: 'Your comfort and satisfaction are our top priorities. We listen to your needs and provide personalized solutions that fit your budget.',
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-[#F6F7F9] rounded-[20px] p-8"
              >
                <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-main" />
                </div>
                <h3 className="text-[18px] font-bold text-[#3B3B3B] mb-3">{value.title}</h3>
                <p className="text-[15px] text-[#3B3B3B]/70 leading-[1.7]">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
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
                — Our Expertise
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                HVAC Expertise You Can Trust
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                When you choose Coppell Heating and Air Conditioning, you&apos;re choosing a team that cares about your comfort as much as you do.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                {[
                  'Licensed, bonded, and insured (License # TACLA00066993E)',
                  'Certified technicians with ongoing training',
                  'Same-day service for emergencies',
                  'Transparent, upfront pricing',
                  'Satisfaction guaranteed on all services',
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

              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Get In Touch
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
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC service van"
                  width={560}
                  height={480}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — What We Do
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                Our Services
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 bg-[#3B3B3B] hover:bg-[#2a2a2a] text-white px-5 py-3 rounded-full text-[14px] font-semibold transition-colors"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.slice(0, 6).map((service, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-[#F6F7F9] rounded-[20px] p-8"
              >
                <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                  <Wrench className="w-7 h-7 text-primary-main" />
                </div>
                <h3 className="text-[18px] font-bold text-[#3B3B3B] mb-3">{service.title}</h3>
                <p className="text-[15px] text-[#3B3B3B]/70 leading-[1.7]">{service.shortDescription}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
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
              — Testimonials
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
              What Our Customers Say
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white rounded-[20px] p-7"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-primary-main fill-primary-main"
                    />
                  ))}
                </div>
                <p className="text-[15px] text-[#3B3B3B]/80 leading-[1.7] line-clamp-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-11 h-11 bg-gray-200 rounded-full flex items-center justify-center">
                    <span className="text-[15px] font-semibold text-[#3B3B3B]">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#3B3B3B]">{testimonial.name}</p>
                    <p className="text-[13px] text-[#3B3B3B]/60">{testimonial.role}</p>
                  </div>
                </div>
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
              Ready to Experience the Difference?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Contact us today for a free consultation. Our team is ready to help with all your heating and cooling needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-white text-[#3B3B3B] px-7 py-4 rounded-full text-[15px] font-semibold transition-colors hover:bg-gray-100"
                >
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
