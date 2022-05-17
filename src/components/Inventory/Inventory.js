import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import SingleCycle from '../SingleCycle/SingleCycle';
import { useNavigate } from 'react-router-dom';

const Inventory = () => {
    const [cycles, setCycles] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://frozen-plains-21715.herokuapp.com/product')
            .then(res => res.json())
            .then(data => setCycles(data))
    }, [])
    if (cycles.length === 0) {
        return <Loading />
    }
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
                    <button onClick={() => navigate('/manage-inventory')} className='btn btn-primary w-25'>Manage Inventory</button>
                </div>
            </div>
        </section>
    );
};

export default Inventory;