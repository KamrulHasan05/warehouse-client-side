import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ShowMyProduct from '../ShowMyProduct/ShowMyProduct';
import auth from './../../firebase.init';
import { Modal, Button } from 'react-bootstrap';

const MyProduct = () => {
    const [show, setShow] = useState(false);
    const [myproducts, setMyProducts] = useState([])
    const [user] = useAuthState(auth);
    const [deleteId, setDeleteId] = useState('')

    const email = user?.email;
    const url = `http://localhost:5000/myitems?email=${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [email, url, myproducts])

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
    const handleShow = (id) => {
        setShow(true);
        setDeleteId(id)
    }

    return (
        <section className='pt-5'>
            <div className="container">
                <h2 className='text-center mb-4'>My Items</h2>
                <div className="row">
                    {
                        myproducts.map(product => <ShowMyProduct
                            key={product._id}
                            product={product}
                            handleShow={handleShow}
                        />)
                    }
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Are you confirm to delete this product?</Modal.Title>
                        </Modal.Header>
                        <Modal.Footer className='justify-content-center'>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                            <Button variant="danger" onClick={() => handleDelete(deleteId)}>
                                Delete
                            </Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </section>
    );
};

export default MyProduct;