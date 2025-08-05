import { ServiceData } from '@/types/service.types';
import { digitalMarketingService } from './digital-marketing.service';
import { metaAdsService } from './meta-ads.service';
import { googleAdsService } from './google-ads.service';
import { otherAdsService } from './other-ads.service';
import { localSeoService } from './local-seo.service';
import { ecommerceMarketingService } from './ecommerce-marketing.service';
import { webDevelopmentService } from './web-development.service';
import { socialMediaMarketingService } from './social-media-marketing.service';
import { seoService } from './seo.service';
import { gmbService } from './gmb.service';
import { asoService } from './aso.service';

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
};

export const getServiceBySlug = (slug: string): ServiceData | undefined => {
    return serviceRegistry[slug];
};

export const getAllServiceSlugs = (): string[] => {
    return Object.keys(serviceRegistry);
};
