import React from "react"
import { Companies } from "@/components/homepage/companies"
import { FaqSection } from "@/components/services/faq-section"
import { ProvideServicesTo } from "@/components/services/provide-services-to"
import { ServiceData } from "@/types/service.types"
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
    IconChartBar,
    IconBuildingStore,
    IconMail,
    IconCalendar,
    IconCurrencyDollar,
    IconUsers,
    IconBrandGoogle,
    ShoppingBag
} = ServiceIcons

export const ecommerceMarketingService: ServiceData = {
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
                            icon: React.createElement(IconShoppingCart, { size: 24 })
                        },
                        {
                            id: '2',
                            question: 'Which e-commerce platforms do you work with?',
                            answer: 'We work with all major platforms including Shopify, WooCommerce, Magento, BigCommerce, Amazon, Flipkart, Myntra, and custom e-commerce solutions. Our strategies adapt to each platform\'s specific features and requirements.',
                            icon: React.createElement(ShoppingBag, { size: 24 })
                        },
                        {
                            id: '3',
                            question: 'How quickly can I expect to see increased sales from e-commerce marketing?',
                            answer: 'Initial improvements in traffic and engagement can appear within 2-4 weeks. Significant sales increases typically develop within 6-12 weeks as we optimize product pages, improve conversion rates, and scale successful campaigns.',
                            icon: React.createElement(IconClockHour8, { size: 24 })
                        },
                        {
                            id: '4',
                            question: 'Do you help with Amazon and marketplace optimization?',
                            answer: 'Yes! We provide complete marketplace optimization including Amazon SEO, product listing optimization, PPC campaigns on Amazon, review management, and strategies for Flipkart, Myntra, and other marketplaces.',
                            icon: React.createElement(IconBuildingStore, { size: 24 })
                        },
                        {
                            id: '5',
                            question: 'How do you improve conversion rates for e-commerce stores?',
                            answer: 'We use A/B testing, heat map analysis, user behavior tracking, checkout optimization, product page improvements, trust signal enhancement, and personalization strategies to systematically improve conversion rates.',
                            icon: React.createElement(IconTrendingUp, { size: 24 })
                        },
                        {
                            id: '6',
                            question: 'What\'s included in your e-commerce email marketing?',
                            answer: 'Our email marketing includes welcome sequences, abandoned cart recovery, post-purchase follow-ups, customer win-back campaigns, product recommendations, and segmented campaigns based on purchase behavior and preferences.',
                            icon: React.createElement(IconMail, { size: 24 })
                        },
                        {
                            id: '7',
                            question: 'How do you handle seasonal e-commerce campaigns?',
                            answer: 'We create comprehensive seasonal strategies for festivals, sales events, and peak shopping periods with advance planning, inventory coordination, promotional campaigns, and budget scaling to maximize revenue during high-traffic periods.',
                            icon: React.createElement(IconCalendar, { size: 24 })
                        },
                        {
                            id: '8',
                            question: 'Can you help reduce our customer acquisition cost?',
                            answer: 'Absolutely! We optimize your entire funnel to reduce CAC through better targeting, improved conversion rates, customer lifetime value optimization, referral programs, and retention strategies that reduce reliance on paid acquisition.',
                            icon: React.createElement(IconCurrencyDollar, { size: 24 })
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
                { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Store Audit", link: "/contact" },
                { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: React.createElement(IconTrendingUp, { size: 34 }),
                    title: "340% Avg. ROI",
                    description: "For e-commerce clients"
                },
                {
                    icon: React.createElement(IconShoppingCart, { size: 34 }),
                    title: "2.8% Avg.",
                    description: "Conversion rate achieved"
                },
                {
                    icon: React.createElement(IconCurrencyDollar, { size: 34 }),
                    title: "₹50Cr+ Sales",
                    description: "Generated for clients"
                },
                {
                    icon: React.createElement(IconUsers, { size: 34 }),
                    title: "200+ Stores",
                    description: "Successfully managed"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'E-commerce Marketing', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
                { text: ' Services?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: React.createElement(IconShoppingCart, { size: 24 }),
                    title: 'E-commerce Conversion Optimization',
                    description: 'Systematic optimization of your entire sales funnel from product discovery to checkout completion, using A/B testing, user behavior analysis, and proven conversion rate optimization techniques.'
                },
                {
                    icon: React.createElement(IconBrandGoogle, { size: 24 }),
                    title: 'Multi-Channel Shopping Campaigns',
                    description: 'Expert management of Google Shopping, Facebook Shop, Instagram Shopping, and marketplace advertising to maximize product visibility and drive qualified traffic across all sales channels.'
                },
                {
                    icon: React.createElement(IconMail, { size: 24 }),
                    title: 'Advanced Email Marketing Automation',
                    description: 'Sophisticated email sequences including welcome series, cart abandonment, post-purchase follow-ups, win-back campaigns, and personalized product recommendations that recover lost sales and increase CLV.'
                },
                {
                    icon: React.createElement(IconChartBar, { size: 24 }),
                    title: 'Customer Lifetime Value Optimization',
                    description: 'Strategic focus on increasing repeat purchases, average order value, and customer retention through loyalty programs, upselling strategies, and personalized marketing campaigns.'
                },
                {
                    icon: React.createElement(IconBuildingStore, { size: 24 }),
                    title: 'Marketplace Management',
                    description: 'Complete optimization and management of your presence on Amazon, Flipkart, Myntra, and other marketplaces with listing optimization, advertising, inventory management, and review optimization.'
                },
                {
                    icon: React.createElement(IconTarget, { size: 24 }),
                    title: 'Performance-Based Growth',
                    description: 'Data-driven approach focused on metrics that matter - revenue, profit margins, customer acquisition cost, and return on ad spend. Every strategy is tied to measurable business outcomes.'
                },
            ],
            cta: {
                text: 'Boost E-commerce Sales',
                link: '#contact',
                icon: React.createElement(IconRocket, { size: 24 })
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
                    icon: React.createElement(IconAd, { size: 24 })
                },
                {
                    id: 2,
                    title: 'Conversion Rate Optimization',
                    description: 'Systematic testing and optimization of product pages, checkout process, site navigation, and user experience to increase the percentage of visitors who complete purchases.',
                    icon: React.createElement(IconTrendingUp, { size: 24 })
                },
                {
                    id: 3,
                    title: 'Email Marketing & Automation',
                    description: 'Advanced email marketing including cart abandonment recovery, post-purchase sequences, customer segmentation, personalized recommendations, and lifecycle marketing campaigns.',
                    icon: React.createElement(IconMail, { size: 24 })
                },
                {
                    id: 4,
                    title: 'Marketplace Optimization',
                    description: 'Complete optimization for Amazon, Flipkart, and other marketplaces including listing optimization, keyword research, sponsored ads, review management, and inventory strategies.',
                    icon: React.createElement(IconBuildingStore, { size: 24 })
                },
                {
                    id: 5,
                    title: 'Customer Retention Strategies',
                    description: 'Loyalty programs, referral systems, subscription models, and retention campaigns designed to increase customer lifetime value and reduce churn rates.',
                    icon: React.createElement(IconUsers, { size: 24 })
                },
                {
                    id: 6,
                    title: 'E-commerce SEO & Content',
                    description: 'Product page SEO, category optimization, blog content marketing, and technical SEO specifically designed for e-commerce sites to improve organic visibility and sales.',
                    icon: React.createElement(IconSearch, { size: 24 })
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
                { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
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
    }