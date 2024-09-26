import { useLoaderData, Link } from "react-router-dom";

export function Post() {
    const post = useLoaderData();
    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to='/posts'>Back to posts</Link>
        </div>
    );
}