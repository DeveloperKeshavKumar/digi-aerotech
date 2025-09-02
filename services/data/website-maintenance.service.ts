import React from 'react';
import { ServiceData } from "@/services/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconRefresh, LifeBuoy, IconClockHour8, Settings2, BarChart4, Briefcase, IconShield } = ServiceIcons;

export const websiteMaintenanceService: ServiceData = {
    slug: 'website-maintenance',
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
            component: ProvideServicesTo,
            position: 'afterWhyChooseUs',
            props: {
                heading: 'We provide Website Maintenance for',
                subheading: 'Businesses requiring reliable website upkeep'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'What is included in website maintenance?',
                        answer: 'We handle updates, security patches, performance optimizations, backups, and uptime monitoring to keep your site running smoothly.',
                        icon: React.createElement(IconRefresh, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How often do you perform updates and backups?',
                        answer: 'We schedule regular updates and daily backups, with emergency interventions as needed to protect your site and data.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Can you handle multiple platforms and CMSs?',
                        answer: 'Yes, we maintain WordPress, Shopify, Drupal, Magento, and custom-built sites, ensuring compatibility and stability across platforms.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Do you provide 24/7 monitoring and support?',
                        answer: 'Our team monitors your site around the clock and responds to issues immediately, minimizing downtime and ensuring business continuity.',
                        icon: React.createElement(LifeBuoy, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you improve website loading speed?',
                        answer: 'We optimize server response times, compress images, implement advanced caching strategies, and minify code to enhance page load speed and boost SEO rankings for better search visibility.',
                        icon: React.createElement(IconRefresh, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What security protocols are used for website protection?',
                        answer: 'We implement SSL/TLS encryption, firewall configurations, malware scanning, and regular vulnerability assessments to protect your site from cyber threats and maintain search engine trust.',
                        icon: React.createElement(IconShield, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'How do you optimize website SEO performance?',
                        answer: 'We improve site structure, keyword usage, meta tags, URL optimization, and mobile-friendliness to boost organic rankings and user experience.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'Can you customize maintenance plans to my needs?',
                        answer: 'Yes, we offer flexible plans covering security, performance, backups, and support tailored to your site complexity and business requirements.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    }
                ],
                heading: { part1: 'Website Maintenance ', part2: 'FAQs' }
            }
        },
        { component: WhoWeWorkWith, position: 'beforeProcess', props: { title: 'Who we work for', description: '', className: 'relative -skew-y-3 hover:scale-112 transition-all duration-500 ease-in-out shadow-lg rounded-2xl border-t border-border dark:border-gray-800' } },
        { component: Struggles, position: 'beforeWhyChooseUs', props: { title: [ { text: 'Tired of website issues? ' }, { text: 'We Fix Them', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" } ], subheadline: 'Stop worrying about security, updates, and downtime. Let us handle your site maintenance.', painPoints: [ 'Outdated software exposing vulnerabilities', 'Slow page loads hurting user experience', 'Data loss due to infrequent backups', 'Unexpected downtime impacting sales' ], solutionPoints: [ 'Regular updates and security patches', 'Performance optimizations and caching', 'Automated daily backups and recovery', '24/7 monitoring and rapid support' ], cta: { icon: React.createElement(ArrowRight), text: 'Get Maintenance Plan', link: '/contact' } } }
    ],
    hero: {
        initial: 'Need ',
        headlineKeywords: [ 'Website Maintenance?', 'Continuous Support?', 'Secure Updates?', '24/7 Monitoring?' ],
        brandLine: [ { text: 'Website Maintenance Services', gradient: false } ],
        subheadline: 'Ensure your site is always updated, secure, and performing at its best.',
        ctaButtons: [ { icon: React.createElement(IconShield, { size: 30 }), text: 'Get Maintenance Plan', link: '/contact' } ],
        stats: [
            { icon: React.createElement(IconRefresh, { size: 34 }), title: '99.9% Uptime', description: 'Guaranteed availability' },
            { icon: React.createElement(IconClockHour8, { size: 34 }), title: '24/7 Support', description: 'Always available' },
            { icon: React.createElement(Settings2, { size: 34 }), title: 'Updates', description: 'Security & features' },
            { icon: React.createElement(BarChart4, { size: 34 }), title: 'Performance', description: 'Reports monthly insights' }
        ]
    },
    whyChooseUs: {
        title: [ { text: 'Why Choose Our ' }, { text: 'Website Maintenance', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" } ],
        trustPoints: [
            { icon: React.createElement(IconShield, { size: 24 }), title: 'Security First', description: 'Proactive vulnerability management and patches.' },
            { icon: React.createElement(Settings2, { size: 24 }), title: 'Proactive Monitoring', description: 'Real-time alerts and 24/7 response.' },
            { icon: React.createElement(LifeBuoy, { size: 24 }), title: 'Reliable Support', description: 'Expert assistance and troubleshooting.' },
            { icon: React.createElement(BarChart4, { size: 24 }), title: 'Detailed Reporting', description: 'Comprehensive performance and health insights.' }
        ],
        cta: { text: 'Start Maintenance', link: '#contact', icon: React.createElement(ArrowRight, { size: 24 }) }
    },
    typesOfServices: {
        title: 'Our Maintenance Services',
        subtitle: 'COMPREHENSIVE UPKEEP',
        description: 'Ongoing website maintenance to keep your business online and secure.',
        services: [
            { id: 1, title: 'Security Patches', description: 'Regular software and plugin updates.', icon: React.createElement(Settings2, { size: 24 }) },
            { id: 2, title: 'Performance Tuning', description: 'Speed optimizations and caching.', icon: React.createElement(IconRefresh, { size: 24 }) },
            { id: 3, title: 'Backup & Recovery', description: 'Automated daily backups and restores.', icon: React.createElement(LifeBuoy, { size: 24 }) },
            { id: 4, title: '24/7 Monitoring', description: 'Continuous uptime and error checks.', icon: React.createElement(IconClockHour8, { size: 24 }) },
            { id: 5, title: 'SEO Optimization', description: 'On-page SEO and performance enhancements.', icon: React.createElement(BarChart4, { size: 24 }) },
            { id: 6, title: 'Custom Support Plans', description: 'Tailored maintenance and reporting.', icon: React.createElement(Briefcase, { size: 24 }) }
        ]
    },
    process: {
        title: 'Our Maintenance Process',
        subtitle: 'STEP-BY-STEP',
        description: 'A systematic approach to keep your website healthy and secure.',
        steps: [
            { id: 1, title: 'Audit & Assessment', description: 'Identify issues and improvement areas.' },
            { id: 2, title: 'Implement Updates', description: 'Apply patches, security fixes, and enhancements.' },
            { id: 3, title: 'Monitor & Alert', description: 'Real-time monitoring and notifications.' },
            { id: 4, title: 'Backup & Restore', description: 'Automated backups and recovery testing.' },
            { id: 5, title: 'Report & Optimize', description: 'Monthly health and performance reports.' },
            { id: 6, title: 'Continuous Support', description: 'Ongoing maintenance and improvement.' }
        ]
    },
    techStack: {
        title: 'Our Maintenance Tools',
        subtitle: 'PLATFORMS & SERVICES',
        description: 'Trusted platforms and tools for proactive website maintenance.',
        categories: ['CMS', 'Monitoring', 'Security'],
        technologies: [
            { id: 1, name: 'WordPress', logo: '/tech/icons8-wordpress-96.png', category: 'CMS' },
            { id: 2, name: 'Magento', logo: '/tech/icons8-magento-96.png', category: 'CMS' },
            { id: 3, name: 'New Relic', logo: '/tech/icons8-new-relic-96.png', category: 'Monitoring' },
            { id: 4, name: 'Sucuri', logo: '/tech/icons8-sucuri-96.png', category: 'Security' }
        ]
    },
    cta: {
        title: 'Ready to Secure Your Website?',
        subtitle: 'START MAINTENANCE NOW',
        description: 'Contact us for a comprehensive website maintenance plan tailored to your needs.'
    }
};
