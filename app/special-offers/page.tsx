import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { LandingProductFeature, LandingPrimaryTextCtaSection } from '@/components/landing';
import {
  PhoneIcon,
  ArrowRightIcon,
  TagIcon,
  PercentIcon,
  SparklesIcon,
  CalendarIcon,
  CheckCircleIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Special Offers',
  description: 'Special HVAC deals and promotions in Coppell, TX. Save on AC repair, heating services, maintenance, and more. Limited time offers available!',
};

const offers = [
  {
    title: 'AC Tune-Up Special',
    description: 'Get your air conditioning system ready for summer with our comprehensive tune-up service.',
    discount: '$89',
    originalPrice: '$149',
    features: [
      'Complete system inspection',
      'Filter replacement included',
      'Refrigerant level check',
      'Thermostat calibration',
    ],
    highlight: true,
  },
  {
    title: 'Duct Cleaning',
    description: 'Improve your indoor air quality with professional duct cleaning services.',
    discount: '25% OFF',
    features: [
      'Complete duct system cleaning',
      'Allergen removal',
      'Free air quality assessment',
      'Sanitization included',
    ],
  },
  {
    title: 'New System Installation',
    description: 'Upgrade to a new energy-efficient HVAC system and save on installation.',
    discount: '$500 OFF',
    features: [
      'Free in-home estimate',
      'Energy-efficient options',
      '10-year warranty',
      'Financing available',
    ],
  },
  {
    title: 'Maintenance Plan',
    description: 'Join our maintenance plan and save on annual tune-ups and repairs.',
    discount: '20% OFF',
    features: [
      '2 tune-ups per year',
      'Priority scheduling',
      '15% off all repairs',
      'No overtime charges',
    ],
  },
];

export default function SpecialOffersPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-dark to-primary-main text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <TagIcon className="w-6 h-6" />
              <span className="font-semibold text-sm tracking-wide uppercase">
                Special Offers
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">
              Special Air Conditioning and Heating Offers
            </h1>
            <p className="mt-6 text-lg text-white/90">
              Please take advantage of our special offers. With HVAC technicians primed to help your thermostat and air conditioning system, there&apos;s never been a better time to schedule service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button asChild size="lg" className="bg-white text-primary-main hover:bg-gray-100 gap-2 rounded-full px-8">
                <Link href="/contact">
                  Claim Offer
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 border-white text-white hover:bg-white hover:text-primary-main">
                <Link href="tel:972-462-1882">
                  <PhoneIcon className="w-4 h-4" />
                  (972) 462-1882
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Offers Grid */}
      <section className="py-20 w-full">
        <div className="container-wide px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {offers.map((offer, idx) => (
              <div
                key={idx}
                className={`rounded-2xl p-8 border-2 transition-all ${
                  offer.highlight
                    ? 'border-primary-main bg-primary-main/5 shadow-lg'
                    : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800'
                }`}
              >
                {offer.highlight && (
                  <div className="flex items-center gap-2 text-primary-main font-semibold text-sm mb-4">
                    <SparklesIcon className="w-4 h-4" />
                    Most Popular
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{offer.title}</h3>
                  <div className="text-right">
                    <span className="text-3xl font-bold text-primary-main">
                      {offer.discount}
                    </span>
                    {offer.originalPrice && (
                      <span className="block text-sm text-gray-500 line-through">
                        Reg. {offer.originalPrice}
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {offer.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {offer.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-center gap-2 text-sm">
                      <CheckCircleIcon className="w-5 h-5 text-primary-main flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button asChild className="w-full bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
                  <Link href="/contact">
                    Claim This Offer
                    <ArrowRightIcon className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* American Standard Section */}
      <LandingProductFeature
        className="bg-gray-50 dark:bg-gray-900 py-20"
        leadingComponent={
          <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
            — Premium Equipment
          </span>
        }
        title="Some of the Best Moments in Life Happen at Home"
        description="American Standard Heating and Air works smarter to make all those moments more comfortable. When it comes to finding ways to make your home comfortable, you don't need to look any further."
        imageSrc="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&auto=format&fit=crop&q=80"
        imageAlt="Comfortable modern home"
        imagePosition="right"
        imagePerspective="paper"
        textPosition="left"
      >
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          With their experience and know-how, your local independent American Standard Heating & Air Conditioning dealer can handle all your heating and air conditioning needs. Add to that their focus on customer satisfaction and commitment to quality, and you see why so many people choose American Standard for their homes.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
            <Link href="tel:972-462-1882">
              <PhoneIcon className="w-4 h-4" />
              Call Today
            </Link>
          </Button>
        </div>
      </LandingProductFeature>

      {/* Financing CTA */}
      <section className="py-16">
        <div className="container-wide px-6">
          <div className="bg-gray-900 rounded-3xl p-8 md:p-12 text-white text-center">
            <PercentIcon className="w-12 h-12 mx-auto mb-4 text-primary-main" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Special Financing Available
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Ask us about our special interest financing with approved credit. Make your HVAC investment more affordable with flexible payment options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
                <Link href="https://retailservices.wellsfargo.com/ahapp/init-app?m=0024205254&l=en_US" target="_blank">
                  Apply Today
                  <ArrowRightIcon className="w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 border-white text-white hover:bg-white hover:text-gray-900">
                <Link href="/financing">
                  Learn More
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <LandingPrimaryTextCtaSection
        className="bg-primary-main text-white"
        title="Ready to Save?"
        description="Contact us today to take advantage of these limited-time offers. Our team is ready to help."
        textPosition="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button asChild size="lg" className="bg-white text-primary-main hover:bg-gray-100 gap-2 rounded-full px-8">
            <Link href="/contact">
              Get Started
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8 border-white text-white hover:bg-white hover:text-primary-main">
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
