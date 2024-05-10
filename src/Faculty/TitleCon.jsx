import React,{useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faRocket } from '@fortawesome/free-solid-svg-icons';
import { useStateContext } from "./StateContext";

export default function TitleCon(){
    const { showFirst, setShowFirst } = useStateContext();

    const handleClick = () => {
        setShowFirst(!showFirst);
    };

    return(
        <div class="titleCon w-[346px] h-[92px] rounded-[20px] p-[8px] flex gap-[16px] mb-3">
            <div className={`rectangle ${showFirst?'visionWrap':'missionWrap'}`}></div>
            <div className={`vision ${showFirst?'':'cursor-pointer'}`} onClick={handleClick}>
                <FontAwesomeIcon icon={faEye} className="faIcon"  />
                <span style={{fontSize:24,fontWeight:400}} className={`${showFirst?'':'cursor-pointer'}`}>Vision</span>
            </div>
            <div className={`mission ${showFirst?'cursor-pointer':''}`} onClick={handleClick}>
                <FontAwesomeIcon icon={faRocket} className="faIcon" />
                <span style={{fontSize:24,fontWeight:400}} className={`${showFirst?'cursor-pointer':''}`}>Mission</span>
            </div>    

            
        </div>
    )
}

