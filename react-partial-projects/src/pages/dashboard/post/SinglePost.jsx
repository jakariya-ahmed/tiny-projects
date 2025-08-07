import { ArrowBigLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";

export default function SinglePost() {

const posts = [
    {
        id: 1,
        title: 'Most Latest Post for the Morning',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti.',
        date: new Date(),
    },
    {
        id: 2,
        title: 'Most Latest Post for the Evening',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti.',
        date: new Date(),
    },
    {
        id: 3,
        title: 'Most Latest Post for the Night',
        des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, deleniti.',
        date: new Date(),
    }
];

const { id } = useParams();

const post = posts.find((p) => p.id === parseInt(id));

    if (!post) return <h1>Post Not Found.</h1>; 

    return (
        <div className="bg-gray-300 max-w-3xl mx-auto p-6 mt-6">
            <Link to='/dashboard'>
                <button className="bg-indigo-900 px-2 py-1 rounded-full text-white"> <ArrowBigLeft size={16}/> </button>
            </Link>
            <h1 className="text-lg text-gray-400">Date: {post.date.toLocaleDateString()}</h1>
            <h1 className="text-xl">{post.title}</h1>
            <p>{post.des}</p>

        </div>
    );
}

