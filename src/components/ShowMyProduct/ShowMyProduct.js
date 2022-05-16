import React from 'react';
import { Card } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";


const ShowMyProduct = ({ product, handleShow }) => {
    const { _id, image, name, price, supplier, quantity, description } = product
    return (
        <div className='col-md-4'>
            <Card style={{
                minHeight: '628px'
            }}>
                <Card.Img variant="top" src={image} style={{ height: '278px', objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h5><small>Supplier: {supplier}</small></h5>
                </Card.Body>
                <Card.Footer className='bg-danger'>
                    <button className='btn text-white fw-bold w-100 d-flex align-items-center justify-content-center' onClick={() => handleShow(_id)}><FaTrash className='me-3' /> Delete Product</button>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default ShowMyProduct;