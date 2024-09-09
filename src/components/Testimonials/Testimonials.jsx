import React, { useRef } from 'react'

import { faLeftLong, faRightLong } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '../reuseablecomponent/Title/Title'
import './Testimonials.css'

import userImage from '../../assets/justin.jpg'

function Testimonials() {

    const slider = useRef();
    let translateXvalue = 0;

    const testimonialLeftHandler = () => {

        if(translateXvalue < 0){
            
            translateXvalue += 24;
        }
        slider.current.style.transform = `translateX(${translateXvalue}%)`;

        
    }

    const testimonialRightHandler = () => {

        if(translateXvalue > -25){
            translateXvalue -= 24;
        }
        slider.current.style.transform = `translateX(${translateXvalue}%)`;
    }


  return (
    <div className='testimonial-wrapper'>
        <div className="container">
            <div className="section-heading">
                <Title title="Testimonials" textAlign="center" />
            </div>
            <div className="testimonials">
                <div className="testimonial-slider">
                    <ul ref={slider}>
                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={userImage} alt="" />
                                    <div className="user-identity">
                                        <h4>Justin beiber (1)</h4>
                                        <p>Ex Volunteer, Vexim Group</p>
                                    </div>
                                </div>
                                <div className="user-feedback">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat. Architecto ullam molestias cum voluptas tempore laboriosam vitae quis et neque dolorem! Nam, dolorum nisi!</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={userImage} alt="" />
                                    <div className="user-identity">
                                        <h4>Justin beiber(2)</h4>
                                        <p>Ex Volunteer, Vexim Group</p>
                                    </div>
                                </div>
                                <div className="user-feedback">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat. Architecto ullam molestias cum voluptas tempore laboriosam vitae quis et neque dolorem! Nam, dolorum nisi!</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={userImage} alt="" />
                                    <div className="user-identity">
                                        <h4>Justin beiber(3)</h4>
                                        <p>Ex Volunteer, Vexim Group</p>
                                    </div>
                                </div>
                                <div className="user-feedback">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat. Architecto ullam molestias cum voluptas tempore laboriosam vitae quis et neque dolorem! Nam, dolorum nisi!</p>
                                </div>
                            </div>
                        </li>

                        <li>
                            <div className="slide">
                                <div className="user-info">
                                    <img src={userImage} alt="" />
                                    <div className="user-identity">
                                        <h4>Justin beiber(4)</h4>
                                        <p>Ex Volunteer, Vexim Group</p>
                                    </div>
                                </div>
                                <div className="user-feedback">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, repellat. Architecto ullam molestias cum voluptas tempore laboriosam vitae quis et neque dolorem! Nam, dolorum nisi!</p>
                                </div>
                            </div>
                        </li>


                    </ul>
                </div>
                <div className="slider-controls">
                    <FontAwesomeIcon icon={faLeftLong} onClick={testimonialLeftHandler}/>
                    <FontAwesomeIcon icon={faRightLong} onClick={testimonialRightHandler}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Testimonials
