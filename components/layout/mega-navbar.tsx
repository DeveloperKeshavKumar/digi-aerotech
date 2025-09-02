"use client";
import React, { useState } from "react";
import {
    ResizableNavbar,
    NavBody,
    NavItems,
    NavbarLogo,
    NavbarButton,
    MobileNav,
    MobileNavHeader,
    MobileNavMenu,
    MobileNavItems,
    MobileNavToggle,
} from "@/components/ui/mega-menubar";
import { ModeToggle } from "../ui/toggle";
import { cn } from "@/lib/utils";
import { IconBrandWhatsapp, IconSearch, IconSmartHome } from "@tabler/icons-react";
import { useScroll, useMotionValueEvent } from "motion/react";

export default function MegaMenuExample() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Services",
            link: "/services",
            megaMenu: {
                categories: [
                    {
                        title: "Digital Marketing",
                        items: [
                            { name: "360 Digital Marketing", link: "/services/360-digital-marketing" },
                            { name: "Social Media Marketing", link: "/services/social-media-marketing" },
                            { name: "Meta Ads", link: "/services/meta-ads" },
                            { name: "Google Ads", link: "/services/google-ads" },
                            { name: "Other Ads (LinkedIn, Snapchat etc)", link: "/services/other-ads" },
                            { name: "Local SEO", link: "/services/local-seo" },
                        ],
                    },
                    {
                        title: "Web Development",
                        items: [
                            { name: "Web Design & Development", link: "/services/web-design-development" },
                            { name: "Mobile Apps Development", link: "/services/mobile-apps-development" },
                            { name: "SEO Services", link: "/services/seo-services" },
                            { name: "ASO Services", link: "/services/aso-services" },
                            { name: "Website Maintenance", link: "/services/website-maintenance" },
                        ],
                    },
                    {
                        title: "Specialized Services",
                        items: [
                            { name: "Leads Generation", link: "/services/leads-generation" },
                            { name: "GMB Services", link: "/services/gmb-services" },
                            { name: "Marketing Automation", link: "/services/marketing-automation" },
                            { name: "Ecommerce Marketing", link: "/services/ecommerce-marketing" },
                        ],
                    },
                ],
                featured: {
                    title: "Want business growth?",
                    description: "Get a comprehensive analysis of your digital presence, marketing strategies, and growth opportunities.",
                    link: "/contact",
                },
            },
        },
        {
            name: "Business",
            link: "/",
            megaMenu: {
                categories: [
                    {
                        title: "Retail & Commerce",
                        items: [
                            { name: "E-commerce Brands", link: "/business/e-commerce-brands" },
                            { name: "Local Businesses", link: "/business/local-businesses" },
                            { name: "Pharma Companies", link: "/business/pharma-companies" },
                            { name: "B2C Services", link: "/business/b2c-services" },
                            { name: "Jewellery", link: "/business/jewellery" },
                            { name: "Furniture", link: "/business/furniture" },
                        ],
                    },
                    {
                        title: "Professional Services",
                        items: [
                            { name: "Real Estate", link: "/business/real-estate" },
                            { name: "B2B Services", link: "/business/b2b-services" },
                            { name: "Consultants", link: "/business/consultants" },
                            { name: "Doctors & Clinics", link: "/business/doctors-clinics" },
                            { name: "Interior Designers", link: "/business/interior-designers" },
                            { name: "Matrimonial Services", link: "/business/matrimonial-services" },
                        ],
                    },
                    {
                        title: "Hospitality & Lifestyle",
                        items: [
                            { name: "Hotels & Resorts", link: "/business/hotel-resorts" },
                            { name: "Restaurants & Cafes", link: "/business/restaurants-cafes" },
                            { name: "Gyms & Fitness", link: "/business/gyms-fitness" },
                            { name: "Travel & Tourism", link: "/business/travel-tourism" },
                            { name: "Fashion Brands", link: "/business/fashion-brands" },
                            { name: "Ayurveda", link: "/business/ayurveda" },
                        ],
                    },
                    {
                        title: "Education & Innovation",
                        items: [
                            { name: "Educational Institutions", link: "/business/educational-institutions" },
                            { name: "Startups & Entrepreneurs", link: "/business/startups-entrepreneurs" },
                        ],
                    },
                    {
                        title: "Industrial & Logistics",
                        items: [
                            { name: "Logistics", link: "/business/logistics" },
                            { name: "Manufacturing", link: "/business/manufacturing" },
                        ],
                    },
                ],
                featured: {
                    title: "Want to know all services?",
                    description: "Specialized digital marketing strategies tailored for your industry's unique challenges and opportunities.",
                    link: "/services",
                },
            },
        },

        {
            name: "Blogs",
            link: "/blogs",
        },
        {
            name: "Results",
            link: "/results",
        },
        {
            name: "About",
            link: "/about",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    return (
        <ResizableNavbar>
            {/* Desktop Navigation */}
            <NavBody>
                <NavbarLogo visible={visible} />
                <NavItems
                    visible={visible}
                    items={navItems}
                    onItemClick={() => { }}
                    className=""
                />
                <div className={cn("flex items-center justify-center", !visible && "mr-8")}>
                    <ModeToggle className={cn(visible && "hidden", "transition-all duration-300")} />
                    <NavbarButton
                        variant="secondary"
                        visible={visible}
                        href="/contact"
                        className="text-left text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400 py-3 mx-2"
                        aria-label="Contact"
                        title="Contact"
                    >
                        Contact Us
                    </NavbarButton>
                    <NavbarButton
                        href="https://wa.me/+918307105140"
                        variant="primary"
                        visible={visible}
                        className="bg-black text-white dark:bg-white dark:text-black px-2"
                        aria-label="Search"
                        title="Search"
                    >
                        <IconBrandWhatsapp />
                    </NavbarButton>
                </div>
            </NavBody>

            {/* Mobile Navigation */}
            <MobileNav>
                <MobileNavHeader>
                    <NavbarLogo />
                    <MobileNavToggle
                        isOpen={isMobileMenuOpen}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    />
                </MobileNavHeader>
                <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                    <MobileNavItems
                        items={navItems}
                        onItemClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="flex w-full flex-col gap-4">
                        <NavbarButton
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="secondary"
                            visible={visible}
                            href="/contact"
                            className="text-left text-white bg-gradient-to-r from-red-600 via-orange-600 to-pink-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400 "
                        >
                            Contact
                        </NavbarButton>
                        <NavbarButton
                            href="https://wa.me/+918307105140"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            visible={visible}
                            className="w-full"
                            aria-label="Search"
                        >
                            <div className="flex items-center justify-center gap-x-2.5">
                                <IconBrandWhatsapp /> <span>WhatsApp</span>
                            </div>
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}