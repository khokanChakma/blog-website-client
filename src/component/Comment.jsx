import React from 'react';

const Comment = ({cmt}) => {
    const {comment,name,photo} = cmt;
    return (
        <div className='my-4 space-y-2'>
            <div className='flex gap-2 items-center'>
                <div className=''>
                    <img className='w-12 h-12 rounded-full' src={photo} alt="" />
                </div>
                <div className='text-xl font-semibold'>{name}</div>
            </div>
            <div>{comment}</div>
        </div>
    );
};

export default Comment;