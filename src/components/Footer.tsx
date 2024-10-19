import Link from 'next/link'
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const navigation = {
  solutions: [
    { name: 'Manufacturing', href: '/solutions/manufacturing' },
    { name: 'Energy', href: '/solutions/energy' },
    { name: 'Transportation', href: '/solutions/transportation' },
    { name: 'Smart Cities', href: '/solutions/smart-cities' },
  ],
  support: [
    { name: 'Documentation', href: '/support/documentation' },
    { name: 'Guides', href: '/support/guides' },
    { name: 'API Status', href: '/support/api-status' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Jobs', href: '/jobs' },
    { name: 'Press', href: '/press' },
    { name: 'Partners', href: '/partners' },
  ],
  legal: [
    { name: 'Privacy', href: '/privacy' },
    { name: 'Terms', href: '/terms' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/yourcompany',
      icon: Facebook,
    },
    {
      name: 'Twitter',
      href: 'https://www.twitter.com/yourcompany',
      icon: Twitter,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/yourcompany',
      icon: Linkedin,
    },
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/yourcompany',
      icon: Instagram,
    },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-gray-300" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <img
              className="h-7"
              src="https://i.imgur.com/YxQjZDI.png"
              alt="Cyberian Electronics"
            />
            <p className="text-sm leading-6">
              Empowering industries with advanced electronics and automation solutions.
            </p>
            <div className="flex space-x-6">
              {navigation.social.map((item) => (
                <a key={item.name} href={item.href} className="hover:text-white">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-16 xl:col-span-2 xl:mt-0">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Solutions</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.solutions.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6">Support</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.support.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6">Legal</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link href={item.href} className="hover:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8">
          <p className="text-xs leading-5">
            &copy; 2023 Cyberian Electronics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
