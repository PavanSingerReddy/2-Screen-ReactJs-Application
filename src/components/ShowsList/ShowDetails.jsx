import React from 'react'
import {useNavigate} from "react-router-dom"
const ShowDetails = ({s}) => {

    let duration = "";
    let navigate = useNavigate()
    function calDuration(d){
        if(d==null){
            duration="NA"
            return "NA"
        }
        let hours = d/60;
        let minutes = d%60
        if(hours<1){
            duration = `0h ${d.toString()}m`
            return `0h ${d.toString()}m`
        }else{
            duration = `${hours.toString()}h ${minutes.toString()}m`
            return (`${hours.toString()}h ${minutes.toString()}m`)
        }
    }


    function verifyRating(r){
        if(r == null){
            
            return "N/A"
            
        }else{
            return r
        }
    }

    return (
        <>
        <section>
        <div className="main-container">
            <div className="show-container">
                <span className="show-img"><img src={s.show.image.medium} alt={s.show.name}/></span>
                <div className="show-details">
                    <div>
                        <span className="s-name">{s.show.name}</span>
                    </div>
                    <div className="s-more-details">
                        <div>
                            <span className="s-lang">{s.show.language}</span>
                            <span className="s-gener">{s.show.genres.map((g)=>{return (g+", ")})}</span>
                            <span className="s-relasedate">{s.show.premiered}</span>
                        </div>
                        <span className="s-runtime">{calDuration(s.show.runtime)}</span>
                    </div>

                </div>
                <div className="s-rating">
                    <span className="rating-icon">✰</span>
                    <span className="rating">{verifyRating(s.show.rating.average)}</span>
                </div>
                <div className="s-watch-option">
                    <button onClick={()=>{let reqData = {
                        "id":s.show.id,
                        "name":s.show.name,
                        "language":s.show.language,
                        "genres":s.show.genres,
                        "date": s.show.premiered,
                        "duration":duration,
                        "summary":s.show.summary}

                        navigate(`/show/${reqData.id}/${reqData.duration}`)
                        }}>Watch Now</button>
                </div>
            </div>
        </div>
        </section>
        </>
    )
}

export default ShowDetails
