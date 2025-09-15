'use client';
import React from 'react';
import Link from 'next/link';
import {
    IconBrandTwitter,
    IconBrandInstagram,
    IconBrandFacebook,
    IconPhone,
    IconMail,
    IconMapPin,
    IconChevronUp,
    IconSparkles,
    IconBrandLinkedin
} from '@tabler/icons-react';
import { motion } from 'motion/react';
import { ModeToggle } from '../ui/toggle';
import Image from 'next/image';

interface FooterLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
}

interface ContactItemProps {
    icon: React.ReactNode;
    text: string;
    href?: string;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, children, className = "" }) => (
    <Link
        href={href}
        className={`text-muted-foreground hover:text-foreground transition-colors duration-300 ${className}`}
    >
        {children}
    </Link>
);

const ContactItem: React.FC<ContactItemProps> = ({ icon, text, href }) => (
    <div className="flex items-start space-x-3">
        <div className="text-primary mt-0.5 flex-shrink-0">
            {icon}
        </div>
        {href ? (
            <Link
                target="_blank"
                rel="noopener noreferrer"
                href={href}
                className="text-xs sm:text-sm text-muted-foreground leading-relaxed hover:text-foreground transition-colors duration-300"
            >
                {text}
            </Link>
        ) : (
            <span className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {text}
            </span>
        )}
    </div>
);

const SocialIcon: React.FC<{ href: string; icon: React.ReactNode; label: string }> = ({ href, icon, label }) => (
    <Link href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
        <motion.div
            className="p-2 sm:p-3 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
            whileHover={{
                scale: 1.1,
                transition: {
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                }
            }}
            whileTap={{ scale: 0.95 }}
        >
            {icon}
        </motion.div>
    </Link>
);

export const Footer: React.FC = () => {
    const [showScrollTop, setShowScrollTop] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setShowScrollTop(scrollTop > 300);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = (): void => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sparkleAnimation = {
        scale: [1, 1.2, 1],
        rotate: [0, 180, 360],
        opacity: [0.5, 1, 0.5],
        transition: {
            duration: 3,
            repeat: Infinity,
        }
    };

    return (
        <footer className="relative w-full bg-gray-100 dark:bg-gray-950 border-t border-border dark:border-gray-700 overflow-hidden font-nunito">
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <motion.div
                    className="absolute top-4 left-4 sm:top-10 sm:left-10 text-primary"
                    animate={sparkleAnimation}
                >
                    <IconSparkles size={16} className="sm:w-5 sm:h-5" />
                </motion.div>
                <motion.div
                    className="absolute top-8 right-8 sm:top-20 sm:right-20 text-primary"
                    animate={{
                        ...sparkleAnimation,
                        transition: {
                            ...sparkleAnimation.transition,
                            delay: 1
                        }
                    }}
                >
                    <IconSparkles size={14} className="sm:w-4 sm:h-4" />
                </motion.div>
                <motion.div
                    className="absolute bottom-8 left-1/3 sm:bottom-20 text-primary"
                    animate={{
                        ...sparkleAnimation,
                        transition: {
                            ...sparkleAnimation.transition,
                            delay: 2
                        }
                    }}
                >
                    <IconSparkles size={12} className="sm:w-3.5 sm:h-3.5" />
                </motion.div>
            </div>

            {showScrollTop && (
                <motion.button
                    onClick={scrollToTop}
                    className="absolute top-12 right-9 sm:top-6 sm:right-6 lg:top-8 lg:right-8 p-2 sm:p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:shadow-xl z-50 backdrop-blur-sm transition-all duration-300 hover:scale-105"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    transition={{ duration: 0.3 }}
                    aria-label="Scroll to top"
                >
                    <IconChevronUp size={18} className="sm:w-5 sm:h-5" />
                </motion.button>
            )}

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="pt-8 sm:pt-12 lg:pt-16 pb-6 sm:pb-8 lg:pb-10">
                    <div className="mx-auto grid gap-8 sm:gap-10 lg:gap-12 lg:grid-cols-3 mb-8 sm:mb-10 lg:mb-12">
                        <div className="space-y-4 sm:space-y-6">
                            <Link
                                href="/"
                                className="inline-flex items-center space-x-3 group"
                            >
                                <motion.div
                                    className="p-2 rounded-lg text-primary-foreground"
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                >
                                    <span className="relative h-12 w-24 sm:h-12 sm:w-28 lg:h-16 lg:w-30 lg:ml-1 flex justify-center group-hover:text-primary transition-colors duration-300">
                                        <Image
                                            src="/logo.svg"
                                            alt="Rippple"
                                            fill
                                            priority
                                            className="scale-200 ml-9 md:ml-6 object-contain self-start transition-all duration-300 rounded-lg  bg-transparent px-2 sm:px-3 py-2 invert dark:invert-0" />
                                    </span>
                                </motion.div>
                            </Link>

                            <div className="px-3 sm:px-0 space-y-3 sm:space-y-4">
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    At Digi Aerotech, we build predictable, scalable, and profitable marketing systems for service businesses, eCommerce brands, and local entrepreneurs.
                                </p>
                                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                                    If you’re tired of low leads, poor ROI, and unreliable agencies — you’ve just found your team.
                                </p>
                            </div>
                        </div>

                        <div className=" px-3 grid grid-cols-2 gap-6 sm:gap-8 lg:col-span-2">
                            <div className="flex flex-col sm:items-center space-y-3 sm:space-y-4">
                                <h3 className="font-semibold md:-ml-12 text-base sm:text-lg text-foreground">Company Link</h3>
                                <div className="flex flex-col space-y-2 sm:space-y-3">
                                    <FooterLink href="/about">About Us</FooterLink>
                                    <FooterLink href="/contact">Contact Us</FooterLink>
                                    <FooterLink href="/careers">Careers</FooterLink>
                                    <FooterLink href="/bug-report">Report A Bug</FooterLink>
                                    <FooterLink href="/privacy-policy">Privacy Policy</FooterLink>
                                    <FooterLink href="/terms-and-conditions">Terms and Conditions</FooterLink>
                                </div>
                            </div>

                            <div className="space-y-3 sm:space-y-4 col-span-2 sm:col-span-2 lg:col-span-1">
                                <h3 className="font-semibold text-base sm:text-lg text-foreground">Connect Us Here</h3>
                                <div className="space-y-3 sm:space-y-4">
                                    <ContactItem
                                        icon={<IconMapPin size={16} className="sm:w-[18px] sm:h-[18px]" />}
                                        text="Shop No.4, Palika Bazar, New Bus Stand Rd, opposite Nidhi Glass Works, Dera Surjanhar, Ratia, Haryana 125051"
                                        href="https://maps.google.com/?q=Shop+No.4,+Palika+Bazar,+New+Bus+Stand+Rd,+opposite+Nidhi+Glass+Works,+Dera+Surjanhar,+Ratia,+Haryana+125051"
                                    />
                                    <ContactItem
                                        icon={<IconPhone size={16} className="sm:w-[18px] sm:h-[18px]" />}
                                        text="+91 8607119872"
                                        href="tel:+918607119872"
                                    />
                                    <ContactItem
                                        icon={<IconPhone size={16} className="sm:w-[18px] sm:h-[18px]" />}
                                        text="+91 8307105140"
                                        href="tel:+918307105140"
                                    />
                                    <ContactItem
                                        icon={<IconMail size={16} className="sm:w-[18px] sm:h-[18px]" />}
                                        text="business@digiaerotech.com"
                                        href="mailto:business@digiaerotech.com"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col-reverse gap-4 sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-border space-y-4 sm:space-y-0">
                        <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                            © Copyright {new Date().getFullYear()} Digi Aerotech. All rights reserved.
                        </p>

                        <div className="flex space-x-3 sm:space-x-4">
                            <ModeToggle className='rounded-full bg-muted hover:bg-primary-50' />
                            <SocialIcon
                                href="https://twitter.com/digiaerotech"
                                icon={<IconBrandTwitter size={18} className="sm:w-5 sm:h-5" />}
                                label="Twitter"
                            />
                            <SocialIcon
                                href="https://www.instagram.com/digiaerotech/"
                                icon={<IconBrandInstagram size={18} className="sm:w-5 sm:h-5" />}
                                label="Instagram"
                            />
                            <SocialIcon
                                href="https://www.facebook.com/digiaerotech"
                                icon={<IconBrandFacebook size={18} className="sm:w-5 sm:h-5" />}
                                label="Facebook"
                            />
                            <SocialIcon
                                href="https://www.linkedin.com/company/digi-aerotech"
                                icon={<IconBrandLinkedin size={18} className="sm:w-5 sm:h-5" />}
                                label="Linkedin"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-black py-4 border-t border-gray-800">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <p className="text-xs text-gray-500 leading-relaxed">
                        Crafted with dedication by&nbsp;
                        <Link
                            href="https://github.com/developerKeshavKumar"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline decoration-dotted"
                        >
                            Keshav Kumar
                        </Link>
                        , Full-Stack Developer.&nbsp;
                        <span className="block sm:inline">
                            Looking to build an impactful website or web app?&nbsp;
                            <Link href={"mailto:keshav0kumar@hotmail.com"} className="underline decoration-dotted">
                                Let’s connect.
                            </Link>
                        </span>
                    </p>
                </div>
            </div>
        </footer>
    );
};