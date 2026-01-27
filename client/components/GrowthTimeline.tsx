import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, Users, Rocket, Target, Award, Sparkles } from 'lucide-react';

interface TimelinePhase {
  month: string;
  title: string;
  revenue: string;
  activities: string[];
  icon: React.ReactNode;
  highlight?: boolean;
  color: string;
}

export function GrowthTimeline() {
  const timeline: TimelinePhase[] = [
    {
      month: 'Month 1',
      title: 'Launch & Foundation',
      revenue: '$0 - $600',
      activities: [
        'Website goes live with full optimization',
        'Analytics & conversion tracking setup',
        'Initial SEO and marketing campaigns',
      ],
      icon: <Rocket className="h-6 w-6" />,
      color: 'blue',
    },
    {
      month: 'Month 2-3',
      title: 'Traffic & Lead Generation',
      revenue: '$900 - $2.4K',
      activities: [
        'Organic traffic starts building',
        'Lead capture systems activated',
        'A/B testing and optimization begins',
      ],
      icon: <Users className="h-6 w-6" />,
      color: 'cyan',
    },
    {
      month: 'Month 4-6',
      title: 'Break-Even & Growth',
      revenue: '$3.6K - $6K',
      activities: [
        'Investment fully recovered',
        'Consistent customer acquisition',
        'Conversion rate improvements show',
      ],
      icon: <Target className="h-6 w-6" />,
      highlight: true,
      color: 'green',
    },
    {
      month: 'Month 7-9',
      title: 'Acceleration Phase',
      revenue: '$7.2K - $12K',
      activities: [
        'ROI multiplies rapidly',
        'Word-of-mouth referrals increase',
        'Brand authority established',
      ],
      icon: <TrendingUp className="h-6 w-6" />,
      color: 'purple',
    },
    {
      month: 'Month 10-12',
      title: 'Maturity & Scale',
      revenue: '$14K - $24K+',
      activities: [
        '5x ROI achieved or exceeded',
        'Automated systems running smoothly',
        'Ready for next phase of growth',
      ],
      icon: <Award className="h-6 w-6" />,
      highlight: true,
      color: 'emerald',
    },
  ];

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string; border: string; text: string; icon: string; dot: string; glow: string }> = {
      blue: {
        bg: 'bg-slate-800/50',
        border: 'border-blue-500/30',
        text: 'text-blue-400',
        icon: 'bg-blue-500/20 text-blue-400',
        dot: 'bg-blue-500 ring-blue-500/30',
        glow: 'shadow-[0_0_30px_rgba(59,130,246,0.15)]',
      },
      cyan: {
        bg: 'bg-slate-800/50',
        border: 'border-cyan-500/30',
        text: 'text-cyan-400',
        icon: 'bg-cyan-500/20 text-cyan-400',
        dot: 'bg-cyan-500 ring-cyan-500/30',
        glow: 'shadow-[0_0_30px_rgba(6,182,212,0.15)]',
      },
      green: {
        bg: 'bg-slate-800/60',
        border: 'border-green-500/40',
        text: 'text-green-400',
        icon: 'bg-green-500/20 text-green-400',
        dot: 'bg-gradient-to-br from-green-500 to-emerald-600 ring-green-500/40',
        glow: 'shadow-[0_0_40px_rgba(34,197,94,0.2)]',
      },
      purple: {
        bg: 'bg-slate-800/50',
        border: 'border-purple-500/30',
        text: 'text-purple-400',
        icon: 'bg-purple-500/20 text-purple-400',
        dot: 'bg-purple-500 ring-purple-500/30',
        glow: 'shadow-[0_0_30px_rgba(168,85,247,0.15)]',
      },
      emerald: {
        bg: 'bg-slate-800/60',
        border: 'border-emerald-500/40',
        text: 'text-emerald-400',
        icon: 'bg-emerald-500/20 text-emerald-400',
        dot: 'bg-gradient-to-br from-emerald-500 to-green-600 ring-emerald-500/40',
        glow: 'shadow-[0_0_40px_rgba(16,185,129,0.2)]',
      },
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="relative bg-slate-900 py-20 px-4 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-green-500/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 glass bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-400 px-6 py-3 rounded-full mb-6 border border-blue-500/20 hover-scale">
            <Sparkles className="h-5 w-5 animate-pulse" />
            <span className="font-semibold">Your Growth Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent">
              12-Month Revenue
            </span>
            <br />
            <span className="text-white">Growth Timeline</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See the typical revenue trajectory of our clients from launch to 
            <span className="text-green-400 font-semibold"> 5x ROI</span>
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Animated Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 via-green-500 via-purple-500 to-emerald-500 opacity-20"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-cyan-500 via-green-500 via-purple-500 to-emerald-500 opacity-40 animate-shimmer"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-7 md:gap-8 mb-16 lg:mb-20">
            {timeline.map((phase, index) => {
              const isHighlight = phase.highlight;
              const colors = getColorClasses(phase.color);
              
              return (
                <div 
                  key={index} 
                  className="relative group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Timeline dot with pulse animation */}
                  <div className={`hidden lg:flex absolute top-20 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full ${colors.dot} items-center justify-center z-10 ring-4 transition-all duration-300 group-hover:scale-125 group-hover:ring-8`}>
                    <CheckCircle2 className="h-5 w-5 text-white" />
                    {isHighlight && (
                      <div className="absolute inset-0 rounded-full bg-inherit animate-ping opacity-75"></div>
                    )}
                  </div>

                  <Card className={`relative p-6 h-full min-h-[320px] sm:min-h-[380px] md:min-h-[420px] ${colors.bg} border-2 ${colors.border} backdrop-blur-sm hover:scale-[1.02] transition-all duration-500 mt-0 lg:mt-28 overflow-hidden group ${colors.glow}`}>
                    {/* Shine effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </div>

                    {/* Highlight badge */}
                    {isHighlight && (
                      <div className="absolute top-3 right-3 px-3 py-1 bg-green-500/20 border border-green-500/30 rounded-full">
                        <span className="text-xs font-bold text-green-400 flex items-center gap-1">
                          <Sparkles className="h-3 w-3" />
                          Break-Even
                        </span>
                      </div>
                    )}

                    <div className="relative z-10">
                      {/* Icon with animated background */}
                      <div className={`w-14 h-14 rounded-xl ${colors.icon} flex items-center justify-center mb-4 relative overflow-hidden group-hover:scale-110 transition-transform duration-300`}>
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        {phase.icon}
                      </div>

                      {/* Month */}
                      <div className={`text-sm font-bold mb-2 ${colors.text} uppercase tracking-wider`}>
                        {phase.month}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-white mb-4 leading-tight group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                        {phase.title}
                      </h3>

                      {/* Revenue with enhanced styling */}
                      <div className={`text-3xl font-extrabold mb-6 ${colors.text} tracking-tight`}>
                        {phase.revenue}
                      </div>

                      {/* Activities */}
                      <ul className="space-y-3">
                        {phase.activities.map((activity, idx) => (
                          <li 
                            key={idx} 
                            className="flex items-start gap-2 text-sm text-slate-300 group/item hover:text-white transition-colors duration-200"
                          >
                            <CheckCircle2 className={`h-4 w-4 mt-0.5 flex-shrink-0 ${colors.text} group-hover/item:scale-125 transition-transform duration-200`} />
                            <span className="leading-snug">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Corner accent */}
                    <div className={`absolute bottom-0 right-0 w-20 h-20 ${colors.icon} rounded-tl-full opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA with enhanced design */}
        <div className="text-center mt-32 lg:mt-40 xl:mt-48 px-4">
          <Card className="relative block w-full max-w-4xl mx-auto p-5 sm:p-6 md:p-8 lg:p-10 bg-gradient-to-br from-slate-800/90 via-slate-900/90 to-slate-800/90 border-2 border-blue-500/30 backdrop-blur-xl overflow-hidden group hover:border-purple-500/50 transition-all duration-700 shadow-[0_20px_80px_rgba(0,0,0,0.3),0_0_60px_rgba(59,130,246,0.15)] hover:shadow-[0_30px_100px_rgba(0,0,0,0.4),0_0_100px_rgba(147,51,234,0.25)] hover:scale-[1.01] z-20 rounded-2xl">
            {/* Animated mesh gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-green-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-700"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 animate-shimmer"></div>
            
            {/* Decorative orbs */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/30 transition-all duration-700 -mr-24 -mt-24"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-700 -ml-24 -mb-24"></div>
            
            {/* Floating sparkles */}
            <div className="absolute top-4 right-4">
              <Sparkles className="h-5 w-5 text-blue-400/80 animate-pulse drop-shadow-lg" />
            </div>
            <div className="absolute bottom-4 left-4">
              <Sparkles className="h-4 w-4 text-purple-400/80 animate-pulse drop-shadow-lg" style={{ animationDelay: '1s' }} />
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-400/40 text-green-300 px-4 py-2 rounded-full mb-5 text-sm font-bold shadow-lg shadow-green-500/20">
                <TrendingUp className="h-4 w-4" />
                Average 5x ROI in 12 Months
              </div>
              
              <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4 leading-tight">
                Ready to Start Your{' '}
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-green-400 bg-clip-text text-transparent animate-gradient">
                  Growth Journey?
                </span>
              </h3>
              
              <p className="text-base sm:text-lg text-slate-200 mb-7 max-w-2xl mx-auto leading-relaxed">
                Most clients <span className="text-green-400 font-bold">break even by month 4</span> and achieve{' '}
                <span className="text-blue-400 font-bold">5x ROI by year's end</span>. 
                Let's create your custom growth roadmap.
              </p>
              
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl text-base sm:text-lg font-bold hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(59,130,246,0.4)] hover:shadow-[0_0_70px_rgba(147,51,234,0.6)] group/btn bg-[length:200%_100%] hover:bg-[position:100%_0] animate-shimmer"
              >
                <Target className="h-5 w-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                Get Your Free Growth Plan
                <TrendingUp className="h-5 w-5 group-hover/btn:translate-x-2 transition-transform duration-300" />
              </Link>

              {/* Trust indicators */}
              <div className="mt-7 flex flex-wrap items-center justify-center gap-6 text-sm text-slate-300">
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="font-medium">No long-term contracts</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="font-medium">30-day money-back guarantee</span>
                </div>
                <div className="flex items-center gap-2 hover:text-green-400 transition-colors duration-200">
                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                  <span className="font-medium">Free consultation</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
