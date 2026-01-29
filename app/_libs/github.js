const GITHUB_TOKEN = process.env.NEXT_PUBLIC_GITHUB_PAT;

export const fetchUserInfo = async () => {
  const res = await fetch("https://api.github.com/user", {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });

  return res.json();
};

export const fetchAllPages = async (url) => {
  let results = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    const res = await fetch(`${url}?per_page=100&page=${page}`);

    if (!res.ok) {
      const errorData = await res.json();
      const message = errorData?.message || "Unknown error";
      const status = res.status;

      // Throw structured error
      const err = new Error(message);
      err.status = status;
      throw err;
    }

    const data = await res.json();

    if (!Array.isArray(data)) break;

    results = [...results, ...data];
    hasMore = data.length === 100;
    page++;
  }

  return results;
};

export const followUser = async (targetUsername) => {
  await fetch(`https://api.github.com/user/following/${targetUsername}`, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });
};

export const unfollowUser = async (targetUsername) => {
  await fetch(`https://api.github.com/user/following/${targetUsername}`, {
    method: "DELETE",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      Accept: "application/vnd.github+json",
    },
  });
};
