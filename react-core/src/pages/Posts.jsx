import { useEffect, useState } from "react";
import AllPost from "../components/post/AllPost";
import CreatePost from "../components/post/CreatePost";

export default function Posts() {
  // Load posts form local storage     
  const[posts, setPosts] = useState(() => {
    const saved = localStorage.getItem('posts');
    return saved ? JSON.parse(saved) : [];  
  });
  // 1️⃣ Load once on first render
  // useEffect(() => {
  //   const savedPosts = localStorage.getItem('posts');
  // if(savedPosts) {
  //   setPosts(JSON.parse(savedPosts))
  // }

  // }, []);


  // Save on every posts change
  useEffect(() => {
    localStorage.setItem('posts', JSON.stringify(posts));
  });

    // Add new post 
    const addPost = (newPost) => {
      setPosts((prev) => [...prev, newPost]);
    }

    return(
        <div className="max-w-3xl mx-auto">
            <h1>Posts Page</h1>
            <CreatePost addPost={addPost} posts={posts} />
            <AllPost posts={posts}/>
        </div>
    );
}