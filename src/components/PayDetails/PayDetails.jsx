import React from 'react'
import "./PayDetails.css"
import {useParams} from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PayDetails = () => {

    let {imgDir,img} = useParams();
    
    return (
        <>
        <span className="page-info">
        <h1>Booking Details</h1>
    </span>
    <section className="pay-section">
        
        <div className="payment-details-container">
            <span>Name</span>
            <input type="text" placeholder="Enter Name" name="Name" id="pay-name" required />

            <span>Email</span>
            <input type="email" placeholder="Ticket will be sent to this email" name="Name" id="pay-email" required />
        
            <span>No. of Seats</span>
            <select name="seats" id="pay-seats">
                <option defaultValue value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
            </select>

            <span>Timings</span>
            <select name="days" id="pay-days">
                <option value="Monday">Monday</option>
            </select>
            <select name="time" id="pay-time">
                <option value="20:00">20:00</option>
            </select>
            <div className="pay-proceed-book">
                <button onClick={()=>{
                    let userName = document.getElementById("pay-name").value
                    let userEmail = document.getElementById("pay-email").value
                    let userSeats = document.getElementById("pay-seats").value
                    let userDay = document.getElementById("pay-days").value
                    let userTime = document.getElementById("pay-time").value
                    
                    if(userEmail == '' || userName == ''){
                        toast.error("Fill the Details Correctly!")
                    }else{
                        
                        let data = {ticket:[{"username":userName,"useremail":userEmail,"seats":userSeats,"day":userDay,"time":userTime}]}
                        localStorage.setItem("ticket",data)
                        toast.success("Tickets Booked Succesfully!")

                    }

                    
                        
                    
                    
                }} className="pay-book-btn">Proceed to Book</button>
            </div>
        </div>
        
        <div className="show-image">
        <img src={`https://static.tvmaze.com/uploads/images/original_untouched/${imgDir}/${img}`} alt="" />
        </div>
        
        

    </section>
    <ToastContainer
position="bottom-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
        </>
    )
}

export default PayDetails
