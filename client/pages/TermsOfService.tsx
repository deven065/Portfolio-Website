import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  Gavel,
  FileText,
  Users,
  Shield,
  DollarSign,
  AlertTriangle,
  Scale,
  CheckCircle2,
  Mail,
  Calendar,
} from "lucide-react";

export default function TermsOfService() {
  const lastUpdated = "January 2, 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms of Service - Deven Digital Labs",
    "description": "Terms of Service for Deven Digital Labs outlining the rules and regulations for using our services.",
    "dateModified": "2026-01-02",
  };

  return (
    <>
      <SEO
        title="Terms of Service - Deven Digital Labs"
        description="Read the Terms of Service for Deven Digital Labs. Learn about our service agreements, payment terms, intellectual property rights, and legal obligations."
        keywords="terms of service, terms and conditions, service agreement, legal terms, user agreement, web development terms"
        schema={schema}
      />
      <Layout>
        {/* Hero */}
        <section className="relative py-20 sm:py-28 lg:py-32 px-6 sm:px-8 lg:px-12 overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-500/10 mb-4">
              <Gavel className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Terms of Service
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. By accessing our website and services, you agree to be bound by these terms.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-slate-400">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: {lastUpdated}</span>
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="prose prose-invert max-w-none">
              <p className="text-slate-300 text-lg leading-relaxed">
                These Terms of Service ("Terms") govern your access to and use of the services provided by Deven Digital Labs ("we", "us", "our"). By accessing or using our website, services, or any related applications, you agree to be bound by these Terms. If you do not agree with any part of these Terms, you must not use our services.
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                These Terms are governed by the laws of India, including the Indian Contract Act, 1872, and the Information Technology Act, 2000. All disputes shall be subject to the exclusive jurisdiction of the courts in India.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-12">
          {/* 1. Acceptance of Terms */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">1. Acceptance of Terms</h2>
                <p className="text-slate-400">By using our services, you acknowledge that you have read, understood, and agree to these Terms.</p>
              </div>
            </div>

            <div className="ml-16">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You must be at least 18 years old or have parental/guardian consent to use our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You have the legal authority to enter into binding contracts</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>You agree to comply with all applicable laws and regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Your use constitutes acceptance of these Terms and our Privacy Policy</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 2. Services Description */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">2. Services Description</h2>
                <p className="text-slate-400">We provide various digital services to help businesses grow online.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">Our services include, but are not limited to:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Web Development:</strong> Custom website design and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Software Development:</strong> Custom software solutions and applications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Consulting Services:</strong> Business and technology consulting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>API Development:</strong> Custom API integration and development</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Maintenance & Support:</strong> Ongoing technical support and updates</span>
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                Service specifications, deliverables, timelines, and costs are defined in individual project agreements or statements of work.
              </p>
            </div>
          </div>

          {/* 3. User Obligations */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">3. User Obligations</h2>
                <p className="text-slate-400">As a user of our services, you agree to certain responsibilities and obligations.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">You agree to:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Provide accurate, current, and complete information</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Maintain the confidentiality of your account credentials</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Notify us immediately of any unauthorized use of your account</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Use our services only for lawful purposes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Not use our services to transmit harmful, illegal, or offensive content</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Not interfere with or disrupt our services or servers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Respect intellectual property rights of others</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Cooperate with reasonable requests for information during project execution</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Intellectual Property Rights */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">4. Intellectual Property Rights</h2>
                <p className="text-slate-400">Ownership and usage rights for intellectual property created during our engagement.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4.1 Ownership</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Client Work:</strong> Upon full payment, you receive ownership of custom work created specifically for you, unless otherwise agreed in writing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Pre-existing Materials:</strong> We retain all rights to pre-existing code, templates, tools, and methodologies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Third-Party Components:</strong> Subject to their respective licenses (open-source, commercial, etc.)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4.2 License Grants</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>To You:</strong> We grant you a perpetual, non-exclusive license to use deliverables for your business purposes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>To Us:</strong> You grant us the right to showcase your project in our portfolio and marketing materials</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4.3 Restrictions</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>You may not resell, redistribute, or sublicense our work to third parties without written consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>You may not reverse engineer or extract proprietary components for separate use</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>You may not remove copyright notices or attribution from deliverables</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 5. Payment Terms */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">5. Payment Terms</h2>
                <p className="text-slate-400">Terms and conditions for payment of services.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">5.1 Fees and Billing</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Service fees are outlined in individual project agreements or proposals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Typical payment structure: 50% upfront, 50% upon completion (unless otherwise agreed)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>All fees are in USD unless specified otherwise</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Invoices are payable within 7 days of receipt unless otherwise agreed</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">5.2 Payment Methods</h3>
                <p className="text-slate-300 mb-3">We accept payments through:</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Razorpay (credit/debit cards, UPI, net banking)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Stripe (international credit/debit cards)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Bank transfer (wire transfer for large projects)</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">5.3 Late Payments</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Late payments may incur interest charges of 1.5% per month (or maximum allowed by law)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>We may suspend services for accounts with overdue payments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>You are responsible for all collection costs, including legal fees</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">5.4 Refund Policy</h3>
                <p className="text-slate-300">
                  Refunds are evaluated on a case-by-case basis. Initial deposits are generally non-refundable once work has commenced. For milestone-based projects, refunds may be prorated based on work completed.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Project Scope and Changes */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">6. Project Scope and Changes</h2>
                <p className="text-slate-400">Managing project requirements and change requests.</p>
              </div>
            </div>

            <div className="ml-16">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Scope Definition:</strong> Project scope is defined in the agreement or statement of work</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Change Requests:</strong> Changes outside the agreed scope may require additional time and costs</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Approval Process:</strong> All scope changes must be documented and approved in writing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Timeline Adjustments:</strong> Significant changes may affect project timelines</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Warranties and Representations */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">7. Warranties and Representations</h2>
                <p className="text-slate-400">Our commitments regarding service quality.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">We warrant that:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Services will be performed in a professional and workmanlike manner</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Work will substantially conform to agreed specifications</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>We have the right and authority to provide the services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Deliverables will not infringe third-party intellectual property rights (to the best of our knowledge)</span>
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                Warranty period: 30 days from delivery for bug fixes and corrections (unless otherwise specified in project agreement).
              </p>
            </div>
          </div>

          {/* 8. Disclaimer of Warranties */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">8. Disclaimer of Warranties</h2>
                <p className="text-slate-400">Important limitations on warranties.</p>
              </div>
            </div>

            <div className="ml-16">
              <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg mb-4">
                <p className="text-yellow-200 text-sm font-semibold mb-2">EXCEPT AS EXPRESSLY PROVIDED IN SECTION 7:</p>
                <ul className="space-y-2 text-yellow-200 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>Services are provided "AS IS" and "AS AVAILABLE"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>We disclaim all warranties, express or implied, including merchantability and fitness for a particular purpose</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>We do not guarantee uninterrupted, error-free, or secure service</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>We do not warrant specific business results, revenue, or ROI</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 9. Limitation of Liability */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">9. Limitation of Liability</h2>
                <p className="text-slate-400">Limits on our liability for damages.</p>
              </div>
            </div>

            <div className="ml-16">
              <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg mb-4">
                <p className="text-red-200 text-sm font-semibold mb-2">TO THE MAXIMUM EXTENT PERMITTED BY LAW:</p>
                <ul className="space-y-2 text-red-200 text-sm">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Total Liability:</strong> Our liability shall not exceed the total fees paid by you in the 12 months preceding the claim</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Consequential Damages:</strong> We are not liable for indirect, incidental, special, consequential, or punitive damages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Excluded Damages:</strong> This includes lost profits, revenue, data, business opportunities, or goodwill</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span><strong>Basis of Bargain:</strong> These limitations apply even if we were advised of the possibility of such damages</span>
                  </li>
                </ul>
              </div>
              <p className="text-slate-300 text-sm">
                Some jurisdictions do not allow the exclusion of certain warranties or limitation of liability for incidental or consequential damages. In such jurisdictions, our liability is limited to the greatest extent permitted by law.
              </p>
            </div>
          </div>

          {/* 10. Indemnification */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">10. Indemnification</h2>
                <p className="text-slate-400">Your agreement to protect us from certain claims.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                You agree to indemnify, defend, and hold harmless Deven Digital Labs, its officers, directors, employees, and agents from any claims, liabilities, damages, losses, and expenses (including legal fees) arising from:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Your use or misuse of our services</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Your violation of these Terms</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Your violation of any rights of third parties</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Content you provide that infringes intellectual property or other rights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 11. Termination */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-yellow-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">11. Termination</h2>
                <p className="text-slate-400">How and when the agreement can be terminated.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">11.1 Termination by You</h3>
                <p className="text-slate-300">
                  You may terminate services by providing 7 days written notice. You remain responsible for payment for work completed up to the termination date.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">11.2 Termination by Us</h3>
                <p className="text-slate-300 mb-3">We may terminate or suspend services immediately if:</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>You breach these Terms or any project agreement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Payment is overdue by more than 30 days</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>You engage in fraudulent, illegal, or abusive behavior</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Continuation would cause legal or reputational harm</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">11.3 Post-Termination</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>All outstanding fees become immediately due</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>We will provide deliverables for work completed and paid for</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Sections on liability, indemnification, and governing law survive termination</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 12. Dispute Resolution */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Scale className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">12. Dispute Resolution</h2>
                <p className="text-slate-400">How disputes will be resolved.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">12.1 Negotiation</h3>
                <p className="text-slate-300">
                  In the event of any dispute, the parties agree to first attempt to resolve the matter through good-faith negotiations.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">12.2 Arbitration</h3>
                <p className="text-slate-300 mb-3">
                  If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 of India. The arbitration shall be:
                </p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Conducted by a sole arbitrator mutually agreed upon</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>Held in English language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span>The arbitrator's decision is final and binding</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">12.3 Exception</h3>
                <p className="text-slate-300">
                  Either party may seek injunctive or other equitable relief in court for intellectual property infringement or breach of confidentiality.
                </p>
              </div>
            </div>
          </div>

          {/* 13. Governing Law */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Gavel className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">13. Governing Law and Jurisdiction</h2>
                <p className="text-slate-400">The laws that govern these Terms.</p>
              </div>
            </div>

            <div className="ml-16">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Governing Law:</strong> These Terms are governed by the laws of India, including the Indian Contract Act, 1872 and the Information Technology Act, 2000</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Jurisdiction:</strong> All disputes shall be subject to the exclusive jurisdiction of the courts located in India</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Language:</strong> These Terms are written in English, which shall be the controlling language in all respects</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 14. Changes to Terms */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">14. Changes to These Terms</h2>
                <p className="text-slate-400">We may update these Terms from time to time.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                We reserve the right to modify these Terms at any time. When we make changes:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>We will update the "Last Updated" date</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>We will notify you via email or website notice for material changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Your continued use after changes constitutes acceptance</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>If you don't agree with changes, you must discontinue use</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 15. Contact Information */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">15. Contact Information</h2>
                <p className="text-slate-400">Questions about these Terms? We're here to help.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                If you have any questions, concerns, or feedback regarding these Terms of Service, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm">General Inquiries</p>
                    <a href="mailto:contact@devendigitallabs.com" className="text-blue-400 hover:text-blue-300 text-lg">
                      contact@devendigitallabs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Note */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto">
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-8 text-center">
            <p className="text-slate-300 text-sm">
              By using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy. These Terms constitute the entire agreement between you and Deven Digital Labs regarding the use of our services.
            </p>
          </div>
        </section>
      </Layout>
    </>
  );
}
