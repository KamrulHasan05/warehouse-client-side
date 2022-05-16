import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import ShowMyProduct from '../ShowMyProduct/ShowMyProduct';
import auth from './../../firebase.init';

const MyProduct = () => {
    const [user] = useAuthState(auth);
    const email = user?.email;
    const [myproducts, setMyProducts] = useState([])
    const url = `http://localhost:5000/myitems?email=${email}`;
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyProducts(data))
    }, [email, url])

    return (
        <section className='pt-5'>
            <div className="container">
                <h2 className='text-center mb-4'>My Items</h2>
                <div className="row">
                    {
                        myproducts.map(product => <ShowMyProduct
                            key={product._id}
                            product={product}
                        />)
                    }
                </div>
            </div>
        </section>
    );
};

export default MyProduct;