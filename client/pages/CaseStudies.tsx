import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-sm">DDL</span>
          </div>
          <span className="text-[#0F172A] font-semibold tracking-tight">
            Deven Digital Labs
          </span>
        </div>
      </nav>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-6 sm:px-8 lg:px-12 py-20 sm:py-28 lg:py-32 max-w-4xl mx-auto min-h-[calc(100vh-8rem)]">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#0F172A]">
            Case Studies
          </h1>
          <p className="text-lg text-[#64748B]">
            This page is coming soon. Our case studies showcase the successful
            projects we've completed for innovative companies.
          </p>
          <div className="pt-8">
            <Link to="/">
              <Button
                size="lg"
                className="bg-[#2563EB] hover:bg-[#2563EB]/90 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
