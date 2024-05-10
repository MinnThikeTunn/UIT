import React,{useState,useEffect} from "react";
import './../Styles/Faculty.css';

export default function Major(){
    const [hideDiv, setHideDiv] = useState(false);

    useEffect(() => {
        const handleResize = () => {
        if (window.innerWidth <= 1150) {
            setHideDiv(true);
        } else {
            setHideDiv(false);
        }
        };

        // Initial check on component mount
        handleResize();

        // Event listener for window resize
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => {
        window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <div className="majorSection py-[72px] px-[5%]">
            {!hideDiv && <DesktopSize/>}
            {hideDiv && <MobileSize/>}
        </div>
    )
}


function DesktopSize(){
    return(
        <div className="majorContainer desktopSize">
                <div className="leftMajorWrapper">
                    <div className="leftMajor">
                        <div className="fakeImg"></div>
                        <h4>High Performance Computing (HPC)</h4>
                    </div>
                </div>
                <div className="rightMajorWrapper">
                    <div className="majorTitle">
                        <div className="majorSmallTitle">
                            <p style={{fontSize:18,color:'#3798a6'}}>.</p>
                            <p style={{fontSize:16,color:'#1c1d20',opacity:0.5}}>Majors</p>
                        </div>
                        <h2>FCS offers two majors:</h2>
                    </div>
                    <div className="rightMajor">
                        <div className="fakeImg"></div>
                        <h4>Knowledge Engineering (KE)</h4>
                    </div>
                </div>
            </div>
    )
}

function MobileSize(){
    return(
        <div className="majorContainer mobileSize w-full">
            <div className="majorTitle w-full">
                <div className="majorSmallTitle">
                    <p style={{fontSize:18,color:'#3798a6'}}>.</p>
                    <p style={{fontSize:16,color:'#1c1d20',opacity:0.5}}>Majors</p>
                </div>
                <h2>FCS offers two majors:</h2>
            </div>
            <div className="majorImgCon w-full">
                <div className="majorImg1">
                    <div className="fakeImg"></div>
                    <h4>High Performance Computing (HPC)</h4>
                </div>
                <div className="majorImg2">
                    <div className="fakeImg"></div>
                    <h4>Knowledge Engineering (KE)</h4>
                </div>
            </div>
        </div>
    )
}