'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { services } from '@/data/content/services';
import { serviceAreas, getServiceAreaBySlug } from '@/data/content/service-areas';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Shield,
  Star,
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

export default function ServiceAreaPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    notFound();
  }

  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[550px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/hvac-repair-hero.jpg"
            alt={`HVAC Services in ${area.name}, Texas`}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-main/95 via-navy-main/85 to-navy-main/70" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[650px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <MapPin className="w-4 h-4 text-primary-main" />
              <span className="text-white/90 text-[14px] font-medium">Serving {area.name}, TX</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[42px] md:text-[56px] lg:text-[64px] font-bold text-white mt-4 leading-[1.05] tracking-[-2px]"
            >
              HVAC Services in{' '}
              <span className="text-primary-main">{area.name}, Texas</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-white/80 leading-[1.7] max-w-[520px]"
            >
              {area.description}
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
                GET FREE ESTIMATE
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

      {/* Why Choose Us for This Area */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Why {area.name} Chooses Us
              </span>
              <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
                Trusted HVAC Experts Serving {area.name}
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                For over 40 years, Coppell Heating and Air Conditioning has been the trusted choice for {area.name} residents and businesses. Our licensed technicians provide fast, reliable HVAC services with upfront pricing and a satisfaction guarantee.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                {area.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-[#3B3B3B]/80">{highlight}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: Clock, label: '24/7 Emergency', value: 'Service' },
                { icon: Shield, label: 'Licensed &', value: 'Insured' },
                { icon: Star, label: '4.8 Star', value: 'Rating' },
                { icon: CheckCircle, label: '40+ Years', value: 'Experience' },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-[#F6F7F9] rounded-[20px] p-6 text-center"
                >
                  <div className="w-12 h-12 bg-primary-main/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-primary-main" />
                  </div>
                  <p className="text-[14px] text-[#3B3B3B]/60">{stat.label}</p>
                  <p className="text-[18px] font-bold text-navy-main">{stat.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Available */}
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
              — Our Services in {area.name}
            </span>
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              HVAC Services Available
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              Complete heating and cooling solutions for {area.name} homes and businesses.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100"
              >
                <h3 className="text-[18px] font-bold text-navy-main mb-3">{service.title}</h3>
                <p className="text-[14px] text-[#3B3B3B]/70 leading-[1.7] mb-4">
                  {service.shortDescription}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 text-[14px] font-semibold text-primary-main hover:text-primary-dark transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Nearby Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <h2 className="text-[28px] md:text-[32px] font-bold text-navy-main leading-[1.1] tracking-[-1px]">
              Also Serving Nearby Areas
            </h2>
            <p className="mt-3 text-[15px] text-[#3B3B3B]/70">
              We provide HVAC services throughout the DFW metroplex.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-3"
          >
            {serviceAreas
              .filter((a) => a.slug !== area.slug)
              .map((nearbyArea) => (
                <motion.div key={nearbyArea.slug} variants={fadeInUp}>
                  <Link
                    href={`/service-areas/${nearbyArea.slug}`}
                    className="inline-flex items-center gap-2 bg-[#F6F7F9] hover:bg-primary-main/10 rounded-full px-5 py-2.5 text-[14px] font-medium text-navy-main hover:text-primary-main transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    {nearbyArea.name}, TX
                  </Link>
                </motion.div>
              ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-main via-navy-main to-primary-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Need HVAC Service in {area.name}?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Contact us today for fast, reliable heating and cooling services. Our team is ready to help {area.name} residents stay comfortable year-round.
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
