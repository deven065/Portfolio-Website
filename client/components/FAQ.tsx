import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card } from '@/components/ui/card';
import { HelpCircle } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    question: "What ROI can I realistically expect from my website investment?",
    answer: "Our clients typically achieve 5-15x ROI within the first year. For example, a ₹2L investment often generates ₹10-30L in additional revenue. The exact ROI depends on your industry, current revenue, and how well you leverage the platform for marketing and sales. E-commerce clients see the highest returns (8-15x), while service-based businesses average 5-8x ROI.",
  },
  {
    question: "How long until I break even on my investment?",
    answer: "Most clients break even within 2-4 months. The timeline depends on your current customer acquisition rate and average transaction value. We've had e-commerce clients break even in as little as 6 weeks, while enterprise B2B clients typically see break-even at 4-6 months due to longer sales cycles. Our ROI calculator can give you a personalized estimate.",
  },
  {
    question: "What happens if the website doesn't generate the expected results?",
    answer: "We focus on measurable outcomes from day one. During development, we implement analytics tracking, conversion optimization, and A/B testing capabilities. Post-launch, we provide 3 months of optimization support to ensure you're hitting performance targets. We also train your team on best practices for content, SEO, and conversion rate optimization to maximize results.",
  },
  {
    question: "How is this different from using a template or DIY website builder?",
    answer: "Template solutions limit you to generic designs and basic features that your competitors also use. Our custom websites are built specifically for your business goals, optimized for your target audience, and designed to convert at 40-60% higher rates than DIY solutions. You also get advanced features like custom integrations, automation, and scalability that templates simply can't provide. The ROI difference alone pays for the investment multiple times over.",
  },
  {
    question: "What's included in the project cost?",
    answer: "Everything you need for a successful launch: custom design, full development, mobile optimization, security setup, SEO foundation, analytics integration, content management system, 3 months of optimization support, training for your team, and ongoing technical support. No hidden fees. You'll know the exact investment upfront.",
  },
  {
    question: "How long does it take to build and launch?",
    answer: "Simple websites launch in 3-4 weeks, while complex e-commerce or enterprise platforms take 6-10 weeks. We work in sprints with weekly check-ins, so you'll see progress continuously. Faster timelines mean you start generating ROI sooner. We can also phase the launch - getting a basic version live quickly, then adding advanced features iteratively.",
  },
  {
    question: "Do you handle ongoing maintenance and updates?",
    answer: "Yes! After launch, we offer monthly maintenance plans starting at ₹8,000/month covering security updates, bug fixes, performance monitoring, content updates, and technical support. Many clients choose this option to ensure their website stays optimized and secure. We also offer on-demand support if you prefer to handle routine updates internally.",
  },
  {
    question: "Can you help with digital marketing after the website launches?",
    answer: "Absolutely. While we focus on building high-converting websites, we partner with specialized marketing agencies for SEO, paid ads, and content marketing. We can recommend trusted partners or work with your existing marketing team. The website we build will be optimized for marketing campaigns from day one - fast loading, mobile-friendly, conversion-optimized, and SEO-ready.",
  },
  {
    question: "What if my business needs change or I want to add features later?",
    answer: "We build scalable solutions that grow with your business. Need to add e-commerce later? Want to integrate a new CRM? No problem. We use modern, modular architecture that makes additions straightforward. Most feature additions take 1-3 weeks depending on complexity. We provide free estimates for any additional work you're considering.",
  },
  {
    question: "How do you ensure the website will actually drive business results?",
    answer: "We start every project with a business goals workshop to understand your revenue targets, customer journey, and key conversion points. Then we design around those goals - optimizing layouts for conversions, implementing trust signals, streamlining checkout/contact flows, and building in analytics to track performance. Post-launch, we review metrics with you monthly and recommend optimizations based on real user data.",
  },
];

export function FAQ() {
  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full mb-6 border border-blue-500/20">
            <HelpCircle className="h-5 w-5" />
            <span className="font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-slate-300">
            Everything you need to know about working with us and the ROI you can expect
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="bg-slate-800/50 border-slate-700/50 p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-slate-700/50">
                <AccordionTrigger className="text-left text-white hover:text-blue-400 transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-slate-300 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-slate-300 text-lg mb-6">
            Still have questions? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg hover:shadow-xl"
          >
            Schedule a Free Consultation
          </a>
        </div>
      </div>
    </div>
  );
}
