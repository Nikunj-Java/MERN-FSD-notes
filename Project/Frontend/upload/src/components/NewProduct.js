import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';


function NewProduct(){
    const [product,setProduct]=useState({name:'',price:0,description:'',quantity:0,picture:null})

    const navigate=useNavigate();


    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append('name',product.name);
        formData.append('price',product.price);
        formData.append('description',product.description);
        formData.append('quantity',product.quantity);
        formData.append('picture',product.picture);

        try {

            const resp=await axios.post('http://localhost:5000/api/product',formData,{
                headers:{
                    "content-type":'multipart/form-data'
                }
            })
            if(resp.status==201){
                alert("Product Created");
                //navigate('/products');
            }
            
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Enter Name of Product" value={product.name}
                    onChange={(e)=>setProduct({...product,name:e.target.value})}
                    />
                </div>

                <div>
                    <label>Price</label>
                    <input type="number" placeholder="Enter Price of Product" value={product.price}
                    onChange={(e)=>setProduct({...product,price:e.target.value})}
                    />
                </div>

                <div>
                    <label>Description</label>
                    <input type="text" placeholder="Enter Description of Product" value={product.description}
                    onChange={(e)=>setProduct({...product,description:e.target.value})}
                    />
                </div>


                <div>
                    <label>Quantity</label>
                    <input type="number" placeholder="Enter Qunatity of Product" value={product.quantity}
                    onChange={(e)=>setProduct({...product,quantity:e.target.value})}
                    />
                </div>


                <div>
                    <label>Select The Picture</label>
                    <input type="file" onChange={(e)=>setProduct({...product,picture:e.target.files[0]})}
                    />
                </div>

                <button type="submit" >AddProduct</button>

            </form>
        </div>
    );

}

export default NewProduct;