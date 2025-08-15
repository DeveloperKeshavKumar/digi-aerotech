import React from 'react';
import { ServiceData } from "@/types/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';
const { IconAd, IconBrandGoogle, IconBrandInstagram, IconChartBar, IconClockHour8, IconEdit, IconFreeRights, IconMail, IconPhone, IconRocket, IconStarsFilled, IconTarget, IconTrendingUp, IconUsers, IconWorld, Briefcase, IconPackage, BarChart4, Settings2 } = ServiceIcons;

export const digitalMarketingService: ServiceData = {
    slug: '360-digital-marketing',
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
            position: "afterWhyChooseUs",
            props: {
                heading: 'We provide 360° Digital Marketing for',
                subheading: 'Businesses seeking complete digital transformation and growth'
            }
        },
        {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'What exactly is 360° Digital Marketing and how is it different?',
                            answer: 'Our 360° approach covers every digital touchpoint - from SEO and social media to paid ads, email marketing, and analytics. Unlike agencies that focus on single channels, we create integrated campaigns where all strategies work together to maximize ROI and brand consistency.',
                            icon: React.createElement(IconWorld, { size: 24 })
                        },
                        {
                            id: '2',
                            question: 'How long does it take to see results with a complete digital strategy?',
                            answer: 'Initial improvements in website traffic and engagement typically appear within 4-6 weeks. Significant growth in leads, conversions, and brand visibility usually develops after 3-6 months as all channels begin working synergistically together.',
                            icon: React.createElement(IconClockHour8, { size: 24 })
                        },
                        {
                            id: '3',
                            question: 'Do you work with businesses in specific industries only?',
                            answer: 'We serve businesses across all industries - from startups to enterprises, B2B services, e-commerce, healthcare, real estate, education, and more. Our strategies are customized based on your industry dynamics and target audience behavior.',
                            icon: React.createElement(Briefcase, { size: 24 })
                        },
                        {
                            id: '4',
                            question: 'What\'s included in your monthly digital marketing package?',
                            answer: 'Our comprehensive packages include SEO optimization, social media management, paid advertising, content creation, email campaigns, analytics reporting, and strategic consultations. Everything is tailored to your business goals and budget.',
                            icon: React.createElement(IconPackage, { size: 24 })
                        },
                        {
                            id: '5',
                            question: 'How do you measure and report the success of campaigns?',
                            answer: 'We provide detailed monthly reports showing website traffic, lead generation, conversion rates, social engagement, ad performance, and ROI. You\'ll get real-time access to dashboards tracking all key metrics and campaign performance.',
                            icon: React.createElement(BarChart4, { size: 24 })
                        },
                        {
                            id: '6',
                            question: 'Can you handle our digital marketing if we have an in-house team?',
                            answer: 'Absolutely! We can work as an extension of your team, handling specific channels while collaborating on overall strategy. Many clients use us to fill skill gaps or manage overflow work while their team focuses on core business activities.',
                            icon: React.createElement(IconUsers, { size: 24 })
                        },
                        {
                            id: '7',
                            question: 'What makes your 360° approach more effective than single-channel marketing?',
                            answer: 'Integrated marketing amplifies results - when SEO, social media, ads, and email work together, each channel reinforces the others. This creates consistent messaging, better customer journey mapping, and typically 40-60% better ROI than isolated campaigns.',
                            icon: React.createElement(IconTrendingUp, { size: 24 })
                        },
                        {
                            id: '8',
                            question: 'Do you provide ongoing strategy optimization and consultation?',
                            answer: 'Yes, digital marketing requires constant optimization. We provide monthly strategy reviews, quarterly business consultations, and ongoing campaign adjustments based on performance data and market changes to ensure continued growth.',
                            icon: React.createElement(Settings2, { size: 24 })
                        }
                    ],
                    heading: {
                        part1: '360° Marketing ',
                        part2: 'FAQs'
                    }
                }
            },
        {
            component: WhoWeWorkWith,
            props: {
                title: "Who we work for",
                description: "",
                className: "relative -skew-y-3 hover:scale-112 transition-all duration-500 ease-in-out shadow-lg rounded-2xl border-t border-border dark:border-gray-800",
            },
            position: 'beforeProcess'
        },
        {
            component: Struggles,
            props: {
                title: [
                    { text: "We're Not Just a " },
                    { text: 'Marketing Team', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
                    { text: " — We're the Solution to " },
                    { text: "Your Growth Blocks", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
                ],
                subheadline: "Forget vanity metrics. We focus on what matters - leads, conversions, visibility, and real business impact.",
                painPoints: [
                    "Wasting money on ads that don't convert",
                    "Website traffic but zero inquiries",
                    "Low visibility on Google and Maps",
                    "Inconsistent or lifeless social media presence",
                    "Working with agencies that overpromise and underdeliver",
                    "Doing everything yourself with no time to scale"
                ],
                solutionPoints: [
                    "Laser-focused ad campaigns that attract qualified leads",
                    "Landing pages and websites built to convert",
                    "Top rankings on Google Search and Maps through local SEO",
                    "Magnetic social content that drives brand engagement",
                    "A proactive team that executes, reports, and iterates",
                    "We handle your entire marketing engine so you can lead your business"
                ],
                cta: { icon: React.createElement(ArrowRight), text: " Let's Solve This Together", link: "/contact" }
            },
            position: 'beforeWhyChooseUs'
        }
    ],
    hero: {
        initial: "Need ",
        headlineKeywords: [
            "Complete Growth?",
            "More Leads?",
            "Better ROI?",
            "Brand Visibility?",
            "Digital Success?",
            "Market Dominance?"
        ],
        brandLine: [
            { text: "360° Digital Marketing", gradient: false, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        subheadline: "Comprehensive digital marketing strategies that cover every channel and touchpoint. From SEO to social media, paid ads to email marketing - we handle it all to maximize your online growth and ROI.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Strategy", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconTrendingUp, { size: 34 }),
                title: "300% Avg. ROI",
                description: "Across all channels"
            },
            {
                icon: React.createElement(IconUsers, { size: 34 }),
                title: "500+ Clients",
                description: "Successfully served"
            },
            {
                icon: React.createElement(IconWorld, { size: 34 }),
                title: "15+ Modes",
                description: "Integrated approach"
            },
            {
                icon: React.createElement(IconStarsFilled, { size: 34 }),
                title: "4.9/5 Rating",
                description: "Client satisfaction"
            }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ', gradient: false },
            { text: '360° Digital', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: ' Marketing?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconWorld, { size: 24 }),
                title: 'Complete Digital Ecosystem',
                description: 'We don\'t just run individual campaigns - we create integrated digital ecosystems where SEO, social media, paid ads, email, and content marketing work together synergistically for maximum impact.'
            },
            {
                icon: React.createElement(IconTarget, { size: 24 }),
                title: 'Data-Driven Decision Making',
                description: 'Every strategy is backed by comprehensive market research, competitor analysis, and performance data. We use advanced analytics to continuously optimize campaigns for better ROI and conversion rates.'
            },
            {
                icon: React.createElement(IconUsers, { size: 24 }),
                title: 'Customer Journey Mapping',
                description: 'We map your complete customer journey from awareness to conversion, ensuring consistent messaging and optimal touchpoints across all digital channels to maximize lead quality and sales velocity.'
            },
            {
                icon: React.createElement(IconBrandGoogle, { size: 24 }),
                title: 'Multi-Channel Expertise',
                description: 'Our team includes certified specialists in Google Ads, Facebook Marketing, SEO, email automation, and content strategy. You get expert-level execution across every digital marketing channel.'
            },
            {
                icon: React.createElement(IconChartBar, { size: 24 }),
                title: 'Transparent Performance Tracking',
                description: 'Real-time dashboards and detailed monthly reports show exactly how each channel performs. You\'ll see leads generated, conversion rates, cost-per-acquisition, and overall ROI with complete transparency.'
            },
            {
                icon: React.createElement(IconRocket, { size: 24 }),
                title: 'Scalable Growth Strategies',
                description: 'Our 360° approach is designed to scale with your business. As you grow, we adjust strategies, budgets, and channels to maintain optimal performance and capture new market opportunities.'
            },
        ],
        cta: {
            text: 'Start Your 360° Growth',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
        }
    },
    typesOfServices: {
        title: 'Our 360° Digital Marketing Services',
        subtitle: 'COMPLETE DIGITAL SOLUTIONS',
        description: 'Comprehensive digital marketing services that work together to create a powerful online presence and drive sustainable business growth.',
        services: [
            {
                id: 1,
                title: 'Social Media Marketing',
                description: 'Grow your brand organically with platform-specific content strategies, consistent posting, audience engagement, and influencer collaborations across Instagram, Facebook, LinkedIn, and more.',
                icon: React.createElement(IconBrandInstagram, { size: 24 })
            },
            {
                id: 2,
                title: 'Meta Ads',
                description: 'Drive conversions with high-impact Meta Ads on Facebook and Instagram—featuring precise targeting, engaging creatives, A/B testing, and retargeting funnels.',
                icon: React.createElement(IconAd, { size: 24 })
            },
            {
                id: 3,
                title: 'Google Ads',
                description: 'Get instant visibility on Google with expertly managed Search, Display, Shopping, and YouTube campaigns, optimized for clicks, conversions, and ROI.',
                icon: React.createElement(IconBrandGoogle, { size: 24 })
            },
            {
                id: 4,
                title: 'Pay-Per-Click Advertising',
                description: 'Launch results-driven Pay-Per-Click campaigns across multiple ad platforms with advanced keyword targeting, competitor analysis, and real-time optimization.',
                icon: React.createElement(IconChartBar, { size: 24 })
            },
            {
                id: 5,
                title: 'Leads and Sales Funnel',
                description: 'Build a high-converting sales funnel using lead magnets, nurturing sequences, automation, and retargeting to move prospects from awareness to purchase.',
                icon: React.createElement(IconMail, { size: 24 })
            },
            {
                id: 6,
                title: 'Landing Page Development',
                description: 'Design and develop custom landing pages optimized for speed, responsiveness, and conversion—tailored to match campaign goals and audience intent.',
                icon: React.createElement(IconEdit  , { size: 24 })
            }
        ]
    },
    process: {
        title: 'Our 360° Marketing Process',
        subtitle: 'STRATEGIC METHODOLOGY',
        className: 'border-t border-border dark:border-gray-700',
        description: 'A proven systematic approach to building and executing comprehensive digital marketing strategies that deliver measurable results.',
        steps: [
            {
                id: 1,
                title: 'Business Discovery & Audit',
                description: 'Comprehensive analysis of your business, competitors, target audience, and current digital presence. We identify opportunities, gaps, and create a strategic foundation for growth.'
            },
            {
                id: 2,
                title: 'Strategic Planning & Goal Setting',
                description: 'Development of integrated marketing strategy with clear objectives, KPIs, budget allocation, and timeline. We align all channels to work cohesively toward your business goals.'
            },
            {
                id: 3,
                title: 'Multi-Channel Campaign Launch',
                description: 'Simultaneous implementation across chosen channels - SEO optimization, ad campaigns, social media, email sequences, and content marketing - with coordinated messaging and timing.'
            },
            {
                id: 4,
                title: 'Performance Monitoring & Optimization',
                description: 'Continuous tracking of all channels with weekly optimization adjustments. We analyze cross-channel data to identify top-performing strategies and reallocate resources accordingly.'
            },
            {
                id: 5,
                title: 'Reporting & Strategic Review',
                description: 'Monthly comprehensive reports showing performance across all channels, ROI analysis, and strategic recommendations. Quarterly reviews ensure long-term strategy alignment.'
            },
            {
                id: 6,
                title: 'Scale & Expansion',
                description: 'Based on performance data, we scale successful campaigns, test new channels, and expand into additional markets or audience segments for continued growth.'
            }
        ]
    },
    techStack: {
        title: 'Our Marketing Technology Stack',
        subtitle: 'ADVANCED TOOLS & PLATFORMS',
        description: 'We use industry-leading tools and platforms to execute, monitor, and optimize your digital marketing campaigns.',
        categories: ['Analytics', 'Advertising', 'Automation', 'SEO Tools'],
        technologies: [
            { id: 1, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
            { id: 2, name: 'Google Ads', logo: '/tech/icons8-google-ads-96.png', category: 'Advertising' },
            { id: 3, name: 'Meta Ads', logo: '/tech/icons8-meta-96.png', category: 'Advertising' },
            { id: 4, name: 'HubSpot', logo: '/tech/icons8-hubspot-96.png', category: 'Automation' },
            { id: 5, name: 'Mailchimp', logo: '/tech/icons8-mailchimp-96.png', category: 'Automation' },
            { id: 6, name: 'SEMrush', logo: '/tech/icons8-semrush-96.png', category: 'SEO Tools' },
            { id: 7, name: 'Ahrefs', logo: '/tech/icons8-ahrefs-96.png', category: 'SEO Tools' },
            { id: 8, name: 'Hootsuite', logo: '/tech/icons8-hootsuite-96.png', category: 'Automation' }
        ]
    },
    testimonials: {
        title: [
            { text: '360° Marketing ', gradient: false },
            { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        description: 'Real results from businesses that chose our comprehensive digital marketing approach',
        testimonials: [
            {
                id: '1',
                message: 'DigiAerotech\'s 360° approach transformed our entire digital presence. Within 6 months, our website traffic increased 400%, leads grew by 250%, and our revenue doubled. Their integrated strategy works!',
                highlight: 'revenue doubled within 6 months',
                stars: 5,
                name: 'Amit Gupta',
                designation: 'CEO',
                company: 'Manufacturing Solutions Ltd.'
            },
            {
                id: '2',
                message: 'The comprehensive digital strategy created perfect synergy between our SEO, social media, and paid ads. Our cost per lead dropped by 60% while lead quality improved dramatically. Best investment we\'ve made.',
                highlight: 'cost per lead dropped by 60%',
                stars: 5,
                name: 'Riya Sharma',
                designation: 'Marketing Director',
                company: 'HealthTech Startup'
            },
            {
                id: '3',
                message: 'Working with DigiAerotech feels like having an entire marketing department. Their 360° service covers everything from strategy to execution. Our brand visibility and customer acquisition have never been better.',
                highlight: 'brand visibility and customer acquisition have never been better',
                stars: 5,
                name: 'Vikash Patel',
                designation: 'Founder',
                company: 'E-learning Platform'
            }
        ]
    },
    cta: {
        title: 'Ready for Complete Digital Transformation?',
        subtitle: 'START YOUR 360° JOURNEY',
        description: 'Contact us for a comprehensive digital marketing audit and customized growth strategy for your business.'
    }
};