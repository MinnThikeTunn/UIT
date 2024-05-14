import React from "react";

export default function Member(){
    return(
        <div className="memberWrap px-[5%] lg:pr-[10%] py-[72px]">
            <div className="member">
                <div className="memberTitle md:w-[506px] w-[253px]">
                    <div className="smallMemberTitle">
                        <p style={{fontSize:18,color:'#3798a6'}}>.</p>
                        <p style={{fontSize:16,color:'#1c1d20',opacity:0.5}}>Majors</p>
                    </div>
                    <h2 className="text-[36px] md:text-[72px]">Meet our lovely members</h2>
                </div>
                <div className="memberImgConWrap flex flex-wrap ">
                    <div className="memberImgCon ">
                        <div className="memberImg "></div>
                        <div className="memberDetails">
                            <p>Dr. Ei Chaw Htoon</p>
                            <p>Pro-rector & Dean</p>
                        </div>
                    </div>
                    <div className="memberImgCon ">
                        <div className="memberImg "></div>
                        <div className="memberDetails">
                            <p>Dr. Ei Chaw Htoon</p>
                            <p>Pro-rector & Dean</p>
                        </div>
                    </div>
                    <div className="memberImgCon ">
                        <div className="memberImg "></div>
                        <div className="memberDetails">
                            <p>Dr. Ei Chaw Htoon</p>
                            <p>Pro-rector & Dean</p>
                        </div>
                    </div>
                    <div className="memberImgCon ">
                        <div className="memberImg "></div>
                        <div className="memberDetails">
                            <p>Dr. Ei Chaw Htoon</p>
                            <p>Pro-rector & Dean</p>
                        </div>
                    </div>
                    <div className="memberImgCon ">
                        <div className="memberImg "></div>
                        <div className="memberDetails">
                            <p>Dr. Ei Chaw Htoon</p>
                            <p>Pro-rector & Dean</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}