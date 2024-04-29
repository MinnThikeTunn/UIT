import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import { useSelector } from 'react-redux';
import { motion } from "framer-motion";


    
function FaciLibrary() {
  const title = "Library";
  const language = useSelector((state) => state.language.value);

  
  const MyanText = "စာကြည့်တိုက်";

  const display = (language == "EN") ? title : MyanText;
  const windowWidth = useResize(title);

  const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

  return (
    <>
     <Navbar sendDataToParent={handleDataFromNav} />

<div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive main px-2' : 'main px-2'}>

  

 <motion.div initial={{ opacity: 0}} animate={{ opacity: 1}} exit={{ opacity: 0 }} >
   <div className="hide hero ps-14 pt-[8rem]  lg:pb-24">
<span className="overflow-hidden fade">
<AnimatedText
     once
     text={display}
     el="h1"
     className="lg:text-7xl text-6xl font-medium"
     language={language}
   />
</span>
</div>
<div className="sm:hidden hero ps-4 pt-[5rem] lg:pt-72">
  <span className="overflow-hidden fade">
   <AnimatedText
  once
  text={display}
  el="h1"
  className="text-5xl font-medium"
  language={language}
/>

  </span>
</div>
 </motion.div> 
 


</div>
   
    
  
    </>
  );

 
}



export default FaciLibrary;