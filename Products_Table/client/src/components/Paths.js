import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home'
import Add from './Add';
import UpdateData from './UpdateData';
import DeleteData from './DeleteData';
import ViewData from './ViewData';
import Barchart from './Barchart';
import DonutChart from './DonutChart';
import PieChart from './PieChart';

function Paths(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/add" element={<Add/>}/>
            <Route path="/updateData/:id" element={<UpdateData/>}/>
            <Route path="/deleteData/:id" element={<DeleteData/>}/>
            <Route path="/viewData/:id" element={<ViewData/>}/>
            <Route path="/barChart" element={<Barchart/>}/>
            <Route path="/donutChart" element={<DonutChart/>}/>
            <Route path="/pieChart" element={<PieChart/>}/>
        </Routes>
        </BrowserRouter>
    )
}
export default Paths;