'use client';

import { LandingMarquee } from '@/components/landing';
import Link from 'next/link';

const announcements = [
  {
    text: 'Breathe Easy — Duct Cleaning',
    href: '/contact',
    cta: '20% Off',
    highlight: 'This Month!',
  },
  {
    text: '24/7 Emergency HVAC Repairs —',
    href: 'tel:972-462-1882',
    cta: 'Call Now!',
  },
  {
    text: 'AC Tune-Up Special:',
    href: '/special-offers',
    cta: 'Starting at $89!',
  },
  {
    text: 'Winter Prep Special: Furnace Checkup for',
    href: '/contact',
    cta: 'Just $59!',
  },
];

export const AnnouncementBar = () => {
  return (
    <div className="w-full bg-gray-900 text-white overflow-hidden">
      <LandingMarquee
        className="py-3"
        innerClassName="gap-0"
        animationDurationInSeconds={40}
      >
        {announcements.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center gap-2 px-8 text-sm hover:opacity-80 transition-opacity whitespace-nowrap"
          >
            <span className="text-white">{item.text}</span>
            {item.highlight && (
              <span className="text-white">{item.highlight}</span>
            )}
            <span className="text-primary-main font-semibold ml-1">{item.cta}</span>
            <span className="mx-4 text-gray-600">•</span>
          </Link>
        ))}
      </LandingMarquee>
    </div>
  );
};

export default AnnouncementBar;
