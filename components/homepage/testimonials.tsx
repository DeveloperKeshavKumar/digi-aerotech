"use client";

import React, { useState, useEffect } from "react";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";

interface Testimonial {
  id: string;
  image?: string;
  message: string;
  highlight?: string;
  stars: number;
  name: string;
  designation: string;
  company?: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  title?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  description?: string;
  speed?: "slow" | "medium" | "fast";
  columns?: number;
  highlightColor?: string;
}

export const Testimonials = ({
  testimonials = [],
  title = "What Our Clients Say",
  description = "Hear from businesses we've worked with",
  speed = "medium",
  columns = 3,
  highlightColor = "text-blue-600 dark:text-blue-400 font-medium",
}: TestimonialsProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const speedClasses = {
    slow: "40s",
    medium: "30s",
    fast: "20s",
  };

  const getColumnTestimonials = (colIndex: number) => {
    const startPos = Math.floor(testimonials.length * (colIndex / columns));
    return [...testimonials.slice(startPos), ...testimonials.slice(0, startPos), ...testimonials];
  };

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
        <span key={i} className={highlightColor}>{part}</span>
      ) : (
        part
      )
    );
  };

  // Helper to render title with gradient
  const renderTitle = () => {
    if (typeof title === 'string') {
      return title;
    }
    return title.map((part, idx) =>
      part.gradient ? (
        <span
          key={idx}
          className={`bg-clip-text text-transparent bg-gradient-to-r ${part.gradientClass || "from-green-400 via-blue-500 to-purple-500"}`}
        >
          {part.text}
        </span>
      ) : (
        <span key={idx}>{part.text}</span>
      )
    );
  };

  return (
    <section className="py-16 px-4 bg-gray-50 dark:bg-gray-950 overflow-hidden border-b border-border dark:border-gray-700">
      <div className="container mx-auto">
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4 leading-tight">
            {renderTitle()}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${columns} gap-6 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {Array.from({ length: columns }).map((_, colIndex) => {
            const columnTestimonials = getColumnTestimonials(colIndex);
            return (
              <div
                key={colIndex}
                className={`overflow-hidden h-[600px] relative ${colIndex === 0 ? '' :
                  colIndex === 1 ? 'hidden md:block' :
                    'hidden lg:block'
                  }`}
              >
                <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-gray-100 dark:from-gray-950 to-transparent z-10 "></div>
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-50 dark:from-gray-950 to-transparent z-10"></div>

                <div
                  className="animate-scroll-up"
                  style={{
                    animationDuration: speedClasses[speed],
                    animationDelay: `${colIndex * 2000}ms`
                  }}
                >
                  {columnTestimonials.map((testimonial, index) => (
                    <div
                      key={`${colIndex}-${index}`}
                      className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 hover:shadow-md transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row items-start gap-4 mb-4">
                        {testimonial.image ? (
                          <div className="relative w-12 h-12 flex-shrink-0">
                            <Image
                              src={testimonial.image}
                              alt={testimonial.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0">
                            <span className="text-lg font-medium text-gray-700 dark:text-gray-300">
                              {testimonial.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}

                        <div className="flex-1">
                          <div className="flex flex-row justify-between sm:items-center sm:justify-between gap-2">
                            <div>
                              <h4 className="font-medium text-gray-900 dark:text-white">
                                {testimonial.name}
                              </h4>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {testimonial.designation}{testimonial.company && `, ${testimonial.company}`}
                              </p>
                            </div>
                            <div className="flex gap-1">
                              {renderStars(testimonial.stars)}
                            </div>
                          </div>
                          <p className="text-gray-600 dark:text-gray-300 italic mt-3">
                            &quot;{highlightText(testimonial.message, testimonial.highlight)}&quot;
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};