import { useLoaderData, Link, Form } from "react-router-dom";
import { deletePost } from "../actions/deletePost";

export function Post() {
    const post = useLoaderData();

    const  handleDelete = async (e) => {
      e.preventDefault();
      const isDeleted = await deletePost(post.id);

      if(isDeleted) {
        console.log('IM IN')
    
      } else {
        throw new Error("Failed to delete the post try again");
      }
      
    }

    return(
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <Link to='/posts'>Back to posts</Link>
            <Form method="post">
              <button type="submit">Delete Post</button>
              <input type="hidden" name="_method" value="" />
            </Form>
        </div>
    );
}

/*
Form triggers the action associated to the route
which element is Post, in this case it would trigger
the delete action
*/