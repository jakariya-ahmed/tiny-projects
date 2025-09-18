export default function CreatePost() {
    return (
        <section className="flex items-center bg-amber-100 max-w-3xl mx-auto p-6 mt-6">
            <form className="space-y-3">
                <input name="name" 
                
                type="text" placeholder="Title" className="border border-gray-400 h-10 w-full p-2"/>
                <input name="desi" 
                
                placeholder="category" className="border border-gray-400 h-10 w-full p-2"/>
                <textarea name="desc" 
               
                placeholder="User Description" className="border border-gray-400 w-full p-2">

                </textarea>

                <button className="bg-amber-300 w-full rounded px-3 py-1" type="submit"> Create </button>
            </form>
        </section>
    ); 
}