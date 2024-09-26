import { POSTS_URL } from "../config/enpoints";

export async function postLoader ({params}) {
    const { id } = params;
    const url = `${POSTS_URL}/${id}`
    try {
      const response = await fetch(url)
      if (response.status !== 200) {
        throw new Error(response.error);
      }   

      return response.json();
    } catch (error) {
        console.error(error.message);
    }
}