import User from "./User";

export default function Users({ users , deleteUser}) {
    return (
        <section className="flex max-w-3xl mx-auto gap-x-3 mt-6">
            {users.map(user => <User key={user.id} user={user} deleteUser={deleteUser} />)}
        </section>
    ); 
}

