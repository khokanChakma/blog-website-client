import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AuthContext } from "../authprovider/AuthProvider";
import Swal from "sweetalert2";
import Comment from "./Comment";

const BlogDetails = () => {
    const { user } = useContext(AuthContext);
    const [blog, setBlog] = useState({})
    const [comments, setComments] = useState([])
    const { title, short_description, long_description, imgURL, category, writer, _id } = blog
    const { id } = useParams()
    useEffect(() => {
        const fetchAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-blogs/${id}`)
            setBlog(data);
        }
        fetchAllJobs();
    }, [])

    const handleComment = async (e) => {
        e.preventDefault();
        const form = e.target;
        const comment = form.comment.value;
        const commentData = {
            blog_id: _id,
            name: user?.displayName,
            email: user?.email,
            photo: user?.photoURL,
            comment
        }
        // send comment data in server
        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/add-comment`, commentData)
            // form.reset();
            fetchcomments();
            Swal.fire({
                title: "successfully added comment",
                icon: "success",
                draggable: true
            });
        }
        catch (err) {
            console.log(err.message);
        }
    }

    //get fetch the comments 
    useEffect(() => {
        fetchcomments();
    }, [_id])
    const fetchcomments = async () => {
        const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/get-comment?blog_id=${_id}`)
        setComments(data);
    }



    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-4">Blog Details</h2>
            <div className="flex flex-col lg:flex-row gap-6 p-6 bg-base-200 rounded-xl shadow-xl w-10/12 mx-auto">
                <img
                    className="w-96 md:h-[300px] object-cover rounded-xl"
                    src={imgURL} />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h4><span className="text-xl font-semibold">Category: </span> {category}</h4>
                    <h4><span className="text-xl font-semibold">Short Description: </span> {short_description}</h4>
                    <h4><span className="text-xl font-semibold">Long description : </span> {long_description}</h4>
                    <div>
                        {
                            user?.email === writer?.email ? <Link to={`/update/${_id}`}><button className="btn">Update</button></Link>: ''
                        }
                        
                    </div>
                </div>
            </div>

            {/* comment section */}
            {
                user?.email === writer?.email || !user ? '' : (<div className="w-10/12 mx-auto my-6">
                    <form onSubmit={handleComment}>
                        <div className='flex flex-col gap-2 mt-4'>
                            <label className='text-gray-700 ' htmlFor='description'>
                                Comment
                            </label>
                            <textarea
                                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                                name='comment'
                                id='description'
                                required
                            ></textarea>
                        </div>
                        <button className="btn">comment</button>
                    </form>
                </div>)
            }
            <div className="my-6 w-10/12 mx-auto">
                {
                    comments?.map(cmt => <Comment key={cmt._id} cmt={cmt}></Comment>)
                }
            </div>
        </div>
    );
};

export default BlogDetails;