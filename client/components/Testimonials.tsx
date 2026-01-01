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
    name: "Rajesh Kumar",
    role: "CEO",
    company: "TechStart Solutions",
    content: "Our investment paid for itself in just 2 months. The website generates consistent daily sales and we've seen a 45% increase in conversions. We've added $180,000 in revenue in the first 6 months alone. Best business decision we made this year.",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    role: "Founder",
    company: "InnovateCorp",
    content: "We went from 10 leads per month to 35+ qualified leads. The automated booking system saves us 15 hours weekly. We broke even on our investment in just 3 months and the ROI keeps growing. They truly understand business, not just development.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Director",
    company: "GrowthHub",
    content: "The efficiency improvements alone saved us $40,000 annually. Combined with increased sales, we saw an 8x return on investment in the first year. The website is our best performing sales channel now. Exceptional ROI and partnership.",
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
