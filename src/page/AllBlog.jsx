import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";

const AllBlog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        const fetchAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-blogs`)
            setBlogs(data);
        }
        fetchAllJobs();
    }, [])

    return (
        <div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlog;