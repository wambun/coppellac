import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ | Common HVAC Questions Answered',
  description: 'Get answers to frequently asked questions about HVAC services, AC repair, heating maintenance, and more. Expert advice from Coppell Heating & Air Conditioning.',
  openGraph: {
    title: 'HVAC FAQ | Coppell Heating & Air Conditioning',
    description: 'Find answers to common questions about AC repair, heating services, and HVAC maintenance from our experienced team.',
    type: 'website',
  },
  alternates: {
    canonical: '/faq',
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
