import React from 'react';
import SectionTitle from './SectionTitle';

const Ingredients = () => {
    return (
        <div>
            <SectionTitle heading={'Ingredients'}></SectionTitle>
            <div className='bg-base-300 py-6'>
                <div className='space-x-4 md:w-6/12 mx-auto text-center bg-base-300 space-y-4'>
                    <button className='btn bg-[#048686] text-white'>React</button>
                    <button className='btn bg-[#048686] text-white'>Framer Motion</button>
                    <button className='btn bg-[#048686] text-white'>React-data-table</button>
                    <button className='btn bg-[#048686] text-white'>Node js</button>
                    <button className='btn bg-[#048686] text-white'>Express</button>
                    <button className='btn bg-[#048686] text-white'>MongoDB</button>
                    <button className='btn bg-[#048686] text-white'>dotenv</button>
                    <button className='btn bg-[#048686] text-white'>cors</button>
                    <button className='btn bg-[#048686] text-white'>Firebase</button>
                    <button className='btn bg-[#048686] text-white'>Tanstack-Table</button>
                    <button className='btn bg-[#048686] text-white'>Tailwindcss</button>
                    <button className='btn bg-[#048686] text-white'>DaisyUI</button>

                </div>
            </div>
        </div>
    );
};

export default Ingredients;