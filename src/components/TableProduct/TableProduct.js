import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { FaTrash, FaEdit } from "react-icons/fa";
import useManageProduct from './../useManageProduct';

const TableProduct = ({ product, index }) => {
    const [products, state, setProducts, setState] = useManageProduct()
    const [show, setShow] = useState(false);
    const { _id, image, name, price, quantity } = product;

    const handleDelete = id => {
        const handleClose = () => setShow(false);
        const url = `http://localhost:5000/product/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    const restProducts = products.filter(product => product._id !== id);
                    setProducts(restProducts);
                    setState(!state);
                }
            });
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
                    <span className='text-success btn'><FaEdit /></span>
                    <span className='text-danger btn' onClick={handleShow} ><FaTrash /></span>
                </td>
            </tr>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
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