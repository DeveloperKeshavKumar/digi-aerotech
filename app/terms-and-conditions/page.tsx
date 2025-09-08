"use client";
import React from "react";
import { motion } from "framer-motion";
import { FileText, Shield, CreditCard, Lock, Users, BookOpen, AlertCircle, Scale, Mail, X } from "lucide-react";

const TermsAndConditionsPage = () => {
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
              Terms &{" "}
              <span className="font-medium bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent relative">
                Conditions
                <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full"></div>
              </span>
            </h1>
            
            <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Welcome to Digi Aerotech. By accessing our services, you agree to comply with and be bound by the following Terms & Conditions.
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
                <span className="font-medium text-black dark:text-white">Last Updated: 8/9/25</span>
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
                    Welcome to <strong className="bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">Digi Aerotech</strong>. By accessing or using our website, services, or entering into a contract with us, you agree to comply with and be bound by the following Terms & Conditions. Please read them carefully.
                  </p>
                </motion.div>

                {/* Section 1 - Services Provided */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <FileText className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        1. Services Provided
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
                        Digi Aerotech offers a wide range of digital marketing and technology services, including but not limited to:
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        {[
                          "Social Media Marketing & Management",
                          "Meta Ads (Facebook & Instagram Ads)",
                          "Google Ads & GMB (Local SEO)",
                          "Website Development & Maintenance",
                          "Android App Development",
                          "CRM & ERP Development",
                          "Branding, Brochure Design & Graphics"
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

                {/* Section 2 - Client Responsibilities */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        2. Client Responsibilities
                      </h2>
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        By engaging our services, you agree to:
                      </p>
                      <div className="space-y-3">
                        {[
                          "Provide accurate information, content, and approvals required to execute campaigns or projects.",
                          "Adhere to deadlines for sharing necessary inputs to avoid project delays.",
                          "Ensure that any materials you provide (such as logos, content, images) do not infringe on copyrights or third-party rights."
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

                {/* Section 3 - Payments & Refunds */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CreditCard className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        3. Payments & Refunds
                      </h2>
                      
                      <div className="space-y-3">
                        {[
                          "All payments must be made as per the agreed proposal, contract, or invoice.",
                          "Advance payments are mandatory before project initiation.",
                          "Payments made are non-refundable, except in cases where Digi Aerotech fails to deliver the agreed service.",
                          "Ongoing services (like ads, SEO, or social media) are billed on a recurring monthly basis, unless otherwise stated."
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

                {/* Section 4 - Confidentiality */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Lock className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        4. Confidentiality
                      </h2>
                      
                      <div className="space-y-3">
                        {[
                          "Digi Aerotech will maintain the confidentiality of all personal and business information shared by the client.",
                          "We will never sell, rent, or disclose client data to third parties.",
                          "However, Digi Aerotech reserves the right to use non-confidential results (campaign statistics, growth metrics, ROI improvements, or creative samples) in our portfolio, case studies, or promotional materials. Brand names and logos will be used only with prior consent."
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

                {/* Section 5 - Intellectual Property */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        5. Intellectual Property
                      </h2>
                      
                      <div className="space-y-3">
                        {[
                          "All designs, strategies, software, websites, or marketing materials developed by Digi Aerotech remain our intellectual property until full payment is received.",
                          "After completion and full payment, ownership of deliverables (like websites, creatives, applications, or campaigns) will be transferred to the client, unless otherwise agreed.",
                          "Digi Aerotech may retain copies of work for portfolio and record-keeping purposes."
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

                {/* Section 6 - Third-Party Platforms */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <AlertCircle className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        6. Third-Party Platforms
                      </h2>
                      
                      <div className="space-y-3">
                        {[
                          "Many services depend on third-party platforms such as Google, Meta, Shopify, etc.",
                          "Digi Aerotech is not responsible for downtime, policy changes, or unexpected issues arising from these third-party platforms.",
                          "Clients must comply with the terms and conditions of these platforms when campaigns are run on their behalf."
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

                {/* Section 7 - Limitation of Liability */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Shield className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        7. Limitation of Liability
                      </h2>
                      
                      <div className="space-y-3">
                        {[
                          "Digi Aerotech will strive to achieve the best possible results, but we do not guarantee specific outcomes (such as exact ROI, lead numbers, or rankings) as digital marketing depends on multiple factors beyond our control.",
                          "Digi Aerotech will not be liable for any indirect, incidental, or consequential damages arising from the use of our services."
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

                {/* Section 8 - Termination of Services */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <X className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        8. Termination of Services
                      </h2>
                      
                      <div className="space-y-3">
                        {[
                          "Either party may terminate the services with a written notice of 15 days.",
                          "Upon termination, any outstanding payments must be cleared immediately.",
                          "Digi Aerotech reserves the right to suspend or terminate services if payments are delayed or terms are violated."
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

                {/* Section 9 - Governing Law */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.3 }}
                  className="group"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Scale className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        9. Governing Law
                      </h2>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        These Terms & Conditions are governed by and construed in accordance with the laws of India. Any disputes shall be subject to the jurisdiction of courts in Fatehabad, Haryana.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Section 10 - Contact Information */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                  className="group"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                        10. Contact Information
                      </h2>
                      
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                        For questions or concerns regarding these Terms & Conditions, please contact us:
                      </p>
                      <div className="flex items-center gap-2">
                        <Mail className="w-5 h-5 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent" />
                        <span className="font-medium text-black dark:text-white">Business@digiaerotech.com</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Contact Section */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.5 }}
                  className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-2xl p-8 text-center text-white"
                >
                  <h2 className="text-3xl font-bold mb-4">Have Questions?</h2>
                  <p className="mb-6 opacity-90">
                    If you need clarification on any of our terms, feel free to reach out to us.
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

export default TermsAndConditionsPage;