// src/components/business-services/BusinessServiceRenderer.tsx
"use client";

import React from 'react';
import { ServiceData } from '@/services/service.types';
import { SectionVariants } from '@/map-service-business/map-service-business.types';
import { pickVariant } from './variant-resolver';
import { CTA } from '@/components/services/cta-section';
import { Companies } from '../homepage/companies';

interface BusinessServiceRendererProps {
  service: ServiceData;
  variants?: SectionVariants;
}

// Default props for each section
const defaultHeroProps = {
  initial: 'Need ',
  headlineKeywords: ['Digital Marketing Services'],
  brandLine: 'Professional Digital Marketing Solutions',
  subheadline: 'Transform your online presence with our expert digital marketing services',
  ctaButtons: [],
  stats: []
};

const defaultWhyChooseUsProps = {
  title: 'Why Choose Us',
  trustPoints: [],
  cta: { text: 'Get Started', link: '/contact', icon: null }
};

const defaultProcessProps = {
  title: 'Our Process',
  steps: [],
  cta: { text: 'Learn More', link: '/process' }
};

const defaultTestimonialsProps = {
  title: 'Client Testimonials',
  testimonials: [],
  cta: { text: 'See More', link: '/testimonials' }
};

const defaultCTAProps = {
  title: 'Ready to Get Started?',
  description: 'Contact us today to discuss your project',
  buttons: [{ text: 'Get Free Consultation', link: '/contact' }]
};

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

  // Merge service props with defaults
  const heroProps = { ...defaultHeroProps, ...service.hero };
  const whyChooseUsProps = { ...defaultWhyChooseUsProps, ...service.whyChooseUs };
  const processProps = { ...defaultProcessProps, ...service.process };
  const testimonialsProps = { ...defaultTestimonialsProps, ...service.testimonials };
  const ctaProps = { ...defaultCTAProps, ...service.cta };

  // Custom sections renderer
  const renderCustomSections = (position: string) => {
    return customSections
      ?.filter(section => section.position === position)
      .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
      .map((section, idx) => {
        const Component = section.component;
        return <Component key={idx} {...(section.props || {})} />;
      }) || [];
  };

  return (
    <div>
      {renderCustomSections('beforeHero')}

      {/* Hero Section with Variant */}
      {showSections.hero !== false && (
        <HeroComponent {...heroProps} />
      )}
 
      <Companies />
      {renderCustomSections('afterHero')}
      {renderCustomSections('beforeWhyChooseUs')}

      {/* Why Choose Us Section with Variant */}
      {showSections.whyChooseUs !== false && (
        <WhyChooseUsComponent {...whyChooseUsProps} />
      )}

      {renderCustomSections('afterWhyChooseUs')}
      {renderCustomSections('beforeProcess')}

      {/* Process Section with Variant */}
      {showSections.process !== false && (
        <ProcessComponent {...processProps} />
      )}

      {renderCustomSections('afterProcess')}
      {renderCustomSections('beforeTestimonials')}

      {/* Testimonials Section with Variant */}
      {showSections.testimonials !== false && (
        <TestimonialsComponent {...testimonialsProps} />
      )}
      {renderCustomSections('afterTestimonials')}
      {renderCustomSections('beforeCTA')}

      {/* CTA Section */}
      {showSections.cta !== false && (
        <CTA {...ctaProps} />
      )}

      {renderCustomSections('afterCTA')}
      {renderCustomSections('afterAll')}
    </div>
  );
}