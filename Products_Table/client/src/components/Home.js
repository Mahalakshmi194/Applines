import React, { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Dproducts from './dproducts.png';
import { Link } from 'react-router-dom';
import Barchart from './Barchart';
import PieChart from './PieChart';
import DonutChart from './DonutChart';
function Home(){
    const [data,setdata]=useState([])
    const [search,searchData]=useState("")
    const [dropD,dropdown]=useState("")

    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/products/api/").then(
            response=>{setdata(response.data)
                // console.log(response.data)
            }
        ).catch(error=>console.error(error))
    },[])

    // DROPDOWN SEARCH
    useEffect(()=>{
        if(dropD!=="All"){
            axios.get(`http://127.0.0.1:8000/products/api/filterRange/${dropD}`).then(
            res=>{
                setdata(res.data)
                
            }
        ).catch(error=>console.log(error))
        }
        else{
            axios.get("http://127.0.0.1:8000/products/api/").then(
            response=>{setdata(response.data)
                // console.log(response.data)
            }
        ).catch(error=>console.error(error))
        }
        
    },[dropD])

    // FILTERING
    useEffect(()=>{
        if(search!=""){
            axios.get(`http://127.0.0.1:8000/products/api/filter?product_name=${search}`).then(
                res=>setdata(res.data)
            ).catch(error=>console.error(error))
        }
        else{
            axios.get("http://127.0.0.1:8000/products/api/").then(
            response=>{setdata(response.data)
                // console.log(response.data)
            }
        ).catch(error=>console.error(error))
        }
    },[search])
    
    var sum=0
    function grandTotal(item){
        sum=sum+item
        return sum
    }

    function incrementData(item){
        axios.patch("http://127.0.0.1:8000/products/api/"+item.id,{"product_quantity":item.product_quantity+1}).then(
            axios.get("http://127.0.0.1:8000/products/api/").then(
                response=>setdata(response.data)
            ).catch(error=>console.error(error))
        )

    }
    function decrementData(item){
        axios.patch("http://127.0.0.1:8000/products/api/"+item.id,{"product_quantity":item.product_quantity-1}).then(
            axios.get("http://127.0.0.1:8000/products/api/").then(
                response=>setdata(response.data)
            ).catch(error=>console.error(error))
        )
    }

   


    return(
        <div className="container">
            <h2 className='text-center mt-2' style={{background:"rgb(165, 159, 159)"}}>
                Products List
            </h2>
            <div style={{display:"flex",justifyContent:"end",margin:9}}> 
            <input type="text" placeholder='search here...' onChange={(e)=>{
                searchData(e.target.value)
            }}/>
           
            <select onChange={(e)=>{
                dropdown(e.target.value)
            }}>
                <option value='All'>All</option>
                <option value="100-200">100-200</option>
                <option value="200-300">200-300</option>
                <option value="300-400">300-400</option>
                <option value="400+">400+</option>
            </select>
            <Link to="/add" className="btn btn-primary w-20">Add Item</Link>
            </div>
            <div>
                {
                    data.map((item,index)=>{
                        return(
                            <div className="card mb-2 w-100"  key={index}>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={Dproducts} className="img-fluid rounded-start" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">Product Name: {item.product_name}</h5>
                                            <br/>
                                            <h5 className="card-text">Product Price : {item.product_price} </h5>
                                            <br/>
                                            <h5 className="card-text">
                                                <small>Product Quantity : {item.product_quantity}</small> &emsp;
                                                <button className='btn btn-warning' onClick={()=>{incrementData(item)}}>+</button>&nbsp;
                                                <button className='btn btn-warning' onClick={()=>{decrementData(item)}}>-</button>
                                            </h5>
                                            <br/>
                                            <h5 className="card-text" onClick={grandTotal(item.product_price * item.product_quantity)}>Total : {item.product_price * item.product_quantity} </h5>
                                            <div style={{display:"flex",justifyContent:"end"}}>
                                                <Link to={`/viewData/${item.id}`} className="material-symbols-outlined btn btn-primary btn-lg">visibility</Link>&emsp;&emsp;
                                                <Link to={`/updateData/${item.id}`} className="material-symbols-outlined btn btn-success btn-lg">Edit</Link>&emsp;&emsp;
                                                <Link to={`/deleteData/${item.id}`} className="material-symbols-outlined btn btn-danger btn-lg">Delete</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div style={{display:"flex",justifyContent:"end"}}><h2>GrandTotal: {sum}</h2></div>
            <div>
                <div className='row'>
                    <div className='col-sm' style={{width:'50px'}}><Barchart/></div>
                    <div className='col-sm'><PieChart/></div>
                    <div className='col-sm'><DonutChart/></div>
                </div>
                
            </div>
        </div>
    )
}

export default Home;