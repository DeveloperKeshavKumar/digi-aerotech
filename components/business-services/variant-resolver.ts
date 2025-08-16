// src/components/business-services/variant-resolver.ts
import dynamic from 'next/dynamic';
import { VariantKey } from '@/map-service-business/map-service-business.types';

const Hero = {
  variant1: dynamic(() => import('./hero/variant3')),
  variant2: dynamic(() => import('./hero/variant3')),
  variant3: dynamic(() => import('./hero/variant3'))
};

const WhyChooseUs = {
  variant1: dynamic(() => import('./why-choose-us/variant1')),
  variant2: dynamic(() => import('./why-choose-us/variant1')), // fallback to variant1 for now
  variant3: dynamic(() => import('./why-choose-us/variant1'))  // fallback to variant1 for now
};

const Process = {
  variant1: dynamic(() => import('./process/variant2')),
  variant2: dynamic(() => import('./process/variant2')), // fallback to variant1 for now
  variant3: dynamic(() => import('./process/variant2'))  // fallback to variant1 for now
};

const Testimonials = {
  variant1: dynamic(() => import('./testimonials/variant1')),
  variant2: dynamic(() => import('./testimonials/variant1')), // fallback to variant1 for now
  variant3: dynamic(() => import('./testimonials/variant1'))  // fallback to variant1 for now
};

export const pickVariant = {
  hero: (variant: VariantKey = 'variant1') => Hero[variant],
  whyChooseUs: (variant: VariantKey = 'variant1') => WhyChooseUs[variant],
  process: (variant: VariantKey = 'variant1') => Process[variant],
  testimonials: (variant: VariantKey = 'variant1') => Testimonials[variant]
};
