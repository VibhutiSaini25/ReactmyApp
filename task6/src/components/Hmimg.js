import "./HmimgStyles.css";
import React from "react";
import { Link } from "react-router-dom";
const HmImg=()=>{
    return<div className="hero">
        <div className="mask">
            <img className="into-img" src="https://c0.wallpaperflare.com/preview/107/714/504/interior-office-workspace-computer.jpg" alt="{}" />

        </div>
        <div className="content">
            <p>Hi I'm a student</p>
            <h1>Pursuing Btech in CSE-Business Systems</h1>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
        
    </div>
}
export default HmImg;