"use client";
import React, { useEffect, useRef } from 'react';
import { inView, motion, useReducedMotion } from 'framer-motion';
import { BusinessHero } from './hero';
import { BusinessServices } from './services';
import { BusinessStats } from './stats';
import { BusinessData } from '@/types/business.types';
import { CTA } from '../services/cta-section';
import { Testimonials } from '../homepage/testimonials';
import { Companies } from '../homepage/companies';

interface BusinessRendererProps {
    businessData: BusinessData;
}

export function BusinessRenderer({ businessData }: BusinessRendererProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { showSections = {}, customSections = [] } = businessData;

    useEffect(() => {
        if (sectionRef.current) {
            inView(sectionRef.current, () => { }, { margin: '-100px' });
        }
    }, []);

    const renderCustomSections = (position: string) => {
        return customSections
            .filter(section => section.position === position)
            .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
            .map((section, idx) => {
                const Component = section.component;
                return (
                    <motion.div
                        key={`custom-${position}-${idx}`}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 + idx * 0.1 }}
                    >
                        <Component {...section.props} />
                    </motion.div>
                );
            });
    };

    return (
        <section ref={sectionRef} className="">
            <div className="mx-auto">
                {/* Custom sections before hero */}
                {renderCustomSections('beforeHero')}

                {/* Hero Section */}
                {showSections.hero !== false && (
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <BusinessHero {...businessData.hero} />
                    </motion.div>
                )}

                {renderCustomSections('afterHero')}
                {renderCustomSections('beforeStats')}

                {/* Stats Section */}
                {showSections.stats !== false && businessData.stats && businessData.stats.items.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <BusinessStats stats={businessData.stats.items} />
                    </motion.div>
                )}

                {renderCustomSections('afterStats')}
                {renderCustomSections('beforeCompanies')}

                {/* Companies Section */}
                {showSections.companies !== false && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <Companies />
                    </motion.div>
                )}

                {renderCustomSections('afterCompanies')}
                {renderCustomSections('beforeServices')}

                {/* Services Section */}
                {showSections.services !== false && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <BusinessServices {...businessData.services} />
                    </motion.div>
                )}

                {renderCustomSections('afterServices')}
                {renderCustomSections('beforeTestimonials')}

                {/* Testimonials Section */}
                {showSections.testimonials !== false && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <Testimonials
                            title={businessData.testimonials.title}
                            // subtitle={businessData.testimonials.subtitle}
                            description={businessData.testimonials.description}
                            testimonials={businessData.testimonials.items}
                        />
                    </motion.div>
                )}

                {renderCustomSections('afterTestimonials')}
                {renderCustomSections('beforeCTA')}

                {/* CTA Section */}
                {showSections.cta !== false && (
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <CTA
                            title={businessData.cta.title}
                            subtitle={businessData.cta.subtitle}
                            description={businessData.cta.description}
                            backgroundColor={businessData.cta.backgroundColor}
                        />
                    </motion.div>
                )}

                {renderCustomSections('afterCTA')}
                {renderCustomSections('afterAll')}
            </div>
        </section>
    );
}
