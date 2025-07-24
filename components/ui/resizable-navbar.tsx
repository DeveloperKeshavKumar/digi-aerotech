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
import { BorderBeam } from "./border-beam";


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
    dropdown?: { name: string; link: string; }[];
  }[];
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

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "55%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        minWidth: "800px",
        position: "relative",
      }}
      className={cn(
        "relative mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-full bg-transparent px-4 py-2 lg:flex dark:bg-transparent border",
        visible && "bg-white/80 dark:bg-neutral-950/80 border",
        "overflow-visible",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const pathname = usePathname();

  const handleMouseEnter = (idx: number) => {
    setHovered(idx);
    const item = items[idx];
    if (item.dropdown) {
      setDropdownOpen(idx);
    }
  };

  const handleMouseLeave = () => {
    setHovered(null);
    setDropdownOpen(null);
  };

  return (
    <motion.div
      onMouseLeave={handleMouseLeave}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium text-zinc-600 transition duration-200 hover:text-zinc-800 lg:flex lg:space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => {
        const isActive = pathname === item.link || (item.dropdown?.some(subItem => pathname === subItem.link) ?? false);
        const hasDropdown = item.dropdown && item.dropdown.length > 0;

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
                {isActive && (
                  <motion.div
                    layoutId="active"
                    className="absolute inset-0 h-full w-full rounded-full bg-gray-200 dark:bg-neutral-700"
                    initial={false}
                  />
                )}
                <span className="relative z-20">{item.name}</span>
                <IconChevronDown
                  className={cn(
                    "relative z-20 h-4 w-4 transition-transform duration-200",
                    dropdownOpen === idx && "rotate-180"
                  )}
                />
              </Link>
            ) : (
              <Link
                onMouseEnter={() => handleMouseEnter(idx)}
                onClick={onItemClick}
                className={cn(
                  "relative px-4 py-2 text-neutral-600 dark:text-neutral-300",
                  isActive && "font-semibold text-black dark:text-white"
                )}
                href={item.link}
              >
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-gray-100 dark:bg-neutral-800"
                  />
                )}
                {isActive && (
                  <motion.div
                    layoutId="active"
                    className="absolute inset-0 h-full w-full rounded-full bg-gray-200 dark:bg-neutral-700"
                    initial={false}
                  />
                )}
                <span className="relative z-20">{item.name}</span>
              </Link>
            )}

            <AnimatePresence>
              {hasDropdown && dropdownOpen === idx && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white dark:bg-neutral-900 rounded-lg shadow-lg border border-gray-200 dark:border-neutral-700 py-2 z-50"
                  onMouseEnter={() => setDropdownOpen(idx)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.dropdown?.map((dropdownItem, dropdownIdx) => {
                    const isDropdownActive = pathname === dropdownItem.link;
                    return (
                      <Link
                        key={`dropdown-${idx}-${dropdownIdx}`}
                        href={dropdownItem.link}
                        onClick={onItemClick}
                        className={cn(
                          "block px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors",
                          isDropdownActive && "font-semibold text-black dark:text-white bg-gray-100 dark:bg-neutral-800"
                        )}
                      >
                        {dropdownItem.name}
                      </Link>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </motion.div>
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

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between px-4",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-18 z-0 flex w-full flex-col items-start justify-start gap-4 rounded-2xl bg-white px-6 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
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
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
  const pathname = usePathname();

  const toggleExpanded = (idx: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className={cn("flex w-full flex-col gap-2", className)}>
      {items.map((item, idx) => {
        const isActive = pathname === item.link || (item.dropdown?.some(subItem => pathname === subItem.link) ?? false);
        const hasDropdown = item.dropdown && item.dropdown.length > 0;
        const isExpanded = expandedItems.has(idx);

        return (
          <div key={`mobile-nav-item-${idx}`} className="w-full">
            {hasDropdown ? (
              <>
                <Link
                  href={item.link}
                  onClick={onItemClick}
                  className={cn(
                    "w-full rounded-xl px-4 py-3 text-neutral-600 transition-colors dark:text-neutral-300 flex items-center justify-between",
                    isActive
                      ? "bg-gray-100 font-semibold text-black dark:bg-neutral-800 dark:text-white"
                      : "hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                  )}
                >
                  <span>{item.name}</span>
                </Link>
                <button
                  onClick={() => toggleExpanded(idx)}
                  className={cn(
                    "w-full rounded-xl px-4 py-2 text-neutral-600 transition-colors dark:text-neutral-300 flex items-center justify-center",
                    "hover:bg-gray-50 dark:hover:bg-neutral-800/50 -mt-1"
                  )}
                >
                  <IconChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isExpanded && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pl-4 pt-2 space-y-1">
                        {item.dropdown?.map((dropdownItem, dropdownIdx) => {
                          const isDropdownActive = pathname === dropdownItem.link;
                          return (
                            <Link
                              key={`mobile-dropdown-${idx}-${dropdownIdx}`}
                              href={dropdownItem.link}
                              onClick={onItemClick}
                              className={cn(
                                "block w-full rounded-lg px-4 py-2 text-sm text-neutral-600 dark:text-neutral-300 transition-colors",
                                isDropdownActive
                                  ? "bg-gray-200 font-semibold text-black dark:bg-neutral-700 dark:text-white"
                                  : "hover:bg-gray-100 dark:hover:bg-neutral-800/50"
                              )}
                            >
                              {dropdownItem.name}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </>
            ) : (
              <Link
                onClick={onItemClick}
                className={cn(
                  "w-full rounded-xl px-4 py-3 text-neutral-600 transition-colors dark:text-neutral-300 block",
                  isActive
                    ? "bg-gray-100 font-semibold text-black dark:bg-neutral-800 dark:text-white"
                    : "hover:bg-gray-50 dark:hover:bg-neutral-800/50"
                )}
                href={item.link}
              >
                {item.name}
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
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

export const NavbarLogo = ({ visible }: { visible?: boolean }) => {
  return (
    <Link
      href="/"
      className={cn("relative z-20 mr-auto h-12 w-30", visible ? "scale-100" : "scale-120 sm:ml-3")}
    >
      <Image
        src="/logo.svg"
        alt="DIGI AEROTECH"
        fill
        className={cn(
          "object-contain self-start transition-all duration-300 rounded-lg  bg-transparent px-3 py-2 invert dark:invert-0"
        )}
      />
    </Link>
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
      {
        variant === "secondary" && (
          <BorderBeam
            duration={2}
            size={120}
            reverse={true}
            className="rounded-lg dark:from-red-50 dark:via-white dark:to-white from-gray-600 via-gray-600 to-gray-600 "
          />

        )}

    </Tag>
  );
};