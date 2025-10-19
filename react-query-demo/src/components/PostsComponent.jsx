import React from "react";
import { useQuery } from "@tanstack/react-query";

// Fetch posts from API
const fetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

const PostsComponent = () => {
  // ✅ Added configuration for caching and stale time
  const {
    data: posts,
    error,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,

    // ✅ React Query advanced settings:
    cacheTime: 1000 * 60 * 10, // Cache lasts 10 minutes
    staleTime: 1000 * 60 * 1, // Data considered fresh for 1 minute
    refetchOnWindowFocus: false, // Don’t refetch when switching back to tab
    keepPreviousData: true, // Keep old data while fetching new one
  });

  // ✅ Loading and error states
  if (isLoading) return <p>Loading posts...</p>;
  if (isError) return <p style={{ color: "red" }}>Error: {error.message}</p>;

  return (
    <div>
      <h2>React Query Posts</h2>
      <button onClick={refetch}>🔁 Refetch Posts</button>

      <ul>
        {posts.slice(0, 10).map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostsComponent;
