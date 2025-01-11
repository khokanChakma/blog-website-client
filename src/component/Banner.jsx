import banner from '../assets/banner.jpeg'
import { easeOut, motion } from "framer-motion";
import blog2 from '../assets/blog 2.jpg'
import blog3 from '../assets/blog 3.jpg'

const Banner = () => {

    return (
        <div className="hero bg-base-200 md:h-[330px] bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
            <div className="hero-content w-full flex-col lg:flex-row-reverse">
                <div className='flex-1'>
                    <motion.img
                        src={blog2}
                        animate={{ y: [0, 30, 0] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 h-32 rounded border-2 border-blue-400 shadow-2xl" />
                    <motion.img
                        src={blog3}
                        animate={{ x: [20, 0, 20] }}
                        transition={{ duration: 10, repeat: Infinity }}
                        className="max-w-sm w-64 h-32 rounded border-2 border-blue-400 shadow-2xl" />
                </div>
                <div className='flex-1'>
                    <motion.h1 className="text-5xl font-bold"
                        animate={{ color: ['#0185c7', '#797b7b', '#ff6133','#0185c7'] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >Discover Stories That Inspire & Inform</motion.h1>
                    <p className="py-6">Dive into a world of engaging blogs, insightful articles, and captivating stories. Stay informed, entertained, and inspired every day!</p>
                </div>
            </div>
        </div>
        // <div
        //     className="hero min-h-screen bg-cover bg-center"
        //     style={{
        //         backgroundImage: `url(${banner})`,
        //     }}>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="hero-content text-neutral-content text-center">
        //         <div className="max-w-md">
        //             <h1 className="mb-5 text-5xl font-bold">Welcome to Our blog</h1>
        //             <p className="mb-5">

        //             </p>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Banner;