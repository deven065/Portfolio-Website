import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, DollarSign, Calendar, Target } from 'lucide-react';

interface Industry {
  name: string;
  avgConversionImprovement: number;
  avgRevenueMultiplier: number;
}

const industries: Industry[] = [
  { name: 'E-commerce', avgConversionImprovement: 0.45, avgRevenueMultiplier: 4.2 },
  { name: 'Professional Services', avgConversionImprovement: 0.38, avgRevenueMultiplier: 3.8 },
  { name: 'SaaS/Technology', avgConversionImprovement: 0.52, avgRevenueMultiplier: 5.1 },
  { name: 'Real Estate', avgConversionImprovement: 0.35, avgRevenueMultiplier: 3.5 },
  { name: 'Healthcare', avgConversionImprovement: 0.40, avgRevenueMultiplier: 4.0 },
  { name: 'Restaurant/Hospitality', avgConversionImprovement: 0.42, avgRevenueMultiplier: 3.9 },
  { name: 'Manufacturing', avgConversionImprovement: 0.33, avgRevenueMultiplier: 3.2 },
  { name: 'Education', avgConversionImprovement: 0.36, avgRevenueMultiplier: 3.6 },
];

export function ROICalculator() {
  const [investment, setInvestment] = useState([3000]);
  const [currentRevenue, setCurrentRevenue] = useState([50000]);
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>(industries[0]);
  const [projectedROI, setProjectedROI] = useState(0);
  const [breakEvenMonths, setBreakEvenMonths] = useState(0);
  const [yearOneRevenue, setYearOneRevenue] = useState(0);

  useEffect(() => {
    calculateROI();
  }, [investment, currentRevenue, selectedIndustry]);

  const calculateROI = () => {
    const investmentAmount = investment[0];
    const currentMonthlyRevenue = currentRevenue[0] / 12;
    
    // Calculate additional revenue from conversion improvements
    const additionalMonthlyRevenue = currentMonthlyRevenue * selectedIndustry.avgConversionImprovement;
    const yearOneAdditionalRevenue = additionalMonthlyRevenue * 12;
    
    // Calculate ROI
    const roi = ((yearOneAdditionalRevenue - investmentAmount) / investmentAmount) * 100;
    
    // Calculate break-even months
    const breakEven = Math.ceil(investmentAmount / additionalMonthlyRevenue);
    
    // Calculate year one total revenue increase
    const revenueIncrease = yearOneAdditionalRevenue;
    
    setProjectedROI(Math.round(roi));
    setBreakEvenMonths(breakEven);
    setYearOneRevenue(Math.round(revenueIncrease));
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="bg-slate-900 py-24 sm:py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 bg-blue-500/10 text-blue-400 px-6 py-3 rounded-full mb-6 border border-blue-500/20">
            <TrendingUp className="h-5 w-5" />
            <span className="font-semibold">Interactive Calculator</span>
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            Calculate Your Potential ROI
          </h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            See how much revenue you could generate with a professional website
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Input Section */}
          <Card className="p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 hover-lift">
            <h3 className="text-2xl font-bold mb-8 text-white">Your Business Details</h3>
            
            <div className="space-y-8">
              {/* Industry Selection */}
              <div>
                <Label className="text-base font-semibold mb-3 block text-white">Industry</Label>
                <Select
                  value={selectedIndustry.name}
                  onValueChange={(value) => {
                    const industry = industries.find((i) => i.name === value);
                    if (industry) setSelectedIndustry(industry);
                  }}
                >
                  <SelectTrigger className="w-full bg-slate-900/50 border-slate-600/50 text-white hover:bg-slate-900/70">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    {industries.map((industry) => (
                      <SelectItem key={industry.name} value={industry.name}>
                        {industry.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Investment Amount */}
              <div>
                <Label className="text-base font-semibold mb-3 block text-white">
                  Investment Amount: <span className="text-blue-400">{formatCurrency(investment[0])}</span>
                </Label>
                <Slider
                  value={investment}
                  onValueChange={setInvestment}
                  min={1000}
                  max={50000}
                  step={500}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-slate-400 mt-2">
                  <span>$1K</span>
                  <span>$50K</span>
                </div>
              </div>

              {/* Current Annual Revenue */}
              <div>
                <Label className="text-base font-semibold mb-3 block text-white">
                  Current Annual Revenue: <span className="text-blue-400">{formatCurrency(currentRevenue[0])}</span>
                </Label>
                <Slider
                  value={currentRevenue}
                  onValueChange={setCurrentRevenue}
                  min={10000}
                  max={1000000}
                  step={10000}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-slate-400 mt-2">
                  <span>$10K</span>
                  <span>$1M</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Results Section */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-2xl shadow-emerald-500/20 hover-lift border-0">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Projected ROI</h3>
              </div>
              <div className="text-6xl font-bold mb-2">{projectedROI}%</div>
              <p className="text-emerald-50 text-lg">Return on Investment in Year 1</p>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border border-blue-500/30 hover:bg-slate-800/70 hover-lift transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-blue-500/10 p-2 rounded-lg">
                  <DollarSign className="h-5 w-5 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Additional Revenue</h4>
              </div>
              <div className="text-3xl font-bold text-blue-400 mb-1">
                {formatCurrency(yearOneRevenue)}
              </div>
              <p className="text-slate-300">Expected in first 12 months</p>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border border-purple-500/30 hover:bg-slate-800/70 hover-lift transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-purple-500/10 p-2 rounded-lg">
                  <Calendar className="h-5 w-5 text-purple-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Break-Even Time</h4>
              </div>
              <div className="text-3xl font-bold text-purple-400 mb-1">
                {breakEvenMonths} {breakEvenMonths === 1 ? 'Month' : 'Months'}
              </div>
              <p className="text-slate-300">Time to recover your investment</p>
            </Card>

            <Card className="p-6 bg-slate-800/50 backdrop-blur-sm border border-cyan-500/30 hover:bg-slate-800/70 hover-lift transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-cyan-500/10 p-2 rounded-lg">
                  <Target className="h-5 w-5 text-cyan-400" />
                </div>
                <h4 className="text-lg font-bold text-white">Industry Average</h4>
              </div>
              <p className="text-slate-300">
                <span className="font-bold text-cyan-400">
                  {Math.round(selectedIndustry.avgConversionImprovement * 100)}%
                </span>{' '}
                conversion improvement typical for {selectedIndustry.name}
              </p>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-slate-300 text-lg mb-8">
            These projections are based on real client data from similar businesses in your industry.
          </p>
          <Link
            to="/contact"
            className="btn-premium inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold shadow-lg shadow-blue-500/25"
          >
            <DollarSign className="h-5 w-5" />
            Get Your Custom ROI Analysis
          </Link>
        </div>
      </div>
    </div>
  );
}
