import React from 'react';
import {Link} from 'react-router-dom';
function Header(){

    return(
        <div>
            <h3>Product Management Application</h3>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/products'>All Products</Link></li>
                <li><Link to='/addproduct'>Add Product</Link></li>
            </ul>
        </div>
    )
}

export default Header;