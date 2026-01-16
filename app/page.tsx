'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { services } from '@/data/content/services';
import { testimonials } from '@/data/content/testimonials';
import {
  ArrowRight,
  Clock,
  Shield,
  CheckCircle,
  Star,
  Calendar,
  Wrench,
  ThumbsUp,
  Headphones,
  Users,
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

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section - Heatfix style */}
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center pt-[72px]">
        {/* Background Image with gradient overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC professional"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient overlay like Heatfix - dark on right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[600px]">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[82px] font-bold text-[#3B3B3B] leading-[1.05] tracking-[-3px]"
            >
              Affordable HVAC Solution in{' '}
              <span className="text-primary-main">Coppell.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-[#3B3B3B]/70 leading-[1.7] max-w-[480px]"
            >
              Expert HVAC solutions for homes & businesses — reliable heating, cooling, and air quality services you can trust. Family-owned since 1983.
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
                GET STARTED NOW
                <span className="w-6 h-6 bg-primary-main rounded-full flex items-center justify-center">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </Link>
            </motion.div>

            {/* Testimonial Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-12 bg-white rounded-2xl p-5 shadow-lg max-w-[340px]"
            >
              <p className="text-[14px] text-[#3B3B3B]/80 leading-[1.6]">
                &quot;We are proud to work with Coppell AC for over 10 years. Exceptional service, quality and reliability.&quot;
              </p>
              <div className="flex items-center gap-3 mt-4">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-[14px] font-semibold text-[#3B3B3B]">JD</span>
                </div>
                <div>
                  <p className="text-[14px] font-semibold text-[#3B3B3B]">John Doe</p>
                  <p className="text-[12px] text-[#3B3B3B]/60">Local Business Owner</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid md:grid-cols-3 gap-6"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-[#F6F7F9] rounded-[20px] p-7"
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

      {/* About Section - Image Left, Content Right */}
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
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC technician"
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
                    <p className="text-[13px] text-[#3B3B3B]/60 mt-1">Customer Satisfaction Rate</p>
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
                — Who We Are
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                Efficient Heating and Cooling Systems
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                At Coppell, we stand behind every installation and service call. With over 40 years of experience in HVAC services, we specialize in providing reliable heating, cooling, and air quality solutions.
              </p>
              <motion.div
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#3B3B3B] hover:text-primary-main transition-colors"
                >
                  Learn more
                  <span className="w-6 h-6 bg-primary-main rounded-full flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Booking Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left - Title and Description */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] leading-[1.1] tracking-[-2px]">
                Our Simple Booking Process
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                Experience hassle-free HVAC service booking with our streamlined process. From initial contact to job completion, we make it easy.
              </p>
            </motion.div>

            {/* Right - Features */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {[
                {
                  icon: Clock,
                  title: '24/7 Emergency Support',
                  description: 'HVAC problems don\'t follow business hours. That\'s why our emergency team is available 24/7 to respond.',
                },
                {
                  icon: Shield,
                  title: 'Expert Technicians',
                  description: 'Our team of certified technicians brings years of expertise, with a focus on prompt, reliable, and quality service on every visit.',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-5"
                >
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#3B3B3B]">{feature.title}</h3>
                    <p className="mt-2 text-[15px] text-[#3B3B3B]/70 leading-[1.7]">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Process Steps */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {[
              { icon: Calendar, title: 'Book Your Service', description: 'Choose a date and time that works best for you.' },
              { icon: Headphones, title: 'We Arrive on Time', description: 'Our certified team will arrive at the scheduled time.' },
              { icon: Wrench, title: 'Flexible Scheduling', description: 'Browse our range of HVAC services for your convenience.' },
              { icon: ThumbsUp, title: 'Satisfaction Guaranteed', description: 'Get the results of your service, guaranteed on every job.' },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-main/10 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <step.icon className="w-8 h-8 text-primary-main" />
                </div>
                <h3 className="text-[17px] font-bold text-[#3B3B3B]">{step.title}</h3>
                <p className="mt-2 text-[14px] text-[#3B3B3B]/60 leading-[1.6]">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Our Services Hub
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#3B3B3B] mt-4 leading-[1.1] tracking-[-2px]">
                Discover Expert HVAC Services Today
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
                className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-5 py-3 rounded-full text-[14px] font-semibold transition-colors"
              >
                Explore With Coppellac
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Services Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.slice(0, 4).map((service, index) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-[20px] overflow-hidden group"
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={`https://images.unsplash.com/photo-${index === 0 ? '1585771724684-38269d6639fd' : index === 1 ? '1621905251189-08b45d6a269e' : index === 2 ? '1581578731548-c64695cc6952' : '1504328345606-18bbc8c9d7d1'}?w=400&auto=format&fit=crop&q=80`}
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
                  <h3 className="text-[17px] font-bold text-[#3B3B3B]">{service.title}</h3>
                  <p className="mt-2 text-[14px] text-[#3B3B3B]/60 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-4 text-[14px] font-semibold text-[#3B3B3B] hover:text-primary-main transition-colors"
                  >
                    BOOK NOW
                    <span className="w-5 h-5 bg-primary-main rounded-full flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                  </Link>
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
              Ready to Experience Comfort?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Contact us today for a free estimate on your HVAC needs. Our team is standing by to help you achieve the perfect indoor climate.
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
