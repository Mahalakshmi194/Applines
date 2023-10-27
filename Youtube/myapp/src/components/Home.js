import './Home.css';
import {Link} from "react-router-dom";
import Pravi1 from "./pravi1.mp4";
import Pravi2 from "./pravi2.mp4";
import Pravi3 from "./pravi3.mp4";
import Pravi4 from "./pravi4.mp4";
import Pravii1 from "./pravi1.jpg";
import Pravii2 from "./pravi2.jpg";
import Pravii3 from "./pravii3.jpg";
import Pravii4 from "./pravi4.jpg";
import UPrime from "./youtubePremiere.jpg";
import Ustudio from "./ustudio.jpg";
import { useState } from 'react';
function Home(){
    const [bar,updateBar]=useState(true)
    const [widthStyle,updateWidth]=useState("0%")
    const [visible,updateVisible]=useState("none")
    const [smallVisible,updateSmallVisible]=useState("block")
    const [smallWidth,updateSmallWidth]=useState("5%")
    let items=[{
        image:"https://i.ytimg.com/vi/Qw1c6hM2mz0/maxresdefault.jpg",
        dp:"https://starsunfolded.com/wp-content/uploads/2021/02/Shanmukh-Jaswanth-2.jpg",
        title:"Student Web Series || Episode - 1 || Shanmukh Jaswanth || Subbu K || Infinitum Media",
        name:"Shannu",
        views:"1.16M Views·43.8K Likes"
    },
    {
        image:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/bdbfc7c12f4288639a77afef16aa30ee51d2475430c4481b6385efaca6f12ff8._UY500_UX667_RI_TTW_.jpg",
        dp:"https://pbs.twimg.com/profile_images/1411574673658109957/lRATei6m_400x400.jpg",
        title:"Barrister Babu - A Masterpiece That Didn't Get What It Deserved - Telly Updates",
        name:"Pravisht Mshra",
        views:"5M Views·43.8K Likes"
    },
    {
        image:"https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_webp,q_auto:eco/resources/0-0-7463/list/1170x658withlogo66ea819130b54287a432d0e8676f5f89.jpg",
        dp:"https://igimages.gumlet.io/telugu/news/geethagovindam190718_c-dee.jpg?w=376&dpr=2.6",
        title:"GEETHA GOVINDAM || Vijay Deverakonda | Rashmika Mandanna | 2018.",
        name:"Alamy Stock Photo",
        views:"5M Views·5.5K Likes"
    },
    {
        image:"https://i.ytimg.com/vi/JT80XhYJdBw/maxresdefault.jpg",
        dp:"https://yt3.ggpht.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s48-c-k-c0x00ffffff-no-rj",
        title:"Python Django Tutorial 2020 - Full Course for Beginners",
        name:"Clever Programmer",
        views:"931K Views·25.3K Likes"
    },
    {
        image:"https://static.toiimg.com/photo/100093399.cms",
        dp:"https://feeds.abplive.com/onecms/images/uploaded-images/2023/05/09/4206b9d542389674d7085d08baa34bf31683627467487396_original.jpg",
        title:"Kushi Movie || A light-hearted tale of love and triumph",
        name:"IMDB",
        views:"3M Views·3M Likes"
    },
    {
        image:"https://i.ytimg.com/vi/A0iMqnENn7c/maxresdefault.jpg",
        dp:"https://encrypted-tbn2.gstatic.com/faviconV2?url=https://mxplayer.in&client=VFE&size=16&type=FAVICON&fallback_opts=TYPE,SIZE,URL&nfrp=2",
        title:"Sasirekha Parinayam Telugu Full Movie HD | Genelia D'Souza | Tarun | Krishna Vamsi | Mango Videos",
        name:"aha",
        views:"1.7M Views·1.7M Likes"
    },
    {
        image:"https://i.ytimg.com/vi/xyNpPXeXkj8/maxresdefault.jpg",
        dp:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgBBgkBBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKAQwBGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nys3Nzc3Nys3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIABAAEAMBIgACEQEDEQH/xAAWAAEBAQAAAAAAAAAAAAAAAAAEBwD/xAAnEAACAAUDAQkAAAAAAAAAAAABAgMEBREhAAYHYRIXMTJBUYGRof/EABUBAQEAAAAAAAAAAAAAAAAAAAQD/8QAGBEBAAMBAAAAAAAAAAAAAAAAEQYWIQD/2gAMAwEAAhEDEQA/AKZumuz3D0VOHKPLCNNsAxLrdQM9RnH7pFErkTlaP3SzkuYczYsCgJUrnN/jTJ2mpu6aHJYLFuz2WQOVB649daTpibMjrudQISp5YaG4ze9/vwHto5N7uudVi1bDe//Z",
        title:"Chicken Aloo Curry | Potato Chicken Curry | Chicken Recipes | Side dish for Chapathi | Chicken Gravy",
        name:"Fun Food Frolic",
        views:"81.8K Views·1.9K Likes"
    },
    {
        image:"https://i.ytimg.com/vi/eXTxjtvp7-I/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDo6vd0AUG6ox9qJvIflUWDG4z_rQ",
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJckoeGJTx3bTxedfYusQRDqkuKC9sB5ppOA&usqp=CAU",
        title:"Happy New Year!! | Resolution | Fitness | Meghana Lokesh | Kalyana Vaibhogam | Telugu Vlogs",
        name:"Fun Food Frolic",
        views:"81.8K Views·1.9K Likes"
    },
    {
        image:"https://i.ytimg.com/vi/i4XUecH2KZ4/maxresdefault.jpg",
        dp:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAkFBMVEX////DkbvYEL3SHL27W7C7L6vQHrvMG7jz6PP///2/jbjOG7fLG7fOGrrPHbi8Lq/QDrW1AJ26AKTCAK3UCL64Xq/7+PzkzOOvAJn39fWoQ5fczt3Np82oFZLAmLvUALjp4ujCAKbcwda1UqnJoMHSAMDQttDbAMb28PfBp72+YqyuYKK7drTBbbOrTJ2wAJmnbJf4AAAApklEQVQYlVXP2RKCMAwF0EChodBUlgp1QQTFXfn/v7PgsJiXzJzJzSQQupEkxCiK0Da1AseVcZKmaaYJJSrfgrvOgyAoHKM58h6YB7YEbLZ6ht1eCAElm+BQlUcBRc1GOGte2pRZgMwagJM7QSvjiwBvnmiVyf8i1ywEcUvUCPdHY3c+tVocJuBVEQ3w7gGKj8bfpRibzpiu1vbdIULIGONESETc/wJ/VgrPcP4SswAAAABJRU5ErkJggg==",
        title:"Vijay Devarakonda FIRST EVER LIVE Video On Instagram live instagram today",
        name:"Freez Stone Studios",
        views:"286 Views.7 Likes"
    },
    {
        image:"https://i.ytimg.com/vi/Wr4pkqN3C08/maxresdefault.jpg",
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fggzPyU5WaxMYTDChW0wQjYDz3iD4J2k-3JlzVvAgNOy_-TGB54zet3X4ikiHvj-hjw&usqp=CAU",
        title:"ETV Balagam | ETV 28 Years Special Event | 27th August 2023 | Full Episode | Sudheer, Rashmi | ETV",
        name:"Etv Telugu India",
        views:"4.17M Views·60.9K Likes"
    },
    {
        image:"https://www.filmibeat.com/img/1200x80x675/popcorn/movie_lists/bigg-boss-7-telugu:-starting-date--time,-contestants-list--host-20230824100752-8602.jpg",
        dp:"https://1.bp.blogspot.com/-jN32ysbXJAA/YKusIbrWirI/AAAAAAAAaoM/ee3dww9cBHY3I7t-sVxZWMBCz0lIkvc0gCLcBGAsYHQ/s0/Star-Maa-Upcoming-Shows-List.jpg",
        title:"Bigg Boss Telugu 7: Final list of 14 contestants & their professions",
        name:"Star Maa Telugu ",
        views:"6.1M Views·4.1K Likes"
    },
    {
        image:"https://exchange4media.gumlet.io/news-photo/105453-zeetelIB.jpg?w=400&dpr=2.6",
        dp:"https://yt3.googleusercontent.com/LNIf4p2gDTiYQUUmMnHH0U1QomulLOdsIG5El68SftdYIJw5eU2bnL-ADALqcDn11m7rlGUNOlI=s900-c-k-c0x00ffffff-no-rj",
        title:"Zee Telugu to air fresh episodes of favourite serials from June 22nd - Exchange4media",
        name:"Zee Telugu ",
        views:"6.5M Views·4.5K Likes"
    },
    {
        image:"https://i.ytimg.com/vi/81NTRxxTNcw/maxresdefault.jpg",
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-am6pxfsIZKY_7R36sON1ZrnSrN1XSQmq8cYU9G_PtYwvKOtH7EsVhOoZHeZnbSZnjBU&usqp=CAU",
        title:"Evaru Meelo Koteeswarulu Launch LIVE | Jr NTR | Filmyfocus.com",
        name:"Gemini",
        views:"6.2M Views·6.1K Likes"
    },
    {
        image:"https://2.bp.blogspot.com/-IwvaSQPV4zc/WmA-FhChd-I/AAAAAAAACzQ/wjgfgoMz3zMZvx2adyBm8vMzssfwie1BQCLcBGAs/s1600/arjun%2Breddy.png",
        dp:"https://1.bp.blogspot.com/-jN32ysbXJAA/YKusIbrWirI/AAAAAAAAaoM/ee3dww9cBHY3I7t-sVxZWMBCz0lIkvc0gCLcBGAsYHQ/s0/Star-Maa-Upcoming-Shows-List.jpg",
        title:"Movies Satellite Rights: Arjun Reddy in Star Maa",
        name:"Star Maa Telugu",
        views:"5.5M Views·2.5K Likes"
    },
    {
        image:"https://i.ytimg.com/vi/6tflEBIa_us/maxresdefault.jpg",
        dp:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6fggzPyU5WaxMYTDChW0wQjYDz3iD4J2k-3JlzVvAgNOy_-TGB54zet3X4ikiHvj-hjw&usqp=CAU",
        title:"KUSHI Movie Blockbuster Back 2 Back Promos | Vijay Deverakonda | Samantha | Shiva Nirvana",
        name:"Etv Telugu",
        views:"586K Views"
    },
      
    ]

    function sidebarFunctionality(){
        updateBar(!bar)
        console.log(bar)
        if(bar===true){
            updateWidth("10%")
            updateVisible("block")
            updateSmallWidth("0%")
            updateSmallVisible("none")
        }
        else{
            updateWidth("0%")
            updateVisible("none")
            updateSmallWidth("5%")
            updateSmallVisible("block")
        }

    }


    return(
        <div style={{overflow:"hidden",scrollbarWidth:"none"}}>
            <nav style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}} className='topnav'>
                <div className='menuBar'>
                    <span className="material-symbols-outlined menu" style={{cursor:"pointer",fontWeight:"bolder"}} onClick={sidebarFunctionality}>menu</span>
                    <Link to="#" style={{cursor:"pointer",textDecoration:"none"}}>&emsp;<i class="fa-brands fa-youtube" style={{color:"red"}} /><span className="youtube" style={{fontWeight:"bolder",color:"black"}}>YouTube</span></Link>
                </div>
                <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}} className="search">
                    {/* <form> */}
                        <div style={{display:"flex",background:"white",borderRadius:"20px",border:"1px solid grey",width:"100%",backgroundColor:"rgba(27, 25, 25, 0.4)"}} className='searchContainer' >
                            <input type="text" placeholder="    search..." style={{borderTopLeftRadius:"20px",borderBottomLeftRadius:"20px",borderBlockStyle:"none"}} />
                            <span class="material-symbols-outlined" style={{color:"white"}}>search</span>&nbsp;
                        </div>
                    {/* </form> */}
                        <div style={{borderRadius:"50%",background:"rgba(27, 25, 25, 0.4)",display:"flex",justifyContent:"center",alignItems:"center"}} className='mic'>
                            <span class="material-symbols-outlined" style={{color:"white"}}>mic</span>&nbsp;
                        </div>
                </div> 
                <div style={{display:"flex"}} className='notificationBar'> 
                    <Link to="#"><span class="material-symbols-outlined notification" style={{color:"black"}}>add_to_queue</span></Link>&nbsp;
                    <Link to="#"><span class="material-symbols-outlined notification" style={{color:"black"}}>notifications</span></Link>&nbsp;
                    <Link to="#"><img src="https://lh3.googleusercontent.com/a/ACg8ocI-WwwE4y6NZQjwLNoNxN42d5zbtVV1rqgFhrmrjgdiKvw=s288-c-no" className='image' alt="hema" style={{borderRadius:"50%",border:"1px solid grey",boxShadow:"0 0 5px grey"}}/></Link>&emsp;&emsp;

                </div>
            </nav>
            <div className="leftBar" style={{display:"flex",height:"830px",width:"100%"}}>
                <div className="leftBarContainer" style={{display:"flex",flexDirection:"column",height:"100%",width:`${widthStyle}`,display:`${visible}`}}>
                    <div style={{display:"flex"}}>
                        <i class="fa-solid fa-house" ></i>
                        <span>Home</span>
                    </div>
                    <div style={{display:"flex"}}s>
                        <span class="material-symbols-outlined">bolt</span>
                        <span>Shorts</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">subscriptions</span>
                        <span>Subscriptions</span>
                    </div>
                    <hr/>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">video_library</span>
                        <span>Library</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">history</span>
                        <span>History</span>
                    </div>
                    <div style={{display:"flex"}}s>
                        <span class="material-symbols-outlined">smart_display</span>
                        <span>Your Videos</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">schedule</span>
                        <span>Watch Later</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">thumb_up</span>
                        <span>Liked Videos</span>
                    </div>
                    <hr/>
                    <span><b>Subscriptions</b></span>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">add_circle</span>
                        <span>Browse Channels</span>
                    </div>
                    <hr/>
                    <span><b>Explore</b></span>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">local_fire_department</span>
                        <span>Trending</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">local_mall</span>
                        <span>Shopping</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">music_note</span>
                        <span>Music</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">movie</span>
                        <span>Movies</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">sensors</span>
                        <span>Live</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">stadia_controller</span>
                        <span>Gaming</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">feed</span>
                        <span>News</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">trophy</span>
                        <span>Sports</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">lightbulb</span>
                        <span>Learning</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">styler</span>
                        <span>Fasion & Beauty</span>
                    </div>
                    <hr/>
                    <span><b>More from YouTube</b></span>
                    <div style={{display:"flex"}}>
                        <img src={UPrime} alt="loading" style={{height:"25px",width:"25px"}}/>
                        <span>YouTube Premiere</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <i class="fa-brands fa-square-youtube" style={{color:"red"}}></i>
                        <span>YouTube Studio</span>
                    </div>
                    <div style={{display:"flex"}}>
                        <img src={Ustudio} alt="loading" style={{height:"25px",width:"25px"}}/>
                        <span>YouTube Music</span>
                    </div>
                    <hr/>
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">settings</span>
                        <span>Settings</span>
                    </div> 
                    <div style={{display:"flex"}}>
                        <span class="material-symbols-outlined">help</span>
                        <span>Help</span>
                    </div>    
                </div>
                <div className="leftSmallBarContainer" style={{display:"flex",flexDirection:"column",height:"100%",width:`${smallWidth}`,display:`${smallVisible}`,marginLeft:"-25px"}}>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <i class="fa-solid fa-house smbar"></i>
                        <span className='smbar2'>Home</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column" ,justifyContent:"center",alignItems:"center"}}>
                        <span class="material-symbols-outlined smbar">bolt</span>
                        <span className='smbar2'>Shorts</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <span class="material-symbols-outlined smbar" >subscriptions</span>
                        <span className='smbar2'>Subscriptions</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <span class="material-symbols-outlined smbar" >video_library</span>
                        <span className='smbar2'>Library</span>
                    </div>
                    <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                        <span class="material-symbols-outlined smbar" >download</span>
                        <span className='smbar2'>Download</span>
                    </div>
                    
                </div>

                <div className="secondNav" style={{display:"flex",flexDirection:"column",width:"95%"}}> 
                    <div id="secondNavdiv" style={{display:"flex",justifyContent:"normal",marginLeft:"50px",width:"100%",overflowX:"auto"}} >
                        <span >All</span>
                        <span>Music</span>
                        <span>Pravisht Mishra</span>
                        <span>Akhil</span>
                        <span>News</span>
                        <span>Live</span>
                        <span>Vijay Devarakonda</span>
                        <span>Filmi</span>
                        <span>Mantras</span>
                        <span>Gaming</span>
                        <span>Game shows</span>
                        <span>Sports</span>
                        <span>Computer Programming</span>
                        <span>Civil service exams</span>
                        <span>Tamil Cinema</span>
                        <span>Bollywood Music</span>
                        <span>Cricket</span>
                    </div>

                <div className="rightBar" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",height:"100%",width:"100%",justifyContent:"space-evenly",overflow:"auto",scrollbarWidth:"none"}}>
                {
                        items.map((item)=>{
                            return(
                                <div className='rightBarCards'>
                                    <img src={item.image} style={{height:"60%",width:"100%",borderRadius:"5%"}}/>
                                    <div style={{display:"flex"}} className='imgbar'>
                                        <div><img src={item.dp} style={{borderRadius:"50%",color:"black"}}/></div>
                                        <div>
                                            <div style={{fontWeight:"bold",margin:"0",overflow:"hidden"}} className='title'>{item.title}</div>
                                        </div>
                                    </div>    
                                    <div style={{display:"flex",marginLeft:"15px",marginBottom:"0px"}} className='text-muted'>{item.name}
                                            <span class="material-symbols-outlined" style={{background:"black",color:"white",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                                    </div>
                                    <span style={{marginLeft:"15px",marginTop:"0"}} className='text-muted'>{item.views}</span>            
                                </div>
                            )
                        })
                    }
                
                    <div style={{height:"20rem",width:"18rem",margin:"5px"}}>
                        <video id="thumbnail" src={Pravi1} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii1} />
                        <span><img src={Pravii1} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.2M views. 14 hours ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi2} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii2} />
                        <span><img src={Pravii2} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>5M views. 1 year ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi3} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii3} />
                        <span><img src={Pravii3} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.9M views. 2 years ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi4} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii4} />
                        <span><img src={Pravii4} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>10M views. 4 months ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi1} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii1} />
                        <span><img src={Pravii1} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reals</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.5M views. 15 hours ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi2} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii2} />
                        <span><img src={Pravii2} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1M views. 2 years ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi3} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii3} />
                        <span><img src={Pravii3} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>10M views. 2 months ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi4} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii4} />
                        <span><img src={Pravii4} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.7M views. 14 hours ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi1} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii1} />
                        <span><img src={Pravii1} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>2M views. 23 hours ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi2} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii2} />
                        <span><img src={Pravii2} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>3M views. 14 hours ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi1} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii1} />
                        <span><img src={Pravii1} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.2M views. 14 hours ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi2} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii2} />
                        <span><img src={Pravii2} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>5M views. 1 year ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi3} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii3} />
                        <span><img src={Pravii3} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.9M views. 2 years ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi4} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii4} />
                        <span><img src={Pravii4} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>10M views. 4 months ago</p>
                    </div>
                    <div style={{height:"20rem",width:"18rem"}}>
                        <video id="thumbnail" src={Pravi1} controls style={{height:"60%",width:"100%",borderRadius:"5%"}} poster={Pravii1} />
                        <span><img src={Pravii1} style={{borderRadius:"50%",height:"30px",width:"30px",color:"black"}}/>&nbsp;Barrister Babu | Reels</span><br/>
                        <span style={{display:"flex",fontSize:"15px",}}>Pravisht Mishra
                            <span class="material-symbols-outlined" style={{background:"black",color:"white",height:"15px",width:"15px",fontSize:"15px",borderRadius:"50%",display:"flex",alignItems:"center",justifyItems:"center"}}>check</span>
                        </span>
                        <p style={{fontSize:"13px"}}>1.5M views. 15 hours ago</p>
                    </div>
                    
                  
                   
                    
                    
                    
                </div>
                </div>

            </div>

        </div>
    )
}

export default Home;