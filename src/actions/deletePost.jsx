import { redirect } from "react-router-dom";
import { POSTS_URL } from "../config/enpoints";

export async function deletePost(postId) {
  try {
    const response = await fetch(`${POSTS_URL}/${postId}`, {
        method: 'DELETE',
      });

      if(!response.ok) {
        throw new Error(`HTTP: error! status ${response.status}`);
      }
      console.log(`Post ${postId} faked deleted from fakedAPI`);
      return redirect('/posts');
  } catch (error) {
    console.error(error);
  }
}