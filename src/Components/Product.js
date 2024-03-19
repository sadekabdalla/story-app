import './Product.css'
import { Link } from "react-router-dom"
export default  function Product  ({product }) {
    console.log(product)
    
        return (
            <div >
                <div className="card m-5 " style={{width: "20rem" ,height:"600px"}}>
                    <img src={product.image} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-title text-center text-info fs-4">{product.title}</p><hr></hr>
                        <p className='card-category pt-5 text-center text-success fs-5'>category : {product.category}</p>
                    </div>
                    <Link to={`/product/${product.id}`} className='btn btn-outline-primary'>More detalis</Link>
                    </div>
            </div>
        )
}

