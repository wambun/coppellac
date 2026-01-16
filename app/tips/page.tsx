import Link from 'next/link';
import { Metadata } from 'next';
import { Header } from '@/components/shared/Header';
import { Footer } from '@/components/shared/Footer';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { LandingPrimaryTextCtaSection } from '@/components/landing';
import {
  PhoneIcon,
  ArrowRightIcon,
  LightbulbIcon,
  ThermometerIcon,
  FilterIcon,
  LeafIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'AC Tips & Resources',
  description: 'Helpful air conditioning and heating tips from Coppell HVAC experts. Learn how to maintain your system, save energy, and improve comfort.',
};

const tips = [
  {
    icon: <FilterIcon className="w-8 h-8" />,
    title: 'Change Your Air Filter Regularly',
    description: 'One of the simplest yet most important maintenance tasks. A dirty filter restricts airflow and makes your system work harder, increasing energy costs and wear.',
    tips: [
      'Check your filter monthly',
      'Replace every 1-3 months depending on usage',
      'Consider HEPA filters for better air quality',
      'Set a reminder on your phone or calendar',
    ],
  },
  {
    icon: <ThermometerIcon className="w-8 h-8" />,
    title: 'Program Your Thermostat',
    description: 'A programmable thermostat can save you up to 10% on heating and cooling costs annually by automatically adjusting temperatures when you\'re away or asleep.',
    tips: [
      'Set temperature back 7-10°F when away',
      'Consider a smart thermostat for more savings',
      'Don\'t set the temperature too low in summer',
      'Aim for 78°F in summer, 68°F in winter',
    ],
  },
  {
    icon: <LeafIcon className="w-8 h-8" />,
    title: 'Keep Your Outdoor Unit Clear',
    description: 'Your outdoor AC unit needs proper airflow to work efficiently. Debris, plants, and obstructions can reduce efficiency and lead to breakdowns.',
    tips: [
      'Maintain 2 feet of clearance around the unit',
      'Remove leaves, grass, and debris regularly',
      'Trim back shrubs and plants',
      'Never stack items against the unit',
    ],
  },
  {
    icon: <ShieldCheckIcon className="w-8 h-8" />,
    title: 'Schedule Annual Maintenance',
    description: 'Professional maintenance catches small problems before they become expensive repairs. It also keeps your system running at peak efficiency.',
    tips: [
      'Schedule AC tune-up in spring',
      'Schedule heating tune-up in fall',
      'Ask about maintenance agreements',
      'Keep records of all service visits',
    ],
  },
  {
    icon: <ClockIcon className="w-8 h-8" />,
    title: 'Don\'t Ignore Warning Signs',
    description: 'Strange noises, unusual smells, or inconsistent temperatures are signs that something may be wrong. Addressing issues early prevents costly repairs.',
    tips: [
      'Listen for unusual sounds',
      'Notice if rooms aren\'t cooling/heating evenly',
      'Check for unusual odors from vents',
      'Monitor your energy bills for spikes',
    ],
  },
  {
    icon: <LightbulbIcon className="w-8 h-8" />,
    title: 'Seal Air Leaks',
    description: 'Air leaks around windows, doors, and ductwork can significantly increase your energy costs and make your system work harder.',
    tips: [
      'Check weatherstripping on doors and windows',
      'Seal gaps with caulk or weatherstripping',
      'Have ductwork inspected for leaks',
      'Add insulation to your attic',
    ],
  },
];

export default function TipsPage() {
  return (
    <div className="flex flex-col w-full">
      <AnnouncementBar />
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="container-wide px-6">
          <div className="max-w-3xl">
            <span className="text-primary-main font-semibold text-sm tracking-wide uppercase">
              — AC Tips & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mt-4">
              Helpful Air Conditioning Tips
            </h1>
            <p className="mt-6 text-lg text-gray-300">
              Keep your HVAC system running smoothly with these expert tips from Coppell Heating and Air Conditioning. A well-maintained system saves money, improves comfort, and lasts longer.
            </p>
          </div>
        </div>
      </section>

      {/* Tips Grid */}
      <section className="py-20 w-full">
        <div className="container-wide px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tips.map((tip, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all border border-gray-100 dark:border-gray-700"
              >
                <div className="w-14 h-14 bg-primary-main/10 rounded-xl flex items-center justify-center text-primary-main mb-6">
                  {tip.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{tip.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {tip.description}
                </p>
                <ul className="space-y-2">
                  {tip.tips.map((item, tidx) => (
                    <li key={tidx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                      <CheckCircleIcon className="w-4 h-4 text-primary-main flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Energy Saving Tips */}
      <section className="bg-gray-50 dark:bg-gray-900 py-16">
        <div className="container-wide px-6">
          <div className="max-w-3xl mx-auto text-center">
            <LightbulbIcon className="w-12 h-12 text-primary-main mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Quick Energy Saving Tips
            </h2>
            <div className="grid sm:grid-cols-2 gap-4 mt-8 text-left">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm">Use ceiling fans to circulate air and feel cooler</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm">Close blinds during the hottest part of the day</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm">Don&apos;t block vents with furniture or curtains</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm">Use exhaust fans in kitchens and bathrooms</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm">Consider upgrading to energy-efficient equipment</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <p className="text-sm">Have your ductwork inspected for leaks</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="py-16">
        <div className="container-wide px-6">
          <div className="bg-primary-main rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Professional Help?
            </h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Some HVAC issues require professional attention. If you&apos;re experiencing problems or need maintenance, our certified technicians are here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-white text-primary-main hover:bg-gray-100 gap-2 rounded-full px-8">
                <Link href="/contact">
                  Schedule Service
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

      {/* CTA Section */}
      <LandingPrimaryTextCtaSection
        className="bg-gray-900 text-white"
        title="Questions About Your HVAC System?"
        description="Our experts are here to help. Contact us for personalized advice and professional service."
        textPosition="center"
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
          <Button asChild size="lg" className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full px-8">
            <Link href="/faq">
              View FAQ
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </LandingPrimaryTextCtaSection>

      <Footer />
    </div>
  );
}
