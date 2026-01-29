import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <FontAwesomeIcon icon={faLightbulb} />
            <span>Simple Process</span>
          </div>
          <h3 className="text-5xl font-bold text-slate-900 mb-4">
            How It Works
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Three simple steps to analyze your GitHub network
          </p>
        </div>
        <div className="grid grid-cols-3 gap-12 relative">
          <div className="absolute top-1/4 left-0 right-0 h-1 bg-linear-to-r from-indigo-200 via-purple-200 to-pink-200 -z-10"></div>
          <div className="text-center relative">
            <div className="bg-linear-to-br from-indigo-500 to-purple-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white text-3xl font-bold">1</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">
              Enter Username
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Simply type in your GitHub username in the input field below. No
              login or authentication required.
            </p>
          </div>
          <div className="text-center relative">
            <div className="bg-linear-to-br from-purple-500 to-pink-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white text-3xl font-bold">2</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">
              Analyze Data
            </h4>
            <p className="text-slate-600 leading-relaxed">
              Our system fetches your followers and following lists from
              GitHub&apos;s API and compares them instantly.
            </p>
          </div>
          <div className="text-center relative">
            <div className="bg-linear-to-br from-pink-500 to-red-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl">
              <span className="text-white text-3xl font-bold">3</span>
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-3">
              Take Action
            </h4>
            <p className="text-slate-600 leading-relaxed">
              View detailed results and take action with one-click
              follow/unfollow buttons to balance your network.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
