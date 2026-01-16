import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { LandingFeatureList, LandingPrimaryTextCtaSection } from '@/components/landing';
import {
  PhoneIcon,
  ArrowRightIcon,
  CreditCardIcon,
  PercentIcon,
  CalendarIcon,
  CheckCircleIcon,
  ShieldCheckIcon,
  ClockIcon,
  DollarSignIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Financing Options',
  description: 'Affordable HVAC financing options in Coppell, TX. Special interest financing available with approved credit. Make your comfort investment affordable.',
};

export default function FinancingPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — Payment Options
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              HVAC Payment Options
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              We believe comfort shouldn&apos;t break the bank. That&apos;s why we offer flexible financing options to help you get the HVAC services you need, when you need them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
                <Link href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US" target="_blank">
                  Apply Now
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

      {/* Financing Benefits */}
      <LandingFeatureList
        className="py-20"
        title="Why Finance With Us?"
        description="Make your HVAC investment more manageable with our flexible financing options."
        featureItems={[
          {
            title: 'Special Interest Rates',
            description: 'Take advantage of promotional financing with special interest rates on qualifying purchases.',
            icon: <PercentIcon className="w-6 h-6" />,
          },
          {
            title: 'Flexible Terms',
            description: 'Choose from a variety of payment terms that fit your budget and lifestyle.',
            icon: <CalendarIcon className="w-6 h-6" />,
          },
          {
            title: 'Quick Approval',
            description: 'Our simple online application process means you can get approved quickly and start your project sooner.',
            icon: <ClockIcon className="w-6 h-6" />,
          },
          {
            title: 'No Hidden Fees',
            description: 'Transparent terms with no hidden fees or surprises. What you see is what you get.',
            icon: <ShieldCheckIcon className="w-6 h-6" />,
          },
          {
            title: 'Use For Any Service',
            description: 'Financing available for repairs, maintenance, and new system installations.',
            icon: <CreditCardIcon className="w-6 h-6" />,
          },
          {
            title: 'Budget-Friendly Payments',
            description: 'Break up the cost into manageable monthly payments that fit your budget.',
            icon: <DollarSignIcon className="w-6 h-6" />,
          },
        ]}
        withBackground
        variant="primary"
      />

      {/* How It Works */}
      <section className="py-20">
        <div className="container-wide px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              How Financing Works
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Getting started with financing is easy. Follow these simple steps to get the HVAC services you need today.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-2">Apply Online</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Complete our simple online application. It only takes a few minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-2">Get Approved</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Receive a quick decision on your application. Most approvals happen within minutes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-main text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-2">Schedule Service</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Once approved, schedule your service and enjoy your new comfort!
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
              <Link href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US" target="_blank">
                Apply for Financing
                <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Wells Fargo Section */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container-wide px-6">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-4 text-center">
                Financing Through Wells Fargo
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-6">
                We&apos;ve partnered with Wells Fargo to offer you convenient financing options for your HVAC needs. With approved credit, you can take advantage of special financing promotions.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                  <span>Special interest financing available with approved credit</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                  <span>Convenient monthly payments</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                  <span>Easy online application process</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0 mt-0.5" />
                  <span>Use for new installations, repairs, or maintenance</span>
                </div>
              </div>

              <div className="text-center">
                <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
                  <Link href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US" target="_blank">
                    Apply Today
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-4">
                  Subject to credit approval. Ask for details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Questions */}
      <section className="py-16">
        <div className="container-wide px-6">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <CreditCardIcon className="w-12 h-12 mx-auto mb-4 text-primary-main" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Questions About Financing?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Our team is happy to answer any questions you have about our financing options. Contact us today to learn more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
                <Link href="/contact">
                  Contact Us
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

      {/* CTA Section */}
      <LandingPrimaryTextCtaSection
        className="bg-primary-main text-white"
        title="Ready to Get Started?"
        description="Apply for financing today and get the HVAC services you need with affordable monthly payments."
        textPosition="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button asChild size="lg" className="bg-white text-primary-main hover:bg-gray-100 gap-2 rounded-full px-8">
            <Link href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US" target="_blank">
              Apply Now
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>

      <Footer />
    </div>
  );
}
