import React from 'react';
import { ServiceData } from "@/services/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';
import { IconRocket } from '@tabler/icons-react';

const { IconMail, IconUsers, IconClockHour8, IconTrendingUp, BarChart4, Settings2, Briefcase, IconShield } = ServiceIcons;

export const marketingAutomationService: ServiceData = {
    slug: 'marketing-automation',
    showSections: {
        hero: true,
        whyChooseUs: true,
        typesOfServices: true,
        process: true,
        techStack: false,
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
                    { text: 'Overwhelmed by ' },
                    { text: 'Manual Tasks?', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
                ],
                subheadline: 'Automate repetitive marketing workflows and focus on strategy.',
                painPoints: [
                    'Manual email sends and follow-ups',
                    'Inconsistent lead nurturing',
                    'Poor segmentation accuracy'
                ],
                solutionPoints: [
                    'Automated email sequences',
                    'Behavior-based triggers',
                    'Dynamic audience segments'
                ],
                cta: { icon: React.createElement(ArrowRight), text: 'Automate Now', link: '/contact' }
            }
        },
        // {
        //     component: ProvideServicesTo,
        //     position: 'afterWhyChooseUs',
        //     props: {
        //         heading: 'We provide Marketing Automation for',
        //         subheading: 'Businesses seeking scalable, data-driven workflows'
        //     }
        // },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'What is marketing automation?',
                        answer: 'Marketing automation uses software to automate repetitive tasks like email campaigns, social posts, and lead scoring—improving efficiency and consistency.',
                        icon: React.createElement(IconMail, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'Which platforms do you support?',
                        answer: 'We work with HubSpot, Pardot, ActiveCampaign, Mailchimp, and custom CRM integrations to fit your business needs.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'How long before I see results?',
                        answer: 'Most clients see improved engagement and qualified leads within 4–6 weeks after implementation.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Can you integrate with our CRM?',
                        answer: 'Yes, we set up seamless integrations with popular CRMs to ensure leads and data flow directly into your sales pipeline.',
                        icon: React.createElement(IconUsers, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you measure marketing automation success?',
                        answer: 'We track KPIs like open rates, click-through rates, conversion rates, and workflow completion rates to evaluate performance and refine strategies.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'How does automation improve lead nurturing?',
                        answer: 'Automated workflows deliver timely, personalized communications based on user behavior, increasing engagement and conversion over time.',
                        icon: React.createElement(IconTrendingUp, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'Can you customize automation workflows?',
                        answer: 'Yes, we design custom workflows tailored to your customer journey stages, triggers, and business goals for maximum impact.',
                        icon: React.createElement(Settings2, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'How do you ensure data privacy and compliance?',
                        answer: 'We implement GDPR/CCPA-compliant processes, secure data handling, and regular audits to protect customer information and meet legal requirements.',
                        icon: React.createElement(IconShield, { size: 24 })
                    }
                ],
                heading: { part1: 'Marketing Automation ', part2: 'FAQs' }
            }
        },
        { component: WhoWeWorkWith, position: 'beforeProcess', props: { title: 'Who we work for', description: '', className: 'relative -skew-y-3 hover:scale-112 transition-all duration-500 ease-in-out shadow-lg rounded-2xl border-t border-border dark:border-gray-800' } }
    ],
    hero: {
        initial: 'Ready to ',
        headlineKeywords: ['Automate?', 'Scale?', 'Optimize?'],
        brandLine: [{ text: 'Marketing Automation', gradient: false }],
        subheadline: 'Streamlined workflows that nurture leads and increase conversions.',
        ctaButtons: [
            { icon: React.createElement(IconTrendingUp, { size: 30 }), text: 'Get Started', link: '/contact' }
        ],
        stats: [
            { icon: React.createElement(IconTrendingUp, { size: 34 }), title: '70% Increase', description: 'In Engagement' },
            { icon: React.createElement(BarChart4, { size: 34 }), title: '50% Time', description: ' Saved on Tasks' },
            { icon: React.createElement(IconUsers, { size: 34 }), title: '40% Lead', description: 'Quality improvement' },
            { icon: React.createElement(IconRocket, { size: 34 }), title: '30% Revenue', description: 'Growth' }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ' },
            { text: 'Marketing Automation', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        trustPoints: [
            { icon: React.createElement(IconMail, { size: 24 }), title: 'Automated Email Sequences', description: 'Engage leads with personalized workflows.' },
            { icon: React.createElement(Settings2, { size: 24 }), title: 'Behavioral Triggers', description: 'Send messages based on user actions.' },
            { icon: React.createElement(Briefcase, { size: 24 }), title: 'CRM Integrations', description: 'Sync data with your sales tools.' }
        ],
        cta: { text: 'Start Automation', link: '#contact', icon: React.createElement(IconTrendingUp, { size: 24 }) }
    },
    typesOfServices: {
        title: 'Our Automation Services',
        subtitle: 'WORKFLOWS & CAMPAIGNS',
        description: 'Customized automation workflows to nurture and convert leads.',
        services: [
            { id: 1, title: 'Email Drip Campaigns', description: 'Timed sequences that guide prospects.', icon: React.createElement(IconMail, { size: 24 }) },
            { id: 2, title: 'Lead Scoring', description: 'Automated scoring based on engagement.', icon: React.createElement(IconUsers, { size: 24 }) },
            { id: 3, title: 'CRM Sync', description: 'Real-time data flow to sales pipelines.', icon: React.createElement(Briefcase, { size: 24 }) },
            { id: 4, title: 'Behavioral Triggers', description: 'Actions based on user behavior and events.', icon: React.createElement(Settings2, { size: 24 }) },
            { id: 5, title: 'Segmentation', description: 'Dynamic audience segments for personalization.', icon: React.createElement(IconUsers, { size: 24 }) },
            { id: 6, title: 'Analytics & Reporting', description: 'Comprehensive performance dashboards.', icon: React.createElement(BarChart4, { size: 24 }) }
        ]
    },
    process: {
        title: 'Our Automation Process',
        subtitle: 'STEP-BY-STEP',
        description: 'A strategic approach to implement effective automation.',
        steps: [
            { id: 1, title: 'Planning & Goals', description: 'Define workflows and KPIs.' },
            { id: 2, title: 'Setup & Integration', description: 'Connect tools and configure triggers.' },
            { id: 3, title: 'Testing & QA', description: 'Validate workflows and data accuracy.' },
            { id: 4, title: 'Launch & Monitor', description: 'Activate campaigns and track performance.' },
            { id: 5, title: 'Optimize & Scale', description: 'Refine workflows based on results.' },
            { id: 6, title: 'Continuous Improvement', description: 'Iterative enhancements and optimization.' }
        ]
    },
    techStack: {
        title: 'Our Automation Tools',
        subtitle: 'PLATFORMS & SOFTWARE',
        description: 'Top platforms to power your marketing automation.',
        categories: ['Platforms', 'Integrations', 'Analytics'],
        technologies: [
            { id: 1, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Platforms' },
            { id: 2, name: 'ActiveCampaign', logo: '/tech/icons8-activecampaign-96.png', category: 'Platforms' },
            { id: 3, name: 'Zapier', logo: '/tech/icons8-zapier-96.png', category: 'Integrations' }
        ]
    },
    cta: {
        title: 'Ready to Automate Marketing?',
        subtitle: 'GET STARTED',
        description: 'Contact us to design a custom marketing automation strategy.'
    }
};
