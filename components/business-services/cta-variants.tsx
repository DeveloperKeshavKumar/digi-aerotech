// components/variants/cta-variants.tsx
import React from 'react';
import { TemplateVariantsService } from '@/services/template-variants.service';
import { ContentGenerationService } from '@/services/content-generation.service';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';

interface CTAVariantsProps {
  business: string;
  service: string;
}

export const CTAVariants: React.FC<CTAVariantsProps> = ({ business, service }) => {
  const businessData = getBusinessTypeBySlug(business);
  const variants = TemplateVariantsService.generateVariantAssignment(service, business);
  const selectedVariant = variants.cta;
  const variantConfig = TemplateVariantsService.getVariantConfig('cta', selectedVariant);

  if (!businessData || !variantConfig) {
    return null;
  }

  const ctaContent = ContentGenerationService.generateCTAContent(service.replace(/-/g, ' '), businessData);

  const renderCTA1 = () => (
    <section className="bg-black dark:bg-white text-white dark:text-black py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          {ctaContent.title}
        </h2>
        <p className="text-lg md:text-xl opacity-80 mb-8 max-w-2xl mx-auto">
          {ctaContent.description}
        </p>
        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-12 py-6 rounded-lg font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
          Get Started Now
        </button>
      </div>
    </section>
  );

  const renderCTA2 = () => (
    <section className="py-20 lg:py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white rounded-3xl p-8 md:p-12 lg:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {ctaContent.title}
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            {ctaContent.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Schedule Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCTA3 = () => (
    <section className="bg-gray-50 dark:bg-gray-950 py-20 lg:py-24">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">
            {ctaContent.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {ctaContent.description}
          </p>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
            Get Started Today
          </button>
        </div>
        <div className="relative">
          <div className="w-full h-80 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🚀</span>
              </div>
              <div className="text-lg font-semibold text-black dark:text-white mb-2">Ready to Launch?</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Join thousands of satisfied customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderCTA4 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white dark:bg-gray-900 border-2 border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 text-center hover:shadow-xl transition-all duration-300">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full mx-auto mb-6 flex items-center justify-center">
            <span className="text-white text-3xl">💎</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black dark:text-white">
            {ctaContent.title}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {ctaContent.description}
          </p>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-10 py-4 rounded-full font-semibold text-lg hover:shadow-lg transition-all transform hover:scale-105">
            Start Your Transformation
          </button>
          <div className="flex justify-center items-center gap-6 mt-8 text-sm text-gray-500 dark:text-gray-500">
            <span>✓ No setup fees</span>
            <span>✓ 30-day guarantee</span>
            <span>✓ Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );

  const variantRenderers = {
    cta1: renderCTA1,
    cta2: renderCTA2,
    cta3: renderCTA3,
    cta4: renderCTA4
  };

  const SelectedVariant = variantRenderers[selectedVariant as keyof typeof variantRenderers];
  return SelectedVariant ? <SelectedVariant /> : renderCTA1();
};