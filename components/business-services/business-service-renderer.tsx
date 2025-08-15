// src/components/business-services/BusinessServiceRenderer.tsx
"use client";

import React from 'react';
import { ServiceData } from '@/services/service.types';
import { SectionVariants } from '@/map-service-business/map-service-business.types';
import { pickVariant } from './variant-resolver';
import { CTA } from '@/components/services/cta-section';

interface BusinessServiceRendererProps {
  service: ServiceData;
  variants?: SectionVariants;
}

export default function BusinessServiceRenderer({ 
  service, 
  variants = {} 
}: BusinessServiceRendererProps) {
  const { showSections = {}, customSections = [] } = service;

  // Get variant components
  const HeroComponent = pickVariant.hero(variants.hero);
  const WhyChooseUsComponent = pickVariant.whyChooseUs(variants.whyChooseUs);
  const ProcessComponent = pickVariant.process(variants.process);
  const TestimonialsComponent = pickVariant.testimonials(variants.testimonials);

  // Custom sections renderer
  const renderCustomSections = (position: string) => {
    return customSections
      .filter(section => section.position === position)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((section, idx) => {
        const Component = section.component;
        return <Component key={idx} {...(section.props || {})} />;
      });
  };

  return (
    <div>
      {renderCustomSections('beforeHero')}

      {/* Hero Section with Variant */}
      {showSections.hero !== false && (
        <HeroComponent {...service.hero} />
      )}

      {renderCustomSections('afterHero')}
      {renderCustomSections('beforeWhyChooseUs')}

      {/* Why Choose Us Section with Variant */}
      {showSections.whyChooseUs !== false && (
        <WhyChooseUsComponent {...service.whyChooseUs} />
      )}

      {renderCustomSections('afterWhyChooseUs')}
      {renderCustomSections('beforeProcess')}

      {/* Process Section with Variant */}
      {showSections.process !== false && (
        <ProcessComponent {...service.process} />
      )}

      {renderCustomSections('afterProcess')}
      {renderCustomSections('beforeTestimonials')}

      {/* Testimonials Section with Variant */}
      {showSections.testimonials !== false && (
        <TestimonialsComponent {...service.testimonials} />
      )}

      {renderCustomSections('afterTestimonials')}
      {renderCustomSections('beforeCTA')}

      {/* CTA Section */}
      {showSections.cta !== false && (
        <CTA {...service.cta} />
      )}

      {renderCustomSections('afterCTA')}
      {renderCustomSections('afterAll')}
    </div>
  );
}
