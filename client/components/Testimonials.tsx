import { Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Accent Techno Solutions",
    role: "Client",
    company: "Enterprise CRM",
    content: "The CRM platform Deven built completely replaced our manual spreadsheet workflow. Role-based access, client pipelines, and automated follow-ups are now all in one place. Our team onboarded within a week and the system has been rock-solid since launch.",
    rating: 5,
  },
  {
    name: "Premiums4U",
    role: "Client",
    company: "E-commerce Platform",
    content: "From design to deployment, everything was handled professionally. The storefront is fast, the checkout is smooth, and the backend is easy for our team to manage. Sales have been consistent since we went live.",
    rating: 5,
  },
  {
    name: "Only4Premiums",
    role: "Client",
    company: "Subscription Platform",
    content: "We needed a subscription platform with instant delivery and secure access control. Deven delivered exactly that — on time and without cutting corners. The system handles high traffic without any issues.",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold mb-4">Real Results from Real Clients</h2>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
          See how our clients achieved measurable business growth and ROI
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, idx) => (
          <div
            key={idx}
            className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/80 hover:border-slate-600/50 transition-all duration-300 animate-fade-up relative"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            <Quote className="absolute top-6 right-6 w-8 h-8 text-blue-500/20" />

            <div className="flex gap-1 mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>

            <p className="text-slate-300 mb-6 leading-relaxed">
              "{testimonial.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                {testimonial.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="text-sm text-slate-400">
                  {testimonial.role}, {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
