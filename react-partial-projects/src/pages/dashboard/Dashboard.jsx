import { ArrowBigRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {

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

    const navigate = useNavigate();

    const handleSinglePost = (id) => {
        navigate(`/dashboard/post/${id}`);
    }
   

    return(
        <div className="w-full sm:max-w-6xl sm:mx-auto mt-6">

            <div className="flex gap-4">

                {posts.map(post => (
                    <div key={post.id} className="bg-gray-700 shadow-lg rounded-md px-4 py-4">
                        <h2 className="text-white text-2xl">{post.title}</h2>
                        <p className="text-gray-400">{post.des}</p>
                        <small className="text-lime-600">{post.date.toLocaleDateString()}</small>
                        <button
                            onClick={() => handleSinglePost(post.id)}
                            className="flex text-sm text-white items-center bg-lime-700 gap-2 rounded-full px-3 mt-5">
                                Details
                            <ArrowBigRight size={16}/>
                        </button>              
                    </div>
                ))}

            </div>
        </div>
    );
}