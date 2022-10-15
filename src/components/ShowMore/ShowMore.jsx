import React,{useState,useEffect} from 'react'
import {useParams,Link} from "react-router-dom"
import axios from "axios"

import "./ShowMore.css"
const ShowMore = () => {
    let {id,t}= useParams() 
    let reqData = []
    const [s,setS] =useState([])

   

    useEffect(()=>{
        async function fetchData(){
            let apiUrl = "https://api.tvmaze.com/search/shows?q=all";
            let fData = await axios.get(apiUrl)
            let sData = []
            fData.data.map((d)=>{
                if(d.show.id==id){
                    sData = d
                    reqData = [sData]
                    setS(reqData)
                    
                }
            })
            

        }
        fetchData()
    },[])

    return (
        <>
        {s.map((s)=>{
            let summary = s.show.summary
            let image = s.show.image.original.split("/")
            let imageDir = image[image.length-2]
            image = image[image.length-1]
            
            return(
                <section>
            <div className="m-show-image">
                <img src={s.show.image.original} alt={s.show.name} />
            </div>
            <div className="container">
                <div className="m-s-title">
                    <span className="title">{s.show.name}</span>
                </div>
    
                <div className="m-s-more-details">
                    <div>
                        <span className="m-s-lang">Lan: {s.show.language}</span>
                        <span className="m-s-gener">Genere: {s.show.genres.map((g)=>{return (g+", ")})}</span>
                        <span className="m-s-relasedate">Date: {s.show.premiered}</span>
                    </div>
                    <span className="m-s-runtime">Time: <strong>{t}</strong></span>
                </div>
    
                <div className="m-summary">
                    <div className="m-summary-title" id="summary"><strong>Summary</strong></div>
                    <p dangerouslySetInnerHTML={{ __html: summary }}></p>
                </div>
                <div className="m-book-show">
                   {<Link to={`/pay/${imageDir}/${image}`}><button className="m-book-btn">Book Now</button></Link>}
                    
                </div>
            </div>
    
        </section>
            )
            
        })}
        </>

    )
}

export default ShowMore
