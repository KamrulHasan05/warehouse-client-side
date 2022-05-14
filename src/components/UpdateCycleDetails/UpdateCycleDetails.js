import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from '../Loading/Loading';


const UpdateCycleDetails = () => {

    const { id } = useParams();
    const [cycle, setCycle] = useState({});
    const [updateCycle, setUpdateCycle] = useState(false);
    const stockQuantity = useRef('');

    useEffect(() => {
        const url = `http://localhost:5000/product/${id}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setCycle(data))
    }, [updateCycle, id])
    if (cycle === undefined) {
        return <Loading />
    }

    const { image, name, price, quantity, supplier, description } = cycle;

    const handleDelivery = async () => {
        const { ...newCycle } = cycle;
        const quantity = parseInt(newCycle.quantity);
        const newQuantity = quantity - 1;
        newCycle.quantity = JSON.stringify(newQuantity);

        const url = `http://localhost:5000/product/${id}`;
        const updateData = await axios.put(url, newCycle);
        if (newCycle.quantity < '0') {
            return alert('out of stock');

        }
        else {
            if (updateData.data.acknowledged === true) {
                setUpdateCycle(!updateCycle)
            }
        }
    }

    const handleRestock = async () => {
        const newStock = stockQuantity.current.value;
        const { ...newCycle } = cycle;
        const quantity = parseInt(newCycle.quantity);
        const newQuantity = quantity + parseInt(newStock);
        newCycle.quantity = JSON.stringify(newQuantity);

        const url = `http://localhost:5000/product/${id}`;
        const updateData = await axios.put(url, newCycle);
        if (newCycle.quantity <= '0') {
            alert('out of stock')
        }
        else {
            if (updateData.data.acknowledged === true) {
                setUpdateCycle(!updateCycle)
            }
        }
        stockQuantity.current.value = ''
    }




    return (
        <section className='pt-5'>
            <div className="container">
                <div className="row g-md-5 g-3">
                    <div className="col-md-6">
                        <div className="cycle-details-img">
                            <img src={image} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="cycle-details-info">
                            <h2>{name}</h2>
                            <p>{description}</p>
                            <h4>Price: {price}</h4>
                            <h4>Quantity: {quantity}</h4>
                            <h5><small>Supplier: {supplier}</small></h5>
                            <button onClick={handleDelivery} className='btn btn-primary mt-4'>Delivery</button>
                        </div>
                        <div className="stock-product mt-5">
                            <div className="input-group">
                                <input type="number" className='form-control' ref={stockQuantity} placeholder='Stock Product Qunatity' min='0' />
                                <input type="submit" onClick={handleRestock} className='btn btn-outline-primary' value="Restock" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpdateCycleDetails;