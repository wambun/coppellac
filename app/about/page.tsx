import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { testimonials } from '@/data/content/testimonials';
import { services } from '@/data/content/services';
import {
  PhoneIcon,
  ArrowRightIcon,
  ShieldCheckIcon,
  HeartIcon,
  CheckCircleIcon,
  StarIcon,
  ClockIcon,
  WrenchIcon,
  AwardIcon,
  UsersIcon,
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
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC team"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container-wide mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Your Trusted HVAC Partner Since 1983
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              At Coppell Heating and Air Conditioning, we believe that every home and business deserves perfect comfort.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC professional at work"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
              {/* Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-main">4.9/5</p>
                    <p className="text-sm text-gray-500">Rating</p>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary-main">1000+</p>
                    <p className="text-sm text-gray-500">Clients</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                A Family Legacy of Comfort
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                Founded in 1983, Coppell Heating and Air Conditioning, Inc. has been a cornerstone of the Coppell community for over four decades. What started as a small family business has grown into a trusted name in HVAC services.
              </p>
              <p className="mt-4 text-gray-600">
                As a family-owned business, we prioritize the needs of our community. When you give us a call, you receive the full breadth of our expertise. Whether you need a new air conditioner or a furnace repair, we&apos;ve got you covered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '40+', label: 'Years of Experience' },
              { value: '10,000+', label: 'Happy Customers' },
              { value: '4.9/5', label: 'Customer Rating' },
              { value: '24/7', label: 'Emergency Service' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl md:text-5xl font-bold text-primary-main">{stat.value}</p>
                <p className="mt-2 text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Our Core Values
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Pure Integrity',
                description: 'We believe in honest, transparent service. No hidden fees, no unnecessary upsells — just straightforward solutions to your HVAC needs.',
              },
              {
                icon: AwardIcon,
                title: 'True Quality',
                description: 'We use only the best equipment and parts, backed by manufacturer warranties. Our technicians are certified and continuously trained.',
              },
              {
                icon: HeartIcon,
                title: 'Client First',
                description: 'Your comfort and satisfaction are our top priorities. We listen to your needs and provide personalized solutions that fit your budget.',
              },
            ].map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary-main" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
                Our Expertise
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                HVAC Expertise You Can Trust
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                When you choose Coppell Heating and Air Conditioning, you&apos;re choosing a team that cares about your comfort as much as you do.
              </p>

              <ul className="mt-8 space-y-4">
                {[
                  'Licensed, bonded, and insured (License # TACLA00066993E)',
                  'Certified technicians with ongoing training',
                  'Same-day service for emergencies',
                  'Transparent, upfront pricing',
                  'Satisfaction guaranteed on all services',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8 bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold"
              >
                <Link href="/contact">
                  Get In Touch
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>

            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC service van"
                  width={600}
                  height={500}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Our Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.slice(0, 6).map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                  <WrenchIcon className="w-7 h-7 text-primary-main" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.shortDescription}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              What Our Customers Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#f6f7f9] rounded-3xl p-8"
              >
                <div className="flex mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="w-5 h-5 text-primary-main fill-primary-main"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 line-clamp-4">
                  &quot;{testimonial.content}&quot;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center">
                    <span className="text-gray-600 font-semibold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-main">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Experience the Difference?
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            Contact us today for a free consultation. Our team is ready to help with all your heating and cooling needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-main hover:bg-gray-100 rounded-2xl px-8 py-4 h-auto font-semibold"
            >
              <Link href="/contact">
                Contact Us
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-2xl px-8 py-4 h-auto font-semibold border-white text-white hover:bg-white hover:text-primary-main"
            >
              <Link href="tel:972-462-1882">
                <PhoneIcon className="w-4 h-4 mr-2" />
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
