import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, StarHalf, Quote, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    id: "1",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    message: "Working with this team has been absolutely transformative for our business. The results exceeded all expectations.",
    highlight: "transformative",
    stars: 5,
    name: "Alex Chen",
    designation: "CEO",
    company: "TechVision Inc"
  },
  {
    id: "2",
    image: "https://images.unsplash.com/photo-1494790108755-2616b332c5d7?w=150&h=150&fit=crop&crop=face",
    message: "The level of professionalism and creativity shown was outstanding. Highly recommend their services.",
    highlight: "outstanding",
    stars: 4.5,
    name: "Sarah Johnson",
    designation: "Marketing Director",
    company: "Creative Solutions"
  },
  {
    id: "3",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    message: "Incredible attention to detail and customer service. They truly care about their clients' success.",
    highlight: "Incredible",
    stars: 5,
    name: "Michael Davis",
    designation: "Founder",
    company: "StartupLab"
  },
  {
    id: "4",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    message: "Revolutionary approach to problem-solving. Our conversion rates improved by 300% within months.",
    highlight: "Revolutionary",
    stars: 5,
    name: "Emma Rodriguez",
    designation: "Growth Manager",
    company: "ScaleUp Co"
  },
  {
    id: "5",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    message: "Best investment we've made in years. The team's expertise and dedication is unmatched.",
    highlight: "unmatched",
    stars: 4.5,
    name: "David Park",
    designation: "Operations Director",
    company: "Enterprise Corp"
  },
  {
    id: "6",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    message: "Seamless collaboration and exceptional results. They understood our vision perfectly.",
    highlight: "exceptional",
    stars: 5,
    name: "Lisa Thompson",
    designation: "Product Manager",
    company: "Innovation Hub"
  }
];

interface TestimonialsProps {
  title?: string | Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  description?: string;
  testimonials: Array<{
    id: string;
    image?: string;
    message: string;
    highlight?: string;
    stars: number;
    name: string;
    designation: string;
    company?: string;
  }>;
}

const TestimonialsCarousel: React.FC<TestimonialsProps> = ({ 
  title = [
    { text: "What Our ", gradient: false },
    { text: "Amazing Clients", gradient: true, gradientClass: "from-orange-500 via-pink-500 to-red-500" },
    { text: " Say About Us", gradient: false }
  ],
  description = "Discover how we've helped businesses transform and achieve remarkable success",
  testimonials: testimonialsData = testimonials
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsData.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isAutoPlay, testimonialsData.length]);

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    const remainingStars = 5 - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300 dark:text-gray-600" />);
    }
    return stars;
  };

  const highlightText = (text: string, highlight?: string) => {
    if (!highlight) return text;
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return parts.map((part, i) =>
      part.toLowerCase() === highlight.toLowerCase() ? (
        <span key={i} className="text-pink-600 dark:text-pink-400 font-semibold">{part}</span>
      ) : part
    );
  };

  const renderTitle = () => {
    if (typeof title === 'string') return title;
    return title.map((part, idx) =>
      part.gradient ? (
        <span key={idx} className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass}`}>
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {renderTitle()}
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            {description}
          </p>
        </motion.div>

        <div className="relative">
          {/* Infinite Carousel */}
          <div className="relative h-96 overflow-hidden">
            <motion.div
              className="flex"
              animate={{
                x: `${-activeIndex * 100}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {[...testimonialsData, ...testimonialsData].map((testimonial, index) => (
                <div key={`${testimonial.id}-${index}`} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-700 p-8 h-full shadow-2xl mx-auto max-w-4xl">
                    <div className="flex flex-col md:flex-row items-center gap-8 h-full">
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-gradient-to-r from-orange-500 via-pink-500 to-red-500"
                          />
                          <motion.div 
                            animate={{ rotate: [0, 360] }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center"
                          >
                            <Quote className="w-6 h-6 text-white" />
                          </motion.div>
                        </div>
                      </div>
                      
                      <div className="flex-1 text-center md:text-left">
                        <div className="flex justify-center md:justify-start gap-1 mb-4">
                          {renderStars(testimonial.stars)}
                        </div>
                        <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                          "{highlightText(testimonial.message, testimonial.highlight)}"
                        </p>
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {testimonial.name}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-400">
                            {testimonial.designation}
                            {testimonial.company && ` at ${testimonial.company}`}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex gap-2">
              {testimonialsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === activeIndex
                      ? 'w-8 h-3 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500'
                      : 'w-3 h-3 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setIsAutoPlay(!isAutoPlay)}
              className="p-3 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 text-white hover:shadow-lg transition-all ml-4"
            >
              {isAutoPlay ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
            </button>
          </div>

          {/* Infinite Movement Indicators */}
          <div className="flex justify-center mt-6">
            <motion.div 
              className="flex gap-1"
              animate={{ x: [-10, 10, -10] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full opacity-60"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full opacity-80"></div>
              <div className="w-2 h-2 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;