import React from 'react';
import img from '../../images/notfound.png';

const NotFound = () => {
    return (
        <div className='text-center py-5'>
            <h3 className='mb-3'>Page Not Found</h3>
            <img src={img} className='img-fluid' alt="" />
        </div>
    );
};

export default NotFound;