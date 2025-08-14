import { realEstate } from './data/real-estate';
import { hotelResorts } from './data/hotel-resorts';
import { gymsFitness } from './data/gyms-fitness';
import { restaurantsCafes } from './data/restaurants-cafes';
import { fashionBrands } from './data/fashion-brands';
import { b2bServices } from './data/b2b-services';
import { consultants } from './data/consultants';
import { localBusinesses } from './data/local-businesses';
import { pharmaCompanies } from './data/pharma-companies';
import { interiorDesigners } from './data/interior-designers';
import { travelTourism } from './data/travel-tourism';
import { doctorsClinics } from './data/doctors-clinics';
import { startupsEntrepreneurs } from './data/startups-entrepreneurs';
import { b2cServices } from './data/b2c-services';
import { educationalInstitutions } from './data/educational-institutions';
import { ecommerceBrands } from './data/e-commerce-brands';
import { BusinessData } from '@/types/business.types';

// Business Registry with typed data
export const businessRegistry: Record<string, BusinessData> = {
  'real-estate': realEstate,
  'hotel-resorts': hotelResorts,
  'gyms-fitness': gymsFitness,
  'restaurants-cafes': restaurantsCafes,
  'fashion-brands': fashionBrands,
  'b2b-services': b2bServices,
  'consultants': consultants,
  'local-businesses': localBusinesses,
  'pharma-companies': pharmaCompanies,
  'interior-designers': interiorDesigners,
  'travel-tourism': travelTourism,
  'doctors-clinics': doctorsClinics,
  'startups-entrepreneurs': startupsEntrepreneurs,
  'b2c-services': b2cServices,
  'educational-institutions': educationalInstitutions,
  'e-commerce-brands': ecommerceBrands,
};

// Get business data by slug with type safety
export const getBusinessBySlug = (slug: string): BusinessData | undefined => {
  return businessRegistry[slug as keyof typeof businessRegistry];
};

// Get all available business slugs
export const getAllBusinessSlugs = (): string[] => {
  return Object.keys(businessRegistry);
};

// Get all business data entries
export const getAllBusinessData = (): BusinessData[] => {
  return Object.values(businessRegistry);
};

// Get business data with metadata
export const getBusinessWithMetadata = (slug: string) => {
  const business = getBusinessBySlug(slug);
  if (!business) return null;

  return {
    ...business,
    metadata: {
      slug,
      isActive: true,
      lastUpdated: new Date().toISOString(),
      category: slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    }
  };
};

// Search businesses by name or category
export const searchBusinesses = (query: string): BusinessData[] => {
  const lowercaseQuery = query.toLowerCase();
  return Object.entries(businessRegistry)
    .filter(([slug, business]) => 
      business.name.toLowerCase().includes(lowercaseQuery) ||
      slug.toLowerCase().includes(lowercaseQuery)
    )
    .map(([_, business]) => business);
};

// Get businesses by category/type
export const getBusinessesByCategory = (category: string): BusinessData[] => {
  const categorySlug = category.toLowerCase().replace(/\s+/g, '-');
  return Object.entries(businessRegistry)
    .filter(([slug]) => slug.includes(categorySlug))
    .map(([_, business]) => business);
};

// Validate business data structure
export const validateBusinessData = (business: BusinessData): boolean => {
  return !!(
    business.id &&
    business.name &&
    business.slug &&
    business.hero?.subheadline &&
    business.services?.description &&
    business.stats &&
    business.testimonials &&
    business.cta?.description
  );
};

// Get featured businesses (you can customize this logic)
export const getFeaturedBusinesses = (limit: number = 6): BusinessData[] => {
  return getAllBusinessData()
    .filter(validateBusinessData)
    .slice(0, limit);
};

// Business categories for navigation/filtering
export const businessCategories = [
  { slug: 'real-estate', name: 'Real Estate', icon: '🏠' },
  { slug: 'hotel-resorts', name: 'Hotel & Resorts', icon: '🏨' },
  { slug: 'gyms-fitness', name: 'Gyms & Fitness', icon: '💪' },
  { slug: 'restaurants-cafes', name: 'Restaurants & Cafes', icon: '🍽️' },
  { slug: 'fashion-brands', name: 'Fashion Brands', icon: '👗' },
  { slug: 'b2b-services', name: 'B2B Services', icon: '🤝' },
  { slug: 'consultants', name: 'Consultants', icon: '💼' },
  { slug: 'local-businesses', name: 'Local Businesses', icon: '🏪' },
  { slug: 'pharma-companies', name: 'Pharma Companies', icon: '💊' },
  { slug: 'interior-designers', name: 'Interior Designers', icon: '🎨' },
  { slug: 'travel-tourism', name: 'Travel & Tourism', icon: '✈️' },
  { slug: 'doctors-clinics', name: 'Doctors & Clinics', icon: '👩‍⚕️' },
  { slug: 'startups-entrepreneurs', name: 'Startups & Entrepreneurs', icon: '🚀' },
  { slug: 'b2c-services', name: 'B2C Services', icon: '🛒' },
  { slug: 'educational-institutions', name: 'Educational Institutions', icon: '🎓' },
  { slug: 'e-commerce-brands', name: 'E-commerce Brands', icon: '🛍️' },
];

export default businessRegistry;
