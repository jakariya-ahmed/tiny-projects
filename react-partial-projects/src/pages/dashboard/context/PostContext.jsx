import { createContext, useContext, useState, useEffect } from "react";

const PostContext = createContext();

export function PostProvider({ children }) {
  const [posts, setPosts] = useState(() => {
    // This runs only on first mount
    return JSON.parse(localStorage.getItem("posts")) || [];
  });

  // Keep localStorage in sync with posts
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  const addPost = (post) => {
    setPosts((prev) => [...prev, { id: Date.now(), ...post }]);
  };

  const updatePost = (id, updatedPost) => {
    setPosts((prev) => prev.map((p) => (p.id === id ? { ...p, ...updatedPost } : p)));
  };

  const deletePost = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, deletePost }}>
      {children}
    </PostContext.Provider>
  );
}


export function usePosts() {
  return useContext(PostContext);
}
