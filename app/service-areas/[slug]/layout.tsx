import { Metadata } from 'next';
import { serviceAreas, getServiceAreaBySlug } from '@/data/content/service-areas';

type Props = {
  params: Promise<{ slug: string }>;
  children: React.ReactNode;
};

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return {
      title: 'Service Area Not Found',
    };
  }

  return {
    title: `HVAC Services in ${area.name}, TX | AC Repair & Heating`,
    description: `Professional HVAC services in ${area.name}, Texas. AC repair, heating services, duct cleaning & more. Serving ${area.name} since 1983. Call (972) 462-1882 for fast service.`,
    openGraph: {
      title: `HVAC Services in ${area.name}, TX | Coppell Heating & Air`,
      description: `Trusted HVAC experts serving ${area.name}, TX. Fast AC repair, heating services, and installations. 40+ years experience. Call now!`,
      type: 'website',
    },
    alternates: {
      canonical: `/service-areas/${area.slug}`,
    },
  };
}

export function generateStaticParams() {
  return serviceAreas.map((area) => ({
    slug: area.slug,
  }));
}

export default function ServiceAreaLayout({ children }: Props) {
  return children;
}
