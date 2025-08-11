// components/variants/hero-variants.tsx
import React from 'react';
import { TemplateVariantsService } from '@/services/template-variants.service';
import { ContentGenerationService } from '@/services/content-generation.service';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';

interface HeroVariantsProps {
  business: string;
  service: string;
}

export const HeroVariants: React.FC<HeroVariantsProps> = ({ business, service }) => {
  const businessData = getBusinessTypeBySlug(business);
  const variants = TemplateVariantsService.generateVariantAssignment(service, business);
  const selectedVariant = variants.hero;
  const variantConfig = TemplateVariantsService.getVariantConfig('hero', selectedVariant);

  if (!businessData || !variantConfig) {
    return null;
  }

  const heroContent = ContentGenerationService.generateHeroContent(service.replace(/-/g, ' '), businessData);

  const renderHero1 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          {heroContent.brandLine.map((part, index) => 
            part.gradient ? (
              <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {part.text}
              </span>
            ) : (
              <span key={index} className="text-black dark:text-white">{part.text}</span>
            )
          )}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-3xl mx-auto">
          {heroContent.subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
            Get Started Today
          </button>
          <button className="border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
            Learn More
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '500+', text: 'Projects Completed' },
            { number: '98%', text: 'Client Satisfaction' },
            { number: '50+', text: 'Industry Awards' },
            { number: '24/7', text: 'Support Available' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderHero2 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-32">
      <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6">
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroContent.brandLine.map((part, index) => 
              part.gradient ? (
                <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={index} className="text-black dark:text-white">{part.text}</span>
              )
            )}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {heroContent.subtitle}
          </p>
          <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
            Start Your Journey
          </button>
          <div className="grid grid-cols-3 gap-4 mt-12">
            {[
              { number: '2.5x', text: 'Growth Rate' },
              { number: '95%', text: 'Success Rate' },
              { number: '1000+', text: 'Happy Clients' }
            ].map((stat, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="text-2xl font-bold text-black dark:text-white mb-1">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="w-full h-96 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-2xl opacity-20"></div>
          <div className="absolute inset-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-800 flex items-center justify-center">
            <div className="text-6xl opacity-20">📊</div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderHero3 = () => (
    <section className="bg-white dark:bg-black py-24 lg:py-40">
      <div className="text-center max-w-7xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
          {heroContent.brandLine.map((part, index) => 
            part.gradient ? (
              <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {part.text}
              </span>
            ) : (
              <span key={index} className="text-black dark:text-white">{part.text}</span>
            )
          )}
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {heroContent.subtitle}
        </p>
        <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-12 py-6 rounded-full font-semibold text-lg hover:shadow-xl transition-all transform hover:scale-105">
          Transform Your Business
        </button>
        <div className="flex justify-center items-center gap-8 mt-16 text-sm text-gray-500 dark:text-gray-500">
          <span>Trusted by 500+ companies</span>
          <span>•</span>
          <span>98% satisfaction rate</span>
          <span>•</span>
          <span>Award-winning service</span>
        </div>
      </div>
    </section>
  );

  const renderHero4 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-6">
        <div className="lg:col-span-7">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {heroContent.brandLine.map((part, index) => 
              part.gradient ? (
                <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={index} className="text-black dark:text-white">{part.text}</span>
              )
            )}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <button className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all">
              Get Started
            </button>
            <button className="border-2 border-gray-300 dark:border-gray-700 text-black dark:text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-900 transition-all">
              View Demo
            </button>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            {[
              { number: '150%', text: 'ROI Increase', icon: '📈' },
              { number: '24hrs', text: 'Quick Setup', icon: '⚡' },
              { number: '99.9%', text: 'Uptime', icon: '🚀' },
              { number: '50+', text: 'Integrations', icon: '🔗' }
            ].map((stat, index) => (
              <div key={index} className={`bg-white dark:bg-gray-900 p-6 rounded-xl border border-gray-200 dark:border-gray-800 ${index % 2 === 0 ? 'mt-8' : ''}`}>
                <div className="text-3xl mb-3">{stat.icon}</div>
                <div className="text-2xl font-bold text-black dark:text-white mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );

  const variantRenderers = {
    hero1: renderHero1,
    hero2: renderHero2,
    hero3: renderHero3,
    hero4: renderHero4
  };

  const SelectedVariant = variantRenderers[selectedVariant as keyof typeof variantRenderers];
  return SelectedVariant ? <SelectedVariant /> : renderHero1();
};