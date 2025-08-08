import React from 'react';
import { ServiceData } from "@/types/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconDeviceMobile, IconCode, IconClockHour8, IconRocket, IconUsers, IconShield, BarChart4, Settings2 } = ServiceIcons;

export const mobileDevelopmentService: ServiceData = {
    slug: 'mobile-apps-development',
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
        {
            component: Companies,
            position: 'beforeWhyChooseUs'
        },
        {
            component: ProvideServicesTo,
            position: 'afterWhyChooseUs',
            props: {
                heading: 'We provide Mobile App Development for',
                subheading: 'Businesses seeking engaging mobile experiences'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'What platforms do you develop apps for?',
                        answer: 'We build native iOS and Android apps as well as cross-platform solutions using React Native and Flutter to maximize reach and performance.',
                        icon: React.createElement(IconDeviceMobile, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How long does it take to launch a mobile app?',
                        answer: 'Typical mobile app projects take 8–12 weeks from discovery to release, based on complexity, features, and review cycles.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Do you provide app store submission support?',
                        answer: 'Yes, we handle App Store and Play Store submissions, metadata optimization, compliance checks, and ongoing version updates.',
                        icon: React.createElement(IconRocket, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Can you maintain and update the app post-launch?',
                        answer: 'Our maintenance plans include feature enhancements, bug fixes, and OS compatibility updates to keep your app running smoothly.',
                        icon: React.createElement(Settings2, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you optimize mobile app performance?',
                        answer: 'We use code profiling, lazy loading, asset optimization, and native performance tools to ensure fast, smooth user experiences.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What security best practices are integrated into app development?',
                        answer: 'We implement secure authentication, data encryption, OWASP Mobile Top 10 compliance, and regular security audits to safeguard user data.',
                        icon: React.createElement(Settings2, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'How is user data privacy handled?',
                        answer: 'We ensure GDPR and CCPA compliance, secure data storage, and transparent consent flows to protect user privacy and build trust.',
                        icon: React.createElement(IconShield, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'Can the app integrate with third-party APIs and services?',
                        answer: 'We offer robust integrations with payment gateways, social media, analytics, and custom APIs to extend functionality and data insights.',
                        icon: React.createElement(IconUsers, { size: 24 })
                    }
                ],
                heading: {
                    part1: 'Mobile App ',
                    part2: 'FAQs'
                }
            }
        }
    ],
    hero: {
        initial: 'Ready for ',
        headlineKeywords: [
            'iOS Apps?',
            'Android Apps?',
            'Cross-Platform Apps?',
            'React Native?',
            'Flutter Apps?'
        ],
        brandLine: [
            { text: 'Mobile App Development', gradient: false }
        ],
        subheadline: 'Custom mobile solutions that engage users and drive business growth.',
        ctaButtons: [
            { icon: React.createElement(IconRocket, { size: 30 }), text: 'Get Free Consultation', link: '/contact' }
        ],
        stats: [
            { icon: React.createElement(IconDeviceMobile, { size: 34 }), title: '50+ Apps', description: 'Launched Successfully' },
            { icon: React.createElement(IconUsers, { size: 34 }), title: '100k+ Avg.', description: 'Downloads in platforms' },
            { icon: React.createElement(IconClockHour8, { size: 34 }), title: 'Fast Delivery', description: '8-12 weeks acc. to app' },
            { icon: React.createElement(BarChart4, { size: 34 }), title: '4.8/5 Rating', description: 'Client Satisfaction' }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ' },
            { text: 'Mobile Development', gradient: true, gradientClass: 'from-blue-500 via-green-500 to-teal-500' }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconCode, { size: 24 }),
                title: 'Clean & Scalable Code',
                description: 'Maintained best practices for performance and architecture.'
            },
            {
                icon: React.createElement(IconUsers, { size: 24 }),
                title: 'User-Centric Design',
                description: 'Intuitive interfaces that maximize engagement.'
            },
            {
                icon: React.createElement(Settings2, { size: 24 }),
                title: 'Maintenance & Support',
                description: 'Ongoing updates and feature enhancements.'
            }
        ],
        cta: { text: 'Start Your App Project', link: '#contact', icon: React.createElement(IconRocket, { size: 24 }) }
    },
    typesOfServices: {
        title: 'Our Mobile Development Services',
        subtitle: 'APP SOLUTIONS',
        description: 'Full-cycle mobile app creation from concept to launch.',
        services: [
            { id: 1, title: 'Native iOS Development', description: 'Swift-powered apps optimized for Apple devices.', icon: React.createElement(IconCode, { size: 24 }) },
            { id: 2, title: 'Native Android Development', description: 'Kotlin & Java for high-performance Android apps.', icon: React.createElement(IconCode, { size: 24 }) },
            { id: 3, title: 'Cross-Platform Apps', description: 'React Native & Flutter solutions for multiple platforms.', icon: React.createElement(IconDeviceMobile, { size: 24 }) },
            { id: 4, title: 'UI/UX Design', description: 'User-centric designs for engaging mobile experiences.', icon: React.createElement(IconUsers, { size: 24 }) },
            { id: 5, title: 'App Maintenance & Updates', description: 'Ongoing support, version upgrades, and bug fixes.', icon: React.createElement(Settings2, { size: 24 }) },
            { id: 6, title: 'Analytics & Reporting', description: 'In-app analytics integration and performance insights.', icon: React.createElement(BarChart4, { size: 24 }) }
        ]
    },
    process: {
        title: 'Our Mobile App Process',
        subtitle: 'STEP-BY-STEP',
        description: 'A proven approach to deliver reliable mobile applications.',
        steps: [
            { id: 1, title: 'Discovery & Planning', description: 'Define scope, features, and user personas.' },
            { id: 2, title: 'Design & Prototyping', description: 'Wireframes and interactive mockups.' },
            { id: 3, title: 'Development & Testing', description: 'Agile builds with continuous QA.' },
            { id: 4, title: 'Deployment & Launch', description: 'App Store & Play Store submission.' },
            { id: 5, title: 'Monitor & Optimize', description: 'Performance tracking and updates.' },
            { id: 6, title: 'Continuous Improvement', description: 'Iterative enhancements and ongoing support.' }
        ]
    },
    techStack: {
        title: 'Our Mobile Tech Stack',
        subtitle: 'TOOLS & FRAMEWORKS',
        description: 'Industry-leading technologies for robust app development.',
        categories: ['Native', 'Cross-Platform', 'Tools'],
        technologies: [
            { id: 1, name: 'Swift', logo: '/tech/icons8-swift-96.png', category: 'Native' },
            { id: 2, name: 'Kotlin', logo: '/tech/icons8-kotlin-96.png', category: 'Native' },
            { id: 3, name: 'React Native', logo: '/tech/icons8-react-native-96.png', category: 'Cross-Platform' },
            { id: 4, name: 'Flutter', logo: '/tech/icons8-flutter-96.png', category: 'Cross-Platform' }
        ]
    },
    testimonials: {
        title: [
            { text: 'Mobile App ' },
            { text: 'Success Stories', gradient: true, gradientClass: 'from-blue-500 via-green-500 to-teal-500' }
        ],
        description: 'Hear from our satisfied clients.',
        testimonials: [
            { id: '1', message: 'They built our iOS app from scratch and delivered exceptional quality within 10 weeks. User feedback has been phenomenal!', highlight: '', stars: 5, name: 'Aisha Patel', designation: 'Product Manager', company: 'HealthTech Co.' },
            { id: '2', message: 'The cross-platform app works flawlessly on both iOS and Android. We saw a 40% increase in user engagement.', highlight: '', stars: 5, name: 'Manish Gupta', designation: ' CTO', company: 'EduGames' }
        ]
    },
    cta: {
        title: 'Ready to Build Your Mobile App?',
        subtitle: 'LAUNCH YOUR APP NOW',
        description: 'Contact us for a custom mobile app solution tailored to your business needs.'
    }
};
