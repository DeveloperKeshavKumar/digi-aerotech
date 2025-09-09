"use client";

import React, { useState, useEffect } from "react";
import { Star, StarHalf } from "lucide-react";
import Image from "next/image";
import { image } from "motion/react-client";

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
  testimonials?: Testimonial[];
  title?: string | { text: string; gradient?: boolean; gradientClass?: string }[];
  description?: string;
  speed?: "slow" | "medium" | "fast";
  columns?: number;
  highlightColor?: string;
}

const realTestimonials = [
  {
    id: "1",
    message: "I would like to share my experience working with Mr. Deepak. He has been a great support in helping me grow my business. He handled everything from designing my website to managing my social media and overall digital marketing.Thanks to Mr. Deepak, my business is running successfully now—much better than before I met him. I truly appreciate his efforts and the best work he has done for my business.",
    stars: 5,
    name: "Arun",
    designation: "Marketing Director",
    company: "SDS Tourism",
    image: "arun-sds-tourism.jpg"
  },
  {
    id: "2",
    message: "I have been working on couple of projects with Digi Aerotech and the experience has been amazing. Their immense talent in building websites to marketing is truly outstanding. I would definitely recommend them for one stop solution for all your website and marketing needs.",
    highlight: "I have been working on couple of projects with Digi Aerotech and the experience has been amazing",
    stars: 4.5,
    name: "Sharath Tc",
    designation: "CTO",
    image: 'sharath.jpg'
  },
  {
    id: "3",
    message: "I have been associated with him for 4-5 months and I am getting my company's work done through him and I am very happy with his work. I don't have even 1% complaint with his work... The best part is that if you want to make any changes or additions or want to suggest something, let me know. The reply comes within 5 minutes. I liked this the most about him... and his team also keeps their work good...",
    stars: 5,
    name: "Abhishek Singh",
    designation: "Manager",
    image: 'abhishekh.jpg'
  },
  {
    id: "4",
    message: "We're thrilled to announce our partnership with Digi Aerotech for all our digital marketing solutions. After working closely with their team, we truly believe they are one of the best agencies out there for growing startups looking to:✅ Boost online leads✅ Increase conversion rates✅ Establish a strong digital presence.If you're a startup aiming to scale digitally, Digi Aerotech is the team you want by your side!",
    stars: 5,
    name: "Aman Kumar",
    designation: "Director",
    image: 'aman.png'
  },
  {
    id: "5",
    message: "Mr. Deepak is professional and the best thing is he first understand the requirement of customer then he does best and authentic accordingly to his knowledge.",
    stars: 4.5,
    name: "Aman Sharma",
    designation: "Director",
    image: 'aman-sharma.jpg'
  },
  {
    id: "6",
    message: "The best digital market agency one can trust.Very Effective Team & Absolutely amazing work🧿",
    stars: 4.5,
    name: "Priyanshi Lohia",
    designation: "Director",
    company: "Delta Co",
    image: 'priyanshi.png'
  },
  {
    id: "7",
    message: "I am connected with Deepak and he and his team are very good at their work. They are flexible and will support you as per your requirement. Highly recommend",
    stars: 4.5,
    name: "Priyanka Joshi",
    designation: "Director",
    image: 'priyanka-joshi.jpg'
  },
  {
    id: "8",
    message: "The most important thing what a client looks for is mutual understanding with service provider and Digi Aerotech exactly showed their true customer service by working hand in hand patience.I will highly recommend their services for website development",
    stars: 4.5,
    name: "Gaurav Negi",
    designation: "Director",
  },
  {
    id: "9",
    message: "Good services and approach to cover the market, we are using their services from last 1 year and the result is very impressive from our all social handles & SEO level.",
    stars: 4.5,
    name: "Sahil Chopra",
    designation: "Owner",
    image: 'sahil.png'
  },
  {
    id: "10",
    message: "I have a such amazing service giving by Deepak goyal so I will inform my other friends to make there self brand items catalogue.",
    stars: 5,
    name: "Yuvi Bajaj",
    designation: "Director",
    image: 'yuvi.png'
  },
  {
    id: "11",
    message: "Good service , they maintain good TAT.",
    stars: 5,
    name: "Mukaram",
    designation: "Owner",
    image: 'mukaram.jpg'
  },
  {
    id: "11",
    message: "They are the best people for startup's 👍",
    stars: 5,
    name: "Ankit Sehra",
    designation: "Director",
    image: 'ankit.png'
  },
]

export const Testimonials = ({
  testimonials = [],
  title = "What Our Clients Say",
  description = "Hear from businesses we've worked with",
  speed = "medium",
  columns = 3,
  highlightColor = "text-pink-600 dark:text-pink-400 font-medium",
}: TestimonialsProps) => {
  const [isVisible, setIsVisible] = useState(false);
  testimonials = realTestimonials;

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const speedClasses = {
    slow: "40s",
    medium: "30s",
    fast: "20s",
  };

  const columnTestimonials = React.useMemo(() => {
    const shuffled = [...testimonials].sort(() => Math.random() - 0.5);
    const result: any[][] = Array(columns).fill(null).map(() => []);

    // Distribute items evenly across columns
    shuffled.forEach((testimonial, index) => {
      const targetColumn = index % columns;
      result[targetColumn].push(testimonial);
    });

    return result;
  }, [testimonials, columns]);

  const getColumnTestimonials = (colIndex: number) => {
    const items = columnTestimonials[colIndex];

    // Handle case where a column might be empty
    if (items.length === 0) {
      return [];
    }

    return [...items, ...items, ...items, ...items, ...items];
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
                              src={`/testimonials/${testimonial.image}`}
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