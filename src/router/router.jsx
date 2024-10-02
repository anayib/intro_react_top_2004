    import { createBrowserRouter , RouterProvider } from "react-router-dom";
    import { Home } from "../components/Home";
    import { Posts } from '../components/Posts'
    import { Post } from "../components/Post";
    import { PostEdit } from "../components/PostEdit";
    import { PostCreate } from "../components/PostCreate";
    import { ErrorPage } from "../components/ErrorPage";
    import {postLoader} from "../loaders/postLoader";
    import { postsLoader } from '../loaders/postsLoader'; 
    import { deletePost } from "../actions/deletePost";
    import { createPost } from "../actions/createPost";
    import { editPost } from "../actions/editPost";
    import { UserLogin } from "../components/User/UserLogin";
    import { UserContextProvider } from "../context/UserContext";
    import { ProtectedRoute } from "./ProtectedRoute";

    export const routes =  [
        {
        path: "/",
        element: <Home/>,
        errorElement: <ErrorPage />
        },
        {
            path: "/posts",
            element: (
              <UserContextProvider>
                <ProtectedRoute /> {/* Protect the /posts and all child routes */}
              </UserContextProvider>
            ),
            children: [
              {
                path: "", // This handles /posts
                element: <Posts />,
                loader: postsLoader,
              },
              {
                path: ":id", // This handles /posts/:id
                element: <Post />,
                loader: postLoader,
                action: deletePost,
              },
              {
                path: ":id/edit", // This handles /posts/:id/edit
                element: <PostEdit />,
                loader: postLoader,
                action: editPost,
              },
              {
                path: "new", // This handles /posts/new
                element: <PostCreate />,
                action: createPost,
              }
            ],
            errorElement: <ErrorPage />
          } ,
        {
        path: "/login",
        element: (
            <UserContextProvider>
              <UserLogin/>
            </UserContextProvider>
        ),
        errorElement: <ErrorPage/>
        }
    ];

    export const router = createBrowserRouter(routes);