import { useContext } from "react";
import { AuthContext } from "../authprovider/AuthProvider";

const AddBlog = () => {
    const {user} = useContext(AuthContext)
    const handleSubmit = () =>{

    }
    return (
        <div className='flex justify-center items-center min-h-[calc(100vh-306px)] my-12'>
    <section className=' p-2 md:p-6 mx-auto bg-white rounded-md shadow-md '>
      <h2 className='text-lg font-semibold text-gray-700 capitalize '>
        Post a Job
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
              className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
            />
          </div>

          <div>
            <label className='text-gray-700 ' htmlFor='emailAddress'>
            Image URL
            </label>
            <input
              id='emailAddress'
              type='email'
              name='image_url'
              defaultValue={user?.email}
              disabled={true}
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
            >
              <option value='Web Development'>Travel</option>
              <option value='Graphics Design'>Food</option>
              <option value='Digital Marketing'>Education</option>
              <option value='Digital Marketing'>Lifestyle</option>
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
            name='description'
            id='description'
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