import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function UpdateData(){
    const {id}=useParams()
    const [data,setData]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/products/api/"+id).then(
            response=>{
                // console.log(response)
                setData(response.data)
                console.log(data)
            }
        )
    },[])

    function dataHandler(e){
        e.preventDefault()
        axios.put("http://127.0.0.1:8000/products/api/"+id,data).then(
            alert("Data Updated Successfully"),
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
                        <td><input type="text"className="form-control w-50" value={data.product_id} disabled onChange={(e)=>{
                    setData({...data,product_id:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Product Name :</label></td>
                        <td><input type="text"className="form-control w-50" value={data.product_name} onChange={(e)=>{
                    setData({...data,product_name:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Product Price :</label></td>
                        <td><input  type="number"className="form-control w-50" value={data.product_price} onChange={(e)=>{
                    setData({...data,product_price:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label  >Product Quantity :</label></td>
                        <td><input  type="number"className="form-control w-50" value={data.product_quantity} onChange={(e)=>{
                    setData({...data,product_quantity:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td>Description :</td>
                        <td><textarea rows="5" className="form-control w-50" value={data.description} onChange={(e)=>{
                            setData({...data,description:e.target.value})
                        }}/></td>
                    </tr>
                </table>
                <center><input type="submit" className="btn btn-primary mb-4"/></center>
                <br/>
            </form>
        </div>
    )
}

export default UpdateData;