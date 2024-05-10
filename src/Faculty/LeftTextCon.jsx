import React from "react";
import { useStateContext } from "./StateContext";

export default function LeftTextCon(){

    const { showFirst } = useStateContext();

    return(
        <div className="leftTextCon w-[400px] flex">
            <div className={`leftTextCon1 w-full ${showFirst?'stable':'move'}`}>
                <div className="smallTitle">
                    <p style={{fontSize:18,color:'#3798a6'}}>.</p>
                    <p style={{fontSize:16,color:'#1c1d20',opacity:0.5}}>Vision</p>
                </div>
                <div className="leftMainText w-full">
                    <h3 className="w-[400px]">The visions of faculty of computer science are:</h3>
                </div>
            </div>
            <div className={`leftTextCon2 w-full ${showFirst?'move':'stable'}`}>
            <div className="smallTitle">
                    <p style={{fontSize:18,color:'#3798a6'}}>.</p>
                    <p style={{fontSize:16,color:'#1c1d20',opacity:0.5}}>Mission</p>
                </div>
                <div className="leftMainText w-full">
                    <h3 className="w-[400px]">In support of its vision, we are committed to:</h3>
                </div>
            </div>
        </div>
    )
}