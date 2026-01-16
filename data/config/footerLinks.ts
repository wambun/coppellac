export const footerLinks: Array<{
  columnName: string;
  links: Array<{
    href: string;
    title: string;
  }>;
}> = [
  {
    columnName: 'Services',
    links: [
      { href: '/services', title: 'All Services' },
      { href: '/services/ac-repair', title: 'AC Repair' },
      { href: '/services/heating', title: 'Heating' },
      { href: '/services/maintenance', title: 'HVAC Maintenance' },
      { href: '/services/duct-cleaning', title: 'Duct Cleaning' },
    ],
  },
  {
    columnName: 'Company',
    links: [
      { href: '/about', title: 'About Us' },
      { href: '/faq', title: 'FAQ' },
      { href: '/tips', title: 'AC Tips' },
      { href: '/financing', title: 'Financing' },
    ],
  },
  {
    columnName: 'Contact',
    links: [
      { href: '/contact', title: 'Contact Us' },
      { href: '/contact#estimate', title: 'Request Estimate' },
      { href: 'tel:972-462-1882', title: '(972) 462-1882' },
      { href: 'mailto:service@coppellac.com', title: 'Email Us' },
    ],
  },
];
