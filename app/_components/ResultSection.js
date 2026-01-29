"use client";

import {
  faCircleCheck,
  faTriangleExclamation,
  faUserPlus,
  faUserSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserCard from "./UserCard";
import { followUser, unfollowUser } from "../_libs/github";

export default function ResultSection({
  account,
  followers,
  following,
  setFollowing,
  diff1,
  setDiff1,
  diff2,
  setDiff2,
}) {
  const handleFollowUser = async (targetUsername) => {
    await followUser(targetUsername);

    // instant fake update:
    setFollowing((prev) => [...prev, { login: targetUsername }]);
    setDiff2((prev) => prev.filter((u) => u.login !== targetUsername));
  };

  const handleUnFollowUser = async (targetUsername) => {
    await unfollowUser(targetUsername);

    // instant fake update:
    setFollowing((prev) => prev.filter((u) => u.login !== targetUsername));
    setDiff1((prev) => prev.filter((u) => u.login !== targetUsername));
  };

  return (
    <section id="results-section" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-8">
        <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl p-8 mb-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="bg-white rounded-full p-1 shadow-lg">
                <img
                  src={
                    account ? account?.avatar_url : "/avatar/github-octocat.png"
                  }
                  alt="User Avatar"
                  className="w-20 h-20 rounded-full"
                />
              </div>
              <div>
                <h4 className="text-3xl font-bold text-slate-900 mb-1">
                  {account ? `@${account?.login}` : ""}
                </h4>
                <p className="text-slate-600">{account?.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-600 mb-1">
                  {followers.length}
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  Followers
                </div>
              </div>
              <div className="w-px h-16 bg-slate-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-1">
                  {following.length}
                </div>
                <div className="text-sm text-slate-600 font-semibold">
                  Following
                </div>
              </div>
            </div>
          </div>
        </div>

        {followers.length !== 0 && following.length !== 0 ? (
          diff1.length === 0 && diff2.length === 0 ? (
            <div className="bg-linear-to-r from-green-500 to-emerald-500 rounded-2xl p-8 mb-12 text-center shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <FontAwesomeIcon
                  icon={faCircleCheck}
                  className="text-white text-4xl"
                />
                <h4 className="text-4xl font-bold text-white">
                  All Good! Perfect Balance Achieved
                </h4>
              </div>
              <p className="text-green-50 text-lg">
                You and your followers are in sync. Your network is perfectly
                balanced!
              </p>
            </div>
          ) : (
            <div className="bg-linear-to-r from-yellow-400 to-amber-500 rounded-2xl p-8 mb-12 text-center shadow-xl">
              <div className="flex items-center justify-center space-x-4 mb-3">
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  className="text-white text-4xl"
                />
                <h4 className="text-4xl font-bold text-white">
                  Network Imbalance Detected
                </h4>
              </div>
              <p className="text-yellow-50 text-lg">
                Your follower and following counts don&apos;t match.
                Something&apos;s off — might be time for a little cleanup.
              </p>
            </div>
          )
        ) : (
          ""
        )}

        <div className="grid grid-cols-2 gap-8">
          <div id="not-following-back-section">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-red-100 p-3 rounded-xl">
                    <FontAwesomeIcon
                      icon={faUserSlash}
                      className="text-red-600 text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      Not Following You Back
                    </h4>
                    <p className="text-sm text-slate-500">
                      Users you follow who don&apos;t follow back
                    </p>
                  </div>
                </div>
                <div className="bg-red-100 text-red-700 px-4 py-2 rounded-full font-bold">
                  {diff1.length}
                </div>
              </div>
              <div className="space-y-3 max-h-150 overflow-y-auto">
                {diff1.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    type="unfollow"
                    onUnfollow={handleUnFollowUser}
                  />
                ))}
              </div>
            </div>
          </div>

          <div id="not-following-them-section">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-slate-200">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-3 rounded-xl">
                    <FontAwesomeIcon
                      icon={faUserPlus}
                      className="fa-solid fa-user-plus text-blue-600 text-xl"
                    />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-slate-900">
                      You&apos;re Not Following Back
                    </h4>
                    <p className="text-sm text-slate-500">
                      Users who follow you that you don&apos;t follow
                    </p>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full font-bold">
                  {diff2.length}
                </div>
              </div>
              <div className="space-y-3 max-h-150 overflow-y-auto">
                {diff2.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    type="follow"
                    onFollow={handleFollowUser}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
