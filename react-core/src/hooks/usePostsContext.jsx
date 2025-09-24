import { useContext, useState, useEffect } from "react"
import { PostContext } from "../context/PostContext";

 const PostProvider = ({ children }) => {
    // Load posts from local storage
    const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    });

    // Save posts to local storage whenever they change
    useEffect(()=> {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]);

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostProvider;
