// components/variants/why-choose-variants.tsx
import React from 'react';
import { TemplateVariantsService } from '@/services/template-variants.service';
import { ContentGenerationService } from '@/services/content-generation.service';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';

interface WhyChooseVariantsProps {
  business: string;
  service: string;
}

export const WhyChooseVariants: React.FC<WhyChooseVariantsProps> = ({ business, service }) => {
  const businessData = getBusinessTypeBySlug(business);
  const variants = TemplateVariantsService.generateVariantAssignment(service, business);
  const selectedVariant = variants.whyChoose;
  const variantConfig = TemplateVariantsService.getVariantConfig('whyChoose', selectedVariant);

  if (!businessData || !variantConfig) {
    return null;
  }

  const content = ContentGenerationService.generateWhyChooseUsContent(service.replace(/-/g, ' '), businessData);

  const renderWhyChoose1 = () => (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {content.title.map((part, index) => (
            part.gradient ? (
              <span key={index} className={part.gradientClass}>{part.text}</span>
            ) : (
              <span key={index} className="text-black dark:text-white">{part.text}</span>
            )
          ))}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto text-center">
          {content.description}
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="bg-white dark:bg-gray-900 p-8 rounded-xl border border-gray-200 dark:border-gray-800">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Benefit {item}</h3>
              <p className="text-gray-600 dark:text-gray-400">
                {content.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWhyChoose2 = () => (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {content.title.map((part, index) => (
                part.gradient ? (
                  <span key={index} className={part.gradientClass}>{part.text}</span>
                ) : (
                  <span key={index} className="text-black dark:text-white">{part.text}</span>
                )
              ))}
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">
              {content.description}
            </p>
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
              Learn More
            </button>
          </div>
          <div className="space-y-6">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-800 flex items-start">
                <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white mr-4 flex-shrink-0">
                  {item}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Key Advantage {item}</h3>
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

  const renderWhyChoose3 = () => (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {content.title.map((part, index) => (
            part.gradient ? (
              <span key={index} className={part.gradientClass}>{part.text}</span>
            ) : (
              <span key={index} className="text-black dark:text-white">{part.text}</span>
            )
          ))}
        </h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto">
          {content.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div key={item} className="bg-white dark:bg-gray-900 p-8 rounded-full w-64 h-64 flex flex-col items-center justify-center border border-gray-200 dark:border-gray-800">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black dark:text-white">Benefit {item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderWhyChoose4 = () => (
    <section className="bg-gray-100 dark:bg-gray-950 py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {content.title.map((part, index) => (
            part.gradient ? (
              <span key={index} className={part.gradientClass}>{part.text}</span>
            ) : (
              <span key={index} className="text-black dark:text-white">{part.text}</span>
            )
          ))}
        </h2>
        
        <div className="relative">
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-orange-500 via-pink-500 to-red-500"></div>
          
          <div className="space-y-12">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={item} className={`relative lg:grid lg:grid-cols-2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <div className={`lg:px-12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto lg:mx-0">
                    {item}
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-black dark:text-white">Why Choose Us #{item}</h3>
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

  const variantRenderers = {
    whyChoose1: renderWhyChoose1,
    whyChoose2: renderWhyChoose2,
    whyChoose3: renderWhyChoose3,
    whyChoose4: renderWhyChoose4
  };

  const SelectedVariant = variantRenderers[selectedVariant as keyof typeof variantRenderers];
  return SelectedVariant ? <SelectedVariant /> : renderWhyChoose1();
};