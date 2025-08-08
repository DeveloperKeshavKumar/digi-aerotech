// services/template-variants.service.ts

export type VariantType = 'hero' | 'cta' | 'process' | 'testimonial' | 'faq' | 'whyChoose';

export interface VariantConfig {
    id: string;
    name: string;
    weight: number; // Higher weight = more likely to be selected
    styles: {
        container?: string;
        background?: string;
        layout?: string;
        animation?: string;
    };
    features: string[];
}

export interface PageVariantAssignment {
    hero: string;
    cta: string;
    process: string;
    testimonial: string;
    faq: string;
    whyChoose: string;
}

export class TemplateVariantsService {

    // Hero section variants
    static readonly HERO_VARIANTS: Record<string, VariantConfig> = {
        'hero1': {
            id: 'hero1',
            name: 'Classic Center',
            weight: 3,
            styles: {
                container: 'text-center py-20 lg:py-32',
                background: 'bg-white dark:bg-gray-900',
                layout: 'max-w-4xl mx-auto px-6',
                animation: 'fade-in-up'
            },
            features: ['centered-text', 'large-headlines', 'dual-cta-buttons', 'stats-grid']
        },
        'hero2': {
            id: 'hero2',
            name: 'Split Layout',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-32',
                background: 'bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
                layout: 'grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6',
                animation: 'slide-in-right'
            },
            features: ['split-layout', 'image-right', 'stats-cards', 'single-cta']
        },
        'hero3': {
            id: 'hero3',
            name: 'Minimal Focus',
            weight: 2,
            styles: {
                container: 'py-24 lg:py-40',
                background: 'bg-white dark:bg-black',
                layout: 'text-center max-w-3xl mx-auto px-6',
                animation: 'scale-in'
            },
            features: ['minimal-design', 'large-typography', 'single-cta-prominent', 'inline-stats']
        },
        'hero4': {
            id: 'hero4',
            name: 'Dynamic Grid',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-32',
                background: 'bg-gray-50 dark:bg-gray-900',
                layout: 'grid lg:grid-cols-12 gap-8 items-center max-w-7xl mx-auto px-6',
                animation: 'stagger-in'
            },
            features: ['grid-layout', 'asymmetric-design', 'floating-stats', 'multiple-cta']
        }
    };

    // CTA section variants
    static readonly CTA_VARIANTS: Record<string, VariantConfig> = {
        'cta1': {
            id: 'cta1',
            name: 'Bold Center',
            weight: 3,
            styles: {
                container: 'text-center py-20 lg:py-24',
                background: 'bg-black dark:bg-white text-white dark:text-black',
                layout: 'max-w-4xl mx-auto px-6',
                animation: 'fade-in'
            },
            features: ['high-contrast', 'centered-content', 'single-large-button', 'minimal-text']
        },
        'cta2': {
            id: 'cta2',
            name: 'Gradient Box',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500',
                layout: 'text-center text-white max-w-5xl mx-auto px-6 rounded-3xl',
                animation: 'slide-in-bottom'
            },
            features: ['gradient-background', 'rounded-container', 'white-text', 'dual-buttons']
        },
        'cta3': {
            id: 'cta3',
            name: 'Split Action',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gray-50 dark:bg-gray-800',
                layout: 'grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6',
                animation: 'fade-in-sides'
            },
            features: ['two-column', 'text-left', 'image-right', 'single-button']
        },
        'cta4': {
            id: 'cta4',
            name: 'Card Style',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'max-w-4xl mx-auto px-6',
                animation: 'scale-in'
            },
            features: ['card-design', 'border-accent', 'centered-content', 'hover-effects']
        }
    };

    // Process section variants
    static readonly PROCESS_VARIANTS: Record<string, VariantConfig> = {
        'process1': {
            id: 'process1',
            name: 'Vertical Timeline',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'max-w-4xl mx-auto px-6',
                animation: 'stagger-up'
            },
            features: ['vertical-timeline', 'numbered-steps', 'connecting-lines', 'step-icons']
        },
        'process2': {
            id: 'process2',
            name: 'Horizontal Flow',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gray-50 dark:bg-gray-800',
                layout: 'grid lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-6',
                animation: 'slide-in-sequence'
            },
            features: ['horizontal-grid', 'card-steps', 'arrow-connectors', 'step-numbers']
        },
        'process3': {
            id: 'process3',
            name: 'Circular Process',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800',
                layout: 'max-w-6xl mx-auto px-6',
                animation: 'rotate-in'
            },
            features: ['circular-layout', 'center-focus', 'curved-connections', 'rotating-elements']
        },
        'process4': {
            id: 'process4',
            name: 'Accordion Style',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'max-w-4xl mx-auto px-6',
                animation: 'expand-in'
            },
            features: ['accordion-design', 'expandable-steps', 'detailed-content', 'interactive-elements']
        }
    };

    // Testimonial section variants
    static readonly TESTIMONIAL_VARIANTS: Record<string, VariantConfig> = {
        'testimonial1': {
            id: 'testimonial1',
            name: 'Carousel Cards',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gray-50 dark:bg-gray-800',
                layout: 'max-w-7xl mx-auto px-6',
                animation: 'slide-carousel'
            },
            features: ['card-carousel', 'navigation-dots', 'auto-play', 'profile-images']
        },
        'testimonial2': {
            id: 'testimonial2',
            name: 'Grid Layout',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6',
                animation: 'fade-in-grid'
            },
            features: ['static-grid', 'equal-height-cards', 'rating-stars', 'company-logos']
        },
        'testimonial3': {
            id: 'testimonial3',
            name: 'Featured Quote',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-black dark:bg-white text-white dark:text-black',
                layout: 'text-center max-w-4xl mx-auto px-6',
                animation: 'scale-in-quote'
            },
            features: ['large-quote', 'minimal-design', 'high-contrast', 'single-testimonial']
        },
        'testimonial4': {
            id: 'testimonial4',
            name: 'Video Stories',
            weight: 1,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gradient-to-r from-gray-900 to-black text-white',
                layout: 'max-w-6xl mx-auto px-6',
                animation: 'fade-in-video'
            },
            features: ['video-testimonials', 'play-buttons', 'transcript-overlay', 'thumbnail-grid']
        }
    };

    // FAQ section variants
    static readonly FAQ_VARIANTS: Record<string, VariantConfig> = {
        'faq1': {
            id: 'faq1',
            name: 'Traditional Accordion',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'max-w-4xl mx-auto px-6',
                animation: 'expand-collapse'
            },
            features: ['accordion-style', 'plus-minus-icons', 'single-open', 'clean-borders']
        },
        'faq2': {
            id: 'faq2',
            name: 'Two Column',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gray-50 dark:bg-gray-800',
                layout: 'grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6',
                animation: 'stagger-columns'
            },
            features: ['two-column-grid', 'alternating-questions', 'card-style', 'hover-effects']
        },
        'faq3': {
            id: 'faq3',
            name: 'Minimal List',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'max-w-3xl mx-auto px-6',
                animation: 'fade-in-sequence'
            },
            features: ['simple-list', 'no-borders', 'typography-focus', 'minimalist-icons']
        },
        'faq4': {
            id: 'faq4',
            name: 'Tabbed Categories',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800',
                layout: 'max-w-6xl mx-auto px-6',
                animation: 'tab-switch'
            },
            features: ['tab-navigation', 'categorized-questions', 'smooth-transitions', 'search-functionality']
        }
    };

    // Why Choose Us variants
    static readonly WHY_CHOOSE_VARIANTS: Record<string, VariantConfig> = {
        'whyChoose1': {
            id: 'whyChoose1',
            name: 'Feature Grid',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gray-50 dark:bg-gray-800',
                layout: 'grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-6',
                animation: 'fade-in-grid'
            },
            features: ['icon-grid', 'equal-spacing', 'hover-animations', 'description-cards']
        },
        'whyChoose2': {
            id: 'whyChoose2',
            name: 'Split Benefits',
            weight: 3,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-white dark:bg-gray-900',
                layout: 'grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto px-6',
                animation: 'slide-in-alternating'
            },
            features: ['two-column-split', 'image-text-combo', 'alternating-layout', 'large-icons']
        },
        'whyChoose3': {
            id: 'whyChoose3',
            name: 'Centered List',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-black dark:bg-white text-white dark:text-black',
                layout: 'text-center max-w-4xl mx-auto px-6',
                animation: 'scale-in-sequence'
            },
            features: ['centered-alignment', 'high-contrast', 'minimal-icons', 'typography-emphasis']
        },
        'whyChoose4': {
            id: 'whyChoose4',
            name: 'Timeline Format',
            weight: 2,
            styles: {
                container: 'py-20 lg:py-24',
                background: 'bg-gradient-to-r from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
                layout: 'max-w-5xl mx-auto px-6',
                animation: 'timeline-reveal'
            },
            features: ['timeline-design', 'progressive-disclosure', 'numbered-benefits', 'connecting-lines']
        }
    };

    // Generate deterministic variant selection based on service + business combination
    static generateVariantAssignment(serviceSlug: string, businessSlug: string): PageVariantAssignment {
        // Create a deterministic seed from service and business slugs
        const seed = this.generateSeed(serviceSlug + businessSlug);

        return {
            hero: this.selectVariant('hero', seed, this.HERO_VARIANTS),
            cta: this.selectVariant('cta', seed + 1, this.CTA_VARIANTS),
            process: this.selectVariant('process', seed + 2, this.PROCESS_VARIANTS),
            testimonial: this.selectVariant('testimonial', seed + 3, this.TESTIMONIAL_VARIANTS),
            faq: this.selectVariant('faq', seed + 4, this.FAQ_VARIANTS),
            whyChoose: this.selectVariant('whyChoose', seed + 5, this.WHY_CHOOSE_VARIANTS)
        };
    }

    // Generate a consistent seed from string input
    private static generateSeed(input: string): number {
        let hash = 0;
        for (let i = 0; i < input.length; i++) {
            const char = input.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash);
    }

    // Select variant based on weighted probability
    private static selectVariant(
        type: string,
        seed: number,
        variants: Record<string, VariantConfig>
    ): string {
        const variantArray = Object.values(variants);
        const totalWeight = variantArray.reduce((sum, variant) => sum + variant.weight, 0);

        // Use seed to generate consistent "random" selection
        const random = (seed % 1000) / 1000; // Convert to 0-1 range
        const target = random * totalWeight;

        let currentWeight = 0;
        for (const variant of variantArray) {
            currentWeight += variant.weight;
            if (target <= currentWeight) {
                return variant.id;
            }
        }

        // Fallback to first variant
        return variantArray[0].id;
    }

    // Get variant configuration by ID and type
    static getVariantConfig(type: VariantType, variantId: string): VariantConfig | undefined {
        const variantSets = {
            hero: this.HERO_VARIANTS,
            cta: this.CTA_VARIANTS,
            process: this.PROCESS_VARIANTS,
            testimonial: this.TESTIMONIAL_VARIANTS,
            faq: this.FAQ_VARIANTS,
            whyChoose: this.WHY_CHOOSE_VARIANTS
        };

        return variantSets[type]?.[variantId];
    }

    // Get all available variants for a specific type
    static getVariantsByType(type: VariantType): Record<string, VariantConfig> {
        const variantSets = {
            hero: this.HERO_VARIANTS,
            cta: this.CTA_VARIANTS,
            process: this.PROCESS_VARIANTS,
            testimonial: this.TESTIMONIAL_VARIANTS,
            faq: this.FAQ_VARIANTS,
            whyChoose: this.WHY_CHOOSE_VARIANTS
        };

        return variantSets[type] || {};
    }

    // Validate if a combination creates good visual balance
    static validateVariantCombination(assignment: PageVariantAssignment): {
        isValid: boolean;
        score: number;
        suggestions: string[];
    } {
        const suggestions: string[] = [];
        let score = 100;

        // Check for too many gradient backgrounds
        const gradientSections = Object.entries(assignment).filter(([_, variantId]) => {
            const config = this.getVariantConfig('hero', variantId) ||
                this.getVariantConfig('cta', variantId) ||
                this.getVariantConfig('process', variantId);
            return config?.styles.background?.includes('gradient');
        });

        if (gradientSections.length > 2) {
            score -= 20;
            suggestions.push('Consider reducing gradient backgrounds for better visual balance');
        }

        // Check for contrast variety
        const darkSections = Object.entries(assignment).filter(([_, variantId]) => {
            const config = this.getVariantConfig('hero', variantId) ||
                this.getVariantConfig('cta', variantId);
            return config?.styles.background?.includes('black') ||
                config?.styles.background?.includes('gray-900');
        });

        if (darkSections.length === 0) {
            score -= 10;
            suggestions.push('Adding a dark section could improve visual hierarchy');
        }

        return {
            isValid: score >= 70,
            score,
            suggestions
        };
    }
}