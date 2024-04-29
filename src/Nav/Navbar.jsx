import React, { useEffect, useRef, useState } from "react";
import './../Styles/Navbar.css';
import image from './../Images/UIT-Logo-big.png';
import Item1 from './MenuTab1';
import Item2 from './MenuTab2';
import TranslationButton from './TranslationButton';
import { Link } from 'react-router-dom';

function Navbar({sendDataToParent}){
    const navRef = useRef();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [hoveredTab, setHoveredTab] = useState(null);
    const [activeTab, setActiveTab] = useState(null);
    const [activeNav, setActiveNav] = useState(false);
    

    const handleHover = (tab) => {
        if(windowWidth > 1024){
            setHoveredTab(tab);
        }
    }

    const handleLeave = () => {
        if(windowWidth > 1024){
            setHoveredTab(null);
        }
    }

    const handleToggleAccordion = (tab) => {
        if (windowWidth <= 1024) {
          setActiveTab(activeTab === tab ? null : tab);
        }
      };


    useEffect(()=>{
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize); 
        }
    },[])

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
        setActiveNav(!activeNav);
        sendDataToParent(activeNav);
    }

    return (
        <header>
            <Link reloadDocument to="/"><img src={image} className="uitLogo"/></Link>
            <nav ref={navRef}>
                <div className="Menu" onMouseEnter={()=>handleHover("menu1")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu1")}>
                    <a className={windowWidth>1024?"hoverActive menu1":"menu1"} style={{opacity:hoveredTab==='menu1'&&0.7}}>
                        <span>About</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                            <path d={activeTab==="menu1"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1024 ? "white" : "black"} stroke-width="2" stroke-linecap="round"/>
                        </svg>
                        {(windowWidth <= 1024) && (
                            <div className={activeTab==="menu1"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu1" && windowWidth > 1024) && (
                        <Item1/>
                    )}
                    {(windowWidth <= 1024 && activeTab === "menu1") && (
                        <Item1/>
                    )}
                </div>

                <div className="Menu" onMouseEnter={()=>handleHover("menu2")} onMouseLeave={handleLeave} onClick={()=>handleToggleAccordion("menu2")}>
                    <a className={windowWidth>1024?"hoverActive menu2":"menu2"} style={{opacity:hoveredTab==='menu2'&&0.7}}>
                        <span>Academic</span>
                        <svg width="18" height="9" viewBox="0 0 18 9" fill="none" xmlns="http://www.w3.org/2000/svg" className="arrow">
                            <path d={activeTab==="menu2"?"M17 8L8.57895 2L1 8":"M1 1.64285L9.42105 7.64285L17 1.64285"} stroke={windowWidth <= 1024 ? "white" : "black"} stroke-width="2" stroke-linecap="round"/>
                        </svg>

                        {(windowWidth <= 1024) && (
                            <div className={activeTab==="menu2"?"stick active":"stick"}></div>
                        )}
                    </a>
                    {(hoveredTab === "menu2" && windowWidth > 1024) && (
                        <Item2/>
                    ) }
                    {(windowWidth <= 1024 && activeTab === "menu2") && (
                        <Item2/>
                    )}
                </div>

                <TranslationButton/>
                
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <svg width="34" height="2" viewBox="0 0 34 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1H33" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <svg width="64" height="40" viewBox="0 0 64 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 16H48" stroke="#1C1D20" stroke-width="2" stroke-linecap="round"/>
                    <path d="M16 24H32" stroke="#1C1D20" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </button>
        </header>
    )
}

export default Navbar;