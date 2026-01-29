"use client";

import { useEffect, useState } from "react";
import Header from "./_components/Header";
import HeroSection from "./_components/HeroSection";
import HowItWorksSection from "./_components/HowItWorksSection";
import CheckerSection from "./_components/CheckerSection";
import ResultSection from "./_components/ResultSection";
import { fetchAllPages, fetchUserInfo } from "./_libs/github";

export default function GitHubComparePage() {
  const [account, setAccount] = useState(null);
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [diff1, setDiff1] = useState([]);
  const [diff2, setDiff2] = useState([]);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   loadAccountInfo();
  // }, []);

  // useEffect(() => {
  //   handleCompare();
  // }, []);

  const loadAccountInfo = async () => {
    const data = await fetchUserInfo();

    setAccount(data);
  };

  const handleCompare = async (username) => {
    setError("");
    setDiff1([]);
    setDiff2([]);

    // If you want to load all info automatically without inputting username, change "username" to "account.login"
    try {
      const [f1, f2] = await Promise.all([
        fetchAllPages(`https://api.github.com/users/${username}/followers`),
        fetchAllPages(`https://api.github.com/users/${username}/following`),
      ]);

      if (f1.message || f2.message) {
        setError("User not found or rate limited.");
        return;
      }

      setFollowers(f1);
      setFollowing(f2);

      const followersSet = new Set(f1.map((user) => user.login));
      const followingSet = new Set(f2.map((user) => user.login));

      const onlyFollowing = f2.filter((user) => !followersSet.has(user.login));
      const onlyFollowers = f1.filter((user) => !followingSet.has(user.login));

      setDiff1(onlyFollowing);
      setDiff2(onlyFollowers);

      loadAccountInfo();
    } catch (err) {
      setAccount(null);
      setFollowers([]);
      setFollowing([]);

      if (err.status === 404) {
        setError("GitHub user not found.");
      } else {
        setError("Something went wrong.");
      }
    }
  };

  return (
    <div className="bg-linear-to-br from-slate-50 via-indigo-50 to-purple-50 font-sans">
      <Header />
      <HeroSection
        diff1={diff1}
        diff2={diff2}
        followers={followers}
        following={following}
      />
      <HowItWorksSection />
      <CheckerSection
        onCompare={handleCompare}
        error={error}
        setError={setError}
      />
      <ResultSection
        account={account}
        followers={followers}
        following={following}
        setFollowing={setFollowing}
        diff1={diff1}
        setDiff1={setDiff1}
        diff2={diff2}
        setDiff2={setDiff2}
      />
    </div>
  );
}
