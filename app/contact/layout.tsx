import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Get a Free HVAC Estimate',
  description: 'Contact Coppell Heating & Air Conditioning for a free estimate. Call (972) 462-1882 or visit us at 436 Southwestern Blvd, Coppell, TX 75019. 24/7 emergency service.',
  openGraph: {
    title: 'Contact Coppell Heating & Air Conditioning',
    description: 'Get a free HVAC estimate today. Call (972) 462-1882 for fast, reliable service in Coppell, TX and surrounding areas.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
