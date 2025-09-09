"use client";
import React, { useState, useEffect, useCallback, memo, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Star, Gift, Rocket, Zap, Clock, CheckCircle, Calendar, Phone, User, Building, DollarSign,
    Home, Shirt, Gem, Smartphone, Coffee, Sparkles, Package, Baby,
    Handshake, Settings, Target, ArrowRight, TrendingUp, ShoppingBag, Users, Award,
    ChevronDown, Eye, Lightbulb, BarChart3, MessageCircle, Shield, Globe, Crown, Heart, Flame,
    Truck, CreditCard, Headphones, TrendingDown, Percent, Mail, MapPin, Instagram,
    IndianRupee
} from "lucide-react";
import { FaqSection } from "@/components/services/faq-section";
import { Testimonials } from "@/components/homepage/testimonials";
import { BorderBeam } from "@/components/ui/border-beam";
import Image from "next/image";

const DIWALI_DATE = new Date("2025-10-20T23:59:59");
const DEADLINE = new Date("2025-09-20T23:59:59");

function getDaysLeft() {
    const today = new Date();
    const diffTime = DIWALI_DATE.getTime() - today.getTime();
    return Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
}

function getTimeLeft() {
    const now = new Date();
    const diff = DEADLINE.getTime() - now.getTime();

    if (diff <= 0) {
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

// Floating Animation Component
const FloatingElement = ({ delay = 0, duration = 3, children, className = "" }: {
    delay?: number;
    duration?: number;
    children: React.ReactNode;
    className?: string;
}) => (
    <motion.div
        animate={{
            y: [0, -10, 0],
            rotate: [0, 2, -2, 0],
        }}
        transition={{
            duration,
            repeat: Infinity,
            delay,
            ease: "easeInOut"
        }}
        className={className}
    >
        {children}
    </motion.div>
);

const DiwaliLandingPage = () => {
    const [timeLeft, setTimeLeft] = useState(getTimeLeft());

    const [formData, setFormData] = useState({
        name: "",
        business: "",
        phone: "",
        revenue: "",
        package: ""
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                const seconds = prevTime.seconds - 1;
                if (seconds >= 0) return { ...prevTime, seconds };

                const minutes = prevTime.minutes - 1;
                if (minutes >= 0) return { ...prevTime, minutes, seconds: 59 };

                const hours = prevTime.hours - 1;
                if (hours >= 0) return { ...prevTime, hours, minutes: 59, seconds: 59 };

                const days = prevTime.days - 1;
                if (days >= 0) return { ...prevTime, days, hours: 23, minutes: 59, seconds: 59 };

                clearInterval(timer);
                return { days: 0, hours: 0, minutes: 0, seconds: 0 };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const message = `Hi DigiAerotech! I'm interested in your Diwali package.

Name: ${formData.name}
Business: ${formData.business}
Phone: ${formData.phone}
Monthly Revenue: ${formData.revenue}
Package Interest: ${formData.package}

Please contact me to discuss further.`;
        const whatsappUrl = `https://wa.me/918307105140?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const selectPackage = (packageType: string, price: string) => {
        setFormData(prev => ({ ...prev, package: `${packageType} (${price})` }));
        document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    };


    const productCategories = [
        { icon: Home, name: "Home Decor & Lighting", desc: "Diyas, candles, fairy lights, decorative items", color: "from-amber-500 to-orange-600" },
        { icon: Shirt, name: "Fashion & Apparel", desc: "Ethnic wear, sarees, lehengas, traditional clothing", color: "from-pink-500 to-rose-600" },
        { icon: Gem, name: "Jewelry & Accessories", desc: "Gold, silver, precious stones, watches", color: "from-yellow-500 to-amber-600" },
        { icon: Smartphone, name: "Electronics & Appliances", desc: "Mobile phones, smart devices, TVs, home appliances", color: "from-blue-500 to-indigo-600" },
        { icon: Coffee, name: "Sweets & Food Items", desc: "Traditional sweets, dry fruits, gift hampers", color: "from-green-500 to-emerald-600" },
        { icon: Sparkles, name: "Beauty & Wellness", desc: "Skincare, fragrances, grooming kits, wellness products", color: "from-purple-500 to-violet-600" },
        { icon: Package, name: "Corporate Gifts & Hampers", desc: "Curated gift boxes, customized Diwali packages", color: "from-red-500 to-pink-600" },
        { icon: Baby, name: "Kids & Toys", desc: "Children's clothing, toys, educational products", color: "from-cyan-500 to-blue-600" }
    ];

    const faqs = [
        {
            id: '1',
            question: 'When should I start my Diwali campaigns?',
            answer: 'Ideally 30-40 days before Diwali for maximum impact. Early campaigns capture the entire shopping cycle and give you competitive advantage.',
            icon: <Calendar className="w-5 h-5" />
        },
        {
            id: '2',
            question: 'What\'s the minimum budget needed for effective campaigns?',
            answer: 'For Meta ads alone, ₹15,000-20,000 monthly budget gives good results. Combined Meta + Google needs ₹25,000+ for optimal performance.',
            icon: <DollarSign className="w-5 h-5" />
        },
        {
            id: '3',
            question: 'How do you measure campaign success?',
            answer: 'We track ROAS, conversion rates, cost per acquisition, revenue growth, and provide detailed analytics dashboard with real-time performance metrics.',
            icon: <BarChart3 className="w-5 h-5" />
        },
        {
            id: '4',
            question: 'What if I already have running campaigns?',
            answer: 'We can optimize existing campaigns and add festive elements without disrupting current performance. Smooth transition guaranteed.',
            icon: <Settings className="w-5 h-5" />
        },
        {
            id: '5',
            question: 'Do you provide creative assets and ad copy?',
            answer: 'Yes, all packages include festive creatives, ad copy, and visual assets optimized for Diwali shopping with professional design team.',
            icon: <Eye className="w-5 h-5" />
        },
        {
            id: '6',
            question: 'What support do you provide during campaigns?',
            answer: 'Dedicated campaign manager, 24/7 monitoring, daily optimizations, weekly reports, and direct WhatsApp support throughout the campaign period.',
            icon: <MessageCircle className="w-5 h-5" />
        }
    ];

    return (
        <div className="min-h-screen transition-colors duration-300 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            fontSize: `${12 + Math.random() * 8}px`
                        }}
                        animate={{
                            y: [0, -20, 0],
                            x: [0, 10, 0],
                            opacity: [0.2, 0.6, 0.2],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 4,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        ✨
                    </motion.div>
                ))}
            </div>

            {/* Hero Section */}
            <HeroSection />

            {/* Stats Section */}
            <StatsSection />

            {/* Diwali Make Or Break Section */}
            <MakeOrBreakSection />

            {/* Profit Opportunity Section */}
            <ProfitOpportunitySection />

            {/* Customer Behaviour */}
            <CustomerDuringDiwaliSection />

            {/* is Product Perfect for Diwali? */}
            <PerfectProductsSection productCategories={productCategories} />

            {/* What If You Miss Diwali? */}
            <WhatIfMissDiwaliSection />

            {/* Our Process Section */}
            <ProcessSection
            //   processSteps={processSteps} 
            />

            {/* What You Get Section */}
            <WhatYouGetSection />

            {/* Packages Section */}
            <PackagesSection selectPackage={selectPackage} />

            {/* Countdown Section */}
            <CountdownSection timeLeft={timeLeft} />

            {/* FAQ Section */}
            <FaqSection faqs={faqs} />

            {/* Why Choose Us Section */}
            <OurIntroductionSection />

            {/* Testimonials Section */}
            <Testimonials />

            {/* Contact Form Section */}
            <ContactFormSection formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />

            {/* Footer */}
            <footer className="flex items-center justify-center bg-gray-200 dark:bg-gray-900 text-white">
                <div className="border-gray-800 py-4 text-center text-gray-700 dark:text-gray-300">
                    <p>&copy; {new Date().getFullYear()} DigiAerotech. All rights reserved. Made with ❤️ for D2C brands.</p>
                </div>
            </footer>
        </div>
    );
};

const HeroSection = () => {
    return (
        <section className="lg:min-h-screen flex flex-1 justify-center items-center py-20 md:py-28 text-black dark:text-white relative z-10 bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8 leading-tight"
                    >
                        🪔 Diwali Rush is Coming
                        <span className="block mt-4 bg-gradient-to-r italic from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                            Is Your D2C Store Ready to Cash In?
                        </span>
                    </motion.h1>

                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-2xl md:text-3xl font-medium mb-8"
                    >
                        <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                            {getDaysLeft()} Days to Diwali. The Biggest Shopping Season in India.
                        </span>
                        ✨
                    </motion.h3>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="text-xl text-gray-700 dark:text-gray-200 max-w-4xl mx-auto leading-relaxed mb-12"
                    >
                        While everyone's planning celebrations, smart D2C brands are planning profits. This is when Indian consumers spend the MOST. Are you ready to capture your share?
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.8, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                    >
                        <motion.a
                            href="#packages"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-bold rounded-lg shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 text-lg"
                        >
                            <Rocket className="w-6 h-6" />
                            Get My Diwali Package
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

const StatsSection = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 relative z-10 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        The Diwali Advantage
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Smart D2C Brands </span>
                        Leveraging
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[
                        { value: "60%", label: "of annual e-commerce sales happen during festive season", icon: TrendingUp },
                        { value: "35-40%", label: "increase in average order values during Diwali", icon: ShoppingBag },
                        { value: "70%+", label: "spike in mobile traffic during festivities", icon: Smartphone },
                        { value: "3x", label: "increase in competition for ads", icon: Target },
                    ].map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative group"
                        >
                            <div className="p-8 rounded-3xl shadow-lg border border-orange-200 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                        <stat.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-4">
                                        {stat.value}
                                    </div>
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{stat.label}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

const MakeOrBreakSection = () => {
    const daysLeft = useMemo(() => getDaysLeft(), []);
    const stats = [
        { icon: IndianRupee, value: "40%", label: "of annual shopping budget spent during festive season" },
        { icon: Users, value: "70%+", label: "of consumers shop for Diwali gifts" },
        { icon: Calendar, value: daysLeft.toString(), label: "days until Diwali to prepare" },
    ];

    const cards = [
        {
            icon: TrendingUp,
            title: "Peak Consumer Spending",
            description: "Indians spend 40% of their annual shopping budget during the festive season. Miss this window and you miss the biggest revenue opportunity of the year.",
            color: "from-orange-500 to-amber-500"
        },
        {
            icon: Target,
            title: "Brand Building Opportunity",
            description: "Festive campaigns create lasting emotional connections. Brands that nail Diwali marketing often see customer loyalty that lasts the entire year.",
            color: "from-amber-500 to-yellow-500"
        },
        {
            icon: Clock,
            title: "Limited Time Window",
            description: "You have just 48 days to prepare and execute. Competitors are already planning - the time to act is NOW, not later.",
            color: "from-red-500 to-orange-500"
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <section className="py-16 bg-white dark:bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-yellow-400 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 4 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        <Zap size={20} fill="currentColor" />
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        Why This Diwali Could Make or Break Your D2C Brand
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        The festive season isn't just about celebrations—it's the most critical revenue period for Indian D2C brands.
                    </p>
                </motion.div>

                {/* Stats */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                >
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg text-center"
                            >
                                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <IconComponent className="w-7 h-7 text-white" />
                                </div>
                                <div className="text-3xl font-bold bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                                    {stat.value}
                                </div>
                                <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    {cards.map((card, index) => {
                        const IconComponent = card.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                                <div className="h-full bg-gray-50 dark:bg-gray-900 p-6 rounded-xl shadow-lg border border-orange-200 dark:border-gray-700 relative overflow-hidden">
                                    {/* Decorative corner */}
                                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${card.color} rounded-bl-xl opacity-10`}></div>

                                    <div className={`w-12 h-12 bg-gradient-to-br ${card.color} rounded-lg flex items-center justify-center mb-4 relative z-10`}>
                                        <IconComponent className="w-6 h-6 text-white" />
                                    </div>

                                    <h3 className="text-xl font-bold text-black dark:text-white mb-3 relative z-10">
                                        {card.title}
                                    </h3>

                                    <p className="text-gray-700 dark:text-gray-300 relative z-10">
                                        {card.description}
                                    </p>

                                    <motion.div
                                        className={`h-1 bg-gradient-to-r ${card.color} mt-4 rounded-full`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                        Limited slots available for Diwali campaign management
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

const ProfitOpportunitySection = () => {
    const stats = [
        { value: "3-5x", label: "Higher ROAS", desc: "Festive campaigns deliver 3-5x better return on ad spend compared to regular months", icon: TrendingUp },
        { value: "₹2,000", label: "Higher AOV", desc: "Average order values jump by ₹1,500-₹2,000 during Diwali shopping season", icon: IndianRupee },
        { value: "300%", label: "Traffic Boost", desc: "Website traffic increases by 200-300% during the pre-Diwali shopping rush", icon: BarChart3 },
        { value: "85%", label: "Conversion Rate", desc: "Festive-optimized stores see conversion rates up to 85% higher than regular periods", icon: Target },
    ];

    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        D2C Profit Opportunities
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> During Diwali</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const IconComponent = stat.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="p-8 rounded-3xl shadow-lg border border-orange-200 dark:border-gray-700 text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <div className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-xl font-semibold text-black dark:text-white mb-4">{stat.label}</div>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{stat.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const CustomerDuringDiwaliSection = () => {
    const phases = [
        {
            icon: ShoppingBag,
            title: "30-40 Days Before Diwali",
            desc: "Research phase begins. Consumers start browsing, comparing prices, and shortlisting products. This is when you need maximum visibility.",
            color: "from-blue-500 to-indigo-500"
        },
        {
            icon: CreditCard,
            title: "15-20 Days Before Diwali",
            desc: "Purchase decisions accelerate. Consumers start buying, especially for gifts and home decoration. Peak traffic and conversion period.",
            color: "from-purple-500 to-pink-500"
        },
        {
            icon: Truck,
            title: "5-10 Days Before Diwali",
            desc: "Last-minute rush. Express delivery, quick shipping, and instant gratification become key selling points. Premium pricing accepted.",
            color: "from-orange-500 to-red-500"
        },
    ];

    return (
        <section className="py-20 bg-white dark:bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        How Indian Consumers
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Behave During Diwali</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {phases.map((phase, index) => {
                        const IconComponent = phase.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="h-full p-8 rounded-3xl shadow-lg border border-orange-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    <div className="relative z-10">
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">{phase.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">{phase.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const PerfectProductsSection = ({ productCategories }: { productCategories: any[] }) => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-gray-950 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        Is Your Product Category Perfect for Diwali?
                        <span className="block mt-2 max-w-max mx-auto bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Check This List!</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        If you're dealing in these categories, Diwali can be VERY GOOD for you!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productCategories.map((category, index) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="relative group"
                            >
                                <div className="h-full p-8 rounded-3xl shadow-lg border border-orange-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    <div className="relative z-10 flex flex-col justify-center items-center">
                                        <div className="relative border dark:border-pink-700 mb-4 uppercase rounded-lg bg-orange-50 dark:bg-pink-100 px-3 py-1 text-sm font-bold text-gray-900">
                                            <BorderBeam />
                                            <BorderBeam />
                                            High Demand ✨
                                        </div>
                                        <div className="w-16 h-16 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-black dark:text-white mb-4 text-center">{category.name}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">{category.desc}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

const WhatIfMissDiwaliSection = () => {
    const consequences = [
        {
            icon: TrendingDown,
            title: "Lost Revenue",
            desc: "You'll miss 40-60% of your potential annual revenue. Your competitors will capture customers you could have won.",
            color: "from-red-500 to-pink-500"
        },
        {
            icon: Clock,
            title: "Wait Another Year",
            desc: "The next opportunity like this comes only after 12 months. That's 365 days of potential lost profits.",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: Target,
            title: "Competitor Advantage",
            desc: "Brands that dominate Diwali often maintain market leadership throughout the next year. Don't let competitors win.",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-red-50 to-orange-50 dark:from-gray-950 dark:to-gray-900 relative overflow-hidden">
            {/* Warning decorations */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute text-red-400 opacity-20"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -15, 0],
                            opacity: [0.1, 0.3, 0.1],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: Math.random() * 2,
                        }}
                    >
                        ⚠️
                    </motion.div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        What Happens If You
                        <span className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 bg-clip-text text-transparent"> Miss This Diwali?</span>
                    </h2>
                    <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                        The cost of inaction during India's biggest shopping season is higher than you think.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {consequences.map((item, index) => {
                        const IconComponent = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="h-full bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border-2 border-red-200 dark:border-gray-700 hover:shadow-2xl hover:border-red-300 dark:hover:border-red-600 transition-all duration-300 relative overflow-hidden">
                                    {/* Warning indicator */}
                                    <div className="absolute top-4 right-4 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>

                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">{item.title}</h3>
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">{item.desc}</p>
                                    </div>

                                    {/* Animated bottom border */}
                                    <motion.div
                                        className={`h-1 bg-gradient-to-r ${item.color} mt-6 rounded-full`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        viewport={{ once: true }}
                                    />
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-4 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-lg"
                    >
                        Don't Miss Out - Start Now!
                    </motion.button>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                        Join 100+ D2C brands already preparing for Diwali success
                    </p>
                </motion.div>
            </div>
        </section>
    );
};


const ProcessSection = () => {
    const processSteps = [
        {
            icon: Handshake,
            step: "Step 1",
            title: "Understanding Your Business",
            subtitle: "Onboarding & Discovery",
            desc: "We dive deep into your products, business model, and specific festive needs after onboarding. No generic templates - custom strategy for each client.",
            color: "from-pink-500 to-purple-500"
        },
        {
            icon: Settings,
            step: "Step 2",
            title: "Optimizing Everything for Results",
            subtitle: "Store & Campaign Optimization",
            desc: "We optimize your product pages, offers, images, and create festival-ready creatives. Gift bundles, Diwali deals, and compelling visuals get uploaded for maximum impact.",
            color: "from-orange-500 to-yellow-500"
        },
        {
            icon: Target,
            step: "Step 3",
            title: "Launch Perfect Campaigns",
            subtitle: "Campaign Launch & Management",
            desc: "We run, monitor, and scale your Meta & Google campaigns. From ad copy to audience targeting and daily optimization - we handle EVERYTHING.",
            color: "from-blue-500 to-fuchsia-500"
        }
    ];

    return (
        <section className="py-20 bg-white dark:bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        Our Simple 3-Step
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Success Process</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-semibold">
                        We Don't Teach - We Take Action For You!
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Connection line */}
                    <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 via-pink-500 to-blue-500 transform -translate-y-1/2 hidden lg:block"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 items-stretch">
                        {processSteps.map((step, index) => {
                            const IconComponent = step.icon;
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative group h-full"
                                >
                                    <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border border-orange-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden h-full flex flex-col">
                                        {/* Step number badge */}
                                        <div className={`absolute -top-0 left-0 px-6 py-2 bg-gradient-to-r ${step.color} text-white text-sm font-bold rounded-br-full shadow-lg`}>
                                            {step.step}
                                        </div>

                                        <div className="pt-4 flex-grow flex flex-col">
                                            <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>

                                            <h3 className="text-2xl font-bold text-black dark:text-white mb-2 text-center">
                                                {step.title}
                                            </h3>

                                            <p className={`text-lg font-semibold bg-gradient-to-r ${step.color} bg-clip-text text-transparent mb-4 text-center`}>
                                                {step.subtitle}
                                            </p>

                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center flex-grow">
                                                {step.desc}
                                            </p>
                                        </div>

                                        {/* Hover effect */}
                                        <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
                                    </div>
                                </motion.div>

                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};


const WhatYouGetSection = () => {
    const features = [
        {
            icon: Shield,
            title: "No DIY Headaches",
            desc: "We handle everything for you",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: Crown,
            title: "Expert Campaign Management",
            desc: "Professionals run your ads",
            color: "from-purple-500 to-indigo-500"
        },
        {
            icon: Eye,
            title: "Festival-Ready Creatives",
            desc: "Custom Diwali visuals and copy",
            color: "from-orange-500 to-red-500"
        },
        {
            icon: TrendingUp,
            title: "Daily Optimization",
            desc: "Continuous performance improvements",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: BarChart3,
            title: "Complete Analytics",
            desc: "Detailed performance reporting",
            color: "from-pink-500 to-rose-500"
        },
        {
            icon: Headphones,
            title: "Dedicated Support",
            desc: "Direct access to your campaign manager",
            color: "from-teal-500 to-green-500"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-50 to-orange-50 dark:from-gray-950 dark:to-gray-900 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        What You Get - Complete
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Done-For-You Service</span>
                    </h2>
                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto font-semibold">
                        We Don't Teach You - We Take Action For You!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="relative group"
                            >
                                <div className="h-full bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-lg border border-green-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                                    {/* Checkmark indicator */}
                                    <div className="absolute top-4 right-4">
                                        <CheckCircle className="w-6 h-6 text-green-500" />
                                    </div>

                                    <div className="relative z-10">
                                        <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                                            <IconComponent className="w-8 h-8 text-white" />
                                        </div>

                                        <h3 className="text-xl font-bold text-black dark:text-white mb-3 text-center">
                                            {feature.title}
                                        </h3>

                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                                            {feature.desc}
                                        </p>
                                    </div>

                                    {/* Animated checkmark effect */}
                                    <motion.div
                                        className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl"
                                    ></motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-center mt-16"
                >
                    <div className="bg-white dark:bg-gray-900 p-8 rounded-3xl shadow-xl border-2 border-orange-200 dark:border-gray-700 max-w-2xl mx-auto">
                        <h3 className="text-2xl font-bold text-black dark:text-white mb-4">
                            Ready to Get Started?
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300 mb-6">
                            Join 100+ D2C brands who trust us with their Diwali campaigns
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => document.getElementById('packages')?.scrollIntoView({ behavior: 'smooth' })}
                            className="px-8 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
                        >
                            Choose Your Package
                        </motion.button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};


const PackagesSection = ({ selectPackage }: { selectPackage: (packageType: string, price: string) => void }) => {
    return (
        <section id="packages" className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                        Choose Your Diwali
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Success Package</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        Professional marketing solutions designed to maximize your festive season revenue
                    </p>
                </motion.div>

                {/* Main 3 Packages - Proper Order: Premium (35k), Popular (20k), Basic (12k) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16 items-stretch">


                    {/* Basic Package - Starter Option (₹12k) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative"
                    >
                        <div className=" bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <div className="p-8 text-center">
                                <div className="w-16 h-16 bg-gradient-to-br from-gray-500 to-gray-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <Zap className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Meta Ads Mastery</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 font-medium">Starter Package</p>

                                <div className="mb-8">
                                    <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">₹12,000</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Till Diwali Ends</div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => selectPackage('Meta Ads Mastery', '₹12,000')}
                                    className="w-full py-4 bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
                                >
                                    Get Starter Plan
                                </motion.button>
                            </div>

                            <div className="px-8 pb-8">
                                <ul className="space-y-4">
                                    {[
                                        "Meta ads campaign setup & optimization",
                                        "Festive creatives and ad copy",
                                        "Audience research and targeting",
                                        "Daily monitoring and optimization",
                                        "Performance reporting"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* Popular Package - Most Recommended (₹20k) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative transform lg:scale-105"
                    >
                        <div className="h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-2xl shadow-xl border-2 border-blue-200 dark:border-blue-800 overflow-hidden relative">
                            {/* Popular Badge */}
                            <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-30">
                                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-b-lg  text-sm font-semibold shadow-lg">
                                    🔥 MOST POPULAR
                                </div>
                            </div>

                            <div className="p-8 text-center pt-12">
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <Target className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Meta + Google Domination</h3>
                                <p className="text-blue-600 dark:text-blue-400 mb-6 font-medium">Advanced Package</p>

                                <div className="mb-8">
                                    <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">₹20,000</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Till Diwali Ends</div>
                                    <div className="inline-block mt-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                                        RECOMMENDED
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => selectPackage('Meta + Google Domination', '₹20,000')}
                                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
                                >
                                    Get Advanced Plan
                                </motion.button>
                            </div>

                            <div className="px-8 pb-8">
                                <ul className="space-y-4">
                                    {[
                                        "Everything in Basic Package",
                                        "Google ads campaign setup",
                                        "Search & Shopping ads optimization",
                                        "Keyword research for festive terms",
                                        "Cross-platform retargeting",
                                        "Advanced conversion tracking"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>


                    {/* Premium Package - Highest Value (₹35k) */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="relative transform lg:scale-105"
                    >
                        <div className="h-full bg-gradient-to-br from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 rounded-2xl shadow-xl border border-violet-200 dark:border-violet-800 overflow-hidden relative">
                            {/* Premium Badge */}
                            <div className="absolute -top-0 left-1/2 transform -translate-x-1/2 z-30">
                                <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white px-6 py-2 rounded-b-lg text-sm font-semibold shadow-lg">
                                    ✨ PREMIUM
                                </div>
                            </div>

                            <div className="p-8 text-center pt-12">
                                <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                                    <Rocket className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Complete Marketing Suite</h3>
                                <p className="text-violet-600 dark:text-violet-400 mb-6 font-medium">All-In-One Solution</p>

                                <div className="mb-8">
                                    <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">₹35,000</div>
                                    <div className="text-sm text-gray-500 dark:text-gray-400">Till Diwali Ends</div>
                                    <div className="inline-block mt-2 bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full text-xs font-semibold">
                                        BEST VALUE
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    onClick={() => selectPackage('Complete Marketing Suite', '₹35,000')}
                                    className="w-full py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
                                >
                                    Get Premium Plan
                                </motion.button>
                            </div>

                            <div className="px-8 pb-8">
                                <ul className="space-y-4">
                                    {[
                                        "Everything in Popular Package",
                                        "Website speed optimization",
                                        "Mobile responsiveness audit",
                                        "Checkout process optimization",
                                        "Payment gateway optimization",
                                        "Analytics setup and monitoring",
                                        "WhatsApp Business integration"
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                </div>

                {/* Horizontal New Store Launch Package (₹40k) */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 rounded-2xl shadow-xl overflow-hidden border border-emerald-200 dark:border-emerald-800 relative"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-3 items-center">
                        {/* Left side - Content */}
                        <div className="p-10 lg:col-span-2">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Globe className="w-8 h-8 text-white" />
                                </div>
                                <div>
                                    <h3 className="text-3xl font-bold text-gray-900 dark:text-white">New Store Launch</h3>
                                    <p className="text-emerald-600 dark:text-emerald-400 font-semibold">Complete Startup Solution</p>
                                </div>
                            </div>

                            <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed">
                                Perfect for entrepreneurs ready to launch their D2C store before the Diwali rush. Get everything you need to start selling immediately with a professional setup.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                {[
                                    "Complete e-commerce store development",
                                    "Payment gateway integration",
                                    "Delivery partner setup",
                                    "Mobile-optimized design",
                                    "SEO-friendly structure",
                                    "Admin panel training & support"
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 dark:text-gray-300 text-sm">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Timeline Badge */}
                            <div className="inline-flex items-center gap-2 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-4 py-2 rounded-full text-sm font-semibold">
                                <Clock className="w-4 h-4" />
                                Launch Timeline: 7-10 days
                            </div>
                        </div>

                        {/* Right side - Pricing */}
                        <div className="p-10 bg-white/50 dark:bg-gray-900/50 flex flex-col items-center text-center lg:col-span-1">
                            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-2">₹40,000</div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">One-time Investment</div>
                            <div className="text-xs text-emerald-600 dark:text-emerald-400 mb-8 font-medium">Everything Included</div>

                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={() => selectPackage('New Store Launch', '₹40,000')}
                                className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <Rocket className="w-5 h-5" />
                                    Launch My Store
                                </div>
                            </motion.button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

const CountdownSection = ({ timeLeft }: { timeLeft: { days: number, hours: number, minutes: number, seconds: number } }) => {
    return (
        <section className="py-20 bg-gradient-to-b from-orange-50 to-amber-50 dark:from-gray-900 dark:to-gray-950 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <FloatingElement delay={1}>
                        <div className="mb-8">
                            <Zap className="w-16 h-16 text-orange-500 mx-auto" />
                        </div>
                    </FloatingElement>

                    <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-8">
                        Register Before 20th September <br />Only
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> {timeLeft.days} Days Left!</span>
                    </h2>

                    <p className="text-xl text-gray-700 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
                        Don't let this Diwali pass by without maximizing your potential. Register now to get maximum benefits, otherwise Diwali comes too close and there's no meaning to any services!
                    </p>

                    <div className="flex justify-center gap-6 mb-12">
                        {[
                            { value: timeLeft.days, label: "Days" },
                            { value: timeLeft.hours, label: "Hours" },
                            { value: timeLeft.minutes, label: "Minutes" },
                            { value: timeLeft.seconds, label: "Seconds" },
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ scale: 0.8, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ scale: 1.05 }}
                                className="bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 text-white p-6 rounded-2xl w-24 md:w-28 shadow-2xl"
                            >
                                <div className="text-3xl md:text-4xl font-bold">{item.value}</div>
                                <div className="text-sm md:text-base opacity-90 font-medium">{item.label}</div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-10 py-3 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-bold rounded-md shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 text-lg"
                    >
                        Start Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    )
}

const OurIntroductionSection = () => {
    const achievements = [
        { icon: Users, value: "100+", label: "D2C Brands Served" },
        { icon: TrendingUp, value: "300%", label: "Average Revenue Growth" },
        { icon: Award, value: "5+ Years", label: "Digital Marketing Experience" },
        { icon: Heart, value: "98%", label: "Client Satisfaction Rate" }
    ];

    return (
        <section className="py-20 bg-white dark:bg-black relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-black dark:text-white mb-6">
                        Why D2C Brands
                        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Trust DigiAerotech</span>
                    </h2>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-10 items-stretch">
                    {/* Left side - Achievements */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="grid grid-cols-2 gap-6 mb-8">
                            {achievements.map((item, index) => {
                                const IconComponent = item.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="bg-gray-50 dark:bg-gray-900 p-6 rounded-2xl text-center hover:shadow-lg transition-all duration-300"
                                    >
                                        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                                            <IconComponent className="w-6 h-6 text-white" />
                                        </div>
                                        <div className="text-2xl font-bold bg-gradient-to-br from-orange-500 to-red-500 bg-clip-text text-transparent mb-2">
                                            {item.value}
                                        </div>
                                        <div className="text-sm text-gray-700 dark:text-gray-300">{item.label}</div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        <div className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                            At DigiAerotech, we've helped D2C brands <strong className="text-orange-500">3x their festive season revenue</strong> with optimized stores and strategic ad campaigns.
                        </div>
                    </motion.div>

                    {/* Right side - Founder info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="bg-gradient-to-br from-orange-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 p-7 rounded-3xl shadow-xl border border-orange-200 dark:border-gray-700 relative overflow-hidden">
                            <BorderBeam size={300} colorFrom="fuchsia" colorTo="blue" />
                            <BorderBeam size={300} colorFrom="fuchsia" colorTo="blue" />

                            <div className="relative z-10">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <div className="relative w-30 h-30 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center mb-6">
                                        <Image src="/employees/deepak.png" alt="Deepak Goyal" fill className="rounded-full object-cover" />
                                    </div>
                                    <div className="align-left">
                                        <h3 className="text-2xl font-bold text-black dark:text-white mb-1 text-center">
                                            Deepak Goyal
                                        </h3>

                                        <p className="text-orange-600 dark:text-orange-400 font-semibold mb-1 text-center">
                                            Founder, DigiAerotech
                                        </p>

                                        <div className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400 mb-4">
                                            <MapPin className="w-4 h-4" />
                                            <span>Ratia, Haryana</span>
                                        </div>
                                    </div>
                                </div>

                                <blockquote className="text-lg text-gray-700 py-2 dark:text-gray-300 italic text-center leading-relaxed">
                                    "We don't just run ads - we build revenue machines. Every campaign is crafted to deliver maximum ROI for our D2C partners."
                                </blockquote>

                                {/* Social proof indicators */}
                                <div className="mt-6 flex justify-center gap-4">
                                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                                        <Shield className="w-4 h-4 text-green-500" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Verified Expert</span>
                                    </div>
                                    <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
                                        <Award className="w-4 h-4 text-orange-500" />
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">5+ Years Experience</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};


interface FormData {
    name: string;
    business: string;
    phone: string;
    revenue: string;
    package: string;
}

interface ContactFormSectionProps {
    formData: FormData;
    handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactFormSection = ({ formData, handleChange, handleSubmit }: ContactFormSectionProps) => {
    return (
        <>
            <section id="contact-form" className="py-20 relative z-10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="space-y-8"
                        >
                            <div>
                                <h3 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6">
                                    Ready to Dominate This
                                    <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent"> Diwali?</span>
                                </h3>
                                <p className="text-xl text-gray-700 dark:text-gray-300 leading-relaxed mb-8">
                                    While everyone's planning celebrations, smart D2C brands are planning profits. This is when Indian consumers spend the MOST. Are you ready to capture your share?
                                </p>
                            </div>

                            <div className="space-y-6">
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
                                        <Phone className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-black dark:text-white">WhatsApp Support</div>
                                        <div className="text-gray-600 dark:text-gray-300">+91 83071 05140</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center">
                                        <Clock className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-black dark:text-white">Quick Response</div>
                                        <div className="text-gray-600 dark:text-gray-300">24-hour response guaranteed</div>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg"
                                >
                                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                                        <Users className="w-6 h-6 text-white" />
                                    </div>
                                    <div>
                                        <div className="font-semibold text-black dark:text-white">Trusted Partner</div>
                                        <div className="text-gray-600 dark:text-gray-300">100+ D2C brands served</div>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative"
                        >
                            <div className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl border border-orange-200 dark:border-gray-700 relative overflow-hidden">
                                <BorderBeam size={300} colorFrom="fuchsia" colorTo="blue" reverse />
                                <BorderBeam size={300} colorFrom="fuchsia" colorTo="blue" reverse />
                                <div className="relative z-10">
                                    <h4 className="text-2xl font-bold text-black dark:text-white mb-8 text-center">Quick Registration Form</h4>

                                    <form onSubmit={handleSubmit} className="space-y-2">
                                        <div>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black dark:text-white transition-all duration-300"
                                                    placeholder="Enter your full name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="relative">
                                                <Building className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="business"
                                                    name="business"
                                                    value={formData.business}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black dark:text-white transition-all duration-300"
                                                    placeholder="Enter your business name"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black dark:text-white transition-all duration-300"
                                                    placeholder="Enter your phone number"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <div className="relative">
                                                <Package className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <select
                                                    name="package"
                                                    id="package"
                                                    value={formData.package}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black dark:text-white transition-all duration-300 appearance-none"
                                                    required
                                                >
                                                    <option value="" disabled>Select Package</option>
                                                    <option value="Meta Ads Mastery (₹12,000)">Meta Ads Mastery - ₹12,000</option>
                                                    <option value="Meta + Google Domination (₹20,000)">Meta + Google Domination - ₹20,000</option>
                                                    <option value="Complete Marketing Suite (₹35,000)">Complete Marketing Suite - ₹35,000</option>
                                                    <option value="New Store Launch (₹40,000)">New Store Launch - ₹40,000</option>
                                                </select>
                                                <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                                            </div>
                                        </div>


                                        <div>
                                            <div className="relative">
                                                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                <input
                                                    type="text"
                                                    id="revenue"
                                                    name="revenue"
                                                    value={formData.revenue}
                                                    onChange={handleChange}
                                                    className="w-full pl-12 pr-4 py-4 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-black dark:text-white transition-all duration-300"
                                                    placeholder="Enter your monthly revenue"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            className="w-full py-4 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
                                        >
                                            Schedule Meeting Now
                                        </motion.button>
                                    </form>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
};

export default DiwaliLandingPage;