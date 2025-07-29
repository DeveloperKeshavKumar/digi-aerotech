import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
        The service you're looking for doesn't exist or has been removed.
      </p>
      <Link 
        href="/services" 
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Back to Services
      </Link>
    </div>
  );
}
