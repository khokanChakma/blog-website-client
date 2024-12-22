import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";

const AddBlog = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit =async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const imgURL = form.image_url.value;
        const category = form.category.value;
        const short_description = form.short_description.value;
        const long_description = form.long_description.value;
        console.table({ title, imgURL, category, short_description, long_description })
        const formData = { 
            title, 
            writer: {
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL
        
              }, 
            imgURL, 
            category, 
            short_description, 
            long_description,
        }
        // make a post request
        try {
            const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/add-blogs`, formData)
            form.reset();
            Swal.fire({
                title: "successfully added blog",
                icon: "success",
                draggable: true
              });
            // toast.success('Data added Successfully!!!')
            // navigate('/my-posted-jobs')
            console.log(data)
        }
        catch (err) {
            console.log(err.message);
        }
    }

return (
    <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
        <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
            <h2 className='text-lg font-semibold text-gray-700 capitalize '>
                Post a blog
            </h2>

            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
                    <div>
                        <label className='text-gray-700 ' htmlFor='job_title'>
                            Title
                        </label>
                        <input
                            id='job_title'
                            name='title'
                            type='text'
                            required
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>

                    <div>
                        <label className='text-gray-700 ' htmlFor='emailAddress'>
                            Image URL
                        </label>
                        <input
                            id='emailAddress'
                            type='url'
                            name='image_url'
                            required
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>

                    <div className='flex flex-col gap-2 '>
                        <label className='text-gray-700 ' htmlFor='category'>
                            Category
                        </label>
                        <select
                            name='category'
                            id='category'
                            className='border p-2 rounded-md'
                            required
                        >
                            <option value='Travel'>Travel</option>
                            <option value='Food'>Food</option>
                            <option value='Education'>Education</option>
                            <option value='Lifestyle'>Lifestyle</option>
                        </select>
                    </div>
                    <div>
                        <label className='text-gray-700 ' htmlFor='min_price'>
                            Short description
                        </label>
                        <input
                            id='min_price'
                            name='short_description'
                            type='text'
                            required
                            className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-2 mt-4'>
                    <label className='text-gray-700 ' htmlFor='description'>
                        Long Description
                    </label>
                    <textarea
                        className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
                        name='long_description'
                        id='description'
                        required
                    ></textarea>
                </div>
                <div className='flex justify-end mt-6'>
                    <button className='disabled:cursor-not-allowed px-8 py-2.5 leading-5 text-white transition-colors duration-300 transhtmlForm bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'>
                        submit
                    </button>
                </div>
            </form>
        </section>
    </div>
);
};

export default AddBlog;