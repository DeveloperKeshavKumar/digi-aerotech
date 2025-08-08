import React from "react"
import { Companies } from "@/components/homepage/companies"
import { FaqSection } from "@/components/services/faq-section"
import { ProvideServicesTo } from "@/components/services/provide-services-to"
import { ServiceData } from "@/types/service.types"
import { ServiceIcons } from "@/constants/service-icons"

const {
    IconCurrencyRupee,
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
    IconChartBar,
    IconWorld,
    IconBrandLinkedin,
    IconBrandTiktok,
    Settings2,
    IconPhoto,
    IconUsers,
    IconBrandSnapchat,
    IconBrandPinterest,
    IconBrandX,
    IconBrandYoutube
} = ServiceIcons

export const otherAdsService: ServiceData = {
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
                        icon: React.createElement(IconWorld, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How do you decide which platforms are right for my business?',
                        answer: 'We analyze your target audience demographics, behavior, and platform usage patterns. B2B companies often benefit from LinkedIn, while consumer brands might perform better on TikTok or Pinterest, depending on their audience.',
                        icon: React.createElement(IconTarget, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Is LinkedIn advertising worth the higher cost per click?',
                        answer: 'For B2B companies, LinkedIn\'s higher CPC is often justified by superior lead quality and professional targeting options. We typically see 40-60% higher conversion rates despite the premium pricing.',
                        icon: React.createElement(IconBrandLinkedin, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Can TikTok and Snapchat ads work for businesses targeting older demographics?',
                        answer: 'While these platforms skew younger, both have growing older user bases. We analyze your specific audience data and test small budgets initially to determine effectiveness before scaling campaigns.',
                        icon: React.createElement(IconBrandTiktok, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'How do you manage campaigns across multiple platforms efficiently?',
                        answer: 'We use centralized reporting dashboards, standardized creative templates adapted per platform, and strategic budget allocation based on performance data. Each platform gets customized content while maintaining brand consistency.',
                        icon: React.createElement(Settings2, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What\'s the minimum budget needed for effective multi-platform advertising?',
                        answer: 'We recommend ₹30,000-50,000 monthly across platforms for meaningful testing and optimization. This allows proper budget distribution and sufficient data collection for each platform.',
                        icon: React.createElement(IconCurrencyRupee, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'Do you create platform-specific content or reuse the same creatives?',
                        answer: 'We create platform-specific content optimized for each channel\'s format, audience behavior, and best practices. While maintaining brand consistency, we adapt messaging and visuals for platform-specific performance.',
                        icon: React.createElement(IconPhoto, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'How do you track and compare performance across different platforms?',
                        answer: 'We use unified tracking with UTM parameters, conversion pixels, and centralized analytics dashboards to compare cost-per-acquisition, return on ad spend, and lifetime value across all platforms.',
                        icon: React.createElement(BarChart4, { size: 24 })
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
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Platform Strategy", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconWorld, { size: 34 }),
                title: "12+ Platforms",
                description: "We manage"
            },
            {
                icon: React.createElement(IconUsers, { size: 34 }),
                title: "5B+ Users",
                description: "Total reach potential"
            },
            {
                icon: React.createElement(IconTrendingUp, { size: 34 }),
                title: "3.8x Avg.",
                description: "ROI across platforms"
            },
            {
                icon: React.createElement(IconCertificate, { size: 34 }),
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
                icon: React.createElement(IconWorld, { size: 24 }),
                title: 'Platform Expertise Across Channels',
                description: 'Certified specialists for each platform with deep understanding of LinkedIn\'s professional targeting, TikTok\'s creative formats, Pinterest\'s visual discovery, and Snapchat\'s AR capabilities.'
            },
            {
                icon: React.createElement(IconTarget, { size: 24 }),
                title: 'Strategic Platform Selection',
                description: 'We don\'t spray and pray - we strategically select platforms based on your audience demographics, business goals, and where your competitors aren\'t effectively reaching customers.'
            },
            {
                icon: React.createElement(IconPhoto, { size: 24 }),
                title: 'Platform-Native Creative Development',
                description: 'Custom creative assets optimized for each platform\'s unique format, audience behavior, and algorithm preferences. What works on LinkedIn won\'t work on TikTok - we get that.'
            },
            {
                icon: React.createElement(IconChartBar, { size: 24 }),
                title: 'Unified Performance Tracking',
                description: 'Centralized reporting that shows ROI, cost-per-acquisition, and performance metrics across all platforms in one dashboard, making it easy to compare and optimize budget allocation.'
            },
            {
                icon: React.createElement(IconRefresh, { size: 24 }),
                title: 'Cross-Platform Retargeting',
                description: 'Advanced audience syncing and retargeting strategies that follow your prospects across platforms, creating cohesive customer journeys and improving overall conversion rates.'
            },
            {
                icon: React.createElement(IconRocket, { size: 24 }),
                title: 'Emerging Platform Early Adoption',
                description: 'We stay ahead of trends and test new advertising platforms early, giving you first-mover advantages and lower competition costs on emerging channels before they become saturated.'
            },
        ],
        cta: {
            text: 'Expand Your Reach',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
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
                icon: React.createElement(IconBrandLinkedin, { size: 24 })
            },
            {
                id: 2,
                title: 'Snapchat Ads',
                description: 'Creative video advertising for younger demographics with trending content, AR filters, and viral potential. Ideal for brand awareness, app installs, and reaching Gen-Z and millennial audiences.',
                icon: React.createElement(IconBrandSnapchat, { size: 24 })
            },
            {
                id: 3,
                title: 'Pinterest Advertising',
                description: 'Visual discovery advertising perfect for e-commerce, lifestyle brands, and businesses with visual products. High-intent users actively seeking inspiration and products to purchase.',
                icon: React.createElement(IconBrandPinterest, { size: 24 })
            },
            {
                id: 4,
                title: 'Twitter (X) Advertising',
                description: 'Real-time engagement advertising for news, trends, and conversations. Excellent for brand awareness, event promotion, and reaching audiences during trending topics and current events.',
                icon: React.createElement(IconBrandX, { size: 24 })
            },
            {
                id: 5,
                title: 'YouTube Advertising',
                description: 'Video advertising across the world\'s second-largest search engine with diverse formats including skippable ads, bumper ads, and video discovery ads for maximum reach and engagement.',
                icon: React.createElement(IconBrandYoutube, { size: 24 })
            },
            {
                id: 6,
                title: 'Amazon & E-commerce Ads',
                description: 'Product advertising on Amazon, Flipkart, and other e-commerce platforms to capture high-intent shoppers at the point of purchase with sponsored products and display ads.',
                icon: React.createElement(IconShoppingCart, { size: 24 })
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
}