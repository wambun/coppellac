'use client';

import Script from 'next/script';

// LocalBusiness Schema for the company
export function LocalBusinessSchema() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'HVACBusiness',
    '@id': 'https://coppellac.com/#organization',
    name: 'Coppell Heating and Air Conditioning, Inc.',
    alternateName: 'Coppell AC',
    description: 'Trusted HVAC experts serving Coppell, TX homes & businesses since 1983. Air conditioning repair, heating services, duct cleaning, and more.',
    url: 'https://coppellac.com',
    telephone: '+1-972-462-1882',
    email: 'service@coppellac.com',
    foundingDate: '1983',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '436 Southwestern Blvd.',
      addressLocality: 'Coppell',
      addressRegion: 'TX',
      postalCode: '75019',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 32.9490947,
      longitude: -97.0041597,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday', 'Sunday'],
        description: '24/7 Emergency Service Available',
      },
    ],
    areaServed: [
      { '@type': 'City', name: 'Coppell', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Irving', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Lewisville', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Flower Mound', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Carrollton', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Grapevine', containedInPlace: { '@type': 'State', name: 'Texas' } },
      { '@type': 'City', name: 'Dallas', containedInPlace: { '@type': 'State', name: 'Texas' } },
    ],
    sameAs: [],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'HVAC Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AC Repair',
            description: 'Fast, reliable air conditioning repair services for your home or business.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Heating Services',
            description: 'Complete heating system repair, maintenance, and installation.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'HVAC Maintenance',
            description: 'Regular maintenance to extend the life of your HVAC system.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Duct Cleaning',
            description: 'Professional duct cleaning services for improved air quality.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'System Installation',
            description: 'New HVAC system installation for residential and commercial properties.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Attic Insulation',
            description: 'Attic insulation services to reduce energy costs and improve comfort.',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '168',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Reviews Schema
export function ReviewsSchema() {
  const reviews = [
    {
      author: 'Kristi Smith',
      reviewBody: 'We have used Coppell Heating and Air Conditioning for many years for our residential use. We started using them when we lived in Coppell and kept them when we moved back to Dallas, because they were so reliable, honest, and reasonably priced.',
      reviewRating: 5,
    },
    {
      author: 'Farhana Ali',
      reviewBody: 'We had an issue with hot air blowing out of our upstairs AC. Danny came out and found the issue. Due to being an older system, he was honest about charging quite a bit for repair vs changing out the entire system.',
      reviewRating: 5,
    },
    {
      author: 'Robert Van',
      reviewBody: 'I would highly recommend this company to anyone looking for HVAC services. Cross was the technician who came out, and he was extremely thorough and professional.',
      reviewRating: 5,
    },
    {
      author: 'James Meier',
      reviewBody: 'Called in the morning and service tech, Danny, showed up at lunch. Danny was determined to find the issue and did. Great service!',
      reviewRating: 5,
    },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://coppellac.com/#reviews',
    name: 'Coppell Heating and Air Conditioning, Inc.',
    review: reviews.map((review) => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewBody: review.reviewBody,
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.reviewRating,
        bestRating: 5,
        worstRating: 1,
      },
      publisher: {
        '@type': 'Organization',
        name: 'Google',
      },
    })),
  };

  return (
    <Script
      id="reviews-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Service Schema for individual service pages
interface ServiceSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
}

export function ServiceSchema({ serviceName, serviceDescription, serviceUrl }: ServiceSchemaProps) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: serviceName,
    description: serviceDescription,
    url: serviceUrl,
    provider: {
      '@type': 'HVACBusiness',
      name: 'Coppell Heating and Air Conditioning, Inc.',
      telephone: '+1-972-462-1882',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '436 Southwestern Blvd.',
        addressLocality: 'Coppell',
        addressRegion: 'TX',
        postalCode: '75019',
        addressCountry: 'US',
      },
    },
    areaServed: {
      '@type': 'City',
      name: 'Coppell',
      containedInPlace: {
        '@type': 'State',
        name: 'Texas',
      },
    },
  };

  return (
    <Script
      id={`service-schema-${serviceName.toLowerCase().replace(/\s+/g, '-')}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// Breadcrumb Schema
interface BreadcrumbItem {
  name: string;
  url: string;
}

export function BreadcrumbSchema({ items }: { items: BreadcrumbItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <Script
      id="breadcrumb-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

// FAQ Schema for FAQ page
interface FAQItem {
  question: string;
  answer: string;
}

export function FAQSchema({ faqs }: { faqs: FAQItem[] }) {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <Script
      id="faq-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
