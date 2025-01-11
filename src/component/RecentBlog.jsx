import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import SectionTitle from "./SectionTitle";

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
            <SectionTitle heading={'Recent posted'}></SectionTitle>
            <div className='grid grid-cols-1 gap-8 md:grid-cols-3 lg:grid-cols-4'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
            
        </div>
    );
};

export default RecentBlog;