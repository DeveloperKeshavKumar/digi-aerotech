import React from 'react';
import { ServiceData } from "@/types/service.types";
import { Companies } from '@/components/homepage/companies';
import { ProvideServicesTo } from '@/components/services/provide-services-to';
import { FaqSection } from '@/components/services/faq-section';
import { WhoWeWorkWith } from '@/components/homepage/who-we-work-with';
import { Struggles } from '@/components/homepage/struggles';
import { ServiceIcons } from '@/constants/service-icons';
import { ArrowRight } from 'lucide-react';

const { IconSearch, IconTrendingUp, IconTarget, IconFileText, IconLink, IconWorld, IconChartBar, IconUsers, IconRocket, IconStarsFilled, IconPhone, IconFreeRights, IconEdit, IconClockHour8, Briefcase, IconPackage, BarChart4, Settings2, IconBrandGoogle } = ServiceIcons;

export const seoService: ServiceData = {
    slug: 'seo-services',
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
                heading: 'We provide SEO Services for',
                subheading: 'Businesses seeking sustainable organic growth and top search rankings'
            }
        },
        {
            component: FaqSection,
            position: 'afterTestimonials',
            props: {
                faqs: [
                    {
                        id: '1',
                        question: 'How long does it take to rank #1 on Google with SEO?',
                        answer: 'SEO is a long-term strategy. Initial improvements typically appear in 3-4 months, with significant ranking improvements in 6-12 months. Competitive keywords may take longer, but our proven strategies consistently deliver top 3 rankings for targeted terms.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'What\'s the difference between SEO and paid advertising?',
                        answer: 'SEO drives organic traffic without ongoing ad spend, building long-term visibility and credibility. While paid ads stop when you stop paying, SEO creates sustainable traffic growth that compounds over time with better ROI.',
                        icon: React.createElement(IconBrandGoogle, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Do you guarantee first page Google rankings?',
                        answer: 'We don\'t make unrealistic guarantees, but our data-driven approach consistently achieves first-page rankings for targeted keywords. We focus on sustainable, white-hat techniques that deliver lasting results rather than quick fixes.',
                        icon: React.createElement(IconTarget, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'What\'s included in your monthly SEO package?',
                        answer: 'Comprehensive keyword research, on-page optimization, technical SEO fixes, content creation, link building, local SEO, competitor analysis, and detailed monthly reports with ranking improvements and traffic growth.',
                        icon: React.createElement(IconPackage, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you measure SEO success and ROI?',
                        answer: 'We track keyword rankings, organic traffic growth, click-through rates, conversion rates, and leads from organic search. Monthly reports show progress with clear metrics demonstrating how SEO drives business growth.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'Can you improve SEO for any type of business or industry?',
                        answer: 'Yes! We\'ve successfully optimized websites across all industries - B2B services, e-commerce, healthcare, legal, real estate, manufacturing, and more. Our strategies adapt to industry-specific search behaviors and competition levels.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'Will you optimize existing website or create new content?',
                        answer: 'Both! We optimize your existing pages for better performance while creating new, keyword-targeted content that drives additional traffic. Our approach maximizes your current assets while expanding your organic reach.',
                        icon: React.createElement(IconEdit, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'How does technical SEO improve our search rankings?',
                        answer: 'Technical SEO ensures Google can properly crawl, index, and understand your website. We fix site speed, mobile responsiveness, schema markup, and crawl errors - foundational elements that significantly impact search visibility.',
                        icon: React.createElement(Settings2, { size: 24 })
                    }
                ],
                heading: {
                    part1: 'SEO Services ',
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
                    { text: "Tired of Being " },
                    { text: 'Invisible on Google?', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
                    { text: " We Fix That with " },
                    { text: "Proven SEO Strategies", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
                ],
                subheadline: "Stop losing customers to competitors who rank higher. Our SEO gets you found, clicked, and chosen.",
                painPoints: [
                    "Your website is buried on page 2+ of Google",
                    "Competitors always show up before you do",
                    "Low website traffic despite having a great product/service",
                    "Your business doesn't appear in local searches",
                    "Previous SEO agencies made promises but delivered no results",
                    "You're spending too much on ads because organic traffic is low"
                ],
                solutionPoints: [
                    "Top 3 Google rankings for your most important keywords",
                    "Dominate local search results and beat competitors",
                    "10x more qualified organic traffic and leads",
                    "Your business shows up first in local searches",
                    "Transparent reporting with measurable ranking improvements",
                    "Sustainable organic growth that reduces your ad dependency"
                ],
                cta: { icon: React.createElement(ArrowRight), text: "Get My SEO Audit", link: "/contact" }
            },
            position: 'beforeWhyChooseUs'
        }
    ],
    hero: {
        initial: "Need ",
        headlineKeywords: [
            "Top Rankings?",
            "More Traffic?",
            "Better Visibility?",
            "Organic Growth?",
            "Google Presence?",
            "Search Dominance?"
        ],
        brandLine: [
            { text: "Professional SEO Services", gradient: false }
        ],
        subheadline: "Get your business found on Google with proven SEO strategies. We optimize your website for higher rankings, increased organic traffic, and more qualified leads from search engines.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Free SEO Audit", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconTrendingUp, { size: 34 }),
                title: "500% Avg.",
                description: "Growth in organic traffic"
            },
            {
                icon: React.createElement(IconTarget, { size: 34 }),
                title: "85% Times",
                description: "Ranked in top 3"
            },
            {
                icon: React.createElement(IconUsers, { size: 34 }),
                title: "200+ Clients",
                description: "Successfully ranked"
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
            { text: 'SEO Services', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: '?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconSearch, { size: 24 }),
                title: 'Advanced Keyword Research',
                description: 'We identify high-value, low-competition keywords that your target audience actually searches for. Our research uncovers hidden opportunities competitors miss, giving you a strategic advantage.'
            },
            {
                icon: React.createElement(IconFileText, { size: 24 }),
                title: 'Content-Driven SEO Strategy',
                description: 'Our SEO goes beyond technical fixes. We create valuable, keyword-optimized content that both search engines and users love, establishing your authority and driving engagement.'
            },
            {
                icon: React.createElement(IconLink, { size: 24 }),
                title: 'Quality Link Building',
                description: 'We build high-authority backlinks from relevant, trusted websites through ethical outreach and content marketing. Quality links boost your domain authority and search rankings.'
            },
            {
                icon: React.createElement(IconWorld, { size: 24 }),
                title: 'Technical SEO Excellence',
                description: 'Our technical experts optimize site speed, mobile responsiveness, crawlability, and schema markup. We fix the foundation issues that prevent your site from ranking higher.'
            },
            {
                icon: React.createElement(IconChartBar, { size: 24 }),
                title: 'Data-Driven Optimization',
                description: 'Every SEO decision is backed by data analysis. We continuously monitor performance, test improvements, and adapt strategies based on algorithm changes and market trends.'
            },
            {
                icon: React.createElement(IconRocket, { size: 24 }),
                title: 'Local & National SEO',
                description: 'Whether you serve local customers or compete nationally, we optimize for the right geographic targets. Our local SEO gets you found in "near me" searches and Google Maps.'
            }
        ],
        cta: {
            text: 'Start SEO Growth',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
        }
    },
    typesOfServices: {
        title: 'Our Comprehensive SEO Services',
        subtitle: 'COMPLETE SEO SOLUTIONS',
        description: 'Full-spectrum SEO services designed to improve your search rankings, drive organic traffic, and grow your business sustainably.',
        services: [
            {
                id: 1,
                title: 'On-Page SEO Optimization',
                description: 'Optimize title tags, meta descriptions, headers, content, and internal linking structure. We ensure every page is perfectly optimized for target keywords and user experience.',
                icon: React.createElement(IconEdit, { size: 24 })
            },
            {
                id: 2,
                title: 'Technical SEO Audit & Fixes',
                description: 'Comprehensive technical analysis and fixes for site speed, mobile responsiveness, crawl errors, schema markup, and indexing issues that impact search performance.',
                icon: React.createElement(Settings2, { size: 24 })
            },
            {
                id: 3,
                title: 'Keyword Research & Strategy',
                description: 'In-depth keyword research to identify high-value opportunities. We analyze search volume, competition, and user intent to target the most profitable keywords.',
                icon: React.createElement(IconTarget, { size: 24 })
            },
            {
                id: 4,
                title: 'Content Marketing & SEO',
                description: 'Create valuable, keyword-optimized content that ranks well and engages users. Blog posts, guides, and resources that establish authority and drive traffic.',
                icon: React.createElement(IconFileText, { size: 24 })
            },
            {
                id: 5,
                title: 'Link Building & Authority',
                description: 'Ethical link building strategies to earn high-quality backlinks from authoritative websites. Improve domain authority and search engine trust signals.',
                icon: React.createElement(IconLink, { size: 24 })
            },
            {
                id: 6,
                title: 'Local SEO & Google My Business',
                description: 'Optimize for local searches with Google My Business management, local citations, reviews optimization, and location-based keyword targeting.',
                icon: React.createElement(IconWorld, { size: 24 })
            }
        ]
    },
    process: {
        title: 'Our Proven SEO Process',
        subtitle: 'STRATEGIC METHODOLOGY',
        className: 'border-t border-border dark:border-gray-700',
        description: 'A systematic approach to SEO that delivers sustainable rankings and measurable growth for your business.',
        steps: [
            {
                id: 1,
                title: 'SEO Audit & Analysis',
                description: 'Comprehensive website audit analyzing technical issues, content gaps, keyword opportunities, and competitor strategies. We identify exactly what needs improvement.'
            },
            {
                id: 2,
                title: 'Keyword Research & Strategy',
                description: 'Deep keyword research to identify high-value opportunities. We analyze search volume, competition, and user intent to create a targeted keyword strategy.'
            },
            {
                id: 3,
                title: 'On-Page Optimization',
                description: 'Optimize all on-page elements including titles, meta descriptions, headers, content, and internal linking. Every page is perfectly optimized for target keywords.'
            },
            {
                id: 4,
                title: 'Technical SEO Implementation',
                description: 'Fix technical issues affecting search performance - site speed, mobile optimization, crawl errors, schema markup, and indexing problems.'
            },
            {
                id: 5,
                title: 'Content Creation & Link Building',
                description: 'Create valuable, optimized content and build high-quality backlinks from authoritative websites to boost domain authority and rankings.'
            },
            {
                id: 6,
                title: 'Monitor, Report & Optimize',
                description: 'Continuous monitoring of rankings, traffic, and performance. Monthly reports with insights and ongoing optimization based on data and algorithm changes.'
            }
        ]
    },
    techStack: {
        title: 'Our SEO Technology Stack',
        subtitle: 'ADVANCED SEO TOOLS',
        description: 'We use industry-leading SEO tools and platforms to research, optimize, and track your search performance.',
        categories: ['Research Tools', 'Analytics', 'Technical SEO', 'Tracking'],
        technologies: [
            { id: 1, name: 'SEMrush', logo: '/tech/icons8-semrush-96.png', category: 'Research Tools' },
            { id: 2, name: 'Ahrefs', logo: '/tech/icons8-ahrefs-96.png', category: 'Research Tools' },
            { id: 3, name: 'Google Analytics', logo: '/tech/icons8-google-analytics-96.png', category: 'Analytics' },
            { id: 4, name: 'Google Search Console', logo: '/tech/icons8-google-search-console-96.png', category: 'Analytics' },
            { id: 5, name: 'Screaming Frog', logo: '/tech/icons8-screaming-frog-96.png', category: 'Technical SEO' },
            { id: 6, name: 'PageSpeed Insights', logo: '/tech/icons8-pagespeed-96.png', category: 'Technical SEO' },
            { id: 7, name: 'Moz Pro', logo: '/tech/icons8-moz-96.png', category: 'Tracking' },
            { id: 8, name: 'Ubersuggest', logo: '/tech/icons8-ubersuggest-96.png', category: 'Research Tools' }
        ]
    },
    testimonials: {
        title: [
            { text: 'SEO ', gradient: false },
            { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
        ],
        description: 'Real businesses achieving top Google rankings and explosive organic growth',
        testimonials: [
            {
                id: '1',
                message: 'DigiAerotech took our website from page 5 to position #1 for our main keywords in just 8 months. Our organic traffic increased 600% and leads doubled. Their SEO expertise is unmatched!',
                highlight: 'organic traffic increased 600%',
                stars: 5,
                name: 'Rajesh Kumar',
                designation: 'Business Owner',
                company: 'Legal Services Firm'
            },
            {
                id: '2',
                message: 'We were struggling with visibility on Google. Their comprehensive SEO strategy got us ranking for 50+ keywords in the top 3 positions. Our website now generates 10x more qualified leads.',
                highlight: 'ranking for 50+ keywords in top 3',
                stars: 5,
                name: 'Priya Singh',
                designation: 'Marketing Manager',
                company: 'Healthcare Clinic'
            },
            {
                id: '3',
                message: 'The technical SEO fixes alone improved our site speed by 70% and mobile performance dramatically. Combined with their content strategy, we now dominate local search results.',
                highlight: 'dominate local search results',
                stars: 5,
                name: 'Ankit Sharma',
                designation: 'Founder',
                company: 'Home Services Company'
            }
        ]
    },
    cta: {
        title: 'Ready to Dominate Google Search Results?',
        subtitle: 'START YOUR SEO JOURNEY',
        description: 'Get a comprehensive SEO audit and custom strategy to outrank competitors and drive more organic traffic to your website.'
    }
};