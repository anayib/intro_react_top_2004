import { useLoaderData, Link  } from "react-router-dom";

export function Posts () {
    const posts = useLoaderData () // hook to acces the data loaded from the loader
    return(
        <div>
          <h1>Posts</h1>
            <ul>
              {posts.map((post) => {
              return (
                <li key={post.id}>
                  {post.title}
                  <Link to={`/posts/${post.id}`}>See post</Link>
                </li>
              )
             })}
            </ul>
        </div>
    );
}