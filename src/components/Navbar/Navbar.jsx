import React from "react";
import './Navbar.css'
import Dropdown from "./dropdown";

let Resume=()=>{
    window.open("https://drive.google.com/file/d/1q1a1Uvh0vyCcY2TXZmOhOmjpYVKxx-5S/view", "_blank");
}

export default function Navbar() {
    
    return (
        <div className="Navbar">
            <span className="material-symbols-outlined logo">
                roofing
            </span>
            <ul className="nav-list">
                    <a href="#about"><li>About</li></a>
                    <a href="#skills"><li>Skills</li></a>
                    <a href="#projects"><li>Projects</li></a>
                    <a href="lastsec"><li>Contact</li></a>
            </ul>

            <div className="Resume-Nav">
                <button className="resume-btn" onClick={Resume}>Resume</button>
            </div>
            <Dropdown />
        </div>
    );
}