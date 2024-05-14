import '../Styles/Degree.css';
import '../Styles/Faculty.css';
import Headline from './Headline';
import Navbar from '../Nav/Navbar';
import Vision from './Vision';
import useResize from '../utils/useResize';
import React,{ useState } from 'react';
import Major from './Major';
import Member from './Member';

function Faculty(){

    const windowWidth = useResize("Admissions information and requirements");
 
    const [dataFromNav, setDataFromNav] = useState(true);

    const handleDataFromNav = (data) => {
        setDataFromNav(data);
    };

 

    
    return (
        <div className='faculty' style={{background:'#fff'}}>
            <Navbar sendDataToParent={handleDataFromNav}/>
            
                <div className={windowWidth <= 1024 && !dataFromNav ? 'mainUnactive mainCon' : 'mainCon'} >
                    <Headline />
                    <Vision />
                    <Major />
                    <Member />
                </div>

            
        </div>
    )
}


export default Faculty;