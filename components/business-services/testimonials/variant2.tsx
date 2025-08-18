import React from 'react';
import { motion } from 'framer-motion';
import { Star, StarHalf, Quote } from 'lucide-react';

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

const TestimonialsGrid = () => {
  // Create enough duplicates to ensure continuous scrolling
  const createScrollingTestimonials = () => {
    return [...testimonials, ...testimonials, ...testimonials];
  };

  const scrollingTestimonials = createScrollingTestimonials();

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
      ) : (
        part
      )
    );
  };

  return (
    <section className="py-16 px-4 sm:px-6 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500">Amazing Clients</span> Say About Us
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover how we've helped businesses transform and achieve remarkable success
          </p>
        </motion.div>

        {/* Top Row (scrolls left) */}
        <div className="relative w-full overflow-hidden py-2 mb-4">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{
              x: ['0%', '-100%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {scrollingTestimonials.map((testimonial, index) => (
              <motion.div
                key={`top-${testimonial.id}-${index}`}
                className="flex-shrink-0 w-72 sm:w-80 group cursor-pointer px-1"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.stars)}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{highlightText(testimonial.message, testimonial.highlight)}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.designation}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-2xl pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom Row (scrolls right) */}
        <div className="relative w-full overflow-hidden py-2">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-black dark:via-black/80 z-10 pointer-events-none" />
          
          <motion.div
            className="flex gap-4 md:gap-6 w-max"
            animate={{
              x: ['-100%', '0%'],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: 'loop',
                duration: 40,
                ease: 'linear',
              },
            }}
          >
            {[...scrollingTestimonials].reverse().map((testimonial, index) => (
              <motion.div
                key={`bottom-${testimonial.id}-${index}`}
                className="flex-shrink-0 w-72 sm:w-80 group cursor-pointer px-1"
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="relative bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 h-full shadow-lg hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ 
                      rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                      scale: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                    }}
                    className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Quote className="w-6 h-6 text-white" />
                  </motion.div>

                  <div className="flex gap-1 mb-4">
                    {renderStars(testimonial.stars)}
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                    "{highlightText(testimonial.message, testimonial.highlight)}"
                  </p>

                  <div className="flex items-center gap-4 mt-auto">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {testimonial.designation}
                        {testimonial.company && ` at ${testimonial.company}`}
                      </p>
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 0.05 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-2xl pointer-events-none"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;