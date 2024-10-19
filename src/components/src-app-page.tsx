'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CheckCircle, Zap, Cog, Users, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

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
]

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
]

const products = [
  {
    name: 'Advanced PLC X1000',
    description: 'Next-generation programmable logic controller for industrial automation.',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGxjfGVufDB8fDB8fHww',
  },
  {
    name: 'SmartHMI Pro',
    description: 'Intuitive human-machine interface with multi-touch capabilities.',
    image: 'https://images.unsplash.com/photo-1581092160562-2158d3a31a0a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGxjfGVufDB8fDB8fHww',
  },
  {
    name: 'InverterMax 5000',
    description: 'High-efficiency inverter for precise motor control and energy savings.',
    image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxjfGVufDB8fDB8fHww',
  },
]

export function Page() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-blue-100 to-white pt-14">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:col-span-2 xl:col-auto">
              Empowering Industries with Advanced Electronics
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-gray-600">
                Cyberian Electronics provides cutting-edge industrial automation solutions and electronic products. We specialize in PLCs, HMIs, inverters, and customized solutions for various industries.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button asChild>
                  <Link href="/products">
                    Explore Our Products
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    Contact Us
                  </Link>
                </Button>
              </div>
            </div>
            <div className="mt-10 w-full max-w-lg lg:mt-0 xl:col-span-2 xl:row-span-2">
              <Carousel className="w-full max-w-lg">
                <CarouselContent>
                  {products.map((product, index) => (
                    <CarouselItem key={index}>
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <Image
                            src={product.image}
                            alt={product.name}
                            width={400}
                            height={400}
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </CardContent>
                        <CardFooter className="flex flex-col items-start">
                          <h3 className="text-lg font-semibold">{product.name}</h3>
                          <p className="text-sm text-muted-foreground">{product.description}</p>
                        </CardFooter>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-white sm:h-32" />
      </section>

      {/* Features section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
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
              <Card key={feature.name}>
                <CardHeader>
                  <feature.icon className="h-6 w-6 text-blue-600" />
                  <CardTitle>{feature.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </dl>
        </div>
      </section>
      
      {/* Testimonials section */}
      <section className="bg-blue-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Trusted by Industry Leaders</h2>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
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
            </div>
            <div className="mt-10 flex justify-center space-x-4">
              <Button onClick={prev} size="icon" variant="outline">
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button onClick={next} size="icon" variant="outline">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Boost your productivity.
                <br />
                Start using our solutions today.
              </h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                Experience the power of advanced industrial automation. Let us help you optimize your processes and drive growth.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <Button asChild>
                  <Link href="/contact">Get started</Link>
                </Button>
                <Button variant="link" asChild>
                  <Link href="/about" className="text-white">
                    Learn more <span aria-hidden="true">→</span>
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image
                className="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsY3xlbnwwfHwwfHx8MA%3D%3D"
                alt="App screenshot"
                width={1824}
                height={1080}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}