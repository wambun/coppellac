'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { Input } from '@/components/shared/ui/input';
import { Textarea } from '@/components/shared/ui/textarea';
import { Label } from '@/components/shared/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shared/ui/select';
import {
  PhoneIcon,
  MailIcon,
  MapPinIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon,
} from 'lucide-react';

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you'd send this to your backend
    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Get In Touch
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Have questions about your HVAC system? Need a quick repair, maintenance service, or a custom consultation? At Coppell Heating and Air, your comfort is our top priority.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20">
        <div className="container-wide px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
              <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>

              {formSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    We&apos;ve received your message and will get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setFormSubmitted(false)}
                    className="mt-6 bg-primary-main hover:bg-primary-dark text-white"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        placeholder="Your full name"
                        required
                        className="rounded-lg"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="(xxx) xxx-xxxx"
                        required
                        className="rounded-lg"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="rounded-lg"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Type</Label>
                    <Select>
                      <SelectTrigger className="rounded-lg">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ac-repair">AC Repair</SelectItem>
                        <SelectItem value="heating">Heating Services</SelectItem>
                        <SelectItem value="maintenance">HVAC Maintenance</SelectItem>
                        <SelectItem value="duct-cleaning">Duct Cleaning</SelectItem>
                        <SelectItem value="installation">New Installation</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your HVAC needs..."
                      required
                      rows={5}
                      className="rounded-lg"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full"
                  >
                    Send Message
                    <SendIcon className="w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Whether you have a question about our HVAC services, need emergency assistance, or want to schedule a routine maintenance visit, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
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
                  <div className="w-12 h-12 bg-primary-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:service@coppellac.com"
                      className="text-primary-main hover:text-primary-dark"
                    >
                      service@coppellac.com
                    </a>
                    <p className="text-sm text-gray-500 mt-1">We respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Office Address</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      436 Southwestern Blvd.<br />
                      Coppell, Texas 75019 USA
                    </p>
                    <a
                      href="https://goo.gl/maps/qZeaD2udM7AuEPSVA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-main hover:text-primary-dark text-sm font-medium mt-2 inline-block"
                    >
                      Get Directions →
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-main/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-primary-main" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Business Hours</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Monday - Friday: 8:00 AM - 5:00 PM<br />
                      Saturday: 9:00 AM - 2:00 PM<br />
                      Sunday: Closed
                    </p>
                    <p className="text-sm text-primary-main font-medium mt-2">
                      24/7 Emergency Service Available
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Call CTA */}
              <div className="bg-primary-main rounded-2xl p-6 text-white">
                <h3 className="text-xl font-bold mb-2">Need Immediate Assistance?</h3>
                <p className="text-white/90 mb-4">
                  For emergencies, call us directly. We&apos;re available 24/7.
                </p>
                <Button asChild size="lg" className="w-full bg-white text-primary-main hover:bg-gray-100 gap-2 rounded-full">
                  <Link href="tel:972-462-1882">
                    <PhoneIcon className="w-4 h-4" />
                    Call (972) 462-1882
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-gray-100 dark:bg-gray-900 py-16">
        <div className="container-wide px-6">
          <div className="aspect-video bg-gray-300 dark:bg-gray-700 rounded-2xl overflow-hidden">
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
