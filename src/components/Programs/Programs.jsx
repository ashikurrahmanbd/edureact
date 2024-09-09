import React from 'react'
import './Programs.css'

import { faGraduationCap } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import programimage from '../../assets/program1.jpg'
import Title from '../reuseablecomponent/Title/Title'


function Programs() {
  return (
    <div className='programs'>
        <div className="container">
            <div className="section-heading">
                <Title title="Our Programs" textColor="#000" textAlign="center" />
            </div>
            <div className="program-wrapper">
                <div className="program">
                    <img src={programimage} alt="" />
                    <div className="caption">
                        <div className="caption-content">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                            <p>Graduatoin Degree</p>
                        </div>
                    </div>
                </div>
                <div className="program">
                    <img src={programimage} alt="" />
                    <div className="caption">
                        <div className="caption-content">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                            <p>Masters Degree</p>
                        </div>
                    </div>
                </div>
                <div className="program">
                    <img src={programimage} alt="" />
                    <div className="caption">
                        <div className="caption-content">
                            <FontAwesomeIcon icon={faGraduationCap}/>
                            <p>Post Graduatoin</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Programs
