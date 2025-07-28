"use client";
import React, { useRef, useState } from "react";
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
import { IconSearch } from "@tabler/icons-react";
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
                            { name: "Ecommerce Marketing", link: "/services/ecommerce-marketing" },
                        ],
                    },
                    {
                        title: "Web Development",
                        items: [
                            { name: "Web Design & Development", link: "/services/web-design-development" },
                            { name: "Mobile Apps", link: "/services/mobile-apps" },
                            { name: "E-commerce Solutions", link: "/services/ecommerce-solutions" },
                            { name: "Website Maintenance", link: "/services/website-maintenance" },
                            { name: "Custom Development", link: "/services/custom-development" },
                        ],
                    },
                    {
                        title: "Specialized Services",
                        items: [
                            { name: "Content Marketing", link: "/services/content-marketing" },
                            { name: "Email Marketing", link: "/services/email-marketing" },
                            { name: "Marketing Automation", link: "/services/marketing-automation" },
                            { name: "Analytics & Reporting", link: "/services/analytics-reporting" },
                        ],
                    },
                ],
                featured: {
                    title: "Free Digital Audit",
                    description: "Get a comprehensive analysis of your digital presence, marketing strategies, and growth opportunities.",
                    link: "/free-audit",
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
    const ref = useRef(null);
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
                        href="/"
                        variant="primary"
                        visible={visible}
                        className="bg-black text-white dark:bg-white dark:text-black px-2"
                        aria-label="Search"
                        title="Search"
                    >
                        <IconSearch />
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
                            href="/"
                            onClick={() => setIsMobileMenuOpen(false)}
                            variant="primary"
                            visible={visible}
                            className="w-full"
                            aria-label="Search"
                        >
                            <div className="flex items-center justify-center gap-x-2.5">
                                <IconSearch /> Search Now
                            </div>
                        </NavbarButton>
                    </div>
                </MobileNavMenu>
            </MobileNav>
        </ResizableNavbar>
    );
}