// components/variants/process-variants.tsx
import React from 'react';
import { TemplateVariantsService } from '@/services/template-variants.service';
import { ContentGenerationService } from '@/services/content-generation.service';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';

interface ProcessVariantsProps {
  business: string;
  service: string;
}

export const ProcessVariants: React.FC<ProcessVariantsProps> = ({ business, service }) => {
  const businessData = getBusinessTypeBySlug(business);
  const variants = TemplateVariantsService.generateVariantAssignment(service, business);
  const selectedVariant = variants.process;
  const variantConfig = TemplateVariantsService.getVariantConfig('process', selectedVariant);

  if (!businessData || !variantConfig) {
    return null;
  }

  const content = ContentGenerationService.generateProcessContent(service.replace(/-/g, ' '), businessData);

  const renderProcess1 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          {content.subtitle}
        </p>
        
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 dark:bg-gray-800"></div>
          
          <div className="space-y-12 md:space-y-0">
            {[1, 2, 3, 4].map((step, index) => (
              <div key={step} className={`relative md:flex ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:order-last'}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto md:mx-0">
                    {step}
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-black dark:text-white">Step {step}</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const renderProcess2 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          {content.subtitle}
        </p>
        
        <div className="grid md:grid-cols-4 gap-8">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                {step}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-center text-black dark:text-white">Phase {step}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {content.description}
              </p>
              {step < 4 && (
                <div className="hidden md:block absolute top-16 right-0 transform translate-x-1/2 w-16 h-1 bg-gray-200 dark:bg-gray-800"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProcess3 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-2">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          {content.subtitle}
        </p>
        
        <div className="relative w-64 h-64 mx-auto mb-12">
          <div className="absolute inset-0 rounded-full border-4 border-gray-200 dark:border-gray-800"></div>
          {[1, 2, 3, 4].map((step) => {
            const angle = (step - 1) * 90;
            const x = 50 + 40 * Math.cos((angle - 90) * Math.PI / 180);
            const y = 50 + 40 * Math.sin((angle - 90) * Math.PI / 180);
            
            return (
              <div 
                key={step}
                className="absolute w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                {step}
              </div>
            );
          })}
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Step {step}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderProcess4 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
          {content.title}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 text-center">
          {content.subtitle}
        </p>
        
        <div className="space-y-4 max-w-4xl mx-auto">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden">
              <button className="flex justify-between items-center w-full text-left p-6 bg-white dark:bg-gray-900">
                <h3 className="text-xl font-semibold text-black dark:text-white">
                  <span className="w-8 h-8 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full inline-flex items-center justify-center text-white mr-4">
                    {step}
                  </span>
                  Process Step {step}
                </h3>
                <svg className="w-6 h-6 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="p-6 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
                <p className="text-gray-600 dark:text-gray-400">
                  {content.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const variantRenderers = {
    process1: renderProcess1,
    process2: renderProcess2,
    process3: renderProcess3,
    process4: renderProcess4
  };

  const SelectedVariant = variantRenderers[selectedVariant as keyof typeof variantRenderers];
  return SelectedVariant ? <SelectedVariant /> : renderProcess1();
};