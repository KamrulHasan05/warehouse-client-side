import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import TableProduct from '../TableProduct/TableProduct';
import useManageProduct from './../useManageProduct';

const ManageInventory = () => {
    const [products, setProducts] = useManageProduct([]);


    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Table striped bordered hover>
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