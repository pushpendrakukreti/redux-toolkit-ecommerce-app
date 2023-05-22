import React, { useEffect, useState } from 'react'
import { add } from '../store/cartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice';

const Products = () => {
    const dispatch = useDispatch();
    const { data: products, status } = useSelector((state) => state.product);
    // const [products, setProducts] = useState([]);

    useEffect(() => {
        dispatch(fetchProducts());
        // console.log('logger 1');
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products');  //returns stream
        //     const data = await res.json();
        //     console.log('logger data', data);

        //     setProducts(data);
        // };

        // fetchProducts();
    }, []);

    const handleAdd = (product) => {
        //an action will be dispatched with or without data from application.
        //that action will call reducer

        dispatch(add(product));
    }

    if (status === STATUSES.LOADING) {
        return <h2>Loading...</h2>
    }

    if (status === STATUSES.ERROR) {
        return <h2>Something went wrong...</h2>
    }

    return (
        <div className='productsWrapper'>
            {
                products?.map(product => (
                    <div className='card' key={product.id}>
                        <img src={product.images[0]} alt='' />
                        <h4>{product.title}</h4>
                        <h5>${product.price}</h5>
                        <button onClick={() => handleAdd(product)} className='btn'>Add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}

export default Products