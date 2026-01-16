import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import {
  LandingProductFeature,
  LandingFeatureList,
  LandingTestimonialGrid,
  LandingFaqCollapsibleSection,
  LandingPrimaryTextCtaSection,
} from '@/components/landing';
import { services } from '@/data/content/services';
import { testimonials } from '@/data/content/testimonials';
import { faqItems } from '@/data/content/faq';
import {
  PhoneIcon,
  ArrowRightIcon,
  ThermometerSnowflakeIcon,
  FlameIcon,
  WindIcon,
  WrenchIcon,
  ClockIcon,
  ShieldCheckIcon,
  AwardIcon,
  UsersIcon,
  CalendarIcon,
  CheckCircleIcon,
  StarIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <LandingProductFeature
        className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        title={
          <span>
            Your Trusted{' '}
            <span className="text-primary-main">HVAC Experts</span> in Coppell, TX
          </span>
        }
        description="Expert HVAC solutions for homes & businesses — reliable heating, cooling, and air quality services you can trust. Family-owned and serving the community since 1983."
        imageSrc="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&auto=format&fit=crop&q=80"
        imageAlt="HVAC technician servicing air conditioning unit"
        imagePosition="right"
        imagePerspective="bottom"
        textPosition="left"
        withBackgroundGlow
        backgroundGlowVariant="primary"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
            <Link href="/contact">
              Get Started Now
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="gap-2 rounded-full px-8">
            <Link href="tel:972-462-1882">
              <PhoneIcon className="w-4 h-4" />
              (972) 462-1882
            </Link>
          </Button>
        </div>
        <div className="flex items-center gap-4 mt-8 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-1">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-yellow-500" />
            <span className="font-semibold">4.9/5</span>
            <span>Rating</span>
          </div>
          <div className="w-px h-4 bg-gray-300" />
          <div className="flex items-center gap-1">
            <span className="font-semibold">40+</span>
            <span>Years Experience</span>
          </div>
        </div>
      </LandingProductFeature>

      {/* About Section */}
      <LandingProductFeature
        className="py-20"
        leadingComponent={
          <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
            — Who We Are
          </span>
        }
        title="Your Local Family-Owned HVAC Company"
        description="As a family-owned business since 1983, we prioritize the needs of our community. When you give us a call, you receive the full breadth of our expertise. Whether you need a new air conditioner or a furnace repair, we've got you covered."
        imageSrc="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=800&auto=format&fit=crop&q=80"
        imageAlt="HVAC team at work"
        imagePosition="left"
        imagePerspective="paper"
        textPosition="left"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Button asChild className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
            <Link href="/about">
              Learn More
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </LandingProductFeature>

      {/* Features Grid */}
      <LandingFeatureList
        className="bg-gray-50 dark:bg-gray-900"
        title="Why Choose Coppell Heating & Air?"
        description="We deliver expert HVAC services with a commitment to quality, reliability, and customer satisfaction."
        featureItems={[
          {
            title: '24/7 Emergency Support',
            description: 'HVAC problems don\'t follow business hours. That\'s why our emergency team is available 24/7 to respond.',
            icon: <ClockIcon className="w-6 h-6" />,
          },
          {
            title: 'Trusted Professionals',
            description: 'Our team is made up of certified HVAC technicians who bring years of hands-on experience and professionalism.',
            icon: <ShieldCheckIcon className="w-6 h-6" />,
          },
          {
            title: 'On-Time & Reliable',
            description: 'We value your time. Our technicians arrive on schedule and get the job done right the first time.',
            icon: <CheckCircleIcon className="w-6 h-6" />,
          },
          {
            title: '100% Satisfaction',
            description: 'Your satisfaction is our priority. From your first call to the final result, we ensure every detail is handled with care.',
            icon: <AwardIcon className="w-6 h-6" />,
          },
          {
            title: '40+ Years Experience',
            description: 'Since 1983, we\'ve been serving the Coppell community with reliable heating and cooling solutions.',
            icon: <UsersIcon className="w-6 h-6" />,
          },
          {
            title: 'Flexible Scheduling',
            description: 'Browse our range of HVAC services and book at a time that\'s most convenient for you.',
            icon: <CalendarIcon className="w-6 h-6" />,
          },
        ]}
        withBackground
        variant="primary"
      />

      {/* Services Section */}
      <section className="py-20 w-full">
        <div className="container-wide px-6">
          <div className="text-center mb-12">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-4">
              Expert HVAC Services
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              At Coppell Heating and Air Conditioning, we provide comprehensive HVAC solutions for homes and businesses alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="aspect-video bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-main/20 to-primary-dark/20 flex items-center justify-center">
                    {service.id === 'ac-repair' && <ThermometerSnowflakeIcon className="w-16 h-16 text-primary-main" />}
                    {service.id === 'heating' && <FlameIcon className="w-16 h-16 text-primary-main" />}
                    {service.id === 'maintenance' && <WrenchIcon className="w-16 h-16 text-primary-main" />}
                    {service.id === 'duct-cleaning' && <WindIcon className="w-16 h-16 text-primary-main" />}
                    {service.id === 'installation' && <ThermometerSnowflakeIcon className="w-16 h-16 text-primary-main" />}
                    {service.id === 'attic-insulation' && <ShieldCheckIcon className="w-16 h-16 text-primary-main" />}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg group-hover:text-primary-main transition-colors">
                      {service.title}
                    </h3>
                    {service.discount && (
                      <span className="text-primary-main font-bold">
                        {service.discount} OFF
                      </span>
                    )}
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {service.shortDescription}
                  </p>
                  <div className="mt-4 flex items-center text-primary-main font-medium text-sm group-hover:gap-2 transition-all">
                    Book Now <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <Link href="/services">
                View All Services
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <LandingTestimonialGrid
        className="bg-gray-50 dark:bg-gray-900"
        title="What Our Clients Say"
        description="Don't just take our word for it — hear from our satisfied customers."
        testimonialItems={testimonials.map((t) => ({
          name: t.name,
          text: t.content,
          handle: `${t.role}, ${t.location}`,
          imageSrc: t.avatar || '',
        }))}
        withBackground
        variant="primary"
      />

      {/* FAQ Section */}
      <LandingFaqCollapsibleSection
        className="py-20"
        title="Frequently Asked Questions"
        description="Get answers to common questions about HVAC services."
        faqItems={faqItems.slice(0, 5).map((item) => ({
          question: item.question,
          answer: item.answer,
        }))}
      />

      {/* CTA Section */}
      <LandingPrimaryTextCtaSection
        className="bg-gray-900 text-white"
        title="Ready to Experience Comfort?"
        description="Contact us today for a free estimate on your HVAC needs. Our team is standing by to help."
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
