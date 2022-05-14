import { useEffect, useState } from 'react';

const useManageProduct = () => {
    const [state, setState] = useState(false)
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [state])
    return [products, state, setProducts, setState];
};

export default useManageProduct;