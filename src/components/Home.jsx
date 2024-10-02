import { Link } from "react-router-dom";

export function Home () {
    return (
      <>
        <Link to="/posts">Load Posts</Link><br />
        <Link to="/login">Log in</Link><br />
      </>
    )
}