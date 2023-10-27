import './Home.css'
import {useState} from 'react';
function Home(){
    const [bgImage,updateBgImage]=useState("https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7741/1577741-i-e35c67b4ecf5");
    const [bgData,updateBgData]=useState({
        img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/5022/1445022-t-4b0e22dc1f18",
        time:"2021 . 2h . Hindi .",
        info:"Two brothers, Vibhooti and Chiraunji run an exorcist business and together travel all over the country. They are famous as Ullat Baba and sons, though know nothing ...",
        theme:"Horror | Comedy | Dramedy | Paranormal",
        age:"U/A 16+"

    })
    const [counter,updateCounter]=useState(0)
    const latestReleases=[{
        img:"https://assets.thehansindia.com/h-upload/2023/09/10/1600x960_1379434-festivassla.jpg",
        time:"2023 . 1 Season . 6 Languages .",
        age:"U",
        info:"NEW EPISODE EVERY WEDNESDAY AT 8:00 PM. Join chefs Gary Mehigan and Pablo Naranjo experience India’s biggest festivals like Holi, Onam, Eid, Durga Puja, Hornbill and Ganesh Utsav!"
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_vl/sources/r1/cms/prod/old_images/vertical/MOVIE/4358/1000164358/1000164358-v",
       
    },
    {
        img:"https://www.madisonlibrary.org/sites/default/files/2022-04/little%20mermaid.jpg",
        time:"2023 . 2h 15m . 2 Languages . ",
        age:"U/A 7+",
        info:"A spirited young mermaid makes a deal with an evil sea witch that allows her to experience life on land, but that ultimately puts her life in jeopardy."
    },
    {
        img:"https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/5602/1575602-h-a98f46d6cc4e"
    },
    {
        img:"https://northmcd.com/wp-content/uploads/2023/09/photo_2023-09-03_14-10-27.webp"
    },
    {
        img:"https://thesouthfirst.com/wp-content/uploads/2023/09/A-poster-of-Neeraj-Pandey-The-Freelancer-e1693648525974.jpg"
    },
    {
        img:"https://img.indiaforums.com/show/640x360/7/070-keh-doon-tumhein.jpg?c=0sM3C4e"
    },
    {
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/105/1580105-i-72db865f1ed9"
    },
    {
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/8360/1578360-i-f2fdc3a98acc"
    },
    {
        img:"https://northmcd.com/wp-content/uploads/2023/09/photo_2023-09-03_14-10-27.webp"
    },
    {
        img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/105/1580105-i-72db865f1ed9"
    },
]
const bestInSports=[{
    img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9868/1589868-h-692531575ace"
},
{
    img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/9859/1589859-h-92b0c9edd135"
},
{
    img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1477/1591477-h-307e453f7a77"
},
{
    img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/1498/1591498-h-f9cf42e09efc"
},
{
    img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/451/1590451-h-7ccbe5a6dd82"
},
{
    img:"https://img10.hotstar.com/image/upload/f_auto,q_90,w_384/sources/r1/cms/prod/544/1590544-h-c99960bd8aa3"
}
]

const freeNewAdd=[{
    img:"https://m.media-amazon.com/images/M/MV5BNWYwYmQzY2UtOTRmOS00M2MwLThjYzUtOTdkZTc0NTU1NDgzXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_.jpg"
},
{
    img:"https://cdn.tollywood.net/wp-content/uploads/2022/07/The-Warrior-first-review-out.jpg"
},
{
    img:"https://m.media-amazon.com/images/M/MV5BNmQ4ODExMGYtMDU1Mi00NzM1LTg3ZWMtMmFjZWU1MzllNDdhXkEyXkFqcGdeQXVyMzU0ODc1MTQ@._V1_.jpg"
},
{
    img:"https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/9/7/original/Bhoot_Police_Poster.jpg"
},
{
    img:"https://www.koimoi.com/wp-content/new-galleries/2020/12/vidyut-jammwals-khuda-haafiz-now-on-tv001.jpg"
},
{
    img:"https://imgeng.jagran.com/images/2022/sep/BabliBouncerOTT1663755219606.jpg"
},
{
    img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdi5WWIJcX2h8c1fxTMGf1xm1nUI8Kg7VPw&usqp=CAU"
},
{
    img:"https://trendraja.in/wp-content/uploads/2020/12/Seetimaarr-Movie-Release-date-Cast-Trailer-OTT-Release-Update-Crew-Wiki.jpg"
}
]
const bgList=["https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9885/1589885-i-9ccc110c631f",
"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7741/1577741-i-e35c67b4ecf5",
"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/999/1370999-i-9ca131b908c5",
"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/1454/1411454-i-49f51da5b8a5",
"https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3433/1403433-i-dd36d04fe0a6"
]

const bgDataList=[{img:"https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/9887/1589887-t-641753ebc7f2",time:"ASia Cup 2023. 13m. Cricket .",age:"U/A 5+",
info:" Team India can take a big step towards reaching the Asia Cup 2023 Final on September 17 with a win over Sri Lanka in their second Super 4 match ...",theme:" "
},
{img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/5022/1445022-t-4b0e22dc1f18",time:"2021 . 2h . Hindi .",age:"U/A 16+",
info:"Two brothers, Vibhooti and Chiraunji run an exorcist business and together travel all over the country. They are famous as Ullat Baba and sons, though know nothing ...",theme:"Horror | Comedy | Dramedy | Paranormal"
},
{img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/1001/1371001-t-89344e3545ab",time:"2016 . 2h 57m . Telugu .",age:"U/A 13+",
info:"How did India get one of its favourite cricketers? Watch the life and struggles of MS Dhoni in his journey to become a respected sportsperson in this biopic.",theme:"Biopic | Biographical | Buddy | Couples"
},
{img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/1452/1411452-t-4e169fe9ccbd",time:"2023 . Telugu . ",age:"U/A 13+",
info:"Obligated to fulfill his superior's final wish, IPS Murari marries Krishna, an aspiring doctor. What happens when Mukunda, his first love, stands between them?",theme:"Drama | Romance | Couples "
},
{img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/3435/1403435-t-c54fbfce0715",time:"2013 . 1h 38m . Telugu . ",age:"U/A 13+",
info:"Can art foretell the future? A novelist inherits a villa full of his artist father's paintings that begin making ominous predictions.",theme:"Horror | Paranormal | Haunted House | Supernatural  "
}
]

    function changeBackground(e){
        // e.preventDefault()
        if(counter<5){
            updateBgImage(bgList[counter])
            updateBgData(bgDataList[counter])
            updateCounter(counter+1)
        }
        else{
            updateCounter(0)
        }
    }

    // setInterval(()=>{
    //     changeBackground()
    // },3000)
    return(
        <div className="mainDiv"> 
            <div className="col1" style={{height:"1000px",display:"flex",flexDirection:"column",aligmItems:"center",justifyContent:"space-between"}}>
                <div className="logo" style={{height:"15%"}}>
                    <img src="https://www.91-cdn.com/hub/wp-content/uploads/2023/05/disney-plus-hotstar-subscriber-base.jpg" style={{height:"70px",width:"90px",marginLeft:"0px"}}/><br/>
                    <nav style={{color:"rgb(243, 169, 9)" ,display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(158, 151, 151,0.3)",borderRadius:"8px",fontSize:"12px",padding:"3px",width:"80px"}}>&nbsp;Subscribe <span class="material-symbols-outlined" style={{fontSize:"15px"}}>navigate_next</span></nav>
                </div>
                <div className="content" style={{display:"flex",flexDirection:"column"}}>
                    <div><i class="fa-solid fa-user cot" style={{height:"25px",width:"25px"}}></i> <span className="vi">My Space</span></div>
                    <div><span class="material-symbols-outlined cot" style={{height:"25px",width:"25px"}}>search</span><span className="vi">Search</span></div>
                    <div><i class="fa-solid fa-house cot" style={{height:"25px",width:"25px"}}></i> <span className="vi">Home</span></div>
                    <div><span class="material-symbols-outlined cot" style={{height:"25px",width:"25px"}}>tv</span><span className="vi">TV</span></div>
                    <div><span class="material-symbols-outlined cot" style={{height:"25px",width:"25px"}}>movie</span><span className="vi">Movies</span></div>
                    <div><span class="material-symbols-outlined cot" style={{height:"25px",width:"25px"}}>sports_soccer</span><span className="vi">Sports</span></div>
                </div>
                <div style={{height:"30%",width:"100%"}}></div>
            </div>


            <div className="col2" style={{color:"white",overflowX:"hidden"}}>
                {/* <div style={{display:"flex"}}>
                    <div style={{width:"35%",padding:"5px"}}>
                        <img src="https://thecosmiccircus.com/wp-content/uploads/2023/05/Untitled_design_4.jpg" style={{width:"100%",height:"250px"}}/>
                    </div>
                    <div style={{padding:"30px",display:"flex",flexDirection:"column",justifyContent:"space-between",width:"65%",background:"linear-gradient(to right,black,rgba(29, 27, 27,0.1),rgba(82, 76, 76,0.5))"}}>
                        <div style={{display:"flex"}}>
                            <div style={{marginRight:"9px"}}>
                                <img src="https://pbs.twimg.com/profile_images/1675007520765800453/wBeaR5xs_400x400.jpg" style={{width:"55px",height:"55px",borderRadius:"4px"}}/>
                            </div>
                            <div>
                                <span style={{color:"white",fontWeight:"bolder"}}>Loki S2</span><br/>
                                <span style={{color:"rgb(174, 188, 192)",fontSize:"15px"}}>Streaming from Oct 6</span>       
                            </div>
                        </div>
                        <div style={{height:"40px",width:"220px",display:"flex",justifyContent:"center",background:"rgba(174, 188, 192,0.5)",borderRadius:"10px"}}>
                            <span style={{color:"white",fontWeight:"bolder",padding:"7px",fontSize:"17px"}}>Subscribe</span>
                        </div>          
                    </div>   
                </div> */}


                <div className="imgDiv" style={{background: `linear-gradient(to right,rgba(0,0,0,1),rgba(0, 0, 0, 0)),url(${bgImage})`}}>
                    <div style={{display:"flex",height:"790px",marginTop:"10px"}}>
                        <div style={{width:"30%",display:"flex",flexDirection:"column",marginLeft:"10px",height:"850px"}}>
                            <div style={{height:"50%"}}></div>
                            <div style={{height:"50%"}}>
                                <img src={`${bgData.img}`} style={{height:"200px",width:"70%",marginBottom:"10px"}}/><br/>
                                <span style={{fontWeight:"bolder"}}>{bgData.time} <span style={{padding:"5px",background:"grey",borderRadius:"5px"}}>{bgData.age}</span></span><br/>
                                <br/>
                                <span style={{color:"rgb(174, 188, 192)",fontSize:"14px"}}>{bgData.info} 
                                </span><br/>
                                <div style={{marginTop:"10px"}}><span style={{fontWeight:"bolder"}}>{bgData.theme}</span></div><br/>
                                <div style={{display:"flex"}} className='watchNow'>
                                    <div style={{height:"50px",width:"300px",padding:"10px",display:"flex",justifyContent:"center",aligmItems:"center",background:"rgba(174, 188, 192,0.5)",borderRadius:"8px",marginRight:"15px"}}>
                                        <span style={{marginTop:"4px"}}><i class="fa-solid fa-play"></i> &nbsp;Watch Now</span>
                                    </div>
                                    <span style={{height:"50px",width:"60px",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(174, 188, 192,0.5)",borderRadius:"8px"}}><i class="fa-solid fa-plus"></i></span>
                                </div>
                            </div>
                        </div>
                        <div style={{width:"25%"}}></div>
                        <div style={{display:"flex",flexDirection:"column",width:"45%"}}>
                            <div style={{height:"750px"}}></div>
                            <div className="smImages" style={{height:"120px",display:"flex"}}>
                                <div ><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9885/1589885-i-9ccc110c631f" style={{borderRadius:"8px"}} onClick={()=>{
                                    updateBgImage("https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/9885/1589885-i-9ccc110c631f")
                                    updateBgData({img:"https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/9887/1589887-t-641753ebc7f2",time:"ASia Cup 2023. 13m. Cricket .",age:"U/A 5+",
                                    info:" Team India can take a big step towards reaching the Asia Cup 2023 Final on September 17 with a win over Sri Lanka in their second Super 4 match ...",theme:" "
                                })
                                }}/></div>
                                <div ><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7741/1577741-i-e35c67b4ecf5" style={{borderRadius:"8px"}} onClick={()=>{
                                    updateBgImage("https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/7741/1577741-i-e35c67b4ecf5")
                                    updateBgData({img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/5022/1445022-t-4b0e22dc1f18",time:"2021 . 2h . Hindi .",age:"U/A 16+",
                                    info:"Two brothers, Vibhooti and Chiraunji run an exorcist business and together travel all over the country. They are famous as Ullat Baba and sons, though know nothing ...",theme:"Horror | Comedy | Dramedy | Paranormal"
                                })
                                }}/></div>
                                <div ><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/999/1370999-i-9ca131b908c5" style={{borderRadius:"8px"}} onClick={()=>{
                                    updateBgImage("https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/999/1370999-i-9ca131b908c5")
                                    updateBgData({img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/1001/1371001-t-89344e3545ab",time:"2016 . 2h 57m . Telugu .",age:"U/A 13+",
                                    info:"How did India get one of its favourite cricketers? Watch the life and struggles of MS Dhoni in his journey to become a respected sportsperson in this biopic.",theme:"Biopic | Biographical | Buddy | Couples"
                                })
                                }}/></div>
                                <div ><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/1454/1411454-i-49f51da5b8a5" style={{borderRadius:"8px"}} onClick={()=>{
                                    updateBgImage("https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/1454/1411454-i-49f51da5b8a5")
                                    updateBgData({img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/1452/1411452-t-4e169fe9ccbd",time:"2023 . Telugu . ",age:"U/A 13+",
                                    info:"Obligated to fulfill his superior's final wish, IPS Murari marries Krishna, an aspiring doctor. What happens when Mukunda, his first love, stands between them?",theme:"Drama | Romance | Couples "
                                })
                                }}/></div>
                                <div ><img src="https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3433/1403433-i-dd36d04fe0a6" style={{borderRadius:"8px"}} onClick={()=>{
                                    updateBgImage("https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3433/1403433-i-dd36d04fe0a6")
                                    updateBgData({img:"https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/3435/1403435-t-c54fbfce0715",time:"2013 . 1h 38m . Telugu . ",age:"U/A 13+",
                                    info:"Can art foretell the future? A novelist inherits a villa full of his artist father's paintings that begin making ominous predictions.",theme:"Horror | Paranormal | Haunted House | Supernatural  "
                                })
                                }}/></div>
                                <div><span class="material-symbols-outlined" style={{fontSize:"30px",color:"white",marginTop:"10px"}}>navigate_next</span></div>
                           </div>
                        </div>
                    </div>
                    <div style={{background:"linear-gradient(to bottom,rgba(0,0,0,0.1),black,black,black)"}}>
                    <div style={{height:"300px",width:"100%",marginTop:"90px"}}>
                        <span style={{fontWeight:"bolder",fontSize:"20px",marginLeft:"8px"}}>Latest Releases</span><br/>
                        <div className="latestReleases" style={{marginLeft:"8px",display:"flex",flexDirection:"row",overflow:"hidden"}}>
                            {
                                latestReleases.map((item)=>{
                                    return(
                                        <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img src={item.img} style={{marginRight:"6px",borderRadius:"8px"}} alt="hindi" className='outerCard'/>
                                            <div className='innerCard'>
                                                <div style={{height:"250px",width:"15rem",display:"flex",flexDirection:"column"}}>
                                                    <div style={{height:"45%",background:"grey"}}>
                                                        <img src={item.img} style={{height:"100%",borderTopLeftRadius:"8px",borderTopRightRadius:"8px"}}/>
                                                    </div>
                                                    <div style={{display:"flex",height:"15%",background:"rgba(0,0,0,0.2)",display:"flex",justifyContent:"center",alignItems:"center",border:"1px solid black"}} className='watchNow'>
                                                        <div style={{height:"30px",width:"200px",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(174, 188, 192,0.8)",borderRadius:"8px",marginRight:"5px"}}>
                                                            <span><i class="fa-solid fa-play"></i> &nbsp;Watch Now</span>
                                                        </div>
                                                        <span style={{height:"30px",width:"40px",display:"flex",justifyContent:"center",alignItems:"center",background:"rgba(174, 188, 192,0.5)",borderRadius:"8px"}}><i class="fa-solid fa-plus"></i></span>
                                                    </div>
                                                    <div style={{height:"40%",background:"rgba(0,0,0,0.2)",overflow:"hidden",margin:"3px"}}>
                                                        <span style={{fontWeight:"bolder",fontSize:"12px"}}>{bgData.time} <span style={{padding:"5px",background:"grey",borderRadius:"5px"}}>{bgData.age}</span></span><br/>
                                                        <br/>
                                                        <span style={{color:"rgb(174, 188, 192)",fontSize:"14px"}}>{bgData.info} 
                                                        </span>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div style={{height:"300px",width:"100%",marginTop:"90px"}}>
                        <span style={{fontWeight:"bolder",fontSize:"20px",marginLeft:"8px"}}>Best in Sports</span><br/>
                        <div className="bestInSports" style={{marginLeft:"8px",display:"flex",flexDirection:"row",overflow:"hidden"}}>
                            {
                                bestInSports.map((item)=>{
                                    return(
                                        <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img src={item.img} style={{marginRight:"6px",borderRadius:"8px"}} alt="hindi"/>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div style={{height:"300px",width:"100%",marginTop:"90px"}}>
                        <span style={{fontWeight:"bolder",fontSize:"20px",marginLeft:"8px"}}>Free-Newly Added</span><br/>
                        <div className="latestReleases" style={{marginLeft:"8px",display:"flex",flexDirection:"row",overflow:"hidden"}}>
                            {
                                freeNewAdd.map((item)=>{
                                    return(
                                        <div style={{height:"100%",width:"100%",display:"flex",justifyContent:"center",alignItems:"center"}}>
                                            <img src={item.img} style={{marginRight:"6px",borderRadius:"8px"}} alt="hindi"/>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
                    <div style={{height:"300px",width:"100%",marginTop:"100px"}}>
                        <span style={{fontWeight:"bolder",fontSize:"20px",marginLeft:"8px"}}>Popular Shows</span><br/>
                        <div style={{width:"100%",height:"300px",marginLeft:"8px",display:"flex",flexDirection:"row",overflow:"hidden"}}>
                            {
                                latestReleases.map((item)=>{
                                    return(
                                        <div>
                                            <img src={item.img} style={{width:"15rem",height:"100%",marginRight:"6px",borderRadius:"8px"}} alt="hindi"/>
                                        </div>
                                    )
                                })
                            }

                        </div>

                    </div>
            
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Home;