import { X } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePosts } from "../../../pages/dashboard/context/PostContext";

export default function PostFormModal({isOpen, onClose, title, initialData}) {
    const { addPost, updatePost } = usePosts();

    const [form, setForm] = useState({
        title: '',
        cat: '',
        author: '',
        description: '',
        date: '',

    });

    const [editId, setEditId] = useState(null);

    useEffect(() => {
        if (initialData) {
            setForm(initialData);
            setEditId(initialData.id);
        } else {
            setForm({ title: "", cat: "", author: "", description: "", date: "" });
            setEditId(null);
        }
    }, [initialData]);

    // Handle input change 
    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    // Handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (editId) {
            // Update post 
            updatePost(editId, form);
            toast.success("Post updated successfully.");
        } else {
            // Add new post 
            addPost({ ...form, id: Date.now() });
            toast.success('Post created successfully.');
        }

        setForm({
            title: '',
            cat: '',
            author: '',
            description: '',
            date: '',
            });

            setEditId(null);
            onClose();
    }


    if (!isOpen) return null;
    return (
        <>  
            <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
            <div className="fixed top-0 left-0 h-full w-full max-w-md bg-gray-700  rounded">
                {/* modal header  */}
                <div className="flex items-center justify-between p-6">
                    <h2 className="text-gray-300 text-xl font-semibold">{title}</h2>
                    <button
                        className="text-gray-400 border border-red-500 p-1 rounded hover:text-red-500 cursor-pointer transition"
                        onClick={onClose}
                    >
                        <X size={26} />
                    </button>
                </div>
                <hr className="text-gray-600" />
                <form action="" onSubmit={handleSubmit} className="p-6 mt-2">
                    <div>
                        <label htmlFor="" className="text-gray-400 text-md">Title</label>
                        <input type="text" 
                        className="border w-full h-10 border-gray-600 focus:border-gray-500 outline-none transition text-gray-400 p-3 my-2" 
                        name="title"
                        value= {form.title}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor=""  className="text-gray-400 text-md">Category</label>
                        <select 
                            onChange={handleChange}
                            name="cat"
                            value={form.cat}
                            className="border bg-gray-700 w-full h-auto border-gray-600 focus:border-gray-500 outline-none transition text-gray-400 p-3 my-2">
                            <option value="">Select Category </option>
                            <option value= "web-design">Web Design</option>
                            <option value="web-development">Web Development</option>
                            <option value="wordpress-development">Wordress Development</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="" className="text-gray-400 text-md">Author</label>
                        <input type="text" 
                        className="border w-full h-10 border-gray-600 focus:border-gray-500 outline-none transition text-gray-400 p-3 my-2" 
                        name="author"
                        value= {form.author}
                        onChange={handleChange}
                        />
                    </div>

                    <div>
                        <label htmlFor="" className="text-gray-400 text-md">Description</label>
                        <textarea 
                            type="text"
                            className="border w-full border-gray-600 focus:border-gray-500 outline-none transition text-gray-400 p-3 my-2" 
                            name="description"
                            value= {form.description}
                            onChange={handleChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <label htmlFor="" className="text-gray-400 text-md">Date</label>
                        <input type="date" 
                        className="border w-full bg-gray-700 h-10 border-gray-600 focus:border-gray-500 outline-none transition text-gray-400 p-3 my-2" 
                        name="date"
                        value= {form.date}
                        onChange={handleChange}
                        />
                    </div>
                    
                    <button
                    className="bg-blue-400 px-6 py-2 text-gray-200 text-lg mt-2 rounded cursor-pointer"
                    > {title} </button>
                </form>
            </div>
        </>
    );
}













