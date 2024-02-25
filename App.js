import React,{lazy, Suspense, useEffect, useState} from "react"
import ReactDOM  from "react-dom/client"
import Header from "./src/Header";
import Error from "./src/Error";
import Body from "./src/Body";
import About from "./src/About";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/Contact";
import Restuarantmenu from "./src/util/Restuarantmenu";
import Shimmer from "./src/Shimmer";
import { Provider } from "react-redux";
import appStore from "./src/util/Appstore";
import Cart from "./src/Cart";
import UserContext from "./src/util/UserContext";
// import Grocery from "./Grocery";

const Grocery=lazy(()=>import("./src/Grocery"));

const Headermain=()=>{
const [info,setInfo]=useState(null);
    useEffect(()=>{
        const data={
            name:"Arijit Karan",
        }
        setInfo(data.name);
    },[])

    return (
        <>
        
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:info,setInfo}}>
<div id="container">
<Header/>
<Outlet/>
<h1> </h1>
</div>
</UserContext.Provider>
</Provider>

</>
    )
};

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
    },
    {
        path:"/grocery",
        element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
    },
    {
        path:"/cart",
        element:<Cart/>
    }
    ],
        errorElement:<Error/>,
    },
    
]);





const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);