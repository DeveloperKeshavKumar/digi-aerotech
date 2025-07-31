import React, { useState } from 'react';
import { motion, Reorder } from 'motion/react';
import { ChevronLeft, ChevronRight, GripVertical, Smartphone, Monitor } from 'lucide-react';

interface Technology {
    name: string;
    description: string;
    pros: string[];
    cons: string[];
    useCase: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    popularity: number; // 1-5 scale
    learningCurve: string;
    performance: string;
    community: string;
    documentation: string;
}

interface CategoryData {
    [key: string]: Technology[];
}

interface FieldConfig {
    key: keyof Technology;
    label: string;
    type?: 'text' | 'list' | 'grid' | 'difficulty' | 'rating';
    gridCols?: number;
    showInCard?: boolean;
    showInTable?: boolean;
}

interface TechDiffProps {
    heading?: {
        part1: string;
        part2?: string;
    };
    subheading?: string;
    data: CategoryData;
    fieldConfig?: FieldConfig[];
}

const defaultData: CategoryData = {
    frontend: [
        {
            name: 'React',
            description: 'A JavaScript library for building user interfaces with component-based architecture',
            pros: ['Large ecosystem', 'Virtual DOM', 'Reusable components', 'Strong community'],
            cons: ['Steep learning curve', 'Frequent updates', 'JSX syntax'],
            useCase: 'Complex web applications with dynamic UIs',
            difficulty: 'Intermediate',
            popularity: 5,
            learningCurve: 'Moderate to steep',
            performance: 'Excellent with optimizations',
            community: 'Very large and active',
            documentation: 'Comprehensive'
        },
        {
            name: 'Next.js',
            description: 'React framework with server-side rendering and full-stack capabilities',
            pros: ['SSR/SSG support', 'Built-in routing', 'Performance optimized', 'API routes'],
            cons: ['Vendor lock-in', 'Complex configuration', 'Learning overhead'],
            useCase: 'Full-stack web applications with SEO requirements',
            difficulty: 'Advanced',
            popularity: 4,
            learningCurve: 'Steep',
            performance: 'Excellent',
            community: 'Large and growing',
            documentation: 'Excellent'
        },
        {
            name: 'Vue',
            description: 'Progressive JavaScript framework with gentle learning curve',
            pros: ['Gentle learning curve', 'Excellent docs', 'Template syntax', 'Small bundle'],
            cons: ['Smaller ecosystem', 'Less job market', 'Limited tooling'],
            useCase: 'Rapid prototyping and medium-scale applications',
            difficulty: 'Beginner',
            popularity: 3,
            learningCurve: 'Gentle',
            performance: 'Very good',
            community: 'Growing steadily',
            documentation: 'Excellent'
        }
    ],
    backend: [
        {
            name: 'Node.js',
            description: 'JavaScript runtime for server-side development',
            pros: ['Same language as frontend', 'NPM ecosystem', 'Fast I/O', 'Scalable'],
            cons: ['Single-threaded', 'Memory leaks', 'Callback hell'],
            useCase: 'Real-time applications and APIs',
            difficulty: 'Intermediate',
            popularity: 5,
            learningCurve: 'Moderate',
            performance: 'Excellent for I/O',
            community: 'Very large',
            documentation: 'Good'
        },
        {
            name: 'PHP',
            description: 'Server-side scripting language for web development',
            pros: ['Easy to learn', 'Wide hosting support', 'Large community', 'Flexible'],
            cons: ['Inconsistent syntax', 'Security issues', 'Performance concerns'],
            useCase: 'Web development and content management',
            difficulty: 'Beginner',
            popularity: 4,
            learningCurve: 'Easy',
            performance: 'Good',
            community: 'Very large',
            documentation: 'Comprehensive'
        },
        {
            name: 'Express',
            description: 'Minimal and flexible Node.js web application framework',
            pros: ['Lightweight', 'Flexible', 'Middleware support', 'Fast development'],
            cons: ['Minimal structure', 'Manual configuration', 'Security setup'],
            useCase: 'REST APIs and microservices',
            difficulty: 'Intermediate',
            popularity: 4,
            learningCurve: 'Moderate',
            performance: 'Excellent',
            community: 'Large',
            documentation: 'Good'
        }
    ],
    cms: [
        {
            name: 'WordPress',
            description: 'Popular content management system built with PHP',
            pros: ['User-friendly', 'Plugin ecosystem', 'SEO friendly', 'Large community'],
            cons: ['Security vulnerabilities', 'Performance issues', 'Update maintenance'],
            useCase: 'Blogs and content-heavy websites',
            difficulty: 'Beginner',
            popularity: 5,
            learningCurve: 'Very easy',
            performance: 'Fair to good',
            community: 'Massive',
            documentation: 'Extensive'
        },
        {
            name: 'Shopify',
            description: 'E-commerce platform and content management system',
            pros: ['E-commerce focused', 'Hosted solution', 'Payment integration', 'Mobile responsive'],
            cons: ['Monthly fees', 'Limited customization', 'Transaction fees'],
            useCase: 'Online stores and e-commerce',
            difficulty: 'Beginner',
            popularity: 4,
            learningCurve: 'Easy',
            performance: 'Good',
            community: 'Large',
            documentation: 'Good'
        }
    ],
    database: [
        {
            name: 'MySQL',
            description: 'Popular relational database management system',
            pros: ['ACID compliance', 'Mature technology', 'Wide support', 'Performance'],
            cons: ['Limited JSON support', 'Scaling challenges', 'Storage engine complexity'],
            useCase: 'Traditional web applications with structured data',
            difficulty: 'Intermediate',
            popularity: 5,
            learningCurve: 'Moderate',
            performance: 'Excellent',
            community: 'Very large',
            documentation: 'Comprehensive'
        },
        {
            name: 'PostgreSQL',
            description: 'Advanced open-source relational database system',
            pros: ['Feature rich', 'JSON support', 'Extensible', 'Standards compliant'],
            cons: ['Complex configuration', 'Memory usage', 'Learning curve'],
            useCase: 'Complex applications requiring advanced features',
            difficulty: 'Advanced',
            popularity: 4,
            learningCurve: 'Steep',
            performance: 'Excellent',
            community: 'Large',
            documentation: 'Excellent'
        },
        {
            name: 'MongoDB',
            description: 'NoSQL document database with flexible schema',
            pros: ['Flexible schema', 'Horizontal scaling', 'JSON-like documents', 'Cloud native'],
            cons: ['Memory usage', 'No ACID transactions', 'Query complexity'],
            useCase: 'Applications with evolving data structures',
            difficulty: 'Intermediate',
            popularity: 4,
            learningCurve: 'Moderate',
            performance: 'Very good',
            community: 'Large',
            documentation: 'Good'
        }
    ]
};

const defaultFieldConfig: FieldConfig[] = [
    { key: 'description', label: 'Description', type: 'text', showInCard: true, showInTable: true },
    { key: 'useCase', label: 'Use Case', type: 'text', showInCard: true, showInTable: true },
    { key: 'difficulty', label: 'Difficulty', type: 'difficulty', showInCard: false, showInTable: true },
    { key: 'performance', label: 'Performance', type: 'grid', gridCols: 2, showInCard: true, showInTable: true },
    { key: 'learningCurve', label: 'Learning Curve', type: 'grid', gridCols: 2, showInCard: true, showInTable: true },
    { key: 'community', label: 'Community', type: 'grid', gridCols: 2, showInCard: true, showInTable: true },
    { key: 'documentation', label: 'Documentation', type: 'grid', gridCols: 2, showInCard: true, showInTable: true },
    { key: 'popularity', label: 'Popularity', type: 'rating', showInCard: false, showInTable: true },
    { key: 'pros', label: 'Pros', type: 'list', showInCard: true, showInTable: true },
    { key: 'cons', label: 'Cons', type: 'list', showInCard: true, showInTable: true }
];

export function TechDiff({
    heading = { part1: "Technology ", part2: "Differences" },
    subheading = "Explore the differences in web development technologies.",
    data = defaultData,
    fieldConfig = defaultFieldConfig
}: TechDiffProps) {
    const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
    const [viewMode, setViewMode] = useState<'desktop' | 'mobile'>('desktop');
    const [expandedCard, setExpandedCard] = useState<string | null>(null);
    const categories = Object.keys(data);
    const currentCategory = categories[currentCategoryIndex];
    const currentTechs = data[currentCategory] || [];

    const [techOrder, setTechOrder] = useState<Technology[]>(currentTechs);

    // Derive card and table fields from fieldConfig
    const cardFields = fieldConfig.filter(field => field.showInCard !== false);
    const tableFields = fieldConfig.filter(field => field.showInTable !== false);

    // Update tech order when category changes
    React.useEffect(() => {
        setTechOrder(currentTechs);
        // Expand first card by default only on mobile
        if (currentTechs.length > 0) {
            const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
            if (isMobile) {
                setExpandedCard(currentTechs[0].name);
            } else {
                setExpandedCard(null); // Clear expanded state on larger screens
            }
        }
    }, [currentCategoryIndex, currentTechs]);

    // Auto-detect screen size for view mode
    React.useEffect(() => {
        const checkScreenSize = () => {
            const isMobile = window.innerWidth < 768;
            setViewMode(isMobile ? 'mobile' : 'desktop');
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);
        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const nextCategory = () => {
        setCurrentCategoryIndex((prev) => (prev + 1) % categories.length);
    };

    const prevCategory = () => {
        setCurrentCategoryIndex((prev) => (prev - 1 + categories.length) % categories.length);
    };

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case 'Beginner': return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/30';
            case 'Intermediate': return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/30';
            case 'Advanced': return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/30';
            default: return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-900/30';
        }
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <span key={i} className={i < rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}>
                ★
            </span>
        ));
    };

    const renderMobileCards = () => {
        return (
            <div className="w-full flex justify-center px-2 sm:px-4 overflow-hidden">
                <div className="w-full max-w-7xl mx-auto space-y-4 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 lg:flex justify-center lg:gap-6">

                    {techOrder.map((tech) => {
                        // Check if we're on mobile (small screen)
                        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                        const shouldShowContent = !isMobile || expandedCard === tech.name;

                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className={`bg-white dark:bg-gray-900/50 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden shadow-sm transition-all duration-200 flex flex-col ${isMobile ? 'w-full max-w-full' : 'h-full min-h-[400px] max-w-md lg:max-w-sm xl:max-w-md'
                                    }`}
                            >
                                {/* Card Header - Always visible */}
                                {isMobile ? (
                                    <button
                                        className="w-full text-left flex-shrink-0"
                                        onClick={() => setExpandedCard(expandedCard === tech.name ? null : tech.name)}
                                    >
                                        <CardHeader tech={tech} />
                                    </button>
                                ) : (
                                    <div className="w-full flex-shrink-0">
                                        <CardHeader tech={tech} />
                                    </div>
                                )}

                                {/* Card Content - Always visible on medium+ screens, conditionally on mobile */}
                                {shouldShowContent && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.2 }}
                                        className={`p-4 space-y-4 overflow-hidden ${isMobile ? '' : 'flex-grow flex flex-col justify-between'
                                            }`}
                                    >
                                        <CardContent tech={tech} />
                                    </motion.div>
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        );
    };

    const CardHeader = ({ tech }: { tech: Technology }) => (
        <div className="bg-gray-50 dark:bg-gray-800/50 p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <h3 className="text-lg font-bold">{tech.name}</h3>
                <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tech.difficulty)}`}>
                    {tech.difficulty}
                </span>
            </div>
            <div className="flex items-center">
                {renderStars(tech.popularity)}
            </div>
        </div>
    );

    const CardContent = ({ tech }: { tech: Technology }) => {
        const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

        const renderFieldContent = (field: FieldConfig, tech: Technology) => {
            const value = tech[field.key];

            switch (field.type) {
                case 'difficulty':
                    return (
                        <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(value as string)}`}>
                            {value as string}
                        </span>
                    );
                case 'rating':
                    return <div className="flex">{renderStars(value as number)}</div>;
                case 'list':
                    if (field.key === 'pros') {
                        return (
                            <ul className={`space-y-1 ${isMobile ? '' : 'flex-grow'} overflow-hidden`}>
                                {(value as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <span className="text-green-500 mr-1 sm:mr-2 flex-shrink-0 mt-0.5">✓</span>
                                        <span className="text-green-600 dark:text-green-400 break-words">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    } else if (field.key === 'cons') {
                        return (
                            <ul className={`space-y-1 ${isMobile ? '' : 'flex-grow'} overflow-hidden`}>
                                {(value as string[]).map((item, i) => (
                                    <li key={i} className="flex items-start text-sm">
                                        <span className="text-red-500 mr-1 sm:mr-2 flex-shrink-0 mt-0.5">✗</span>
                                        <span className="text-red-600 dark:text-red-400 break-words">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        );
                    }
                    return (
                        <ul className="space-y-1 text-sm">
                            {(value as string[]).map((item, i) => (
                                <li key={i}>{item}</li>
                            ))}
                        </ul>
                    );
                default:
                    return <p className="text-sm text-gray-600 dark:text-gray-400">{value as string}</p>;
            }
        };

        const prosConsFields = cardFields.filter(field => field.key === 'pros' || field.key === 'cons');
        const otherFields = cardFields.filter(field => field.key !== 'pros' && field.key !== 'cons');
        const gridFields = otherFields.filter(field => field.type === 'grid');
        const regularFields = otherFields.filter(field => field.type !== 'grid');

        return (
            <div className={`space-y-4 ${isMobile ? '' : 'h-full flex flex-col'}`}>
                {/* Regular fields */}
                {regularFields.map((field) => (
                    <div key={field.key} className="flex-shrink-0">
                        <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">{field.label}</h4>
                        {renderFieldContent(field, tech)}
                    </div>
                ))}

                {/* Grid fields */}
                {gridFields.length > 0 && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-shrink-0">
                        {gridFields.map((field) => (
                            <div key={field.key}>
                                <h4 className="font-semibold text-sm text-gray-700 dark:text-gray-300 mb-1">{field.label}</h4>
                                {renderFieldContent(field, tech)}
                            </div>
                        ))}
                    </div>
                )}

                {/* Pros & Cons */}
                {prosConsFields.length > 0 && (
                    <div className={`grid grid-cols-2 gap-3 sm:gap-4 ${isMobile ? '' : 'flex-grow'}`}>
                        {prosConsFields.map((field) => (
                            <div key={field.key} className={`${isMobile ? '' : 'flex flex-col'} overflow-hidden`}>
                                <h4 className={`font-semibold text-sm mb-2 ${field.key === 'pros' ? 'text-green-700 dark:text-green-400' : 'text-red-700 dark:text-red-400'}`}>
                                    {field.label}
                                </h4>
                                {renderFieldContent(field, tech)}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    const renderDesktopTable = () => {
        return (
            <div className="w-full max-w-max overflow-x-auto">
                <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden bg-white dark:bg-gray-900/30 backdrop-blur-sm relative flex flex-col items-center justify-center">

                    {/* Draggable Column Headers - add hide-scrollbar class */}
                    <div className="flex bg-gray-50 dark:bg-gray-800/50 overflow-x-auto hide-scrollbar">
                        <div className="flex-shrink-0 w-32 lg:w-40 p-3 lg:p-4 font-bold border-r border-gray-200 dark:border-gray-600">
                            Features
                        </div>
                        <Reorder.Group
                            axis="x"
                            values={techOrder}
                            onReorder={setTechOrder}
                            className="flex"
                        >
                            {techOrder.map((tech, index) => (
                                <Reorder.Item
                                    key={tech.name}
                                    value={tech}
                                    className="flex-shrink-0 w-48 lg:w-64"
                                >
                                    <motion.div
                                        whileDrag={{ scale: 1.02, zIndex: 50 }}
                                        className={`p-3 lg:p-4 cursor-grab active:cursor-grabbing bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-700/50 transition-all duration-200 ${index < techOrder.length - 1 ? 'border-r border-gray-200 dark:border-gray-600' : ''}`}
                                    >
                                        <div className="flex items-center gap-2">
                                            <GripVertical className="w-4 h-4 text-gray-400 dark:text-gray-500" />
                                            <div>
                                                <h3 className="font-bold text-sm lg:text-lg">{tech.name}</h3>
                                            </div>
                                        </div>
                                    </motion.div>
                                </Reorder.Item>
                            ))}
                        </Reorder.Group>
                    </div>

                    {/* Table Rows - add hide-scrollbar class */}
                    <div className="overflow-x-auto hide-scrollbar">
                        {tableFields.map((field, fieldIndex) => (
                            <motion.div
                                key={field.label}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: fieldIndex * 0.05 }}
                                className={`flex min-w-max hover:bg-gray-50/50 dark:hover:bg-gray-800/30 transition-colors ${fieldIndex < tableFields.length - 1 ? 'border-b border-gray-200 dark:border-gray-700' : ''}`}
                            >
                                <div className="flex-shrink-0 w-32 lg:w-40 p-3 lg:p-4 font-semibold bg-gray-50 dark:bg-gray-800/50 border-r border-gray-200 dark:border-gray-600">
                                    <span className="text-xs lg:text-sm">{field.label}</span>
                                </div>
                                {techOrder.map((tech, techIndex) => (
                                    <div
                                        key={tech.name}
                                        className={`flex-shrink-0 w-48 lg:w-64 p-3 lg:p-4 ${techIndex < techOrder.length - 1 ? 'border-r border-gray-200 dark:border-gray-600' : ''}`}
                                    >
                                        {field.type === 'difficulty' ? (
                                            <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(tech[field.key] as string)}`}>
                                                {tech[field.key]}
                                            </span>
                                        ) : field.type === 'rating' ? (
                                            <div className="flex">
                                                {renderStars(tech[field.key] as number)}
                                            </div>
                                        ) : field.key === 'pros' ? (
                                            <ul className="space-y-1 text-xs lg:text-sm">
                                                {(tech[field.key] as string[]).map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-green-500 mr-1 flex-shrink-0 mt-0.5">✓</span>
                                                        <span className="text-green-600 dark:text-green-400">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : field.key === 'cons' ? (
                                            <ul className="space-y-1 text-xs lg:text-sm">
                                                {(tech[field.key] as string[]).map((item, i) => (
                                                    <li key={i} className="flex items-start">
                                                        <span className="text-red-500 mr-1 flex-shrink-0 mt-0.5">✗</span>
                                                        <span className="text-red-500 dark:text-red-400">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <span className="text-xs lg:text-sm text-gray-700 dark:text-gray-300">
                                                {tech[field.key] as string}
                                            </span>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
            <div className="container mx-auto px-2 sm:px-4 py-6 sm:py-8 lg:py-16 max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-6 sm:mb-8 lg:mb-12"
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-4 px-2">
                        {heading.part1}
                        {heading.part2 && (
                            <span className="bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent">
                                {heading.part2}
                            </span>
                        )}
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-2">
                        {subheading}
                    </p>
                </motion.div>

                {/* Category Navigation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center justify-center mb-6 sm:mb-8 lg:mb-12 px-2"
                >
                    <button
                        onClick={prevCategory}
                        className="p-2 sm:p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        disabled={categories.length <= 1}
                    >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>

                    <div className="mx-4 sm:mx-6 lg:mx-12 text-center">
                        <h2 className="text-2xl sm:text-3xl font-bold capitalize">
                            <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                                {currentCategory}
                            </span>
                        </h2>
                    </div>

                    <button
                        onClick={nextCategory}
                        className="p-2 sm:p-3 rounded-full border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                        disabled={categories.length <= 1}
                    >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                    </button>
                </motion.div>

                {/* Drag Instructions (Desktop only) */}
                {viewMode === 'desktop' && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="hidden md:block text-center mb-6"
                    >
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                            <GripVertical className="inline w-4 h-4 mr-1" />
                            Drag column headers to reorder and compare technologies
                        </p>
                    </motion.div>
                )}

                {/* Comparison Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="w-full relative flex flex-col items-center"
                >
                    {/* View Mode Toggle - Hide on small devices */}
                    <div className="hidden md:flex justify-end mb-4">
                        <div className="flex items-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg p-1 shadow-sm">
                            <button
                                onClick={() => setViewMode('desktop')}
                                className={`p-2 rounded transition-all ${viewMode === 'desktop'
                                    ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                                title="Table View"
                            >
                                <Monitor className="w-4 h-4" />
                            </button>
                            <button
                                onClick={() => setViewMode('mobile')}
                                className={`p-2 rounded transition-all ${viewMode === 'mobile'
                                    ? 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
                                    : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                                    }`}
                                title="Card View"
                            >
                                <Smartphone className="w-4 h-4" />
                            </button>
                        </div>
                    </div>

                    {/* Always show cards on mobile, conditional on desktop */}
                    <div className="block md:hidden w-full">
                        {renderMobileCards()}
                    </div>
                    <div className="hidden md:block">
                        {viewMode === 'desktop' ? renderDesktopTable() : renderMobileCards()}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}