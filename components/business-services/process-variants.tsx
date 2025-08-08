import React from 'react';

export interface ProcessVariantsProps {
  business: string;
  service: string;
}

export const ProcessVariants: React.FC<ProcessVariantsProps> = ({ business, service }) => {
  // TODO: Replace with real variant logic
  return (
    <div>
      <p>{`Process for ${service} - ${business}`}</p>
    </div>
  );
};
