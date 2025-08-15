// src/components/business-services/why-choose-us/variant1.tsx
import React from 'react';

interface WhyChooseUsProps {
  title: string | Array<{ text: string; gradient?: boolean; gradientClass?: string }>;
  trustPoints: Array<{
    icon: React.ReactNode;
    title: string;
    description: string;
  }>;
  cta: {
    text: string;
    link: string;
    icon: React.ReactNode;
  };
}

export default function WhyChooseUsVariant1(props: WhyChooseUsProps) {
  const titleText = typeof props.title === 'string' 
    ? props.title 
    : props.title.map(part => part.text).join('');

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16">
          {titleText}
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {props.trustPoints.map((point, idx) => (
            <div key={idx} className="bg-white p-6 rounded-lg shadow-md">
              <div className="mb-4">{point.icon}</div>
              <h3 className="text-xl font-bold mb-3">{point.title}</h3>
              <p className="text-gray-600">{point.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a 
            href={props.cta.link}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            {props.cta.icon && <span className="mr-2">{props.cta.icon}</span>}
            {props.cta.text}
          </a>
        </div>
      </div>
    </section>
  );
}
