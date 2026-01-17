export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  href: string;
  features?: string[];
  longDescription?: string;
  benefits?: string[];
}

export const services: Service[] = [
  {
    id: 'ac-repair',
    title: 'AC Repair',
    description: 'Fast, reliable air conditioning repair services for your home or business. Our certified technicians diagnose and fix all AC problems quickly to restore your comfort.',
    shortDescription: 'Fast AC repairs by certified technicians.',
    image: '/images/hvac-repair-23.jpg',
    href: '/services/ac-repair',
    features: [
      'Same-day service available',
      '24/7 emergency repairs',
      'All major brands serviced',
      'Transparent pricing',
    ],
    longDescription: 'When your air conditioner breaks down in the middle of a Texas summer, you need fast, reliable service you can trust. At Coppell Heating and Air Conditioning, our certified technicians have been keeping homes cool since 1983. We diagnose problems accurately and fix them right the first time, so you can get back to enjoying comfortable indoor temperatures.',
    benefits: [
      'Over 40 years of experience serving Coppell and surrounding areas',
      'Factory-trained technicians certified on all major brands',
      'Upfront pricing with no hidden fees or surprises',
      'Same-day emergency service when you need it most',
      'All repairs backed by our satisfaction guarantee',
    ],
  },
  {
    id: 'heating',
    title: 'Heating Services',
    description: 'Complete heating system repair, maintenance, and installation. Keep your home warm and comfortable all winter long with our expert heating services.',
    shortDescription: 'Expert heating repair and installation.',
    image: '/images/hvac-repair-25.jpg',
    href: '/services/heating',
    features: [
      'Furnace repair & installation',
      'Heat pump services',
      'Thermostat upgrades',
      'Energy efficiency solutions',
    ],
    longDescription: 'When temperatures drop, a reliable heating system is essential for your family\'s comfort and safety. Our team provides comprehensive heating services including repair, maintenance, and installation of furnaces, heat pumps, and other heating equipment. We work on all makes and models to keep your home warm throughout the winter months.',
    benefits: [
      'Expert diagnosis of heating problems',
      'Gas and electric furnace specialists',
      'Heat pump installation and repair',
      'Smart thermostat upgrades for better efficiency',
      'Energy-saving recommendations to lower utility bills',
    ],
  },
  {
    id: 'maintenance',
    title: 'HVAC Maintenance',
    description: 'Regular maintenance extends the life of your HVAC system and prevents costly breakdowns. Our tune-up services keep your system running at peak efficiency.',
    shortDescription: 'Preventive maintenance for peak performance.',
    image: '/images/ac-repair-5.jpg',
    href: '/services/maintenance',
    features: [
      'Comprehensive system inspection',
      'Filter replacement',
      'Coil cleaning',
      'Performance optimization',
    ],
    longDescription: 'The best way to avoid expensive HVAC repairs is through regular preventive maintenance. Our comprehensive tune-up services help extend the life of your equipment, improve energy efficiency, and catch small problems before they become major issues. We recommend scheduling maintenance at least once a year for optimal performance.',
    benefits: [
      'Extend the life of your HVAC equipment',
      'Improve energy efficiency and lower bills',
      'Prevent unexpected breakdowns',
      'Maintain manufacturer warranty requirements',
      'Ensure safe operation of your system',
    ],
  },
  {
    id: 'duct-cleaning',
    title: 'Duct Cleaning',
    description: 'Improve your indoor air quality with professional duct cleaning services. Remove dust, allergens, and debris from your ductwork for cleaner, healthier air.',
    shortDescription: 'Professional duct cleaning for cleaner air.',
    image: '/images/hvac-repair-1.png',
    href: '/services/duct-cleaning',
    features: [
      'Complete duct system cleaning',
      'Allergen removal',
      'Mold and mildew treatment',
      'Air quality improvement',
    ],
    longDescription: 'Over time, dust, allergens, pet dander, and other contaminants accumulate in your ductwork. This can affect your indoor air quality and aggravate allergies and respiratory issues. Our professional duct cleaning services remove these pollutants, helping your family breathe easier and your HVAC system run more efficiently.',
    benefits: [
      'Remove dust, pollen, and allergens from your air',
      'Reduce allergy and asthma symptoms',
      'Eliminate musty odors from your home',
      'Improve HVAC system efficiency',
      'Create a healthier living environment',
    ],
  },
  {
    id: 'installation',
    title: 'System Installation',
    description: 'New HVAC system installation for residential and commercial properties. We help you choose the right system and provide expert installation.',
    shortDescription: 'New AC and heating system installation.',
    image: '/images/hvac-repair-18.jpg',
    href: '/services/installation',
    features: [
      'Free in-home estimates',
      'Energy-efficient options',
      'Professional installation',
      'Warranty coverage',
    ],
    longDescription: 'When it\'s time to replace your old HVAC system, choosing the right equipment and installer is critical. Our team will assess your home\'s needs, recommend the best options for your budget, and provide expert installation. We carry top brands including American Standard and offer flexible financing options to make your investment affordable.',
    benefits: [
      'Free in-home consultations and estimates',
      'Right-sized systems for maximum efficiency',
      'Professional installation by certified technicians',
      'Comprehensive warranty coverage',
      'Financing options available with approved credit',
    ],
  },
  {
    id: 'attic-insulation',
    title: 'Attic Insulation',
    description: 'Proper attic insulation reduces energy costs and improves comfort. Our insulation services help maintain consistent temperatures throughout your home.',
    shortDescription: 'Energy-saving attic insulation services.',
    image: '/images/hero/hvac-repair-hero.jpg',
    href: '/services/attic-insulation',
    features: [
      'Energy efficiency assessment',
      'Professional installation',
      'Multiple insulation types',
      'Cost savings analysis',
    ],
    longDescription: 'Poor attic insulation is one of the biggest causes of energy waste in Texas homes. Hot air rises and escapes through your attic in winter, while summer heat radiates down into your living space. Our insulation services help maintain consistent temperatures year-round, reducing the workload on your HVAC system and lowering your energy bills.',
    benefits: [
      'Lower heating and cooling costs',
      'More consistent indoor temperatures',
      'Reduced strain on your HVAC system',
      'Improved home comfort year-round',
      'Potential utility rebates and incentives',
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
