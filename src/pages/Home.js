import React from 'react'
import Products from '../components/Products'

const Home = () => {
    return (
        <div>
            {/* <h2 className='heading'>Welcome to the Redux toolkit store</h2> */}
            <section>
                <h2 style={{textAlign:'center'}}>Products</h2>
                <Products />
            </section>
        </div>
    )
}

export default Home