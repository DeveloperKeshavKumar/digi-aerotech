import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";
import { IconStarFilled, IconStar, IconStarHalfFilled, IconStarHalf } from '@tabler/icons-react';

// Updated testimonial data with separate highlight property
const dummyTestimonials = [
  {
    id: "1",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    message: "This product completely transformed my workflow. The ease of use and powerful features saved me hours of work every week. I can't imagine going back to my old methods.",
    highlight: "powerful features",
    stars: 5,
    name: "Sarah Johnson",
    designation: "Marketing Director",
    company: "Acme Corp"
  },
  {
    id: "2",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    message: "Excellent customer support and the product keeps getting better with each update. We've seen a 30% increase in productivity since implementing this solution.",
    highlight: "30% increase in productivity",
    stars: 4.5,
    name: "Michael Chen",
    designation: "CTO",
    company: "TechStart"
  },
  {
    id: "3",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    message: "As a small business owner, this was exactly what I needed. Simple yet powerful, with pricing that makes sense for growing companies. Highly recommended!",
    highlight: "exactly what I needed",
    stars: 5,
    name: "Emma Rodriguez",
    designation: "Founder",
    company: "Bloom & Grow"
  },
  {
    id: "4",
    message: "The onboarding process was seamless and we were up and running in no time. Our team adopted it quickly and we're already seeing great results.",
    highlight: "seamless",
    stars: 4,
    name: "David Kim",
    designation: "Operations Manager",
    company: "Global Solutions"
  }
];

interface TestimonialsProps {
  title?: string | Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  description?: string;
  highlightColor?: string;
  testimonials?: Array<{
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

// Helper function to highlight text (similar to your reference)
function highlightText(message: string, highlight?: string, highlightColor = "text-orange-500 dark:text-pink-400 font-medium") {
  if (!highlight) return message;
  
  const parts = message.split(new RegExp(`(${highlight})`, "gi"));
  return parts.map((part, i) =>
    part.toLowerCase() === highlight.toLowerCase() ? (
      <span key={i} className={highlightColor}>{part}</span>
    ) : (
      part
    )
  );
}

// Star rendering using tabler icons
function renderStars(rating: number) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  for (let i = 0; i < fullStars; i++) {
    stars.push(<IconStarFilled key={`full-${i}`} size={20} className="text-yellow-400" />);
  }

  if (hasHalfStar) {
    stars.push(<IconStarHalf key="half" size={20} className="text-yellow-400 fill-yellow-400"/>);
  }

  const remainingStars = 5 - stars.length;
  for (let i = 0; i < remainingStars; i++) {
    stars.push(<IconStar key={`empty-${i}`} size={20} className="text-gray-300 dark:text-gray-600" />);
  }

  return stars;
}

export default function TestimonialsNavigation({
  title = "Customer Testimonials",
  description = "Hear what our customers say about their experience",
  highlightColor = "text-orange-500 dark:text-pink-400 font-medium",
//   testimonials = dummyTestimonials
}: TestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  
    const testimonials = dummyTestimonials; // Use the dummy data for now
  const prevItem = () => setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  const nextItem = () => setActiveIndex((prev) => (prev + 1) % testimonials.length);
  
  const testimonial = testimonials[activeIndex];

  // Helper to render title with gradient support
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-pink-500 to-red-500`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-950">
      <div className="container mx-auto max-w-2xl px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2 dark:text-white">
            {renderTitle()}
          </h2>
          <p className="text-gray-600 dark:text-gray-300">{description}</p>
        </div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.article
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-700 p-6"
            >
              <div className="flex items-start gap-4 mb-6">
                {testimonial.image ? (
                  <div className="w-12 h-12 rounded-xl overflow-hidden">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-pink-500 flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.designation} {testimonial.company && `at ${testimonial.company}`}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-xl">
                  <div className="flex gap-1 mb-3">
                    {renderStars(testimonial.stars)}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 italic">
                    "{highlightText(testimonial.message, testimonial.highlight, highlightColor)}"
                  </p>
                </div>

                <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg flex items-start gap-2">
                  <Check className="w-5 h-5 text-orange-500 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-sm text-orange-700 dark:text-orange-300">
                    Verified customer review • {testimonial.stars.toFixed(1)} rating
                  </p>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-6">
            <button
              onClick={prevItem}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex
                      ? 'w-8 bg-gradient-to-r from-orange-500 to-pink-500'
                      : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextItem}
              className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
