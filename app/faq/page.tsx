import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { LandingFaqCollapsibleSection, LandingPrimaryTextCtaSection } from '@/components/landing';
import { faqItems } from '@/data/content/faq';
import { PhoneIcon, ArrowRightIcon, MessageCircleIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'FAQ',
  description: 'Frequently asked questions about HVAC services, heating, air conditioning, and more. Get answers from Coppell Heating and Air Conditioning experts.',
};

export default function FAQPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — FAQ
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Frequently Asked HVAC Questions
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              It&apos;s our job to help shine a light on questions that you may have about heating and air conditioning. Browse our FAQ below or contact us for personalized answers.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <LandingFaqCollapsibleSection
        className="py-20"
        title=""
        faqItems={faqItems.map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      {/* Still Have Questions */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container-wide px-6">
          <div className="max-w-2xl mx-auto text-center">
            <MessageCircleIcon className="w-12 h-12 text-primary-main mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold">
              Still Have Questions?
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              Can&apos;t find the answer you&apos;re looking for? Our team of HVAC experts is here to help. Contact us and we&apos;ll get back to you as soon as possible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
              <Button asChild className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
                <Link href="/contact">
                  Contact Us
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="gap-2 rounded-full">
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
        className="bg-gray-900 text-white"
        title="Ready for Expert HVAC Service?"
        description="Our experienced team is standing by to help with all your heating and cooling needs."
        textPosition="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
            <Link href="/contact">
              Schedule Service
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>

      <Footer />
    </div>
  );
}
