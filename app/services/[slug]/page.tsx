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
} from '@tabler/icons-react';
import { Hero } from '@/components/homepage/hero';
import { TechDiff } from '@/components/services/web-dev-design/tech-diff';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { Companies } from '@/components/homepage/companies';
import { FaqSection } from '@/components/services/faq-section';
import { BarChart4, Briefcase, Brush, Code2, GaugeCircle, LayoutGrid, LifeBuoy, SearchCode, ServerCog, Settings2 } from 'lucide-react';

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
            brandLine: [{ text: "Website Development", gradient: false, gradientClass: "text-dark dark:text-white text-5xl" }],
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
                position:"afterWhyChooseUs",
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
            headlineKeywords: ["Followers", "Engagement", "Brand Awareness", "Leads", "Conversions", "Community"],
            brandLine: [{ text: "Social Media Marketing", gradient: true, gradientClass: "text-black dark:text-white" }],
            subheadline: "Strategic social media management that builds your brand, engages your audience, and drives real business results.",
            ctaButtons: [
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
};

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