export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'What is "Freon" and Do I Need to Change Mine Out?',
    answer: 'Freon is a common name for refrigerants used in A/C systems to remove heat and keep your space cool. Older systems, especially those installed before the 2010s, often use R22. You generally do not need to replace the refrigerant in your system unless there\'s a leak. However, R22 is now very limited and expensive due to EPA regulations. Modern systems use R454b, which is more environmentally friendly and efficient.',
  },
  {
    id: '2',
    question: 'What Is The Most Efficient Heating and Air Conditioning System?',
    answer: 'According to leading research, American Standard Platinum series equipment has the fewest breakdowns over the past 15 years. Moreover, these systems are generally quite safe, quiet and environmentally friendly. We can help you choose the best system for your specific needs and budget.',
  },
  {
    id: '3',
    question: 'Is It Cheaper to Heat With Gas Or Electric?',
    answer: 'While it may seem tempting to invest in an electric heating system, gas heating systems are far more affordable in the long run. This is because electricity is more expensive per unit than natural gas. Over a lifetime, homeowners will spend thousands of dollars more on electricity than on gas.',
  },
  {
    id: '4',
    question: 'What Size System Do I Need For My House?',
    answer: 'That depends on many factors including your home\'s square footage, insulation, window placement, and more. The old rule of 400-500 square feet per ton is outdated due to improved building codes. The best approach is to have a Heat Load calculation done on your home to know exactly what your home needs.',
  },
  {
    id: '5',
    question: 'How Often Should I Replace My Air Filter?',
    answer: 'We recommend checking your air filter monthly and replacing it every 1-3 months, depending on factors like pets, allergies, and how often you run your system. A dirty filter restricts airflow and makes your system work harder, increasing energy costs and wear.',
  },
  {
    id: '6',
    question: 'Do You Offer Emergency Services?',
    answer: 'Yes! We offer 24/7 emergency HVAC services. We understand that heating and cooling problems don\'t always happen during business hours. Call us anytime at (972) 462-1882 and we\'ll dispatch a technician to help you.',
  },
  {
    id: '7',
    question: 'What Areas Do You Service?',
    answer: 'We primarily serve Coppell, TX and the surrounding Dallas-Fort Worth metroplex areas. This includes nearby cities like Lewisville, Flower Mound, Carrollton, Irving, and Grapevine. Contact us to confirm service in your area.',
  },
  {
    id: '8',
    question: 'Do You Offer Financing Options?',
    answer: 'Yes, we offer special interest financing with approved credit through Wells Fargo. This makes it easier to afford a new HVAC system or major repairs. Ask us about our current financing offers and payment plans.',
  },
];
