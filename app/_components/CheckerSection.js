"use client";

import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

export default function CheckerSection({ onCompare, error, setError }) {
  const [username, setUsername] = useState("");

  const handleCompareClick = () => {
    setError("");

    onCompare(username);

    if (username.length === 0 || error) {
      setError("Username cannot be blank");
      return;
    }

    const element = document.getElementById("results-section");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="checker"
      className="py-24 bg-linear-to-br from-indigo-600 via-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto px-8">
        <div className="text-center mb-12">
          <h3 className="text-5xl font-bold text-white mb-4">
            Check Your GitHub Network
          </h3>
          <p className="text-xl text-indigo-100">
            Enter your GitHub username to get started
          </p>
        </div>
        <div className="bg-white rounded-2xl shadow-2xl p-12">
          <div className="flex items-center space-x-4 mb-5">
            <div className="flex-1">
              <label className="block text-sm font-semibold text-slate-700 mb-3">
                GitHub Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-slate-400 text-xl"
                  />
                </div>
                <input
                  type="text"
                  id="github-username"
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="octocat"
                  className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none text-lg placeholder:text-slate-400"
                />
              </div>
            </div>
            <div className="pt-8">
              <button
                id="check-button"
                onClick={handleCompareClick}
                className="bg-linear-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <span>Analyze</span>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </div>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </div>
      </div>
    </section>
  );
}
