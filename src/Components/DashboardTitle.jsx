import React from 'react';

const DashboardTitle = ({ title, description }) => {
    return (
        <div>
            <div className='p-3 ml-5 border-white/5 pt-4'>
                <h1 className='text-3xl font-extrabold text-white pb-1'>{title}</h1>
                <p className='text-sm text-zinc-400'> {description}</p>
            </div>

        </div>
    );
};

export default DashboardTitle;