import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./ShowsList.css"
import ShowDetails from "./ShowDetails"

const ShowsList = () => {
    const [shows,setShows] =useState([])

   

    useEffect(()=>{
        async function fetchData(){
            let apiUrl = "https://api.tvmaze.com/search/shows?q=all";
            let fData = await axios.get(apiUrl)
            setShows(fData.data)
        }
        fetchData()
    },[])


    
    

    return (
        <>
        {shows.map((s)=>{
        return(
            <ShowDetails s={s} />
                   
        )
        })}
        </>
    )
}

export default ShowsList
