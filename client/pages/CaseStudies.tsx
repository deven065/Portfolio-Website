import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center">
            <span className="text-slate-950 font-bold text-sm">DDL</span>
          </div>
          <span className="text-white font-semibold tracking-tight">
            Deven Digital Labs
          </span>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32 max-w-4xl mx-auto min-h-[calc(100vh-8rem)]">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-white">
            Case Studies
          </h1>
          <p className="text-lg text-slate-300">
            This page is coming soon. Our case studies showcase the successful
            projects we've completed for innovative companies.
          </p>
          <div className="pt-8">
            <Link to="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
