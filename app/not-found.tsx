import Link from 'next/link';
import { ContactForm } from '@/components/contact-form';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center lg:min-h-screen px-4 py-12">
      <div className=" w-full space-y-8 flex justify-evenly items-center ">
        {/* 404 Message with Discovery Feel */}
        <div className="text-center space-y-4 relative">
          <div className="absolute -inset-4 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 opacity-10 blur-md"></div>
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white relative">
            404
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 relative">
            Oops! You&apos;ve found a hidden path.
          </p>
          <p className="text-gray-500 dark:text-gray-400 relative">
            While this isn&apos;t what you were looking for, maybe we can guide you somewhere better.
          </p>
          <Link
            href="/services"
            className="inline-flex gap-4 items-center  mt-6 px-6 py-3 rounded-lg bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-medium hover:opacity-90 transition-opacity shadow-lg hover:shadow-xl relative"
          >
            <ArrowLeft />
            <span>Go to Services</span>
          </Link>
        </div>
        <div >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}