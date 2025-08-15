// src/components/business-services/process/variant1.tsx
import React from 'react';

interface ProcessProps {
  title: string;
  subtitle: string;
  description: string;
  className?: string;
  steps: Array<{
    id: number;
    title: string;
    description: string;
  }>;
}

export default function ProcessVariant1(props: ProcessProps) {
  return (
    <section className={`py-20 bg-white ${props.className || ''}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-blue-600 font-semibold mb-4">{props.subtitle}</p>
          <h2 className="text-4xl font-bold mb-6">{props.title}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{props.description}</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {props.steps.map((step, idx) => (
            <div key={step.id} className="relative">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {step.id}
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
