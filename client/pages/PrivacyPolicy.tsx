import Layout from "@/components/Layout";
import SEO from "@/components/SEO";
import {
  Shield,
  Database,
  Users,
  Lock,
  Eye,
  Globe,
  Cookie,
  FileText,
  UserCheck,
  Mail,
  Calendar,
  AlertCircle,
  CheckCircle2,
} from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "January 2, 2026";

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy - Deven Digital Labs",
    "description": "Privacy Policy for Deven Digital Labs detailing how we collect, use, and protect your personal information.",
    "dateModified": "2026-01-02",
  };

  return (
    <>
      <SEO
        title="Privacy Policy - Deven Digital Labs"
        description="Learn how Deven Digital Labs collects, uses, and protects your personal information. Our privacy policy is compliant with GDPR, CCPA, and Indian IT Act 2000."
        keywords="privacy policy, data protection, GDPR, CCPA, Indian IT Act, privacy rights, data security"
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
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your information.
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
                Deven Digital Labs ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us. This policy is compliant with the Information Technology Act, 2000 and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 of India, the General Data Protection Regulation (GDPR) of the European Union, and the California Consumer Privacy Act (CCPA).
              </p>
              <p className="text-slate-300 text-lg leading-relaxed mt-4">
                By accessing or using our services, you agree to the terms outlined in this Privacy Policy. If you do not agree with these terms, please do not use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto space-y-12">
          {/* 1. Information We Collect */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Database className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">1. Information We Collect</h2>
                <p className="text-slate-400">We collect information that you provide directly to us and information automatically collected when you use our services.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">1.1 Personal Information You Provide</h3>
                <p className="text-slate-300 mb-3">We may collect the following personal information when you:</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Contact us:</strong> Name, email address, phone number, company name, and message content</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Request services:</strong> Business details, project requirements, budget information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Make payments:</strong> Billing information, payment details (processed securely through third-party payment processors)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Subscribe to newsletters:</strong> Email address, communication preferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Use our services:</strong> Account information, authentication credentials, project files, communications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">1.2 Information Automatically Collected</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Usage Data:</strong> Pages viewed, time spent, click patterns, navigation paths</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Device Information:</strong> IP address, browser type and version, device type, operating system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Location Data:</strong> Approximate location based on IP address</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Cookies and Tracking:</strong> Session data, preferences, analytics information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. How We Use Your Information */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">2. How We Use Your Information</h2>
                <p className="text-slate-400">We use the collected information for various purposes related to our business operations.</p>
              </div>
            </div>

            <div className="ml-16">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Provide Services:</strong> To deliver web development, software development, consulting, and other services you request</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Communication:</strong> To respond to inquiries, send project updates, provide customer support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Payment Processing:</strong> To process transactions and send invoices</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Marketing:</strong> To send newsletters, promotional materials, and service updates (with your consent)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Analytics:</strong> To analyze website usage, improve our services, and optimize user experience</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Security:</strong> To detect and prevent fraud, abuse, and security incidents</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. Legal Basis for Processing (GDPR) */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">3. Legal Basis for Processing (GDPR)</h2>
                <p className="text-slate-400">For users in the European Economic Area, we process your data based on the following legal grounds.</p>
              </div>
            </div>

            <div className="ml-16">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Consent:</strong> When you explicitly agree to the processing of your data</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Contract Performance:</strong> To fulfill our contractual obligations to you</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Legal Obligation:</strong> To comply with applicable laws and regulations</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Legitimate Interests:</strong> For purposes that serve our legitimate business interests while respecting your rights</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4. Information Sharing and Disclosure */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">4. Information Sharing and Disclosure</h2>
                <p className="text-slate-400">We may share your information with trusted third parties in specific circumstances.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4.1 Service Providers</h3>
                <p className="text-slate-300 mb-3">We may share information with third-party service providers who help us operate our business:</p>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Payment Processors:</strong> Razorpay, Stripe for payment processing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Analytics Services:</strong> Google Analytics for website analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Hosting Providers:</strong> AWS, Vercel for website hosting and infrastructure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Communication Tools:</strong> Email service providers for communications</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4.2 Legal Requirements</h3>
                <p className="text-slate-300">We may disclose information if required by law or to:</p>
                <ul className="space-y-2 text-slate-300 mt-3">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Comply with legal processes, court orders, or government requests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Enforce our Terms of Service and other agreements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Protect our rights, property, or safety, or that of our users or the public</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <span>Prevent fraud, abuse, or security incidents</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">4.3 Business Transfers</h3>
                <p className="text-slate-300">
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the acquiring entity.
                </p>
              </div>
            </div>
          </div>

          {/* 5. Data Security */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Lock className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">5. Data Security</h2>
                <p className="text-slate-400">We implement industry-standard security measures to protect your information.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">We take data security seriously and employ various measures including:</p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Encryption:</strong> SSL/TLS encryption for data in transit</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Access Controls:</strong> Restricted access to personal information on a need-to-know basis</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Regular Audits:</strong> Security assessments and vulnerability testing</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Employee Training:</strong> Staff education on data protection practices</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                <p className="text-yellow-200 text-sm">
                  <AlertCircle className="w-4 h-4 inline mr-2" />
                  While we strive to protect your information, no method of transmission over the Internet or electronic storage is 100% secure. We cannot guarantee absolute security.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Data Retention */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">6. Data Retention</h2>
                <p className="text-slate-400">We retain your information only as long as necessary for legitimate business purposes.</p>
              </div>
            </div>

            <div className="ml-16">
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Active Projects:</strong> Duration of the project plus 1 year for support and warranty</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Financial Records:</strong> 7 years as required by Indian tax laws</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Marketing Data:</strong> Until you unsubscribe or request deletion</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Analytics Data:</strong> Aggregated and anonymized data may be retained indefinitely</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Your Rights and Choices */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">7. Your Rights and Choices</h2>
                <p className="text-slate-400">You have various rights regarding your personal information depending on your location.</p>
              </div>
            </div>

            <div className="space-y-6 ml-16">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">7.1 GDPR Rights (EU Users)</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Access:</strong> Request a copy of your personal data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Rectification:</strong> Correct inaccurate or incomplete data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Erasure:</strong> Request deletion of your data ("right to be forgotten")</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Restriction:</strong> Limit how we process your data</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Data Portability:</strong> Receive your data in a machine-readable format</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Object:</strong> Object to processing based on legitimate interests</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Withdraw Consent:</strong> Withdraw previously given consent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Lodge Complaint:</strong> File a complaint with your data protection authority</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">7.2 CCPA Rights (California Users)</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Know:</strong> Know what personal information we collect, use, and share</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Delete:</strong> Request deletion of your personal information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Opt-Out:</strong> Opt-out of the sale of your personal information (we do not sell personal information)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Non-Discrimination:</strong> Not be discriminated against for exercising your rights</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-blue-400">7.3 Indian IT Act Rights</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Review:</strong> Review information provided to us</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Correct:</strong> Correct any inaccurate or deficient information</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                    <span><strong>Withdraw Consent:</strong> Withdraw consent for data collection/usage (subject to contractual obligations)</span>
                  </li>
                </ul>
              </div>

              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-200 text-sm">
                  To exercise any of these rights, please contact us at <a href="mailto:privacy@devendigitallabs.com" className="underline hover:text-blue-300">privacy@devendigitallabs.com</a>. We will respond to your request within 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* 8. Cookies and Tracking Technologies */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Cookie className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">8. Cookies and Tracking Technologies</h2>
                <p className="text-slate-400">We use cookies and similar technologies to enhance your experience.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">We use the following types of cookies:</p>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Essential Cookies:</strong> Necessary for the website to function properly</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Functionality Cookies:</strong> Remember your preferences and settings</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span><strong>Performance Cookies:</strong> Monitor website performance and user experience</span>
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality.
              </p>
            </div>
          </div>

          {/* 9. International Data Transfers */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">9. International Data Transfers</h2>
                <p className="text-slate-400">Your information may be transferred and stored in different countries.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                We are based in India, but we may transfer and process your data in other countries where our service providers are located. When we transfer data internationally, we ensure appropriate safeguards are in place, including:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Standard Contractual Clauses approved by the European Commission</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Adequacy decisions by relevant data protection authorities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Other legally approved transfer mechanisms</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 10. Children's Privacy */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">10. Children's Privacy</h2>
                <p className="text-slate-400">Our services are not directed to individuals under 18 years of age.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300">
                We do not knowingly collect personal information from individuals under 18 years of age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at <a href="mailto:privacy@devendigitallabs.com" className="text-blue-400 hover:text-blue-300 underline">privacy@devendigitallabs.com</a>. We will take steps to delete such information from our systems.
              </p>
            </div>
          </div>

          {/* 11. Third-Party Links */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Globe className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">11. Third-Party Links</h2>
                <p className="text-slate-400">We are not responsible for the privacy practices of external websites.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300">
                Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policies of any third-party websites you visit.
              </p>
            </div>
          </div>

          {/* 12. Changes to Privacy Policy */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">12. Changes to This Privacy Policy</h2>
                <p className="text-slate-400">We may update this policy from time to time to reflect changes in our practices or legal requirements.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                We reserve the right to modify this Privacy Policy at any time. When we make changes, we will:
              </p>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Update the "Last Updated" date at the top of this policy</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Notify you via email or website notification for material changes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span>Obtain your consent if required by law</span>
                </li>
              </ul>
              <p className="text-slate-300 mt-4">
                Your continued use of our services after changes constitutes acceptance of the updated policy.
              </p>
            </div>
          </div>

          {/* 13. Grievance Officer (Indian IT Act Requirement) */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">13. Grievance Officer</h2>
                <p className="text-slate-400">As required by Indian IT Act 2000, we have designated a Grievance Officer.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                In accordance with the Information Technology Act, 2000 and rules made thereunder, you may contact our Grievance Officer for any complaints or concerns regarding your personal information:
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                <p className="text-slate-300">
                  <strong className="text-blue-400">Email:</strong> <a href="mailto:privacy@devendigitallabs.com" className="text-blue-400 hover:text-blue-300 underline">privacy@devendigitallabs.com</a>
                </p>
                <p className="text-slate-300 mt-2">
                  <strong className="text-blue-400">Response Time:</strong> We will acknowledge your complaint within 48 hours and respond within 30 days.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8 shadow-xl">
            <div className="flex items-start gap-4 mb-6">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-2">Contact Information</h2>
                <p className="text-slate-400">Questions about this Privacy Policy? We're here to help.</p>
              </div>
            </div>

            <div className="ml-16">
              <p className="text-slate-300 mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm">Privacy Email</p>
                    <a href="mailto:privacy@devendigitallabs.com" className="text-blue-400 hover:text-blue-300 text-lg">
                      privacy@devendigitallabs.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
