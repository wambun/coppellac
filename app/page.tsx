import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { services } from '@/data/content/services';
import { testimonials } from '@/data/content/testimonials';
import {
  PhoneIcon,
  ArrowRightIcon,
  ClockIcon,
  ShieldCheckIcon,
  CheckCircleIcon,
  StarIcon,
  CalendarCheckIcon,
  WrenchIcon,
  ThumbsUpIcon,
  HeadphonesIcon,
} from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section - Full width background image with overlay */}
      <section className="relative min-h-[600px] lg:min-h-[700px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1631545806609-61d2bd4f3a2b?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC professional at work"
            fill
            className="object-cover"
            priority
          />
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        {/* Content */}
        <div className="container-wide mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your Trusted{' '}
              <span className="text-primary-main">HVAC Experts</span> in Coppell, TX
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Expert HVAC solutions for homes & businesses — reliable heating, cooling, and air quality services you can trust. Family-owned since 1983.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                asChild
                size="lg"
                className="bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold text-base"
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
                className="rounded-2xl px-8 py-4 h-auto font-semibold text-base border-white text-white hover:bg-white hover:text-gray-900"
              >
                <Link href="tel:972-462-1882">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  (972) 462-1882
                </Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-6 mt-10">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <StarIcon
                      key={star}
                      className="w-5 h-5 text-yellow-400 fill-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
              </div>
              <div className="w-px h-6 bg-gray-500" />
              <div className="text-white">
                <span className="font-bold">1000+</span> Happy Clients
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-16 bg-white">
        <div className="container-wide mx-auto px-6">
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

      {/* About Section */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Image */}
            <div className="relative">
              <div className="rounded-3xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&auto=format&fit=crop&q=80"
                  alt="HVAC technician team"
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
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Your Local Family-Owned HVAC Company
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                As a family-owned business since 1983, we prioritize the needs of our community. When you give us a call, you receive the full breadth of our expertise. Whether you need a new air conditioner or a furnace repair, we&apos;ve got you covered.
              </p>
              <p className="mt-4 text-gray-600">
                Our team of certified technicians brings decades of combined experience to every job, ensuring your home stays comfortable year-round.
              </p>
              <Button
                asChild
                className="mt-8 bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRightIcon className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works / Booking Steps */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              How It Works
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Easy Booking Process
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Getting your HVAC system serviced has never been easier. Follow these simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: CalendarCheckIcon,
                title: 'Book Online',
                description: 'Schedule your service appointment online or give us a call.',
                step: '01',
              },
              {
                icon: HeadphonesIcon,
                title: 'Confirmation',
                description: 'We\'ll confirm your appointment and answer any questions.',
                step: '02',
              },
              {
                icon: WrenchIcon,
                title: 'Expert Service',
                description: 'Our certified technicians arrive on time and get to work.',
                step: '03',
              },
              {
                icon: ThumbsUpIcon,
                title: 'Enjoy Comfort',
                description: 'Relax in your perfectly climate-controlled space.',
                step: '04',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative inline-flex">
                  <div className="w-20 h-20 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                    <item.icon className="w-10 h-10 text-primary-main" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 bg-primary-main rounded-full flex items-center justify-center text-white text-sm font-bold">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              What Sets Us Apart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ClockIcon,
                title: '24/7 Emergency Support',
                description: 'HVAC problems don\'t follow business hours. Our emergency team is available around the clock.',
              },
              {
                icon: ShieldCheckIcon,
                title: 'Licensed & Insured',
                description: 'Fully licensed, bonded, and insured for your peace of mind. License # TACLA00066993E.',
              },
              {
                icon: CheckCircleIcon,
                title: 'Satisfaction Guaranteed',
                description: 'We stand behind our work with a 100% satisfaction guarantee on all services.',
              },
              {
                icon: StarIcon,
                title: '40+ Years Experience',
                description: 'Four decades of trusted service in the Coppell community since 1983.',
              },
              {
                icon: WrenchIcon,
                title: 'Expert Technicians',
                description: 'Our team is made up of certified HVAC professionals with ongoing training.',
              },
              {
                icon: CalendarCheckIcon,
                title: 'Flexible Scheduling',
                description: 'Book at a time that works for you with our convenient scheduling options.',
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-primary-main" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Expert HVAC Services
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              At Coppell Heating and Air Conditioning, we specialize in providing comprehensive HVAC solutions for homes and businesses alike.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 4).map((service) => (
              <Link
                key={service.id}
                href={service.href}
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

          <div className="text-center mt-12">
            <Button
              asChild
              variant="outline"
              className="rounded-2xl px-8 py-4 h-auto font-semibold"
            >
              <Link href="/services">
                View All Services
                <ArrowRightIcon className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Ready to Experience Comfort?
          </h2>
          <p className="mt-6 text-lg text-gray-400 max-w-2xl mx-auto">
            Contact us today for a free estimate on your HVAC needs. Our team is standing by to help you achieve the perfect indoor climate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold text-base"
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
              className="rounded-2xl px-8 py-4 h-auto font-semibold text-base border-white text-white hover:bg-white hover:text-gray-900"
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
