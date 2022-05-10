import React, { useEffect, useState } from 'react';
import SingleCycle from '../SingleCycle/SingleCycle';

const Inventory = () => {
    const [cycles, setCycles] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/product')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, [])

    return (
        <section className='pt-5'>
            <div className="container">
                <h2 className='mb-3 text-center'>Our Products</h2>
                <div className="row g-md-5 g-3">
                    {
                        cycles.map(cycle => <SingleCycle
                            key={cycle._id}
                            cycle={cycle}
                        />)
                    }
                </div>
                <div className="manage-inventory mt-5 text-center">
                    <button className='btn btn-primary w-25'>Manage Inventory</button>
                </div>
            </div>
        </section>
    );
};

export default Inventory;