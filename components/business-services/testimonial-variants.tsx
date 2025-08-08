import React from 'react';

export interface TestimonialVariantsProps {
  business: string;
  service: string;
}

export const TestimonialVariants: React.FC<TestimonialVariantsProps> = ({ business, service }) => {
  // TODO: Replace with real variant logic
  return (
    <div>
      <blockquote>{`Testimonial for ${service} - ${business}`}</blockquote>
    </div>
  );
};
