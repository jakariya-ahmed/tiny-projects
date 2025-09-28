import { useContext } from "react";
import { PostContext } from "../../context/PostContext";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function AllPost() {
    // Get posts from context
    /* const { posts } = useContext(PostContext); */
    const {state, dispatch} = useContext(PostContext);

    // console.log('Posts from context:', state.posts);
    const handleDel = (id) => {
        dispatch({type: 'DELETE_POST', payload: id});
    }


    return(
        <section className="max-w-7xl mx-auto">
            <div className="flex gap-x-2">
                <input 
                className="w-3xl border-2 border-purple-300 p-3 rounded mt-6"
                type="text" placeholder="Type Keywords to search..." 
                />
                <select name="" id=""
                className="w-3xl border-2 border-purple-300 p-3 rounded mt-6"
                >
                    <option value="">All Categories</option>
                    <option value="">ASC</option>
                    <option value="">DESC</option>
                    <option value="">Latest</option>
                </select>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3 my-6">
                {Array.isArray(state?.posts) &&
                state.posts.map((post, idx) =>
                post ? (
                    <article key={post.id ?? idx} className="max-w-md bg-violet-200 p-5">
                    <h1 className="text-2xl">{post.title}</h1>
                    <h2 className="text-xl">{post.category}</h2>
                    <p>{post.desc}</p>
                    <div className="flex gap-3 mt-3">
                        <button onClick={() => handleDel(post.id)} className="bg-red-500 text-white px-1 rounded">Delete</button>
                        <button className="bg-purple-500 text-white px-1 rounded hover:bg-purple-700">Edit</button>
                    </div>
                    </article>
                ) 
                : (
                    // Optional placeholder/fallback if a post is null
                    <div key={idx} className="text-red-500"></div>
                )
                
                )}
            </div>

            <div className="flex gap-2 mb-6">
                <button className="p-2 rounded bg-purple-200 hover:bg-purple-300">
                    <ArrowLeft size={32} className="h-6 w-6 text-purple-500"/>
                </button>
                <button className="p-2 rounded bg-purple-200 hover:bg-purple-300">1</button>
                <button className="p-2 rounded bg-purple-200 hover:bg-purple-300">2</button>
                <button className="p-2 rounded bg-purple-200 hover:bg-purple-300">3</button>
                <button className="p-2 rounded bg-purple-200 hover:bg-purple-300">
                    <ArrowRight size={32} className="h-6 w-6 text-purple-500"/>
                </button>

            </div>
            </section>
    );
}