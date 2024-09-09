
import React from 'react';
import Title from '../reuseablecomponent/Title/Title';
import './Campus.css';

import g1 from '../../assets/gallery1.jpg';
import g2 from '../../assets/gallery2.jpg';
import g3 from '../../assets/gallery3.jpg';
import g5 from '../../assets/gallery5.jpg';
import g6 from '../../assets/gallery6.png';

function Campus() {
  return (
    <div className='campus-wrapper'>
        <div className="container">
            <div className="campus">
                <Title title="Campus Photos" textAlign="center"/>
                <div className="gallery">
                    <img src={g1} alt="" />
                    <img src={g2} alt="" />
                    <img src={g3} alt="" />
                    <img src={g5} alt="" />
                    <img src={g6} alt="" />
                    <img src={g1} alt="" />
                </div>
                <button className='btn'>See More here</button>
            </div>
        </div>
    </div>
  )
}

export default Campus
