import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { services, servicesList } from '@/data/content/services';
import {
  PhoneIcon,
  ArrowRightIcon,
  WrenchIcon,
  CheckCircleIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive HVAC services in Coppell, TX - AC repair, heating services, duct cleaning, maintenance, and more. Call (972) 462-1882 for expert service.',
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC services"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container-wide mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Expert HVAC Services
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              At Coppell Heating and Air Conditioning, we specialize in providing comprehensive HVAC solutions for homes and businesses alike.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold"
              >
                <Link href="/contact">
                  Request Estimate
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-2xl px-8 py-4 h-auto font-semibold border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="tel:972-462-1882">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  (972) 462-1882
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Our Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              From routine maintenance to emergency repairs, we&apos;ve got all your HVAC needs covered.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <Link
                key={service.id}
                href="/contact"
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all"
              >
                {/* Service Image Placeholder */}
                <div className="relative aspect-[4/3] bg-gradient-to-br from-primary-main/20 to-primary-dark/30 flex items-center justify-center">
                  <WrenchIcon className="w-16 h-16 text-primary-main/50" />
                  {/* Discount Badge */}
                  {service.discount && (
                    <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-md">
                      <span className="text-2xl font-bold text-gray-900">{service.discount.replace('%', '')}</span>
                      <span className="text-lg font-bold text-gray-900">%</span>
                      <p className="text-xs font-semibold text-primary-main">OFF</p>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-main transition-colors">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 line-clamp-2">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center text-primary-main font-semibold text-sm">
                    Book now
                    <ArrowRightIcon className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
                Why Choose Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Quality Service You Can Trust
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                It&apos;s our prerogative to provide the very best heating and cooling service. To that end, we are licensed, bonded, and insured. That means that when we work on your residential or commercial HVAC system, you will have the satisfaction of knowing that we are highly qualified.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Licensed, bonded, and insured',
                  'Experienced, certified technicians',
                  'On-time, reliable service',
                  'Upfront, transparent pricing',
                  '100% satisfaction guarantee',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC technician"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Complete List
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Full Service List
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Please review all of our services and give us a call if you have any questions.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 bg-[#f6f7f9] rounded-2xl p-4"
              >
                <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0" />
                <span className="font-medium text-gray-900">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Need HVAC Service?
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Contact us today for a free estimate. Our experienced team is ready to help with all your heating and cooling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold"
            >
              <Link href="/contact">
                Get Free Estimate
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-4 h-auto font-semibold border-white text-white hover:bg-white hover:text-gray-900"
            >
              <Link href="tel:972-462-1882">
                <PhoneIcon className="w-5 h-5 mr-2" />
                (972) 462-1882
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
