import { ServiceData } from '@/types/service.types';
import { digitalMarketingService } from './data/digital-marketing.service';
import { metaAdsService } from './data/meta-ads.service';
import { googleAdsService } from './data/google-ads.service';
import { otherAdsService } from './data/other-ads.service';
import { localSeoService } from './data/local-seo.service';
import { ecommerceMarketingService } from './data/ecommerce-marketing.service';
import { webDevelopmentService } from './data/web-development.service';
import { socialMediaMarketingService } from './data/social-media-marketing.service';
import { seoService } from './data/seo.service';
import { gmbService } from './data/gmb.service';
import { asoService } from './data/aso.service';
import { mobileDevelopmentService } from './data/mobile-development.service';
import { websiteMaintenanceService } from './data/website-maintenance.service';
import { leadGenerationService } from './data/lead-generation.service';
import { marketingAutomationService } from './data/marketing-automation.service';

export const serviceRegistry: Record<string, ServiceData> = {
    '360-digital-marketing': digitalMarketingService,
    'meta-ads': metaAdsService,
    'google-ads': googleAdsService,
    'other-ads': otherAdsService,
    'local-seo': localSeoService,
    'ecommerce-marketing': ecommerceMarketingService,
    'web-design-development': webDevelopmentService,
    'social-media-marketing': socialMediaMarketingService,
    'seo-services': seoService,
    'gmb-services': gmbService,
    'aso-services': asoService,
    'mobile-apps-development': mobileDevelopmentService,
    'website-maintenance': websiteMaintenanceService,
    'leads-generation': leadGenerationService,
    'marketing-automation': marketingAutomationService,
};

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
    return serviceRegistry[slug];
};

export const getAllServiceSlugs = (): string[] => {
    return Object.keys(serviceRegistry);
};
