import React from "react";
import { useStateContext } from "./StateContext";

export default function RightTextCon(){

    const { showFirst } = useStateContext();

    return(
        <div className="rightTextCon w-[608px]">
            <ul className={`ul1 ${showFirst?'appear':'disappear'}`}>
                <li className="mb-[16px]">
                    <p>to become a center of excellence in teaching and research by building a strong research and teaching environment</p>
                </li>
                <li>
                    <p>
                    to produce the highly qualified human resources as industry ready IT professionals and innovative leaders in the fields of computer science and the information technology related areas for the development of the country’s IT industry needs
                    </p>
                </li>
            </ul>

            <ul className={`ul2 ${showFirst?'disappear':'appear'}`}>
                <li className="mb-[16px]">
                    <p>Provide a learning atmosphere to enhance innovations, problem solving skills, leadership qualities, team-spirit and ethical responsibilties.</p>
                </li>
                <li className="mb-[16px]">
                    <p>
                    Revise our curriculum yearly to be the quality education to meet the needs of profession and society.
                    </p>
                </li>
                <li className="mb-[16px]">
                    <p>
                    Faster research-based projects/activities in the emerging areas of technology convergence.
                    </p>
                </li>
                <li className="mb-[16px]">
                    <p>
                    Establish private-public partnership program to enhance the entrepreneurship skills
                    </p>
                </li>
                <li>
                    <p>
                    Educate our students with the quality of leadership skill and life-long learners.
                    </p>
                </li>
            </ul>
        </div>
    )
}