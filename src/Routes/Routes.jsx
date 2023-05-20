import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home/Home";
import Blog from "../pages/Blog/Blog";
import Errorpage from "../pages/Errorpage/Errorpage";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AllToy from "../pages/AllToy/AllToy/AllToy";
import Details from "../Shared/Details/Details";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/allToy',
                element: <AllToy></AllToy>,
            },
            {

                path: '/details/:id',
                element: <Details></Details>,
                loader: ({params})=> fetch(`http://localhost:5000/allToy/${params.id}`)


            }
        ]
    },
]);

export default router;