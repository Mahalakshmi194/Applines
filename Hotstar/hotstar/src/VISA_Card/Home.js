import React, { useEffect, useState } from 'react';
import chip from './chip.png';
function Home(){
    const [number,updateNUmber]=useState("");
    const [numlis1,updateNUmlis1]=useState("#")
    const [numlis2,updateNUmlis2]=useState("#")
    const [numlis3,updateNUmlis3]=useState("#")
    const [numlis4,updateNUmlis4]=useState("#")
    const [numlis5,updateNUmlis5]=useState("#")
    const [numlis6,updateNUmlis6]=useState("#")
    const [numlis7,updateNUmlis7]=useState("#")
    const [numlis8,updateNUmlis8]=useState("#")
    const [numlis9,updateNUmlis9]=useState("#")
    const [numlis10,updateNUmlis10]=useState("#")
    const [numlis11,updateNUmlis11]=useState("#")
    const [numlis12,updateNUmlis12]=useState("#")
    const [numlis13,updateNUmlis13]=useState("#")
    const [numlis14,updateNUmlis14]=useState("#")
    const [numlis15,updateNUmlis15]=useState("#")
    const [numlis16,updateNUmlis16]=useState("#")
    const numList=[]

    const [name,updateName]=useState("FULL NAME")
    const [month,updateMonth]=useState("MM")
    const [year,updateYear]=useState("YY")

    useEffect(()=>{
        for(var i in number){
            console.log(number[i])
            numList.push(number[i])
            console.log(numList)
            
        }
        for(i in numList){
            console.log(numList[i])
            if(i==0){
                updateNUmlis1(numList[i])
            }
            if(i==1){
                updateNUmlis2(numList[i])
            }
            if(i==2){
                updateNUmlis3(numList[i])
            }
            if(i==3){
                updateNUmlis4(numList[i])
            }


            if(i==4){
                updateNUmlis5("*")
            }
            if(i==5){
                updateNUmlis6("*")
            }
            if(i==6){
                updateNUmlis7("*")
            }
            if(i==7){
                updateNUmlis8("*")
            }

            if(i==8){
                updateNUmlis9("*")
            }
            if(i==9){
                updateNUmlis10("*")
            }
            if(i==10){
                updateNUmlis11("*")
            }
            if(i==11){
                updateNUmlis12("*")
            }


            if(i==12){
                updateNUmlis13(numList[i])
            }
            if(i==13){
                updateNUmlis14(numList[i])
            }
            if(i==14){
                updateNUmlis15(numList[i])
            }
            if(i==15){
                updateNUmlis16(numList[i])
            }

        }
    })
    return(
        <div style={{height:"100vh",width:"100%",background:"rgba(62, 183, 240,0.3)",position:"relative"}}>
            <div className="container" style={{background:"white",height:"70%",width:"35%",position:"absolute",top:"250px",left:"500px",borderRadius:"10px"}}>
                <form className="container" style={{position:"relative"}}>
                    <div style={{height:"70%",width:"100%",background:"pink",position:"absolute",top:"230px",margin:"17px"}}>
                        <div style={{marginBottom:"28px"}}>
                            <label>Card Number</label>
                            <input type="number"  className="form-control" style={{width:"92%",height:"50px",maxLength:"10"}} onChange={(e)=>{
                                updateNUmber(e.target.value)
                            }}/>
                        </div>
                        <div style={{marginBottom:"35px"}}>
                            <label>Card Holders</label>
                            <input type="text" className="form-control" style={{width:"92%",height:"50px"}} onChange={(e)=>{
                                updateName(e.target.value)
                            }}/>
                        </div>
                        <div style={{width:"69%",display:"flex",justifyContent:"space-between",marginBottom:"3px"}}>
                            <span>Expiration Date</span>
                            <span>CVV</span>
                        </div>
                        <div style={{display:"flex",justifyContent:"space-between",width:"92%",marginBottom:"60px"}}>
                            <div style={{height:"50px",width:"30%"}}>
                                <select style={{height:"100%",width:"100%"}} onChange={(e)=>{
                                    updateMonth(e.target.value)
                                }}>
                                <option default value="MM">Month</option>
                                <option value="01">Jan</option>
                                <option value="02">Feb</option>
                                <option value="03">March</option>
                                <option value="04">April</option>
                                <option value="05">May</option>
                                <option value="06">June</option>
                                <option value="07">July</option>
                                <option value="08">Aug</option>
                                <option value="09">Sept</option>
                                <option value="10">Oct</option>
                                <option value="11">Nov</option>
                                <option value="12">Dec</option>
                                </select>
                            </div>
                            <div style={{height:"50px",width:"30%"}}>
                                <select style={{height:"100%",width:"100%"}} onChange={(e)=>{
                                    updateYear(e.target.value)
                                }}>
                                <option default value="YY">Year</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                                <option value="2025">2025</option>
                                <option value="2026">2026</option>
                                <option value="2027">2027</option>
                                </select>
                            </div>
                            <div style={{height:"50px",width:"30%"}}>
                            <input type="text" style={{height:"100%",width:"100%"}}/>
                            </div>
                        </div>
                        <div style={{height:"50px",width:"92%",background:"pink"}}>
                            <input type="submit" style={{height:"100%",width:"100%"}} className="btn btn-primary"/>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{height:"30%",width:"30%",background:"url(https://img.freepik.com/premium-photo/colorful-background-with-colorful-background_875755-9.jpg)",position:"absolute",top:"150px",left:"550px",borderRadius:"10px",boxShadow:"0 0 10px gray"}} className="container">
                <div style={{display:"flex",justifyContent:"space-between",height:"15%",marginTop:"10px",width:"100%"}}>
                    <div style={{height:"100%",width:"7%",marginLeft:"10px"}}>
                        <img src={chip} style={{height:"40px",borderRadius:"6px",width:"50px"}}/>
                    </div>
                    <div style={{height:"100%",width:"20%"}}>
                        <img src="https://logodix.com/logo/78041.png" style={{height:"100px",marginTop:"-20px"}} />
                    </div>
                </div>
                <div style={{height:"50px",width:"100%",marginTop:"60px",marginLeft:"18px"}}>
                    <span style={{color:"white",fontSize:"30px"}}>{numlis1}&nbsp;{numlis2}&nbsp;{numlis3}&nbsp;{numlis4}&emsp;&nbsp;{numlis5}&nbsp;{numlis6}&nbsp;{numlis7}&nbsp;{numlis8}&emsp;&nbsp;{numlis9}&nbsp;{numlis10}&nbsp;{numlis11}&nbsp;{numlis12}&emsp;&nbsp;{numlis13}&nbsp;{numlis14}&nbsp;{numlis15}&nbsp;{numlis16}</span><br/>
                </div>
                <div style={{display:"flex",justifyContent:"space-between",height:"60px",width:"100%",marginTop:"40px"}}>
                    <div style={{width:"60%",height:"100%",marginLeft:"10px",overflow:"hidden"}}>
                        <span style={{color:"white",fontSize:"15px"}}>Card Holder</span><br/>
                        <span style={{color:"white",fontSize:"20px"}}>{name}</span>
                    </div>
                    <div style={{width:"18%",height:"100%"}}>
                        <span style={{color:"white",fontSize:"15px"}}>Expires</span><br/>
                        <span style={{color:"white",fontSize:"20px"}}>{month} / {year}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;