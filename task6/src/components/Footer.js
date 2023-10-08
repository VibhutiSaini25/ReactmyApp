import "./FooterStyles.css";
import React from "react";
import {FaHome ,FaPhone,FaMailBulk, FaFacebook, FaTwitter, FaLinkedin,} from "react-icons/fa"
const Footer=()=>{
    return(
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        <div>
                        <p>456 Housing Society.</p><p>India</p>
                            
                        </div>
                    </div>
                    <div className="phone">
                        <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                        <div>
                            <h4>9894969393</h4>
                        </div>
                    </div>
                    <div className="email" >
                        <FaMailBulk style={{color:"#fff",marginRight:"2rem"}}/>
                        <div>
                            <p>abc@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                    <h4>About</h4>
                    <p>This is a Portfolio</p>
                    <div className="socila">
                    <FaFacebook style={{color:"#fff",marginRight:"2rem"}}/>
                    <FaTwitter style={{color:"#fff",marginRight:"2rem"}}/>
                    <FaLinkedin style={{color:"#fff",marginRight:"2rem"}}/>
                    

                    </div>

                </div>
            </div>
            
        </div>

    )
 
}
export default Footer;
