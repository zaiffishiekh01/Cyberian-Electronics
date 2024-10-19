'use client'; // This line is added to mark the component as a Client Component

import Hero from '@/components/Hero';
import { CheckCircle, Zap, Cog, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    name: 'Advanced PLCs',
    description: 'State-of-the-art Programmable Logic Controllers for precise automation control.',
    icon: Zap,
  },
  {
    name: 'Custom Solutions',
    description: 'Tailored automation solutions designed to meet your specific industry needs.',
    icon: Cog,
  },
  {
    name: 'Expert Support',
    description: '24/7 technical support from our team of experienced engineers.',
    icon: Users,
  },
  {
    name: 'Quality Assurance',
    description: 'Rigorous testing and quality control for reliable, long-lasting products.',
    icon: CheckCircle,
  },
];

const testimonials = [
  {
    content: "Cyberian Electronics' PLC solutions have significantly improved our manufacturing efficiency. Their support team is always ready to help.",
    author: "Ahmed Khan",
    role: "Production Manager at PakTech Industries"
  },
  {
    content: "The customized SCADA system from Cyberian Electronics has given us unprecedented control and visibility over our operations. Highly recommended!",
    author: "Fatima Zaidi",
    role: "CEO of Karachi Automation Systems"
  },
  {
    content: "We've seen a 30% increase in productivity since implementing Cyberian Electronics' automation solutions. Their expertise is unmatched.",
    author: "Rahul Sharma",
    role: "Operations Director at IndoTech Manufacturing"
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="bg-white">
      <Hero />
      
      {/* Features section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-blue-600">Advanced Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Revolutionizing Industrial Automation
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Cyberian Electronics offers cutting-edge solutions to streamline your industrial processes, increase efficiency, and drive innovation in your business.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon className="h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      
      {/* Testimonials section */}
      <section className="bg-blue-100 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Industry Leaders</h2>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={currentIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="relative isolate pt-6 sm:pt-12"
                >
                  <blockquote className="text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                    <p>{testimonials[currentIndex].content}</p>
                  </blockquote>
                  <figcaption className="mt-8 text-base">
                    <div className="font-semibold text-blue-600">{testimonials[currentIndex].author}</div>
                    <div className="mt-1 text-gray-500">{testimonials[currentIndex].role}</div>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <button onClick={prev} className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition-colors duration-200">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={next} className="rounded-full bg-blue-600 p-2 text-white hover:bg-blue-700 transition-colors duration-200">
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
