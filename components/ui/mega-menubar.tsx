"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconChevronDown } from "@tabler/icons-react";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
} from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';

import React, { useRef, useState } from "react";

interface NavbarProps {
    children: React.ReactNode;
    className?: string;
}

interface NavBodyProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface NavItemsProps {
    items: {
        name: string;
        link: string;
        dropdown?: {
            name: string;
            link: string;
            icon?: React.ReactNode;
        }[];
        megaMenu?: {
            categories: {
                title: string;
                items: {
                    name: string;
                    link: string;
                    icon?: React.ReactNode;
                }[];
            }[];
            featured?: {
                title: string;
                description: string;
                link: string;
                image?: string;
                position?: 'left' | 'right';
            };
        };
    }[];
    visible?: boolean;
    className?: string;
    onItemClick?: () => void;
}


interface MobileNavProps {
    children: React.ReactNode;
    className?: string;
    visible?: boolean;
}

interface MobileNavHeaderProps {
    children: React.ReactNode;
    className?: string;
}

interface MobileNavMenuProps {
    children: React.ReactNode;
    className?: string;
    isOpen: boolean;
    onClose: () => void;
}

export const ResizableNavbar = ({ children, className }: NavbarProps) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });
    const [visible, setVisible] = useState<boolean>(false);

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    });

    const childrenWithProps = React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
            const childProps = typeof child.props === 'object' && child.props !== null
                ? child.props as Record<string, unknown>
                : {};
            return React.createElement(child.type, {
                ...childProps,
                visible,
            });
        }
        return child;
    });

    return (
        <motion.div
            ref={ref}
            className={cn("fixed inset-x-0 top-2 z-40 w-full", className)}
        >
            {childrenWithProps}
        </motion.div>
    );
};

export const NavItems = ({ items, className, onItemClick, visible }: NavItemsProps) => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [megaMenuOpen, setMegaMenuOpen] = useState<number | null>(null);
    const pathname = usePathname();

    const handleMouseEnter = (idx: number) => {
        setHovered(idx);
        const item = items[idx];
        if (item.megaMenu || item.dropdown) {
            setMegaMenuOpen(idx);
        }
    };

    const handleMouseLeave = () => {
        setHovered(null);
        setMegaMenuOpen(null);
    };

    return (
        <motion.div
            onMouseLeave={handleMouseLeave}
            className={cn(
                "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
                visible && "w-1/2 mx-auto",
                className,
            )}
        >
            {items.map((item, idx) => {
                // Check if any child items are active
                const hasActiveChild = (item.dropdown?.some(subItem => pathname === subItem.link) ?? false) ||
                    (item.megaMenu?.categories.some(category =>
                        category.items.some(subItem => pathname === subItem.link)
                    ) ?? false);

                // For items with dropdowns/megamenus, only consider them active if they have active children
                // For items without dropdowns, consider them active if pathname matches their link
                const hasDropdown = (item.dropdown && item.dropdown.length > 0) || item.megaMenu;
                const isActive = hasDropdown ? hasActiveChild : pathname === item.link;

                return (
                    <div key={`nav-item-${idx}`} className="relative mr-0">
                        {hasDropdown ? (
                            <Link
                                href={item.link}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onClick={onItemClick}
                                className={cn(
                                    "relative px-4 py-2 text-neutral-600 dark:text-neutral-300 cursor-pointer flex items-center",
                                    isActive && "font-semibold text-black dark:text-white"
                                )}
                            >
                                {hovered === idx && (
                                    <motion.div
                                        layoutId="hovered"
                                        className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                                    />
                                )}
                                {/* Only show active background for dropdown items when they have active subitems */}
                                {hasActiveChild && (
                                    <motion.div
                                        layoutId="active"
                                        className="absolute inset-0 h-full w-full rounded-full bg-gray-200 dark:bg-neutral-700"
                                        initial={false}
                                    />
                                )}
                                <span className="relative z-20">{item.name}</span>
                                <IconChevronDown
                                    className={cn(
                                        "relative z-20 h-4 w-4 ml-1 transition-transform duration-200",
                                        megaMenuOpen === idx && "rotate-180"
                                    )}
                                />
                            </Link>
                        ) : (
                            <Link
                                href={item.link}
                                onMouseEnter={() => handleMouseEnter(idx)}
                                onClick={onItemClick}
                                className={cn(
                                    "relative px-3 py-2 text-neutral-600 dark:text-neutral-300 flex items-center justify-center whitespace-nowrap",
                                    isActive && "font-semibold text-black dark:text-white"
                                )}
                            >
                                <span className="relative z-20">{item.name}</span>
                                {isActive && <motion.div
                                    layoutId="active"
                                    className="absolute inset-0 h-full w-full rounded-full bg-gray-200 dark:bg-neutral-700"
                                    initial={false}
                                />}
                            </Link>
                        )}

                        <AnimatePresence>
                            {hasDropdown && megaMenuOpen === idx && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 10 }}
                                    transition={{ duration: 0.2 }}
                                    className={cn(
                                        "absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-white dark:bg-neutral-900 rounded-xl shadow-2xl border border-gray-200 dark:border-neutral-700 z-50 max-h-[60vh] overflow-auto",
                                        item.megaMenu ? "w-[900px] max-w-[90vw]" : "w-48"
                                    )}
                                    onMouseEnter={() => setMegaMenuOpen(idx)}
                                    onMouseLeave={handleMouseLeave}
                                >
                                    {item.megaMenu ? (
                                        <div className="p-4">
                                            <div className="grid grid-cols-12 gap-4">
                                                {/* Categories Section */}
                                                <div
                                                    className={cn(
                                                        "col-span-8",
                                                        item.megaMenu.featured &&
                                                        (item.megaMenu.featured.position === 'left'
                                                            ? "order-2"
                                                            : "order-1")
                                                    )}
                                                >
                                                    <div className="grid grid-cols-3 gap-4">
                                                        {item.megaMenu.categories.map((category, categoryIdx) => (
                                                            <div key={`category-${categoryIdx}`} className="space-y-2">
                                                                <h3 className="text-base font-bold text-gray-900 dark:text-white border-b border-gray-200 dark:border-neutral-700 pb-2">
                                                                    {category.title}
                                                                </h3>
                                                                <div className="space-y-1 pl-2">
                                                                    {category.items.map((subItem, subIdx) => {
                                                                        const isSubItemActive = pathname === subItem.link;
                                                                        return (
                                                                            <Link
                                                                                key={`subitem-${categoryIdx}-${subIdx}`}
                                                                                href={subItem.link}
                                                                                onClick={onItemClick}
                                                                                className={cn(
                                                                                    "group flex items-center text-sm text-neutral-600 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-1.5 rounded-lg",
                                                                                    isSubItemActive && "text-blue-600 dark:text-blue-400 font-medium"
                                                                                )}
                                                                            >
                                                                                {subItem.icon && (
                                                                                    <span className="mr-2 text-neutral-500 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                                                                                        {subItem.icon}
                                                                                    </span>
                                                                                )}
                                                                                {subItem.name}
                                                                            </Link>
                                                                        );
                                                                    })}
                                                                </div>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>

                                                {/* Featured Section */}
                                                {item.megaMenu.featured && (
                                                    <div
                                                        className={cn(
                                                            "col-span-4 border-l border-gray-200 dark:border-neutral-700 pl-4",
                                                            item.megaMenu.featured.position === 'left'
                                                                ? "order-1"
                                                                : "order-2"
                                                        )}
                                                    >
                                                        <div className="space-y-3">
                                                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wide">
                                                                Featured
                                                            </h3>
                                                            <Link
                                                                href={item.megaMenu.featured.link}
                                                                onClick={onItemClick}
                                                                className="group block p-4 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 hover:from-blue-100 hover:to-indigo-100 dark:hover:from-blue-900/30 dark:hover:to-indigo-900/30 transition-all duration-200"
                                                            >
                                                                {item.megaMenu.featured.image && (
                                                                    <div className="mb-3 rounded-lg overflow-hidden">
                                                                        <Image
                                                                            src={item.megaMenu.featured.image}
                                                                            alt={item.megaMenu.featured.title}
                                                                            width={200}
                                                                            height={120}
                                                                            className="w-full h-24 object-cover group-hover:scale-105 transition-transform duration-200"
                                                                        />
                                                                    </div>
                                                                )}
                                                                <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                                                                    {item.megaMenu.featured.title}
                                                                </h4>
                                                                <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                                                                    {item.megaMenu.featured.description}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="py-2 max-h-64 overflow-y-auto">
                                            {item.dropdown?.map((dropdownItem, dropdownIdx) => {
                                                const isDropdownActive = pathname === dropdownItem.link;
                                                return (
                                                    <Link
                                                        key={`dropdown-${idx}-${dropdownIdx}`}
                                                        href={dropdownItem.link}
                                                        onClick={onItemClick}
                                                        className={cn(
                                                            "flex items-center px-4 py-2 text-base text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                                                            isDropdownActive && "font-semibold text-black dark:text-white bg-gray-100 dark:bg-neutral-800"
                                                        )}
                                                    >
                                                        {dropdownItem.icon && (
                                                            <span className="mr-2 text-neutral-500">
                                                                {dropdownItem.icon}
                                                            </span>
                                                        )}
                                                        {dropdownItem.name}
                                                    </Link>
                                                );
                                            })}
                                        </div>
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </motion.div>
    );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "70%" : "100%",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-6 py-2 lg:flex dark:bg-transparent border", // Increased padding
                visible && "bg-white/80 dark:bg-neutral-950/80 border",
                "overflow-visible",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

// Update NavbarLogo to adjust spacing
export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
    return (
        <Link
            href="/"
            className={cn(
                "relative z-20 mr-8 h-12 w-30", // Increased margin
                visible ? "scale-100" : "scale-120 sm:ml-3"
            )}
        >
            <Image
                src="/logo.svg"
                alt="DIGI AEROTECH"
                fill
                priority
                className={cn(
                    "object-contain self-start transition-all duration-300 rounded-lg bg-transparent px-3 py-2 invert dark:invert-0"
                )}
            />
        </Link>
    );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
    return (
        <motion.div
            animate={{
                backdropFilter: visible ? "blur(10px)" : "none",
                boxShadow: visible
                    ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
                    : "none",
                width: visible ? "90%" : "100%",
                paddingRight: visible ? "12px" : "0px",
                paddingLeft: visible ? "12px" : "0px",
                borderRadius: visible ? "40px" : "24px",
                y: visible ? 20 : 0,
            }}
            transition={{
                type: "spring",
                stiffness: 200,
                damping: 50,
            }}
            className={cn(
                "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden rounded-full",
                visible && "bg-white/80 dark:bg-neutral-950/80",
                className,
            )}
        >
            {children}
        </motion.div>
    );
};

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
    return (
        <div className={cn("flex w-full flex-row items-center justify-between px-4", className)}>
            {children}
        </div>
    );
};

export const MobileNavMenu = ({ children, className, isOpen }: MobileNavMenuProps) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className={cn(
                        "absolute inset-x-0 top-18 z-0 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white px-6 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950 max-h-[70vh] overflow-y-auto",
                        className,
                    )}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export const MobileNavItems = ({ items, className, onItemClick }: NavItemsProps) => {
    const [expandedStates, setExpandedStates] = useState<{
        mainItems: Record<number, boolean>;
        categories: Record<string, boolean>;
    }>({
        mainItems: {},
        categories: {}
    });
    const pathname = usePathname();

    const toggleMainItem = (idx: number) => {
        setExpandedStates(prev => ({
            ...prev,
            mainItems: {
                ...prev.mainItems,
                [idx]: !prev.mainItems[idx]
            }
        }));
    };

    const toggleCategory = (parentIdx: number, categoryIdx: number) => {
        const categoryKey = `${parentIdx}-${categoryIdx}`;
        setExpandedStates(prev => ({
            ...prev,
            categories: {
                ...prev.categories,
                [categoryKey]: !prev.categories[categoryKey]
            }
        }));
    };

    return (
        <div className={cn("flex w-full flex-col gap-1", className)}>
            {items.map((item, idx) => {
                const isActive = pathname === item.link ||
                    (item.dropdown?.some(subItem => pathname === subItem.link) ?? false) ||
                    (item.megaMenu?.categories.some(category =>
                        category.items.some(subItem => pathname === subItem.link)
                    ) ?? false);

                const hasDropdown = (item.dropdown && item.dropdown.length > 0) || item.megaMenu;
                const isMainItemExpanded = expandedStates.mainItems[idx] || false;

                return (
                    <div key={`mobile-nav-item-${idx}`} className="w-full">
                        <div className={cn(
                            "flex items-center rounded-xl",
                            isActive ? "bg-gray-100 dark:bg-neutral-800" : "hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                        )}>
                            <Link
                                href={item.link}
                                onClick={(e) => {
                                    if (hasDropdown) {
                                        e.preventDefault();
                                        toggleMainItem(idx);
                                    } else {
                                        onItemClick?.();
                                    }
                                }}
                                className={cn(
                                    "flex-1 px-4 py-3 text-neutral-600 dark:text-neutral-300",
                                    isActive && "font-semibold text-black dark:text-white"
                                )}
                            >
                                {item.name}
                            </Link>
                            {hasDropdown && (
                                <button
                                    onClick={() => toggleMainItem(idx)}
                                    className="p-3 text-neutral-600 dark:text-neutral-300 rounded-xl"
                                    aria-expanded={isMainItemExpanded}
                                >
                                    <IconChevronDown
                                        className={cn(
                                            "h-4 w-4 transition-transform duration-200",
                                            isMainItemExpanded && "rotate-180"
                                        )}
                                    />
                                </button>
                            )}
                        </div>

                        <AnimatePresence>
                            {hasDropdown && isMainItemExpanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="overflow-hidden"
                                >
                                    <div className="ml-4 pl-4 pt-1 space-y-1 border-l-2 border-gray-200 dark:border-neutral-700">
                                        {item.megaMenu ? (
                                            item.megaMenu.categories.map((category, categoryIdx) => {
                                                const categoryKey = `${idx}-${categoryIdx}`;
                                                const isCategoryExpanded = expandedStates.categories[categoryKey] || false;

                                                return (
                                                    <div key={`mobile-category-${categoryKey}`} className="pt-2">
                                                        <div className="flex items-center">
                                                            <button
                                                                onClick={() => toggleCategory(idx, categoryIdx)}
                                                                className={cn(
                                                                    "flex-1 text-left text-sm font-medium text-gray-900 dark:text-white mb-1 px-2 py-1 rounded-lg",
                                                                    isCategoryExpanded ? "bg-gray-200 dark:bg-neutral-700" : "hover:bg-gray-100 dark:hover:bg-neutral-800/50"
                                                                )}
                                                            >
                                                                {category.title}
                                                                <IconChevronDown
                                                                    className={cn(
                                                                        "h-3 w-3 ml-1 inline-block transition-transform duration-200",
                                                                        isCategoryExpanded && "rotate-180"
                                                                    )}
                                                                />
                                                            </button>
                                                        </div>

                                                        <AnimatePresence>
                                                            {isCategoryExpanded && (
                                                                <motion.div
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.15 }}
                                                                    className="overflow-hidden ml-2 pl-2 border-l border-gray-300 dark:border-neutral-600"
                                                                >
                                                                    <div className="space-y-1 py-1">
                                                                        {category.items.map((subItem, subIdx) => {
                                                                            const isSubItemActive = pathname === subItem.link;
                                                                            return (
                                                                                <Link
                                                                                    key={`mobile-subitem-${categoryKey}-${subIdx}`}
                                                                                    href={subItem.link}
                                                                                    onClick={onItemClick}
                                                                                    className={cn(
                                                                                        "block w-full rounded-lg px-3 py-2 text-sm text-neutral-600 dark:text-neutral-300 transition-colors",
                                                                                        isSubItemActive
                                                                                            ? "bg-gray-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                                                                                            : "hover:bg-gray-100 dark:hover:bg-neutral-800/50"
                                                                                    )}
                                                                                >
                                                                                    {subItem.name}
                                                                                </Link>
                                                                            );
                                                                        })}
                                                                    </div>
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                );
                                            })
                                        ) : (
                                            item.dropdown?.map((dropdownItem, dropdownIdx) => {
                                                const isDropdownActive = pathname === dropdownItem.link;
                                                return (
                                                    <Link
                                                        key={`mobile-dropdown-${idx}-${dropdownIdx}`}
                                                        href={dropdownItem.link}
                                                        onClick={onItemClick}
                                                        className={cn(
                                                            "block w-full rounded-lg px-3 py-2 text-sm text-neutral-600 dark:text-neutral-300 transition-colors",
                                                            isDropdownActive
                                                                ? "bg-gray-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                                                                : "hover:bg-gray-100 dark:hover:bg-neutral-800/50"
                                                        )}
                                                    >
                                                        {dropdownItem.name}
                                                    </Link>
                                                );
                                            })
                                        )}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                );
            })}
        </div>
    );
};

export const MobileNavToggle = ({ isOpen, onClick }: { isOpen: boolean; onClick: () => void; }) => {
    return (
        <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors">
            {isOpen ? (
                <IconX className="text-black dark:text-white h-5 w-5" onClick={onClick} />
            ) : (
                <IconMenu2 className="text-black dark:text-white h-5 w-5" onClick={onClick} />
            )}
        </button>
    );
};

export const NavbarButton = ({
    href,
    as: Tag = "a",
    children,
    className,
    variant = "primary",
    visible,
    ...props
}: {
    href?: string;
    as?: React.ElementType;
    children: React.ReactNode;
    className?: string;
    visible?: boolean
    variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
        | React.ComponentPropsWithoutRef<"a">
        | React.ComponentPropsWithoutRef<"button">
    )) => {
    const baseStyles =
        "px-4 py-2 button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-800 ease-in-out inline-block text-center";

    const variantStyles = {
        primary:
            "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        secondary: "bg-transparent shadow-none dark:text-white",
        dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
        gradient:
            "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
    };

    return (
        <Tag
            href={href || undefined}
            className={cn(baseStyles, variantStyles[variant], className, visible ? "rounded-full" : "rounded-lg")}
            {...props}
        >
            {children}
        </Tag>
    );
};