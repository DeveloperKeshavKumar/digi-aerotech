"use client";
import { Label } from "@radix-ui/react-label";
import { BorderBeam } from "./ui/border-beam";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const ContactForm = ({ className }: { className?: string }) => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        service: '',
        businessType: '',
        startDate: ''
    });

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ type: '', text: '' });

    // Use a useEffect hook to handle the message timer
    useEffect(() => {
        // Only set a timer if a message is currently displayed
        if (message.text) {
            // Set a timer to clear the message after 5 seconds
            const timer = setTimeout(() => {
                setMessage({ type: '', text: '' });
            }, 5000); // 5000ms = 5 seconds

            // Return a cleanup function to clear the timer
            // This prevents memory leaks and ensures the timer is reset if the message changes
            return () => clearTimeout(timer);
        }
    }, [message]); // This effect runs whenever the 'message' state changes

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
        // We no longer need to clear the message here, as the timer handles it
        // The message will be cleared automatically after a successful or failed submission.
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setMessage({ type: '', text: '' });

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (result.success) {
                setMessage({
                    type: 'success',
                    text: 'Thank you! Your inquiry has been submitted successfully. We\'ll get back to you within 24 hours.'
                });
                // Reset form
                setFormData({
                    name: '',
                    phone: '',
                    email: '',
                    service: '',
                    businessType: '',
                    startDate: ''
                });
            } else {
                setMessage({
                    type: 'error',
                    text: result.error || 'Something went wrong. Please try again.'
                });
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setMessage({
                type: 'error',
                text: 'Failed to submit form. Please check your connection and try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className={cn("w-full max-w-md mx-auto lg:mx-0 lg:ml-auto lg:-mt-10", className)}
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

                {/* Success/Error Message */}
                {message.text && (
                    <div className={`mb-4 p-3 rounded-lg text-sm ${message.type === 'success'
                        ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800'
                        : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800'
                        }`}>
                        {message.text}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="rounded-lg">
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
                                autoComplete="name"
                                placeholder="Enter your full name"
                                className="bg-white/50 dark:bg-gray-800/50"
                                disabled={loading}
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
                                autoComplete="tel"
                                placeholder="+1 (555) 123-4567"
                                className="bg-white/50 dark:bg-gray-800/50"
                                disabled={loading}
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
                                autoComplete="email"
                                placeholder="your@email.com"
                                className="bg-white/50 dark:bg-gray-800/50"
                                disabled={loading}
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
                                disabled={loading}
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
                            disabled={loading}
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
                            disabled={loading}
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-gradient-to-r from-orange-600 via-pink-600 to-red-500 text-lg text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg mt-4 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {loading ? (
                            <div className="flex items-center justify-center">
                                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                </svg>
                                Sending...
                            </div>
                        ) : (
                            'Send Inquiry'
                        )}
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