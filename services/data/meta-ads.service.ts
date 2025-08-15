// services/meta-ads.service.ts
import React from 'react';
import { ServiceData } from '../../types/service.types';
import { ServiceIcons } from '../../constants/service-icons';
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';

const {
    IconBrandFacebook,
    IconCurrencyRupee,
    IconClockHour8,
    IconPhoto,
    IconTarget,
    Briefcase,
    BarChart4,
    IconShield,
    IconFreeRights,
    IconPhone,
    IconUsers,
    IconTrendingUp,
    IconStarsFilled,
    IconCertificate,
    IconDeviceMobile,
    IconReportAnalytics,
    IconRocket,
    IconUserPlus,
    IconShoppingCart,
    IconEye,
    IconMapPin,
    IconRefresh,
} = ServiceIcons;

export const metaAdsService: ServiceData = {
    slug: 'meta-ads',
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
        {
            component: Companies,
            position: 'beforeWhyChooseUs'
        },
        {
            component: ProvideServicesTo,
            position: "afterWhyChooseUs",
            props: {
                heading: 'We run Meta Ads for',
                subheading: 'Businesses wanting to reach billions of users on Facebook and Instagram'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'What\'s the difference between Facebook Ads and Meta Ads?',
                        answer: 'Meta Ads is the current name for Facebook\'s advertising platform, covering Facebook, Instagram, Messenger, and WhatsApp. We create integrated campaigns across all Meta platforms to maximize your reach and engagement.',
                        icon: React.createElement(IconBrandFacebook)
                    },
                    {
                        id: '2',
                        question: 'What\'s the minimum budget needed for effective Meta Ads?',
                        answer: 'We recommend starting with at least ₹15,000-25,000 per month for meaningful results. This allows for proper testing of audiences, creatives, and optimization. Higher budgets typically yield better cost efficiency and faster scaling.',
                        icon: React.createElement(IconCurrencyRupee)
                    },
                    {
                        id: '3',
                        question: 'How quickly can I expect to see results from Meta Ads?',
                        answer: 'Initial data and insights appear within 2-3 days. Meaningful results like lead generation and conversions typically show within 1-2 weeks. Full optimization and consistent performance usually develop after 4-6 weeks of testing.',
                        icon: React.createElement(IconClockHour8)
                    },
                    ,
                    {
                        id: '4',
                        question: 'Do you create ad creatives or do we need to provide them?',
                        answer: 'We provide complete creative services including graphic design, video production, copywriting, and A/B testing of different formats. We can also work with your existing brand assets and content.',
                        icon: React.createElement(IconPhoto, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you ensure our ads reach the right audience?',
                        answer: 'We use advanced targeting including demographics, interests, behaviors, custom audiences from your data, lookalike audiences, and retargeting. Our targeting strategies are continuously refined based on performance data.',
                        icon: React.createElement(IconTarget, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What types of businesses see the best results with Meta Ads?',
                        answer: 'E-commerce, local services, B2C brands, real estate, healthcare, education, and restaurants typically see excellent results. However, we\'ve successfully run campaigns for B2B companies and professional services as well.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'How do you track and measure campaign performance?',
                        answer: 'We track metrics like reach, engagement, click-through rates, cost per click, cost per lead, conversion rates, and return on ad spend (ROAS). You get detailed weekly reports and real-time access to performance dashboards.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'Can you help if our Meta Ads account was banned or restricted?',
                        answer: 'Yes, we have extensive experience with account recovery, policy compliance, and preventing future restrictions. We also help set up backup ad accounts and implement best practices to avoid policy violations.',
                        icon: React.createElement(IconShield, { size: 24 })
                    }
                ],
                heading: {
                    part1: 'Meta Ads ',
                    part2: 'FAQs'
                }
            }
        }
    ],
    hero: {
        initial: "Want ",
        headlineKeywords: [
            "More Sales?",
            "Quality Leads?",
            "Brand Awareness?",
            "App Installs?",
            "Website Traffic?",
            "Customer Growth?"
        ],
        brandLine: [
            { text: "Meta Ads Management", gradient: false }
        ],
        subheadline: "Professional Facebook and Instagram advertising that reaches your ideal customers with precision targeting, compelling creatives, and optimized campaigns that deliver real business results.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Audit", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconUsers, { size: 34 }),
                title: "3B+ Reach",
                description: "Meta platform users"
            },
            {
                icon: React.createElement(IconTrendingUp, { size: 34 }),
                title: "4.5x Avg.",
                description: "ROI for our clients"
            },
            {
                icon: React.createElement(IconTarget, { size: 34 }),
                title: "0.8% CTR",
                description: "Average click rate"
            },
            {
                icon: React.createElement(IconStarsFilled, { size: 34 }),
                title: "Meta Certified",
                description: "Expert team"
            }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ', gradient: false },
            { text: 'Meta Ads', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: ' Management?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconCertificate, { size: 24 }),
                title: 'Meta Certified Experts',
                description: 'Our team holds official Meta Blueprint certifications and stays updated with the latest algorithm changes, policy updates, and advertising best practices for maximum campaign performance.'
            },
            {
                icon: React.createElement(IconTarget, { size: 24 }),
                title: 'Advanced Audience Targeting',
                description: 'We create highly specific audience segments using demographics, interests, behaviors, custom audiences from your data, and lookalike audiences to reach people most likely to convert.'
            },
            {
                icon: React.createElement(IconPhoto, { size: 24 }),
                title: 'High-Converting Creative Assets',
                description: 'Our in-house design team creates scroll-stopping visuals, engaging videos, and persuasive ad copy that aligns with your brand and drives action across Facebook and Instagram.'
            },
            {
                icon: React.createElement(BarChart4, { size: 24 }),
                title: 'Data-Driven Optimization',
                description: 'We continuously analyze performance metrics, conduct A/B tests, and optimize campaigns based on real data to improve cost efficiency and maximize your return on ad spend.'
            },
            {
                icon: React.createElement(IconDeviceMobile, { size: 24 }),
                title: 'Mobile-First Approach',
                description: 'All our ads are designed for mobile users first, ensuring optimal viewing experience and higher engagement rates since 95% of Facebook users access via mobile devices.'
            },
            {
                icon: React.createElement(IconReportAnalytics, { size: 24 }),
                title: 'Transparent Reporting',
                description: 'Get detailed weekly reports showing ad performance, audience insights, cost breakdowns, and actionable recommendations. Plus real-time access to your campaign dashboards.'
            },
        ],
        cta: {
            text: 'Start Meta Advertising',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
        }
    },
    typesOfServices: {
        title: 'Our Meta Ads Services',
        subtitle: 'FACEBOOK & INSTAGRAM ADVERTISING',
        description: 'Complete Meta advertising solutions designed to achieve your specific business objectives across Facebook and Instagram platforms.',
        services: [
            {
                id: 1,
                title: 'Lead Generation Campaigns',
                description: 'Targeted campaigns designed to capture high-quality leads with optimized lead forms, compelling offers, and precise audience targeting to maximize conversion rates and minimize cost per lead.',
                icon: React.createElement(IconUserPlus, { size: 24 })
            },
            {
                id: 2,
                title: 'E-commerce & Sales Campaigns',
                description: 'Dynamic product ads, retargeting campaigns, and conversion-optimized ads that drive online sales with advanced features like catalog integration and abandoned cart recovery.',
                icon: React.createElement(IconShoppingCart, { size: 24 })
            },
            {
                id: 3,
                title: 'Brand Awareness & Reach',
                description: 'Strategic campaigns designed to increase brand visibility, reach new audiences, and build brand recognition using video ads, carousel formats, and engagement-focused creative strategies.',
                icon: React.createElement(IconEye, { size: 24 })
            },
            {
                id: 4,
                title: 'App Promotion & Installs',
                description: 'Specialized mobile app advertising campaigns that drive app downloads, in-app events, and user engagement with app-specific ad formats and optimization techniques.',
                icon: React.createElement(IconDeviceMobile, { size: 24 })
            },
            {
                id: 5,
                title: 'Local Business Advertising',
                description: 'Location-based campaigns for local businesses including store visits, local awareness ads, and geo-targeted promotions to drive foot traffic and local customer acquisition.',
                icon: React.createElement(IconMapPin, { size: 24 })
            },
            {
                id: 6,
                title: 'Retargeting & Custom Audiences',
                description: 'Advanced retargeting campaigns using website visitors, email lists, and engagement data to re-engage warm prospects and convert them into customers with personalized messaging.',
                icon: React.createElement(IconRefresh, { size: 24 })
            }
        ]
    },
    process: {
        title: 'Our Meta Ads Process',
        subtitle: 'STRATEGIC CAMPAIGN MANAGEMENT',
        description: 'A systematic approach to creating, launching, and optimizing high-performing Meta advertising campaigns.',
        steps: [
            {
                id: 1,
                title: 'Strategy & Audience Research',
                description: 'We begin with a deep-dive discovery phase to understand your brand, business goals, target audience demographics, psychographics, and buying behavior. Through competitor benchmarking and market analysis, we craft a data-driven Meta Ads strategy with clearly defined KPIs, targeting options, messaging direction, and performance benchmarks.'
            },
            {
                id: 2,
                title: 'Campaign Setup & Structure',
                description: 'We create a robust campaign architecture using Meta Business Suite, ensuring proper account hygiene, pixel implementation, event tracking, and conversion API setup. Each campaign is structured with defined objectives (traffic, leads, conversions, etc.), tailored ad sets, and customized audiences, including lookalike, custom, and retargeting segments—supported by an efficient budget allocation strategy.'
            },
            {
                id: 3,
                title: 'Creative Development & Testing',
                description: 'Our team designs and tests multiple ad formats—carousel, single image, video, reels, and dynamic creatives. We focus on compelling copywriting, persuasive CTAs, scroll-stopping visuals, and platform-specific design principles. Creatives are aligned with user intent and campaign goals, and are A/B tested for variables such as headline, visual, description, and CTA performance.'
            },
            {
                id: 4,
                title: 'Launch & Initial Optimization',
                description: 'Once live, campaigns are monitored hourly for delivery issues, cost fluctuations, and early engagement signals. We quickly optimize bidding strategies, placements, targeting, and creative elements based on CTR, CPC, relevance score, and engagement metrics. This early-stage iteration phase ensures that campaigns are performing efficiently from day one.'
            },
            {
                id: 5,
                title: 'Performance Analysis & Scaling',
                description: 'Using real-time dashboards and Meta Ads Manager insights, we identify winning ad sets and scale them via vertical scaling (increasing budget) and horizontal scaling (duplicating and testing with new audiences or creatives). Underperforming assets are paused or modified, and we continuously test new variations to maintain high ROAS and improve customer acquisition costs.'
            },
            {
                id: 6,
                title: 'Reporting & Strategy Evolution',
                description: 'We provide weekly and monthly performance reports detailing reach, engagement, cost per result, conversion value, attribution analysis, and ROI. Based on insights, we adapt our strategy to reflect seasonality, algorithm updates, and shifting audience behavior—ensuring that your Meta Ads campaigns remain agile, aligned with business goals, and future-ready.'
            }
        ]
    },
    testimonials: {
        title: [
            { text: 'Meta Ads ', gradient: false },
            { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        description: 'Real results from businesses that chose our Meta advertising expertise',
        testimonials: [
            {
                id: '1',
                message: 'Our e-commerce sales tripled within 3 months of working with DigiAerotech. Their Meta Ads strategy and creative approach generated a consistent 6x ROAS across Facebook and Instagram campaigns.',
                highlight: 'sales tripled with 6x ROAS',
                stars: 5,
                name: 'Anjali Reddy',
                designation: 'E-commerce Manager',
                company: 'Fashion Boutique Online'
            },
            {
                id: '2',
                message: 'The lead quality from their Facebook campaigns is incredible - 40% of leads convert to paying customers. Their targeting expertise and lead nurturing approach has transformed our business growth.',
                highlight: '40% of leads convert to paying customers',
                stars: 5,
                name: 'Rajesh Kumar',
                designation: 'Business Owner',
                company: 'Real Estate Services'
            },
            {
                id: '3',
                message: 'DigiAerotech reduced our cost per app install by 70% while increasing install quality. Their mobile-first approach and creative testing methodology delivers consistent results for our mobile app.',
                highlight: 'reduced cost per install by 70%',
                stars: 5,
                name: 'Priya Nair',
                designation: 'Growth Manager',
                company: 'EdTech Startup'
            }
        ]
    },
    cta: {
        title: 'Ready to Dominate Facebook & Instagram?',
        subtitle: 'START YOUR META ADS CAMPAIGN',
        description: 'Contact us for a free Meta Ads audit and customized advertising strategy for your business.'
    }
};