import Lottie from 'lottie-react';
import newsletter from '../assets/newsletter.json'
import SectionTitle from './SectionTitle';

const Newsletter = ({ handleSubmit }) => {

    return (
        <div>
            <SectionTitle heading={'Newsletter'}></SectionTitle>
            <div className='bg-gray-200 mb-12'>
                <div className='flex md:w-10/12 mx-auto justify-center items-center'>
                    <div className='flex-1'>
                        <form onSubmit={handleSubmit}>
                            <label className="input input-bordered flex items-center gap-2 my-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="currentColor"
                                    className="h-4 w-4 opacity-70">
                                    <path
                                        d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                    <path
                                        d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                                </svg>
                                <input type="email" name="email" className="grow" placeholder="Email" required />
                            </label>
                            <div className="flex justify-center">
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className='flex-1 flex items-center justify-center'>
                        <Lottie className='w-8/12' animationData={newsletter}></Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;