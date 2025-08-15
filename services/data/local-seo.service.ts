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
    IconBrandGoogle,
    IconStar,
    IconList,
    IconBuilding,
    IconUsers,
    IconEdit,
    IconLink,
    IconDeviceMobile
} = ServiceIcons

export const localSeoService: ServiceData = {
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
                            icon: React.createElement(IconMapPin, { size: 24 })
                        },
                        {
                            id: '2',
                            question: 'How long does it take to see Local SEO results?',
                            answer: 'Initial improvements in Google My Business visibility can appear within 2-4 weeks. Significant improvements in local rankings and increased customer inquiries typically develop within 3-6 months of consistent optimization.',
                            icon: React.createElement(IconClockHour8, { size: 24 })
                        },
                        {
                            id: '3',
                            question: 'What is Google My Business and why is it important?',
                            answer: 'Google My Business (GMB) is your free business listing on Google that appears in local searches and Maps. It\'s crucial for local visibility, showing your hours, location, reviews, photos, and contact information to potential customers.',
                            icon: React.createElement(IconBrandGoogle, { size: 24 })
                        },
                        {
                            id: '4',
                            question: 'How do online reviews impact local SEO rankings?',
                            answer: 'Reviews are a major local ranking factor. More positive reviews improve your rankings, while review velocity (getting new reviews regularly) and responding to reviews also boost your local SEO performance significantly.',
                            icon: React.createElement(IconStar, { size: 24 })
                        },
                        {
                            id: '5',
                            question: 'Can Local SEO help if I serve multiple cities or areas?',
                            answer: 'Yes! We create location-specific pages for each service area, optimize for multiple city keywords, and manage separate Google My Business listings for each location to maximize visibility across all service areas.',
                            icon: React.createElement(IconMapPin, { size: 24 })
                        },
                        {
                            id: '6',
                            question: 'What are local citations and why do they matter?',
                            answer: 'Local citations are online mentions of your business name, address, and phone number (NAP) on directories, websites, and social platforms. Consistent citations across the web improve local search rankings and credibility.',
                            icon: React.createElement(IconList, { size: 24 })
                        },
                        {
                            id: '7',
                            question: 'Do I need a physical address for Local SEO to work?',
                            answer: 'While a physical address helps, service-area businesses can still benefit from Local SEO. We optimize for service areas, use proper schema markup, and focus on location-based keywords relevant to your service zones.',
                            icon: React.createElement(IconBuilding, { size: 24 })
                        },
                        {
                            id: '8',
                            question: 'How do you track and measure Local SEO success?',
                            answer: 'We track local keyword rankings, Google My Business insights, website traffic from local searches, phone calls, direction requests, and customer inquiries to measure and improve your local online presence.',
                            icon: React.createElement(BarChart4, { size: 24 })
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
                { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Local Audit", link: "/contact" },
                { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
            ],
            stats: [
                {
                    icon: React.createElement(IconMapPin, { size: 34 }),
                    title: "89% Local",
                    description: "Searches result in action"
                },
                {
                    icon: React.createElement(IconTrendingUp, { size: 34 }),
                    title: "280% Avg.",
                    description: "Growth in local visibility"
                },
                {
                    icon: React.createElement(IconStar, { size: 34 }),
                    title: "4.7+ Rating",
                    description: "Average client rating"
                },
                {
                    icon: React.createElement(IconUsers, { size: 34 }),
                    title: "500+ Businesses",
                    description: "Locally optimized till now"
                }
            ]
        },
        whyChooseUs: {
            title: [
                { text: 'Why Choose Our ', gradient: false },
                { text: 'Local SEO', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
                { text: ' Services?', gradient: false }
            ],
            trustPoints: [
                {
                    icon: React.createElement(IconMapPin, { size: 24 }),
                    title: 'Google My Business Optimization',
                    description: 'Complete GMB optimization including profile setup, category selection, post scheduling, review management, and Q&A optimization to maximize your local search visibility and customer engagement.'
                },
                {
                    icon: React.createElement(IconList, { size: 24 }),
                    title: 'Local Citation Building',
                    description: 'Strategic citation building across high-authority local directories, industry-specific platforms, and location-based websites to improve local search rankings and business credibility.'
                },
                {
                    icon: React.createElement(IconStar, { size: 24 }),
                    title: 'Review Management System',
                    description: 'Comprehensive review management including review generation campaigns, response strategies, and reputation monitoring to build trust and improve local search rankings.'
                },
                {
                    icon: React.createElement(IconSearch, { size: 24 }),
                    title: 'Local Keyword Optimization',
                    description: 'Targeted optimization for location-based keywords, "near me" searches, and geo-specific terms that your local customers use to find businesses like yours.'
                },
                {
                    icon: React.createElement(IconBuilding, { size: 24 }),
                    title: 'Multi-Location Management',
                    description: 'Expert management of multiple business locations with location-specific landing pages, individual GMB profiles, and targeted local content strategies for each service area.'
                },
                {
                    icon: React.createElement(IconChartBar, { size: 24 }),
                    title: 'Local Performance Tracking',
                    description: 'Detailed tracking of local rankings, GMB insights, foot traffic, phone calls, and customer inquiries with monthly reports showing your local market domination progress.'
                },
            ],
            cta: {
                text: 'Dominate Local Search',
                link: '#contact',
                icon: React.createElement(IconMapPin, { size: 24 })
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
                    icon: React.createElement(IconBrandGoogle, { size: 24 })
                },
                {
                    id: 2,
                    title: 'Local Citation Building',
                    description: 'Strategic citation building across authoritative local directories, industry platforms, and geographic-specific websites to improve local search rankings and online presence consistency.',
                    icon: React.createElement(IconList, { size: 24 })
                },
                {
                    id: 3,
                    title: 'Review Management & Generation',
                    description: 'Comprehensive review management including automated review requests, response management, reputation monitoring, and strategies to generate more positive customer reviews.',
                    icon: React.createElement(IconStar, { size: 24 })
                },
                {
                    id: 4,
                    title: 'Local Content Marketing',
                    description: 'Location-specific content creation including local landing pages, community event coverage, local news integration, and geo-targeted blog content that resonates with local audiences.',
                    icon: React.createElement(IconEdit, { size: 24 })
                },
                {
                    id: 5,
                    title: 'Local Link Building',
                    description: 'Acquisition of high-quality local backlinks from community organizations, local news sites, chamber of commerce, and industry associations to boost local search authority.',
                    icon: React.createElement(IconLink, { size: 24 })
                },
                {
                    id: 6,
                    title: 'Mobile & Voice Search Optimization',
                    description: 'Optimization for mobile searches and voice queries with focus on conversational keywords, featured snippets, and mobile-friendly user experience for local searchers.',
                    icon: React.createElement(IconDeviceMobile, { size: 24 })
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
                { text: 'Success Stories', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" }
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
    }
