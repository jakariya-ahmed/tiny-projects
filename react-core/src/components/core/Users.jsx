import { useContext } from "react";
import { UsersContext } from "../../context/UsersContext";


export default function Users() {

    const { users, setUsers}  = useContext(UsersContext); /* using custom hook */

    // Handle delete user
    const handleDel = (id) => {
        const filteredUsers = users.filter(user => user.id !== id);
        setUsers(filteredUsers);
    } 

    return (
        <section className="flex max-w-3xl mx-auto gap-x-3 mt-6">
            {users.map(user => (
                <div className="" key={user.id}>
                    <article className="max-d-md shadow-md px-3 py-6 bg-amber-100 rounded-sm">
                        <p>{user.id}</p>
                        <h2 className="text-xl text-violet-500">{user.name}</h2>
                        <p className="text-amber-900">{user.desi}</p>
                        <h2>{user.name}</h2>
                        <p>{user.desc}</p>
                        <button
                        onClick={ () => handleDel(user.id)}
                        className="bg-red-100 px-4 py-1 rounded text-red-500 mt-4" type="button">Delete</button>
                    </article>
                </div>
            ))}
        </section>
    ); 
}

