import { AnimatedText } from '../Components/AnimatedText';
import Navbar from '../Nav/Navbar';
import useResize from '../utils/useResize';
import { useSelector } from 'react-redux';
import React,{ useState } from 'react';

    
function AcademicRule() {
  const language = useSelector((state) => state.language.value);

  const title = "Academic Rule";
  const MyanText = "Academic Rule";

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
    <div className="hide hero ps-14 pt-[8rem]  lg:pb-24">
    <span className="overflow-hidden fade">
    <AnimatedText
          once
          text={title}
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
    </div>
   
    
  
    </>
  );

 
}



export default AcademicRule;


