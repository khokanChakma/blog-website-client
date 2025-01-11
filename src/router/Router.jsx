import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import ErrorPage from "../error/ErrorPage";
import Home from "../page/Home";
import Login from "../page/Login";
import Register from "../page/Register";
import AddBlog from "../page/AddBlog";
import AllBlog from "../page/AllBlog";
import FeaturedBlog from "../page/FeaturedBlog";
import WishList from "../page/WishList";
import PrivateRout from "./PrivateRout";
import BlogDetails from "../component/BlogDetails";
import Update from "../component/Update";
import Contact from "../component/Contact";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Mainlayout></Mainlayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addblog',
                element: <PrivateRout><AddBlog></AddBlog></PrivateRout>
            },
            {
                path: '/allblog',
                element: <AllBlog></AllBlog>
            },
            {
                path: '/featureblog',
                element: <FeaturedBlog></FeaturedBlog>
            },
            {
                path: '/wishlist',
                element: <PrivateRout><WishList></WishList></PrivateRout>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blogdetails/:id',
                element: <BlogDetails></BlogDetails>,
            },
            {
                path: '/update/:id',
                element: <PrivateRout><Update></Update></PrivateRout>,
                loader: ({params})=> fetch(`http://localhost:5000/all-blogs/${params.id}`)
            },
            
        ]
    }
])

export default Router;