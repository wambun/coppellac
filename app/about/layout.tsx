import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Family-Owned HVAC Company Since 1983',
  description: 'Learn about Coppell Heating and Air Conditioning, a family-owned HVAC company serving Coppell, TX since 1983. Licensed, bonded, insured. 4.8★ rating with 168+ reviews.',
  openGraph: {
    title: 'About Coppell Heating & Air Conditioning',
    description: 'Family-owned HVAC experts serving Coppell, TX for 40+ years. Meet our team and learn why thousands trust us with their comfort.',
    type: 'website',
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
