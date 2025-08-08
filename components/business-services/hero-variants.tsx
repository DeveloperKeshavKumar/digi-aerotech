import React from 'react';

export interface HeroVariantsProps {
  business: string;
  service: string;
}

export const HeroVariants: React.FC<HeroVariantsProps> = ({ business, service }) => {
  // TODO: Replace with real variant logic
  return (
    <div>
      <h1>{`Hero for ${service} - ${business}`}</h1>
    </div>
  );
};
