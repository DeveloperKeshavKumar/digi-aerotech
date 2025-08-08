import React from 'react';

export interface CTAVariantsProps {
  business: string;
  service: string;
}

export const CTAVariants: React.FC<CTAVariantsProps> = ({ business, service }) => {
  // TODO: Replace with real variant logic
  return (
    <div>
      <button>{`CTA for ${service} - ${business}`}</button>
    </div>
  );
};
