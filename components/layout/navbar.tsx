"use client";
import {
    ResizableNavbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
    MobileNavItems,
} from "@/components/ui/resizable-navbar";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import { useState, useRef } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";
import { ModeToggle } from "../ui/toggle";
import { cn } from "@/lib/utils";

export function Navbar() {

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
        <div className="relative w-full" ref={ref}>
            <ResizableNavbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo visible={visible} />
                    <div className={cn("flex items-center justify-center ml-10", !visible && "mr-8")}>
                        <ModeToggle className={cn(visible && "hidden")} />
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
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-black text-white dark:bg-white dark:text-black px-2"
                            aria-label="WhatsApp Us"
                            title="WhatsApp Us"
                        >
                            <IconBrandWhatsapp />
                        </NavbarButton>
                    </div>
                </NavBody>

                {/* Mobile Navigation */}
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
                                target="_blank"
                                rel="noopener noreferrer"
                                visible={visible}
                                className="w-full"
                                aria-label="WhatsApp Us"
                            >
                                <div className="flex items-center justify-center gap-x-2.5">
                                    <IconBrandWhatsapp /> Whatsapp Us
                                </div>
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </ResizableNavbar>
        </div>
    );
}