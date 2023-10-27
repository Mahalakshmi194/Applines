import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Delete(){
    const {id}=useParams();
    const navigate=useNavigate();

    useEffect(()=>{
        const confirm=window.confirm("Are you sure want to delete....")
        if(confirm){
            // axios.get("http://127.0.0.1:8000/api/"+id).then(
            // response=>console.log(response.data)
            axios.delete("http://127.0.0.1:8000/api/"+id).then(
                // alert("Field deleted successfully"),
                navigate("/")
            ).catch(error=>console.error(error))
        }
        else{
            navigate("/")
        }
    })
   

}

export default Delete;