import React from 'react';

const Loading = () => {
    return (
        <div className='md:container mx-auto mt-20'>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
            <span className="loading loading-ring loading-xl"></span>
        </div>
    );
};

export default Loading;