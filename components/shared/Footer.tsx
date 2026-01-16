import { LandingFooter, LandingFooterColumn, LandingFooterLink } from '@/components/landing';
import { footerLinks } from '@/data/config/footerLinks';
import { MapPinIcon, PhoneIcon, MailIcon, ShieldCheckIcon } from 'lucide-react';

export const Footer = ({ className }: { className?: string }) => {
  return (
    <LandingFooter
      className={`${className} bg-gray-900 dark:bg-gray-950 rounded-t-3xl`}
      title="Certified HVAC Experts"
      description="At Coppell Heating and Air Conditioning, we take pride in having a team of highly trained HVAC professionals serving the Coppell, TX area since 1983."
      withBackground={false}
      withBackgroundGlow={false}
      variant="primary"
      backgroundGlowVariant="primary"
      withBackgroundGradient={false}
      logoComponent={
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-primary-main rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-2xl">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-xl text-white leading-tight">
              Coppell AC
            </span>
            <span className="text-xs text-gray-400">
              Heating & Air Conditioning
            </span>
          </div>
        </div>
      }
      footnote={
        <div className="flex flex-col md:flex-row items-center gap-4 text-gray-400">
          <div className="flex items-center gap-2">
            <ShieldCheckIcon className="w-4 h-4" />
            <span>License # TACLA00066993E</span>
          </div>
          <span className="hidden md:inline">|</span>
          <span>&copy; {new Date().getFullYear()} Coppell Heating and Air Conditioning, Inc. All rights reserved.</span>
        </div>
      }
    >
      {footerLinks.map((column) => (
        <LandingFooterColumn key={column.columnName} title={column.columnName}>
          {column.links.map((link) => (
            <LandingFooterLink key={link.href} href={link.href}>
              {link.title}
            </LandingFooterLink>
          ))}
        </LandingFooterColumn>
      ))}
      <LandingFooterColumn title="Location">
        <div className="flex items-start gap-2 text-gray-400 text-sm">
          <MapPinIcon className="w-4 h-4 mt-0.5 flex-shrink-0" />
          <span>436 Southwestern Blvd.<br />Coppell, Texas 75019</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <PhoneIcon className="w-4 h-4 flex-shrink-0" />
          <a href="tel:972-462-1882" className="hover:text-primary-main transition-colors">(972) 462-1882</a>
        </div>
        <div className="flex items-center gap-2 text-gray-400 text-sm">
          <MailIcon className="w-4 h-4 flex-shrink-0" />
          <a href="mailto:service@coppellac.com" className="hover:text-primary-main transition-colors">service@coppellac.com</a>
        </div>
      </LandingFooterColumn>
    </LandingFooter>
  );
};

export default Footer;
