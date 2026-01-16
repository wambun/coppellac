import Link from 'next/link';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { AnnouncementBar } from '@/components/shared/AnnouncementBar';
import { Button } from '@/components/shared/ui/button';
import { HomeIcon, PhoneIcon, ArrowLeftIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AnnouncementBar />
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        <div className="text-center max-w-md">
          <h1 className="text-8xl font-bold text-primary-main mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have been moved or deleted. Please head back to the homepage or contact us if you need assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-primary-main hover:bg-primary-dark text-white gap-2 rounded-full">
              <Link href="/">
                <HomeIcon className="w-4 h-4" />
                Back to Homepage
              </Link>
            </Button>
            <Button asChild variant="outline" className="gap-2 rounded-full">
              <Link href="/contact">
                <PhoneIcon className="w-4 h-4" />
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
