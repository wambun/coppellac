'use client';

import { LandingMarquee } from '@/components/landing';
import Link from 'next/link';
import { PhoneIcon, SparklesIcon, ThermometerIcon } from 'lucide-react';

const announcements = [
  {
    text: '24/7 Emergency HVAC Repairs',
    href: 'tel:972-462-1882',
    cta: 'Call Now!',
    icon: PhoneIcon,
  },
  {
    text: 'AC Tune-Up Special',
    href: '/special-offers',
    cta: 'Starting at $89!',
    icon: SparklesIcon,
  },
  {
    text: 'Free Estimates on New Systems',
    href: '/contact',
    cta: 'Get Quote',
    icon: ThermometerIcon,
  },
];

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gray-900 text-white py-2">
      <LandingMarquee
        className="py-0"
        innerClassName="gap-8"
        animationDurationInSeconds={30}
      >
        {announcements.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-2 px-6 text-sm hover:text-primary-light transition-colors whitespace-nowrap"
          >
            <item.icon className="w-4 h-4 text-primary-main" />
            <span>{item.text}</span>
            <span className="text-primary-main font-semibold">{item.cta}</span>
          </Link>
        ))}
      </LandingMarquee>
    </div>
  );
};

export default AnnouncementBar;
