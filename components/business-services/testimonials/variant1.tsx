// src/components/business-services/testimonials/variant1.tsx
import React from 'react';

interface TestimonialsProps {
  title: string | Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  description: string;
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

export default function TestimonialsVariant1(props: TestimonialsProps) {
  const titleText = typeof props.title === 'string' 
    ? props.title 
    : props.title.map(part => part.text).join('');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6">{titleText}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{props.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className={`text-2xl ${i < testimonial.stars ? 'text-yellow-400' : 'text-gray-300'}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.message}</p>
              <div className="flex items-center">
                {testimonial.image && (
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                )}
                <div>
                  <div className="font-bold">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">
                    {testimonial.designation}
                    {testimonial.company && ` at ${testimonial.company}`}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
