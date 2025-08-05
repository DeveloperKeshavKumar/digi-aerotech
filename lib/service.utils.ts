import React from 'react';
import { ServiceIcons } from '@/constants/service-icons';
import { IconProps as TablerIconProps } from '@tabler/icons-react';
import { LucideProps } from 'lucide-react';

type IconComponentType = 
  | React.FC<TablerIconProps> 
  | React.FC<LucideProps>;

export const createIconElement = (iconName: keyof typeof ServiceIcons, size: number = 24) => {
  const IconComponent = ServiceIcons[iconName] as IconComponentType;
  if (!IconComponent) return null;

  const props = {
    size,
    stroke: '1.5',
    className: 'text-current',
  };

  return React.createElement(IconComponent as React.ComponentType<any>, props);
};

/**
 * Helper function to create React elements from icon names
 * This is useful when you want to define icons as strings in JSON-like configs
 */
/**
 * Helper function to validate service data structure
 */
export const validateServiceData = (serviceData: any): boolean => {
    const requiredFields = ['slug', 'hero', 'whyChooseUs', 'typesOfServices', 'process', 'testimonials', 'cta'];

    for (const field of requiredFields) {
        if (!serviceData[field]) {
            console.error(`Missing required field: ${field}`);
            return false;
        }
    }

    return true;
};

/**
 * Helper function to sort custom sections by position and order
 */
export const sortCustomSections = (sections: any[], position: string) => {
    return sections
        .filter(section => section.position === position)
        .sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
};

/**
 * Helper function to generate FAQ schema markup
 */
export const generateFaqSchema = (faqs: any[]) => {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
};

/**
 * Helper function to extract service metadata for SEO
 */
export const extractServiceMetadata = (serviceData: any) => {
    const title = Array.isArray(serviceData.hero.brandLine)
        ? serviceData.hero.brandLine.map((item: any) => item.text).join(' ')
        : serviceData.hero.brandLine;

    return {
        title: title,
        description: serviceData.hero.subheadline,
        keywords: serviceData.hero.headlineKeywords.join(', '),
        slug: serviceData.slug
    };
};