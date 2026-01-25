import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trackFormSubmission, trackEvent } from "@/lib/analytics";
import { useState } from "react";
import { Mail, Clock, ChevronDown, Calendar, MessageCircle } from "lucide-react";

interface FormData {
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  budget: string;
  projectDescription: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Us",
    "description": "Get in touch with Deven Digital Labs for your web development and technology consulting needs. Free consultation available."
  };
  
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    budget: "",
    projectDescription: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.companyName.trim()) newErrors.companyName = "Company name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.budget) newErrors.budget = "Please select a budget range";
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Project description is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Track form submission attempt
      trackEvent('form_start', 'contact', 'contact_form');
      
      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (data.success) {
          setSubmitted(true);
          
          // Track successful form submission
          trackFormSubmission('contact_form');
          trackEvent('conversion', 'contact', 'form_submitted');
          
          setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            budget: "",
            projectDescription: "",
          });
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          // Track form error
          trackEvent('form_error', 'contact', 'submission_failed');
          alert("Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error sending email:", error);
        trackEvent('form_error', 'contact', 'network_error');
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const faqs = [
    {
      question: "What is your minimum project size?",
      answer:
        "We work on projects of all sizes, from smaller websites starting at ₹50,000 / $1,500 to complex enterprise platforms. There's no minimum commitment—we adapt to your needs and budget.",
    },
    {
      question: "How do payments work?",
      answer:
        "We typically structure payments as 50% upfront, 30% at milestone completion, and 20% on final delivery. For retainer arrangements, we bill monthly in advance. We're flexible and can discuss payment terms that work for both parties.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely. We work with clients across India, US, UK, Australia, and other regions. We have experience with international compliance requirements, timezone management, and global payment methods.",
    },
    {
      question: "What industries do you serve?",
      answer:
        "We've built solutions for fintech, healthcare, e-commerce, SaaS, edtech, supply chain, and many other industries. We bring industry expertise combined with technical excellence to every project.",
    },
    {
      question: "Do you provide long-term support?",
      answer:
        "Yes. Beyond project delivery, we offer maintenance retainers, performance optimization, feature enhancements, and strategic guidance. We see ourselves as your long-term technology partner.",
    },
    {
      question: "How long does a typical project take?",
      answer:
        "Timeline depends on scope. Small websites: 4-8 weeks. Custom applications: 3-6 months. SaaS platforms: 4-9 months. We'll provide a detailed timeline after understanding your requirements.",
    },
  ];

  return (
    <>
      <SEO 
        title="Contact Us - Free Web Development Consultation | Deven Digital Labs"
        description="Get in touch with Deven Digital Labs for professional web development services, custom software solutions, and technology consulting. Free consultation available. Contact us today to discuss your project requirements and get a detailed quote for your web development needs."
        keywords="contact web development company, hire professional developers, web development consultation, custom software development quote, technology consulting services, project estimate, free consultation, web application development, React developers for hire, Next.js development services, full-stack development team, business automation solutions, e-commerce development contact, CRM development inquiry, software engineering consultation"
        schema={schema}
      />
      <Layout>
      {/* Hero */}
      <section className="relative py-12 sm:py-20 md:py-28 lg:py-32 px-4 sm:px-6 md:px-8 lg:px-12 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto px-4">
            Let's discuss your project and how we can help your business grow.
          </p>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12">
          {/* Contact Information */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            {/* Email */}
            <div className="flex gap-3 sm:gap-4">
              <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2 text-base sm:text-lg">Email</h3>
                <a
                  href="mailto:hello@devendigitallabs.com"
                  className="text-sm sm:text-base text-slate-300 hover:text-white transition-colors break-all"
                >
                  hello@devendigitallabs.com
                </a>
              </div>
            </div>

            {/* Working Hours */}
            <div className="flex gap-3 sm:gap-4">
              <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2 text-base sm:text-lg">Working Hours</h3>
                <p className="text-sm sm:text-base text-slate-300 mb-1">
                  Monday – Friday<br />
                  10:00 AM – 7:00 PM IST
                </p>
                <p className="text-slate-400 text-xs sm:text-sm">
                  Weekends: By appointment only
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex gap-3 sm:gap-4">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-green-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2 text-base sm:text-lg">WhatsApp</h3>
                <a
                  href="https://wa.me/919833703389"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-green-400 hover:text-green-300 transition-colors font-medium"
                >
                  Chat on WhatsApp
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Quick response during working hours
                </p>
              </div>
            </div>

            {/* Book a Call */}
            <div className="flex gap-3 sm:gap-4">
              <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2 text-base sm:text-lg">Book a Call</h3>
                <a
                  href="https://cal.com/deven-rikame-2jhxbu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm sm:text-base text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Schedule a Meeting
                  <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-slate-400 text-xs sm:text-sm mt-1">
                  Pick a time that works for you
                </p>
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-4 sm:p-6">
              <h3 className="font-bold mb-2 sm:mb-3 text-base sm:text-lg">Quick Response</h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                We typically respond to inquiries within 24 hours. For urgent matters, please mention it in your message.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
              {submitted && (
                <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-3 sm:p-4 text-green-300 text-sm sm:text-base">
                  Thank you for reaching out! We'll review your request and get back to you soon.
                </div>
              )}

              {/* Full Name */}
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                    errors.fullName
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-slate-700/50 focus:border-blue-500/50 focus:bg-slate-800/80"
                  }`}
                  placeholder="John Doe"
                />
                {errors.fullName && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.fullName}</p>
                )}
              </div>

              {/* Company Name */}
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                    errors.companyName
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-slate-700/50 focus:border-blue-500/50 focus:bg-slate-800/80"
                  }`}
                  placeholder="Your Company"
                />
                {errors.companyName && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.companyName}</p>
                )}
              </div>

              {/* Business Email */}
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">Business Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 transition-all duration-300 focus:outline-none ${
                    errors.email
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-slate-700/50 focus:border-blue-500/50 focus:bg-slate-800/80"
                  }`}
                  placeholder="you@company.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">Phone (Optional)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-slate-800/50 border border-slate-700/50 rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 transition-all duration-300 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/80"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Budget */}
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">Budget Range *</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full bg-slate-800/50 border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white transition-all duration-300 focus:outline-none appearance-none ${
                    errors.budget
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-slate-700/50 focus:border-blue-500/50 focus:bg-slate-800/80"
                  }`}
                >
                  <option value="">Select budget range...</option>
                  <option value="under-100k">Under ₹1,00,000 / Under $2,500</option>
                  <option value="100k-500k">₹1,00,000 - ₹5,00,000 / $2,500 - $7,500</option>
                  <option value="500k-2m">₹5,00,000 - ₹20,00,000 / $7,500 - $25,000</option>
                  <option value="2m-plus">Above ₹20,00,000 / Above $25,000</option>
                </select>
                {errors.budget && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.budget}</p>
                )}
              </div>

              {/* Project Description */}
              <div>
                <label className="block text-sm sm:text-base font-medium mb-2">Project Description *</label>
                <textarea
                  name="projectDescription"
                  value={formData.projectDescription}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full bg-slate-800/50 border rounded-lg px-3 py-2.5 sm:px-4 sm:py-3 text-sm sm:text-base text-white placeholder-slate-500 transition-all duration-300 focus:outline-none resize-none ${
                    errors.projectDescription
                      ? "border-red-500/50 focus:border-red-500"
                      : "border-slate-700/50 focus:border-blue-500/50 focus:bg-slate-800/80"
                  }`}
                  placeholder="Tell us about your project, goals, and timeline..."
                />
                {errors.projectDescription && (
                  <p className="text-red-400 text-xs sm:text-sm mt-1">{errors.projectDescription}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base py-3 sm:py-4"
              >
                {isSubmitting ? "Sending..." : "Send Inquiry"}
              </Button>

              <p className="text-xs sm:text-sm text-slate-400 text-center leading-relaxed px-2">
                We respect your privacy. Your information is secure and will only be used to contact you about your project.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-12 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-slate-800/50 border border-slate-700/50 rounded-xl overflow-hidden hover:border-slate-600/50 transition-all duration-300"
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left group"
              >
                <h3 className="font-semibold text-sm sm:text-base md:text-lg group-hover:text-blue-400 transition-colors pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  size={20}
                  className={`sm:w-6 sm:h-6 flex-shrink-0 text-slate-400 transition-transform duration-300 ${
                    expandedFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedFaq === idx && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 border-t border-slate-700/50">
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
    </Layout>
    </>
  );
}
