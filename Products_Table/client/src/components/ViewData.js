import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Image from './dproducts.png'
import { Link, useLocation } from 'react-router-dom'
import './BreadCrumb.css'


function ViewData(){
    const {id}=useParams()
    const [data,getData]=useState({})
    const location=useLocation()

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/products/api/"+id).then(
            response=>{getData(response.data)}
        )
    })
    return(
        <>
        <nav>
        <Link to="/" className={location.pathname === "/" ? "breadcrumb-active" : "breadcrumb-not-active"}>
        Home
        </Link>
        <span className="breadcrumb-arrow">&gt;</span>
        <Link  className={location.pathname.startsWith(`/viewData/${id}`) ? "breadcrumb-active" : "breadcrumb-not-active"}>
        Products
        </Link>
        </nav>
        <div className="container mt-5 " style={{border:"1px solid grey",height:"500px" ,boxShadow:"0 0 5px grey"}}>
            <div style={{display:"flex",justifyContent:"center"}}>
                <img src={Image} height="200px" width="200px"/>
            </div>
            <table className="table w-100">
                <tr>
                    &emsp;<td className="w-50">Product ID : </td><td>{data.product_id}</td>
                </tr>
                <br/>
                <tr>
                    &emsp;<td>Product Name : </td><td>{data.product_name}</td>
                </tr>
                <br/>
                <tr>
                    &emsp;<td>Product Price :</td><td>{data.product_price}</td>
                </tr>
                <br/>
                <tr>
                    &emsp;<td>Product Quantity :</td><td>{data.product_quantity}</td>
                </tr>
                <br/>
                <tr>
                    &emsp;<td>Product Description :</td><td>{data.description}</td>
                </tr>
            </table>
        </div>
        </>
    )
}

export default ViewData;