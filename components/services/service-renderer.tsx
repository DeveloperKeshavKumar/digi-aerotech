"use client";
import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { inView } from 'motion';
import { WhyChooseUs } from '@/components/homepage/why-choose-us';
import { TypesOfServices } from '@/components/services/types-of-services';
import { Process } from '@/components/services/process';
import { TechStack } from '@/components/services/tech-stack';
import { Testimonials } from '@/components/homepage/testimonials';
import { CTA } from '@/components/services/cta-section';
import { Hero } from '@/components/homepage/hero';
import { ServiceData } from '@/types/service.types';

interface ServiceRendererProps {
    serviceData: ServiceData;
}

export function ServiceRenderer({ serviceData }: ServiceRendererProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const { showSections = {}, customSections = [] } = serviceData;

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
                {/* Hero Section */}
                {showSections.hero !== false && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6 }}
                    >
                        <Hero {...serviceData.hero} />
                    </motion.div>
                )}

                {renderCustomSections('afterHero')}
                {renderCustomSections('beforeWhyChooseUs')}

                {/* Why Choose Us Section */}
                {showSections.whyChooseUs !== false && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.1 }}
                    >
                        <WhyChooseUs {...serviceData.whyChooseUs} />
                    </motion.div>
                )}

                {renderCustomSections('afterWhyChooseUs')}
                {renderCustomSections('beforeTypes')}

                {/* Types of Services Section */}
                {showSections.typesOfServices !== false && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <TypesOfServices {...serviceData.typesOfServices} />
                    </motion.div>
                )}

                {renderCustomSections('afterTypes')}
                {renderCustomSections('beforeProcess')}

                {/* Process Section */}
                {showSections.process !== false && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <Process {...serviceData.process} />
                    </motion.div>
                )}

                {renderCustomSections('afterProcess')}
                {renderCustomSections('beforeTech')}

                {/* Tech Stack Section */}
                {showSections.techStack !== false && serviceData.techStack && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <TechStack {...serviceData.techStack} />
                    </motion.div>
                )}

                {renderCustomSections('afterTech')}
                {renderCustomSections('beforeTestimonials')}

                {/* Testimonials Section */}
                {showSections.testimonials !== false && (
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }} 
                        whileInView={{ opacity: 1, y: 0 }} 
                        viewport={{ once: true }} 
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <Testimonials {...serviceData.testimonials} />
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
                        transition={{ duration: 0.6, delay: 0.6 }}
                    >
                        <CTA {...serviceData.cta} />
                    </motion.div>
                )}

                {renderCustomSections('afterCTA')}
                {renderCustomSections('afterAll')}
            </div>
        </section>
    );
}