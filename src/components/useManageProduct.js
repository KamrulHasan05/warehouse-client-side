import { useEffect, useState } from 'react';

const useManageProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://frozen-plains-21715.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [products])
    return [products, setProducts];
};

export default useManageProduct;