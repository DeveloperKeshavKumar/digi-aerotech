// services/content-generation.service.ts

import { BusinessData } from './business-mapping.service';
import { ServiceData } from '@/types/service.types';

export interface BusinessServiceContent {
  heroTitle: string;
  heroSubtitle: string;
  whyChooseUsTitle: string;
  processTitle: string;
  ctaTitle: string;
  businessSpecificBenefits: string[];
  businessSpecificChallenges: string[];
  businessContextualContent: {
    problemStatement: string;
    solutionStatement: string;
    resultStatement: string;
  };
}

export class ContentGenerationService {
  
  // Generate business-specific hero content
  static generateHeroContent(serviceName: string, businessData: BusinessData): {
    title: string;
    subtitle: string;
    brandLine: Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  } {
    const heroVariations = [
      {
        title: `Professional ${serviceName} for ${businessData.name}`,
        subtitle: `Transform your ${businessData.name.toLowerCase()} business with our specialized ${serviceName.toLowerCase()} solutions. Drive growth, increase visibility, and connect with your ${businessData.targetAudience}.`,
        brandLine: [
          { text: "Elevate Your " },
          { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
          { text: " Business Today" }
        ]
      },
      {
        title: `Expert ${serviceName} Solutions for ${businessData.name}`,
        subtitle: `Specialized ${serviceName.toLowerCase()} strategies tailored for ${businessData.name.toLowerCase()} businesses. Overcome industry challenges and achieve sustainable growth.`,
        brandLine: [
          { text: "Dominate " },
          { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
          { text: " Market" }
        ]
      },
      {
        title: `${serviceName} Tailored for ${businessData.name}`,
        subtitle: `Industry-focused ${serviceName.toLowerCase()} that understands ${businessData.name.toLowerCase()} challenges. Get results that matter to your business.`,
        brandLine: [
          { text: "Scale Your " },
          { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
          { text: " Success" }
        ]
      }
    ];

    const randomIndex = Math.floor(Math.random() * heroVariations.length);
    return heroVariations[randomIndex];
  }

  // Generate business-specific why choose us content
  static generateWhyChooseUsContent(serviceName: string, businessData: BusinessData): {
    title: Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
    description: string;
  } {
    const titleVariations = [
      [
        { text: "Why " },
        { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
        { text: " Businesses Choose Us" }
      ],
      [
        { text: "Leading " },
        { text: `${serviceName}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
        { text: ` for ${businessData.name}` }
      ],
      [
        { text: "Trusted by " },
        { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
        { text: " Leaders" }
      ]
    ];

    const descriptions = [
      `We understand the unique challenges facing ${businessData.name.toLowerCase()} businesses. Our specialized approach to ${serviceName.toLowerCase()} addresses your specific industry needs and drives measurable results.`,
      `With deep expertise in ${businessData.name.toLowerCase()}, we deliver ${serviceName.toLowerCase()} solutions that speak your language and understand your market dynamics.`,
      `Our proven track record with ${businessData.name.toLowerCase()} businesses means we know exactly what works in your industry. Get results that matter.`
    ];

    const titleIndex = Math.floor(Math.random() * titleVariations.length);
    const descIndex = Math.floor(Math.random() * descriptions.length);

    return {
      title: titleVariations[titleIndex],
      description: descriptions[descIndex]
    };
  }

  // Generate business-specific process content
  static generateProcessContent(serviceName: string, businessData: BusinessData): {
    title: string;
    subtitle: string;
    description: string;
  } {
    const processVariations = [
      {
        title: `Our ${serviceName} Process for ${businessData.name}`,
        subtitle: "Strategic Implementation Tailored for Your Industry",
        description: `We follow a proven methodology specifically designed for ${businessData.name.toLowerCase()} businesses, ensuring every step delivers maximum impact for your unique market position.`
      },
      {
        title: `How We Deliver ${serviceName} for ${businessData.name}`,
        subtitle: "Industry-Focused Methodology",
        description: `Our specialized approach to ${serviceName.toLowerCase()} is crafted around ${businessData.name.toLowerCase()} industry dynamics, delivering results that align with your business goals.`
      },
      {
        title: `${businessData.name} ${serviceName} Implementation`,
        subtitle: "Systematic Approach to Success",
        description: `Every ${businessData.name.toLowerCase()} business is unique. Our systematic process ensures your ${serviceName.toLowerCase()} strategy is perfectly aligned with your industry requirements.`
      }
    ];

    const randomIndex = Math.floor(Math.random() * processVariations.length);
    return processVariations[randomIndex];
  }

  // Generate business-specific CTA content
  static generateCTAContent(serviceName: string, businessData: BusinessData): {
    title: string;
    subtitle: string;
    description: string;
  } {
    const ctaVariations = [
      {
        title: `Ready to Transform Your ${businessData.name} Business?`,
        subtitle: `Start Your ${serviceName} Journey Today`,
        description: `Join successful ${businessData.name.toLowerCase()} businesses that have accelerated their growth with our specialized ${serviceName.toLowerCase()} solutions. Get your free consultation now.`
      },
      {
        title: `Accelerate Your ${businessData.name} Growth`,
        subtitle: `Expert ${serviceName} Awaits`,
        description: `Don't let your competitors get ahead. Partner with us for ${serviceName.toLowerCase()} that's specifically designed for ${businessData.name.toLowerCase()} success.`
      },
      {
        title: `Take Your ${businessData.name} to the Next Level`,
        subtitle: `Professional ${serviceName} Solutions`,
        description: `Experience the difference that industry-focused ${serviceName.toLowerCase()} can make for your ${businessData.name.toLowerCase()} business. Schedule your consultation today.`
      }
    ];

    const randomIndex = Math.floor(Math.random() * ctaVariations.length);
    return ctaVariations[randomIndex];
  }

  // Generate business-specific testimonial content
  static generateTestimonialContent(businessData: BusinessData): {
    title: Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
    description: string;
  } {
    const titleVariations = [
      [
        { text: "What " },
        { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
        { text: " Clients Say" }
      ],
      [
        { text: "Success Stories from " },
        { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
        { text: " Leaders" }
      ],
      [
        { text: "Trusted by " },
        { text: `${businessData.name}`, gradient: true, gradientClass: "bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" },
        { text: " Professionals" }
      ]
    ];

    const descriptions = [
      `See how we've helped ${businessData.name.toLowerCase()} businesses overcome challenges and achieve remarkable growth.`,
      `Real results from real ${businessData.name.toLowerCase()} clients who trusted us with their business growth.`,
      `Discover why ${businessData.name.toLowerCase()} professionals choose us as their growth partner.`
    ];

    const titleIndex = Math.floor(Math.random() * titleVariations.length);
    const descIndex = Math.floor(Math.random() * descriptions.length);

    return {
      title: titleVariations[titleIndex],
      description: descriptions[descIndex]
    };
  }

  // Generate comprehensive business service content
  static generateBusinessServiceContent(
    serviceData: ServiceData, 
    businessData: BusinessData
  ): Partial<ServiceData> {
    const serviceName = serviceData.hero.initial;
    
    const heroContent = this.generateHeroContent(serviceName, businessData);
    const whyChooseContent = this.generateWhyChooseUsContent(serviceName, businessData);
    const processContent = this.generateProcessContent(serviceName, businessData);
    const ctaContent = this.generateCTAContent(serviceName, businessData);
    const testimonialContent = this.generateTestimonialContent(businessData);

    // Generate business-specific stats
    const businessStats = this.generateBusinessStats(serviceData.hero.stats, businessData);
    
    // Generate business-specific trust points
    const businessTrustPoints = this.generateBusinessTrustPoints(serviceData.whyChooseUs.trustPoints, businessData);

    return {
      hero: {
        ...serviceData.hero,
        brandLine: heroContent.brandLine,
        subheadline: heroContent.subtitle,
        stats: businessStats
      },
      whyChooseUs: {
        ...serviceData.whyChooseUs,
        title: whyChooseContent.title,
        trustPoints: businessTrustPoints
      },
      process: {
        ...serviceData.process,
        title: processContent.title,
        subtitle: processContent.subtitle,
        description: processContent.description
      },
      cta: {
        ...serviceData.cta,
        title: ctaContent.title,
        subtitle: ctaContent.subtitle,
        description: ctaContent.description
      },
      testimonials: {
        ...serviceData.testimonials,
        title: testimonialContent.title,
        description: testimonialContent.description
      }
    };
  }

  // Generate business-specific stats
  private static generateBusinessStats(originalStats: any[], businessData: BusinessData): any[] {
    const businessSpecificStats = [
      {
        title: "Industry Experience",
        description: `Years serving ${businessData.name.toLowerCase()} sector`
      },
      {
        title: "Client Success Rate",
        description: `${businessData.name} businesses achieving growth`
      },
      {
        title: "Market Coverage",
        description: `${businessData.name} markets we've helped penetrate`
      }
    ];

    return originalStats.map((stat, index) => ({
      ...stat,
      title: businessSpecificStats[index % businessSpecificStats.length].title,
      description: businessSpecificStats[index % businessSpecificStats.length].description
    }));
  }

  // Generate business-specific trust points
  private static generateBusinessTrustPoints(originalTrustPoints: any[], businessData: BusinessData): any[] {
    const businessSpecificTrustPoints = [
      {
        title: `${businessData.name} Expertise`,
        description: `Deep understanding of ${businessData.name.toLowerCase()} industry challenges, trends, and opportunities. We speak your business language.`
      },
      {
        title: "Proven Track Record",
        description: `Successfully helped numerous ${businessData.name.toLowerCase()} businesses overcome ${businessData.painPoints[0]?.toLowerCase() || 'key challenges'}.`
      },
      {
        title: "Industry-Focused Solutions",
        description: `Tailored strategies that address specific ${businessData.name.toLowerCase()} pain points and maximize your ${businessData.benefits[0]?.toLowerCase() || 'business potential'}.`
      },
      {
        title: "Results-Driven Approach",
        description: `We measure success by your ${businessData.successMetrics[0]?.toLowerCase() || 'key performance indicators'} and business growth metrics.`
      },
      {
        title: "Comprehensive Support",
        description: `End-to-end solutions designed for ${businessData.name.toLowerCase()} businesses, from strategy to implementation and optimization.`
      },
      {
        title: "Market Intelligence",
        description: `Stay ahead with our deep insights into ${businessData.name.toLowerCase()} market trends, consumer behavior, and competitive landscape.`
      }
    ];

    return originalTrustPoints.map((trustPoint, index) => ({
      ...trustPoint,
      title: businessSpecificTrustPoints[index % businessSpecificTrustPoints.length].title,
      description: businessSpecificTrustPoints[index % businessSpecificTrustPoints.length].description
    }));
  }

  // Generate business-specific service types
  static generateBusinessServiceTypes(originalServices: any[], businessData: BusinessData, serviceName: string): any[] {
    const serviceTypeVariations = {
      'web-design-development': [
        `${businessData.name} Website Design`,
        `E-commerce Solutions for ${businessData.name}`,
        `Mobile-Responsive ${businessData.name} Sites`,
        `${businessData.name} Landing Pages`,
        `Custom Web Applications`
      ],
      'seo-services': [
        `${businessData.name} SEO Strategy`,
        `Local SEO for ${businessData.name}`,
        `Technical SEO Optimization`,
        `${businessData.name} Content Marketing`,
        `Keyword Research & Analysis`
      ],
      'digital-marketing': [
        `${businessData.name} Digital Strategy`,
        `Multi-Channel Campaigns`,
        `Brand Positioning for ${businessData.name}`,
        `Performance Marketing`,
        `Conversion Optimization`
      ]
    };

    const businessServices = serviceTypeVariations[serviceName as keyof typeof serviceTypeVariations] || [
      `${businessData.name} Solutions`,
      `Industry-Specific Strategies`,
      `Custom Implementation`,
      `Performance Optimization`,
      `Growth Acceleration`
    ];

    return originalServices.map((service, index) => ({
      ...service,
      title: businessServices[index % businessServices.length],
      description: `Specialized ${service.title.toLowerCase()} tailored for ${businessData.name.toLowerCase()} businesses, addressing your unique ${businessData.painPoints[index % businessData.painPoints.length]?.toLowerCase() || 'challenges'}.`
    }));
  }

  // Generate business-specific process steps
  static generateBusinessProcessSteps(originalSteps: any[], businessData: BusinessData): any[] {
    const businessProcessSteps = [
      {
        title: `${businessData.name} Analysis`,
        description: `Deep dive into your ${businessData.name.toLowerCase()} business model, target audience, and competitive landscape to identify opportunities.`
      },
      {
        title: "Strategy Development",
        description: `Create a customized strategy that addresses your specific ${businessData.name.toLowerCase()} challenges and leverages industry best practices.`
      },
      {
        title: "Implementation",
        description: `Execute the strategy with precision, ensuring every element is optimized for ${businessData.name.toLowerCase()} success.`
      },
      {
        title: "Optimization & Growth",
        description: `Continuously monitor, analyze, and optimize performance to maximize your ${businessData.benefits[0]?.toLowerCase() || 'business growth'}.`
      }
    ];

    return originalSteps.map((step, index) => ({
      ...step,
      title: businessProcessSteps[index % businessProcessSteps.length].title,
      description: businessProcessSteps[index % businessProcessSteps.length].description
    }));
  }

  // Generate SEO-friendly content variations
  static generateSEOContent(serviceName: string, businessData: BusinessData): {
    metaTitle: string;
    metaDescription: string;
    h1Title: string;
    breadcrumb: string;
  } {
    return {
      metaTitle: `${serviceName} for ${businessData.name} | Professional ${businessData.name} Solutions`,
      metaDescription: `Expert ${serviceName.toLowerCase()} services for ${businessData.name.toLowerCase()} businesses. Increase ${businessData.benefits[0]?.toLowerCase() || 'growth'}, overcome ${businessData.painPoints[0]?.toLowerCase() || 'challenges'}, and dominate your market.`,
      h1Title: `Professional ${serviceName} for ${businessData.name} Businesses`,
      breadcrumb: `${serviceName} for ${businessData.name}`
    };
  }

  // Generate business-specific FAQ content
  static generateBusinessFAQs(serviceName: string, businessData: BusinessData): Array<{
    question: string;
    answer: string;
  }> {
    return [
      {
        question: `How does ${serviceName} specifically benefit ${businessData.name} businesses?`,
        answer: `Our ${serviceName.toLowerCase()} is specifically designed for ${businessData.name.toLowerCase()} businesses to address common challenges like ${businessData.painPoints.slice(0, 2).join(' and ').toLowerCase()}. We help you achieve ${businessData.benefits.slice(0, 2).join(' and ').toLowerCase()}.`
      },
      {
        question: `What makes your ${serviceName} different for ${businessData.name}?`,
        answer: `We have deep expertise in the ${businessData.name.toLowerCase()} industry and understand your unique ${businessData.targetAudience}. Our approach is tailored to your ${businessData.businessType === 'B2B' ? 'B2B' : 'B2C'} model and industry-specific requirements.`
      },
      {
        question: `How do you measure success for ${businessData.name} businesses?`,
        answer: `We track industry-relevant metrics including ${businessData.successMetrics.slice(0, 3).join(', ').toLowerCase()}, and other KPIs that matter most to ${businessData.name.toLowerCase()} businesses.`
      },
      {
        question: `How long does it take to see results in the ${businessData.name} industry?`,
        answer: `While results vary, most ${businessData.name.toLowerCase()} businesses start seeing improvements within the first few weeks, with significant growth typically achieved within 3-6 months of implementing our ${serviceName.toLowerCase()} strategies.`
      }
    ];
  }
}