export interface NavLink {
  href: string;
  title: string;
  children?: NavLink[];
}

export const headerNavLinks: NavLink[] = [
  { href: '/', title: 'Home' },
  { href: '/about', title: 'About' },
  { href: '/services', title: 'Services' },
  {
    href: '#',
    title: 'Resources',
    children: [
      { href: '/financing', title: 'Financing' },
      { href: '/tips', title: 'HVAC Tips' },
      { href: '/faq', title: 'FAQ' },
      { href: '/special-offers', title: 'Special Offers' },
    ],
  },
  { href: '/contact', title: 'Contact' },
];
