import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'
import './Contact.css'
import { IoLocationSharp } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { GiWorld } from "react-icons/gi";
import { FaFacebook, FaInstagramSquare, FaYoutube } from 'react-icons/fa'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import ReCAPTCHA from 'react-google-recaptcha';
import AOS from 'aos'
import 'aos/dist/aos.css'

function Contact() {
    useEffect(() => {
        AOS.init()
    }, [])

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        subject: ''
    });

    const [captchaValue, setCaptchaValue] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!captchaValue) {
            alert('Please complete the CAPTCHA');
            return;
        }

        // Process form submission
        console.log('Form data:', formData);
        console.log('CAPTCHA value:', captchaValue);

        // Clear form and CAPTCHA
        setFormData({
            name: '',
            email: '',
            message: '',
            subject: ''
        });
        setCaptchaValue(null);
    };

    return (
        <div className='btm100'>
            <Breadcrumbs title='Contact Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='h1-container'><h1>Dr.Ashvin Gami 's urethral and hypospadias Clinic. </h1></div>
                    <h1>Ahmedabad - Saturday with Appointment
                    </h1>
                    <div className='location' data-aos="fade-up">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d840.2113617813147!2d72.5308393!3d23.0387415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85e0f0960aff%3A0x5cdb62d8d25d5ab8!2sIcon%20hospital!5e1!3m2!1sen!2sin!4v1752643844139!5m2!1sen!2sin" width="600" height="450" loading="lazy" allowFullScreen referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <h1>Palanpur - Monday to Friday At 10 AM To 1:30 PM
                    </h1>
                    <div className='location' data-aos="fade-up">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1400.8919999750185!2d72.4227151977205!3d24.172714187148145!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395cebe071218321%3A0x6bb034ed0e70f80e!2sKidney%20Care%20Hospital-%20Dr.%20Ashwin%20Gami!5e1!3m2!1sen!2sin!4v1752741368552!5m2!1sen!2sin" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                    <div className='contact-container'>
                        <div data-aos="fade-up">
                            <h2>
                                Contact Details
                            </h2>
                            <div className='contact-detail'>
                                <span><IoLocationSharp /></span>
                                <address>
                                    ICON Hospital,  near Kalyan Pusti Haveli, Opp. Alpha One  mall exit, Vastrapur, City - Ahmedabad
                                </address>
                                <address>
                                    <h5>Main Branch:</h5> Kidneycare hospital and research center, Tannu complex,  GIDC, Palanpur 385001
                                </address>
                            </div>
                            <div className='contact-detail'>
                                <span><IoCall /></span>
                                <ul>
                                    <li>
                                        <a>+91 9274543232</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='contact-detail'>
                                <span><GiWorld /></span>
                                <ul>
                                    <li>
                                        <a>gamiurethralclinic@gmail.com</a>
                                    </li>
                                    <li>
                                        <a>www.drashvingami.in</a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2>Follow Us</h2>
                                <div className='social-icon-child' style={{
                                    height: 'fitContent',
                                    display: 'contents'
                                }}>
                                    <ul>
                                        <li>

                                            <a href='https://www.facebook.com/share/17FtHMpLpA/'>
                                                <FaFacebook />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://www.instagram.com/ashvin.gami.1?igsh=MzByZXRveDdlOTEz'>
                                                <FaInstagramSquare />
                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://api.whatsapp.com/send/?phone=%2B919274543232&text&type=phone_number&app_absent=0'>
                                                <FaWhatsapp />


                                            </a>

                                        </li>
                                        <li>

                                            <a href='https://maps.app.goo.gl/VYJe8Hmncr3YzExd9'>
                                                <FaMapMarkerAlt />


                                            </a>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='contactus' data-aos="fade-up">
                            <div>
                                <h2>Get In Touch</h2>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div>
                                    <div className='col-lg-6'>
                                        <div className='width-50'>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                placeholder='Your Name'
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className='width-50'>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                placeholder='Your Email'
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-lg-12'>
                                        <input
                                            type='text'
                                            name="subject"
                                            value={formData.subject}
                                            placeholder='Your Subject'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <textarea
                                            cols='30'
                                            rows='10'
                                            required
                                            name="message"
                                            value={formData.message}
                                            placeholder='Your Message'
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <ReCAPTCHA
                                            sitekey="YOUR_RECAPTCHA_SITE_KEY"
                                            onChange={handleCaptchaChange}
                                        />
                                    </div>
                                    <div className='col-lg-12'>
                                        <button type="submit">Submit</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Contact
