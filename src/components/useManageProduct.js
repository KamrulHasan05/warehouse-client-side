import { useEffect, useState } from 'react';

const useManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts];
};

export default useManageProduct;