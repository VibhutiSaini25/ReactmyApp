import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HmImg2 from "../components/Hmimg2";
const Project=()=>{
    return(
        <div>
            <Navbar/>
            <HmImg2 heading="Projects" text="Some of my recent projects:"/>
                <ul className="list">
                    <li>
                        <div>
                        <img src="C:/Users/vibhu/Downloads/img.jpg"/>

                        </div>
                      
                        Smedox:Smart Pill Box
                    </li>
                </ul>
                
               
            
            
            <Footer/>


        </div>
    );
}; 
export default Project;