import { redirect } from "react-router-dom";
import { POSTS_URL } from "../config/enpoints";

export async function createPost({request}) {
  const formData = await request.formData();
  const newPost = Object.fromEntries(formData.entries());
  console.log(newPost)
  
  try {
    const response =  await fetch(POSTS_URL, {  
        method: 'POST',
        body: JSON.stringify({ ...newPost, userId: 101}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
      });
      
      if(!response.ok) {
        console.error(`Error: ${response.status} - ${response.statusText}`);
        throw new Error(`Failed to create post: ${response.statusText}`);
      } 
      
      const postResponse = await response.json()
      console.log(postResponse);
      return redirect('/posts',{
        state: { response: console.log('Post succesfully created', postResponse)}
      });
  } catch (error) {
    console.error('Error creating post:', error);
  }
}