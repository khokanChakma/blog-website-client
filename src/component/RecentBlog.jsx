import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const RecentBlog = () => {
    const [blogs,setBlogs] = useState([]);
    useEffect(() => {
        const fetchAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/recent-blogs`)
            setBlogs(data);
        }
        fetchAllJobs();
    }, [])
    return (
        <div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default RecentBlog;