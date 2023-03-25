import React from 'react';
import Nav from '../companent/nav/Nav'
import Sidebar from '../companent/sidebar/Sidebar'
import CardC from '../companent/cardC/CardC'
import './MainPage.scss'



const MainPage = () => {
  return (
    <div className='container'>
      <div className="main-c">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Nav />
          <CardC />
        </div>
      </div>
    </div>
  );
}

export default MainPage 