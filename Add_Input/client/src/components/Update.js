import axios from "axios";
import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom";


function Update(){
    const {id}=useParams()
    const [data,setData]=useState({})
    const navigate=useNavigate()

    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/api/"+id).then(
            response=>{
                // console.log(response)
                setData(response.data)
                console.log(data)
            }
        )
    },[])

    function dataHandler(e){
        e.preventDefault()
        axios.put("http://127.0.0.1:8000/api/"+id,data).then(
            alert("Data Updated Successfully"),
            navigate("/")
        )
    }

    return(
        <div className="container mb-5 mt-5" style={{border:"1px solid grey",boxShadow:"0px 0px 10px grey"}}>
            <h2 className="text-center mt-4 mb-4">Update Details</h2>
            <form onSubmit={dataHandler}>
                <table style={{height:"100%",width:"100%",padding:"100",borderSpacing:"50"}}>
                    <tr>
                        <td><label >Serial NUmber:</label></td>
                        <td><input type="text" className="form-control w-50" value={data.serial_no} disabled onChange={(e)=>{
                    setData({...data,serial_no:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >First Name :</label></td>
                        <td><input type="text" className="form-control w-50" value={data.first_name} onChange={(e)=>{
                    setData({...data,first_name:e.target.value})
                    }}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Last Name :</label></td>
                        <td><input  type="text" className="form-control w-50" value={data.last_name} onChange={(e)=>{
                    setData({...data,last_name:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Email :</label></td>
                        <td><input  type="email" className="form-control w-50" value={data.email} onChange={(e)=>{
                    setData({...data,email:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label  >Course :</label></td>
                        <td><input  type="text" className="form-control w-50" value={data.course} onChange={(e)=>{
                    setData({...data,course:e.target.value})}}/></td>
                    </tr>
                    <br/>
                </table>
                <center><input type="submit" className="btn btn-primary mb-4"/></center>
                <br/>
            </form>
        </div>
    )
}

export default Update;