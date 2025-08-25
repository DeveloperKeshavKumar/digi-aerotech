// src/map-service-business/map-service-business.types.ts
import { ServiceData } from '@/services/service.types';

export type VariantKey = 'variant1' | 'variant2' | 'variant3';

export interface SectionVariants {
  hero?: VariantKey;
  whyChooseUs?: VariantKey;
  process?: VariantKey;
  testimonials?: VariantKey;
}

export interface ServiceBusinessMap {
  service: string;
  business: string;
  variants: SectionVariants;
  data: ServiceData; // <-- The actual content data goes here
}
