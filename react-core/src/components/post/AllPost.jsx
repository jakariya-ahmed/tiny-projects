import { useContext } from "react";
import { PostContext } from "../../context/PostContext";

export default function AllPost() {
    // Get posts from context
    const { posts } = useContext(PostContext);
    return(
        <section className="grid grid-cols-3 gap-3 mt-6">
            {posts.map(post => 
                <article key={post.id} className="max-w-md bg-violet-200 p-5 ">
                <h1 className="text-2xl">{post.title}</h1>
                <h2 className="text-xl">{post.category}</h2>
                <p>
                    {post.desc}
                </p>
            </article>
            )

            }
            

        </section>
    );
}