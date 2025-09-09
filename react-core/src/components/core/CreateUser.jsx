import { useState } from "react";


export default function CreateUser({ addUser }) {

    const [createUser, setCreateUser] = useState({
        id: Date.now(),
        name: '',
        desc: ''
    });

    // Handle input change
    /*
    const handleChange = (e) => {
        const { name, value } = e.target;
        setCreateUser({...createUser, [name] : value});
    }

    */

    // Handle form submit 
    const handleSubmit = (e) => {
        e.preventDefault();

        if(!createUser.name || !createUser.desc) {
            alert("Field is required!");
            return;
        }

        addUser(createUser);
        // Reset form 
        setCreateUser({id: Date.now(), name: '', desc: ''});
    }

    return (
        <section className="flex items-center bg-amber-100 max-w-3xl mx-auto p-6 mt-6">
            <form onSubmit={handleSubmit} className="space-y-3">
                <input name="name" value={createUser.name} 
                onChange={(e) => setCreateUser({...createUser, name:e.target.value})} 
                type="text" placeholder="User Name" className="border border-gray-400 h-10 w-full p-2"/>

                <textarea name="desc" value={createUser.desc}
                onChange={(e) => setCreateUser({...createUser, desc:e.target.value})}
                placeholder="User Description" className="border border-gray-400 w-full p-2">

                </textarea>

                <button className="bg-amber-300 w-full rounded px-3 py-1" type="submit"> Create </button>
            </form>
        </section>
    ); 
}

