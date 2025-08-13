import { ArrowBigLeft } from "lucide-react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { usePosts } from "../context/PostContext";

export default function SinglePost() {

    const { posts } = usePosts();

    const navigate = useNavigate();
    const { id } = useParams();
    // Find post by id 
    const post = posts.find((p) => p.id === parseInt(id));

    if (!post) {
        return (
            <div>
                <h1>Post Not Found.</h1>; 
                <button
                    onClick={() => navigate('/dashboard')}
                >
                    Back to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="bg-gray-300 max-w-lg sm:max-w-3xl md:max-w-2xl  mx-auto p-6 mt-6">
            <Link to='/dashboard'>
                <button className="bg-indigo-900 px-2 py-1 rounded-full text-white"> <ArrowBigLeft size={16}/> </button>
            </Link>
            <h1 className="text-lg text-gray-400">Date: {post.date ? new Date(post.date).toLocaleDateString(): "" }</h1>
            <h1 className="text-xl">{post.title}</h1>
            <h1 className="text-xl">{post.cat}</h1>
            <h1 className="text-xl">{post.author}</h1>
            <p>{post.description}</p>

        </div>
    );
}

