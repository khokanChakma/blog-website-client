import { Link, NavLink } from "react-router-dom";
import logo from '../assets/logo.png'
import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";

const Navber = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user?.photoURL)
    return (
        <div className="navbar ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu font-bold text-lg menu-sm dropdown-content bg-base-100 rounded-box z-[50] mt-3 w-52 p-2 shadow">
                        <NavLink to='/'><li><a>Home</a></li></NavLink>
                        <NavLink to='/addblog'><li><a>Add Blog</a></li></NavLink>
                        <NavLink to='/allblog'><li><a>All blogs</a></li></NavLink>
                        <NavLink to='/featureblog'><li><a>Featured Blogs</a></li></NavLink>
                        <NavLink to='/wishlist'><li><a>Wishlist</a></li></NavLink>
                    </ul>
                </div>
                <Link to='/'>
                    <a className="cursor-pointer flex gap-2 items-center">
                        <img className="w-12" src={logo} alt="" />
                        <h2 className="text-xl text-blue-900 font-bold">The Blog Haven</h2>
                    </a>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 font-bold">
                    <NavLink className='rounded' to='/'><li><a>Home</a></li></NavLink>
                    <NavLink className='rounded' to='/addblog'><li><a>Add Blog</a></li></NavLink>
                    <NavLink className='rounded' to='/allblog'><li><a>All blogs</a></li></NavLink>
                    <NavLink className='rounded' to='/featureblog'><li><a>Featured Blogs</a></li></NavLink>
                    <NavLink className='rounded' to='/wishlist'><li><a>Wishlist</a></li></NavLink>
                </ul>
            </div>

            <div className="navbar-end">
                {/* <div className="mr-4">
                    <Theme></Theme>
                </div> */}
                {
                    user && user?.email ?
                        <div className="flex justify-center items-center gap-4 z-10">
                            <p>
                                <img id="showTooltip" className="w-12 h-12 rounded-full cursor-pointer" src={user?.photoURL} alt="" />
                            </p>
                            <Link onClick={logOut}><button className="btn">LogOut</button></Link>
                        </div>
                        :
                        <div className="flex gap-4">
                            <Link to='/login'><button className="btn">Login</button></Link>
                            <Link to='/register'><button className="btn">Register</button></Link>
                        </div>
                }

            </div>
        </div>
    );
};

export default Navber;