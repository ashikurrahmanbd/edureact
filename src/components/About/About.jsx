import React from 'react';
import './About.css';

import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import aboutimage from '../../assets/about-img.jpg';

function About() {
  return (
    <div className='about-wrapper' id='aboutus'>
      <div className="container">
        <div className="about">
            <div className="about-left">
                <img src={aboutimage} alt="" />
                <div className="play-icon">
                    <FontAwesomeIcon icon={faPlayCircle} />
                </div>
            </div>
            <div className="about-right">
                <div className="small-heading">
                    <h3>About University</h3>
                    <h2>Nurturing Tomorrows Leaders Today</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores et eaque qui odit corporis at exercitationem cupiditate aliquam ea, in, iste quis doloribus reiciendis similique accusantium voluptas minus eligendi, obcaecati voluptatibus sunt consequuntur beatae! Voluptatum neque, ad non similique doloremque atque aliquid recusandae, tenetur rerum perspiciatis quas in reprehenderit qui vel minima. Optio officia provident et magni corporis odio, quis tenetur tempora hic nisi non recusandae maiores eius eos facere consequatur esse earum nam fuga. Tempore sapiente ipsam est repellendus iure atque. Nobis fugiat beatae deserunt soluta asperiores hic quod velit, quia, at voluptas numquam! Ab non cumque alias ipsum.
                    </p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
