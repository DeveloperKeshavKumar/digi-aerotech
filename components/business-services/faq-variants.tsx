import React from 'react';

export interface FAQVariantsProps {
  business: string;
  service: string;
}

export const FAQVariants: React.FC<FAQVariantsProps> = ({ business, service }) => {
  // TODO: Replace with real variant logic
  return (
    <div>
      <h2>{`FAQs for ${service} - ${business}`}</h2>
    </div>
  );
};
