import { useContext, useState } from "react";
import { UsersContext } from "../../context/UsersContext";


export default function CreateUser() {
    
    const {users, setUsers} = useContext(UsersContext);

    const [createUser, setCreateUser] = useState({id: Date.now(), name: '', desi: '', desc: ''});
   
    // Handle input change
    // const handleChange = (e) => {
    //     // const {name, value} = e.target;
    //     // setCreateUser({...createUser, [name]: value});
    // }

    // Handle input change 
    const handleChange = (e) => {
        const {name, value} = e.target;
        setCreateUser({...createUser, [name] : value});
    } 

    // Dynamic field update
    /*
    const updateField = (field) => (e) => {
        setCreateUser({...createUser, [field] : e.target.value});
    }
    */

    // Inline field update
    /*
    onChange={(e) => setCreateUser({...createUser, name: e.target.value})};
    */


    // Handle form submit 
    const handleUserCreation = (e) => {
        e.preventDefault();
        // Validation
        if (!createUser.name || !createUser.desc || !createUser.desi) {
            alert('Field is required!');
            return;
        }

        // Add user to the list
        setUsers([...users, createUser]);

        // Reset form 
        setCreateUser({id: Date.now(), name: '', desi: '', desc: ''});

    }


    return (
        <section className="flex items-center bg-amber-100 max-w-3xl mx-auto p-6 mt-6">
            <form onSubmit={handleUserCreation}  className="space-y-3">
                <input name="name" 
                onChange={handleChange}
                value={createUser.name}
                type="text" placeholder="User Name" className="border border-gray-400 h-10 w-full p-2"/>
                <input name="desi" 
                onChange={ handleChange}
                value={createUser.desi}
                placeholder="Your Designation" className="border border-gray-400 h-10 w-full p-2"/>
                <textarea name="desc" 
                onChange={handleChange}
                value={createUser.desc}
                placeholder="User Description" className="border border-gray-400 w-full p-2">

                </textarea>

                <button className="bg-amber-300 w-full rounded px-3 py-1" type="submit"> Create </button>
            </form>
        </section>
    ); 
}

