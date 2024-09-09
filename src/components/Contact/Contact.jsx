import React from 'react'

import { faEnvelope, faLocation, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Title from '../reuseablecomponent/Title/Title'
import './Contact.css'

function Contact() {


    //web3Form
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "c32014bc-b8a5-45b6-8ee7-bb8860b2f439");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    

    return (
        <div className='contact-wrapper'>
            <div className="container">
                <div className="contact">
                    <Title title="Get in Touch" textAlign="center" />
                    <div className="infonform">
                        <div className="contact-info">
                            <h3>Send us Message</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat rerum et, quo nesciunt labore porro molestiae facilis quasi impedit nulla dolor asperiores deserunt libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores fugiat rerum et, quo nesciunt labore porro molestiae facilis quasi impedit nulla dolor asperiores deserunt libero!</p>
                            <div className="contact-icon">
                                <ul>
                                    <li><span> <FontAwesomeIcon icon={faEnvelope} className='cicon' /> </span> Contact@ashik.com</li>
                                    <li><span> <FontAwesomeIcon icon={faPhone} className='cicon' /> </span> +880123456789</li>
                                    <li><span> <FontAwesomeIcon icon={faLocation} className='cicon' /> </span> Dhaka Bangladesh</li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact-form">
                            <form action="" onSubmit={onSubmit}>

                                <div className="form-group">
                                    <p><label htmlFor="name">Your Name</label></p>
                                    <input type="text" name='name' id='name' placeholder='Enter your name' />
                                </div>

                                <div className="form-group">
                                    <p><label htmlFor="phone">Phone Number</label></p>
                                    <input type="text" name='phone' id='phone' placeholder='Enter your Mobile Number' />
                                </div>

                                <div className="form-group">
                                    <p><label htmlFor="message">Write Your Message</label></p>
                                    <textarea name="message" id="message" placeholder='Your Message'></textarea>
                                </div>

                                <div className="display-sending-info">
                                    <span>{result}</span>
                                </div>

                                <div className="form-group submit">
                                    <button className='btn submit-button' type='submit'>Submit</button>
                                </div>
                                
                            </form>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
