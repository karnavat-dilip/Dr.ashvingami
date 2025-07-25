import React, { useEffect } from 'react'
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebook, FaInstagramSquare, FaMapMarkerAlt } from 'react-icons/fa'
import './Footer.css'
import companylogo from '../../Assets/ashvingami_assets/Kidney_Logo.png'
import { RiCustomerService2Line } from "react-icons/ri";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { TbWorldWww } from "react-icons/tb";
import AOS from 'aos'
import 'aos/dist/aos.css'

function Footer() {
    useEffect(() => {
        AOS.init()
    }, [])
    return (
        <>
            <footer className='Footer'>
                <div className='container'>
                    <div className='Footer-child' >
                        <div className='section-child' >
                            <div className='section-subchild'>
                                <img src={companylogo} style={{'mix-blend-mode': 'darken'}} width='150' alt='LOGO' />
                                <p>Dr. Ashvin Gami’s Urethral and hypospadias Clinic,  A branch of Kidneycare hospital Palanpur
                                    Two decades of expertise in Reconstructive Urology </p>
                                <div className='customer-service'>
                                    <RiCustomerService2Line style={{
                                        width: '45px',
                                        height: '59px'
                                    }} />
                                    <ul>
                                        <li>Book an Appointment Today</li>
                                        <li>
                                            <a href="tel:+91 9274543232">+91 92745 43232</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='section-child'>
                            <div>
                                <p>Founder of Endourethroplasty(MSTGM) a groundbreaking surgical technique for stricture urethra, developed for the first time in the world.
                                </p>
                                <p>Take the first step toward a better, striture-free life.
                                </p>
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

                                            <a href='https://api.whatsapp.com/send/?phone=%2B919274543232&text&type=phone_number&app_absent=0 '>
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
                        <div className='section-child'>
                            <h3>Sitemap</h3>
                            <ul className='sitemap'>
                                <li>
                                    <a href='/blog'>Blog</a>
                                </li>
                                <li>
                                    <a href='/about'>About Us</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Mission</a>
                                </li>
                                <li>
                                    <a href='/about'>Our Vision</a>
                                </li>
                                <li>
                                    <a href='/contact'>Contact Us</a>
                                </li>
                            </ul>
                        </div>
                        <div className='section-child'>
                            <a href='/contact'>Contact Us</a>
                            <ul className='contactus'>
                                <li>
                                    <b>Dr. Ashvin Gami’s Urethral & Hypospadias Clinic – Ahmedabad</b>
                                </li>
                                <li>
                                    ICON Hospital,  near Kalyan Pusti Haveli, Opp. Alpha One  mall exit, Vastrapur, City - Ahmedabad
                                </li>
                                <li>
                                   <h5>Main Branch:</h5> Kidneycare hospital and research center, Tannu complex,  GIDC, Palanpur 385001
                                </li>
                                <li>
                                    Gujarat(INDIA)385001
                                </li>
                                <li className='contact-link'>
                                    <IoIosCall className='contact-support' /><a href='tel:+91 9274543232'>+919274543232</a>&nbsp;
                                    {/* <a href='tel:+91 9825015702'>9898487120</a>&nbsp; */}
                                </li>
                                <li className='contact-link'>
                                    <IoMdMail className='contact-support' />
                                    Email Us:
                                </li>
                                <li>
                                    <a style={{
                                        left: '24px',
                                        position: 'relative'
                                    }} href='mailto:gamiurethralclinic@gmail.com'>gamiurethralclinic@gmail.com</a>
                                </li>

                                <li className='contact-link'>
                                    <TbWorldWww className='contact-support' />
                                    <a href='https://www.drashvingami.in'>www.drashvingami.in</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div className='copyright'>
                    <p>Copyright © 2025 Dr. Ashvin Gami’s Urethral & Hypospadias Clinic – Ahmedabad | All Rights reserved Designed & Developed By <a href='tel:+91 9913448958'>Er. Dilip</a></p>
                </div>
            </footer >
        </>
    )
}

export default Footer
