import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const items = useSelector((state) => state.cart);

    return (
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'sticky', top: '0', backgroundColor: '#241c15', padding: '1%', color: 'white' }}>
            <h2 style={{ margin: '0px' }}>REDUX STORE</h2>
            <div>
                <Link className="navLink" to='/'>Home</Link>
                <Link className="navLink" to='/cart'>Cart</Link>
                <span className='cartCount'>Cart Items: {items.length}</span>
            </div>
        </div>
    )
}

export default Navbar