import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryTextCtaSection } from '@/components/landing';
import { services, servicesList } from '@/data/content/services';
import {
  PhoneIcon,
  ArrowRightIcon,
  ThermometerSnowflakeIcon,
  FlameIcon,
  WindIcon,
  WrenchIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Comprehensive HVAC services in Coppell, TX - AC repair, heating services, duct cleaning, maintenance, and more. Call (972) 462-1882 for expert service.',
};

const serviceIcons: Record<string, React.ReactNode> = {
  'ac-repair': <ThermometerSnowflakeIcon className="w-12 h-12" />,
  'heating': <FlameIcon className="w-12 h-12" />,
  'maintenance': <WrenchIcon className="w-12 h-12" />,
  'duct-cleaning': <WindIcon className="w-12 h-12" />,
  'installation': <ThermometerSnowflakeIcon className="w-12 h-12" />,
  'attic-insulation': <ShieldCheckIcon className="w-12 h-12" />,
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Depend On Us To Repair Or Replace Your Air Conditioner or Furnace
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              When was the last time you had your air conditioner serviced? What about your gas furnace? If you haven&apos;t had your HVAC system checked in recent years, then now is a great time to get started. Our brilliant HVAC team is only a phone call away.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
                <Link href="/contact">
                  Request Estimate
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="tel:972-462-1882">
                  <PhoneIcon className="w-4 h-4" />
                  (972) 462-1882
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 w-full">
        <div className="container-wide px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-video bg-gradient-to-br from-primary-lighter/30 to-primary-main/20 flex items-center justify-center">
                  <div className="text-primary-main">
                    {serviceIcons[service.id] || <WrenchIcon className="w-12 h-12" />}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-xl">
                      {service.title}
                    </h3>
                    {service.discount && (
                      <span className="bg-primary-main text-white text-sm font-bold px-3 py-1 rounded-full">
                        {service.discount} OFF
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                  {service.features && (
                    <ul className="mt-4 space-y-2">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <CheckCircleIcon className="w-4 h-4 text-primary-main flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button asChild className="mt-6 w-full bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
                    <Link href="/contact">
                      Book Now
                      <ArrowRightIcon className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All Services List */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container-wide px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
            Full Service List
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Please review all of our services and give us a call if you have any questions. We&apos;re licensed, bonded, and insured.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {servicesList.map((service, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm"
              >
                <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0" />
                <span className="text-sm font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LandingPrimaryTextCtaSection
        className="bg-gray-900 text-white"
        title="Need HVAC Service?"
        description="Contact us today for a free estimate. Our experienced team is ready to help with all your heating and cooling needs."
        textPosition="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
            <Link href="/contact">
              Get Free Estimate
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 border-white text-white hover:bg-white hover:text-gray-900">
            <Link href="tel:972-462-1882">
              <PhoneIcon className="w-4 h-4" />
              (972) 462-1882
            </Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>

      <Footer />
    </div>
  );
}
