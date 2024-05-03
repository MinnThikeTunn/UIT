import '../Styles/Degree.css';
import Subsec from './Subsec';
import {motion, AnimatePresence } from "framer-motion";
import { useState } from "react";


const headingLine = [
  {
    id: 0,
    heading: "Bachelor",

  },
  {
    id: 1,
    heading: "Master",
  },
  {
    id: 2,
    heading: "Decorate"
  }
]

const discription = [
  {
    id: 0,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: ["B.C.Sc. (Software Engineering)","B.C.Sc. (Business Information Systems)","B.C.Sc. (Knowledge Engineering)","B.C.Sc. (High Performance Computing)"],
    title2: ["B.C.Tech. (Embedded Systems)","B.C.Tech. (Communication and Networking)","B.C.Tech. (Cyber Security)"]
  },
  {
    id: 1,
    category1: "Computer Science",
    category2: "Computer Technology",

    title1: ["M.C.Sc. (Software Engineering)","M.C.Sc. (Business Information Systems)","M.C.Sc. (Knowledge Engineering)","M.C.Sc. (High Performance Computing)"],
    title2: ["M.C.Tech. (Embedded Systems)","M.C.Tech. (Communication and Networking)","M.C.Tech. (Cyber Security)" ]

  },
  {
    id: 2,
    category1: "",
    category2: "",

    title1: ["Ph.D (Information Technology)"],
    title2: []

  },
]



function MainSec() {

  const [activeId,setActiveId ] = useState(null);
   const [activeIds,setActiveIds ] = useState(0);

 

  function onClick(id) {
    setActiveId(id);
  }

  function onClicker(id) {
    setActiveIds(id);
  }

  


  return (
    <>
      <div className="customHide py-22 sm:py-44 gap-2.5 h-fit w-100 ">
        <div className="degree-container w-3/4 h-fit m-auto center">
            <div className="compo-1 h-fit">
              { headingLine.map((h1) => 
                <div className="coverr">
                
                  <h1 className="sm:text-6xl text-lg sm:py-10 font-medium"  onClick={onClick.bind(this,h1.id )}>
                    <AnimatePresence>
                    <motion.span className="animator" initial={{ color: "#1C1D2080"}} animate={{ color: (h1.id === activeId) ? "#1c1d20" : "#1C1D2080"}} exit={{ color: "#1C1D2080"}} transition={{ type: "spring", stiffness: 100 }} >{h1.heading}</motion.span>
                    </AnimatePresence>
                    
                  <AnimatePresence>
                  {(h1.id === activeId) && <motion.div initial={{ opaicty: 0, width: "0%"}} animate={{opacity: 1, width: "100%"}} exit={{ opacity: 0, width: "0%" }} transition={{ type: "spring", stiffness: 100 }} className="line"></motion.div>}


                  </AnimatePresence>
                  
                  </h1>
                
                
      </div>
              )}
              
              

                
            </div>
                <div className="compo-2" >
                <div className="p-3">
        <div>
        {discription.map(
          (item) => (
            item.id === activeId)
             &&
             <AnimatePresence>
               <motion.div initial={{ x: 500, opacity: 0}} animate={{ x: 0, opacity: 1}} exit={{ x: 500, opacity: 0}}  transition={{type: "spring", stiffness: 70,}} >
                <h1 className=" my-3 pt-8 font-medium text-3xl leading-10  text-left degreeHead">{item.category1}</h1>
                <div className="px-6">
                  {item.title1.map((li) => (<li className="leading-9 font-medium text-lg smallLink ">{li} </li>))}
                </div>
                  <h1 className="my-3 pt-8 font-medium text-3xl leading-10  text-left degreeHead">{item.category2}</h1>
                  <div className="px-6">
                  {item.title2.map((li) => (<li className="leading-9 font-medium text-lg smallLink ">{li} </li>))}
                  </div>

    
               </motion.div>
          </AnimatePresence>)}    
        </div>
        
        
    </div>
            </div>
        </div>
      
    </div>



    <div className="hideMe pb-22 sm:pb-44 gap-2.5 h-fit w-100 ">
        <div className="degree-container w-3/4 h-fit m-auto center">
            <div className="compo-1 h-fit pt-22 sm:pt-44">
              { headingLine.map((h1) => 
                <div className="coverr">
                
                  <h1 className="text-6xl sm:py-10 font-medium"  onClick={onClicker.bind(this,h1.id )}>
                    <AnimatePresence>
                    <motion.span className="animator" initial={{ color: "#1C1D2080"}} animate={{ color: (h1.id === activeIds) ? "#1c1d20" : "#1C1D2080"}} exit={{ color: "#1C1D2080"}} transition={{ type: "spring", stiffness: 100 }} >{h1.heading}</motion.span>
                    </AnimatePresence>
                    
                  <AnimatePresence>
                  {(h1.id === activeIds) && <motion.div initial={{ opaicty: 0, width: "0%"}} animate={{opacity: 1, width: "100%"}} exit={{ opacity: 0, width: "0%" }} transition={{ type: "spring", stiffness: 100 }} className="line"></motion.div>}


                  </AnimatePresence>
                  
                  </h1>
                
                
      </div>
              )}
              
              

                
            </div>
            <div className="compo-2" >
                <div className="sm:p-3">
        <div>
        {discription.map(
          (item) => (
            item.id === activeIds)
             &&
             <AnimatePresence>
               <motion.div initial={{ y: -500, opacity: 0}} animate={{ y: 0, opacity: 1}} exit={{ y: -500, opacity: 0}}  transition={{type: "spring", stiffness: 70,}} >
               <h1 className="my-3 pt-8 font-medium text-base md:text-3xl leading-10  text-left degreeHead">{item.category1}</h1>
                <div className="sm:px-6">
                  {item.title1.map((li) => (<li className="leading-9 font-medium text-xsl md:text-lg smallLink ">{li} </li>))}
                </div>
                  <h1 className="my-3 pt-8 font-medium  text-base md:text-3xl leading-10  text-left degreeHead">{item.category2}</h1>
                  <div className="md:px-6">
                  {item.title2.map((li) => (<li className="leading-9 font-medium text-base md:text-lg smallLink ">{li} </li>))}
                  </div>

               
               </motion.div>
          </AnimatePresence>)}    
        </div>
        
        
    </div>
            </div>
        </div>
      
    </div>
    </>
  );
}

export default MainSec;





// font-family: Degular Display;
// font-size: 80px;
// font-weight: 500;
// line-height: 92px;
// letter-spacing: 0.03em;
// text-align: left;

