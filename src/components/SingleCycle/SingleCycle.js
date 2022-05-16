import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleCycle = ({ cycle }) => {
    const { _id, name, price, image, description, quantity, supplier } = cycle
    return (
        <div className='col-md-4'>
            <Card style={{
                minHeight: '628px'
            }}>
                <Card.Img variant="top" className='img-height' src={image} style={{ height: '278px', objectFit: 'contain' }} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <h5><small>Supplier: {supplier}</small></h5>
                </Card.Body>
                <Card.Footer className='bg-primary'>
                    <Link to={`update-details/${_id}`}><button className='btn text-white fw-bold w-100'>Update Product</button></Link>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default SingleCycle;