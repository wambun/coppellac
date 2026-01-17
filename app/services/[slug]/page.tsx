'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { services } from '@/data/content/services';
import {
  ArrowRight,
  CheckCircle,
  Phone,
  Clock,
  Shield,
  Award,
  ArrowLeft,
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

export default function ServicePage() {
  const params = useParams();
  const slug = params.slug as string;

  // Find the service by matching the slug to the service id
  const service = services.find((s) => s.id === slug);

  // If service not found, show a fallback
  if (!service) {
    return (
      <div className="flex flex-col w-full">
        <Header />
        <div className="min-h-[60vh] flex items-center justify-center pt-[72px]">
          <div className="text-center">
            <h1 className="text-[36px] font-bold text-navy-main">Service Not Found</h1>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70">
              The service you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 mt-6 text-primary-main font-semibold hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Services
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  // Get related services (excluding current)
  const relatedServices = services.filter((s) => s.id !== slug).slice(0, 3);

  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-main/95 via-navy-main/85 to-navy-main/70" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[650px]">
            {/* Breadcrumb */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-[14px] text-white/70 mb-6"
            >
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white">{service.title}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white leading-[1.05] tracking-[-3px]"
            >
              {service.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-white/80 leading-[1.7] max-w-[520px]"
            >
              {service.description}
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
                BOOK NOW
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
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — About This Service
              </span>
              <h2 className="text-[36px] md:text-[44px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
                {service.title} in Coppell, TX
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                {service.longDescription || service.description}
              </p>

              {/* Features List */}
              {service.features && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="mt-8 grid sm:grid-cols-2 gap-4"
                >
                  {service.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3 bg-[#F6F7F9] rounded-xl p-4"
                    >
                      <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                      <span className="text-[15px] text-navy-main font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </motion.div>

            {/* Benefits Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy-main rounded-[24px] p-8 lg:p-10"
            >
              <h3 className="text-[24px] font-bold text-white mb-6">
                Why Choose Us for {service.title}?
              </h3>
              {service.benefits && (
                <ul className="space-y-4">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                      <span className="text-[15px] text-white/80">{benefit}</span>
                    </li>
                  ))}
                </ul>
              )}

              <div className="mt-8 pt-8 border-t border-white/20">
                <p className="text-[14px] text-white/60 mb-4">Ready to get started?</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors w-full justify-center"
                >
                  Schedule Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              — Our Promise
            </span>
            <h2 className="text-[36px] md:text-[44px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              The Coppell Difference
            </h2>
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
                icon: Clock,
                title: '24/7 Emergency Service',
                description: 'HVAC emergencies don\'t wait for business hours. Our team is available around the clock to handle urgent repairs.',
                color: 'bg-primary-main',
              },
              {
                icon: Shield,
                title: 'Licensed & Insured',
                description: 'All our technicians are licensed, bonded, and insured for your complete peace of mind.',
                color: 'bg-secondary-main',
              },
              {
                icon: Award,
                title: '40+ Years Experience',
                description: 'Family-owned since 1983, we bring decades of expertise to every job we do.',
                color: 'bg-navy-main',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className={`w-16 h-16 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-5`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-[18px] font-bold text-navy-main">{item.title}</h3>
                <p className="mt-2 text-[15px] text-[#3B3B3B]/70 leading-[1.7]">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Other Services
            </span>
            <h2 className="text-[36px] md:text-[44px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              Explore More Services
            </h2>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6"
          >
            {relatedServices.map((relatedService) => (
              <motion.div
                key={relatedService.id}
                variants={fadeInUp}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-[20px] overflow-hidden group shadow-lg border border-gray-100"
              >
                <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
                  <Image
                    src={relatedService.image}
                    alt={relatedService.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-[17px] font-bold text-navy-main group-hover:text-primary-main transition-colors">
                    {relatedService.title}
                  </h3>
                  <p className="mt-2 text-[14px] text-[#3B3B3B]/60 line-clamp-2">
                    {relatedService.shortDescription}
                  </p>
                  <Link
                    href={relatedService.href}
                    className="inline-flex items-center gap-2 mt-4 text-[14px] font-semibold text-navy-main hover:text-primary-main transition-colors"
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

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-navy-main via-navy-main to-primary-dark">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Ready to Schedule {service.title}?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Contact us today to schedule your service. Our team is standing by to help you achieve the perfect indoor climate.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Book Now
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
