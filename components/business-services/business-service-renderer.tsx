// src/components/business-services/BusinessServiceRenderer.tsx
"use client";

import React from 'react';
import { SectionVariants, ServiceData } from '@/map-service-business/map-service-business.types';
import { pickVariant } from './variant-resolver';
import { CTA } from '@/components/services/cta-section';
import { Companies } from '../homepage/companies';
import { Testimonials } from '../homepage/testimonials';

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

      <Companies />
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
        <Testimonials  />
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
