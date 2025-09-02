import React from "react"
import { Companies } from "@/components/homepage/companies"
import { FaqSection } from "@/components/services/faq-section"
import { ProvideServicesTo } from "@/components/services/provide-services-to"
import { ServiceData } from "@/services/service.types"
import { ServiceIcons } from "@/constants/service-icons"

const { IconCurrencyRupee,
    IconClockHour8,
    IconSearch,
    IconShoppingCart,
    IconKey,
    IconMapPin,
    IconShield,
    BarChart4,
    IconRocket,
    IconFreeRights,
    IconPhone,
    IconCertificate,
    IconTarget,
    IconAd,
    IconVideo,
    IconRefresh,
    IconTrendingUp,
    IconChartBar
} = ServiceIcons

export const googleAdsService: ServiceData = {
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
                        icon: React.createElement(IconCurrencyRupee, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How long does it take to see results from Google Ads?',
                        answer: 'You can see immediate traffic and impressions, but meaningful results like quality leads and conversions typically develop within 2-4 weeks as we optimize targeting, keywords, and ad copy based on performance data.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'What\'s the difference between Google Ads and SEO?',
                        answer: 'Google Ads provides immediate visibility at the top of search results through paid placement, while SEO builds organic rankings over time. Google Ads offers instant traffic and precise targeting, while SEO provides long-term sustainable traffic.',
                        icon: React.createElement(IconSearch, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Do you manage Shopping Ads for e-commerce businesses?',
                        answer: 'Yes, we specialize in Google Shopping campaigns including product feed optimization, competitive bidding strategies, and performance max campaigns to maximize e-commerce sales and product visibility.',
                        icon: React.createElement(IconShoppingCart, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you choose the right keywords for our campaigns?',
                        answer: 'We conduct comprehensive keyword research using tools like Google Keyword Planner, analyzing search volume, competition, commercial intent, and relevance to your business. We focus on high-converting, profitable keywords.',
                        icon: React.createElement(IconKey, {})
                    },
                    {
                        id: '6',
                        question: 'Can Google Ads work for local businesses?',
                        answer: 'Absolutely! Local campaigns with location extensions, call extensions, and geo-targeting are highly effective for local businesses. We also manage Google My Business optimization to enhance local visibility.',
                        icon: React.createElement(IconMapPin, {})
                    },
                    {
                        id: '7',
                        question: 'How do you prevent wasted ad spend on irrelevant clicks?',
                        answer: 'We use negative keywords, precise match types, audience targeting, geographic restrictions, and dayparting to ensure your ads only show to qualified prospects. Continuous monitoring prevents budget waste.',
                        icon: React.createElement(IconShield, {})
                    },
                    {
                        id: '8',
                        question: 'What reporting and insights do you provide?',
                        answer: 'Weekly performance reports showing impressions, clicks, conversions, cost-per-click, cost-per-acquisition, and ROAS. Plus real-time access to Google Ads dashboard and monthly strategy consultations.',
                        icon: React.createElement(BarChart4, {})
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
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Audit", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconSearch, { size: 34 }),
                title: "10x Avg.",
                description: "Calls from Google Ads"
            },
            {
                icon: React.createElement(IconTrendingUp, { size: 34 }),
                title: "5.2x Avg.",
                description: "ROI for our clients"
            },
            {
                icon: React.createElement(IconTarget, { size: 34 }),
                title: "3.2% CTR",
                description: "Average click rate"
            },
            {
                icon: React.createElement(IconCertificate, { size: 34 }),
                title: "Google Certified",
                description: "Expert partners"
            }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ', gradient: false },
            { text: 'Google Ads', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: ' Management?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconCertificate, { size: 24 }),
                title: 'Google Certified Partners',
                description: 'Our team holds Google Ads certifications across Search, Display, Shopping, Video, and Measurement. We stay current with Google\'s latest features, best practices, and algorithm updates.'
            },
            {
                icon: React.createElement(IconKey, { size: 24 }),
                title: 'Strategic Keyword Research',
                description: 'We identify high-converting keywords with commercial intent while avoiding expensive, low-converting terms. Our keyword strategy focuses on profitable traffic that drives actual business results.'
            },
            {
                icon: React.createElement(IconAd, { size: 24 }),
                title: 'Compelling Ad Copy & Extensions',
                description: 'Our copywriters create persuasive ad text that increases click-through rates and conversions. We utilize all relevant ad extensions to maximize visibility and provide valuable information.'
            },
            {
                icon: React.createElement(IconTarget, { size: 24 }),
                title: 'Precision Targeting & Bidding',
                description: 'Advanced audience targeting, demographic filtering, and smart bidding strategies ensure your ads reach the right people at the optimal cost for maximum return on investment.'
            },
            {
                icon: React.createElement(IconChartBar, { size: 24 }),
                title: 'Conversion Tracking & Optimization',
                description: 'Complete conversion tracking setup including phone calls, form submissions, and e-commerce sales. We optimize campaigns based on actual business outcomes, not just clicks.'
            },
            {
                icon: React.createElement(IconShield, { size: 24 }),
                title: 'Budget Protection & Efficiency',
                description: 'Strategic use of negative keywords, match types, and geographic targeting prevents wasted spend. We continuously monitor and adjust to maximize your budget efficiency.'
            },
        ],
        cta: {
            text: 'Start Google Ads',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
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
                icon: React.createElement(IconSearch, { size: 24 })
            },
            {
                id: 2,
                title: 'Google Shopping Ads',
                description: 'Product-focused campaigns for e-commerce businesses featuring product images, prices, and merchant information. Includes product feed optimization and competitive bidding strategies.',
                icon: React.createElement(IconSearch, { size: 24 })
            },
            {
                id: 3,
                title: 'Display & Video Campaigns',
                description: 'Visual advertising across Google\'s display network and YouTube to build brand awareness, retarget website visitors, and reach new audiences with compelling creative assets.',
                icon: React.createElement(IconVideo, { size: 24 })
            },
            {
                id: 4,
                title: 'Local Campaigns',
                description: 'Location-based advertising for local businesses including Google My Business optimization, local search ads, and store visit tracking to drive foot traffic and local awareness.',
                icon: React.createElement(IconMapPin, { size: 24 })
            },
            {
                id: 5,
                title: 'Performance Max Campaigns',
                description: 'AI-powered campaigns that automatically optimize across all Google channels including Search, Display, YouTube, and Gmail to maximize conversions and reach.',
                icon: React.createElement(IconRocket, { size: 24 })
            },
            {
                id: 6,
                title: 'Remarketing & Audience Targeting',
                description: 'Strategic retargeting campaigns to re-engage website visitors, previous customers, and similar audiences with personalized messaging and offers to increase conversion rates.',
                icon: React.createElement(IconRefresh, { size: 24 })
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
    cta: {
        title: 'Ready to Dominate Google Search Results?',
        subtitle: 'START YOUR GOOGLE ADS CAMPAIGN',
        description: 'Contact us for a free Google Ads audit and customized PPC strategy for your business.'
    }
}