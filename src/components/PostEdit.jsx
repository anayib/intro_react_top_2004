import { useLoaderData } from "react-router-dom";
import { editPost } from "../actions/editPost";

export function PostEdit() {
    const post = useLoaderData();
    
    const handleSubmit =  (e) => {
      e.preventDefault();
      const formData = new FormData(e.target);
      const formObject = Object.fromEntries(formData.entries());

      editPost(post.id, formObject);
    }

    return(
        <div>
            <h1>Update Post</h1>
            <form metho="put" onSubmit={handleSubmit}>
                <label htmlFor="title">
                    Title:
                    <input type="text" name="title" defaultValue={post.title}/>
                </label>
                <label htmlFor="title">
                    Body:
                    <input type="text" name="body" defaultValue={post.body}/>
                </label>
                <button type="submit">Update Post</button>
            </form>
        </div>
    )
}

/*
The FormData object is created from a form element. 
It extracts all the form's input fields and their current values, 
making it very useful for gathering form data without manually collecting 
values from each input field. It works on both HTML forms and React forms.
*/