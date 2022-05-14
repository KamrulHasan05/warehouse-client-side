import React, { useRef } from 'react';

const AddProduct = () => {
    const name = useRef('');
    const price = useRef(0);
    const quantity = useRef(0);
    const supplier = useRef('');
    const description = useRef('');
    const imageUrl = useRef('');

    const handleSubmit = event => {
        event.preventDefault();
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
                                <input className="form-control" type="text" ref={name} id="name" placeholder='product name' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="price">Product Price</label>
                                <input className="form-control" type="number" min='0' ref={price} id="price" placeholder='product price' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="quantity">Product Quantity</label>
                                <input className="form-control" type="number" min='0' ref={quantity} id="quantity" placeholder='product quantity' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="supplier">Supplier Name</label>
                                <input className="form-control" type="text" ref={supplier} id="supplier" placeholder='product supplier name' />
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="description">Product Description</label>
                                <textarea className='form-control' ref={description} id="description" rows="5" placeholder='product description'></textarea>
                            </div>
                            <div className="form-group mb-3">
                                <label htmlFor="image">Product Image</label>
                                <input type="text" ref={imageUrl} id="image" className='form-control' />
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