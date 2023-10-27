import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Home";
import Hotstar from "./Hotstar";

function Paths(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="hotstar" element={<Hotstar/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Paths;