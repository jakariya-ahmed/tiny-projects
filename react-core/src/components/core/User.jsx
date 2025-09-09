export default function User({ user, deleteUser }) {

    const {id, name, desc} = user;

    const handleDel = (id) => {
        deleteUser(id);
    }
    return (
        <div className="">
            <article className="max-d-md shadow-md px-3 py-6 bg-amber-100 rounded-sm">
                <p>{user.id}</p>
                <h2>{user.name}</h2>
                <p>{user.desc}</p>
                <button
                onClick={() => handleDel(id)}
                className="bg-red-100 px-4 py-1 rounded text-red-500 mt-4" type="button">Delete</button>
            </article>
        </div>
    ); 
}

