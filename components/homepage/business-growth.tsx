'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, inView } from 'motion/react';
import {
  ArrowRight, User, Phone, ChevronDown,
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (sectionRef.current) {
      inView(sectionRef.current, () => {
        setVisible(true);
      }, { margin: '-100px' });
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const getFieldIcon = (fieldName: string) => {
    switch (fieldName) {
      case 'name': return <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'business': return <Briefcase className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'website': return <Globe className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'phone': return <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
      case 'time': return <Clock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />;
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
                    : 'bg-gray-900 hover:bg-gray-200 border border-transparent hover:border-gray-700 hover:dark:bg-gray-200 dark:bg-white text-white bg-gradient-to-r from-red-600 via-pink-600 to-orange-500 hover:from-orange-500 hover:via-pink-500 hover:to-red-400'
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
            className="lg:col-span-1 lg:mx-auto"
          >
            <div className="sticky top-8 md:p-16 xl:ml-16 lg:p-0 lg:mr-8">
              <div className="bg-white dark:bg-black rounded-2xl border-2 border-gray-300 dark:border-gray-700 overflow-hidden">
                <div className="bg-black p-6 text-center border-b border-gray-300 dark:border-gray-700">
                  <h3 className="text-2xl font-bold text-white mb-2">{quickFormProps.headline}</h3>
                  <p className="text-gray-300">Fill out the form below to get started</p>
                </div>

                <div className="p-6 space-y-6">
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickFormProps.fields.slice(0, 2).map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium mb-2 text-black dark:text-white">
                          {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        <div className="relative">
                          {getFieldIcon(field.name)}
                          <input
                            id={field.name}
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            onChange={handleChange}
                            autoComplete={"true"}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400 placeholder-gray-500 dark:placeholder-gray-400"
                            placeholder={`Enter your ${field.label.toLowerCase()}`}
                          />
                        </div>
                      </div>
                    ))}
                  </form>

                  {/* Website Field */}
                  {quickFormProps.fields.slice(2, 3).map((field) => (
                    <div key={field.name}>
                      <label htmlFor={field.name} className="block text-sm font-medium mb-2 text-black dark:text-white">
                        {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <div className="relative">
                        {getFieldIcon(field.name)}
                        <input
                          id={field.name}
                          type={field.type}
                          name={field.name}
                          required={field.required}
                          onChange={handleChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                          placeholder="https://yourwebsite.com or @instagram"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Service Select Field */}
                  {quickFormProps.fields.slice(3, 4).map((field, index) => (
                    <motion.div
                      key={field.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={visible ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: index * 0.1 }}>
                      <label htmlFor={field.name} className="block text-sm font-medium mb-2 text-black dark:text-white">
                        {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                      </label>
                      <div className="relative">
                        <select
                          id={field.name}
                          name={field.name}
                          required={field.required}
                          onChange={handleChange}
                          className="w-full pl-4 pr-10 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg appearance-none focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                        >
                          <option value="">Select a service</option>
                          {field.options?.map((option) => (
                            <option key={option} value={option}>{option}</option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" />
                      </div>
                    </motion.div>
                  ))}

                  {/* Phone and Time Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {quickFormProps.fields.slice(4, 6).map((field) => (
                      <div key={field.name}>
                        <label htmlFor={field.name} className="block text-sm font-medium mb-2 text-black dark:text-white">
                          {field.label}{field.required && <span className="text-red-500 ml-1">*</span>}
                        </label>
                        <div className="relative">
                          {getFieldIcon(field.name)}
                          <input
                            id={field.name}
                            type={field.type}
                            name={field.name}
                            required={field.required}
                            onChange={handleChange}
                            autoComplete={field.name === 'phone' ? 'true' : 'false'}
                            placeholder={field.name === 'phone' ? '+918607119872' : 'Morning, Evening, etc.'}
                            className="w-full pl-10 pr-4 py-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-black text-black dark:text-white rounded-lg focus:ring-2 focus:ring-gray-400 focus:border-gray-400"
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full px-6 py-4 bg-black dark:bg-white text-white font-semibold rounded-lg text-base hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-200 transform focus:outline-none focus:ring-4 focus:ring-gray-400 dark:focus:ring-gray-600 flex items-center justify-center group border-2 bg-gradient-to-r from-orange-600 via-pink-600 to-yellow-500 hover:from-orange-500 hover:via-pink-500 hover:to-yellow-400"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    <span>{quickFormProps.cta.text}</span>
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="text-xs text-gray-600 dark:text-gray-400 text-center">
                    We respect your privacy. Your information will never be shared.
                  </p>
                </div>
              </div>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};
