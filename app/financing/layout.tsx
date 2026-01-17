import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'HVAC Financing | Flexible Payment Options',
  description: 'Affordable HVAC financing options in Coppell, TX. Special interest financing with approved credit for AC and heating systems. Apply today!',
  openGraph: {
    title: 'HVAC Financing | Coppell Heating & Air Conditioning',
    description: 'Make your new HVAC system affordable with our flexible financing options. Apply for special interest financing today.',
    type: 'website',
  },
  alternates: {
    canonical: '/financing',
  },
};

export default function FinancingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
