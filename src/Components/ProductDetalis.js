import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import './ProductDetails.css'


export default  function ProductDetalis ()  {
    const api_url="https://fakestoreapi.com/products"
    const prams =useParams()
    const [product,setProduct]=useState([])
    useEffect(() => {
        fetch(`${api_url}/${prams.productID} ` )
        .then((res) => res.json())
        .then((product)=> setProduct(product))
    },[])
    return (
        <div className="container p-5 " >
            <div className="card" style={{width:"75rem"}}>
                <img  src={product.image} alt={product.title} />
                <h4 className="title text-center text-info p-5"> <span className="text-dark">Product Name:</span> {product.title}</h4>
                <p className="category text-center text-info fs-3"><span className="text-dark">Category of Product : </span>{product.category}</p>
                <div className="card-body">
                    <p className="text-center text-dark fs-4"> Description of Product :</p>
                    <p className="text-center text-secondary fs-4">{[product.description]}</p>
                </div>
                <p className="price text-center text-info fs-2"> <span className="text-dark"> Price of Product : </span>{product.price} $</p>
                
            </div>
        </div>
    )
}


