export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  discount?: string;
  image: string;
  href: string;
  features?: string[];
}

export const services: Service[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair services for your home or business. Our certified technicians diagnose and fix all AC problems quickly to restore your comfort.',
    shortDescription: 'Fast AC repairs by certified technicians.',
    discount: '20%',
    image: '/static/images/services/ac-repair.jpg',
    href: '/services/ac-repair',
    features: [
      'Same-day service available',
      '24/7 emergency repairs',
      'All major brands serviced',
      'Transparent pricing',
    ],
  },
  {
    id: 'heating',
    title: 'Heating Services',
    description: 'Complete heating system repair, maintenance, and installation. Keep your home warm and comfortable all winter long with our expert heating services.',
    shortDescription: 'Expert heating repair and installation.',
    discount: '15%',
    image: '/static/images/services/heating.jpg',
    href: '/services/heating',
    features: [
      'Furnace repair & installation',
      'Heat pump services',
      'Thermostat upgrades',
      'Energy efficiency solutions',
    ],
  },
  {
    id: 'maintenance',
    title: 'HVAC Maintenance',
    description: 'Regular maintenance extends the life of your HVAC system and prevents costly breakdowns. Our tune-up services keep your system running at peak efficiency.',
    shortDescription: 'Preventive maintenance for peak performance.',
    discount: '10%',
    image: '/static/images/services/maintenance.jpg',
    href: '/services/maintenance',
    features: [
      'Comprehensive system inspection',
      'Filter replacement',
      'Coil cleaning',
      'Performance optimization',
    ],
  },
  {
    id: 'duct-cleaning',
    title: 'Duct Cleaning',
    description: 'Improve your indoor air quality with professional duct cleaning services. Remove dust, allergens, and debris from your ductwork for cleaner, healthier air.',
    shortDescription: 'Professional duct cleaning for cleaner air.',
    discount: '25%',
    image: '/static/images/services/duct-cleaning.jpg',
    href: '/services/duct-cleaning',
    features: [
      'Complete duct system cleaning',
      'Allergen removal',
      'Mold and mildew treatment',
      'Air quality improvement',
    ],
  },
  {
    id: 'installation',
    title: 'System Installation',
    description: 'New HVAC system installation for residential and commercial properties. We help you choose the right system and provide expert installation.',
    shortDescription: 'New AC and heating system installation.',
    image: '/static/images/services/installation.jpg',
    href: '/services/installation',
    features: [
      'Free in-home estimates',
      'Energy-efficient options',
      'Professional installation',
      'Warranty coverage',
    ],
  },
  {
    id: 'attic-insulation',
    title: 'Attic Insulation',
    description: 'Proper attic insulation reduces energy costs and improves comfort. Our insulation services help maintain consistent temperatures throughout your home.',
    shortDescription: 'Energy-saving attic insulation services.',
    image: '/static/images/services/insulation.jpg',
    href: '/services/attic-insulation',
    features: [
      'Energy efficiency assessment',
      'Professional installation',
      'Multiple insulation types',
      'Cost savings analysis',
    ],
  },
];

export const servicesList = [
  'Air Conditioning',
  'Heating',
  'HVAC Maintenance',
  'Duct Cleaning',
  'Attic Insulation',
  'AC and Heating Inspections',
  'Filter Changes',
  'Duct Replacement',
  'System Replacement',
  'Attic Stair Replacement',
  'Attic Solar Fan Install',
];
