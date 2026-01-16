'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
  CheckCircleIcon,
} from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[400px] lg:min-h-[500px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&auto=format&fit=crop&q=80"
            alt="Contact us"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        </div>

        <div className="container-wide mx-auto px-6 relative z-10 py-20">
          <div className="max-w-2xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-4 leading-tight">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-gray-300 max-w-xl">
              Have questions about your HVAC system? Need a quick repair, maintenance service, or a custom consultation? We&apos;re here to help.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="container-wide mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
                Contact Information
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4 leading-tight">
                Let&apos;s Talk About Your HVAC Needs
              </h2>
              <p className="mt-6 text-gray-600 text-lg">
                Whether you have a question about our HVAC services, need emergency assistance, or want to schedule a routine maintenance visit, we&apos;re here to help.
              </p>

              <div className="mt-10 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Phone</h3>
                    <a
                      href="tel:972-462-1882"
                      className="text-primary-main hover:text-primary-dark text-lg font-medium"
                    >
                      (972) 462-1882
                    </a>
                    <p className="text-sm text-gray-500 mt-1">24/7 Emergency Service Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Email</h3>
                    <a
                      href="mailto:service@coppellac.com"
                      className="text-primary-main hover:text-primary-dark font-medium"
                    >
                      service@coppellac.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Office Address</h3>
                    <p className="text-gray-600">
                      436 Southwestern Blvd.<br />
                      Coppell, Texas 75019 USA
                    </p>
                    <a
                      href="https://goo.gl/maps/qZeaD2udM7AuEPSVA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-main hover:text-primary-dark text-sm font-semibold mt-2 inline-flex items-center"
                    >
                      Get Directions
                      <ArrowRightIcon className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-primary-main/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-7 h-7 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-primary-main font-semibold mt-2">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f6f7f9] rounded-3xl p-8 lg:p-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                  <p className="text-gray-600">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 bg-primary-main hover:bg-primary-dark text-white rounded-2xl px-8 py-4 h-auto font-semibold"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name *"
                      required
                      className="w-full px-4 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address *"
                      required
                      className="w-full px-4 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number *"
                      required
                      className="w-full px-4 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all"
                    />
                  </div>
                  <div>
                    <select
                      className="w-full px-4 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all text-gray-500"
                      defaultValue=""
                    >
                      <option value="" disabled>Select Service Type</option>
                      <option value="ac-repair">AC Repair</option>
                      <option value="heating">Heating Services</option>
                      <option value="maintenance">HVAC Maintenance</option>
                      <option value="duct-cleaning">Duct Cleaning</option>
                      <option value="installation">New Installation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your HVAC needs... *"
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-white rounded-2xl border-0 focus:ring-2 focus:ring-primary-main outline-none transition-all resize-none"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary-main hover:bg-primary-dark text-white rounded-2xl py-4 h-auto font-semibold text-base"
                  >
                    Send Message
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Call CTA */}
      <section className="py-20 bg-primary-main">
        <div className="container-wide mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Need Immediate Assistance?
          </h2>
          <p className="mt-6 text-lg text-white/90 max-w-2xl mx-auto">
            For emergencies, call us directly. Our team is available 24/7 to help with urgent HVAC issues.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary-main hover:bg-gray-100 rounded-2xl px-8 py-4 h-auto font-semibold"
            >
              <Link href="tel:972-462-1882">
                <PhoneIcon className="w-5 h-5 mr-2" />
                Call (972) 462-1882
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#f6f7f9]">
        <div className="container-wide mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              Our Location
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
              Find Us
            </h2>
          </div>
          <div className="aspect-video bg-gray-300 rounded-3xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3348.5!2d-96.98!3d32.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDU3JzAwLjAiTiA5NsKwNTgnNDguMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coppell Heating and Air Conditioning Location"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
