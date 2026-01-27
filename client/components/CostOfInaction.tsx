import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, TrendingDown, Users, ShoppingCart, Clock } from 'lucide-react';
import { Card } from '@/components/ui/card';

export function CostOfInaction() {
  const costs = [
    {
      icon: TrendingDown,
      title: 'Lost Revenue',
      amount: '$3.6K - $12K',
      period: 'per month',
      description: 'Potential customers choosing competitors with better online presence',
      color: 'text-red-400',
      iconBg: 'bg-red-500/10',
      border: 'border-red-500/20',
    },
    {
      icon: Users,
      title: 'Missed Leads',
      amount: '50-200',
      period: 'per month',
      description: 'Visitors leaving due to poor user experience and slow load times',
      color: 'text-orange-400',
      iconBg: 'bg-orange-500/10',
      border: 'border-orange-500/20',
    },
    {
      icon: ShoppingCart,
      title: 'Low Conversions',
      amount: '60-80%',
      period: 'lower than average',
      description: 'Outdated design and unclear messaging reducing sales',
      color: 'text-amber-400',
      iconBg: 'bg-amber-500/10',
      border: 'border-amber-500/20',
    },
    {
      icon: Clock,
      title: 'Wasted Time',
      amount: '20+ hours',
      period: 'per week',
      description: 'Manual processes that could be automated with proper tools',
      color: 'text-yellow-400',
      iconBg: 'bg-yellow-500/10',
      border: 'border-yellow-500/20',
    },
  ];

  return (
    <div className="bg-slate-900 py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-red-500/10 text-red-400 px-6 py-3 rounded-full mb-6 border border-red-500/20">
            <AlertTriangle className="h-5 w-5" />
            <span className="font-semibold">The Real Cost of Waiting</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            What Your Business is Losing Right Now
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Every day without a professional website costs your business real money. 
            Here's what you're missing out on:
          </p>
        </div>

        {/* Cost Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {costs.map((cost, index) => {
            const Icon = cost.icon;
            return (
              <Card key={index} className={`p-6 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 hover-lift transition-all group border ${cost.border}`}>
                <div className={`${cost.iconBg} w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                  <Icon className={`h-7 w-7 ${cost.color}`} />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{cost.title}</h3>
                <div className="mb-3">
                  <span className={`text-3xl font-bold ${cost.color}`}>{cost.amount}</span>
                  <span className="text-slate-400 text-sm block mt-1">{cost.period}</span>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">{cost.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Total Impact */}
        <Card className="p-10 bg-slate-800/50 backdrop-blur-sm hover:bg-slate-800/70 border-2 border-red-500/30 hover-lift">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-6">
              Total Annual Impact
            </h3>
            <div className="text-6xl font-bold text-red-400 mb-6">
              $43K - $144K
            </div>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Potential revenue lost over 12 months without investing in your digital presence
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-premium inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/25"
              >
                Stop Losing Money - Get Started
              </Link>
              <Link
                to="/services"
                className="bg-slate-700/50 hover:bg-slate-700/70 inline-flex items-center justify-center gap-2 text-white px-8 py-4 rounded-xl text-lg font-semibold border border-slate-600/50 hover-lift backdrop-blur-sm"
              >
                See Our Solutions
              </Link>
            </div>
          </div>
        </Card>

        {/* Bottom Text */}
        <div className="text-center mt-10">
          <p className="text-slate-300 text-lg">
            <span className="text-white font-semibold">Act now:</span> Most clients break even within 3-4 months 
            and see 5x ROI by the end of year one.
          </p>
        </div>
      </div>
    </div>
  );
}
