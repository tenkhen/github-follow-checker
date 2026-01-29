import {
  faArrowRight,
  faChartLine,
  faCircleCheck,
  faCircleDot,
  faWandSparkles,
  faWarning,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function HeroSection({ diff1, diff2, followers, following }) {
  const handleScroll = () => {
    const element = document.getElementById("checker");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero-section" className="relative overflow-hidden h-150">
      <div className="absolute inset-0 bg-linear-to-br from-indigo-600/10 via-purple-600/10 to-pink-600/10"></div>
      <div className="max-w-7xl mx-auto px-8 py-24 relative z-10">
        <div className="grid grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center space-x-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FontAwesomeIcon icon={faWandSparkles} />
              <span>Free & Open Source</span>
            </div>
            <h2 className="text-6xl font-bold text-slate-900 leading-tight mb-6">
              Keep Your GitHub
              <br />
              <span className="bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Followers in Sync
              </span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
              Discover who&apos;s not following you back and maintain a balanced
              follower-following ratio. No more one-sided connections.
            </p>
            <div className="flex items-center space-x-4">
              <button
                onClick={handleScroll}
                className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 cursor-pointer">
                <span>Start Checking</span>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                {/* <span className="text-xs text-slate-400 font-mono">
                  github.com/followsync
                </span> */}
              </div>
              <div className="space-y-4">
                <div className="bg-linear-to-r from-indigo-50 to-purple-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-700">
                      Your Stats
                    </span>
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="text-indigo-600"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-indigo-600">
                        {followers.length}
                      </div>
                      <div className="text-sm text-slate-600">Followers</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-purple-600">
                        {following.length}
                      </div>
                      <div className="text-sm text-slate-600">Following</div>
                    </div>
                  </div>
                </div>

                {/* Not balanced */}
                {(diff1.length > 0 || diff2.length > 0) && (
                  <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-xl flex items-center space-x-3">
                    <FontAwesomeIcon
                      icon={faWarning}
                      className="text-yellow-600 text-2xl"
                    />
                    <div>
                      <div className="font-semibold text-yellow-900">
                        Not Quite Balanced
                      </div>
                      <div className="text-sm text-yellow-700">
                        There&apos;s a mismatch between your followers and
                        followings. Consider reviewing.
                      </div>
                    </div>
                  </div>
                )}

                {/* Balanced */}
                {diff1.length === 0 &&
                  diff2.length === 0 &&
                  followers.length > 0 &&
                  following.length > 0 && (
                    <div className="bg-green-50 border-2 border-green-200 p-4 rounded-xl flex items-center space-x-3">
                      <FontAwesomeIcon
                        icon={faCircleCheck}
                        className="text-green-600 text-2xl"
                      />
                      <div>
                        <div className="font-semibold text-green-900">
                          Perfect Balance!
                        </div>
                        <div className="text-sm text-green-700">
                          You and your followers are in sync
                        </div>
                      </div>
                    </div>
                  )}

                {/* No follower and following yet */}
                {/* {diff1.length === 0 &&
                  diff2.length === 0 &&
                  followers.length === 0 &&
                  following.length === 0 && (
                    <div className="bg-gray-50 border-2 border-gray-200 p-4 rounded-xl flex items-center space-x-3">
                      <FontAwesomeIcon
                        icon={faCircleDot}
                        className="text-gray-600 text-2xl"
                      />
                      <div>
                        <div className="font-semibold text-gray-900">
                          Fresh Start
                        </div>
                        <div className="text-sm text-gray-700">
                          This account has no followers or followings yet.
                          Everything starts here.
                        </div>
                      </div>
                    </div>
                  )} */}
              </div>
            </div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-linear-to-br from-indigo-400 to-purple-400 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-linear-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
