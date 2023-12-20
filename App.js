import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./Header";
import Error from "./Error";
import Body from "./Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./Contact";
const Headermain=()=>(
<div id="container">
<Header/>
<Body/>
<h1> </h1>
</div>
);

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Headermain/>,
        errorElement:<Error/>,
    },
    {
        path:'/contact',
        element:<Contact/>,
    }
]);





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);