import React, { useRef } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';
import { toast } from 'react-toastify';

const AddProduct = () => {
    const [user] = useAuthState(auth);
    const nameRef = useRef('');
    const priceRef = useRef(0);
    const quantityRef = useRef(0);
    const supplierRef = useRef('');
    const descriptionRef = useRef('');
    const imageUrlRef = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
        const email = user?.email
        const name = nameRef.current.value;
        const price = priceRef.current.value;
        const quantity = quantityRef.current.value;
        const supplier = supplierRef.current.value;
        const description = descriptionRef.current.value;
        const image = imageUrlRef.current.value;

        const data = { name, price, quantity, supplier, description, image, email };

        const url = 'http://localhost:5000/product'
        fetch(url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    event.target.reset();
                    toast.success('Product added successful')
                }
            })

    }

    return (
        <section className='pt-5'>
            <div className="container">
                <h2 className='text-center mb-4'>Add Product</h2>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <form className='form' onSubmit={handleSubmit}>
                            <div className="form-group mb-3">
                                <label htmlFor="name">Product Name</label>
                                <input className="form-control" type="text" ref={nameRef} id="name" placeholder='product name' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="price">Product Price</label>
                                <input className="form-control" type="number" min='0' ref={priceRef} id="price" placeholder='product price' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="quantity">Product Quantity</label>
                                <input className="form-control" type="number" min='0' ref={quantityRef} id="quantity" placeholder='product quantity' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="supplier">Supplier Name</label>
                                <input className="form-control" type="text" ref={supplierRef} id="supplier" placeholder='product supplier name' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Product Description</label>
                                <textarea className='form-control' ref={descriptionRef} id="description" rows="5" placeholder='product description'></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image">Product Image</label>
                                <input type="text" ref={imageUrlRef} id="image" className='form-control' />
                            </div>
                            <div className="form-group mb-3">
                                <input type="submit" value="Add Product" className='btn btn-primary' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddProduct;