import { useState } from "react";

//importing JSON Data
import productsData from './product.json'

export function ProductList(){
    const [product]=useState(productsData);

    return(
        <div className="container">
            <h1>Product List</h1>
            <table className="table table-bordered table-hover table-striped">
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>Price</th><th>Description</th><th>Ratings</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        product.map((item,index)=>{
                            return (<tr key={index}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>{item.rating}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )

}