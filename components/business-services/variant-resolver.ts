// src/components/business-services/variant-resolver.ts
import dynamic from 'next/dynamic';
import { VariantKey } from '@/map-service-business/map-service-business.types';

const Hero = {
  variant1: dynamic(() => import('./hero/variant1')),
  variant2: dynamic(() => import('./hero/variant2')),
  variant3: dynamic(() => import('./hero/variant3'))
};

const WhyChooseUs = {
  variant1: dynamic(() => import('./why-choose-us/variant1')),
  variant2: dynamic(() => import('./why-choose-us/variant2')),
  variant3: dynamic(() => import('./why-choose-us/variant3'))
};

const Process = {
  variant1: dynamic(() => import('./process/variant1')),
  variant2: dynamic(() => import('./process/variant2')),
  variant3: dynamic(() => import('./process/variant3'))
};

const Testimonials = {
  variant1: dynamic(() => import('./testimonials/variant1')),
  variant2: dynamic(() => import('./testimonials/variant2')),
  variant3: dynamic(() => import('./testimonials/variant3'))
};

export const pickVariant = {
  hero: (variant: VariantKey = 'variant1') => Hero[variant],
  whyChooseUs: (variant: VariantKey = 'variant1') => WhyChooseUs[variant],
  process: (variant: VariantKey = 'variant1') => Process[variant],
  testimonials: (variant: VariantKey = 'variant1') => Testimonials[variant]
};
