"use client";
import { Label } from "@radix-ui/react-label";
import { BorderBeam } from "./ui/border-beam";
import { Input } from "./ui/input";
import { useState } from "react";

export const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        businessType: '',
        startDate: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle form submission here
    };

    return (
        <div
            className=" w-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:-mt-10"
            data-aos="fade-up">
            <div className="bg-white/80 dark:bg-gray-800/60 border-b-0 backdrop-blur-lg border border-gray-200/50 dark:border-gray-700/50 rounded-2xl p-6 lg:p-8 shadow-xl dark:shadow-gray-600/50">
                <div className="mb-4">
                    <h3 className="text-2xl text-center font-semibold text-gray-900 dark:text-white mb-2">
                        Get Started Today
                    </h3>
                    <p className="text-gray-600 text-center dark:text-gray-400 text-sm">
                        Tell us about your project and we&apos;ll get back to you within 24 hours.
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="rounded-lg ">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                        <div className="space-y-2">
                            <Label htmlFor="name"></Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                autoComplete={"true"}
                                placeholder="Enter your full name"
                                className="bg-white/50 dark:bg-gray-800/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="phone"></Label>
                            <Input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                autoComplete={"true"}
                                placeholder="+1 (555) 123-4567"
                                className="bg-white/50 dark:bg-gray-800/50"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-2">
                        <div className="space-y-2">
                            <Label htmlFor="email"></Label>
                            <Input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                autoComplete={"true"}
                                placeholder="your@email.com"
                                className="bg-white/50 dark:bg-gray-800/50"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="service"></Label>
                            <select
                                id="service"
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="flex h-10 w-full rounded-md border border-input bg-white/50 dark:bg-gray-800/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:rounded-2xl file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                                <option value="">Service you looking for?</option>
                                <option value="web-development">Web Development</option>
                                <option value="mobile-app">Mobile App Development</option>
                                <option value="digital-marketing">Digital Marketing</option>
                                <option value="ecommerce">E-commerce Solutions</option>
                                <option value="consulting">IT Consulting</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                    </div>

                    <div className="space-y-2 mb-2">
                        <Label htmlFor="businessType"></Label>
                        <select
                            id="businessType"
                            name="businessType"
                            value={formData.businessType}
                            onChange={handleChange}
                            required
                            className="flex h-10 w-full rounded-md border border-input bg-white/50 dark:bg-gray-800/50 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                            <option value="">What&apos;s your business type</option>
                            <option value="startup">Startup</option>
                            <option value="small-business">Small Business</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="agency">Agency</option>
                            <option value="nonprofit">Non-Profit</option>
                            <option value="individual">Individual</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="startDate"></Label>
                        <Input
                            type="text"
                            id="startDate"
                            name="startDate"
                            value={formData.startDate}
                            onChange={handleChange}
                            required
                            placeholder="When do you want to start?"
                            className="bg-white/50 dark:bg-gray-800/50"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 text-lg text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg mt-4"
                    >
                        Send Inquiry
                    </button>

                </form>

                <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                    We respect your privacy. Your information is secure and won&apos;t be shared.
                </p>
                <BorderBeam
                    duration={6}
                    size={400}
                    className="from-transparent via-red-500 to-transparent mt-4"
                />
                <BorderBeam
                    duration={6}
                    delay={3}
                    size={400}
                    borderWidth={2}
                    className="rounded-lg from-transparent via-blue-500 to-transparent"
                />
            </div>

        </div>
    );
};
