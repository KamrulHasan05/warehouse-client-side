import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaTrash, FaEdit } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const TableProduct = ({ product, index }) => {

    const [show, setShow] = useState(false);
    const { _id, image, name, price, quantity } = product;

    const navigate = useNavigate()

    const handleDelete = id => {
        const handleClose = () => setShow(false);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => console.log(data));
        handleClose()
    }

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <tr className='text-center'>
                <td style={{ verticalAlign: 'middle' }}>{index + 1}</td>
                <td style={{ verticalAlign: 'middle' }}><img src={image} width={50} height={50} style={{ objectFit: 'contain' }} alt='' /></td>
                <td style={{ verticalAlign: 'middle' }}>{name}</td>
                <td style={{ verticalAlign: 'middle' }}>{price}</td>
                <td style={{ verticalAlign: 'middle' }}>{quantity}</td>
                <td style={{ verticalAlign: 'middle' }}>
                    <span className='text-success btn' onClick={() => navigate(`/update-details/${_id}`)}><FaEdit /></span>
                    <span className='text-danger btn' onClick={handleShow} ><FaTrash /></span>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you confirm to delete this product?</Modal.Title>
                </Modal.Header>
                <Modal.Footer className='justify-content-center'>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="danger" onClick={() => handleDelete(_id)}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default TableProduct;