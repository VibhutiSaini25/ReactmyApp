import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HmImg2 from "../components/Hmimg2";
import Form from "../components/Form";
const Contact=()=>{
    return(
        <div>
            <Navbar/>
            <HmImg2 heading="CONTACT." text="You can reach me" />
            <Form/>
            <Footer/>
        </div>
    )
}
export default Contact; 