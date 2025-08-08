import React from 'react';
import { ServiceData } from "@/types/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconUsers, IconTarget, IconTrendingUp, IconPhone, IconClockHour8, BarChart4, Settings2 } = ServiceIcons;

export const leadGenerationService: ServiceData = {
    slug: 'leads-generation',
    showSections: {
        hero: true,
        whyChooseUs: true,
        typesOfServices: true,
        process: true,
        techStack: true,
        testimonials: true,
        cta: true
    },
    customSections: [
        { component: Companies, position: 'beforeWhyChooseUs' },
        {
            component: Struggles,
            position: 'beforeWhyChooseUs',
            props: {
                title: [
                    { text: 'Struggling to Get ' },
                    { text: 'Quality Leads?', gradient: true, gradientClass: 'from-blue-500 via-green-500 to-teal-500' }
                ],
                subheadline: 'Our lead generation strategies fill your pipeline with qualified prospects.',
                painPoints: [
                    'Low conversion rates from marketing channels',
                    'High cost per lead',
                    'Difficulty targeting the right audience'
                ],
                solutionPoints: [
                    'Data-driven audience segmentation',
                    'Multi-channel outreach campaigns',
                    'Optimized landing pages for conversions'
                ],
                cta: { icon: React.createElement(ArrowRight), text: 'Generate Leads Now', link: '/contact' }
            }
        },
        {
            component: ProvideServicesTo,
            position: 'afterWhyChooseUs',
            props: {
                heading: 'We provide Lead Generation for',
                subheading: 'Businesses aiming for steady, qualified prospects'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'What channels do you use for lead generation?',
                        answer: 'We leverage email marketing, PPC campaigns, social media ads, and organic search to reach and convert prospects.',
                        icon: React.createElement(IconTrendingUp, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How do you ensure lead quality?',
                        answer: 'Through precise targeting, lead scoring, and optimized landing pages we filter out unqualified leads and focus on high-intent prospects.',
                        icon: React.createElement(IconTarget, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Can you integrate with our CRM?',
                        answer: 'Yes, we connect directly to popular CRMs like Salesforce, HubSpot, and Zoho to streamline lead flow and tracking.',
                        icon: React.createElement(IconPhone, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'How do you report on campaign performance?',
                        answer: 'Monthly dashboards show lead counts, conversion metrics, channel ROI, and actionable insights for continuous optimization.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you optimize lead generation for SEO success?',
                        answer: 'We align content strategy with targeted keywords, meta tags, and site performance to improve organic visibility and capture more qualified leads.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What follow-up strategies do you use to nurture leads?',
                        answer: 'Automated email sequences, retargeting ads, and personalized content based on user behavior keep prospects engaged and move them through the funnel.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'How do you handle lead scoring and qualification?',
                        answer: 'Our proprietary scoring model uses demographic and engagement data to prioritize high-intent prospects for your sales team.',
                        icon: React.createElement(IconUsers, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'What analytics do you provide for lead campaigns?',
                        answer: 'We deliver customized reports with CPL, conversion rates, ROI, and actionable insights to refine campaigns and budgets in real time.',
                        icon: React.createElement(IconTrendingUp, { size: 24 })
                    }
                ],
                heading: { part1: 'Lead Generation ', part2: 'FAQs' }
            }
        }
    ],
    hero: {
        initial: 'Need More ',
        headlineKeywords: ['Leads?', 'Qualified Prospects?', 'Sales Opportunities?'],
        brandLine: [{ text: 'Lead Generation Services', gradient: false }],
        subheadline: 'Grow your sales pipeline with targeted prospecting and high-converting campaigns.',
        ctaButtons: [
            { icon: React.createElement(IconPhone, { size: 30 }), text: 'Request Free Strategy', link: '/contact' }
        ],
        stats: [
            { icon: React.createElement(IconUsers, { size: 34 }), title: '300% Increase', description: 'In Qualified Leads' },
            { icon: React.createElement(IconTarget, { size: 34 }), title: '85% Avg.', description: 'Conversion Rate' },
            { icon: React.createElement(IconTrendingUp, { size: 34 }), title: '50+ Avg.', description: 'Campaigns Executed' },
            { icon: React.createElement(BarChart4, { size: 34 }), title: '4.7/5 Rating', description: 'Client Satisfaction' }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ' },
            { text: 'Lead Generation', gradient: true, gradientClass: 'from-blue-600 via-green-500 to-teal-500' }
        ],
        trustPoints: [
            { icon: React.createElement(IconUsers, { size: 24 }), title: 'Precise Targeting', description: 'Reach prospects who match your ideal customer profile.' },
            { icon: React.createElement(IconTrendingUp, { size: 24 }), title: 'Data-Driven Tactics', description: 'Continuous optimization using performance data.' },
            { icon: React.createElement(Settings2, { size: 24 }), title: 'Seamless Integration', description: 'Connect leads to your CRM and sales workflows.' }
        ],
        cta: { text: 'Start Generating Leads', link: '#contact', icon: React.createElement(IconTarget, { size: 24 }) }
    },
    typesOfServices: {
        title: 'Our Lead Generation Services',
        subtitle: 'PROSPECTING & OUTREACH',
        description: 'End-to-end lead generation solutions for consistent sales growth.',
        services: [
            { id: 1, title: 'Email Marketing', description: 'Personalized email campaigns that convert.', icon: React.createElement(IconPhone, { size: 24 }) },
            { id: 2, title: 'PPC Campaigns', description: 'High-ROI paid ads on Google and social platforms.', icon: React.createElement(IconTrendingUp, { size: 24 }) },
            { id: 3, title: 'Social Media Ads', description: 'Targeted ads on LinkedIn, Facebook, and Instagram.', icon: React.createElement(IconUsers, { size: 24 }) },
            { id: 4, title: 'Landing Page Design', description: 'SEO-optimized landing pages that drive conversions.', icon: React.createElement(BarChart4, { size: 24 }) },
            { id: 5, title: 'A/B Testing', description: 'Data-driven split tests for creatives and copy.', icon: React.createElement(Settings2, { size: 24 }) },
            { id: 6, title: 'Lead Scoring & CRM', description: 'Integration and scoring to prioritize sales-ready leads.', icon: React.createElement(IconUsers, { size: 24 }) }
        ]
    },
    process: {
        title: 'Our Lead Generation Process',
        subtitle: 'STEP-BY-STEP',
        description: 'A systematic approach to attract and convert high-quality leads.',
        steps: [
            { id: 1, title: 'Strategy & Research', description: 'Define target profiles and channel plans.' },
            { id: 2, title: 'Campaign Setup', description: 'Design creatives and messaging.' },
            { id: 3, title: 'Launch & Monitor', description: 'Execute and track performance.' },
            { id: 4, title: 'Nurture & Qualify', description: 'Automated follow-ups and lead scoring.' },
            { id: 5, title: 'Report & Optimize', description: 'Analyze data and refine campaigns.' },
            { id: 6, title: 'Continuous Optimization', description: 'Ongoing campaign refinement based on performance data.' }
        ]
    },
    techStack: {
        title: 'Our Lead Gen Tools',
        subtitle: 'PLATFORMS & SOFTWARE',
        description: 'Industry-leading tools for effective lead generation.',
        categories: ['Email', 'Ads', 'Automation'],
        technologies: [
            { id: 1, name: 'Mailchimp', logo: '/tech/icons8-mailchimp-96.png', category: 'Email' },
            { id: 2, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' },
            { id: 3, name: 'Google Ads', logo: '/tech/icons8-google-ads-96.png', category: 'Ads' }
        ]
    },
    testimonials: {
        title: [ { text: 'Lead Generation ' }, { text: 'Success Stories', gradient: true, gradientClass: 'from-blue-500 via-green-500 to-teal-500' } ],
        description: 'Clients who expanded their pipeline with us.',
        testimonials: [
            { id: '1', message: 'Their campaigns increased our qualified leads by 250% in three months.', highlight: '', stars: 5, name: 'Rohit Singh', designation: 'Sales Director', company: 'B2B SaaS Co.' },
            { id: '2', message: 'Seamless CRM integration and excellent support. Our sales team loves the quality of leads.', highlight: '', stars: 5, name: 'Anjali Verma', designation: 'Marketing Manager', company: 'Enterprise Solutions' }
        ]
    },
    cta: {
        title: 'Ready to Fill Your Pipeline?',
        subtitle: 'START GENERATING NOW',
        description: 'Contact us for a tailored lead generation strategy that delivers results.'
    }
};
