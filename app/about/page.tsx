import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import {
  LandingProductFeature,
  LandingFeatureList,
  LandingStatsSection,
  LandingStatItem,
  LandingTestimonialGrid,
} from '@/components/landing';
import { testimonials } from '@/data/content/testimonials';
import {
  PhoneIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  HeartIcon,
  TargetIcon,
  UsersIcon,
  ClockIcon,
  AwardIcon,
  CheckCircleIcon,
  ThermometerIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Coppell Heating and Air Conditioning, Inc. - Family-owned HVAC experts serving Coppell, TX since 1983. Trusted professionals committed to your comfort.',
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Your Trusted HVAC Partner Since 1983
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              At Coppell Heating and Air Conditioning, we believe that every home and business deserves perfect comfort. With over 40 years of experience in HVAC services, we specialize in providing reliable heating, cooling, and air quality solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <LandingProductFeature
        className="py-20"
        leadingComponent={
          <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
            — Our Story
          </span>
        }
        title="A Family Legacy of Comfort"
        description="Founded in 1983, Coppell Heating and Air Conditioning, Inc. has been a cornerstone of the Coppell community for over four decades. What started as a small family business has grown into a trusted name in HVAC services, all while maintaining our commitment to personalized service and exceptional quality."
        imageSrc="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
        imageAlt="HVAC professional at work"
        imagePosition="right"
        imagePerspective="paper"
        textPosition="left"
      >
        <p className="text-gray-600 dark:text-gray-400 mt-4">
          As a family-owned business, we prioritize the needs of our community. When you give us a call, you receive the full breadth of our expertise. Whether you need a new air conditioner or a furnace repair, we&apos;ve got you covered.
        </p>
      </LandingProductFeature>

      {/* Stats Section */}
      <LandingStatsSection
        className="bg-gray-50 dark:bg-gray-900"
        title="Trusted by Thousands"
        description="Numbers that reflect our commitment to excellence"
        withBackground
        variant="primary"
      >
        <LandingStatItem
          value="40+"
          description="Years of Experience"
        />
        <LandingStatItem
          value="10,000+"
          description="Happy Customers"
        />
        <LandingStatItem
          value="4.9/5"
          description="Customer Rating"
        />
        <LandingStatItem
          value="24/7"
          description="Emergency Service"
        />
      </LandingStatsSection>

      {/* Our Values */}
      <LandingFeatureList
        className="py-20"
        title="Our Core Values"
        description="The principles that guide everything we do"
        featureItems={[
          {
            title: 'Pure Integrity',
            description: 'We believe in honest, transparent service. No hidden fees, no unnecessary upsells — just straightforward solutions to your HVAC needs.',
            icon: <ShieldCheckIcon className="w-6 h-6" />,
          },
          {
            title: 'True Quality',
            description: 'We use only the best equipment and parts, backed by manufacturer warranties. Our technicians are certified and continuously trained on the latest technologies.',
            icon: <CheckCircleIcon className="w-6 h-6" />,
          },
          {
            title: 'Client First',
            description: 'Your comfort and satisfaction are our top priorities. We listen to your needs and provide personalized solutions that fit your budget and lifestyle.',
            icon: <HeartIcon className="w-6 h-6" />,
          },
        ]}
      />

      {/* Why Choose Us */}
      <LandingProductFeature
        className="bg-gray-50 dark:bg-gray-900 py-20"
        leadingComponent={
          <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
            — Why Choose Us
          </span>
        }
        title="HVAC Expertise You Can Trust"
        description="When you choose Coppell Heating and Air Conditioning, you're choosing a team that cares about your comfort as much as you do."
        imageSrc="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=80"
        imageAlt="HVAC service van"
        imagePosition="left"
        imagePerspective="bottom"
        textPosition="left"
      >
        <ul className="mt-6 space-y-4">
          <li className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
            <span>Licensed, bonded, and insured (License # TACLA00066993E)</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
            <span>Certified technicians with ongoing training</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
            <span>Same-day service for emergencies</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
            <span>Transparent, upfront pricing</span>
          </li>
          <li className="flex items-start gap-3">
            <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
            <span>Satisfaction guaranteed on all services</span>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Button asChild className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
            <Link href="/contact">
              Get In Touch
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </LandingProductFeature>

      {/* Testimonials */}
      <LandingTestimonialGrid
        className="py-20"
        title="What Our Customers Say"
        testimonialItems={testimonials.slice(0, 3).map((t) => ({
          name: t.name,
          text: t.content,
          handle: `${t.role}, ${t.location}`,
          imageSrc: '',
        }))}
      />

      {/* CTA Section */}
      <section className="bg-primary-main py-16">
        <div className="container-wide px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-4 text-lg text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our team is ready to help with all your heating and cooling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center">
            <Button asChild size="lg" className="bg-white text-primary-main hover:bg-gray-100 gap-2 rounded-full px-8">
              <Link href="/contact">
                Contact Us
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
      </section>

      <Footer />
    </div>
  );
}
