import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Services | AC Repair, Heating, Duct Cleaning',
  description: 'Complete HVAC services in Coppell, TX: AC repair, heating services, duct cleaning, system installation, and maintenance. 24/7 emergency service. Call (972) 462-1882.',
  openGraph: {
    title: 'HVAC Services | Coppell Heating & Air Conditioning',
    description: 'Professional AC repair, heating, duct cleaning, and HVAC installation in Coppell, TX. Same-day service available.',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
