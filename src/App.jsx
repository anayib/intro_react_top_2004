import { createBrowserRouter , RouterProvider, Route, Link, Outlet } from "react-router-dom";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { ErrorPage } from "./components/ErrorPage";
import {postLoader} from "./loaders/postLoader";
import { postsLoader } from './loaders/postsLoader'; 
/* 
The loader ensure that the data is ready before rendering the component. 
Also serves to separate fetching/rendering concerns
*/

//routes configuration
const router =  createBrowserRouter([
  {
    path: "/posts",
    element: <Posts/>,
    loader: postsLoader,
    errorElement: <ErrorPage />,

  },
  {
    path: "/posts/:id", 
    element: <Post />,
    loader: postLoader, 
    errorElement: <ErrorPage />,
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}