import React from 'react';

export interface WhyChooseVariantsProps {
  business: string;
  service: string;
}

export const WhyChooseVariants: React.FC<WhyChooseVariantsProps> = ({ business, service }) => {
  // TODO: Replace with real variant logic
  return (
    <div>
      <h2>{`Why Choose ${service} for ${business}`}</h2>
    </div>
  );
};
