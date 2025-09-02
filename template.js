// update-existing-files.js
const fs = require('fs');
const path = require('path');

const businesses = [
    'b2b-services', 'b2c-services', 'consultants', 'doctors-clinics',
    'e-commerce-brands', 'educational-institutions', 'fashion-brands',
    'gyms-fitness', 'hotel-resorts', 'interior-designers',
    'local-businesses', 'pharma-companies', 'real-estate',
    'restaurants-cafes', 'startups-entrepreneurs', 'travel-tourism'
];

const services = [
    'aso-services', '360-digital-marketing', 'ecommerce-marketing',
    'gmb-services', 'google-ads', 'leads-generation', 'local-seo',
    'marketing-automation', 'meta-ads', 'mobile-apps-development',
    'other-ads', 'seo-services', 'social-media-marketing',
    'web-design-development', 'website-maintenance'
];

// Base directory where your business folders exist
const baseDir = './map-service-business/data';

// Variant rotation function
function getVariant(businessIndex, serviceIndex) {
    const variants = ['variant1', 'variant2', 'variant3'];
    return {
        hero: variants[(businessIndex + serviceIndex) % 3],
        whyChooseUs: variants[(businessIndex + serviceIndex + 1) % 3],
        process: variants[(businessIndex + serviceIndex + 2) % 3],
    };
}

// Function to generate the template content
function generateTemplate(business, service, businessIndex, serviceIndex) {
    const variants = getVariant(businessIndex, serviceIndex);
    const businessName = business.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
    const serviceName = service.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());

    return `import React from 'react';
import { ServiceBusinessMap } from '@/map-service-business/map-service-business.types';
import { ServiceIcons } from '@/constants/service-icons';

const { IconFreeRights, IconPhone, IconStarsFilled, IconRocket } = ServiceIcons;

export const map: ServiceBusinessMap = {
  service: '${service}',
  business: '${business}',
  variants: {
    hero: '${variants.hero}',
    whyChooseUs: '${variants.whyChooseUs}',
    process: '${variants.process}',
  },
  data: {
    slug: '${service}',
    showSections: {
      hero: true,
      whyChooseUs: true,
      typesOfServices: true,
      process: true,
      techStack: true,
      testimonials: true,
      cta: true
    },
    customSections: [],
    hero: {
      initial: "Need ",
      headlineKeywords: [
        "${serviceName} for ${businessName}?",
        "Better Results?",
        "More Growth?",
        "Success?",
        "ROI?"
      ],
      brandLine: [
        { text: "${serviceName} for ${businessName}", gradient: false }
      ],
      subheadline: "Specialized ${serviceName.toLowerCase()} strategies designed specifically for ${businessName.toLowerCase()}. Drive growth and achieve measurable results with our targeted approach.",
      ctaButtons: [
        { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Consultation", link: "/contact" },
        { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
      ],
      stats: [
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "300%+ Growth",
          description: "Average improvement"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "500+ Clients",
          description: "${businessName} served"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "4.9/5 Rating",
          description: "Client satisfaction"
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 34 }),
          title: "24/7 Support",
          description: "Always available"
        }
      ]
    },
    whyChooseUs: {
      title: [
        { text: 'Why Choose Our ', gradient: false },
        { text: '${serviceName}', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        { text: ' for ${businessName}?', gradient: false }
      ],
      trustPoints: [
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Industry Expertise',
          description: 'Deep understanding of ${businessName.toLowerCase()} market dynamics and customer behavior patterns.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Proven Results',
          description: 'Track record of delivering measurable results for ${businessName.toLowerCase()} businesses.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Customized Approach',
          description: 'Tailored ${serviceName.toLowerCase()} strategies designed specifically for your business needs.'
        },
        {
          icon: React.createElement(IconStarsFilled, { size: 24 }),
          title: 'Ongoing Support',
          description: 'Continuous optimization and support to ensure long-term success and growth.'
        }
      ],
      cta: {
        text: 'Get Started Today',
        link: '#contact',
        icon: React.createElement(IconRocket, { size: 24 })
      }
    },
    typesOfServices: {
      title: 'Our ${serviceName} for ${businessName}',
      subtitle: '${businessName.toUpperCase()} SPECIALIZED SERVICES',
      description: 'Comprehensive ${serviceName.toLowerCase()} solutions designed specifically for ${businessName.toLowerCase()} businesses.',
      services: [
        {
          id: 1,
          title: 'Strategy & Planning',
          description: 'Custom ${serviceName.toLowerCase()} strategy development tailored for ${businessName.toLowerCase()} market requirements.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 2,
          title: 'Implementation & Execution',
          description: 'Expert implementation of ${serviceName.toLowerCase()} campaigns optimized for ${businessName.toLowerCase()} audience.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        },
        {
          id: 3,
          title: 'Monitoring & Optimization',
          description: 'Continuous monitoring and optimization to maximize ROI and performance for ${businessName.toLowerCase()} businesses.',
          icon: React.createElement(IconStarsFilled, { size: 24 })
        }
      ]
    },
    process: {
      title: 'Our ${serviceName} Process for ${businessName}',
      subtitle: 'PROVEN METHODOLOGY',
      className: 'border-t border-border dark:border-gray-700',
      description: 'A systematic approach to ${serviceName.toLowerCase()} that delivers measurable results for ${businessName.toLowerCase()} businesses.',
      steps: [
        {
          id: 1,
          title: 'Discovery & Analysis',
          description: 'Comprehensive analysis of your ${businessName.toLowerCase()} business and market landscape.'
        },
        {
          id: 2,
          title: 'Strategy Development',
          description: 'Custom ${serviceName.toLowerCase()} strategy tailored for your specific ${businessName.toLowerCase()} goals.'
        },
        {
          id: 3,
          title: 'Implementation',
          description: 'Expert execution of ${serviceName.toLowerCase()} campaigns with ${businessName.toLowerCase()} focus.'
        },
        {
          id: 4,
          title: 'Optimization',
          description: 'Continuous refinement and optimization based on ${businessName.toLowerCase()} market feedback.'
        }
      ]
    },
    techStack: {
      title: 'Our ${serviceName} Technology Stack',
      subtitle: 'ADVANCED TOOLS & PLATFORMS',
      description: 'Industry-leading tools and platforms for ${serviceName.toLowerCase()} success.',
      categories: ['Analytics', 'Automation', 'Optimization', 'Reporting'],
      technologies: [
        { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
        { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' }
      ]
    },
    cta: {
      title: 'Ready to Transform Your ${businessName} Business?',
      subtitle: 'START YOUR ${serviceName.toUpperCase()} JOURNEY',
      description: 'Contact us today for a comprehensive consultation and see how our ${serviceName.toLowerCase()} can drive growth for your ${businessName.toLowerCase()} business.'
    }
  }
};
`;
}

// Main function to update all files
function updateAllFiles() {
    let updatedCount = 0;
    let skippedCount = 0;
    const skippedFiles = [];

    businesses.forEach((business, businessIndex) => {
        const businessDir = path.join(baseDir, business);

        // Check if business directory exists
        if (!fs.existsSync(businessDir)) {
            console.log(`Skipping missing directory: ${businessDir}`);
            skippedCount += services.length;
            return;
        }

        services.forEach((service, serviceIndex) => {
            const filePath = path.join(businessDir, `${service}.ts`);

            // Check if file exists
            if (!fs.existsSync(filePath)) {
                skippedFiles.push(filePath);
                console.log(`Skipping missing file: ${filePath}`);
                skippedCount++;
                return;
            }

            // Generate and write the template
            const template = generateTemplate(business, service, businessIndex, serviceIndex);
            fs.writeFileSync(filePath, template);
            console.log(`Updated: ${filePath}`);
            updatedCount++;
        });
    });

    // Save skipped files list
    if (skippedFiles.length > 0) {
        fs.writeFileSync('skipped-files.log', skippedFiles.join('\n'));
        console.log(`\nList of skipped files saved to skipped-files.log`);
    }

    console.log(`\nUpdate complete!`);
    console.log(`Updated files: ${updatedCount}`);
    console.log(`Skipped files (not found): ${skippedCount}`);
    console.log(`Total expected files: ${businesses.length * services.length}`);
}

// Run the update
updateAllFiles();