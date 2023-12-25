import React from "react"
import ReactDOM  from "react-dom/client"
import Header from "./Header";
import Error from "./Error";
import Body from "./Body";
import About from "./About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./Contact";
import Restuarantmenu from "./util/Restuarantmenu";
const Headermain=()=>(
<div id="container">
<Header/>
<Outlet/>
<h1> </h1>
</div>
);

const appRouter=createBrowserRouter([
    {
        path:'/',
        element:<Headermain/>,
        children:[
            {
                path:'/',
                element:<Body/>
            },
            {
            path:"/about",
            element:<About/>
        },
    {
        path:"/contact",
        element:<Contact/>
        
    },
    {
        path:"/restaurants/:resId",
        element:<Restuarantmenu/>
    }
    ],
        errorElement:<Error/>,
    },
    
]);





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);