export async function fetchContributor(username) {
  const response = await fetch(`https://api.github.com/users/${username}`);

  if (response.status === 403 || response.status === 429) {
    throw new Error("API Rate Limit exceeded. Please wait a moment.");
  }

  if (!response.ok) {
    throw new Error("GitHub user not found.");
  }

  return await response.json();
}

export async function fetchRepositories(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
  );

  if (response.status === 403 || response.status === 429) {
    throw new Error("API Rate Limit exceeded. Please wait a moment.");
  }

  if (!response.ok) {
    throw new Error("Unable to fetch repositories.");
  }

  return await response.json();
}

export async function updateInitiative(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        id: id,
        title: "Updated Initiative [UPDATED]",
        body: "This initiative has been updated.",
        userId: 1,
      }),
    },
  );

  if (!response.ok) {
    throw new Error("Failed to update initiative.");
  }

  return await response.json();
}

export async function deleteInitiative(id) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts/" + id,
    {
      method: "DELETE",
    },
  );

  if (!response.ok) {
    throw new Error("Failed to delete initiative.");
  }

  return true;
}
export async function fetchFeed(page, limit) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch posts.");
  }

  return await response.json();
}
