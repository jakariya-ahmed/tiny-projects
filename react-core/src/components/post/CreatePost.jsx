import { useState } from "react";

export default function CreatePost({addPost, posts}) {
    // Set post state
    const[createPost, setCreatePost] = useState({
        id: Date.now(),
        title: '',
        category: '',
        desc: '',
    });
    
    // Set error state
    const[errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        const {name, value} = e.target;
        setCreatePost({...createPost, [name] : value});

        // Clear error message
        setErrors({...errors, [name]: ''});
    }

    // Validate inputs
    const validate = () => {
        const newErrors = {};
        // Title validation
        if (!createPost.title.trim()) {
            newErrors.title = "Title is required";
        } else if (createPost.title.length < 10) {
            newErrors.title = "Title must be at least 10 characters";
        }
        
        // Category validation
        if (!createPost.category.trim()) {
            newErrors.category = "Category is required";
        }

        return newErrors;
    }

    // Handle form submit
    const handlePostCreation = (e) => {
        e.preventDefault();
        // Validate form
        const formErrors = validate();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }

        // Add post to the list
        addPost(createPost);

        // Reset form
        setCreatePost({
            id: Date.now(),
            title: '', category:'', desc: '',
        });

        // Clear errors
        setErrors({});
    }



    return (
        <section className="flex items-center bg-amber-100 max-w-3xl mx-auto p-6 mt-6">
            <form onSubmit={handlePostCreation} className="w-full space-y-3">
                <input name="title" 
                onChange={handleChange}
                value={createPost.title}
                type="text" placeholder="Title" 
                className={`border h-10 w-full p-2 ${errors.title ? "border-red-500" : "border-gray-400"}`}/>
                {errors.title && <p className="w-full text-red-500 mt-1">{errors.title}</p>}
                <input name="category" 
                onChange={handleChange}
                value={createPost.category}
                placeholder="Category" 
                className={`border h-10 w-full p-2 ${errors.category ? 'border-red-500' : 'border-gray-400'}`}/>
                {errors.category && <p className="w-full text-red-500 mt-1">{errors.category}</p>}
                <textarea name="desc" 
                onChange={handleChange}
                value={createPost.desc}
                placeholder="User Description" 
                className="border border-gray-400 w-full p-2">

                </textarea>

                <button className="bg-amber-300 w-full rounded px-3 py-1" type="submit"> Create </button>
            </form>
        </section>
    ); 
}