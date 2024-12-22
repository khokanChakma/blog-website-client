import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetails = () => {
    const [blog, setBlog] = useState({})
    const {title,short_description,long_description,imgURL,category,writer} = blog
    const { id } = useParams()
    useEffect(() => {
        const fetchAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-blogs/${id}`)
            setBlog(data);
        }
        fetchAllJobs();
    }, [])

    console.log(blog)
    return (
        <div>
            <h2 className="text-3xl font-bold text-center py-4">Blog Details</h2>
            <div className="flex flex-col lg:flex-row gap-6 p-6 bg-base-200 rounded-xl shadow-xl w-10/12 mx-auto">
                <img
                    className="w-96 rounded-xl"
                    src={imgURL} />
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <h4><span className="text-xl font-semibold">Category: </span> {category}</h4>
                    <h4><span className="text-xl font-semibold">Short Description: </span> {short_description}</h4>
                    <h4><span className="text-xl font-semibold">Long description : </span> {long_description}</h4>
                    <h4><span className="text-xl font-semibold">Writer Name: </span> {writer?.name}</h4>
                    

                    <br />
                    <div className="flex gap-6">
                        {/* <button onClick={() => handleWatchList(_id)} className="btn rounded-full px-4 text-white bg-[#9538E2]">Add to WatchList</button> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;