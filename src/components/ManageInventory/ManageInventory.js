import React from 'react';
import { Table } from 'react-bootstrap';
import TableProduct from '../TableProduct/TableProduct';
import useManageProduct from './../useManageProduct';
import { useNavigate } from 'react-router-dom';

const ManageInventory = () => {
    const [products] = useManageProduct();
    const navigate = useNavigate()
    return (
        <section className='pt-5'>
            <div className="container">
                <div className='d-flex justify-content-around mb-4'>
                    <h2 >Manage Inventory</h2>
                    <button className='btn btn-primary' onClick={() => navigate('/add-product')}>Add New Product</button>
                </div>
                <div className="row">

                    <div className="col-md-8 offset-md-2">
                        <Table striped bordered hover responsive>
                            <thead>
                                <tr className='text-center'>
                                    <th>#Sl</th>
                                    <th>Image</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((product, index) => <TableProduct
                                        key={product._id}
                                        index={index}
                                        product={product}
                                    />)
                                }
                            </tbody>
                        </Table>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ManageInventory;