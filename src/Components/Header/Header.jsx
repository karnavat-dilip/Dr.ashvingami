import React, { useEffect, useState } from 'react'
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import './Header.css'
import companylogo from '../../Assets/ashvingami_assets/Kidney_Logo.png'
import gemlogo from '../../Assets/ashvingami_assets/endouretheroplastylogo.png'
import peso from '../../Assets/ashvingami_assets/Kidney_Logo.png'
import msme from '../../Assets/ashvingami_assets/hypospadiaslogo.png'
import booknow from '../../Assets/greenliving/booking.png'
import Iso_90012015 from '../../Assets/Iso-9001-2015.png'
import welcome from '../../Assets/greenliving/welcome.png'
import { TfiAngleDown } from "react-icons/tfi";
import { stack as Menu } from 'react-burger-menu'
import { Accordion, styled } from '@mui/material';

import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { FaHome } from "react-icons/fa";
import { TbLogs } from "react-icons/tb";

import { AiOutlineAppstore } from "react-icons/ai";
import { FaCircleInfo } from "react-icons/fa6";



import { GrGallery } from "react-icons/gr";
import { MdContactPhone } from "react-icons/md";
import { PiArrowUpBold } from "react-icons/pi";
import { FaSquareWhatsapp } from "react-icons/fa6";
import type1 from '../../Assets/greenliving/type1cylinder.jpg'
import type2 from '../../Assets/greenliving/type2cylinder.jpg'
import type3 from '../../Assets/greenliving/type3cylinder.jpg'
import type4 from '../../Assets/greenliving/type4cylinder.png'
import Engine_Carbon_Cleaning from '../../Assets/greenliving/web photo 2/2.jpg'
import Car_Detailing from '../../Assets/greenliving/web photo 2/3.jpg'

import { v4 as uuidv4 } from 'uuid';
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Checkmark } from 'react-checkmark'
import TranslateComponent from '../TranslateComponent';
import Dialog from '@mui/material/Dialog';

import DialogContent from '@mui/material/DialogContent';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { Link, NavLink } from 'react-router-dom';


const CustomAccordion = styled(Accordion)(({ theme }) => ({
    textTransform: 'uppercase',
    left: '-15px',
    boxShadow: 'none',
}));

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [expanded, setExpanded] = useState(null);
    const [isVisible, setIsVisible] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const [open, setOpen] = useState(false);
    const [opencheckcircle, setopencheckcircle] = useState(false);
    const [loading, setloading] = useState(false)
    const [menu, setmenu] = useState(false)
    const [emailData, setEmailData] = useState({
        name: '',
        email: '',
        number: '',
        message: ''
    });

    const Changevalue = (e) => {
        const { name, value } = e.target;

        setEmailData({
            ...emailData,
            [name]: value,
        });
    };
    axios.defaults.withCredentials = true;
    const handleSubmit = async (e) => {
        e.preventDefault();
        setloading(true)
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL}/send-email`, emailData);
            console.log(response);

            console.log('Email sent successfully');
            setOpen(false);
            setopencheckcircle(true);
            setEmailData({
                name: '',
                email: '',
                number: '',
                message: ''
            })
        } catch (error) {
            alert('Error sending email');
        } finally {
            setloading(false)
        }
    };



    useEffect(() => {
        AOS.init()
    }, [])


    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const Closecheckcircle = () => {
        setopencheckcircle(false)
    }

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 200) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Show the scroll button when the page is scrolled down
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 0) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Smooth scrolling
        });
    };



    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : null);
    };
    const currentLocation = window.location.href;



    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const products = [
        {
            id: uuidv4(),
            img: type1,
            title: 'Type 1 Cylinder'
        },
        {
            id: uuidv4(),
            img: type2,
            title: 'Type 2 Cylinder'
        },
        {
            id: uuidv4(),
            img: type3,
            title: 'Type 3 Cylinder'
        },
        {
            id: uuidv4(),
            img: type4,
            title: 'Type 4 Cylinder'
        },
        {
            id: uuidv4(),
            img: Engine_Carbon_Cleaning,
            title: 'Engine Carbon Cleaning',
            description: 'Engine Carbon Cleaning helps remove carbon deposits from your engine, improving fuel efficiency, restoring power, and reducing emissions. A cleaner engine means better performance and longer life.'
        },
        {
            id: uuidv4(),
            img: Car_Detailing,
            title: 'Car Detailing (A Car Beauty SPA.)',
            description: 'Car Detailing is a deep-cleaning and restoration service that makes your car look brand new inside and out. From polishing paint to deep interior cleaning, give your vehicle the spa treatment it deserves.'
        }


    ]

    return (
        <>
            <header className='header-section'>
                <div className='header-tops'>
                    <div className='container'>
                        <div className='container-child'>
                            <div>
                                <h4>🏥 Welcome to Dr. Ashvin Gami’s Urethral & Hypospadias Clinic – Ahmedabad</h4>
                            </div>
                            <div>
                                <ul className='header-user-menu'>
                                    <li>
                                        <IoIosCall /><Link to='tel:+91 9274543232'>+91 9274543232</Link>

                                    </li>
                                    <li>
                                        <IoMdMail />
                                        <Link to='mailto:gamiurethralclinic@gmail.com'>gamiurethralclinic@gmail.com</Link>
                                    </li>


                                </ul>
                            </div>
                            <TranslateComponent />
                        </div>
                    </div>

                </div>
                <div className='header-center'>
                    <div className='container'>
                        <marquee >
                            <h1>Book your Appointment On 2nd and 4th Saturday of month in Ahmedabad</h1>
                        </marquee >
                        <div className='header-logo-menu'>
                            <img src={gemlogo} width='200px' height='200px' alt='logo not available'></img>
                            <img src={peso} width='200px' height='200px' alt='logo not available'></img>
                            <img src={msme} width='200px' height='200px' alt='logo not available'></img>
                        </div>
                    </div>
                </div>
                <div className='header-bottom'>
                    <nav className={isSticky ? 'sticky' : 'navbar'}>
                        <div className='container'>

                            <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                                {/* <img src={companylogo} width='100px' height='100px' alt='logo not available'></img> */}

                                <ul>
                                    <li><NavLink to="/" activeClassName="active">Home</NavLink></li>
                                    <li><NavLink to="/blog" activeClassName="active">Blog</NavLink></li>

                                    {/* <li className="dropdown">
                                        <Link>Our service <TfiAngleDown />
                                        </Link>
                                        <div className="dropdown-content">
                                            <NavLink to="/Stricture-Urethra-Treatment" activeClassName="active">Stricture Urethra Treatment</NavLink>
                                            <NavLink to="/Hypospadias-Surgery" activeClassName="active">Hypospadias Surgery</NavLink>

                                        </div>
                                    </li> */}
                                    {/* <li className="dropdown">
                                        <NavLink to='/Allservice' activeClassName="active">Our service <TfiAngleDown />
                                        </NavLink>
                                        <div className="stone">
                                            <div className='container'>
                                                <div className='p-list-container'>
                                                    {
                                                        products?.map((product, index) => {
                                                            return (
                                                                <div key={product.id}>
                                                                    <Link to={`/Allservice/${index + 1}`}>
                                                                        <img src={product.img} width='100' style={{ alignSelf: 'center' }} />
                                                                        <h3>{product.title}</h3>
                                                                    </Link>
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </li> */}

                                    <li className="dropdown">
                                        <Link>gallery <TfiAngleDown />
                                        </Link>
                                        <div className="dropdown-content">
                                            <NavLink to="/photos" activeClassName="active">Photos</NavLink>
                                            <NavLink to="/videos" activeClassName="active">Videos</NavLink>

                                        </div>
                                    </li>
                                    <li><NavLink to="/about" activeClassName="active">About Us</NavLink></li>
                                    <li><NavLink to="/contact" activeClassName="active">Contact Us</NavLink></li>
                                </ul>


                                <ul className='download'>
                                    <li>
                                        <NavLink to='https://api.whatsapp.com/send?phone=919274543232&text=Hello%20Dr.Ashvin Gami’s.'><img src={booknow} width='25' style={{
                                            position: 'relative',
                                            top: '7px'
                                        }} /> Book an appointment
                                        </NavLink>
                                    </li>
                                </ul>


                            </div>

                        </div>
                    </nav>
                </div>
            </header>
            <Dialog
                open={opencheckcircle}
                keepMounted
                onClose={Closecheckcircle}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <div>
                        <Checkmark size='xxLarge' color='#01a875' />
                        <h1 style={{
                            textAlign: 'center',
                            padding: '14px'
                        }}>
                            Sent!
                        </h1>
                        <div>
                            <p>Kindly check your mail to view or download this document.</p>
                        </div>
                    </div>
                </DialogContent>

            </Dialog >
            <Dialog
                open={open}

                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
            >

                <DialogContent>
                    <form onSubmit={handleSubmit}>
                        <div style={{ padding: '0px 88px 0px 0px' }}>
                            <div>
                                <img src={companylogo} width='100' style={{
                                    position: 'relative',
                                    left: '50%'
                                }} />
                            </div>
                            <div className='sentmail'>
                                <input type='text' placeholder='Enter your Name' name='name' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='tel' placeholder='Enter your mobile number' name='number' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <input type='email' placeholder='Enter your Email' name='email' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <textarea placeholder='Message...' name='message' onChange={Changevalue}
                                    required />
                            </div>
                            <div className='sentmail'>
                                <div>
                                    <button type='submit'>Submit</button>
                                </div>
                                <div>
                                    {
                                        loading ?
                                            <Box sx={{ display: 'flex' }}>
                                                <CircularProgress style={{ color: '#01a875' }} />
                                            </Box> : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </form>
                </DialogContent>

            </Dialog>
            <div className="scroll-to-top" data-aos="fade-up">
                {isVisible && (
                    <button onClick={scrollToTop}>
                        <PiArrowUpBold />
                    </button>
                )}
            </div>
            <div className='Whatsapp'>
                <ul>
                    <li>
                        <Link to='https://api.whatsapp.com/send/?phone=919274543232&text&type=phone_number&app_absent=0' target='_blank'><FaSquareWhatsapp style={{
                            width: '47px',
                            height: '48px',
                            color: '#25d366'
                        }} />
                        </Link>
                    </li>
                </ul>

            </div>
            <div id='marquee'>
                <marquee >
                    <h1>Book your Appointment On 2nd and 4th Saturday of month in Ahmedabad</h1>
                </marquee >
            </div>

            <div className="mobile-header-section d-block d-lg-none">
                {/* Start Mobile Header Wrapper */}
                <div className="mobile-header-wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 d-flex justify-content-between align-items-center">
                                <div className="mobile-header--left">
                                    <Link to="/" className="mobile-logo-link">
                                        <img
                                            src={companylogo}
                                            alt="logo not available"
                                            width='100'
                                            style={{'mix-blend-mode': 'darken'}}
                                            className="mobile-logo-img"
                                        />

                                    </Link>
                                </div>


                                <Menu isOpen={menu} onStateChange={(state) => setmenu(state.isOpen)}
                                >
                                    <div className="offcanvas-mobile-menu-wrapper">
                                        {/* Start Mobile Menu User Top */}
                                        <div className="mobile-menu-top">
                                            <span>
                                                <b>🏥 Welcome to Dr. Ashvin Gami’s Urethral & Hypospadias Clinic – Ahmedabad</b>
                                            </span>
                                            {/* Start Header Top Menu */}
                                            <ul className="mobile-menu-user-menu">
                                                <li className="header-user-menu-link">
                                                    <IoIosCall />
                                                    <Link to="tel:+91 9274543232" target="_blank">
                                                        <b> +91 9274543232</b>
                                                    </Link>
                                                    {/* <Link to="tel:+91 9825015702" target="_blank">
                                                        <b>+91 9825015702</b>
                                                    </Link> */}
                                                </li>
                                                <Link to="tel:+91 9274543232"></Link>
                                                <li className="header-user-menu-link">
                                                    <IoMdMail />
                                                    <Link to="mailto:gamiurethralclinic@gmail.com" target="_blank">
                                                        &nbsp;
                                                    </Link>
                                                    <b> gamiurethralclinic@gmail.comcom</b>
                                                </li>
                                                {/*                <li class="header-user-menu-link"><div id="google_translate_element" class="google_translate_element"></div></li>*/}
                                            </ul>
                                            {/* End Header Top Menu */}
                                        </div>{" "}
                                        {/* End Mobile Menu User Top */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center mt-5">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex justify-content-center mobile-homeTitle d-flex">
                                                        {/*                        <h2>Goodluck</h2>*/}
                                                        {/*                        <h2 style="color: #ea1c26">&nbsp;Pump</h2>*/}
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu User Center */}
                                        <div className="mobile-menu-center">
                                            <form action="#" method="post">
                                                <div className="header-search-box default-search-style d-flex">
                                                    <div className="footer-subscribe-box default-search-style d-flex">
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={msme}
                                                            alt="Image not available"
                                                            width='100'
                                                        />
                                                        <img
                                                            className="mobile-isoImg"
                                                            src={gemlogo}
                                                            alt="Image not available"
                                                            width='100'
                                                        />
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        {/* End Mobile Menu User Center */}
                                        {/* Start Mobile Menu Bottom */}
                                        <div className="mobile-menu-bottom">
                                            {/* Start Mobile Menu Nav */}
                                            <div className="offcanvas-menu">
                                                <ul>
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} to="/" activeClassName="active"><FaHome className='fa-icon' />Home</NavLink>
                                                    </li>

                                                    {/* <li className="mobileli">

                                                        <CustomAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                                            <AccordionSummary
                                                                expandIcon={<ExpandMoreIcon />}
                                                            >
                                                                <div style={{
                                                                    height: '16px',
                                                                    display: 'flex',
                                                                    alignItems: 'center'
                                                                }}>
                                                                    <AiOutlineAppstore className='fa-icon' />
                                                                    <Link onClick={() => setmenu(false)} to='/Allservice'>
                                                                        Services
                                                                    </Link>
                                                                </div>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <ul className="mobile-sub-menu">
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allservice/1">Type 1 Cylinder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allservice/2">Type 2 Cylinder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allservice/3">Type 3 Cylinder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allservice/4">Type 4 Cylinder</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allservice/5">Engine Carbon Cleaning</NavLink>
                                                                    </li>
                                                                    <li>
                                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/Allservice/6">Car Detailing (A Car Beauty SPA.)</NavLink>
                                                                    </li>
                                                                </ul>
                                                            </AccordionDetails>
                                                        </CustomAccordion>
                                                    </li> */}
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/blog" className="menuBtn">
                                                            <TbLogs className='fa-icon' />
                                                            Blog
                                                        </NavLink>
                                                    </li>
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/about" className="menuBtn">
                                                            <FaCircleInfo className='fa-icon' />
                                                            About Us
                                                        </NavLink>
                                                    </li>

                                                    <li className="mobileli">
                                                        <div>
                                                            <CustomAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                                                <AccordionSummary
                                                                    expandIcon={<ExpandMoreIcon />}

                                                                >
                                                                    <GrGallery className='fa-icon' />
                                                                    Gallery
                                                                </AccordionSummary>
                                                                <AccordionDetails>
                                                                    <ul className="mobile-sub-menu">
                                                                        <li>
                                                                            <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/photos">Photos</NavLink>
                                                                            <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/videos">videos</NavLink>

                                                                        </li>

                                                                    </ul>
                                                                </AccordionDetails>
                                                            </CustomAccordion>
                                                        </div>
                                                    </li>
                                                    <li className="mobileli">

                                                        <NavLink onClick={() => setmenu(false)} activeClassName="active" to="/contact"><MdContactPhone className='fa-icon' />Contact Us</NavLink>
                                                    </li>
                                                </ul>

                                            </div>{" "}
                                            {/* End Mobile Menu Nav */}

                                            <TranslateComponent />
                                        </div>{" "}



                                        {/* End Mobile Menu Bottom */}
                                    </div>

                                </Menu>
                            </div>
                        </div>
                        <NavLink
                            to='https://api.whatsapp.com/send/?phone=%2B919274543232&text&type=phone_number&app_absent=0'
                            className="booknow"
                        >
                            <img src={booknow} width='25' />
                            Book an appointment
                        </NavLink>
                    </div>
                </div > {" "}

            </div >
        </>
    )
}

export default Header
