import React from 'react'
import './CardC.scss'
import add from '../img/Group 17.png';
import picture1 from '../img/Ellipse 1.png';
import picture2 from '../img/Ellipse 1 (1).png';
import picture3 from '../img/Ellipse 1 (2).png';
import picture4 from '../img/Ellipse 1 (3).png';
import picture5 from '../img/Ellipse 1 (4).png';
import picture6 from '../img/Ellipse 1 (5).png';

export default function CardC() {
    return (
        <div className="Card-c">
            <div id='add'>
                <img src={add} alt="" />
                <h1>Create Group</h1>
            </div>
            <div className="box">
                <img src={picture1} alt="" />
                <h1>Cuisine</h1>
                <p>36 members</p>
            </div>
            <div className="box">
                <img src={picture2} alt="" />
                <h1>Art</h1>
                <p>9 members</p>
            </div>
            <div className="box">
                <img src={picture3} alt="" />
                <h1>Workout</h1>
                <p>27 members</p>
            </div>
            <div className="box">
                <img src={picture4} alt="" />
                <h1>Gaming</h1>
                <p>105 members</p>
            </div>
            <div className="box">
                <img src={picture5} alt="" />
                <h1>Hiking</h1>
                <p>97 members</p>
            </div>
            <div className="box">
                <img src={picture6} alt="" />
                <h1>Yoga</h1>
                <p>65 members</p>
            </div>
        </div>
    )
}

