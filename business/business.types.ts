// types/business.types.ts
import React from 'react';

export interface StatsProps {
    icon?: React.ReactNode;
    title: string;
    value: string;
    description: string;
}

interface CTAProps {
    title: string;
    subtitle?: string;
    description: string;
    backgroundColor?: string;
}

export interface CTAButton {
    icon?: React.ReactNode;
    text: string;
    link: string;
    variant?: 'primary' | 'secondary';
}

export interface CustomSection {
    component: React.ComponentType<any>;
    props?: Record<string, any>;
    position: 'beforeHero' | 'afterHero' |
    'beforeCompanies' | 'afterCompanies' |
    'beforeWhyChooseUs' | 'afterWhyChooseUs' |
    'beforeServices' | 'afterServices' |
    'beforeStats' | 'afterStats' | 'beforeFAQ' |
    'afterFAQ' | 'beforeTestimonials' |
    'afterTestimonials' | 'beforeCTA' |
    'afterCTA' | 'afterAll';
    order?: number;
}

export interface BusinessData {
    id: string;
    name: string;
    image: string;
    slug: string;

    // Section visibility controls
    showSections?: {
        hero?: boolean;
        stats?: boolean;
        companies?: boolean;
        whychoseus?: boolean;
        services?: boolean;
        faq?: boolean;
        testimonials?: boolean;
        cta?: boolean;
    };

    // Custom sections support
    customSections?: CustomSection[];

    // Hero section
    hero: {
        initial?: string;
        headlineKeywords?: string[];
        brandLine?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
        subheadline: string;
        ctaButtons?: CTAButton[];
        backgroundImage?: string;
        className?: string;
        name: string;
    };

    // Services section
    services: {
        title?: string;
        subtitle?: string;
        description: string;
        items: {
            id?: string;
            title: string;
            description: string;
            icon: React.ReactNode;
            link?: string;
            url?: string;
        }[];
    };

    // Stats section
    stats: {
        title?: string,
        subtitle?: string,
        description?: string,
        items: StatsProps[];
    };

    // Testimonials section
    testimonials: {
        title?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
        subtitle?: string;
        description?: string;
        items: {
            id: string;
            image?: string;
            message: string;
            highlight?: string;
            stars: number;
            name: string;
            designation: string;
            company?: string;
        }[];
    };

    // CTA section
    cta: CTAProps;
}

export type IconProps = {
    size?: number;
    className?: string;
    stroke?: string | number;
    [key: string]: any;
};
