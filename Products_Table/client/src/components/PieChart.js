import {Chart as ChartJS,Tooltip,Legend, ArcElement} from "chart.js";
import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import axios from 'axios';

function PieChart() {
    ChartJS.register(
        ArcElement,Tooltip,Legend
    )
    const price=[]
    const name=[]
    const[graph,setgraph]=useState([])
    useEffect(()=>{
        axios.get("http://127.0.0.1:8000/products/api/").then(
            response=>{setgraph(response.data)
                // console.log(response.data)
            }
        ).catch(error=>console.error(error))
    },[])

      {graph.map((item)=>{
        price.push(item.product_price)
        name.push(item.product_name)
      })}
      console.log(name)
      const chartDataset = {
        labels: name,
        datasets: [
          {
            data: price,
            backgroundColor: ['rgba(75, 192, 192, 0.9)', 'rgba(255, 99, 132, 0.9)', 'rgba(255, 205, 86, 0.9)',"blue"],
          },
        ],
      };
    const options={

    }


  return (
    <div>
      <Pie data={chartDataset} options={{ maintainAspectRatio: false }} />
    </div>
  );
}

export default PieChart;
