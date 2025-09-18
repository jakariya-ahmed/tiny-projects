import CreateUser from "../components/core/CreateUser";
import AllPost from "../components/post/AllPost";

export default function Posts() {
    return(
        <div className="max-w-3xl mx-auto">
            <h1>Posts Page</h1>
            <CreateUser />
            <AllPost />
        </div>
    );
}