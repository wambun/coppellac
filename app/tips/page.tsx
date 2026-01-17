'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import {
  ArrowRight,
  Phone,
  ThermometerSun,
  Wind,
  AlertTriangle,
  Snowflake,
  Flame,
  Home,
  CheckCircle,
  Lightbulb,
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const acWarningSymptoms = [
  'Decreased airflow from the registers',
  'Strange noises coming from the air conditioner',
  'Moldy odors coming from the ductwork when the air conditioner is running',
  'The air conditioner cycles on and off more frequently than it used to',
  'The breaker for the air conditioner in the electrical panel keeps tripping',
  'Ice appears on your air conditioner or piping, either inside or outside the house',
  'Your outdoor fan in the air conditioner won\'t come on',
];

const winterHeatingTips = [
  {
    icon: Home,
    title: 'Seal Your Home',
    description: 'Do not let your heat escape! Make sure all your doors and windows are shut tightly. Check for leaks, and replace old weather stripping or caulk.',
  },
  {
    icon: ThermometerSun,
    title: 'Use Window Shades',
    description: 'Use your window shades and drapes to maximize heating benefits. Keep shades closed at night to conserve heat. During the day, open shades to let the sunlight in.',
  },
  {
    icon: Wind,
    title: 'Add Humidity',
    description: 'Humid air feels warmer than dry air. Increasing the humidity of your home also helps you resist winter colds and moisturizes dry skin. Ask us about Humidifiers!',
  },
  {
    icon: AlertTriangle,
    title: 'Clean Your Filter',
    description: 'Keep your furnace air filter clean. A dirty or clogged filter can make your furnace work harder, which costs you more.',
  },
];

export default function TipsPage() {
  return (
    <div className="flex flex-col w-full">
      <Header />

      {/* Hero Section - Navy gradient style */}
      <section className="relative min-h-[500px] lg:min-h-[600px] flex items-center pt-[72px]">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&auto=format&fit=crop&q=80"
            alt="HVAC tips and resources"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-main/95 via-navy-main/85 to-navy-main/70" />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 relative z-10 py-20">
          <div className="max-w-[600px]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6"
            >
              <span className="w-2 h-2 bg-primary-main rounded-full animate-pulse" />
              <span className="text-white/90 text-[14px] font-medium">A/C Tips</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[48px] md:text-[64px] lg:text-[72px] font-bold text-white mt-4 leading-[1.05] tracking-[-3px]"
            >
              Helpful HVAC{' '}
              <span className="text-primary-main">Tips.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 text-[17px] text-white/80 leading-[1.7] max-w-[480px]"
            >
              Keep your HVAC system running smoothly with these expert tips from Coppell Heating and Air Conditioning. A well-maintained system saves money, improves comfort, and lasts longer.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 mt-8"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-dark text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-all hover:gap-3"
              >
                SCHEDULE SERVICE
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="tel:972-462-1882"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white px-6 py-3.5 rounded-full text-[15px] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4" />
                (972) 462-1882
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AC Warning Signs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-secondary-main rounded-2xl flex items-center justify-center mb-6">
                <AlertTriangle className="w-8 h-8 text-white" />
              </div>
              <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
                — Warning Signs
              </span>
              <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
                When to Call for A/C Service
              </h2>
              <p className="mt-6 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                When you have a big air conditioning problem - like an air conditioner that quits during the hottest day of summer - it goes without saying that you&apos;ll call for service. Smaller air conditioning problems are easier to ignore, but this is the last thing you should do.
              </p>
              <p className="mt-4 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                By calling for service as soon as you notice the symptoms of an ailing cooling system, you can prevent the expense and inconvenience of a big repair job.
              </p>
            </motion.div>

            {/* Warning Signs List */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-[#F6F7F9] rounded-[24px] p-8">
                <h3 className="text-[20px] font-bold text-navy-main mb-6">
                  Call Us When You Notice:
                </h3>
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  {acWarningSymptoms.map((symptom, index) => (
                    <motion.li
                      key={index}
                      variants={fadeInUp}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary-main mt-0.5 flex-shrink-0" />
                      <span className="text-[15px] text-[#3B3B3B]/80">{symptom}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Winter Heating Tips */}
      <section className="py-20 bg-navy-main">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-secondary-main rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <span className="text-primary-main font-semibold text-[14px] tracking-wide uppercase">
              — Winter Tips
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white mt-4 leading-[1.1] tracking-[-2px]">
              Winter Heating Tips
            </h2>
            <p className="mt-4 text-[16px] text-white/70 max-w-[600px] mx-auto">
              Stay warm and save money on your heating bills with these expert tips.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-6"
          >
            {winterHeatingTips.map((tip, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-8"
              >
                <div className="w-14 h-14 bg-primary-main rounded-2xl flex items-center justify-center mb-6">
                  <tip.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-[18px] font-bold text-white mb-3">{tip.title}</h3>
                <p className="text-[15px] text-white/70 leading-[1.7]">{tip.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-[20px] p-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 bg-secondary-main rounded-2xl flex items-center justify-center flex-shrink-0">
                <Home className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-[18px] font-bold text-white mb-2">Don&apos;t Forget the Attic!</h3>
                <p className="text-[15px] text-white/70 leading-[1.7]">
                  Much of the heat escaping homes is lost through the attic. Be sure to close off any attic vents or fans during the winter and check on how well the attic is insulated. Our technicians can help!
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Summer Cooling Tips */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F6F7F9]">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="w-16 h-16 bg-primary-main rounded-2xl flex items-center justify-center mb-6 mx-auto">
              <Snowflake className="w-8 h-8 text-white" />
            </div>
            <span className="text-secondary-main font-semibold text-[14px] tracking-wide uppercase">
              — Summer Tips
            </span>
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-navy-main mt-4 leading-[1.1] tracking-[-2px]">
              Summer Cooling Tips
            </h2>
            <p className="mt-4 text-[16px] text-[#3B3B3B]/70 max-w-[600px] mx-auto">
              Keep your home cool and comfortable during the Texas summer heat.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              'Change your air filter monthly during heavy use',
              'Keep your outdoor unit clear of debris',
              'Use ceiling fans to circulate cool air',
              'Close blinds during the hottest part of the day',
              'Set your thermostat to 78°F when home',
              'Schedule annual maintenance before summer',
              'Seal air leaks around doors and windows',
              'Use exhaust fans in kitchens and bathrooms',
              'Consider upgrading to a programmable thermostat',
            ].map((tip, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex items-start gap-3 bg-white rounded-[16px] p-5 shadow-sm border border-gray-100"
              >
                <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                <span className="text-[15px] text-navy-main font-medium">{tip}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Energy Saving Tips */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-[24px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1631545806609-35d4ae440431?w=800&auto=format&fit=crop&q=80"
                  alt="Energy efficient HVAC system"
                  width={560}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="w-16 h-16 bg-primary-main/10 rounded-2xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-primary-main" />
              </div>
              <h2 className="text-[36px] md:text-[44px] font-bold text-navy-main leading-[1.1] tracking-[-2px]">
                Energy Saving Tips
              </h2>
              <p className="mt-4 text-[16px] text-[#3B3B3B]/70 leading-[1.8]">
                Small changes can add up to big savings on your energy bills. Here are some simple ways to reduce your HVAC costs.
              </p>

              <motion.ul
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-8 space-y-4"
              >
                {[
                  'Use a programmable thermostat to save up to 10% annually',
                  'Set temperature back 7-10°F when away from home',
                  'Keep vents unobstructed by furniture or curtains',
                  'Have your ductwork inspected for leaks',
                  'Consider upgrading to energy-efficient equipment',
                  'Schedule regular maintenance to keep efficiency high',
                ].map((tip, index) => (
                  <motion.li
                    key={index}
                    variants={fadeInUp}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-primary-main mt-0.5 flex-shrink-0" />
                    <span className="text-[15px] text-[#3B3B3B]/80">{tip}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-secondary-main via-secondary-dark to-navy-main">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[36px] md:text-[44px] lg:text-[52px] font-bold text-white leading-[1.1] tracking-[-2px]">
              Need Professional Help?
            </h2>
            <p className="mt-6 text-[17px] text-white/70 max-w-[600px] mx-auto leading-[1.7]">
              Some HVAC issues require professional attention. If you&apos;re experiencing problems or need maintenance, our certified technicians are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10 justify-center">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary-main hover:bg-primary-light text-white px-7 py-4 rounded-full text-[15px] font-semibold transition-colors"
                >
                  Schedule Service
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href="tel:972-462-1882"
                  className="inline-flex items-center gap-2 bg-white text-navy-main px-7 py-4 rounded-full text-[15px] font-semibold transition-colors hover:bg-gray-100"
                >
                  <Phone className="w-4 h-4" />
                  (972) 462-1882
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
