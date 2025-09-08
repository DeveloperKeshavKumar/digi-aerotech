"use client";
import React from "react";
import { motion } from "framer-motion";
import { Shield, Mail, Lock, Eye, FileText, Users, Cookie, RefreshCw } from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-16 md:py-20 text-black dark:text-white overflow-hidden relative">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-light text-black dark:text-white mb-6">
              Privacy{" "}
              <span className="font-medium bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent relative">
                Policy
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Your trust is our foundation. We maintain complete transparency in how we collect, protect, and use your information.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white dark:bg-gray-950 rounded-3xl shadow-xl border border-gray-200 dark:border-gray-700"
          >
            {/* Last Updated Banner */}
            <div className="p-8 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-3">
                <FileText className="w-5 h-5 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" />
                <span className="font-medium text-black dark:text-white">Effective Date: 22/10/2021 | Last Updated: 8/9/25</span>
              </div>
            </div>

            <div className="p-8 md:p-12">
              <div className="space-y-12">
                
                {/* Introduction */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    At <strong className="bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Digi Aerotech</strong>, your trust is our top priority. We are committed to protecting your privacy and maintaining 100% transparency in how we collect, use, and safeguard your information. This Privacy Policy explains how we handle your data when you engage with our services.
                  </p>
                </motion.div>

                {/* Section 1 - Information We Collect */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Eye className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        1. Information We Collect
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        We may collect limited personal and business information only to provide our services effectively, such as:
                      </p>
                      
                      <div className="space-y-3 mb-6">
                        {[
                          "Name, email address, phone number, and business details provided during inquiries or onboarding.",
                          "Project-related data, campaign requirements, and performance reports.",
                          "Website usage data (via cookies/analytics tools) for improving user experience."
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-gray-700 dark:text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>

                      <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border-l-4 border-gradient-to-r from-orange-500 via-pink-500 to-red-500">
                        <p className="text-black dark:text-white font-medium text-sm m-0">
                          We do <strong>not</strong> collect unnecessary personal data.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 2 - How We Use Your Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        2. How We Use Your Information
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        Your data is used strictly for:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Delivering and managing our services (Meta Ads, Google Ads, Social Media Management, Website Development, SEO, GMB, CRM/ERP, Branding, etc.).",
                          "Internal communication and client support.",
                          "Improving service performance and reporting accurate results."
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-gray-700 dark:text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 3 - Data Sharing & Disclosure */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        3. Data Sharing & Disclosure
                      </h2>
                      
                      <div className="p-6 border-2 border-black dark:border-white bg-gray-50 dark:bg-gray-800 rounded-xl mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <Shield className="w-5 h-5 text-black dark:text-white" />
                          <h3 className="font-bold text-black dark:text-white">Zero Data Selling Guarantee</h3>
                        </div>
                        <p className="text-black dark:text-white font-medium">
                          <strong>We do not sell, rent, or share your personal or business data with any third parties.</strong>
                        </p>
                      </div>

                      <div className="space-y-3">
                        {[
                          "Access to your data is strictly limited to authorized Digi Aerotech team members who are directly involved in your project.",
                          "Third-party platforms (e.g., Google, Meta, Shopify) may access only the necessary data required to run campaigns or services, under their own privacy policies."
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-gray-700 dark:text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 4 - Portfolio Usage - FIXED STYLING */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        4. Use of Results in Portfolio
                      </h2>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Digi Aerotech reserves the right to showcase <strong>non-confidential results</strong> generated from campaigns or projects (such as lead numbers, growth statistics, ROI improvements, design samples, etc.) in our <strong>portfolio, case studies, website, or marketing materials</strong>.
                      </p>

                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-gray-700 dark:text-gray-300">No personal or sensitive business data (such as client lists, customer contacts, or private strategies) will ever be disclosed.</p>
                        </div>
                        <div className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                          <p className="text-gray-700 dark:text-gray-300">Any use of brand names, logos, or direct references will be done only with your <strong>consent</strong>.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 5 - Data Security */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        5. Data Security
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        We implement strong security measures to protect your data, including:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Secure servers and encrypted communication.",
                          "Restricted access based on role.",
                          "Regular system updates to prevent unauthorized access."
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-gray-700 dark:text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 6 - Your Rights */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        6. Your Rights
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        As our client, you have full rights to:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Request access to the data we hold about you.",
                          "Ask for corrections, updates, or deletion of your information.",
                          "Withdraw consent at any time regarding use of data in our portfolio."
                        ].map((item, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex-shrink-0 mt-2"></div>
                            <p className="text-gray-700 dark:text-gray-300">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Section 7 - Cookies & Tracking */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cookie className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        7. Cookies & Tracking
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        Our website may use cookies and analytics tools to enhance browsing experience. You can disable cookies in your browser settings if you prefer.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 8 - Updates to Policy */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <RefreshCw className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        8. Updates to Policy
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        We may update this Privacy Policy from time to time to reflect changes in our services or regulations. Any updates will be posted on our website with a revised "Last Updated" date.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-2xl p-8 text-center text-white"
                >
                  <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                  <p className="mb-6 opacity-90">
                    For any questions or concerns regarding this Privacy Policy, please contact us:
                  </p>
                  <motion.a
                    href="mailto:business@digiaerotech.com"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Mail className="w-5 h-5" />
                    business@digiaerotech.com
                  </motion.a>
                </motion.div>

              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;