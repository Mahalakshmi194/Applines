import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Home'
import Update from './Update'
import Delete from './Delete';
function Paths(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/update/:id" element={<Update/>}/>
            <Route path="/delete/:id" element={<Delete/>}/>
        </Routes>
        </BrowserRouter>
    )
}

export default Paths;