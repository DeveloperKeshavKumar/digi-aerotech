'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, inView } from 'motion/react';
import {
  ArrowRight, User, Phone, ChevronDown, Mail,
  Globe, Clock, Briefcase, Calendar
} from 'lucide-react';
import { IconCircleCheck } from '@tabler/icons-react';
import Link from 'next/link';

export const BusinessGrowthSection = ({ growBizProps, quickFormProps }: {
  growBizProps: {
    title: string | { text: string; gradient?: boolean; gradientClass?: string }[];
    subheadline: string;
    highlights: string[];
    ctaButtons: {
      text: string;
      link: string;
      variant?: 'primary' | 'secondary';
      icon?: React.ReactNode;
    }[];
  };
  quickFormProps: {
    headline: string;
    fields: {
      name: string;
      label: string;
      type: string;
      required?: boolean;
      options?: string[];
    }[];
    cta: {
      text: string;
      action: string;
    };
  };
}) => {
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        setVisible(true);
      }, { margin: '-100px' });
    }
  }, []);

  // Clear message after 5 seconds
  useEffect(() => {
    if (message.text) {
      const timer = setTimeout(() => {
        setMessage({ type: '', text: '' });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Map form data to API expected format
      const apiData = {
        name: formData.name || '',
        email: formData.email || '',
        phone: formData.phone || '',
        service: formData.service || '',
        businessType: formData.business || formData.businessType || '',
        startDate: formData.time || formData.startDate || '',
        website: formData.website || '',
        formType: 'business-growth',
      };

      console.log('Submitting form data:', apiData);
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(apiData),
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: 'success',
          text: 'Thank you! Your inquiry has been submitted successfully. We\'ll get back to you within 24 hours.'
        });
        // Reset form
        setFormData({});
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

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name': return <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'email': return <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'business':
      case 'businessType':
        return <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'website': return <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'phone': return <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'time':
      case 'startDate':
        return <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      default: return null;
    }
  };

  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof growBizProps.title === 'string') {
      return growBizProps.title;
    }
    return growBizProps.title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-pink-500 via-yellow-500 to-blue-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section ref={sectionRef} className="py-16 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-36 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={visible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-center sm:text-left leading-tight text-gray-900 dark:text-white">
                {renderTitle()}
              </h2>
              <p className="text-lg text-center sm:text-left sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl">
                {growBizProps.subheadline}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {growBizProps.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-white dark:bg-gray-900 outline rounded-lg">
                  <IconCircleCheck className="h-5 w-5 text-green-500 dark:text-green-600" />
                  <span className="text-black dark:text-white font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-center lg:justify-start sm:flex-row gap-4 pt-4">
              {growBizProps.ctaButtons.map((button, index) => (
                <Link
                  key={index}
                  href={button.link}
                  className={`group inline-flex items-center justify-center px-6 py-4 text-base font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 ${button.variant === 'secondary'
                    ? 'bg-white dark:bg-black text-black dark:text-white border-2 border-gray-300 dark:border-gray-700 hover:border-gray-400 dark:hover:border-gray-600 focus:ring-gray-200 dark:focus:ring-gray-600'
                    : ' hover:dark:bg-gray-200 dark:bg-white text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400'
                    }`}
                >
                  {button.icon && <span className="mr-2">{button.icon}</span>}
                  {button.text}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 md:p-16 lg:p-0 lg:mr-8">
              <div className="bg-white dark:bg-black rounded-2xl border-2 border-gray-300 dark:border-gray-700 overflow-hidden">
                <div className="bg-black p-6 text-center border-b border-gray-300 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-2">{quickFormProps.headline}</h3>
                  <p className="text-gray-300">Fill out the form below to get started</p>
                </div>

                <div className="p-6 space-y-6">
                  {/* Success/Error Message */}
                  {message.text && (
                    <div className={`mb-4 p-3 rounded-lg text-sm ${message.type === 'success'
                      ? 'bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-400 border border-green-200 dark:border-green-800'
                      : 'bg-red-100 dark:bg-red-900/20 text-red-800 dark:text-red-400 border border-red-200 dark:border-red-800'
                      }`}>
                      {message.text}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name and Email Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2 text-black dark:text-white">
                          Full Name<span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          {getFieldIcon('name')}
                          <input
                            id="name"
                            type="text"
                            name="name"
                            required
                            value={formData.name || ''}
                            onChange={handleChange}
                            disabled={loading}
                            autoComplete="name"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="Enter your full name"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2 text-black dark:text-white">
                          Email Address<span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          {getFieldIcon('email')}
                          <input
                            id="email"
                            type="email"
                            name="email"
                            required
                            value={formData.email || ''}
                            onChange={handleChange}
                            disabled={loading}
                            autoComplete="email"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Website Field (Optional) */}
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Website/Social Media
                      </label>
                      <div className="relative">
                        {getFieldIcon('website')}
                        <input
                          id="website"
                          type="text"
                          name="website"
                          value={formData.website || ''}
                          onChange={handleChange}
                          disabled={loading}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                          placeholder="https://yourwebsite.com or @instagram"
                        />
                      </div>
                    </div>

                    {/* Service Select Field */}
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Service Needed<span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service || ''}
                          onChange={handleChange}
                          disabled={loading}
                          className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg appearance-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                        >
                          <option value="">Select a service</option>
                          <option value="web-development">Web Development</option>
                          <option value="mobile-app">Mobile App Development</option>
                          <option value="digital-marketing">Digital Marketing</option>
                          <option value="ecommerce">E-commerce Solutions</option>
                          <option value="consulting">IT Consulting</option>
                          <option value="other">Other</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Business Type Field */}
                    <div>
                      <label htmlFor="businessType" className="block text-sm font-medium mb-2 text-black dark:text-white">
                        Business Type<span className="text-red-500 ml-1">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="businessType"
                          name="businessType"
                          required
                          value={formData.businessType || ''}
                          onChange={handleChange}
                          disabled={loading}
                          className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg appearance-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                        >
                          <option value="">What&apos;s your business type</option>
                          <option value="startup">Startup</option>
                          <option value="small-business">Small Business</option>
                          <option value="enterprise">Enterprise</option>
                          <option value="agency">Agency</option>
                          <option value="nonprofit">Non-Profit</option>
                          <option value="individual">Individual</option>
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </div>

                    {/* Phone and Start Date Fields */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2 text-black dark:text-white">
                          Phone Number<span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          {getFieldIcon('phone')}
                          <input
                            id="phone"
                            type="tel"
                            name="phone"
                            required
                            value={formData.phone || ''}
                            onChange={handleChange}
                            disabled={loading}
                            autoComplete="tel"
                            placeholder="+918607119872"
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="startDate" className="block text-sm font-medium mb-2 text-black dark:text-white">
                          When to Start<span className="text-red-500 ml-1">*</span>
                        </label>
                        <div className="relative">
                          {getFieldIcon('startDate')}
                          <input
                            id="startDate"
                            type="text"
                            name="startDate"
                            required
                            value={formData.startDate || ''}
                            onChange={handleChange}
                            disabled={loading}
                            placeholder="ASAP, Next month, etc."
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full px-6 py-4 bg-black dark:bg-white text-white font-semibold rounded-lg text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 transform focus:outline-none focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-600 flex items-center justify-center group border-2 bg-gradient-to-r from-orange-600 via-pink-600 to-yellow-500 hover:from-orange-500 hover:via-pink-500 hover:to-yellow-400 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
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
                        <>
                          <Calendar className="mr-2 h-5 w-5" />
                          <span>{quickFormProps.cta.text}</span>
                          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                        </>
                      )}
                    </button>

                    <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                      We respect your privacy. Your information will never be shared.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};