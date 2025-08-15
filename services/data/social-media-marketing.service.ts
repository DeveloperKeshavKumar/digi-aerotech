import React from "react"
import { Companies } from "@/components/homepage/companies"
import { FaqSection } from "@/components/services/faq-section"
import { ProvideServicesTo } from "@/components/services/provide-services-to"
import { ServiceData } from "@/services/service.types"
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
    IconBrandInstagram,    // added missing icon
    IconPhoto,             // added missing icon
    IconCalendar,          // added missing icon
    IconCurrencyDollar,    // added missing icon
    IconUsers,             // added missing icon
    IconStarsFilled,       // added missing icon
    IconPhotoEdit,         // added missing icon
    IconMessageCircle,     // added missing icon
    IconReportAnalytics,   // added missing icon
    IconStar,              // added missing icon
    IconAnalyze,           // added missing icon
    IconAlertCircle        // added missing icon
} = ServiceIcons

export const socialMediaMarketingService: ServiceData = {
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
                        icon: React.createElement(IconBrandInstagram, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How long does it take to see results?',
                        answer: 'Typically, you\'ll see initial engagement improvements within 2-4 weeks. Significant growth in followers and conversions usually becomes evident after 3-6 months of consistent, strategic posting.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Do you create content or just post it?',
                        answer: 'We offer full-service content creation including photography, videography, graphic design, and copywriting. We can also work with your existing content assets.',
                        icon: React.createElement(IconPhoto, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'How often will you post on our accounts?',
                        answer: 'Posting frequency is customized to each platform and audience. Typically we recommend 3-5 posts per week on Instagram/Facebook, 1-2 daily tweets, and 2-3 weekly LinkedIn posts.',
                        icon: React.createElement(IconCalendar, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'Do you run paid ads as well?',
                        answer: 'Yes, we offer complete paid social advertising services including audience targeting, ad creation, budget management, and performance optimization across all major platforms.',
                        icon: React.createElement(IconCurrencyDollar, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'How do you measure success?',
                        answer: 'We track KPIs like engagement rate, follower growth, website clicks, lead generation, and conversions. Monthly reports show exactly how your social media is performing.',
                        icon: React.createElement(BarChart4, { size: 24 })
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
        subheadline: "Harness the power of content, strategy, and consistency to build a brand that thrives across every platform.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Audit", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconUsers, { size: 34 }),
                title: "10M+ Reach",
                description: "Across client accounts"
            },
            {
                icon: React.createElement(IconRocket, { size: 34 }),
                title: "3-5X Growth",
                description: "Average increase"
            },
            {
                icon: React.createElement(IconChartBar, { size: 34 }),
                title: "80% ROI",
                description: "For paid campaigns"
            },
            {
                icon: React.createElement(IconStarsFilled, { size: 34 }),
                title: "4.9 Stars",
                description: "Client satisfaction"
            }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Why Choose Our ', gradient: false },
            { text: 'Social Media', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: ' Services?', gradient: false }
        ],
        trustPoints: [
            {
                icon: React.createElement(IconTarget, { size: 24 }),
                title: 'Platform-Specific Strategies',
                description: 'We don\'t use a one-size-fits-all approach. Each platform (Instagram, LinkedIn, etc.) gets a customized strategy tailored to its unique audience and algorithm.'
            },
            {
                icon: React.createElement(IconTrendingUp, { size: 24 }),
                title: 'Data-Driven Optimization',
                description: 'We constantly analyze performance metrics to refine content strategy, posting times, and ad targeting for maximum engagement and conversions.'
            },
            {
                icon: React.createElement(IconPhotoEdit, { size: 24 }),
                title: 'Professional Content Creation',
                description: 'Our in-house designers and videographers create scroll-stopping visuals and videos that align with your brand identity and marketing goals.'
            },
            {
                icon: React.createElement(IconMessageCircle, { size: 24 }),
                title: 'Community Management',
                description: 'We actively engage with your audience through comments, DMs, and stories to build relationships and brand loyalty.'
            },
            {
                icon: React.createElement(IconAd, { size: 24 }),
                title: 'Paid Advertising Expertise',
                description: 'From awareness campaigns to conversion-focused ads, we optimize every dollar of your ad spend for the best possible return.'
            },
            {
                icon: React.createElement(IconReportAnalytics, { size: 24 }),
                title: 'Transparent Reporting',
                description: 'Monthly performance reports show exactly what\'s working, with clear insights and recommendations for continuous improvement.'
            },
        ],
        cta: {
            text: 'Boost Your Social Presence',
            link: '#contact',
            icon: React.createElement(IconRocket, { size: 24 })
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
                icon: React.createElement(IconUsers, { size: 24 })
            },
            {
                id: 2,
                title: 'Paid Social Advertising',
                description: 'Strategic paid campaigns on Facebook, Instagram, LinkedIn and more. We handle audience targeting, ad creation, budget optimization, and performance tracking.',
                icon: React.createElement(IconAd, { size: 24 })
            },
            {
                id: 3,
                title: 'Content Creation',
                description: 'Professional photography, videography, graphic design, and copywriting services to ensure your social content stands out and aligns with your brand.',
                icon: React.createElement(IconPhotoEdit, { size: 24 })
            },
            {
                id: 4,
                title: 'Influencer Marketing',
                description: 'We identify and partner with relevant influencers in your industry to expand your reach and credibility through authentic collaborations.',
                icon: React.createElement(IconStar, { size: 24 })
            },
            {
                id: 5,
                title: 'Social Media Audits',
                description: 'Comprehensive analysis of your current social presence with actionable recommendations to improve performance and achieve your goals.',
                icon: React.createElement(IconAnalyze, { size: 24 })
            },
            {
                id: 6,
                title: 'Crisis Management',
                description: '24/7 monitoring and professional response strategies to protect your brand reputation during social media crises or negative publicity.',
                icon: React.createElement(IconAlertCircle, { size: 24 })
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
            { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
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
}