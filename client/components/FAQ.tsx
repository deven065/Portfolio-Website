import React from 'react';
import { Link } from 'react-router-dom';
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
    question: "Do you build both websites and applications?",
    answer: "Yes. Website engagements include business sites, portfolios, e-commerce, and content platforms. Application engagements include web apps, SaaS products, customer portals, internal tools, CRMs, and focused mobile or iOS products.",
  },
  {
    question: "How long does a project take?",
    answer: "Timelines depend on scope, content readiness, integrations, feedback speed, and testing requirements. Your proposal includes milestones, and larger applications can be phased so the most important workflow launches first.",
  },
  {
    question: "Can you work with our existing brand or product?",
    answer: "Yes. We can work within an established brand and codebase, redesign an existing experience, or create the interface and technical foundation from the beginning.",
  },
  {
    question: "How is this different from using a template or DIY website builder?",
    answer: "Template solutions can be a good fit for simple requirements. Custom development becomes useful when your business needs a distinctive design, tailored workflows, integrations, permissions, or product behaviour that a template cannot support cleanly.",
  },
  {
    question: "What's included in the project cost?",
    answer: "Each proposal lists the exact deliverables. Depending on the project, that can include product design, responsive development, backend services, integrations, testing, deployment, documentation, training, and post-launch support.",
  },
  {
    question: "Do you handle ongoing maintenance and updates?",
    answer: "Yes. Maintenance retainers and on-demand support are available for security updates, bug fixes, performance monitoring, content changes, and technical support. Pricing depends on the support scope and response requirements.",
  },
  {
    question: "Do you provide SEO or digital marketing?",
    answer: "Our focus is website and application development. Websites include the technical foundations search engines need, such as semantic structure, metadata support, performance, and crawlability. Ongoing content, paid media, and marketing campaigns should be handled by a specialist.",
  },
  {
    question: "What if my business needs change or I want to add features later?",
    answer: "We use modular architecture where it supports the product so later additions are easier to plan. The effort for a new feature depends on its data, integration, security, and interface requirements; we provide a scoped estimate before additional work begins.",
  },
  {
    question: "Will we own the source code?",
    answer: "Yes, unless a proposal explicitly states otherwise. On final payment, you receive the agreed source code, credentials, documentation, and handover materials for your project.",
  },
];

export function FAQ() {
  return (
    <div className="bg-[#F8FAFC] py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-[#2563EB]/10 text-[#2563EB] px-6 py-3 rounded-full mb-6 border border-[#2563EB]/20 shadow-sm">
            <HelpCircle className="h-5 w-5" />
            <span className="font-semibold">Got Questions?</span>
          </div>
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-[#64748B]">
            Everything you need to know about scope, delivery, measurement, and support
          </p>
        </div>

        {/* FAQ Accordion */}
        <Card className="bg-white border-[#E2E8F0] shadow-sm p-6">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-[#E2E8F0]">
                <AccordionTrigger className="text-left text-[#0F172A] hover:text-[#2563EB] transition-colors">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-[#64748B] text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Card>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <p className="text-[#64748B] text-lg mb-6">
            Still have questions? We're here to help.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-[#2563EB] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2563EB]/90 transition-all shadow-md hover:shadow-lg"
          >
            Discuss Your Project
          </Link>
        </div>
      </div>
    </div>
  );
}
