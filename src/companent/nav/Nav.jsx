import React from 'react'
import './Nav.scss'
import arrow from '../img/Frame.png';
import img6 from '../img/Group 13.png';
import img7 from '../img/Group 14.png';


export const nav = () => {
    return (
        <nav>
            <div className="name">
                <img src={arrow} />
                <h1>Groups</h1>
            </div>
            <div className="imgs">
                <img src={img6} />
                <img src={img7} />
            </div>
        </nav>
    )
}

export default nav