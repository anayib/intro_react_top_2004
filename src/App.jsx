import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

/* 
The loader ensure that the data is ready before rendering the component. 
Also serves to separate fetching/rendering concerns
*/

//routes configuration

export default function App() {
  return (
    <RouterProvider router={router}/>
  );
}