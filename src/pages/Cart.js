import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { remove } from '../store/cartSlice';
import { Link } from 'react-router-dom';

// useSelector is used to subscribe to data from store
// useDispatch is used to mutate current state

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  }

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Cart</h2>
      {products.length <= 0 ? (
        <h3 className='emptyCart'>The cart is empty, add products from <Link to='/'>homepage...</Link></h3>
      ) :
        <div className='cartWrapper'>
          {
            products?.map((product) => (
              <div className='cartCard' key={product.id}>
                <img src={product.images[0]} alt='' />
                <h5>{product.title}</h5>
                <h5>${product.price}</h5>
                <button onClick={() => handleRemove(product.id)} className='btn'>Remove</button>
              </div>
            ))
          }
        </div>
      }
    </div>
  )
}

export default Cart