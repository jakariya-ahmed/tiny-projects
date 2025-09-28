import { useReducer } from "react"
import { PostContext } from "../context/PostContext";
import { initialState, reducer } from "../reducer/postsReducer";


 const PostsProvider = ({ children }) => {
    // Load posts from local storage for context api
   /* const [posts, setPosts] = useState(() => {
        const saved = localStorage.getItem('posts');
        return saved ? JSON.parse(saved) : [];
    }); */

    const[state, dispatch] = useReducer(reducer, initialState);
    
     // Save posts to local storage with context api
    /*useEffect(()=> {
        localStorage.setItem('posts', JSON.stringify(posts));
    }, [posts]); */

    return (
        <PostContext.Provider value={{ state, dispatch }}>
            {children}
        </PostContext.Provider>
    );
};

export default PostsProvider;
