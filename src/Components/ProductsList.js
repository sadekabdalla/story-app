import Product from "./Product"
import {useEffect,useState} from 'react'
export default function ProductsList()  {
    const ApiUrl="https://fakestoreapi.com/products";
    const [Products,setProducts]=useState([])
    const [Categories,setCategories]=useState([])
    const getProduct=() => {
        fetch(ApiUrl)
        .then((res)=> res.json())
        .then((data)=>setProducts(data))
    }
    const getCategories=() => {
        fetch(`${ApiUrl}/categories`)
        .then((res)=> res.json())
        .then((data)=>setCategories(data))
    }
    const getProductIncategorie=(catName)=>{
        fetch(`${ApiUrl}/category/${catName}`)
        .then((res) => res.json())
        .then((data)=>setProducts(data))
    }
    useEffect(()=>{
        getProduct()
        getCategories()
    },[])
    return (
        <div className="container mt-5">
            <h1 className="text-center p-5">Products Categories : </h1>
            <button  onClick={()=>getProduct()}  className="btn btn-outline-success  p-3">All Products</button>
            {Categories.map((cat)=>{
                return <button key={cat} onClick={()=>getProductIncategorie(cat)} style={{marginLeft:"150px"}} className="btn btn-outline-success  p-3">{cat}</button>
            })}
            <hr></hr>
            <h2 className="text-center text-danger">Our Products</h2>
            <div className="row">
                {Products.map((product) => {
                    return (
                        <div className="col-lg-4" key={product.id}>
                            <Product product={product}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

