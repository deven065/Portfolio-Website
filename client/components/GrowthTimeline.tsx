import React from 'react';
import { Card } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, Users, Rocket, Target, Award } from 'lucide-react';

interface TimelinePhase {
  month: string;
  title: string;
  revenue: string;
  activities: string[];
  icon: React.ReactNode;
  highlight?: boolean;
}

export function GrowthTimeline() {
  const timeline: TimelinePhase[] = [
    {
      month: 'Month 1',
      title: 'Launch & Foundation',
      revenue: '₹0 - ₹50K',
      activities: [
        'Website goes live with full optimization',
        'Analytics & conversion tracking setup',
        'Initial SEO and marketing campaigns',
      ],
      icon: <Rocket className="h-6 w-6" />,
    },
    {
      month: 'Month 2-3',
      title: 'Traffic & Lead Generation',
      revenue: '₹75K - ₹2L',
      activities: [
        'Organic traffic starts building',
        'Lead capture systems activated',
        'A/B testing and optimization begins',
      ],
      icon: <Users className="h-6 w-6" />,
    },
    {
      month: 'Month 4-6',
      title: 'Break-Even & Growth',
      revenue: '₹3L - ₹5L',
      activities: [
        'Investment fully recovered',
        'Consistent customer acquisition',
        'Conversion rate improvements show',
      ],
      icon: <Target className="h-6 w-6" />,
      highlight: true,
    },
    {
      month: 'Month 7-9',
      title: 'Acceleration Phase',
      revenue: '₹6L - ₹10L',
      activities: [
        'ROI multiplies rapidly',
        'Word-of-mouth referrals increase',
        'Brand authority established',
      ],
      icon: <TrendingUp className="h-6 w-6" />,
    },
    {
      month: 'Month 10-12',
      title: 'Maturity & Scale',
      revenue: '₹12L - ₹20L+',
      activities: [
        '5x ROI achieved or exceeded',
        'Automated systems running smoothly',
        'Ready for next phase of growth',
      ],
      icon: <Award className="h-6 w-6" />,
      highlight: true,
    },
  ];

  return (
    <div className="bg-slate-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full mb-6 border border-blue-500/20">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">Your Growth Journey</span>
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            12-Month Revenue Growth Timeline
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See the typical revenue trajectory of our clients from launch to 5x ROI
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 opacity-20"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4">
            {timeline.map((phase, index) => {
              const isHighlight = phase.highlight;
              return (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className={`hidden lg:flex absolute top-20 left-1/2 transform -translate-x-1/2 w-8 h-8 rounded-full ${
                    isHighlight ? 'bg-gradient-to-br from-green-500 to-emerald-600 ring-4 ring-green-500/20' : 'bg-blue-500'
                  } items-center justify-center z-10`}>
                    <CheckCircle2 className="h-4 w-4 text-white" />
                  </div>

                  <Card className={`p-6 h-full ${
                    isHighlight 
                      ? 'bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-2 border-green-500/30' 
                      : 'bg-slate-800/50 border-slate-700/50'
                  } hover:scale-105 transition-all duration-300 mt-0 lg:mt-32`}>
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-full ${
                      isHighlight ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                    } flex items-center justify-center mb-4`}>
                      {phase.icon}
                    </div>

                    {/* Month */}
                    <div className={`text-sm font-semibold mb-2 ${
                      isHighlight ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {phase.month}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-3">
                      {phase.title}
                    </h3>

                    {/* Revenue */}
                    <div className={`text-2xl font-bold mb-4 ${
                      isHighlight ? 'text-green-400' : 'text-blue-400'
                    }`}>
                      {phase.revenue}
                    </div>

                    {/* Activities */}
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                          <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${
                            isHighlight ? 'text-green-400' : 'text-blue-400'
                          }`} />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Card className="inline-block p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-500/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Growth Journey?
            </h3>
            <p className="text-slate-300 mb-6 max-w-2xl">
              Most clients break even by month 4 and achieve 5x ROI by end of year one. 
              Let's create your custom growth roadmap.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
            >
              <Target className="h-5 w-5" />
              Get Your Growth Plan
            </a>
          </Card>
        </div>
      </div>
    </div>
  );
}
