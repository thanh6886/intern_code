import { useRoutes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import path from "../Constants/Path";

export default function useRouterElements(){
        const Routers =  useRoutes([
            {
                path: path.home,
                element:<Home/>
            },
            {
                path: path.login,
                element: <Login/>
            }       
     ])
     return Routers
}