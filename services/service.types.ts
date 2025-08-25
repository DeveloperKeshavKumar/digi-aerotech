// types/service.types.ts
import React from 'react';

export interface StatsProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
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
    'beforeWhyChooseUs' | 'afterWhyChooseUs' |
    'beforeTypes' | 'afterTypes' |
    'beforeProcess' | 'afterProcess' |
    'beforeTech' | 'afterTech' |
    'beforeTestimonials' | 'afterTestimonials' |
    'beforeCTA' | 'afterCTA' | 'afterAll';
    order?: number;
}

export interface ServiceData {
    slug: string;
    showSections?: {
        hero?: boolean;
        whyChooseUs?: boolean;
        typesOfServices?: boolean;
        process?: boolean;
        techStack?: boolean;
        testimonials?: boolean;
        cta?: boolean;
    };
    customSections?: CustomSection[];
    hero?: {
        initial: string;
        headlineKeywords: string[];
        brandLine: string | { text: string; gradient?: boolean; gradientClass?: string }[];
        subheadline: string;
        ctaButtons: CTAButton[];
        stats: StatsProps[];
    };
    whyChooseUs?: {
        title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
        trustPoints: {
            icon: React.ReactNode;
            title: string;
            description: string;
        }[];
        cta: {
            text: string;
            link: string;
            icon: React.ReactNode;
        };
    };
    typesOfServices?: {
        title: string;
        subtitle: string;
        description: string;
        services: {
            id: number;
            title: string;
            description: string;
            icon?: React.ReactNode;
        }[];
    };
    process?: {
        title: string;
        subtitle: string;
        description: string;
        className?: string;
        steps: {
            id: number;
            title: string;
            description: string;
        }[];
    };
    techStack?: {
        title: string;
        subtitle: string;
        description: string;
        categories: string[];
        technologies: {
            id: number;
            name: string;
            logo: string;
            category: string;
        }[];
    };
    testimonials?: {
        title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
        description: string;
        testimonials: {
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
    cta?: {
        title: string;
        subtitle?: string;
        description: string;
        backgroundColor?: string;
    };
}

export type IconProps = {
  size?: number;
  className?: string;
  stroke?: string | number;
  [key: string]: any;
};