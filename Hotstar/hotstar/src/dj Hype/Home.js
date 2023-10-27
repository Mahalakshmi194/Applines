import './Home.css';
import Song1 from "./na_roja_nuvve.mp3";
import Song2 from "./kushi_title_song.mp3";
import Song3 from "./aaradhya.mp3";
import Song4 from "./dj_tillu.mp3";
import Song5 from "./patas_pilla.mp3";
import Song6 from "./dwaraka1.mp3";
import Song7 from "./dwaraka2.mp3";
import Song8 from "./kalalo_kuda.mp3";
import Song9 from "./leharayi.mp3";
import Song10 from "./naalo_chilipikala.mp3";
import Song11 from "./chitti.mp3";
import Song12 from "./love_cheyyala_vodhha.mp3";
import Song13 from "./bang_bang_bankok.mp3";
import Song14 from "./meghalu_lekunda.mp3";
import Song15 from "./cheliya_cheliya.mp3";
// import mixedSongs from "./mixedSongs.mp3";
import {useRef, useState} from "react";
function Home(){
    const [music,updateMUsic]=useState(Song3)
    const [trigger,updateTrigger]=useState("fa-circle-play")
    const [songTime,updateSongTime]=useState({time:"0",duration:"0"})
    const [songName,updateSongName]=useState("Aaradhya song")
    const audioElem=useRef()
    const clickRef=useRef();
    const [s1,updates1]=useState(true)
    
    const playList=[{
        no:"1.",
        song:Song1,
        name:"Naa Roja Nuvve song",
        img:"https://images.cinemaexpress.com/uploads/user/imagelibrary/2023/5/9/original/Kushio.jpg"
    },
    {
        no:"2.",
        song:Song2,
        name:"Kushi Title song",
        img:"https://igimages.gumlet.io/telugu/home/vijay_sam27072023_c.jpg?w=376&dpr=2.6"
    },
    {
        no:"3.",
        song:Song3,
        name:"Aaradhya song",
        img:"https://www.pinkvilla.com/images/2023-07/1073626699_kushis-aradhya-song-1.jpg"
    },
    {
        no:"4.",
        song:Song4,
        name:"DJ Tillu song",
        img:"https://cdn.gulte.com/wp-content/uploads/2022/12/DJ-Tillu-2-days-box-office-collections-Strong.jpg"
    },
    {
        no:"5.",
        song:Song5,
        name:"Patas Pilla song",
        img:"https://i.ytimg.com/vi/1NVZ0iDAt4g/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGGUgWihHMA8=&rs=AOn4CLDPos6c9QGPwOhpeSvPfoXJO88-kQ"
    },
    {
        no:"6.",
        song:Song6,
        name:"Bhajare Nanda Gopala song",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlTbk_zYLbFF9dVo01gD3lTsvn_SxVGB1hze4aa6WXaO6So0byhAmncWr9xU8MHd7lwEI&usqp=CAU"
    },
    {
        no:"7.",
        song:Song7,
        name:"Adire Dhada Puttindhe song",
        img:"https://tamilnext.com/wp-content/uploads/2019/02/Arjun-Reddy-Movie-Stills-23-1000x600.jpg"
    },
    {
        no:"8.",
        song:Song8,
        name:"Kalalo Kuda Kalaganaledhey song",
        img:"https://c.saavncdn.com/141/Liger-Hindi-2022-20220826173044-500x500.jpg"
    },
    {
        no:"9.",
        song:Song9,
        name:"Leharayi song",
        img:"https://akm-img-a-in.tosshub.com/indiatoday/images/story/202109/pl.jpg?size=1200:675"
    },
    {
        no:"10.",
        song:Song10,
        name:"Naalo Chilipi Kala song",
        img:"https://www.klapboardpost.com/wp-content/uploads/2018/09/Naalo-Chilipi-KalaVideo.png"
    },
    {
        no:"11.",
        song:Song11,
        name:"Chitti song",
        img:"https://images.tv9telugu.com/wp-content/uploads/2021/09/chitti-song.jpg?w=1280&enlarge=true"
    },
    {
        no:"12.",
        song:Song12,
        name:"Love Cheyyala Vodhha song",
        img:"https://c-cl.cdn.smule.com/rs-s35/arr/3d/f9/81650c61-91fe-4e2d-be34-8caf3d32a9ae.jpg"
    },
    {
        no:"13.",
        song:Song13,
        name:"Bang Bang Bankok song",
        img:"https://i.ytimg.com/vi/V3mbKCAZOak/maxresdefault.jpg"
    },
    {
        no:"14.",
        song:Song14,
        name:"Meghalu Lekunna song",
        img:"https://content.tupaki.com/twdata/2015/1115/news/Kumari-21F-Bang-Bang-Bangkok-Song-Teaser-1447232256-1715.jpg"
    },
    {
        no:"15.",
        song:Song15,
        name:"Cheliya Cheliya song",
        img:"https://c.saavncdn.com/470/Kushi-2001-500x500.jpg"
    },

]



function playS1(){
    if(s1===true){
        updateTrigger("fa-pause")  
        audioElem.current.play()
        updates1(!s1)

          
    }
    else{
        updateTrigger("fa-circle-play")
        audioElem.current.pause()
        updates1(!s1)
        
    }
   
}

function onPlaying(){
    const duration=audioElem.current.duration
    const currentTime=audioElem.current.currentTime
    // console.log(duration,currentTime)
    const time=(currentTime/duration)*100
    // console.log(time)
    updateSongTime({time:time,duration:duration})
}

function chechWidth(e){
    let width=clickRef.current.clientWidth
    const offset=e.nativeEvent.offsetX

    const divProgress=(offset/width)*100
    audioElem.current.currentTime=(divProgress /100)*songTime.duration
}


function handleDownload(song){
    const link=document.createElement('a')
    link.href=song
    link.download=song //File name
    link.click()
  
}
    return(
        <div style={{height:"100vh",width:"100%",background:"black",border:"4px solid red"}}>
            <div style={{color:"red",fontSize:"30px",padding:"5px",marginBottom:"10px"}}>&emsp;DJ Hype on Kiss - 13.9.2023</div>
            <div style={{height:"8px",width:"98%",background:"red",marginLeft:"15px",marginBottom:"10px"}}></div>
            <div style={{height:"30%",width:"98%",background:"whitesmoke",marginLeft:"15px",borderRadius:"8px"}}>
                <div style={{display:"flex",height:"20%"}}>
                    <div style={{width:"50%",borderTopLeftRadius:"8px",display:"flex"}}>
                        <div style={{height:"100%",width:"70px",display:"flex",justifyContent:"center",alignItems:"center"}}><i className={`fa-solid ${trigger} butt`} style={{color:"red",fontSize:"45px"}} onClick={()=>{
                            playS1()

                        }}></i></div>
                        <div style={{marginTop:"5px"}}>
                            <span>Playaz</span><br/>
                            <span>DJ Hype - Kiss - 13.9.2023</span><br/>
                            <audio src={music} ref={audioElem} style={{height:"20px",marginLeft:"-20px",color:"green"}} onTimeUpdate={onPlaying} /><br/>
                            <span style={{fontWeight:"bolder"}}>{songName}...</span>
                        </div>
                    </div>
                    <div style={{width:"50%",borderTopRightRadius:"8px",display:"flex",flexDirection:"column",justifyContent:"center"}}>
                        <div style={{height:"50%",display:"flex",justifyContent:"end",alignItems:"center",marginRight:"5px"}}>
                            <i class="fa-brands fa-soundcloud" style={{fontSize:"29px",color:"grey"}}></i>
                            <span style={{color:"grey",fontWeight:"bolder",marginLeft:"7px"}}>SOUNDCLOUD</span>
                            </div>
                        <div style={{height:"50%",display:"flex",justifyContent:"end"}} clasaName="topIcons">
                            <span><i class="fa-solid fa-heart butt" style={{fontSize:"15px",background:"white",padding:"6px",boxShadow:"0 0 1px grey",marginRight:"4px",borderRadius:"3px"}}></i></span>
                            <span><i class="fa-solid fa-download butt" style={{fontSize:"15px",background:"white",padding:"6px",boxShadow:"0 0 1px grey",marginRight:"3px",borderRadius:"3px"}}></i></span>
                            <div className="butt" style={{width:"75px",height:"27px",background:"white",display:"flex",justifyContent:"center",alignItems:"center",boxShadow:"0 0 1px grey",marginRight:"5px",borderRadius:"3px"}}>
                               <span><i class="fa-solid fa-share-from-square" style={{fontSize:"15px"}}></i></span><span>Share</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{height:"60%",width:"98%",marginLeft:"15px",borderRadius:"8px",display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <div style={{height:"50%",width:"100%",position:"relative"}}>
                        
                        <img src="https://static.vecteezy.com/system/resources/previews/023/264/079/non_2x/sound-radio-form-abstract-music-audio-soundwave-isolated-illustration-vector.jpg" style={{height:"100%",width:"100%"}}/>
                        <div style={{height:"5px",width:"100%",display:"flex"}}>
                            <div style={{width:"90%",height:"4px",border:"1px solid grey",background:"black",borderRadius:"5px",position:"absolute",top:"46px",left:"90px",cursor:"pointer"}} ref={clickRef} onClick={chechWidth}>
                               <div style={{width:`${songTime.time}%`,background:"red",height:"100%"}}></div>
                            </div>
                        </div>
                        <span style={{height:"20%",width:"100%",background:"rgba(255, 255, 255,0.2)",position:"absolute",top:"50px",left:"10px",}}>
                            {
                                playList.map((item)=>{
                                    return(
                                        <img src={item.img} style={{height:"30px",width:"30px",marginTop:"0px",marginLeft:"80px",borderRadius:"3px"}} onClick={()=>{
                                            updateMUsic(item.song) 
                                            updateSongName(item.name)
                                            playS1()
                                        }}/>
                                        
                                    )
                                })
                            }
                        </span>
                    </div>

                </div>
                <div style={{height:"15%",width:"98%",marginLeft:"15px",borderRadius:"8px",marginTop:"10px",display:"flex",justifyContent:"space-between",alignItems:"end"}}>
                    <div>Privacy Policy</div>
                    <div>
                        <i class="fa-solid fa-play" style={{color:"grey"}}></i>
                        <span style={{color:"grey",marginLeft:"5px"}}>34 K</span>
                    </div>
                </div>
            </div>

            
            <div className="songsDiv" style={{height:"60%",width:"97%",marginLeft:"15px",borderRadius:"8px",marginTop:"10px"}}>
                <span style={{color:"red",fontSize:"20px",marginBottom:"10px",fontWeight:"bolder"}}>Play List</span>
                <div>
                    <table clasaName="table" style={{height:"100%",width:"100%"}}>
                       {
                        playList.map((item)=>{
                            return(
                                <div>
                                    <div style={{display:"flex",justifyContent:"space-between"}}>
                                        <div>
                                            <span style={{color:"red",marginRight:"10px"}} className='butt'>{item.no}</span>
                                            <span style={{color:"white"}} className='butt' onClick={()=>{
                                                updateMUsic(item.song) 
                                                updateSongName(item.name)
                                                playS1()
                                            }}>{item.name}</span>
                                        </div>
                                        <div style={{marginBottom:"10px"}} className='butt'>
                                            <span onClick={()=>{handleDownload(item.song)}}>
                                                <i class="fa-solid fa-download" style={{fontSize:"15px",padding:"6px",background:"whitesmoke",boxShadow:"0 0 1px grey",marginRight:"3px",borderRadius:"3px"}}></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div style={{height:"1px",width:"99%",background:"grey",marginLeft:"15px",marginBottom:"12px"}}></div>
                                </div>
                            )
                        })
                       }
                    </table>
                </div>
            </div>

        </div>
    )
}

export default Home;