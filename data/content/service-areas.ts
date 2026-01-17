export interface ServiceArea {
  slug: string;
  name: string;
  county: string;
  description: string;
  population: string;
  highlights: string[];
  nearbyAreas: string[];
}

export const serviceAreas: ServiceArea[] = [
  {
    slug: 'coppell',
    name: 'Coppell',
    county: 'Dallas County',
    description: 'As our hometown since 1983, Coppell is where Coppell Heating and Air Conditioning was founded. We\'re proud to serve our neighbors with expert HVAC services, from emergency AC repairs to complete system installations. Our technicians know the unique needs of Coppell homes and businesses.',
    population: '41,000+',
    highlights: [
      'Same-day service for Coppell residents',
      'Trusted by thousands of Coppell families for 40+ years',
      'Deep knowledge of local building codes and requirements',
      'Active member of the Coppell business community',
    ],
    nearbyAreas: ['Irving', 'Lewisville', 'Carrollton', 'Flower Mound'],
  },
  {
    slug: 'irving',
    name: 'Irving',
    county: 'Dallas County',
    description: 'Irving residents and businesses trust Coppell Heating and Air Conditioning for reliable HVAC services. Just minutes from our Coppell location, we provide fast response times for AC repairs, heating services, and system maintenance throughout Irving.',
    population: '256,000+',
    highlights: [
      'Fast response times to Irving locations',
      'Commercial and residential HVAC services',
      'Experience with Irving\'s diverse building types',
      'Emergency services available 24/7',
    ],
    nearbyAreas: ['Coppell', 'Dallas', 'Carrollton', 'Grapevine'],
  },
  {
    slug: 'lewisville',
    name: 'Lewisville',
    county: 'Denton County',
    description: 'Lewisville homeowners count on Coppell Heating and Air Conditioning for dependable HVAC solutions. Whether you need a routine tune-up or emergency AC repair, our licensed technicians are ready to help keep your home comfortable year-round.',
    population: '111,000+',
    highlights: [
      'Serving Lewisville families for decades',
      'Expert knowledge of Texas climate challenges',
      'Flexible scheduling to fit your needs',
      'Upfront pricing with no hidden fees',
    ],
    nearbyAreas: ['Flower Mound', 'Coppell', 'Carrollton', 'Highland Village'],
  },
  {
    slug: 'flower-mound',
    name: 'Flower Mound',
    county: 'Denton County',
    description: 'Flower Mound residents deserve top-quality HVAC services, and that\'s exactly what Coppell Heating and Air Conditioning delivers. Our team provides comprehensive heating and cooling solutions for homes throughout this beautiful community.',
    population: '79,000+',
    highlights: [
      'Experience with larger Flower Mound homes',
      'Energy-efficient system recommendations',
      'Preventive maintenance programs',
      'Licensed, bonded, and insured technicians',
    ],
    nearbyAreas: ['Lewisville', 'Coppell', 'Grapevine', 'Highland Village'],
  },
  {
    slug: 'carrollton',
    name: 'Carrollton',
    county: 'Dallas/Denton County',
    description: 'Carrollton businesses and homeowners have relied on Coppell Heating and Air Conditioning for expert HVAC services. Our proximity means quick response times and personalized service for all your heating and cooling needs.',
    population: '133,000+',
    highlights: [
      'Convenient location near Carrollton',
      'Both residential and commercial expertise',
      'Maintenance contracts available',
      'Financing options for new systems',
    ],
    nearbyAreas: ['Coppell', 'Irving', 'Lewisville', 'Addison'],
  },
  {
    slug: 'grapevine',
    name: 'Grapevine',
    county: 'Tarrant County',
    description: 'From historic downtown to new developments, Grapevine homeowners trust Coppell Heating and Air Conditioning for reliable HVAC services. We understand the unique needs of this growing community and provide solutions that fit.',
    population: '54,000+',
    highlights: [
      'Serving Grapevine\'s diverse neighborhoods',
      'Experience with historic and modern homes',
      'Quick response to service calls',
      'Satisfaction guaranteed on all work',
    ],
    nearbyAreas: ['Coppell', 'Irving', 'Colleyville', 'Southlake'],
  },
  {
    slug: 'dallas',
    name: 'Dallas',
    county: 'Dallas County',
    description: 'While our roots are in Coppell, Coppell Heating and Air Conditioning proudly serves Dallas residents with the same quality and care. We provide comprehensive HVAC services to homes and businesses throughout the Dallas area.',
    population: '1,300,000+',
    highlights: [
      'Serving North Dallas and surrounding areas',
      'Commercial and residential services',
      'Same-day emergency service available',
      '40+ years of DFW experience',
    ],
    nearbyAreas: ['Irving', 'Carrollton', 'Addison', 'Richardson'],
  },
];

export function getServiceAreaBySlug(slug: string): ServiceArea | undefined {
  return serviceAreas.find((area) => area.slug === slug);
}
