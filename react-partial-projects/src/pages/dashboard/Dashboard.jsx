import { Edit, Eye, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePosts } from "./context/PostContext";
import toast from "react-hot-toast";
import PostFormModal from "../../components/dashboard/post/PostFormCom";

export default function Dashboard() {
    
    const  { posts, deletePost } = usePosts();

    const navigate = useNavigate();

    const handleSinglePost = (id) => {
        navigate(`/dashboard/post/${id}`);
    }
   
    // edit 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPost, setSelectedPost] = useState(null);

    const handleEditClick = (post) => {
    setSelectedPost(post); // pass post to modal
    setIsModalOpen(true);
    };

    // delete 
    const handleDelete = (id) => {
        deletePost(id);
        toast.success("Post deleted successfully");
    };

    return(
        <div className="w-full sm:max-w-6xl sm:mx-auto mt-6">

            <div className="flex gap-4">
                {posts.length === 0 && (
                    <div className="text-center">
                        <h2 className="text-md text-gray-500">Post Not Found</h2>
                    </div>
                )}
                {  posts.map(post => (
                    <div key={post.id} className="bg-gray-700 shadow-lg rounded-md px-4 py-4">
                        <h2 className="text-white text-2xl">{post.title}</h2>
                        <p className="truncate w-60 text-gray-400">{post.description}</p>
                        <small className="text-lime-600">{post.date ? new Date(post.date).toLocaleDateString() : ""}</small>
                        <div className="flex gap-x-2">
                            <button
                            onClick={() => handleSinglePost(post.id)}
                            className="flex text-sm text-white items-center bg-lime-700 gap-2 rounded-full px-2 mt-5">
                            <Eye size={16}/>
                        </button>  
                        <button
                            onClick={() => handleEditClick(post)}
                            className="flex text-sm text-white items-center bg-lime-700 gap-2 rounded-full px-2 mt-5">
                            <Edit size={16}/>
                        </button>  
                        <button
                            onClick={() => handleDelete(post.id)}
                            className="flex text-sm text-white items-center bg-lime-700 gap-2 rounded-full px-2 mt-5">
                            <Trash size={16}/>
                        </button>  

                        </div>            
                    </div>
                ))}

            </div>

            <PostFormModal
                isOpen={isModalOpen}
                onClose={() => {
                    setIsModalOpen(false);
                    setSelectedPost(null);
                }}
                title={selectedPost ? "Edit Post" : "Add Post"}
                initialData={selectedPost} // 🔹 pass post here
            >
                
            </PostFormModal>

        </div>
    );
}