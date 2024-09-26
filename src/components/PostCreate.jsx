import { Form } from "react-router-dom";

export function PostCreate () {
    return(
      <>
       <h1>Create New Post</h1>
       <Form method="post">
          <label htmlFor="title">
            <input type="text" name="title" />
          </label>
          <label htmlFor="body">
            <input type="text" name="body" />
          </label>
          <button type="submit">Crear Post</button>
       </Form>
      </>
    );
}