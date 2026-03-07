import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { trackFormSubmission, trackEvent } from "@/lib/analytics";
import { useState } from "react";
import { Mail, Clock, ChevronDown, Calendar, MessageCircle, ArrowRight, Check } from "lucide-react";

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
    "description": "Start your free 3-step growth assessment at Deven Digital Labs. We specialize in Dental, Design, and Real Estate business optimization."
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
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 3;

  const faqs = [
    {
      question: "What is your minimum project size?",
      answer: "We work on projects of all sizes, from smaller websites starting at ₹50,000 / $1,500 to complex enterprise platforms. There's no minimum commitment—we adapt to your needs and budget.",
    },
    {
      question: "How do payments work?",
      answer: "We typically structure payments as 50% upfront, 30% at milestone completion, and 20% on final delivery. For retainer arrangements, we bill monthly in advance.",
    },
    {
      question: "Do you provide long-term support?",
      answer: "Yes. Beyond project delivery, we offer maintenance retainers, performance optimization, feature enhancements, and strategic guidance.",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = "Goals description is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const nextStep = () => {
    if (currentStep === 1 && !formData.projectDescription.trim()) {
      setErrors({ projectDescription: "Please tell us a bit about your goals" });
      return;
    }
    setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    window.scrollTo({ top: 300, behavior: 'smooth' });
  };

  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      trackEvent('form_start', 'contact', 'assessment_form');

      try {
        const response = await fetch("/api/send-email", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json();
        if (data.success) {
          setSubmitted(true);
          trackFormSubmission('assessment_form');
          setFormData({
            fullName: "",
            companyName: "",
            email: "",
            phone: "",
            budget: "",
            projectDescription: "",
          });
          setCurrentStep(1);
          setTimeout(() => setSubmitted(false), 5000);
        } else {
          alert("Failed to send. Please try again.");
        }
      } catch (error) {
        alert("An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <SEO
        title="Get Free Growth Audit | Contact Deven Digital Labs"
        description="Start your 3-step growth assessment for Dental, Design, or Real Estate business optimization. Custom audits delivered in 48 hours."
        keywords="free website audit, dental clinic seo, interior design web design, real estate lead generation, automation audit"
        canonical="https://devendigitallabs.com/contact"
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative py-12 sm:py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          </div>
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-2">
              The <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Growth Assessment</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Answer 3 quick questions about your business to receive a custom performance + automation audit within 48 hours.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm font-bold text-blue-400 uppercase tracking-widest">
              <span className="w-2 h-2 rounded-full bg-blue-400"></span>
              Average time to complete: 45 seconds
            </div>
          </div>
        </section>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto px-6 mb-12">
          <div className="flex justify-between mb-4">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all ${currentStep >= s ? 'bg-blue-500 border-blue-500 text-white' : 'border-slate-700 text-slate-500'}`}>
                  {s}
                </div>
                <span className={`text-xs font-bold uppercase tracking-tighter ${currentStep >= s ? 'text-blue-400' : 'text-slate-600'}`}>
                  {s === 1 ? 'Objectives' : s === 2 ? 'Business' : 'Details'}
                </span>
              </div>
            ))}
          </div>
          <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-blue-500 transition-all duration-500 ease-out"
              style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <section className="py-12 px-6 max-w-3xl mx-auto">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-[2.5rem] p-8 sm:p-12 shadow-2xl relative overflow-hidden backdrop-blur-xl">
            <form onSubmit={handleSubmit} className="relative z-10">
              {submitted && (
                <div className="mb-8 p-6 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl text-emerald-300 text-center animate-in zoom-in duration-300">
                  <Check className="w-12 h-12 mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Assessment Received!</h3>
                  <p>Check your email for confirmation. We'll deliver your audit within 48 hours.</p>
                </div>
              )}

              {currentStep === 1 && (
                <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">What is your primary focus?</h2>
                    <p className="text-slate-400 mb-6">Choose the area where you need the most impact.</p>
                    <textarea
                      name="projectDescription"
                      value={formData.projectDescription}
                      onChange={handleChange}
                      rows={4}
                      className={`w-full bg-slate-800/40 border-2 rounded-2xl px-6 py-5 text-white placeholder-slate-600 transition-all focus:outline-none focus:ring-4 focus:ring-blue-500/10 resize-none ${errors.projectDescription ? "border-red-500/50" : "border-slate-700/50 focus:border-blue-500/50"}`}
                      placeholder="e.g. 'I'm a dentist looking to automate patient bookings'..."
                    />
                    {errors.projectDescription && <p className="text-red-400 text-sm mt-2">{errors.projectDescription}</p>}
                  </div>
                  <Button type="button" size="lg" onClick={nextStep} className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold h-14 rounded-2xl group transition-all">
                    Continue to Business Info
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Tell us about your business</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Company Name</label>
                        <input
                          type="text"
                          name="companyName"
                          value={formData.companyName}
                          onChange={handleChange}
                          className="w-full bg-slate-800/40 border-2 border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none"
                          placeholder="Your Practice/Firm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">Target Budget</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-slate-800/40 border-2 border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none appearance-none"
                        >
                          <option value="">Select range...</option>
                          <option value="under-1k">Under $1,000</option>
                          <option value="1k-5k">$1,000 – $5,000</option>
                          <option value="5k-15k">$5,000 – $15,000</option>
                          <option value="over-15k">$15,000+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 border-slate-700 text-slate-400 h-14 rounded-2xl">Back</Button>
                    <Button type="button" size="lg" onClick={nextStep} className="flex-[2] bg-blue-500 hover:bg-blue-600 text-white font-bold h-14 rounded-2xl">Final Step</Button>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-8 animate-in slide-in-from-right-4 duration-300">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-6">Where should we send your audit?</h2>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            className={`w-full bg-slate-800/40 border-2 rounded-xl px-4 py-3 text-white outline-none ${errors.fullName ? "border-red-500/50" : "border-slate-700/50 focus:border-blue-500/50"}`}
                            placeholder="Full Name"
                          />
                          {errors.fullName && <p className="text-red-400 text-xs mt-1">{errors.fullName}</p>}
                        </div>
                        <div>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full bg-slate-800/40 border-2 border-slate-700/50 rounded-xl px-4 py-3 text-white focus:border-blue-500/50 outline-none"
                            placeholder="Phone (WhatsApp)"
                          />
                        </div>
                      </div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-800/40 border-2 rounded-xl px-4 py-3 text-white outline-none ${errors.email ? "border-red-500/50" : "border-slate-700/50 focus:border-blue-500/50"}`}
                        placeholder="Business Email"
                      />
                      {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 border-slate-700 text-slate-400 h-14 rounded-2xl">Back</Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-black h-14 rounded-2xl shadow-xl shadow-blue-500/20"
                    >
                      {isSubmitting ? 'Generating Report...' : 'Get My Free Audit'}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Questions?</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-slate-800/30 border border-slate-700/50 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="font-bold text-lg">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${expandedFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                {expandedFaq === idx && (
                  <div className="px-6 pb-6 text-slate-400 leading-relaxed border-t border-slate-700/30 pt-4">
                    {faq.answer}
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
