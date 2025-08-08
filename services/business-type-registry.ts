import { BusinessData, businessRegistry } from './business-mapping.service';

/**
 * Returns business data for a given business slug.
 */
export const getBusinessTypeBySlug = (slug: string): BusinessData | undefined => {
  return businessRegistry[slug];
};

/**
 * Returns all registered business slugs.
 */
export const getAllBusinessTypeSlugs = (): string[] => {
  return Object.keys(businessRegistry);
};
