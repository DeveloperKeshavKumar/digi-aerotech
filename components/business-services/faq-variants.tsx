// components/faq-variants.tsx
import React, { useState } from 'react';
import { BusinessData } from '@/services/business-mapping.service';
import { ContentGenerationService } from '@/services/content-generation.service';
import { TemplateVariantsService } from '@/services/template-variants.service';

interface FAQVariantsProps {
  business: string;
  service: string;
  businessData: BusinessData;
}

export const FAQVariants: React.FC<FAQVariantsProps> = ({ business, service, businessData }) => {
  const content = ContentGenerationService.generateBusinessFAQs(service, businessData);
  const variantConfig = TemplateVariantsService.getVariantConfig('faq', 'faq1'); // Default to faq1
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  
  return (
    <section className={`${variantConfig?.styles.background} ${variantConfig?.styles.container}`}>
      <div className={`${variantConfig?.styles.layout} ${variantConfig?.styles.animation}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Frequently Asked Questions
        </h2>
        
        <div className="space-y-4">
          {content.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 dark:border-gray-700 pb-4">
              <button
                className="flex justify-between items-center w-full text-left py-4"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <span className="ml-4">
                  {activeIndex === index ? (
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  )}
                </span>
              </button>
              {activeIndex === index && (
                <div className="pb-4 text-gray-600 dark:text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};