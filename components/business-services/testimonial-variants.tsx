// components/variants/testimonial-variants.tsx
import React, { useState } from 'react';
import { TemplateVariantsService } from '@/services/template-variants.service';
import { ContentGenerationService } from '@/services/content-generation.service';
import { getBusinessTypeBySlug } from '@/services/business-type-registry';

interface TestimonialVariantsProps {
  business: string;
  service: string;  
}

export const TestimonialVariants: React.FC<TestimonialVariantsProps> = ({ business, service }) => {
  const businessData = getBusinessTypeBySlug(business);
  const variants = TemplateVariantsService.generateVariantAssignment(service, business);
  const selectedVariant = variants.testimonial;
  const variantConfig = TemplateVariantsService.getVariantConfig('testimonial', selectedVariant);

  if (!businessData || !variantConfig) {
    return null;
  }

  const testimonialContent = ContentGenerationService.generateTestimonialContent(businessData);

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: `${businessData.name} Manager`,
      company: "TechCorp Solutions",
      rating: 5,
      text: `Working with this team transformed our ${businessData.name.toLowerCase()} operations. We saw a 300% increase in leads within just 3 months. Their expertise in our industry is unmatched.`,
      image: "👩‍💼"
    },
    {
      name: "Michael Chen",
      position: "CEO",
      company: `${businessData.name} Innovations`,
      rating: 5,
      text: `The results speak for themselves. Our ${businessData.benefits[0]?.toLowerCase() || 'growth'} exceeded all expectations. They truly understand the ${businessData.name.toLowerCase()} market.`,
      image: "👨‍💼"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director",
      company: "Growth Dynamics",
      rating: 5,
      text: `Finally found a partner who gets our industry. The ROI has been incredible, and their ongoing support keeps us ahead of the competition.`,
      image: "👩‍🚀"
    },
    {
      name: "David Park",
      position: `${businessData.name} Specialist`,
      company: "Market Leaders Inc",
      rating: 5,
      text: `Professional, knowledgeable, and results-driven. They helped us overcome our biggest challenge: ${businessData.painPoints[0]?.toLowerCase() || 'growth obstacles'}.`,
      image: "👨‍🔬"
    }
  ];

  const renderTestimonial1 = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
      <section className="bg-gray-50 dark:bg-gray-950 py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {testimonialContent.title.map((part, index) => 
                part.gradient ? (
                  <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                    {part.text}
                  </span>
                ) : (
                  <span key={index} className="text-black dark:text-white">{part.text}</span>
                )
              )}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              {testimonialContent.description}
            </p>
          </div>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-gray-800 shadow-lg">
              <div className="text-center">
                <div className="text-6xl mb-6">{testimonials[currentIndex].image}</div>
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-2xl text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                  "{testimonials[currentIndex].text}"
                </p>
                <div>
                  <div className="font-bold text-lg text-black dark:text-white">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400">
                    {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    currentIndex === index 
                      ? 'bg-gradient-to-r from-orange-500 via-pink-500 to-red-500' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  const renderTestimonial2 = () => (
    <section className="bg-white dark:bg-black py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {testimonialContent.title.map((part, index) => 
              part.gradient ? (
                <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={index} className="text-black dark:text-white">{part.text}</span>
              )
            )}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            {testimonialContent.description}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-950 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
              <div className="flex justify-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-xl text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-8 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-black dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.position}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTestimonial3 = () => (
    <section className="bg-black dark:bg-white text-white dark:text-black py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          {testimonialContent.title.map((part, index) => 
            part.gradient ? (
              <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                {part.text}
              </span>
            ) : (
              <span key={index}>{part.text}</span>
            )
          )}
        </h2>
        <p className="text-lg opacity-80 mb-16 max-w-3xl mx-auto">
          {testimonialContent.description}
        </p>
        
        <div className="mb-12">
          <div className="text-8xl mb-8">💬</div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed mb-8">
            "{testimonials[0].text}"
          </p>
          <div className="text-xl font-semibold">
            {testimonials[0].name}
          </div>
          <div className="opacity-70">
            {testimonials[0].position}, {testimonials[0].company}
          </div>
        </div>
        
        <div className="flex justify-center">
          {[...Array(testimonials[0].rating)].map((_, i) => (
            <span key={i} className="text-3xl text-yellow-400">★</span>
          ))}
        </div>
      </div>
    </section>
  );

  const renderTestimonial4 = () => (
    <section className="bg-gradient-to-r from-gray-900 to-black text-white py-20 lg:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {testimonialContent.title.map((part, index) => 
              part.gradient ? (
                <span key={index} className="bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
                  {part.text}
                </span>
              ) : (
                <span key={index}>{part.text}</span>
              )
            )}
          </h2>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            {testimonialContent.description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.slice(0, 2).map((testimonial, index) => (
            <div key={index} className="relative">
              {/* Video thumbnail placeholder */}
              <div className="relative bg-gray-800 rounded-2xl overflow-hidden aspect-video mb-6">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-2xl">▶</span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-black bg-opacity-75 rounded-lg p-3">
                    <div className="text-sm opacity-80 mb-1">Video Testimonial</div>
                    <div className="font-semibold">{testimonial.name}</div>
                  </div>
                </div>
              </div>
              
              {/* Transcript overlay */}
              <div className="bg-gray-800 rounded-2xl p-6">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-lg text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-4 leading-relaxed">
                  "{testimonial.text}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 rounded-full flex items-center justify-center text-lg mr-3">
                    {testimonial.image}
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.position}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const variantRenderers = {
    testimonial1: renderTestimonial1,
    testimonial2: renderTestimonial2,
    testimonial3: renderTestimonial3,
    testimonial4: renderTestimonial4
  };

  const SelectedVariant = variantRenderers[selectedVariant as keyof typeof variantRenderers];
  return SelectedVariant ? <SelectedVariant /> : renderTestimonial1();
};