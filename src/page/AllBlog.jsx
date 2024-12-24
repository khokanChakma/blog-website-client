import axios from "axios";
import { useEffect, useState } from "react";
import BlogCard from "../component/BlogCard";

const AllBlog = () => {
    const [blogs, setBlogs] = useState([])
    const [filter,setFilter] = useState('');
    const [search,setSearch] = useState('');
    console.log(filter)
    useEffect(() => {
        const fetchAllJobs = async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/all-blogs?filter=${filter}&search=${search}`)
            setBlogs(data);
        }
        fetchAllJobs();
    }, [filter,search])

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-center items-center gap-5 '>
                <div>
                    <select
                        name='category'
                        onChange={(e) => setFilter(e.target.value)}
                        // value={filter}
                        id='category'
                        className='border p-4 rounded-lg'
                    >
                        <option value=''>Filter By Category</option>
                        <option value='Travel'>Travel</option>
                        <option value='Food'>Food</option>
                        <option value='Education'>Education</option>
                        <option value='Lifestyle'>Lifestyle</option>
                    </select>
                </div>


                <div className='flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300'>
                    <input
                        className='px-6 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent'
                        type='text'
                        onChange={(e) => setSearch(e.target.value)}
                        // value={search}
                        name='search'
                        placeholder='Enter blog Title'
                        aria-label='Enter blog Title'
                    />

                    <button className='px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none'>
                        Search
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3'>
                {
                    blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                }
            </div>
        </div>
    );
};

export default AllBlog;