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
                <div className=" card-compact bg-base-100 h-[430px] rounded w-full p-4 border shadow-xl">
                    <div className="flex justify-center items-center">
                        <img
                            className='h-[150px] w-[250px] md:w-full rounded'
                            src={imgURL}
                            alt="photo" />
                    </div>
                    <div className="flex flex-col space-y-1 mt-2 h-[230px]">
                        <h2 className="card-title text-lg font-semibold">{title}</h2>
                        <p className="text-lg">{category}</p>
                        <p className="text-base flex-1">{short_description.slice(0,50)}.....</p>
                        <div className="card-actions">
                            <Link to={`/blogdetails/${_id}`} className="btn btn-primary text-white bg-[#01b3bf] border-none">Details</Link>
                            <button onClick={handleWishlist} className="btn btn-primary bg-[#01b3bf] text-white border-none">Wishlist</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;