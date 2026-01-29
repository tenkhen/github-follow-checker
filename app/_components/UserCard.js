"use client";

import { faUserMinus, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function UserCard({ user, type, onFollow, onUnfollow }) {
  const [fullName, setFullName] = useState(null);

  useEffect(() => {
    const fetchName = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${user.login}`);
        const data = await res.json();
        setFullName(data.name);
      } catch (e) {
        // console.error("Failed to fetch name", e);
      }
    };

    fetchName();
  }, [user.login]);

  return (
    <div>
      <div className="bg-slate-50 p-4 rounded-xl flex items-center justify-between hover:bg-slate-100 transition-colors">
        <div className="flex items-center space-x-4">
          <Image
            src={user.avatar_url}
            alt={user.login}
            width={48}
            height={48}
            className="rounded-full"
          />
          <div className="truncate">
            <div className="font-semibold text-slate-900 truncate">
              {fullName}
            </div>
            <Link
              href={user.html_url}
              target="_blank"
              className="text-sm text-blue-400 hover:underline truncate">
              @{user.login}
            </Link>
          </div>
        </div>

        {type === "follow" && (
          <button
            onClick={() => onFollow(user.login)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 cursor-pointer">
            <FontAwesomeIcon icon={faUserPlus} />
            <span>Follow</span>
          </button>
        )}

        {type === "unfollow" && (
          <button
            onClick={() => onUnfollow(user.login)}
            className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2 cursor-pointer">
            <FontAwesomeIcon icon={faUserMinus} />
            <span>Unfollow</span>
          </button>
        )}
      </div>
    </div>
  );
}
