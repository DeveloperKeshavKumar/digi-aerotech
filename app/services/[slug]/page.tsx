"use client";
import React, { useRef, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { inView } from 'motion';
import { WhyChooseUs } from '@/components/homepage/why-choose-us';
import { TypesOfServices } from '@/components/services/types-of-services';
import { Process } from '@/components/services/process';
import { TechStack } from '@/components/services/tech-stack';
import { Testimonials } from '@/components/homepage/testimonials';
import { CTA } from '@/components/services/cta-section';
import {
    IconCode,
    IconDeviceMobile,
    IconBrandReact,
    IconBrush,
    IconDeviceDesktop,
    IconShoppingCart,
    IconBrandWordpress,
    IconTools,
    IconMovie,
    IconFreeRights,
    IconPhone,
    IconStarsFilled,
    IconRocket,
    IconSpeakerphone,
    IconFriends,
    IconClockHour8,
    IconBrandInstagram,
    IconPhoto,
    IconCalendar,
    IconCurrencyDollar,
    IconChartBar,
    IconUsers,
    IconTarget,
    IconTrendingUp,
    IconPhotoEdit,
    IconMessageCircle,
    IconAd,
    IconReportAnalytics,
    IconStar,
    IconAnalyze,
    IconAlertCircle,
    IconMail,
    IconBuildingStore,
    IconMapPin,
    IconBrandGoogle,
    IconList,
    IconBuilding,
    IconSearch,
    IconEdit,
    IconLink,
    IconBrandYoutube,
    IconBrandX,
    IconBrandPinterest,
    IconBrandTiktok,
    IconBrandLinkedin,
    IconBrandSnapchat,
    IconRefresh,
    IconWorld,
    IconCertificate,
    IconCurrencyRupee,
    IconVideo,
    IconShield,
    IconKey,
    IconEye,
    IconUserPlus,
    IconBrandFacebook,
    IconPackage,
} from '@tabler/icons-react';
import { Hero } from '@/components/homepage/hero';
import { TechDiff } from '@/components/services/web-dev-design/tech-diff';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { Companies } from '@/components/homepage/companies';
import { FaqSection } from '@/components/services/faq-section';
import { BarChart4, Briefcase, Brush, Code2, GaugeCircle, LayoutGrid, LifeBuoy, SearchCode, ServerCog, Settings2, ShoppingBag } from 'lucide-react';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';

interface StatsProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
}

interface CTAButton {
    icon?: React.ReactNode;
    text: string;
    link: string;
    variant?: 'primary' | 'secondary';
}

interface CustomSection {
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

// Define the service data type with required properties
interface ServiceData {
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
    hero: {
        initial: string;
        headlineKeywords: string[];
        brandLine: string | { text: string; gradient?: boolean; gradientClass?: string }[];
        subheadline: string;
        ctaButtons: CTAButton[];
        stats: StatsProps[];
    };
    whyChooseUs: {
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
    typesOfServices: {
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
    process: {
        title: string;
        subtitle: string;
        description: string;
        className?: string
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
    testimonials: {
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
    cta: {
        title: string;
        subtitle?: string;
        description: string;
        backgroundColor?: string;
    };
}

// Define available services
const services: Record<string, ServiceData> = {
    '360-digital-marketing': {
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
                            icon: <IconWorld />
                        },
                        {
                            id: '2',
                            question: 'How long does it take to see results with a complete digital strategy?',
                            answer: 'Initial improvements in website traffic and engagement typically appear within 4-6 weeks. Significant growth in leads, conversions, and brand visibility usually develops after 3-6 months as all channels begin working synergistically together.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '3',
                            question: 'Do you work with businesses in specific industries only?',
                            answer: 'We serve businesses across all industries - from startups to enterprises, B2B services, e-commerce, healthcare, real estate, education, and more. Our strategies are customized based on your industry dynamics and target audience behavior.',
                            icon: <Briefcase />
                        },
                        {
                            id: '4',
                            question: 'What\'s included in your monthly digital marketing package?',
                            answer: 'Our comprehensive packages include SEO optimization, social media management, paid advertising, content creation, email campaigns, analytics reporting, and strategic consultations. Everything is tailored to your business goals and budget.',
                            icon: <IconPackage />
                        },
                        {
                            id: '5',
                            question: 'How do you measure and report the success of campaigns?',
                            answer: 'We provide detailed monthly reports showing website traffic, lead generation, conversion rates, social engagement, ad performance, and ROI. You\'ll get real-time access to dashboards tracking all key metrics and campaign performance.',
                            icon: <BarChart4 />
                        },
                        {
                            id: '6',
                            question: 'Can you handle our digital marketing if we have an in-house team?',
                            answer: 'Absolutely! We can work as an extension of your team, handling specific channels while collaborating on overall strategy. Many clients use us to fill skill gaps or manage overflow work while their team focuses on core business activities.',
                            icon: <IconUsers />
                        },
                        {
                            id: '7',
                            question: 'What makes your 360° approach more effective than single-channel marketing?',
                            answer: 'Integrated marketing amplifies results - when SEO, social media, ads, and email work together, each channel reinforces the others. This creates consistent messaging, better customer journey mapping, and typically 40-60% better ROI than isolated campaigns.',
                            icon: <IconTrendingUp />
                        },
                        {
                            id: '8',
                            question: 'Do you provide ongoing strategy optimization and consultation?',
                            answer: 'Yes, digital marketing requires constant optimization. We provide monthly strategy reviews, quarterly business consultations, and ongoing campaign adjustments based on performance data and market changes to ensure continued growth.',
                            icon: <Settings2 />
                        }
                    ],
                    heading: {
                        part1: '360° Marketing ',
                        part2: 'FAQs'
                    }
                }
            }, {
                component: WhoWeWorkWith,
                props: {
                    title: "",
                    description: "",
                    className: "relative -skew-y-3 hover:scale-112 transition-all duration-500 ease-in-out shadow-lg rounded-2xl border-t border-border dark:border-gray-800",
                },
                position: 'beforeProcess'
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
                { text: "360° Digital Marketing", gradient: false, gradientClass: "from-orange-600 via-pink-500 to-red-500" }
            ],
            subheadline: "Comprehensive digital marketing strategies that cover every channel and touchpoint. From SEO to social media, paid ads to email marketing - we handle it all to maximize your online growth and ROI.",
            ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Free Strategy", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconTrendingUp size={34} />,
                    title: "300% Avg ROI",
                    description: "Across all channels"
                },
                {
                    icon: <IconUsers size={34} />,
                    title: "500+ Clients",
                    description: "Successfully served"
                },
                {
                    icon: <IconWorld size={34} />,
                    title: "15+ Modes",
                    description: "Integrated approach"
                },
                {
                    icon: <IconStarsFilled size={34} />,
                    title: "4.9/5 Rating",
                    description: "Client satisfaction"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: '360° Digital', gradient: true, gradientClass: 'from-red-600 via-pink-500 to-orange-500' },
                { text: ' Marketing?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconWorld size={24} />,
                    title: 'Complete Digital Ecosystem',
                    description: 'We don\'t just run individual campaigns - we create integrated digital ecosystems where SEO, social media, paid ads, email, and content marketing work together synergistically for maximum impact.'
                },
                {
                    icon: <IconTarget size={24} />,
                    title: 'Data-Driven Decision Making',
                    description: 'Every strategy is backed by comprehensive market research, competitor analysis, and performance data. We use advanced analytics to continuously optimize campaigns for better ROI and conversion rates.'
                },
                {
                    icon: <IconUsers size={24} />,
                    title: 'Customer Journey Mapping',
                    description: 'We map your complete customer journey from awareness to conversion, ensuring consistent messaging and optimal touchpoints across all digital channels to maximize lead quality and sales velocity.'
                },
                {
                    icon: <IconBrandGoogle size={24} />,
                    title: 'Multi-Channel Expertise',
                    description: 'Our team includes certified specialists in Google Ads, Facebook Marketing, SEO, email automation, and content strategy. You get expert-level execution across every digital marketing channel.'
                },
                {
                    icon: <IconChartBar size={24} />,
                    title: 'Transparent Performance Tracking',
                    description: 'Real-time dashboards and detailed monthly reports show exactly how each channel performs. You\'ll see leads generated, conversion rates, cost-per-acquisition, and overall ROI with complete transparency.'
                },
                {
                    icon: <IconRocket size={24} />,
                    title: 'Scalable Growth Strategies',
                    description: 'Our 360° approach is designed to scale with your business. As you grow, we adjust strategies, budgets, and channels to maintain optimal performance and capture new market opportunities.'
                },
            ],
            cta: {
                text: 'Start Your 360° Growth',
                link: '#contact',
                icon: <IconRocket size={24} />
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
                    icon: <IconBrandInstagram size={24} />
                },
                {
                    id: 2,
                    title: 'Meta Ads',
                    description: 'Drive conversions with high-impact Meta Ads on Facebook and Instagram—featuring precise targeting, engaging creatives, A/B testing, and retargeting funnels.',
                    icon: <IconAd size={24} />
                },
                {
                    id: 3,
                    title: 'Google Ads',
                    description: 'Get instant visibility on Google with expertly managed Search, Display, Shopping, and YouTube campaigns, optimized for clicks, conversions, and ROI.',
                    icon: <IconBrandGoogle size={24} />
                },
                {
                    id: 4,
                    title: 'Pay-Per-Click Advertising',
                    description: 'Launch results-driven Pay-Per-Click campaigns across multiple ad platforms with advanced keyword targeting, competitor analysis, and real-time optimization.',
                    icon: <IconChartBar size={24} />
                },
                {
                    id: 5,
                    title: 'Leads and Sales Funnel',
                    description: 'Build a high-converting sales funnel using lead magnets, nurturing sequences, automation, and retargeting to move prospects from awareness to purchase.',
                    icon: <IconMail size={24} />
                },
                {
                    id: 6,
                    title: 'Landing Page Development',
                    description: 'Design and develop custom landing pages optimized for speed, responsiveness, and conversion—tailored to match campaign goals and audience intent.',
                    icon: <IconEdit size={24} />
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
                { text: 'Success Stories', gradient: true, gradientClass: 'from-orange-500 via-pink-500 to-red-500' }
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
    },

    'meta-ads': {
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
                            icon: <IconBrandFacebook />
                        },
                        {
                            id: '2',
                            question: 'What\'s the minimum budget needed for effective Meta Ads?',
                            answer: 'We recommend starting with at least ₹15,000-25,000 per month for meaningful results. This allows for proper testing of audiences, creatives, and optimization. Higher budgets typically yield better cost efficiency and faster scaling.',
                            icon: <IconCurrencyRupee />
                        },
                        {
                            id: '3',
                            question: 'How quickly can I expect to see results from Meta Ads?',
                            answer: 'Initial data and insights appear within 2-3 days. Meaningful results like lead generation and conversions typically show within 1-2 weeks. Full optimization and consistent performance usually develop after 4-6 weeks of testing.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '4',
                            question: 'Do you create ad creatives or do we need to provide them?',
                            answer: 'We provide complete creative services including graphic design, video production, copywriting, and A/B testing of different formats. We can also work with your existing brand assets and content.',
                            icon: <IconPhoto />
                        },
                        {
                            id: '5',
                            question: 'How do you ensure our ads reach the right audience?',
                            answer: 'We use advanced targeting including demographics, interests, behaviors, custom audiences from your data, lookalike audiences, and retargeting. Our targeting strategies are continuously refined based on performance data.',
                            icon: <IconTarget />
                        },
                        {
                            id: '6',
                            question: 'What types of businesses see the best results with Meta Ads?',
                            answer: 'E-commerce, local services, B2C brands, real estate, healthcare, education, and restaurants typically see excellent results. However, we\'ve successfully run campaigns for B2B companies and professional services as well.',
                            icon: <Briefcase />
                        },
                        {
                            id: '7',
                            question: 'How do you track and measure campaign performance?',
                            answer: 'We track metrics like reach, engagement, click-through rates, cost per click, cost per lead, conversion rates, and return on ad spend (ROAS). You get detailed weekly reports and real-time access to performance dashboards.',
                            icon: <BarChart4 />
                        },
                        {
                            id: '8',
                            question: 'Can you help if our Meta Ads account was banned or restricted?',
                            answer: 'Yes, we have extensive experience with account recovery, policy compliance, and preventing future restrictions. We also help set up backup ad accounts and implement best practices to avoid policy violations.',
                            icon: <IconShield />
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
                { icon: <IconFreeRights size={30} />, text: "Get Free Audit", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconUsers size={34} />,
                    title: "3B+ Reach",
                    description: "Meta platform users"
                },
                {
                    icon: <IconTrendingUp size={34} />,
                    title: "450% Avg ROI",
                    description: "For our clients"
                },
                {
                    icon: <IconTarget size={34} />,
                    title: "0.8% CTR",
                    description: "Average click rate"
                },
                {
                    icon: <IconStarsFilled size={34} />,
                    title: "Meta Certified",
                    description: "Expert team"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'Meta Ads', gradient: true, gradientClass: 'from-blue-600 via-purple-500 to-pink-500' },
                { text: ' Management?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconCertificate size={24} />,
                    title: 'Meta Certified Experts',
                    description: 'Our team holds official Meta Blueprint certifications and stays updated with the latest algorithm changes, policy updates, and advertising best practices for maximum campaign performance.'
                },
                {
                    icon: <IconTarget size={24} />,
                    title: 'Advanced Audience Targeting',
                    description: 'We create highly specific audience segments using demographics, interests, behaviors, custom audiences from your data, and lookalike audiences to reach people most likely to convert.'
                },
                {
                    icon: <IconPhoto size={24} />,
                    title: 'High-Converting Creative Assets',
                    description: 'Our in-house design team creates scroll-stopping visuals, engaging videos, and persuasive ad copy that aligns with your brand and drives action across Facebook and Instagram.'
                },
                {
                    icon: <IconChartBar size={24} />,
                    title: 'Data-Driven Optimization',
                    description: 'We continuously analyze performance metrics, conduct A/B tests, and optimize campaigns based on real data to improve cost efficiency and maximize your return on ad spend.'
                },
                {
                    icon: <IconDeviceMobile size={24} />,
                    title: 'Mobile-First Approach',
                    description: 'All our ads are designed for mobile users first, ensuring optimal viewing experience and higher engagement rates since 95% of Facebook users access via mobile devices.'
                },
                {
                    icon: <IconReportAnalytics size={24} />,
                    title: 'Transparent Reporting',
                    description: 'Get detailed weekly reports showing ad performance, audience insights, cost breakdowns, and actionable recommendations. Plus real-time access to your campaign dashboards.'
                },
            ],
            cta: {
                text: 'Start Meta Advertising',
                link: '#contact',
                icon: <IconRocket size={24} />
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
                    icon: <IconUserPlus size={24} />
                },
                {
                    id: 2,
                    title: 'E-commerce & Sales Campaigns',
                    description: 'Dynamic product ads, retargeting campaigns, and conversion-optimized ads that drive online sales with advanced features like catalog integration and abandoned cart recovery.',
                    icon: <IconShoppingCart size={24} />
                },
                {
                    id: 3,
                    title: 'Brand Awareness & Reach',
                    description: 'Strategic campaigns designed to increase brand visibility, reach new audiences, and build brand recognition using video ads, carousel formats, and engagement-focused creative strategies.',
                    icon: <IconEye size={24} />
                },
                {
                    id: 4,
                    title: 'App Promotion & Installs',
                    description: 'Specialized mobile app advertising campaigns that drive app downloads, in-app events, and user engagement with app-specific ad formats and optimization techniques.',
                    icon: <IconDeviceMobile size={24} />
                },
                {
                    id: 5,
                    title: 'Local Business Advertising',
                    description: 'Location-based campaigns for local businesses including store visits, local awareness ads, and geo-targeted promotions to drive foot traffic and local customer acquisition.',
                    icon: <IconMapPin size={24} />
                },
                {
                    id: 6,
                    title: 'Retargeting & Custom Audiences',
                    description: 'Advanced retargeting campaigns using website visitors, email lists, and engagement data to re-engage warm prospects and convert them into customers with personalized messaging.',
                    icon: <IconRefresh size={24} />
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
                { text: 'Success Stories', gradient: true, gradientClass: 'from-blue-600 via-purple-500 to-pink-500' }
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
    },

    'google-ads': {
        slug: 'google-ads',
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
                    heading: 'We manage Google Ads for',
                    subheading: 'Businesses wanting to dominate search results and drive qualified traffic'
                }
            },
            {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'How much should I budget for Google Ads to see good results?',
                            answer: 'We recommend a minimum monthly budget of ₹20,000-40,000 for most businesses to allow proper keyword testing and optimization. Higher budgets typically provide better data for optimization and faster scaling opportunities.',
                            icon: <IconCurrencyRupee />
                        },
                        {
                            id: '2',
                            question: 'How long does it take to see results from Google Ads?',
                            answer: 'You can see immediate traffic and impressions, but meaningful results like quality leads and conversions typically develop within 2-4 weeks as we optimize targeting, keywords, and ad copy based on performance data.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '3',
                            question: 'What\'s the difference between Google Ads and SEO?',
                            answer: 'Google Ads provides immediate visibility at the top of search results through paid placement, while SEO builds organic rankings over time. Google Ads offers instant traffic and precise targeting, while SEO provides long-term sustainable traffic.',
                            icon: <IconSearch />
                        },
                        {
                            id: '4',
                            question: 'Do you manage Shopping Ads for e-commerce businesses?',
                            answer: 'Yes, we specialize in Google Shopping campaigns including product feed optimization, competitive bidding strategies, and performance max campaigns to maximize e-commerce sales and product visibility.',
                            icon: <IconShoppingCart />
                        },
                        {
                            id: '5',
                            question: 'How do you choose the right keywords for our campaigns?',
                            answer: 'We conduct comprehensive keyword research using tools like Google Keyword Planner, analyzing search volume, competition, commercial intent, and relevance to your business. We focus on high-converting, profitable keywords.',
                            icon: <IconKey />
                        },
                        {
                            id: '6',
                            question: 'Can Google Ads work for local businesses?',
                            answer: 'Absolutely! Local campaigns with location extensions, call extensions, and geo-targeting are highly effective for local businesses. We also manage Google My Business optimization to enhance local visibility.',
                            icon: <IconMapPin />
                        },
                        {
                            id: '7',
                            question: 'How do you prevent wasted ad spend on irrelevant clicks?',
                            answer: 'We use negative keywords, precise match types, audience targeting, geographic restrictions, and dayparting to ensure your ads only show to qualified prospects. Continuous monitoring prevents budget waste.',
                            icon: <IconShield />
                        },
                        {
                            id: '8',
                            question: 'What reporting and insights do you provide?',
                            answer: 'Weekly performance reports showing impressions, clicks, conversions, cost-per-click, cost-per-acquisition, and ROAS. Plus real-time access to Google Ads dashboard and monthly strategy consultations.',
                            icon: <BarChart4 />
                        }
                    ],
                    heading: {
                        part1: 'Google Ads ',
                        part2: 'FAQs'
                    }
                }
            }
        ],
        hero: {
            initial: "Need ",
            headlineKeywords: [
                "Instant Traffic?",
                "Quality Leads?",
                "Higher Sales?",
                "Local Customers?",
                "Brand Visibility?",
                "Competitive Edge?"
            ],
            brandLine: [
                { text: "Google Ads Management", gradient: false, }
            ],
            subheadline: "Professional Google Ads management that puts your business at the top of search results. Drive qualified traffic, generate leads, and increase sales with expertly managed PPC campaigns.",
            ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Free Audit", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconSearch size={34} />,
                    title: "8.5B Searches",
                    description: "Daily on Google"
                },
                {
                    icon: <IconTrendingUp size={34} />,
                    title: "520% Avg ROI",
                    description: "For our clients"
                },
                {
                    icon: <IconTarget size={34} />,
                    title: "3.2% CTR",
                    description: "Average click rate"
                },
                {
                    icon: <IconCertificate size={34} />,
                    title: "Google Certified",
                    description: "Expert partners"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'Google Ads', gradient: true, gradientClass: 'from-blue-600 via-green-500 to-yellow-500' },
                { text: ' Management?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconCertificate size={24} />,
                    title: 'Google Certified Partners',
                    description: 'Our team holds Google Ads certifications across Search, Display, Shopping, Video, and Measurement. We stay current with Google\'s latest features, best practices, and algorithm updates.'
                },
                {
                    icon: <IconKey size={24} />,
                    title: 'Strategic Keyword Research',
                    description: 'We identify high-converting keywords with commercial intent while avoiding expensive, low-converting terms. Our keyword strategy focuses on profitable traffic that drives actual business results.'
                },
                {
                    icon: <IconAd size={24} />,
                    title: 'Compelling Ad Copy & Extensions',
                    description: 'Our copywriters create persuasive ad text that increases click-through rates and conversions. We utilize all relevant ad extensions to maximize visibility and provide valuable information.'
                },
                {
                    icon: <IconTarget size={24} />,
                    title: 'Precision Targeting & Bidding',
                    description: 'Advanced audience targeting, demographic filtering, and smart bidding strategies ensure your ads reach the right people at the optimal cost for maximum return on investment.'
                },
                {
                    icon: <IconChartBar size={24} />,
                    title: 'Conversion Tracking & Optimization',
                    description: 'Complete conversion tracking setup including phone calls, form submissions, and e-commerce sales. We optimize campaigns based on actual business outcomes, not just clicks.'
                },
                {
                    icon: <IconShield size={24} />,
                    title: 'Budget Protection & Efficiency',
                    description: 'Strategic use of negative keywords, match types, and geographic targeting prevents wasted spend. We continuously monitor and adjust to maximize your budget efficiency.'
                },
            ],
            cta: {
                text: 'Start Google Ads',
                link: '#contact',
                icon: <IconRocket size={24} />
            }
        },
        typesOfServices: {
            title: 'Our Google Ads Services',
            subtitle: 'COMPREHENSIVE PPC SOLUTIONS',
            description: 'Complete Google Ads management services designed to drive qualified traffic, generate leads, and increase sales across all Google advertising platforms.',
            services: [
                {
                    id: 1,
                    title: 'Search Ads Campaigns',
                    description: 'Targeted search campaigns that appear when potential customers search for your products or services. Includes keyword research, ad copywriting, and bid management for maximum visibility and conversions.',
                    icon: <IconSearch size={24} />
                },
                {
                    id: 2,
                    title: 'Google Shopping Ads',
                    description: 'Product-focused campaigns for e-commerce businesses featuring product images, prices, and merchant information. Includes product feed optimization and competitive bidding strategies.',
                    icon: <IconShoppingCart size={24} />
                },
                {
                    id: 3,
                    title: 'Display & Video Campaigns',
                    description: 'Visual advertising across Google\'s display network and YouTube to build brand awareness, retarget website visitors, and reach new audiences with compelling creative assets.',
                    icon: <IconVideo size={24} />
                },
                {
                    id: 4,
                    title: 'Local Campaigns',
                    description: 'Location-based advertising for local businesses including Google My Business optimization, local search ads, and store visit tracking to drive foot traffic and local awareness.',
                    icon: <IconMapPin size={24} />
                },
                {
                    id: 5,
                    title: 'Performance Max Campaigns',
                    description: 'AI-powered campaigns that automatically optimize across all Google channels including Search, Display, YouTube, and Gmail to maximize conversions and reach.',
                    icon: <IconRocket size={24} />
                },
                {
                    id: 6,
                    title: 'Remarketing & Audience Targeting',
                    description: 'Strategic retargeting campaigns to re-engage website visitors, previous customers, and similar audiences with personalized messaging and offers to increase conversion rates.',
                    icon: <IconRefresh size={24} />
                }
            ]
        },
        process: {
            title: 'Our Google Ads Process',
            subtitle: 'STRATEGIC CAMPAIGN MANAGEMENT',
            description: 'A proven methodology for creating, optimizing, and scaling successful Google Ads campaigns that deliver measurable business results.',
            steps: [
                {
                    id: 1,
                    title: 'Account Audit & Strategy Development',
                    description: 'Comprehensive analysis of your business, competitors, and current advertising efforts. We develop a customized Google Ads strategy with clear goals, target audience definition, and budget allocation.'
                },
                {
                    id: 2,
                    title: 'Keyword Research & Campaign Structure',
                    description: 'In-depth keyword research to identify high-converting search terms. We create logical campaign and ad group structure with strategic keyword grouping for optimal quality scores and performance.'
                },
                {
                    id: 3,
                    title: 'Ad Creation & Landing Page Optimization',
                    description: 'Compelling ad copy creation with A/B testing of headlines, descriptions, and extensions. Landing page review and optimization recommendations to improve conversion rates.'
                },
                {
                    id: 4,
                    title: 'Campaign Launch & Initial Optimization',
                    description: 'Strategic campaign launch with conversion tracking setup. Initial bid adjustments, negative keyword implementation, and ad scheduling based on early performance data.'
                },
                {
                    id: 5,
                    title: 'Performance Monitoring & Scaling',
                    description: 'Daily monitoring and weekly optimization including bid adjustments, keyword expansion, ad testing, and budget reallocation based on performance metrics and conversion data.'
                },
                {
                    id: 6,
                    title: 'Reporting & Strategic Evolution',
                    description: 'Detailed performance reporting with actionable insights. Monthly strategy reviews to identify growth opportunities, new campaign types, and expansion possibilities.'
                }
            ]
        },
        testimonials: {
            title: [
                { text: 'Google Ads ', gradient: false },
                { text: 'Success Stories', gradient: true, gradientClass: 'from-blue-600 via-green-500 to-yellow-500' }
            ],
            description: 'Real results from businesses powered by our Google Ads expertise',
            testimonials: [
                {
                    id: '1',
                    message: 'DigiAerotech transformed our Google Ads performance - our lead cost dropped by 65% while lead quality improved dramatically. We now get 5x more qualified inquiries every month.',
                    highlight: 'lead cost dropped by 65% with 5x more inquiries',
                    stars: 5,
                    name: 'Suresh Agarwal',
                    designation: 'Business Owner',
                    company: 'Solar Energy Solutions'
                },
                {
                    id: '2',
                    message: 'Our e-commerce sales increased 400% within 4 months of their Google Shopping optimization. Their strategic approach to product feeds and bidding is exceptional.',
                    highlight: 'sales increased 400% within 4 months',
                    stars: 5,
                    name: 'Meera Joshi',
                    designation: 'E-commerce Director',
                    company: 'Home Decor Store'
                },
                {
                    id: '3',
                    message: 'The ROI from our Google Ads campaigns is now 8:1 thanks to DigiAerotech\'s strategic keyword research and conversion optimization. Best investment we\'ve made in digital marketing.',
                    highlight: 'ROI is now 8:1',
                    stars: 5,
                    name: 'Kartik Sharma',
                    designation: 'Marketing Manager',
                    company: 'B2B Software Company'
                }
            ]
        },
        cta: {
            title: 'Ready to Dominate Google Search Results?',
            subtitle: 'START YOUR GOOGLE ADS CAMPAIGN',
            description: 'Contact us for a free Google Ads audit and customized PPC strategy for your business.'
        }
    },

    'other-ads': {
        slug: 'other-ads',
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
                    heading: 'We run Multi-Platform Ads for',
                    subheading: 'Businesses wanting to reach audiences across diverse advertising platforms'
                }
            },
            {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'Which advertising platforms do you manage besides Google and Meta?',
                            answer: 'We manage LinkedIn Ads, Twitter Ads, Snapchat Ads, Pinterest Ads, TikTok Ads, YouTube Ads, Amazon Advertising, Bing Ads, and emerging platforms. We choose platforms based on where your target audience is most active.',
                            icon: <IconWorld />
                        },
                        {
                            id: '2',
                            question: 'How do you decide which platforms are right for my business?',
                            answer: 'We analyze your target audience demographics, behavior, and platform usage patterns. B2B companies often benefit from LinkedIn, while consumer brands might perform better on TikTok or Pinterest, depending on their audience.',
                            icon: <IconTarget />
                        },
                        {
                            id: '3',
                            question: 'Is LinkedIn advertising worth the higher cost per click?',
                            answer: 'For B2B companies, LinkedIn\'s higher CPC is often justified by superior lead quality and professional targeting options. We typically see 40-60% higher conversion rates despite the premium pricing.',
                            icon: <IconBrandLinkedin />
                        },
                        {
                            id: '4',
                            question: 'Can TikTok and Snapchat ads work for businesses targeting older demographics?',
                            answer: 'While these platforms skew younger, both have growing older user bases. We analyze your specific audience data and test small budgets initially to determine effectiveness before scaling campaigns.',
                            icon: <IconBrandTiktok />
                        },
                        {
                            id: '5',
                            question: 'How do you manage campaigns across multiple platforms efficiently?',
                            answer: 'We use centralized reporting dashboards, standardized creative templates adapted per platform, and strategic budget allocation based on performance data. Each platform gets customized content while maintaining brand consistency.',
                            icon: <Settings2 />
                        },
                        {
                            id: '6',
                            question: 'What\'s the minimum budget needed for effective multi-platform advertising?',
                            answer: 'We recommend ₹30,000-50,000 monthly across platforms for meaningful testing and optimization. This allows proper budget distribution and sufficient data collection for each platform.',
                            icon: <IconCurrencyRupee />
                        },
                        {
                            id: '7',
                            question: 'Do you create platform-specific content or reuse the same creatives?',
                            answer: 'We create platform-specific content optimized for each channel\'s format, audience behavior, and best practices. While maintaining brand consistency, we adapt messaging and visuals for platform-specific performance.',
                            icon: <IconPhoto />
                        },
                        {
                            id: '8',
                            question: 'How do you track and compare performance across different platforms?',
                            answer: 'We use unified tracking with UTM parameters, conversion pixels, and centralized analytics dashboards to compare cost-per-acquisition, return on ad spend, and lifetime value across all platforms.',
                            icon: <BarChart4 />
                        }
                    ],
                    heading: {
                        part1: 'Multi-Platform Ads ',
                        part2: 'FAQs'
                    }
                }
            }
        ],
        hero: {
            initial: "Want to ",
            headlineKeywords: [
                "Reach Professionals?",
                "Target Gen-Z?",
                "Expand Reach?",
                "Diversify Channels?",
                "Reduce Risk?",
                "Find New Audiences?"
            ],
            brandLine: [
                { text: "Multi-Platform Advertising", gradient: false, }
            ],
            subheadline: "Expert advertising management across LinkedIn, Twitter, Snapchat, TikTok, Pinterest, and more. Reach your audience wherever they are with platform-specific strategies that maximize ROI across diverse channels.",
            ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Platform Strategy", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconWorld size={34} />,
                    title: "12+ Platforms",
                    description: "We manage"
                },
                {
                    icon: <IconUsers size={34} />,
                    title: "5B+ Users",
                    description: "Total reach potential"
                },
                {
                    icon: <IconTrendingUp size={34} />,
                    title: "380% Avg ROI",
                    description: "Across platforms"
                },
                {
                    icon: <IconCertificate size={34} />,
                    title: "Platform Certified",
                    description: "Expert team"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'Multi-Platform', gradient: true, gradientClass: 'from-purple-600 via-pink-500 to-red-500' },
                { text: ' Advertising?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconWorld size={24} />,
                    title: 'Platform Expertise Across Channels',
                    description: 'Certified specialists for each platform with deep understanding of LinkedIn\'s professional targeting, TikTok\'s creative formats, Pinterest\'s visual discovery, and Snapchat\'s AR capabilities.'
                },
                {
                    icon: <IconTarget size={24} />,
                    title: 'Strategic Platform Selection',
                    description: 'We don\'t spray and pray - we strategically select platforms based on your audience demographics, business goals, and where your competitors aren\'t effectively reaching customers.'
                },
                {
                    icon: <IconPhoto size={24} />,
                    title: 'Platform-Native Creative Development',
                    description: 'Custom creative assets optimized for each platform\'s unique format, audience behavior, and algorithm preferences. What works on LinkedIn won\'t work on TikTok - we get that.'
                },
                {
                    icon: <IconChartBar size={24} />,
                    title: 'Unified Performance Tracking',
                    description: 'Centralized reporting that shows ROI, cost-per-acquisition, and performance metrics across all platforms in one dashboard, making it easy to compare and optimize budget allocation.'
                },
                {
                    icon: <IconRefresh size={24} />,
                    title: 'Cross-Platform Retargeting',
                    description: 'Advanced audience syncing and retargeting strategies that follow your prospects across platforms, creating cohesive customer journeys and improving overall conversion rates.'
                },
                {
                    icon: <IconRocket size={24} />,
                    title: 'Emerging Platform Early Adoption',
                    description: 'We stay ahead of trends and test new advertising platforms early, giving you first-mover advantages and lower competition costs on emerging channels before they become saturated.'
                },
            ],
            cta: {
                text: 'Expand Your Reach',
                link: '#contact',
                icon: <IconRocket size={24} />
            }
        },
        typesOfServices: {
            title: 'Our Multi-Platform Advertising Services',
            subtitle: 'DIVERSE CHANNEL EXPERTISE',
            description: 'Comprehensive advertising management across multiple platforms to maximize your reach, diversify your traffic sources, and reduce dependence on any single channel.',
            services: [
                {
                    id: 1,
                    title: 'LinkedIn Advertising',
                    description: 'Professional B2B advertising with advanced targeting by job title, company, industry, and skills. Perfect for lead generation, brand awareness, and recruiting with highly qualified professional audiences.',
                    icon: <IconBrandLinkedin size={24} />
                },
                {
                    id: 2,
                    title: 'Snapchat Ads',
                    description: 'Creative video advertising for younger demographics with trending content, AR filters, and viral potential. Ideal for brand awareness, app installs, and reaching Gen-Z and millennial audiences.',
                    icon: <IconBrandSnapchat size={24} />
                },
                {
                    id: 3,
                    title: 'Pinterest Advertising',
                    description: 'Visual discovery advertising perfect for e-commerce, lifestyle brands, and businesses with visual products. High-intent users actively seeking inspiration and products to purchase.',
                    icon: <IconBrandPinterest size={24} />
                },
                {
                    id: 4,
                    title: 'Twitter (X) Advertising',
                    description: 'Real-time engagement advertising for news, trends, and conversations. Excellent for brand awareness, event promotion, and reaching audiences during trending topics and current events.',
                    icon: <IconBrandX size={24} />
                },
                {
                    id: 5,
                    title: 'YouTube Advertising',
                    description: 'Video advertising across the world\'s second-largest search engine with diverse formats including skippable ads, bumper ads, and video discovery ads for maximum reach and engagement.',
                    icon: <IconBrandYoutube size={24} />
                },
                {
                    id: 6,
                    title: 'Amazon & E-commerce Ads',
                    description: 'Product advertising on Amazon, Flipkart, and other e-commerce platforms to capture high-intent shoppers at the point of purchase with sponsored products and display ads.',
                    icon: <IconShoppingCart size={24} />
                }
            ]
        },
        process: {
            title: 'Our Multi-Platform Advertising Process',
            subtitle: 'STRATEGIC CROSS-CHANNEL MANAGEMENT',
            className: 'border-t border-border dark:border-gray-700',
            description: 'A systematic approach to managing advertising campaigns across multiple platforms while maintaining consistency and optimizing performance.',
            steps: [
                {
                    id: 1,
                    title: 'Platform Audit & Selection',
                    description: 'Comprehensive analysis of your target audience, competitors, and business goals to identify the most effective platforms. We prioritize channels with highest potential ROI and audience alignment.'
                },
                {
                    id: 2,
                    title: 'Cross-Platform Strategy Development',
                    description: 'Unified advertising strategy that leverages each platform\'s unique strengths while maintaining consistent brand messaging and customer journey mapping across all touchpoints.'
                },
                {
                    id: 3,
                    title: 'Platform-Specific Creative Production',
                    description: 'Custom creative assets tailored to each platform\'s format requirements, audience preferences, and best practices. From LinkedIn carousels to TikTok videos to Pinterest pins.'
                },
                {
                    id: 4,
                    title: 'Coordinated Campaign Launch',
                    description: 'Strategic campaign launches with proper tracking setup, audience configuration, and budget distribution. Coordinated timing to maximize cross-platform synergies and brand exposure.'
                },
                {
                    id: 5,
                    title: 'Performance Optimization & Scaling',
                    description: 'Continuous monitoring and optimization across all platforms with budget reallocation to top-performing channels. A/B testing and creative refreshes to maintain performance.'
                },
                {
                    id: 6,
                    title: 'Unified Reporting & Strategy Evolution',
                    description: 'Comprehensive cross-platform reporting with insights and recommendations. Regular strategy reviews to identify new opportunities and optimize the platform mix for maximum ROI.'
                }
            ]
        },
        testimonials: {
            title: [
                { text: 'Multi-Platform ', gradient: false },
                { text: 'Success Stories', gradient: true, gradientClass: 'from-purple-600 via-pink-500 to-red-500' }
            ],
            description: 'Real results from businesses that diversified their advertising across multiple platforms',
            testimonials: [
                {
                    id: '1',
                    message: 'DigiAerotech\'s LinkedIn campaigns generated 300% more qualified B2B leads than our previous agency. Their understanding of professional targeting and content strategy is exceptional.',
                    highlight: '300% more qualified B2B leads',
                    stars: 5,
                    name: 'Rohit Malhotra',
                    designation: 'Sales Director',
                    company: 'Enterprise Software Company'
                },
                {
                    id: '2',
                    message: 'Our TikTok campaigns reached 2 million users and increased brand awareness by 150% among our target demographic. Their creative approach and trend awareness is outstanding.',
                    highlight: 'reached 2 million users, awareness increased 150%',
                    stars: 5,
                    name: 'Kavya Reddy',
                    designation: 'Brand Manager',
                    company: 'Fashion Startup'
                },
                {
                    id: '3',
                    message: 'By diversifying our ad spend across LinkedIn, Pinterest, and YouTube, we reduced our overall cost-per-acquisition by 45% while reaching new audience segments we never accessed before.',
                    highlight: 'reduced cost-per-acquisition by 45%',
                    stars: 5,
                    name: 'Arjun Patel',
                    designation: 'Growth Manager',
                    company: 'E-learning Platform'
                }
            ]
        },
        cta: {
            title: 'Ready to Expand Beyond Google & Facebook?',
            subtitle: 'DIVERSIFY YOUR ADVERTISING',
            description: 'Contact us for a multi-platform advertising strategy that reaches your audience across every relevant channel.'
        }
    },

    'local-seo': {
        slug: 'local-seo',
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
                    heading: 'We provide Local SEO for',
                    subheading: 'Local businesses wanting to dominate their geographic market online'
                }
            },
            {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'How is Local SEO different from regular SEO?',
                            answer: 'Local SEO focuses on ranking for location-based searches like "dentist near me" or "restaurants in Delhi". It involves optimizing Google My Business, local citations, reviews, and location-specific content to appear in local search results and Google Maps.',
                            icon: <IconMapPin />
                        },
                        {
                            id: '2',
                            question: 'How long does it take to see Local SEO results?',
                            answer: 'Initial improvements in Google My Business visibility can appear within 2-4 weeks. Significant improvements in local rankings and increased customer inquiries typically develop within 3-6 months of consistent optimization.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '3',
                            question: 'What is Google My Business and why is it important?',
                            answer: 'Google My Business (GMB) is your free business listing on Google that appears in local searches and Maps. It\'s crucial for local visibility, showing your hours, location, reviews, photos, and contact information to potential customers.',
                            icon: <IconBrandGoogle />
                        },
                        {
                            id: '4',
                            question: 'How do online reviews impact local SEO rankings?',
                            answer: 'Reviews are a major local ranking factor. More positive reviews improve your rankings, while review velocity (getting new reviews regularly) and responding to reviews also boost your local SEO performance significantly.',
                            icon: <IconStar />
                        },
                        {
                            id: '5',
                            question: 'Can Local SEO help if I serve multiple cities or areas?',
                            answer: 'Yes! We create location-specific pages for each service area, optimize for multiple city keywords, and manage separate Google My Business listings for each location to maximize visibility across all service areas.',
                            icon: <IconMapPin />
                        },
                        {
                            id: '6',
                            question: 'What are local citations and why do they matter?',
                            answer: 'Local citations are online mentions of your business name, address, and phone number (NAP) on directories, websites, and social platforms. Consistent citations across the web improve local search rankings and credibility.',
                            icon: <IconList />
                        },
                        {
                            id: '7',
                            question: 'Do I need a physical address for Local SEO to work?',
                            answer: 'While a physical address helps, service-area businesses can still benefit from Local SEO. We optimize for service areas, use proper schema markup, and focus on location-based keywords relevant to your service zones.',
                            icon: <IconBuilding />
                        },
                        {
                            id: '8',
                            question: 'How do you track and measure Local SEO success?',
                            answer: 'We track local keyword rankings, Google My Business insights, website traffic from local searches, phone calls, direction requests, and customer inquiries to measure and improve your local online presence.',
                            icon: <BarChart4 />
                        }
                    ],
                    heading: {
                        part1: 'Local SEO ',
                        part2: 'FAQs'
                    }
                }
            }
        ],
        hero: {
            initial: "Want ",
            headlineKeywords: [
                "Local Customers?",
                "More Foot Traffic?",
                "Higher Visibility?",
                "Phone Calls?",
                "Local Dominance?",
                "Map Rankings?"
            ],
            brandLine: [
                { text: "Local SEO Services", gradient: false, }
            ],
            subheadline: "Professional Local SEO services that put your business on the map. Dominate local search results, attract nearby customers, and grow your local market share with strategic optimization.",
            ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Local Audit", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconMapPin size={34} />,
                    title: "89% Local Searches",
                    description: "Result in action"
                },
                {
                    icon: <IconTrendingUp size={34} />,
                    title: "280% Avg Growth",
                    description: "In local visibility"
                },
                {
                    icon: <IconStar size={34} />,
                    title: "4.7+ Rating",
                    description: "Average client GMB"
                },
                {
                    icon: <IconUsers size={34} />,
                    title: "500+ Businesses",
                    description: "Locally optimized"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'Local SEO', gradient: true, gradientClass: 'from-green-600 via-blue-500 to-purple-500' },
                { text: ' Services?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconMapPin size={24} />,
                    title: 'Google My Business Optimization',
                    description: 'Complete GMB optimization including profile setup, category selection, post scheduling, review management, and Q&A optimization to maximize your local search visibility and customer engagement.'
                },
                {
                    icon: <IconList size={24} />,
                    title: 'Local Citation Building',
                    description: 'Strategic citation building across high-authority local directories, industry-specific platforms, and location-based websites to improve local search rankings and business credibility.'
                },
                {
                    icon: <IconStar size={24} />,
                    title: 'Review Management System',
                    description: 'Comprehensive review management including review generation campaigns, response strategies, and reputation monitoring to build trust and improve local search rankings.'
                },
                {
                    icon: <IconSearch size={24} />,
                    title: 'Local Keyword Optimization',
                    description: 'Targeted optimization for location-based keywords, "near me" searches, and geo-specific terms that your local customers use to find businesses like yours.'
                },
                {
                    icon: <IconBuilding size={24} />,
                    title: 'Multi-Location Management',
                    description: 'Expert management of multiple business locations with location-specific landing pages, individual GMB profiles, and targeted local content strategies for each service area.'
                },
                {
                    icon: <IconChartBar size={24} />,
                    title: 'Local Performance Tracking',
                    description: 'Detailed tracking of local rankings, GMB insights, foot traffic, phone calls, and customer inquiries with monthly reports showing your local market domination progress.'
                },
            ],
            cta: {
                text: 'Dominate Local Search',
                link: '#contact',
                icon: <IconMapPin size={24} />
            }
        },
        typesOfServices: {
            title: 'Our Local SEO Services',
            subtitle: 'COMPLETE LOCAL OPTIMIZATION',
            description: 'Comprehensive local SEO services designed to help your business dominate local search results and attract more customers from your geographic area.',
            services: [
                {
                    id: 1,
                    title: 'Google My Business Optimization',
                    description: 'Complete GMB profile optimization including business information accuracy, category optimization, photo management, post scheduling, and ongoing maintenance for maximum local visibility.',
                    icon: <IconBrandGoogle size={24} />
                },
                {
                    id: 2,
                    title: 'Local Citation Building',
                    description: 'Strategic citation building across authoritative local directories, industry platforms, and geographic-specific websites to improve local search rankings and online presence consistency.',
                    icon: <IconList size={24} />
                },
                {
                    id: 3,
                    title: 'Review Management & Generation',
                    description: 'Comprehensive review management including automated review requests, response management, reputation monitoring, and strategies to generate more positive customer reviews.',
                    icon: <IconStar size={24} />
                },
                {
                    id: 4,
                    title: 'Local Content Marketing',
                    description: 'Location-specific content creation including local landing pages, community event coverage, local news integration, and geo-targeted blog content that resonates with local audiences.',
                    icon: <IconEdit size={24} />
                },
                {
                    id: 5,
                    title: 'Local Link Building',
                    description: 'Acquisition of high-quality local backlinks from community organizations, local news sites, chamber of commerce, and industry associations to boost local search authority.',
                    icon: <IconLink size={24} />
                },
                {
                    id: 6,
                    title: 'Mobile & Voice Search Optimization',
                    description: 'Optimization for mobile searches and voice queries with focus on conversational keywords, featured snippets, and mobile-friendly user experience for local searchers.',
                    icon: <IconDeviceMobile size={24} />
                }
            ]
        },
        process: {
            title: 'Our Local SEO Process',
            subtitle: 'SYSTEMATIC LOCAL OPTIMIZATION',
            description: 'A proven methodology for improving local search visibility and attracting more customers from your target geographic area.',
            steps: [
                {
                    id: 1,
                    title: 'Local Market Analysis',
                    description: 'Comprehensive analysis of your local market, competitors, and target audience. We identify local search opportunities, competitor gaps, and develop a customized local SEO strategy.'
                },
                {
                    id: 2,
                    title: 'Google My Business Setup & Optimization',
                    description: 'Complete GMB profile optimization including verification, category selection, business information accuracy, photo optimization, and initial content creation for maximum visibility.'
                },
                {
                    id: 3,
                    title: 'Website Local Optimization',
                    description: 'On-page optimization for local keywords, location pages creation, schema markup implementation, and NAP (Name, Address, Phone) consistency across your website.'
                },
                {
                    id: 4,
                    title: 'Citation Building & Directory Submissions',
                    description: 'Strategic submission to high-authority local directories, industry-specific platforms, and geographic databases with consistent NAP information and optimized descriptions.'
                },
                {
                    id: 5,
                    title: 'Review Generation & Management',
                    description: 'Implementation of review generation campaigns, customer feedback systems, and professional response strategies to build positive online reputation and improve rankings.'
                },
                {
                    id: 6,
                    title: 'Monitoring & Continuous Optimization',
                    description: 'Ongoing monitoring of local rankings, GMB performance, competitor activities, and continuous optimization based on performance data and algorithm updates.'
                }
            ]
        },
        testimonials: {
            title: [
                { text: 'Local SEO ', gradient: false },
                { text: 'Success Stories', gradient: true, gradientClass: 'from-green-600 via-blue-500 to-purple-500' }
            ],
            description: 'Real results from local businesses that dominate their markets',
            testimonials: [
                {
                    id: '1',
                    message: 'Our restaurant now appears #1 for "best restaurant in Gurgaon" and similar searches. DigiAerotech increased our foot traffic by 180% and online orders by 250% through strategic local SEO.',
                    highlight: 'foot traffic increased 180%, online orders up 250%',
                    stars: 5,
                    name: 'Ravi Khanna',
                    designation: 'Restaurant Owner',
                    company: 'Delhi Delights Restaurant'
                },
                {
                    id: '2',
                    message: 'As a dental clinic, local visibility was crucial. DigiAerotech got us ranking in the top 3 for dental searches in our area. New patient appointments increased by 300% within 6 months.',
                    highlight: 'new patient appointments increased 300%',
                    stars: 5,
                    name: 'Dr. Priya Sharma',
                    designation: 'Dental Surgeon',
                    company: 'Smile Care Dental Clinic'
                },
                {
                    id: '3',
                    message: 'Our home services business now dominates local search results across 5 cities. Lead generation increased 400% and our Google My Business gets over 1000 views monthly thanks to their local SEO expertise.',
                    highlight: 'lead generation increased 400%',
                    stars: 5,
                    name: 'Amit Singh',
                    designation: 'Business Owner',
                    company: 'Home Repair Services'
                }
            ]
        },
        cta: {
            title: 'Ready to Dominate Your Local Market?',
            subtitle: 'START LOCAL SEO TODAY',
            description: 'Contact us for a free local SEO audit and customized strategy to attract more local customers.'
        }
    },

    'ecommerce-marketing': {
        slug: 'ecommerce-marketing',
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
                    heading: 'We provide E-commerce Marketing for',
                    subheading: 'Online stores wanting to increase sales and customer lifetime value'
                }
            },
            {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'What makes e-commerce marketing different from regular digital marketing?',
                            answer: 'E-commerce marketing focuses specifically on driving online sales with strategies like product feed optimization, shopping ads, cart abandonment recovery, customer lifetime value optimization, and conversion rate optimization tailored for online stores.',
                            icon: <IconShoppingCart />
                        },
                        {
                            id: '2',
                            question: 'Which e-commerce platforms do you work with?',
                            answer: 'We work with all major platforms including Shopify, WooCommerce, Magento, BigCommerce, Amazon, Flipkart, Myntra, and custom e-commerce solutions. Our strategies adapt to each platform\'s specific features and requirements.',
                            icon: <ShoppingBag />
                        },
                        {
                            id: '3',
                            question: 'How quickly can I expect to see increased sales from e-commerce marketing?',
                            answer: 'Initial improvements in traffic and engagement can appear within 2-4 weeks. Significant sales increases typically develop within 6-12 weeks as we optimize product pages, improve conversion rates, and scale successful campaigns.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '4',
                            question: 'Do you help with Amazon and marketplace optimization?',
                            answer: 'Yes! We provide complete marketplace optimization including Amazon SEO, product listing optimization, PPC campaigns on Amazon, review management, and strategies for Flipkart, Myntra, and other marketplaces.',
                            icon: <IconBuildingStore />
                        },
                        {
                            id: '5',
                            question: 'How do you improve conversion rates for e-commerce stores?',
                            answer: 'We use A/B testing, heat map analysis, user behavior tracking, checkout optimization, product page improvements, trust signal enhancement, and personalization strategies to systematically improve conversion rates.',
                            icon: <IconTrendingUp />
                        },
                        {
                            id: '6',
                            question: 'What\'s included in your e-commerce email marketing?',
                            answer: 'Our email marketing includes welcome sequences, abandoned cart recovery, post-purchase follow-ups, customer win-back campaigns, product recommendations, and segmented campaigns based on purchase behavior and preferences.',
                            icon: <IconMail />
                        },
                        {
                            id: '7',
                            question: 'How do you handle seasonal e-commerce campaigns?',
                            answer: 'We create comprehensive seasonal strategies for festivals, sales events, and peak shopping periods with advance planning, inventory coordination, promotional campaigns, and budget scaling to maximize revenue during high-traffic periods.',
                            icon: <IconCalendar />
                        },
                        {
                            id: '8',
                            question: 'Can you help reduce our customer acquisition cost?',
                            answer: 'Absolutely! We optimize your entire funnel to reduce CAC through better targeting, improved conversion rates, customer lifetime value optimization, referral programs, and retention strategies that reduce reliance on paid acquisition.',
                            icon: <IconCurrencyDollar />
                        }
                    ],
                    heading: {
                        part1: 'E-commerce Marketing ',
                        part2: 'FAQs'
                    }
                }
            }
        ],
        hero: {
            initial: "Want ",
            headlineKeywords: [
                "More Sales?",
                "Higher Revenue?",
                "Better Conversions?",
                "Repeat Customers?",
                "Cart Recovery?",
                "Marketplace Growth?"
            ],
            brandLine: [
                { text: "E-commerce Marketing", gradient: false, }
            ],
            subheadline: "Comprehensive e-commerce marketing strategies that drive sales, increase customer lifetime value, and maximize your online store's profitability across all channels and marketplaces.",
            ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Store Audit", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconTrendingUp size={34} />,
                    title: "340% Avg ROI",
                    description: "For e-commerce clients"
                },
                {
                    icon: <IconShoppingCart size={34} />,
                    title: "2.8% Conversion",
                    description: "Average rate achieved"
                },
                {
                    icon: <IconCurrencyDollar size={34} />,
                    title: "₹50Cr+ Sales",
                    description: "Generated for clients"
                },
                {
                    icon: <IconUsers size={34} />,
                    title: "200+ Stores",
                    description: "Successfully managed"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'E-commerce Marketing', gradient: true, gradientClass: 'from-orange-600 via-red-500 to-pink-500' },
                { text: ' Services?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconShoppingCart size={24} />,
                    title: 'E-commerce Conversion Optimization',
                    description: 'Systematic optimization of your entire sales funnel from product discovery to checkout completion, using A/B testing, user behavior analysis, and proven conversion rate optimization techniques.'
                },
                {
                    icon: <IconBrandGoogle size={24} />,
                    title: 'Multi-Channel Shopping Campaigns',
                    description: 'Expert management of Google Shopping, Facebook Shop, Instagram Shopping, and marketplace advertising to maximize product visibility and drive qualified traffic across all sales channels.'
                },
                {
                    icon: <IconMail size={24} />,
                    title: 'Advanced Email Marketing Automation',
                    description: 'Sophisticated email sequences including welcome series, cart abandonment, post-purchase follow-ups, win-back campaigns, and personalized product recommendations that recover lost sales and increase CLV.'
                },
                {
                    icon: <IconChartBar size={24} />,
                    title: 'Customer Lifetime Value Optimization',
                    description: 'Strategic focus on increasing repeat purchases, average order value, and customer retention through loyalty programs, upselling strategies, and personalized marketing campaigns.'
                },
                {
                    icon: <IconBuildingStore size={24} />,
                    title: 'Marketplace Management',
                    description: 'Complete optimization and management of your presence on Amazon, Flipkart, Myntra, and other marketplaces with listing optimization, advertising, inventory management, and review optimization.'
                },
                {
                    icon: <IconTarget size={24} />,
                    title: 'Performance-Based Growth',
                    description: 'Data-driven approach focused on metrics that matter - revenue, profit margins, customer acquisition cost, and return on ad spend. Every strategy is tied to measurable business outcomes.'
                },
            ],
            cta: {
                text: 'Boost E-commerce Sales',
                link: '#contact',
                icon: <IconRocket size={24} />
            }
        },
        typesOfServices: {
            title: 'Our E-commerce Marketing Services',
            subtitle: 'COMPLETE ONLINE STORE GROWTH',
            description: 'End-to-end e-commerce marketing services designed to increase sales, improve customer retention, and maximize profitability for online stores.',
            services: [
                {
                    id: 1,
                    title: 'Shopping Ads & Product Campaigns',
                    description: 'Strategic management of Google Shopping, Facebook Shop, Instagram Shopping, and other product advertising platforms with feed optimization, competitive bidding, and performance tracking.',
                    icon: <IconAd size={24} />
                },
                {
                    id: 2,
                    title: 'Conversion Rate Optimization',
                    description: 'Systematic testing and optimization of product pages, checkout process, site navigation, and user experience to increase the percentage of visitors who complete purchases.',
                    icon: <IconTrendingUp size={24} />
                },
                {
                    id: 3,
                    title: 'Email Marketing & Automation',
                    description: 'Advanced email marketing including cart abandonment recovery, post-purchase sequences, customer segmentation, personalized recommendations, and lifecycle marketing campaigns.',
                    icon: <IconMail size={24} />
                },
                {
                    id: 4,
                    title: 'Marketplace Optimization',
                    description: 'Complete optimization for Amazon, Flipkart, and other marketplaces including listing optimization, keyword research, sponsored ads, review management, and inventory strategies.',
                    icon: <IconBuildingStore size={24} />
                },
                {
                    id: 5,
                    title: 'Customer Retention Strategies',
                    description: 'Loyalty programs, referral systems, subscription models, and retention campaigns designed to increase customer lifetime value and reduce churn rates.',
                    icon: <IconUsers size={24} />
                },
                {
                    id: 6,
                    title: 'E-commerce SEO & Content',
                    description: 'Product page SEO, category optimization, blog content marketing, and technical SEO specifically designed for e-commerce sites to improve organic visibility and sales.',
                    icon: <IconSearch size={24} />
                }
            ]
        },
        process: {
            title: 'Our E-commerce Marketing Process',
            subtitle: 'SYSTEMATIC SALES OPTIMIZATION',
            description: 'A comprehensive approach to growing e-commerce businesses through strategic marketing, optimization, and customer experience enhancement.',
            steps: [
                {
                    id: 1,
                    title: 'Store Audit & Strategy Development',
                    description: 'Comprehensive analysis of your e-commerce store, customer journey, conversion funnel, and competitor landscape to identify opportunities and develop a customized growth strategy.'
                },
                {
                    id: 2,
                    title: 'Conversion Optimization Setup',
                    description: 'Implementation of tracking, analytics, and conversion optimization tools. Initial improvements to high-impact areas like product pages, checkout process, and site navigation.'
                },
                {
                    id: 3,
                    title: 'Multi-Channel Campaign Launch',
                    description: 'Strategic launch of shopping campaigns, email automation, social media advertising, and marketplace optimization across all relevant channels for maximum reach and sales.'
                },
                {
                    id: 4,
                    title: 'Performance Monitoring & Testing',
                    description: 'Continuous A/B testing of product pages, ad creative, email campaigns, and checkout flow. Data-driven optimization based on conversion rates, customer behavior, and sales performance.'
                },
                {
                    id: 5,
                    title: 'Customer Retention Implementation',
                    description: 'Development and execution of customer retention strategies including loyalty programs, personalized marketing, and lifecycle campaigns to maximize customer lifetime value.'
                },
                {
                    id: 6,
                    title: 'Scaling & Growth Optimization',
                    description: 'Systematic scaling of successful campaigns, expansion to new channels and markets, and continuous optimization of the entire customer acquisition and retention funnel.'
                }
            ]
        },
        testimonials: {
            title: [
                { text: 'E-commerce ', gradient: false },
                { text: 'Success Stories', gradient: true, gradientClass: 'from-orange-600 via-red-500 to-pink-500' }
            ],
            description: 'Real results from e-commerce businesses that achieved remarkable growth',
            testimonials: [
                {
                    id: '1',
                    message: 'DigiAerotech increased our Shopify store revenue by 450% in 8 months. Their conversion optimization and email marketing strategies transformed our business from struggling to thriving.',
                    highlight: 'revenue increased by 450% in 8 months',
                    stars: 5,
                    name: 'Sneha Agarwal',
                    designation: 'Founder',
                    company: 'Handcrafted Jewelry Store'
                },
                {
                    id: '2',
                    message: 'Our Amazon sales tripled after their marketplace optimization. Their product listing improvements and PPC management helped us dominate our category with 40% market share increase.',
                    highlight: 'Amazon sales tripled, 40% market share increase',
                    stars: 5,
                    name: 'Vikram Gupta',
                    designation: 'E-commerce Manager',
                    company: 'Electronics Brand'
                },
                {
                    id: '3',
                    message: 'The email marketing automation they set up recovers 35% of abandoned carts and generates ₹2 lakhs additional revenue monthly. Their customer retention strategies are game-changing.',
                    highlight: 'recovers 35% abandoned carts, ₹2L additional monthly revenue',
                    stars: 5,
                    name: 'Ritu Sharma',
                    designation: 'Owner',
                    company: 'Fashion E-commerce Store'
                }
            ]
        },
        cta: {
            title: 'Ready to Scale Your E-commerce Store?',
            subtitle: 'ACCELERATE YOUR SALES',
            description: 'Contact us for a comprehensive e-commerce audit and customized growth strategy for your online store.'
        }
    },

    'web-design-development': {
        slug: 'web-design-development',
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
                component: TechDiff,
                position: 'afterTech'
            },
            {
                component: ProvideServicesTo,
                props: {
                    heading: 'We do Website Development for',
                    subheading: 'Businesses looking for high-quality web solutions'
                },
                position: 'afterWhyChooseUs'
            }, {
                component: Companies,
                position: 'beforeWhyChooseUs'
            }, {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'What types of websites do you develop?',
                            answer: 'We specialize in developing responsive websites for e-commerce stores, landing pages, business portfolios, startups, blogs, and fully custom web applications tailored to your brand’s needs and customer behavior.',
                            icon: <LayoutGrid />
                        },
                        {
                            id: '2',
                            question: 'How much time does it typically take to launch a website?',
                            answer: 'Our standard turnaround time is 8–9 business days for most projects, including design, development, and initial content population. Timelines may vary based on project scope, feature set, and client feedback cycles.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '3',
                            question: 'Is the website optimized for mobile and modern browsers?',
                            answer: 'Every website we build follows a mobile-first approach and is rigorously tested across modern browsers (Chrome, Firefox, Safari, Edge) and all screen sizes to ensure pixel-perfect responsiveness and accessibility.',
                            icon: <IconDeviceMobile />
                        },
                        {
                            id: '4',
                            question: 'Can I manage my website without technical skills?',
                            answer: 'Absolutely. We use user-friendly Content Management Systems (CMS) such as WordPress and Shopify, enabling you to update content, images, and products effortlessly—without writing a single line of code.',
                            icon: <Settings2 />
                        },
                        {
                            id: '5',
                            question: 'Do you integrate SEO best practices during development?',
                            answer: 'All websites are built with search engine optimization (SEO) in mind. We implement clean code architecture, semantic HTML, meta tags, structured data (schema), optimized images, and fast-loading pages to improve Google rankings.',
                            icon: <SearchCode />
                        },
                        {
                            id: '6',
                            question: 'What if I already have a website but need a redesign?',
                            answer: 'We offer complete website redesign services to transform outdated interfaces into modern, conversion-focused experiences. The new version will be optimized for speed, SEO, mobile responsiveness, and user engagement.',
                            icon: <Brush />
                        },
                        {
                            id: '7',
                            question: 'Which industries do you work with most often?',
                            answer: 'Our portfolio includes websites for real estate, hospitality, healthcare, fashion, education, fitness, food & beverage, consultants, startups, and e-commerce brands—delivering industry-specific solutions and functionality.',
                            icon: <Briefcase />
                        },
                        {
                            id: '8',
                            question: 'How do you ensure fast loading and performance?',
                            answer: 'We implement performance optimization techniques such as image compression, lazy loading, code minification, caching strategies, and CDN integration. Our focus is to keep your Core Web Vitals green and bounce rates low.',
                            icon: <GaugeCircle />
                        },
                        {
                            id: '9',
                            question: 'Is post-launch support and maintenance available?',
                            answer: 'Our service doesn’t end at launch. We offer flexible maintenance plans that include software updates, bug fixes, security monitoring, backups, and performance reviews to ensure your website runs smoothly long-term.',
                            icon: <LifeBuoy />
                        },
                        {
                            id: '10',
                            question: 'Can I track user activity and performance on my website?',
                            answer: 'Yes, we integrate analytics tools such as Google Analytics and Search Console, allowing you to monitor user behavior, traffic sources, and goal conversions for data-driven marketing and business decisions.',
                            icon: <BarChart4 />
                        },
                        {
                            id: '11',
                            question: 'What makes your websites different from templates builders?',
                            answer: 'Unlike generic templates, our websites are built from scratch with your brand’s identity, target audience, and conversion goals in mind. This results in cleaner code, better SEO performance, faster speed, and higher ROI.',
                            icon: <Code2 />
                        },
                        {
                            id: '12',
                            question: 'Do you handle domain and hosting setup?',
                            answer: 'If needed, we assist in registering your domain, setting up secure hosting environments, configuring SSL certificates, and deploying the final website—ensuring everything is optimized, secured, and production-ready.',
                            icon: <ServerCog />
                        }
                    ]
                    ,
                    heading: {
                        part1: 'Frequently Asked ',
                        part2: 'Questions'
                    }
                }
            }
        ],
        hero: {
            initial: "Want ",
            headlineKeywords: ["E-commerce", "Web App", "Landing Page", "Portfolio", "CMS", "Redesign"],
            brandLine: [{ text: "Website Development ?", gradient: false, gradientClass: "text-dark dark:text-white text-5xl" }],
            subheadline: "Professional web development and design services that convert visitors into customers. Fast, responsive, and SEO-optimized.",
            ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Free Quote", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconCode size={34} />,
                    title: "200+ Clients",
                    description: "Successfully served"
                },
                {
                    icon: <IconDeviceDesktop size={34} />,
                    title: "Mobile First",
                    description: "Responsive layouts"
                },
                {
                    icon: <IconRocket size={34} />,
                    title: "8-9 Days",
                    description: "Avg. project delivery"
                },
                {
                    icon: <IconStarsFilled size={34} />,
                    title: "4.8+ Stars",
                    description: "Client satisfaction score"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Key Benefits of ' },
                { text: 'working', gradient: true, gradientClass: 'from-red-600 via-pink-500 to-orange-500' },
                { text: ' with ', gradient: false },
                { text: 'DigiAerotech', gradient: true, gradientClass: 'from-orange-600 via-pink-500 to-red-500' },

            ],
            trustPoints: [
                {
                    icon: <IconCode size={24} />,
                    title: 'Conversion-Driven Design',
                    description: 'Every page is crafted to guide visitors toward action, with clear calls-to-action and user flows that maximize conversions.'
                },
                {
                    icon: <IconDeviceMobile size={24} />,
                    title: 'SEO-Optimized Development',
                    description: 'We integrate SEO best practices from day one. Aligning web design with SEO is a must to drive organic traffic, so we build sites with clean code, keyword-friendly structure, and fast load times.'
                },
                {
                    icon: <IconBrandReact size={24} />,
                    title: 'Mobile-Responsive Layout',
                    description: 'All our websites are fully responsive and tested on every device. Mobile-friendly design isn’t optional – it’s required.'
                },
                {
                    icon: <IconTools size={24} />,
                    title: 'Lightning-Fast Performance',
                    description: 'We optimize images and code for speed. Fast-loading pages improve user satisfaction and SEO: Google favors pages that load quickly.'
                },
                {
                    icon: <IconFriends size={24} />,
                    title: 'User-Friendly CMS',
                    description: 'We often build on platforms like WordPress or Shopify so you can easily manage your own content. You’ll get training and documentation so updating text, images, or products is simple – no developer needed.'
                },
                {
                    icon: <IconSpeakerphone size={24} />,
                    title: 'Ongoing Support',
                    description: 'After launch, we don’t disappear. We offer maintenance and support plans (updates, security, backups, etc.) so your site stays up-to-date and continues to meet your marketing needs.'
                },
            ],
            cta: {
                text: 'Get Started',
                link: '#contact',
                icon: <IconMovie size={24} />
            }
        },
        typesOfServices: {
            title: 'Our Web Development Services',
            subtitle: 'WHAT WE OFFER?',
            description: 'We offer comprehensive web solutions tailored to your business needs. Our services are designed to help you establish a powerful online presence and achieve your digital goals.',
            services: [
                {
                    id: 1,
                    title: 'Custom Website Development',
                    description: 'We create a unique website design that captures your brand and engages customers. From color scheme to imagery, every element is chosen to support your marketing strategy.',
                    icon: <IconDeviceDesktop size={24} />
                },
                {
                    id: 2,
                    title: 'E-Commerce Solutions',
                    description: 'Need an online store? We build e-commerce sites (WooCommerce, Shopify, Magento, etc.) with secure checkout, inventory management, and product pages optimized to sell. We ensure your shopping experience is smooth and conversion-focused.',
                    icon: <IconShoppingCart size={24} />
                },
                {
                    id: 3,
                    title: 'SEO & Analytics Integration',
                    description: 'Every site includes on-page SEO elements. We add meta titles, descriptions, and schema markup, and we connect Google Analytics and Search Console. This foundation helps you attract organic traffic and measure how visitors engage with your site.',
                    icon: <IconBrush size={24} />
                },
                {
                    id: 4,
                    title: 'CMS Development',
                    description: 'We’ll often use WordPress, Shopify, or other CMS so you control the content. You can add pages, blog posts, images, and products easily. We set up the CMS and train you on how to use it.',
                    icon: <IconBrandWordpress size={24} />
                },
                {
                    id: 5,
                    title: 'Performance & Security',
                    description: 'We optimize page speed (since “fast-loading sites outrank slow ones”by compressing images and minifying code. We also install SSL certificates and security measures to protect your site and customers.',
                    icon: <IconCode size={24} />
                },
                {
                    id: 6,
                    title: 'Ongoing Maintenance',
                    description: 'After launch we provide support packages to keep your site updated and secure. We monitor performance and can make tweaks to improve conversions or add new features as your business grows.',
                    icon: <IconDeviceMobile size={24} />
                }
            ]
        },
        process: {
            title: 'Our Development Process',
            subtitle: 'HOW WE WORK',
            description: 'Our structured approach ensures efficient delivery of high-quality web development projects.',
            steps: [
                {
                    id: 1,
                    title: 'Discovery & Planning',
                    description: 'We begin by understanding your business, target audience, and marketing goals. We research competitors and plan a site structure that fits your digital strategy.'
                },
                {
                    id: 2,
                    title: 'Design & Wireframing',
                    description: 'Our designers create mockups for your approval. We focus on compelling visuals and an intuitive layout that guides users toward key actions (calls, signups, purchases).'
                },
                {
                    id: 3,
                    title: 'Development',
                    description: 'After you approve the design, we code the front-end and back-end. We build the site to be responsive and fast, implementing all desired features (forms, shopping cart, etc.).'
                },
                {
                    id: 4,
                    title: 'Content & SEO',
                    description: 'We work with you to add your content (text, images) and we embed SEO elements like keywords, meta tags, and alt text. We make sure each page is optimized for search and ready to convert visitors.'
                },
                {
                    id: 5,
                    title: 'Testing & QA',
                    description: 'Rigorous testing across devices and browsers to ensure perfect functionality and responsiveness.'
                },
                {
                    id: 6,
                    title: 'Launch & Deployment',
                    description: 'Launching your website with proper configuration and optimization for performance.'
                },
                {
                    id: 7,
                    title: 'Support & Maintenance',
                    description: 'Ongoing support and regular updates to keep your website secure and performing optimally.'
                }
            ]
        },
        techStack: {
            title: 'Technologies We Use',
            subtitle: 'OUR TECH STACK',
            description: 'We use the latest and most reliable technologies to build powerful, scalable web solutions.',
            categories: ['Frontend', 'Backend', 'CMS', 'Databases'],
            technologies: [
                { id: 1, name: 'React', logo: '/tech/icons8-react-96.png', category: 'Frontend' },
                { id: 2, name: 'Next.js', logo: '/tech/icons8-next-js-96.svg', category: 'Frontend' },
                { id: 4, name: 'Vue.js', logo: '/tech/icons8-vuejs-96.png', category: 'Frontend' },
                { id: 3, name: 'Tailwind CSS', logo: '/tech/icons8-tailwindcss-96.png', category: 'Frontend' },
                { id: 5, name: 'JavaScript', logo: '/tech/icons8-javascript-96.png', category: 'Frontend' },
                { id: 6, name: 'TypeScript', logo: '/tech/icons8-typescript-96.png', category: 'Frontend' },
                { id: 7, name: 'Node.js', logo: '/tech/icons8-node-js-96.png', category: 'Backend' },
                { id: 8, name: 'Express', logo: '/tech/icons8-express-js-96.png', category: 'Backend' },
                { id: 9, name: 'PHP', logo: '/tech/icons8-php-96.png', category: 'Backend' },
                { id: 10, name: 'Laravel', logo: '/tech/icons8-laravel-96.png', category: 'Backend' },
                { id: 11, name: 'WordPress', logo: '/tech/icons8-wordpress-96.png', category: 'CMS' },
                { id: 12, name: 'Shopify', logo: '/tech/icons8-shopify-96.png', category: 'CMS' },
                { id: 13, name: 'MongoDB', logo: '/tech/icons8-mongodb-96.png', category: 'Databases' },
                { id: 14, name: 'PostgreSQL', logo: '/tech/icons8-postgresql-96.png', category: 'Databases' },
                { id: 15, name: 'MySQL', logo: '/tech/icons8-mysql-96.png', category: 'Databases' },
                // { id: 16, name: 'AWS', logo: '/tech/icons8-aws-96.png', category: 'DevOps' },
                // { id: 17, name: 'Docker', logo: '/tech/icons8-docker-96.png', category: 'DevOps' },
                // { id: 18, name: 'GitHub', logo: '/tech/icons8-github-96.png', category: 'DevOps' }
            ]
        },
        testimonials: {
            title: [
                { text: 'What ', gradient: false },
                { text: 'Our Clients ', gradient: true, gradientClass: 'from-orange-500 via-pink-500 to-red-500' },
                { text: 'Say', gradient: false }
            ],
            description: 'Success stories from businesses we\'ve worked with',
            testimonials: [
                {
                    id: '1',
                    message: 'DigiAerotech transformed our outdated website into a modern, user-friendly platform that has significantly increased our customer engagement and lead generation.',
                    highlight: 'significantly increased our customer engagement',
                    stars: 5,
                    name: 'John Smith',
                    designation: 'CEO',
                    company: 'TechSolutions Inc.'
                },
                {
                    id: '2',
                    message: 'The team at DigiAerotech delivered our e-commerce website ahead of schedule and under budget. The attention to detail and custom features have helped us increase our online sales by 200%.',
                    highlight: 'increase our online sales by 200%',
                    stars: 5,
                    name: 'Sarah Johnson',
                    designation: 'Marketing Director',
                    company: 'FashionRetail Ltd.'
                },
                {
                    id: '3',
                    message: 'Working with DigiAerotech was a seamless experience from start to finish. Their development team understood our unique needs and delivered a website that perfectly represents our brand.',
                    highlight: 'perfectly represents our brand',
                    stars: 4.5,
                    name: 'Michael Brown',
                    designation: 'Operations Manager',
                    company: 'HealthCare Plus'
                }
            ]
        },
        cta: {
            title: 'Ready to Start Your Web Development Project?',
            subtitle: 'GET IN TOUCH',
            description: 'Contact us today to discuss your web development needs and get a free consultation and quote for your project.',
        }
    },

    'social-media-marketing': {
        slug: 'social-media-marketing',
        showSections: {
            hero: true,
            whyChooseUs: true,
            typesOfServices: true,
            process: true,
            techStack: false, // Typically not shown for SMM
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
                    heading: 'We provide Social Media Marketing for',
                    subheading: 'Businesses looking to enhance their online presence and engagement'
                }
            },
            {
                component: FaqSection,
                position: 'afterTestimonials',
                props: {
                    faqs: [
                        {
                            id: '1',
                            question: 'Which social platforms do you specialize in?',
                            answer: 'We manage campaigns across all major platforms including Instagram, Facebook, LinkedIn, Twitter, Pinterest, and TikTok. We recommend platforms based on where your target audience is most active.',
                            icon: <IconBrandInstagram />
                        },
                        {
                            id: '2',
                            question: 'How long does it take to see results?',
                            answer: 'Typically, you\'ll see initial engagement improvements within 2-4 weeks. Significant growth in followers and conversions usually becomes evident after 3-6 months of consistent, strategic posting.',
                            icon: <IconClockHour8 />
                        },
                        {
                            id: '3',
                            question: 'Do you create content or just post it?',
                            answer: 'We offer full-service content creation including photography, videography, graphic design, and copywriting. We can also work with your existing content assets.',
                            icon: <IconPhoto />
                        },
                        {
                            id: '4',
                            question: 'How often will you post on our accounts?',
                            answer: 'Posting frequency is customized to each platform and audience. Typically we recommend 3-5 posts per week on Instagram/Facebook, 1-2 daily tweets, and 2-3 weekly LinkedIn posts.',
                            icon: <IconCalendar />
                        },
                        {
                            id: '5',
                            question: 'Do you run paid ads as well?',
                            answer: 'Yes, we offer complete paid social advertising services including audience targeting, ad creation, budget management, and performance optimization across all major platforms.',
                            icon: <IconCurrencyDollar />
                        },
                        {
                            id: '6',
                            question: 'How do you measure success?',
                            answer: 'We track KPIs like engagement rate, follower growth, website clicks, lead generation, and conversions. Monthly reports show exactly how your social media is performing.',
                            icon: <IconChartBar />
                        }
                    ],
                    heading: {
                        part1: 'Social Media ',
                        part2: 'FAQs'
                    }
                }
            }
        ],
        hero: {
            initial: "Grow ",
            headlineKeywords: [
                "Followers?",
                "Engagement?",
                "Brand?",
                "Leads?",
                "Conversions?",
                "Community?"
            ],
            brandLine: [
                { text: "We are here for you", gradient: false, }
            ],
            subheadline: "Harness the power of content, strategy, and consistency to build a brand that thrives across every platform.", ctaButtons: [
                { icon: <IconFreeRights size={30} />, text: "Get Free Audit", link: "/contact" },
                { icon: <IconPhone size={30} />, text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: <IconUsers size={34} />,
                    title: "10M+ Reach",
                    description: "Across client accounts"
                },
                {
                    icon: <IconRocket size={34} />,
                    title: "3-5X Growth",
                    description: "Average increase"
                },
                {
                    icon: <IconChartBar size={34} />,
                    title: "80% ROI",
                    description: "For paid campaigns"
                },
                {
                    icon: <IconStarsFilled size={34} />,
                    title: "4.9 Stars",
                    description: "Client satisfaction"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'Social Media', gradient: true, gradientClass: 'from-orange-500 via-pink-500 to-red-500' },
                { text: ' Services?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: <IconTarget size={24} />,
                    title: 'Platform-Specific Strategies',
                    description: 'We don\'t use a one-size-fits-all approach. Each platform (Instagram, LinkedIn, etc.) gets a customized strategy tailored to its unique audience and algorithm.'
                },
                {
                    icon: <IconTrendingUp size={24} />,
                    title: 'Data-Driven Optimization',
                    description: 'We constantly analyze performance metrics to refine content strategy, posting times, and ad targeting for maximum engagement and conversions.'
                },
                {
                    icon: <IconPhotoEdit size={24} />,
                    title: 'Professional Content Creation',
                    description: 'Our in-house designers and videographers create scroll-stopping visuals and videos that align with your brand identity and marketing goals.'
                },
                {
                    icon: <IconMessageCircle size={24} />,
                    title: 'Community Management',
                    description: 'We actively engage with your audience through comments, DMs, and stories to build relationships and brand loyalty.'
                },
                {
                    icon: <IconAd size={24} />,
                    title: 'Paid Advertising Expertise',
                    description: 'From awareness campaigns to conversion-focused ads, we optimize every dollar of your ad spend for the best possible return.'
                },
                {
                    icon: <IconReportAnalytics size={24} />,
                    title: 'Transparent Reporting',
                    description: 'Monthly performance reports show exactly what\'s working, with clear insights and recommendations for continuous improvement.'
                },
            ],
            cta: {
                text: 'Boost Your Social Presence',
                link: '#contact',
                icon: <IconRocket size={24} />
            }
        },
        typesOfServices: {
            title: 'Our Social Media Services',
            subtitle: 'COMPLETE SOCIAL SOLUTIONS',
            description: 'End-to-end social media management services tailored to your business goals and target audience.',
            services: [
                {
                    id: 1,
                    title: 'Organic Social Media Management',
                    description: 'Daily management of your social profiles including content creation, posting, community engagement, and growth strategies to build your audience naturally.',
                    icon: <IconUsers size={24} />
                },
                {
                    id: 2,
                    title: 'Paid Social Advertising',
                    description: 'Strategic paid campaigns on Facebook, Instagram, LinkedIn and more. We handle audience targeting, ad creation, budget optimization, and performance tracking.',
                    icon: <IconAd size={24} />
                },
                {
                    id: 3,
                    title: 'Content Creation',
                    description: 'Professional photography, videography, graphic design, and copywriting services to ensure your social content stands out and aligns with your brand.',
                    icon: <IconPhotoEdit size={24} />
                },
                {
                    id: 4,
                    title: 'Influencer Marketing',
                    description: 'We identify and partner with relevant influencers in your industry to expand your reach and credibility through authentic collaborations.',
                    icon: <IconStar size={24} />
                },
                {
                    id: 5,
                    title: 'Social Media Audits',
                    description: 'Comprehensive analysis of your current social presence with actionable recommendations to improve performance and achieve your goals.',
                    icon: <IconAnalyze size={24} />
                },
                {
                    id: 6,
                    title: 'Crisis Management',
                    description: '24/7 monitoring and professional response strategies to protect your brand reputation during social media crises or negative publicity.',
                    icon: <IconAlertCircle size={24} />
                }
            ]
        },
        process: {
            title: 'Our Social Media Process',
            subtitle: 'STRATEGIC APPROACH',
            description: 'A proven methodology for building and maintaining successful social media presence',
            steps: [
                {
                    id: 1,
                    title: 'Discovery & Strategy',
                    description: 'We analyze your business, competitors, and target audience to develop a customized social media strategy with clear objectives and KPIs.'
                },
                {
                    id: 2,
                    title: 'Content Planning',
                    description: 'Monthly content calendars are created with a mix of post types (educational, promotional, engaging) tailored to each platform\'s best practices.'
                },
                {
                    id: 3,
                    title: 'Content Creation',
                    description: 'Our creative team produces high-quality visuals, videos, and copy that reflects your brand voice and resonates with your audience.'
                },
                {
                    id: 4,
                    title: 'Scheduling & Posting',
                    description: 'Content is scheduled at optimal times for each platform using professional tools, with adjustments made based on performance data.'
                },
                {
                    id: 5,
                    title: 'Community Engagement',
                    description: 'Daily monitoring and interaction with your audience to build relationships, answer questions, and foster brand loyalty.'
                },
                {
                    id: 6,
                    title: 'Performance Analysis',
                    description: 'Regular reporting and optimization based on engagement metrics, follower growth, and conversion data to continuously improve results.'
                }
            ]
        },
        testimonials: {
            title: [
                { text: 'Social Media ', gradient: false },
                { text: 'Success Stories', gradient: true, gradientClass: 'from-orange-500 via-pink-500 to-red-500' }
            ],
            description: 'See how we\'ve helped brands transform their social media presence',
            testimonials: [
                {
                    id: '1',
                    message: 'DigiAerotech took our Instagram from 2,000 to 50,000+ followers in 8 months. Their content strategy and community engagement transformed our social presence into a major lead generation channel.',
                    highlight: 'from 2,000 to 50,000+ followers in 8 months',
                    stars: 5,
                    name: 'Priya Sharma',
                    designation: 'Marketing Director',
                    company: 'Fashion Boutique'
                },
                {
                    id: '2',
                    message: 'Our LinkedIn leads increased by 300% after implementing DigiAerotech\'s strategy. They understand how to create content that attracts our ideal B2B clients.',
                    highlight: 'LinkedIn leads increased by 300%',
                    stars: 5,
                    name: 'Rahul Mehta',
                    designation: 'CEO',
                    company: 'SaaS Startup'
                },
                {
                    id: '3',
                    message: 'The Facebook ad campaigns managed by DigiAerotech have consistently delivered a 5x ROI. Their targeting and creative approach is unmatched in our industry.',
                    highlight: 'consistently delivered a 5x ROI',
                    stars: 5,
                    name: 'Neha Patel',
                    designation: 'E-commerce Manager',
                    company: 'Home Decor Brand'
                }
            ]
        },
        cta: {
            title: 'Ready to Transform Your Social Media Presence?',
            subtitle: 'GET STARTED TODAY',
            description: 'Contact us for a free social media audit and strategy session to see how we can grow your brand online.',
            backgroundColor: 'bg-gradient-to-r from-blue-500 to-purple-600'
        }
    },
}

export default function ServicePage() {
    const sectionRef = useRef<HTMLElement>(null);
    const params = useParams<{ slug: string; }>();

    useEffect(() => {
        if (sectionRef.current) {
            inView(sectionRef.current, () => { }, { margin: '-100px' });
        }
    }, []);

    const serviceData = services[params.slug as keyof typeof services];
    if (!serviceData) notFound();

    const { showSections = {}, customSections = [] } = serviceData;

    const renderCustomSections = (position: string) => {
        return customSections
            .filter(section => section.position === position)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((section, idx) => {
                const Component = section.component;
                return (
                    <motion.div
                        key={`custom-${position}-${idx}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                    >
                        <Component {...section.props} />
                    </motion.div>
                );
            });
    };

    return (
        <section ref={sectionRef} className="">
            <div className="mx-auto">
                {showSections.hero !== false && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                        <Hero {...serviceData.hero} />
                    </motion.div>
                )}

                {renderCustomSections('afterHero')}
                {renderCustomSections('beforeWhyChooseUs')}

                {showSections.whyChooseUs !== false && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                        <WhyChooseUs {...serviceData.whyChooseUs} />
                    </motion.div>
                )}

                {renderCustomSections('afterWhyChooseUs')}
                {renderCustomSections('beforeTypes')}

                {showSections.typesOfServices !== false && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <TypesOfServices {...serviceData.typesOfServices} />
                    </motion.div>
                )}

                {renderCustomSections('afterTypes')}
                {renderCustomSections('beforeProcess')}

                {showSections.process !== false && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                        <Process {...serviceData.process} />
                    </motion.div>
                )}

                {renderCustomSections('afterProcess')}
                {renderCustomSections('beforeTech')}

                {showSections.techStack !== false && serviceData.techStack && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <TechStack {...serviceData.techStack} />
                    </motion.div>
                )}

                {renderCustomSections('afterTech')}
                {renderCustomSections('beforeTestimonials')}

                {showSections.testimonials !== false && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
                        <Testimonials {...serviceData.testimonials} />
                    </motion.div>
                )}

                {renderCustomSections('afterTestimonials')}
                {renderCustomSections('beforeCTA')}

                {showSections.cta !== false && (
                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                        <CTA {...serviceData.cta} />
                    </motion.div>
                )}

                {renderCustomSections('afterCTA')}
                {renderCustomSections('afterAll')}
            </div>
        </section>
    );
}