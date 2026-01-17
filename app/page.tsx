'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
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
  Snowflake,
  Flame,
  Wind,
  Phone,
} from 'lucide-react';

// Animation variants
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
      <Header />

      {/* Hero Section with Video Background */}
      <section className="relative min-h-[700px] lg:min-h-[800px] flex items-center pt-[72px] overflow-hidden">
        {/* Hero Background */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hvac-repair-hero.jpg"
            alt="Professional HVAC technician servicing air conditioning unit"
            fill
            className="object-cover"
            priority
          />
          {/* Navy gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#1E3A5F]/95 via-[#1E3A5F]/80 to-[#1E3A5F]/60" />
        </div>

        {/* Content */}
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary-main rounded-full animate-pulse" />
              <span className="text-white/90 text-[14px] font-medium">Family-Owned Since 1983</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[76px] font-bold text-white leading-[1.05] tracking-[-3px]"
            >
              Expert HVAC Solutions in{' '}
              <span className="text-primary-main">Coppell</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[18px] text-white/80 leading-[1.7] max-w-[520px]"
            >
              Reliable heating, cooling, and air quality services you can trust.
              Over 40 years of keeping Coppell comfortable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                GET FREE ESTIMATE
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:972-462-1882"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-all"
              >
                <Phone className="w-4 h-4" />
                (972) 462-1882
              </Link>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-8 mt-12"
            >
              {[
                { value: '40+', label: 'Years Experience' },
                { value: '10K+', label: 'Happy Customers' },
                { value: '24/7', label: 'Emergency Service' },
              ].map((stat, index) => (
                <div key={index} className="text-center sm:text-left">
                  <p className="text-[32px] font-bold text-primary-main leading-none">{stat.value}</p>
                  <p className="text-[14px] text-white/60 mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Quick Links - Colorful */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Snowflake, label: 'AC Repair', color: 'bg-primary-main', href: '/services' },
              { icon: Flame, label: 'Heating', color: 'bg-secondary-main', href: '/services' },
              { icon: Wind, label: 'Air Quality', color: 'bg-[#1E3A5F]', href: '/services' },
              { icon: Wrench, label: 'Maintenance', color: 'bg-primary-dark', href: '/services' },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link
                  href={service.href}
                  className={`flex items-center gap-3 p-4 rounded-2xl ${service.color} text-white hover:opacity-90 transition-all group`}
                >
                  <service.icon className="w-6 h-6" />
                  <span className="font-semibold text-[15px]">{service.label}</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Customer Reviews
            </span>
            <h2 className="text-[36px] md:text-[44px] font-bold text-[#1E3A5F] mt-3 tracking-[-2px]">
              What Our Customers Say
            </h2>
          </motion.div>

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
                className="bg-white rounded-[20px] p-7 shadow-lg border border-gray-100"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-[15px] text-[#3B3B3B]/80 leading-[1.7] line-clamp-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3 mt-5">
                  <div className="w-11 h-11 bg-gradient-to-br from-primary-main to-primary-dark rounded-full flex items-center justify-center">
                    <span className="text-[15px] font-semibold text-white">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-[15px] font-semibold text-[#1E3A5F]">{testimonial.name}</p>
                    <p className="text-[13px] text-[#3B3B3B]/60">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section - More Colorful */}
      <section className="py-20 bg-[#1E3A5F]">
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
              <div className="rounded-[24px] overflow-hidden border-4 border-white/20">
                <Image
                  src="/images/who-we-are.jpg"
                  alt="HVAC technician servicing air conditioning unit with refrigerant gauges"
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
                    <p className="text-[32px] font-bold text-secondary-main leading-none">1000+</p>
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
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mt-4 leading-[1.1] tracking-[-2px]">
                Efficient Heating and Cooling Systems
              </h2>
              <p className="mt-6 text-[16px] text-white/70 leading-[1.8]">
                At Coppell Heating and Air Conditioning, we stand behind every installation and service call. With over 40 years of experience in HVAC services, we specialize in providing reliable heating, cooling, and air quality solutions.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Licensed, Bonded & Insured',
                  'Same-Day Emergency Service',
                  'Satisfaction Guaranteed',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-main" />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 inline-block"
              >
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4" />
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
              <span className="text-secondary-main font-semibold text-[14px] tracking-wide uppercase">
                — How It Works
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#1E3A5F] mt-4 leading-[1.1] tracking-[-2px]">
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
                  color: 'bg-primary-main',
                },
                {
                  icon: Shield,
                  title: 'Expert Technicians',
                  description: 'Our team of certified technicians brings years of expertise, with a focus on prompt, reliable, and quality service on every visit.',
                  color: 'bg-secondary-main',
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex gap-5"
                >
                  <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[18px] font-bold text-[#1E3A5F]">{feature.title}</h3>
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
              { icon: Calendar, title: 'Book Your Service', description: 'Choose a date and time that works best for you.', color: 'bg-primary-main' },
              { icon: Headphones, title: 'We Arrive on Time', description: 'Our certified team will arrive at the scheduled time.', color: 'bg-secondary-main' },
              { icon: Wrench, title: 'Expert Service', description: 'Professional diagnosis and repair of your HVAC system.', color: 'bg-[#1E3A5F]' },
              { icon: ThumbsUp, title: 'Satisfaction Guaranteed', description: 'Get the results of your service, guaranteed on every job.', color: 'bg-primary-dark' },
            ].map((step, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[17px] font-bold text-[#1E3A5F]">{step.title}</h3>
                <p className="mt-2 text-[14px] text-[#3B3B3B]/60 leading-[1.6]">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-b from-[#F6F7F9] to-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Our Services
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-[#1E3A5F] mt-4 leading-[1.1] tracking-[-2px]">
                Expert HVAC Services
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
                className="inline-flex items-center gap-2 bg-[#1E3A5F] hover:bg-[#152D4A] text-white px-5 py-3 rounded-full text-[14px] font-semibold transition-colors"
              >
                View All Services
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
            {services.slice(0, 4).map((service) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-[20px] overflow-hidden group shadow-lg border border-gray-100"
              >
                {/* Service Image */}
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-bold text-[#1E3A5F] group-hover:text-primary-main transition-colors">{service.title}</h3>
                  <p className="mt-2 text-[14px] text-[#3B3B3B]/60 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 mt-4 text-[14px] font-semibold text-[#1E3A5F] hover:text-primary-main transition-colors"
                  >
                    LEARN MORE
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

      {/* CTA Section - Colorful Gradient */}
      <section className="py-20 bg-gradient-to-r from-[#1E3A5F] via-[#1E3A5F] to-primary-dark">
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
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Get Free Estimate
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-white text-[#1E3A5F] px-7 py-4 rounded-full text-[15px] font-semibold transition-colors hover:bg-gray-100"
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
