import { createBrowserRouter , RouterProvider } from "react-router-dom";
import { Home } from "./components/Home";
import { Posts } from "./components/Posts";
import { Post } from "./components/Post";
import { PostEdit } from "./components/PostEdit";
import { PostCreate } from "./components/PostCreate";
import { ErrorPage } from "./components/ErrorPage";
import {postLoader} from "./loaders/postLoader";
import { postsLoader } from './loaders/postsLoader'; 
import { deletePost } from "./actions/deletePost";
import { createPost } from "./actions/createPost";
import { editPost } from "./actions/editPost";
import { User } from "./components/User";
import { UserContextProvider } from "./context/UserContext"; 

/* 
The loader ensure that the data is ready before rendering the component. 
Also serves to separate fetching/rendering concerns
*/

//routes configuration
const router =  createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <ErrorPage />
  },
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
    action: deletePost,
    errorElement: <ErrorPage />,
  },
  {
    path: "/posts/:id/edit", 
    element: <PostEdit />,
    loader: postLoader, 
    action: editPost,
    errorElement: <ErrorPage />,
  },
  {
    path: "posts/new",
    element: <PostCreate />,
    action: createPost,
    errorElement: <ErrorPage/>
  },
  {
    path: "/users",
    element: (
      <UserContextProvider>
        <User/>
      </UserContextProvider>
    ),
    errorElement: <ErrorPage/>
  }
]);

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}