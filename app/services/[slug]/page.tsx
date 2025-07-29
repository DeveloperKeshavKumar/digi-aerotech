"use client";
import React, { useRef, useState, useEffect } from 'react';
import { useParams } from 'next/navigation'
import { notFound } from 'next/navigation';
import { motion } from 'motion/react';
import { inView } from 'motion';
import { ServiceHero } from '@/components/services/service-hero';
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
} from '@tabler/icons-react';

// Define the service data type
interface ServiceData {
    slug: string;
    hero: {
        title: string;
        subtitle: string;
        description: string;
        image: string;
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
    techStack: {
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
        hero: {
            title: 'Transform Your Digital Presence',
            subtitle: 'CUSTOM SOLUTIONS',
            description: 'DigiaeroTech crafts responsive, SEO-optimized websites that captivate audiences and drive business growth. From stunning designs to powerful functionality, we build digital experiences that convert.',
            image: '/services/1.png'
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
                    icon: <IconTools size={24} />,
                    title: 'User-Friendly CMS',
                    description: 'We often build on platforms like WordPress or Shopify so you can easily manage your own content. You’ll get training and documentation so updating text, images, or products is simple – no developer needed.'
                },
                {
                    icon: <IconTools size={24} />,
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
            categories: ['Frontend', 'Backend', 'CMS', 'Databases', 'DevOps'],
            technologies: [
                { id: 1, name: 'React', logo: '/tech/icons8-react-96.png', category: 'Frontend' },
                { id: 2, name: 'Next.js', logo: '/tech/icons8-next-js-96.svg', category: 'Frontend' },
                { id: 3, name: 'Angular', logo: '/tech/icons8-angularjs-96.png', category: 'Frontend' },
                { id: 4, name: 'Vue.js', logo: '/tech/icons8-vuejs-96.png', category: 'Frontend' },
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
                { id: 16, name: 'AWS', logo: '/tech/icons8-aws-96.png', category: 'DevOps' },
                { id: 17, name: 'Docker', logo: '/tech/icons8-docker-96.png', category: 'DevOps' },
                { id: 18, name: 'GitHub', logo: '/tech/icons8-github-96.png', category: 'DevOps' }
            ]
        },
        testimonials: {
            title: [
                { text: 'What ', gradient: false },
                { text: 'Our Clients ', gradient: true, gradientClass: 'from-blue-600 to-purple-500' },
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
            backgroundColor: 'bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-blue-950/30'
        }
    }
};


export default function ServicePage() {
    const sectionRef = useRef<HTMLElement>(null);
    const [visible, setVisible] = useState(false);
    const params = useParams<{ slug: string; }>()

    useEffect(() => {
        if (sectionRef.current) inView(sectionRef.current, () => setVisible(true), { margin: '-100px' });
    }, []);

    const serviceData = services[params.slug];
    if (!serviceData) notFound();

    return (
        <section ref={sectionRef} className="bg-white dark:bg-gray-900">
            <div className="mx-auto space-y-16">
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <ServiceHero {...serviceData.hero} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
                    <WhyChooseUs {...serviceData.whyChooseUs} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                    <TypesOfServices {...serviceData.typesOfServices} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}>
                    <Process {...serviceData.process} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                    <TechStack {...serviceData.techStack} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.5 }}>
                    <Testimonials {...serviceData.testimonials} />
                </motion.div>

                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}>
                    <CTA {...serviceData.cta} />
                </motion.div>
            </div>
        </section>
    );
}
