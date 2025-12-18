import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <Layout>
      <div className="relative flex flex-col items-center justify-center min-h-[60vh] px-6 sm:px-8 lg:px-12 py-20 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="text-center space-y-6 max-w-2xl">
          <div className="text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            404
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold">Page Not Found</h1>
          <p className="text-xl text-slate-300">
            Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
          </p>

          <div className="pt-4">
            <Link to="/">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
