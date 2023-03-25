import React from 'react'
import './Sidebar.scss'
import img1 from '../img/Group 7.png';
import img2 from '../img/Group 8.png';
import img3 from '../img/Group 9.png';
import img4 from '../img/Group 10.png';



export const Sidebar = () => {
    return (
        <div className="sidebar">
            <ul>
                <li><img src={img1} alt="" /></li>
                <li><img src={img2} alt="" /></li>
                <li><img src={img3} alt="" /></li>
                <li><img src={img4} alt="" /></li>
            </ul>
        </div>
    )
}

export default Sidebar