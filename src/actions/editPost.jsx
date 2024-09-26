import { POSTS_URL } from "../config/enpoints";

export async function editPost (postId, updatedPost) {
      try {
      const formData = await fetch(`${POSTS_URL}/${postId}`, {
        method: 'PUT',
        body: JSON.stringify(updatedPost),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer my-token'
        },
      });

      if(!formData.ok) {
        throw new Error(`HTTP: error! status ${formData.status}`)
      }

      return formData.json();
    } catch (error) {
      console.error(error);
    }
}