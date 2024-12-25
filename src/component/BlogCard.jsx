import axios from "axios";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../authprovider/AuthProvider";
import 'animate.css';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate();
    const {user} = useContext(AuthContext);
    const { title, short_description, imgURL, category, _id } = blog;

    const wishData = {
        title,
        short_description,
        imgURL,
        category,
        email: user?.email,
        blog_id: _id,
    }


    const handleWishlist =async () => {
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-wishlist`, wishData)
            Swal.fire({
                title: "successfully added in wishlist",
                icon: "success",
                draggable: true
            });
            navigate('/wishlist');
        }
        catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="animate__animated animate__slideInUp">
            <div
                className='w-full bg-white shadow-md'
            >
                <div className="card card-compact bg-base-100 h-[600px] w-full p-4 border shadow-xl">
                    <figure>
                        <img
                            className='h-[300px]'
                            src={imgURL}
                            alt="photo" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl">{title}</h2>
                        <p className="text-xl"><span className="text-xl font-bold">Category : </span>{category}</p>
                        <p className="text-xl"><span className="text-xl font-bold">Short Description:</span>{short_description}</p>
                        <div className="card-actions">
                            <Link to={`/blogdetails/${_id}`} className="btn btn-primary bg-[#70009a] border-none">Details</Link>
                            <button onClick={handleWishlist} className="btn btn-primary bg-[#de6800] border-none">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;