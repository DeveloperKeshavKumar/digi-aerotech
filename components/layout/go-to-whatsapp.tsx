"use client";
import { motion } from "framer-motion";
import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function GoToWhatsApp() {
    const pathname = usePathname();
    const message = encodeURIComponent(`I want to enquire about page: ${pathname}`);
    const whatsappUrl = `https://wa.me/+918307105140?text=${message}`;

    return (
        <div className="hidden md:block fixed bottom-10 left-4 z-50">
            <motion.span
                className="absolute w-12 h-12 rounded-full bg-green-500"
                style={{ zIndex: -1 }}
                animate={{
                    scale: [1, 1.8, 1],
                    opacity: [0.4, 0.1, 0],
                }}
                transition={{
                    duration: 1,
                    repeat: Infinity,
                    ease: "linear",
                    times: [0, 0.5, 1],
                }}
            />

            <motion.div
                className="relative z-10"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
            >
                <Link
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 rounded-full shadow-lg bg-white dark:bg-neutral-950 text-green-500 dark:text-green-400 hover:bg-green-100 dark:hover:bg-green-900/50 transition-colors border border-green-500/20 dark:border-green-400/20"
                >
                    <IconBrandWhatsapp size={24} />
                </Link>
            </motion.div>
        </div>
    );
}