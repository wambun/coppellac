import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Tips | Maintenance & Energy Saving Advice',
  description: 'Expert HVAC tips for homeowners in Coppell, TX. Learn how to maintain your AC and heating system, save energy, and improve indoor air quality.',
  openGraph: {
    title: 'HVAC Tips | Coppell Heating & Air Conditioning',
    description: 'Helpful tips for maintaining your HVAC system, saving energy, and keeping your home comfortable year-round.',
    type: 'website',
  },
  alternates: {
    canonical: '/tips',
  },
};

export default function TipsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
