import React, { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import RateComparisonSection from "@/components/RateComparisonSection";
import Footer from "@/components/Footer";
import { FORM_LINK } from "@/lib/utils";

const Index = () => {
  useEffect(() => {
    // Set page title
    document.title = "InstantGlobe | Send Money to India Instantly";
  }, []);

  return (
    <div className="min-h-screen overflow-x-hidden bg-theme-dark font-poppins">
      <Navbar />
      <HeroSection />
      <RateComparisonSection />

      {/* Waitlist Section - Moved to the end and given an ID for scrolling */}
      <section id="waitlist-section" className="py-16 relative overflow-hidden">
        <div
          className="container max-w-7xl mx-auto px-4 sm:px-6 pb-20 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-md border border-white/10 rounded-xl p-6 md:p-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Join Our Waitlist
              </h2>
              <p className="text-gray-300 mb-6">
                Be the first to know when we launch. Get early access and
                exclusive offers.
              </p>

              <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <button
                  type="submit"
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-6 py-2 font-medium transition-colors duration-200 flex items-center justify-center"
                  onClick={() => window.open(FORM_LINK, "_blank")}
                >
                  Join Now
                  <svg
                    className="ml-2 h-5 w-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </form>
              {/* 
              <div className="mt-4 flex items-center justify-center text-sm text-gray-400">
                <svg
                  className="h-4 w-4 mr-2 text-indigo-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.75 12.75L10 15.25L16.25 8.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span>We'll never share your email with anyone else</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
