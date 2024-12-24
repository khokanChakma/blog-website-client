import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import { Link } from "react-router-dom";

const WishList = () => {
    const { user } = useContext(AuthContext);
    const [wishlists, setWishlists] = useState([])
    useEffect(() => {
        fetchWishlist();
    }, [user])

    const fetchWishlist = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-wishlist?email=${user?.email}`, { withCredentials: true })
        setWishlists(data);
    }

    const handleRemove = async (id) => {
        try {
            const { data } = await axios.delete(`${import.meta.env.VITE_API_URL}/remove-wishlist/${id}`)
            console.log(data)
            fetchWishlist();
        }
        catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div className="">
            <table className="md:table">
                {/* head */}
                <thead>
                    <tr className="">
                        <th>serial</th>
                        <th>cover Photo</th>
                        <th>Title</th>
                        <th>Category</th>
                    </tr>
                </thead>
                <tbody className="h-56">
                    {/* row 1 */}
                    {
                        wishlists.map((wishlist, index) => <tr key={wishlist?._id}>
                            <th>{index + 1}</th>
                            <td>
                                <img className="w-24 h-20 rounded-xl" src={wishlist?.imgURL} alt="" />
                            </td>
                            <td>{wishlist?.title}</td>
                            <td>{wishlist?.category}</td>
                            <td className='space-x-2 space-y-2'>
                                <div className="flex gap-2">
                                    <Link to={`/blogdetails/${wishlist?.blog_id}`}>
                                        <button className="btn">Details</button>
                                    </Link>
                                    <button onClick={() => handleRemove(wishlist?._id)} className="btn">Remove</button>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default WishList;