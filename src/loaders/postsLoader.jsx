// simple JS function to fetch data from API using Promise pattern
import { POSTS_URL } from "../config/enpoints";

export async function postsLoader () {
    try {
        const postsResponse = await fetch(POSTS_URL);
        if(postsResponse.status !== 200) {
            throw new Error(postsResponse.error);
        }
        
        return postsResponse.json();
    } catch (error) {
        console.error(error)
    }
}