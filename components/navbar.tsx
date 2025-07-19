"use client";
import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    MobileNavItems,
} from "@/components/ui/resizeable-navbar";
import { IconSearch } from "@tabler/icons-react";
import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { ModeToggle } from "./ui/toggle";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
    const navItems = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "Services",
            link: "/services",
            dropdown: [
                { name: "Web Development", link: "/services/web-development" },
                { name: "Mobile Apps", link: "/services/mobile-apps" },
                { name: "UI/UX Design", link: "/services/ui-ux-design" },
                { name: "Digital Marketing", link: "/services/digital-marketing" },
                { name: "SEO Services", link: "/services/seo" },
                { name: "Consulting", link: "/services/consulting" },
            ],
        },
        {
            name: "Blog",
            link: "/blog",
        },
        {
            name: "Results",
            link: "/results",
        },
        {
            name: "About",
            link: "/about",
        },
        {
            name: "Contact",
            link: "/contact",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Create our own visible state to pass to buttons
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
        <div className="relative w-full" ref={ref}>
            <Navbar>
                <NavBody>
                    <NavbarLogo visible={visible} />
                    <NavItems items={navItems} />
                    <div className={cn("flex items-center justify-center ml-10", !visible && "mr-8")}>
                        <ModeToggle className={cn(visible && "hidden")} />
                        <NavbarButton
                            variant="secondary"
                            visible={visible}
                            href="tel:+919625707191"
                        >
                            +91 9625707191
                        </NavbarButton>
                        <NavbarButton
                            variant="primary"
                            visible={visible}
                            className="bg-black text-white dark:bg-white dark:text-black"
                        >
                            <IconSearch />
                        </NavbarButton>
                    </div>
                </NavBody>

                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo visible={visible} />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                    </MobileNavHeader>

                    <MobileNavMenu
                        isOpen={isMobileMenuOpen}
                        onClose={() => setIsMobileMenuOpen(false)}
                    >
                        <MobileNavItems
                            items={navItems}
                            onItemClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        />
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="secondary"
                                visible={visible}
                                href="tel:+919625707191"
                                className="text-left"
                            >
                                +91 9625707191
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                visible={visible}
                                className="w-full"
                            >
                                <div className="flex items-center justify-center gap-x-2.5">
                                    <IconSearch /> Search Now
                                </div>
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
        </div>
    );
}