import React from "react"
import { Companies } from "@/components/homepage/companies"
import { FaqSection } from "@/components/services/faq-section"
import { ProvideServicesTo } from "@/components/services/provide-services-to"
import { ServiceData } from "@/services/service.types"
import { ServiceIcons } from "@/constants/service-icons"
import { TechDiff } from "@/components/services/web-dev-design/tech-diff"

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
    LayoutGrid,
    IconDeviceMobile,
    Settings2,
    SearchCode,
    Brush,
    Briefcase,
    GaugeCircle,
    LifeBuoy,
    Code2,
    ServerCog,
    IconCode,
    IconDeviceDesktop,
    IconStarsFilled,
    IconBrandReact,
    IconTools,
    IconFriends,
    IconSpeakerphone,
    IconMovie,
    IconBrush,
    IconBrandWordpress
} = ServiceIcons

export const webDevelopmentService: ServiceData = {
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
                        icon: React.createElement(LayoutGrid, { size: 24 })
                    },
                    {
                        id: '2',
                        question: 'How much time does it typically take to launch a website?',
                        answer: 'Our standard turnaround time is 8–9 business days for most projects, including design, development, and initial content population. Timelines may vary based on project scope, feature set, and client feedback cycles.',
                        icon: React.createElement(IconClockHour8, { size: 24 })
                    },
                    {
                        id: '3',
                        question: 'Is the website optimized for mobile and modern browsers?',
                        answer: 'Every website we build follows a mobile-first approach and is rigorously tested across modern browsers (Chrome, Firefox, Safari, Edge) and all screen sizes to ensure pixel-perfect responsiveness and accessibility.',
                        icon: React.createElement(IconDeviceMobile, { size: 24 })
                    },
                    {
                        id: '4',
                        question: 'Can I manage my website without technical skills?',
                        answer: 'Absolutely. We use user-friendly Content Management Systems (CMS) such as WordPress and Shopify, enabling you to update content, images, and products effortlessly—without writing a single line of code.',
                        icon: React.createElement(Settings2, { size: 24 })
                    },
                    {
                        id: '5',
                        question: 'Do you integrate SEO best practices during development?',
                        answer: 'All websites are built with search engine optimization (SEO) in mind. We implement clean code architecture, semantic HTML, meta tags, structured data (schema), optimized images, and fast-loading pages to improve Google rankings.',
                        icon: React.createElement(SearchCode, { size: 24 })
                    },
                    {
                        id: '6',
                        question: 'What if I already have a website but need a redesign?',
                        answer: 'We offer complete website redesign services to transform outdated interfaces into modern, conversion-focused experiences. The new version will be optimized for speed, SEO, mobile responsiveness, and user engagement.',
                        icon: React.createElement(Brush, { size: 24 })
                    },
                    {
                        id: '7',
                        question: 'Which industries do you work with most often?',
                        answer: 'Our portfolio includes websites for real estate, hospitality, healthcare, fashion, education, fitness, food & beverage, consultants, startups, and e-commerce brands—delivering industry-specific solutions and functionality.',
                        icon: React.createElement(Briefcase, { size: 24 })
                    },
                    {
                        id: '8',
                        question: 'How do you ensure fast loading and performance?',
                        answer: 'We implement performance optimization techniques such as image compression, lazy loading, code minification, caching strategies, and CDN integration. Our focus is to keep your Core Web Vitals green and bounce rates low.',
                        icon: React.createElement(GaugeCircle, { size: 24 })
                    },
                    {
                        id: '9',
                        question: 'Is post-launch support and maintenance available?',
                        answer: 'Our service doesn’t end at launch. We offer flexible maintenance plans that include software updates, bug fixes, security monitoring, backups, and performance reviews to ensure your website runs smoothly long-term.',
                        icon: React.createElement(LifeBuoy, { size: 24 })
                    },
                    {
                        id: '10',
                        question: 'Can I track user activity and performance on my website?',
                        answer: 'Yes, we integrate analytics tools such as Google Analytics and Search Console, allowing you to monitor user behavior, traffic sources, and goal conversions for data-driven marketing and business decisions.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '11',
                        question: 'What makes your websites different from templates builders?',
                        answer: 'Unlike generic templates, our websites are built from scratch with your brand’s identity, target audience, and conversion goals in mind. This results in cleaner code, better SEO performance, faster speed, and higher ROI.',
                        icon: React.createElement(BarChart4, { size: 24 })
                    },
                    {
                        id: '12',
                        question: 'Do you handle domain and hosting setup?',
                        answer: 'If needed, we assist in registering your domain, setting up secure hosting environments, configuring SSL certificates, and deploying the final website—ensuring everything is optimized, secured, and production-ready.',
                        icon: React.createElement(ServerCog, { size: 24 })
                    }
                ],
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
        brandLine: [{ text: "Website Development ?", gradient: false, gradientClass: "from-orange-500 via-pink-500 to-red-500" }],
        subheadline: "Professional web development and design services that convert visitors into customers. Fast, responsive, and SEO-optimized.",
        ctaButtons: [
            { icon: React.createElement(IconFreeRights, { size: 30 }), text: "Get Free Quote", link: "/contact" },
            { icon: React.createElement(IconPhone, { size: 30 }), text: "+91 86071 19872", link: "tel:+918607119872", variant: "secondary" }
        ],
        stats: [
            {
                icon: React.createElement(IconCode, { size: 34 }),
                title: "200+ Clients",
                description: "Successfully served"
            },
            {
                icon: React.createElement(IconDeviceDesktop, { size: 34 }),
                title: "Mobile First",
                description: "Responsive layouts"
            },
            {
                icon: React.createElement(IconRocket, { size: 34 }),
                title: "8-9 Days",
                description: "Avg. project delivery"
            },
            {
                icon: React.createElement(IconStarsFilled, { size: 34 }),
                title: "4.8+ Stars",
                description: "Client satisfaction score"
            }
        ]
    },
    whyChooseUs: {
        title: [
            { text: 'Key Benefits of ' },
            { text: 'working', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
            { text: ' with ', gradient: false },
            { text: 'DigiAerotech', gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
        ],
        trustPoints: [
            {
                icon: React.createElement(IconCode, { size: 24 }),
                title: 'Conversion-Driven Design',
                description: 'Every page is crafted to guide visitors toward action, with clear calls-to-action and user flows that maximize conversions.'
            },
            {
                icon: React.createElement(IconDeviceMobile, { size: 24 }),
                title: 'SEO-Optimized Development',
                description: 'We integrate SEO best practices from day one. Aligning web design with SEO is a must to drive organic traffic, so we build sites with clean code, keyword-friendly structure, and fast load times.'
            },
            {
                icon: React.createElement(IconBrandReact, { size: 24 }),
                title: 'Mobile-Responsive Layout',
                description: 'All our websites are fully responsive and tested on every device. Mobile-friendly design isn’t optional – it’s required.'
            },
            {
                icon: React.createElement(IconTools, { size: 24 }),
                title: 'Lightning-Fast Performance',
                description: 'We optimize images and code for speed. Fast-loading pages improve user satisfaction and SEO: Google favors pages that load quickly.'
            },
            {
                icon: React.createElement(IconFriends, { size: 24 }),
                title: 'User-Friendly CMS',
                description: 'We often build on platforms like WordPress or Shopify so you can easily manage your own content. You’ll get training and documentation so updating text, images, or products is simple – no developer needed.'
            },
            {
                icon: React.createElement(IconSpeakerphone, { size: 24 }),
                title: 'Ongoing Support',
                description: 'After launch, we don’t disappear. We offer maintenance and support plans (updates, security, backups, etc.) so your site stays up-to-date and continues to meet your marketing needs.'
            },
        ],
        cta: {
            text: 'Get Started',
            link: '#contact',
            icon: React.createElement(IconMovie, { size: 24 })
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
                icon: React.createElement(IconDeviceDesktop, { size: 24 })
            },
            {
                id: 2,
                title: 'E-Commerce Solutions',
                description: 'Need an online store? We build e-commerce sites (WooCommerce, Shopify, Magento, etc.) with secure checkout, inventory management, and product pages optimized to sell. We ensure your shopping experience is smooth and conversion-focused.',
                icon: React.createElement(IconShoppingCart, { size: 24 })
            },
            {
                id: 3,
                title: 'SEO & Analytics Integration',
                description: 'Every site includes on-page SEO elements. We add meta titles, descriptions, and schema markup, and we connect Google Analytics and Search Console. This foundation helps you attract organic traffic and measure how visitors engage with your site.',
                icon: React.createElement(IconBrush, { size: 24 })
            },
            {
                id: 4,
                title: 'CMS Development',
                description: 'We’ll often use WordPress, Shopify, or other CMS so you control the content. You can add pages, blog posts, images, and products easily. We set up the CMS and train you on how to use it.',
                icon: React.createElement(IconBrandWordpress, { size: 24 })
            },
            {
                id: 5,
                title: 'Performance & Security',
                description: 'We optimize page speed (since “fast-loading sites outrank slow ones”by compressing images and minifying code. We also install SSL certificates and security measures to protect your site and customers.',
                icon: React.createElement(IconCode, { size: 24 })
            },
            {
                id: 6,
                title: 'Ongoing Maintenance',
                description: 'After launch we provide support packages to keep your site updated and secure. We monitor performance and can make tweaks to improve conversions or add new features as your business grows.',
                icon: React.createElement(IconDeviceMobile, { size: 24 })
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
    cta: {
        title: 'Ready to Start Your Web Development Project?',
        subtitle: 'GET IN TOUCH',
        description: 'Contact us today to discuss your web development needs and get a free consultation and quote for your project.',
    }
}