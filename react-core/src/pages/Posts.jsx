import { useEffect, useState } from "react";
import AllPost from "../components/post/AllPost";
import CreatePost from "../components/post/CreatePost";
import { PostContext } from "../context/PostContext";
import PostsProvider from "../hooks/usePostsContext";

export default function Posts() {
  // Load posts form local storage without custom hook     
  // const[posts, setPosts] = useState(() => {
  //   const saved = localStorage.getItem('posts');
  //   return saved ? JSON.parse(saved) : [];  
  // });
  // 1️⃣ Load once on first render without custom hook
  // useEffect(() => {
  //   const savedPosts = localStorage.getItem('posts');
  // if(savedPosts) {
  //   setPosts(JSON.parse(savedPosts))
  // }

  // }, []);


  // Save on every posts change
  // useEffect(() => {
  //   localStorage.setItem('posts', JSON.stringify(posts));
  // });

    // Add new post 
    /***  Do not need when used context api ***/
    // const addPost = (newPost) => {
    //   setPosts((prev) => [...prev, newPost]);
    // } 
    /*** Do not need when used context api ***/

    return(
        /** ContextApi for posts **/
        // <PostContext.Provider value={{posts, setPosts}}>
        //   <div className="max-w-3xl mx-auto">
        //     <h1>Posts Page</h1>

        //     {/* // Without context api  */}
        //     {/* <CreatePost addPost={addPost} posts={posts} />
        //     <AllPost posts={posts}/>  */}
        //     {/* // Without context api  */}

        //     {/* With Context API */}
        //       <CreatePost />
        //       <AllPost />
        //     {/* With Context API */}
        // </div>
        // </PostContext.Provider>

        /** Custom Hook **/
      <PostsProvider>
        <CreatePost />
        <AllPost />
      </PostsProvider>
        
    );
}