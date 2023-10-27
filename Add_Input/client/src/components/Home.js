import {useEffect, useState} from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import axios from 'axios';

import { Dialog } from 'primereact/dialog';

        
function Home(){
    const [data,setData]=useState([])
    const [visible,updateDialogueValue]=useState(false)
    const [postData,postedData]=useState({serial_no:'',first_name:'',last_name:'',email:'',course:''})
    const navigate=useNavigate()
    const [search,setsearch]=useState("")
    useEffect(()=>{
        if (search !==""){
            axios.get(`http://127.0.0.1:8000/api/filter/?query=${search}`).then(
            response=>{
                setData(response.data)
                // console.log(data)
                // console.log(response.data)

            }
        ).catch(error=>console.error(error))

        }
        else{
            axios.get("http://127.0.0.1:8000/api/").then(
            // response=>console.log(response.data)
            response=>setData(response.data)
        ).catch(error=>console.error(error))

        }
    },[search])

    function openDialogueBox(){
        updateDialogueValue(true)
    }

    function closeDialogueBox(){
        updateDialogueValue(false)
    }

    function formHandler(e){
        e.preventDefault()
        axios.post("http://127.0.0.1:8000/api/",postData).then(
            updateDialogueValue(false),
            navigate("/")
        ).then(
            axios.get("http://127.0.0.1:8000/api/").then(
                response=>setData(response.data)
            ).catch(error=>console.error(error))
        ).catch(error=>console.error(error))
    }

    function deleteData(id){
        const confirm=window.confirm("Are you sure want to delete....")
        if(confirm){
            axios.delete("http://127.0.0.1:8000/api/"+id).then(
                alert("Field deleted successfully")
            ).catch(error=>console.error(error))
        }
    }

    // function filterData(e){
    //     // e.preventDefault()
    //     axios.get(`http://127.0.0.1:8000/api/filter/?first_name=${search}`).then(
    //         response=>{
    //             setData(response.data)
    //             console.log(data)
    //             console.log(response.data)

    //         }
    //     ).catch(error=>console.error(error))
    // }


    return(
        <div className='container'>
          
            <div style={{display:"flex",justifyContent:"space-between"}} >
                <input type="text" className='form-control w-50 mt-3 mb-3' placeholder='search here with first name...' onChange={(e)=>{
                    setsearch(e.target.value)
                    // filterData()
                    }}/>
                <button className='btn btn-primary w-20 mt-3 mb-3' onClick={openDialogueBox} >Add Details</button>
            </div>
        <Dialog visible={visible} style={{ width: '50vw' }} onHide={closeDialogueBox}>
        <div className="container mb-5 mt-5">
            <h2 className="text-center mt-4 mb-4">Add Details</h2>
            <form onSubmit={formHandler}>
                <table style={{height:"100%",width:"100%",padding:"100",borderSpacing:"50"}}>
                    <tr>
                        <td><label >Serial NUmber :</label></td>
                        <td><input type="number" className="form-control w-50" onChange={(e)=>{
                    postedData({...postData,serial_no:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >First Name :</label></td>
                        <td><input type="text"className="form-control w-50" onChange={(e)=>{
                    postedData({...postData,first_name:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label >Last Name :</label></td>
                        <td><input  type="text"className="form-control w-50" onChange={(e)=>{
                    postedData({...postData,last_name:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label  >Email :</label></td>
                        <td><input  type="email"className="form-control w-50" onChange={(e)=>{
                    postedData({...postData,email:e.target.value})}}/></td>
                    </tr>
                    <br/>
                    <tr>
                        <td><label  >Course :</label></td>
                        <td><input  type="text"className="form-control w-50" onChange={(e)=>{
                    postedData({...postData,course:e.target.value})}}/></td>
                    </tr>
                    <br/>
                </table>
                <center><input type="submit" className="btn btn-primary mb-4"/></center>
                <br/>
            </form>
        </div>
        </Dialog>
            <div>
                <table style={{border:"1px solid grey",width:"100%",height:"100%",boxShadow:"0px 0px 5px grey"}} className='table table-hover'>
                    <tr style={{border:"1px solid grey"}} >
                        <th><center>Serial No</center></th><th>First Name</th><th>Last Name</th><th>Email</th><th>Course</th><th>Remove</th><th>Edit</th>
                    </tr>
                    {
                        data.map((item)=>{
                            return(
                                <tr key={item.id} style={{border:"1px solid grey"}} className='table table-hover'>
                                    <td><center>{item.serial_no}</center></td><td>{item.first_name}</td><td>{item.last_name}</td><td>{item.email}</td><td>{item.course}</td>
                                    <td><button onClick={()=>{deleteData(item.id)}}  className="material-symbols-outlined btn" >delete</button></td>
                                    <td><Link to={`/update/${item.id}`} className="material-symbols-outlined btn">edit_square</Link></td>
                                </tr>
                            )
                        })
                    }
                </table>
            </div>        
        </div>
    )
}

export default Home;