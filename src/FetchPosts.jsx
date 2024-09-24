import { useState, useEffect } from "react";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const postsURL = 'https://jsonplaceholder.typicode.com/posts';

  useEffect(() => {
    try {
      fetch(postsURL)
      .then((resp) => {
        if (resp.status !== 200) {
          throw new Error(error.message);
        }
        return resp.json();
      })
      .then((posts) => { 
        setPosts(posts)
        setLoading(false)
        
    })      
    } catch (error) {
      setError(error);
      setLoading(false)
    }
  
  }, []);

  if (loading) return <div>Data is loading ...</div>;

  if (error) return <div>Error: {error.message}</div> ;

  return(
    <>
      <ul>{posts.map((post) => {
        return <li key={post.id}>{post.title}</li>
      })}
      </ul>
    </>
  )
};