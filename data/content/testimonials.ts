export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  content: string;
  rating: number;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Homeowner',
    location: 'Coppell, TX',
    content: 'Coppell AC has been servicing our home for years. They are always on time, professional, and their prices are fair. When our AC went out during a Texas summer, they had it fixed the same day!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Business Owner',
    location: 'Coppell, TX',
    content: 'As a restaurant owner, having reliable HVAC is critical. The team at Coppell Heating and Air has kept our system running smoothly for over 5 years. Highly recommend their commercial services.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Jennifer Martinez',
    role: 'Homeowner',
    location: 'Coppell, TX',
    content: 'From the initial consultation to the installation of our new system, the experience was excellent. The technicians explained everything clearly and cleaned up after themselves. Great service!',
    rating: 5,
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Property Manager',
    location: 'Coppell, TX',
    content: 'I manage several properties in Coppell and rely on this company for all HVAC needs. Their response time is unmatched and their work is always top quality. Trustworthy and dependable.',
    rating: 5,
  },
  {
    id: '5',
    name: 'Lisa Anderson',
    role: 'Homeowner',
    location: 'Coppell, TX',
    content: 'The duct cleaning service was thorough and made a noticeable difference in our air quality. My allergies have improved significantly. Thank you, Coppell AC!',
    rating: 5,
  },
  {
    id: '6',
    name: 'Robert Williams',
    role: 'Homeowner',
    location: 'Coppell, TX',
    content: 'When our furnace stopped working on the coldest night of the year, they came out immediately. The technician was knowledgeable and had us warm again in no time. True emergency service!',
    rating: 5,
  },
];
