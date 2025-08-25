import React from "react";
import { BusinessData } from "../business.types";
import { IconBrandGoogle, IconBrandGooglePlay, IconBrandInstagram, IconBrandMeta, IconBrandYoutube, IconChartArea, IconCode, IconDeviceMobile, IconMapPin, IconMapSearch, IconPlanet, IconRobot, IconSeo, IconSettings, IconShield, IconShoppingCart, IconStar, IconTarget, IconTrendingUp, IconTrophy, IconUsers } from "@tabler/icons-react";

export const furniture: BusinessData = {
    id: '18',
    image: '/business/furniture-digital-marketing.webp',
    slug: 'furniture-digital-marketing',
    name: 'Furniture Digital Marketing Agency',

    hero: {
        name: 'Furniture Marketing Experts',
        initial: 'Elevate Your Furniture Business with',
        headlineKeywords: [
            'Furniture Digital Marketing',
            'Online Furniture Sales',
            'Branding for Furniture Manufacturers'
        ],
        brandLine: 'Attract More Customers & Build a Leading Furniture Brand Online',
        subheadline: 'Our expert furniture marketing strategies help furniture stores, manufacturers, and e-commerce platforms increase online sales, build brand authority, and enhance online reputation with targeted, ethical digital campaigns.',
        ctaButtons: [
            {
                text: 'Get Free Furniture Marketing Audit',
                link: '/free-furniture-marketing-audit',
                variant: 'primary',
                icon: React.createElement(IconChartArea, { size: 20 })
            },
            {
                text: 'View Furniture Success Stories',
                link: '/furniture-marketing-case-studies',
                variant: 'secondary',
                icon: React.createElement(IconTrophy, { size: 20 })
            }
        ],
        backgroundImage: '/business/modern-furniture-store.webp'
    },

    services: {
        title: 'Complete Furniture Digital Marketing Services',
        subtitle: 'Everything Your Furniture Business Needs to Attract More Customers',
        businessName: 'furniture',
        description: 'We provide comprehensive digital marketing solutions designed specifically for furniture stores, manufacturers, and e-commerce platforms. Our strategies help increase visibility, drive sales, and build trust with your target audience through ethical and effective marketing tactics.',
        items: [
            {
                id: '360-digital-marketing',
                title: 'Complete Furniture Digital Marketing',
                description: 'Integrated marketing campaigns combining SEO, content marketing, reputation management, and PPC advertising to maximize your furniture brand’s online visibility and sales potential.',
                icon: React.createElement(IconPlanet, { size: 30 }),
                link: '/360-digital-marketing'
            },
            {
                id: 'meta-ads',
                title: 'Facebook & Instagram Furniture Advertising',
                description: 'Targeted Meta ads designed to promote your furniture products, sales events, and brand story, while using visuals and videos to engage potential customers and drive conversions.',
                icon: React.createElement(IconBrandMeta, { size: 30 }),
                link: '/meta-ads'
            },
            {
                id: 'google-ads',
                title: 'Google Ads for Furniture Stores',
                description: 'PPC campaigns focused on high-intent searches like "buy furniture online", "modern sofas", and other product-specific keywords that lead to high-conversion traffic.',
                icon: React.createElement(IconBrandGoogle, { size: 30 }),
                link: '/google-ads'
            },
            {
                id: 'other-ads',
                title: 'YouTube & Furniture Advertising',
                description: 'Promote your furniture brand with engaging video content on YouTube and other platforms, showcasing product features, design aesthetics, and customer experiences.',
                icon: React.createElement(IconBrandYoutube, { size: 30 }),
                link: '/other-ads'
            },
            {
                id: 'local-seo',
                title: 'Furniture Store Local SEO',
                description: 'Dominate local searches like "furniture store near me", "modern furniture in [city]", and more to attract nearby customers to your showroom or physical store.',
                icon: React.createElement(IconMapSearch, { size: 30 }),
                link: '/local-seo'
            },
            {
                id: 'ecommerce-marketing',
                title: 'E-commerce Furniture Sales Optimization',
                description: 'Improve your online furniture store’s sales with conversion-optimized product pages, seamless user experience (UX) design, and enhanced customer reviews.',
                icon: React.createElement(IconShoppingCart, { size: 30 }),
                link: '/ecommerce-marketing'
            },
            {
                id: 'web-design-development',
                title: 'Furniture Website Development',
                description: 'Develop responsive, user-friendly websites for your furniture business with features like online shopping, custom furniture builders, product displays, and seamless checkout systems.',
                icon: React.createElement(IconCode, { size: 30 }),
                link: '/web-design-development'
            },
            {
                id: 'social-media-marketing',
                title: 'Social Media Marketing for Furniture Brands',
                description: 'Strategic social media management across Instagram, Facebook, and Pinterest, focusing on visual storytelling, furniture trends, and client testimonials to build your brand authority.',
                icon: React.createElement(IconBrandInstagram, { size: 30 }),
                link: '/social-media-marketing'
            },
            {
                id: 'seo-services',
                title: 'Furniture SEO Services',
                description: 'Comprehensive SEO for furniture stores, optimizing for product-specific keywords, buying intent searches, and long-tail keywords to rank higher in Google search results.',
                icon: React.createElement(IconSeo, { size: 30 }),
                link: '/seo-services'
            },
            {
                id: 'gmb-services',
                title: 'Google My Business for Furniture Stores',
                description: 'Optimize your Google My Business profile to enhance local visibility, display product images, offer promotions, and enable client reviews for better trust-building.',
                icon: React.createElement(IconMapPin, { size: 30 }),
                link: '/gmb-services'
            },
            {
                id: 'aso-services',
                title: 'App Store Optimization for Furniture Apps',
                description: 'Increase downloads and visibility for your furniture app by optimizing for relevant keywords like "furniture shopping" or "home decor" on app stores.',
                icon: React.createElement(IconBrandGooglePlay, { size: 30 }),
                link: '/aso-services'
            },
            {
                id: 'mobile-apps-development',
                title: 'Custom Furniture Mobile Apps',
                description: 'Create a seamless mobile shopping experience for your customers with a fully customized furniture app featuring virtual showrooms, furniture AR previews, and online ordering capabilities.',
                icon: React.createElement(IconDeviceMobile, { size: 30 }),
                link: '/mobile-apps-development'
            },
            {
                id: 'website-maintenance',
                title: 'Furniture Website Maintenance',
                description: 'Ensure your furniture website is always up-to-date with regular content updates, product catalog management, and security compliance for smooth user experiences.',
                icon: React.createElement(IconSettings, { size: 30 }),
                link: '/website-maintenance'
            },
            {
                id: 'leads-generation',
                title: 'Furniture Lead Generation',
                description: 'Attract potential customers using targeted campaigns, health checks, and offer-driven funnels to generate quality furniture leads from your website and social media platforms.',
                icon: React.createElement(IconUsers, { size: 30 }),
                link: '/leads-generation'
            },
            {
                id: 'marketing-automation',
                title: 'Furniture Marketing Automation',
                description: 'Automate lead nurturing, email campaigns, and client follow-ups to increase engagement and drive sales for your furniture store or online platform.',
                icon: React.createElement(IconRobot, { size: 30 }),
                link: '/marketing-automation'
            }
        ]
    },

    stats: {
        title: "Proven Furniture Marketing Results",
        subtitle: "Data-Driven Success for Furniture Businesses",
        items: [
            {
                icon: React.createElement(IconTrendingUp, { size: 30 }),
                title: 'Sales Growth',
                value: '420%',
                description: 'Average increase in online furniture sales within 6 months of implementing our comprehensive digital marketing strategies.',
            },
            {
                icon: React.createElement(IconTarget, { size: 30 }),
                title: 'Lead Conversion',
                value: '3X',
                description: 'Increase in lead conversion rates through optimized product pages, online ads, and local SEO tactics.',
            },
            {
                icon: React.createElement(IconShield, { size: 30 }),
                title: 'Brand Reputation',
                value: '250%',
                description: 'Growth in positive online reviews and brand trust due to reputation management and social proof strategies.',
            },
            {
                icon: React.createElement(IconStar, { size: 30 }),
                title: 'Customer Satisfaction',
                value: '4.9/5',
                description: 'Increase in customer satisfaction ratings and repeat business through effective remarketing and personalized engagement.',
            },
        ]
    },

    testimonials: {
        title: [
            { text: "Furniture Brand " },
            { text: "Success Stories", gradient: true, gradientClass: "from-yellow-500 via-orange-500 to-red-500" }
        ],
        subtitle: "How We've Helped Furniture Stores Grow Their Online Sales",
        description: "Read testimonials from successful furniture stores, manufacturers, and e-commerce platforms who have transformed their sales with our furniture-focused digital marketing expertise.",
        items: [
            {
                id: '1',
                message: 'We saw a 500% increase in online sales after optimizing our website and running targeted Google Ads. Our furniture store is now the go-to choice in our area.',
                highlight: '500% increase in online sales',
                stars: 5,
                name: 'John Doe',
                designation: 'CEO',
                company: 'Elegant Furniture Co.'
            },
            {
                id: '2',
                message: 'The social media strategies they implemented helped us gain 1,000+ new followers on Instagram, driving more foot traffic to our showroom.',
                highlight: '1,000+ new followers',
                stars: 5,
                name: 'Sara Smith',
                designation: 'Marketing Manager',
                company: 'Classic Furniture & Decor'
            },
            {
                id: '3',
                message: 'With their help, our Google Ads campaign attracted high-intent furniture buyers, and we saw a 200% increase in sales conversions.',
                highlight: '200% increase in sales conversions',
                stars: 5,
                name: 'Michael Williams',
                designation: 'Founder',
                company: 'FurnitureLand Online'
            }
        ],
    },

    cta: {
        title: 'Ready to Grow Your Furniture Business?',
        subtitle: 'Attract More Customers, Increase Sales, and Build a Leading Furniture Brand',
        description: 'Schedule your free furniture marketing consultation today. Our experts will analyze your current strategies and show you exactly how to grow your online sales while strengthening your furniture brand.',
        backgroundColor: 'bg-gradient-to-r from-gray-900 to-black',
    },

    showSections: {
        hero: true,
        companies: true,
        services: true,
        stats: true,
        testimonials: true,
        cta: true,
    }
};
