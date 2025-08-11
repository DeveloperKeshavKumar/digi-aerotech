import React from 'react';
import { HeroVariants } from './hero-variants';
import { CTAVariants } from './cta-variants';
import { ProcessVariants } from './process-variants';
import { TestimonialVariants } from './testimonial-variants';
import { FAQVariants } from './faq-variants';
import { WhyChooseVariants } from './why-choose-variants';

export interface BusinessServiceRendererProps {
  business: string;
  service: string;
}

export const BusinessServiceRenderer: React.FC<BusinessServiceRendererProps> = ({ business, service }) => {
  return (
    <>
      <HeroVariants business={business} service={service} />
      {/* <CTAVariants business={business} service={service} />
      <ProcessVariants business={business} service={service} />
      <WhyChooseVariants business={business} service={service} />
      <TestimonialVariants business={business} service={service} /> */}
      {/* <FAQVariants business={business} service={service} /> */}
    </>
  );
};
