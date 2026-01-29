"use client";

import { Logo } from "@/public/logo/logoSvg";
import { useEffect, useState } from "react";

export default function Header() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastY = window.scrollY;

    const onScroll = () => {
      const currentY = window.scrollY;
      setHidden(currentY > lastY && currentY > 80);
      lastY = currentY;
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="header"
      className={`
        sticky top-0 z-50
        bg-white/80 backdrop-blur-lg border-b border-slate-200
        transition-transform duration-300
        ${hidden ? "-translate-y-full" : "translate-y-0"}
      `}>
      <div className="max-w-7xl mx-auto px-8 py-5">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-11 h-11 flex justify-center items-center bg-linear-to-br from-indigo-600 to-purple-600 rounded-xl">
              <Logo
                width="30"
                height="200"
                strokeWidth="5px"
                className="text-white"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-linear-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                FollowSync
              </h1>
              <p className="text-xs text-slate-500">GitHub Follow Checker</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
