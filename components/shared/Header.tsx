import Link from 'next/link';
import { LandingHeader, LandingHeaderMenuItem } from '@/components/landing';
import { Button } from '@/components/shared/ui/button';
import { headerNavLinks } from '@/data/config/headerNavLinks';
import { PhoneIcon } from 'lucide-react';

export const Header = ({ className }: { className?: string }) => {
  return (
    <LandingHeader
      className={className}
      fixed
      withBackground
      variant="primary"
      logoComponent={
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary-main rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">C</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-lg text-gray-900 dark:text-white leading-tight">
              Coppell AC
            </span>
            <span className="text-xs text-gray-500 dark:text-gray-400 hidden sm:block">
              Since 1983
            </span>
          </div>
        </div>
      }
    >
      {headerNavLinks.map((link) => (
        <LandingHeaderMenuItem key={link.href} href={link.href}>
          {link.title}
        </LandingHeaderMenuItem>
      ))}
      <Button asChild className="bg-primary-main hover:bg-primary-dark text-white gap-2">
        <Link href="tel:972-462-1882">
          <PhoneIcon className="w-4 h-4" />
          <span className="hidden sm:inline">(972) 462-1882</span>
          <span className="sm:hidden">Call</span>
        </Link>
      </Button>
    </LandingHeader>
  );
};

export default Header;
