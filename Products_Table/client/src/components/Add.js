import {  useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Add(){
    const [data,addData]=useState({product_id:'',product_name:'',product_price:'',product_quantity:'',description:''})
    const navigate=useNavigate()
    function dataHandler(e){
        e.preventDefault()
        // console.log(data)
        axios.post("http://127.0.0.1:8000/products/api/",data).then(
            alert("Data added successfully"),
            navigate("/")
        )
    }

    return(
        <div className="container mb-5 mt-5" style={{border:"1px solid grey",boxShadow:"0px 0px 10px grey"}}>
            <h2 className="text-center mt-4 mb-4">Add Details</h2>
            <form onSubmit={dataHandler}>
                <table style={{height:"100%",width:"100%",padding:"100",borderSpacing:"50"}}>
                    <tr>
                        <td><label >Product Id :</label></td>
                        <td><input type="text"className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_id:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Product Name :</label></td>
                        <td><input type="text"className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_name:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Product Price :</label></td>
                        <td><input  type="number"className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_price:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label  >Product Quantity :</label></td>
                        <td><input  type="number"className="form-control w-50" onChange={(e)=>{
                    addData({...data,product_quantity:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label>Description : </label></td>
                        <td><textarea rows="5" className="form-control w-50" onChange={(e)=>{
                            addData({...data,description:e.target.value})
                        }}/></td>
                    </tr>
                </table>
                <center><input type="submit" className="btn btn-primary mb-4"/></center>
                <br/>
            </form>
        </div>
    )
}
export default Add;