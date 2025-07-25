import React, { useEffect, useState } from 'react'
import Breadcrumbs from '../Breadcrumbs'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { v4 as uuidv4 } from 'uuid';
import { IoBarChartSharp } from "react-icons/io5";
import { PiCheckSquareOffsetFill } from "react-icons/pi";
import { IoFlaskSharp } from "react-icons/io5";
import Value from '../../Assets/values.jpg'
import OurMission from '../../Assets/mission.jpg'
import OurVision from '../../Assets/vision.jpg'
import about from '../../Assets/ashvingami_assets/Dr.Ashvin-Gami.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './About.css'
import certificate1 from '../../Assets/ashvingami_assets/certificate1.jpg'
import certificate2 from '../../Assets/ashvingami_assets/certificate2.jpg'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

function About() {
    return (
        <div>
            <p>We, “Greenliving Engineering.CNG Cylinder Re-Testing Plant
                ” was established in the year 2018 , certified by ISO 9001-2015, with the aim to provide the best quality service like, Type 1/2/3/4 CNG Cylinder and Testing Procedure of Type 3 & 4 CNG Cylinder to our valued customers.</p>
        </div>
    );
}

function OurStrength() {
    return (
        <div>
            <p>The company certified with ISO 9001-2015, approved by the Chief Controller of Explosives (CCOE) under PESO. </p>
        </div>
    );
}

function OurService() {
    return (
        <div>
            <p>As the foremost authority in CNG cylinder testing, our expertise spans a wide spectrum of services.</p>
        </div>
    );
}
function AboutUs() {
    const [content, setContent] = useState(About);
    const [activeLink, setActiveLink] = useState('about');
    const [isOpen, setIsOpen] = useState(false);
    const [photoIndex, setPhotoIndex] = useState(0);

    const openLightbox = (index) => {
        console.log(index);
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const handleNavigation = (contentComponent, linkName) => {
        setContent(contentComponent);
        setActiveLink(linkName)
    };
    useEffect(() => {
        AOS.init()
    }, [])
    const images = [
        certificate1,
        certificate2,
    ]
    return (
        <div className='btm100'>
            <Breadcrumbs title='About Us' />
            <section className='m-top53px'>
                <div className='container'>
                    <div className='about-container'>
                        <div data-aos="fade-up">
                            <img src={about} />
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>🏥 Welcome to Dr. Ashvin Gami’s Urethral & Hypospadias Clinic – Ahmedabad</h1>
                            <p>Dr. Ashvin Gami’s Urethral and hypospadias Clinic,  A branch of Kidneycare hospital, Palanpur.
                                Two decades of expertise in urethral reconstructive surgery.
                            </p>
                            <p>Founder of Endourethroplasty(MSTGM) a groundbreaking surgical technique for stricture urethra, developed for the first time in the world.
                            </p>
                            <p>MBBS, MS, MCh (Urology) from the prestigious Civil Hospital, Ahmedabad</p>
                            <p>Pioneering Urethral Surgery | Expert in Hypospadias Repair
                            </p>
                            <p>Known for innovative, minimally invasive techniques and consistently excellent results.</p>
                            <p>Organizer of Hypocon 2018 MountAbu, with 100+ delegates. It's workshop on Hypospadias surgery. </p>
                            <p>25+ years of urology experience</p>
                        </div>
                        <div data-aos="fade-up">
                            <h1>Our Certificates</h1>
                            <div className='product-container'>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={true}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}

                                >
                                    {
                                        images?.map((src, index) => {
                                            return (
                                                <SwiperSlide key={index} className='swiper-child'>
                                                    <LazyLoadImage
                                                        className='lazy'
                                                        onClick={() => openLightbox(index)}
                                                        effect="blur"
                                                        style={{ width: '35%' }}
                                                        src={src}
                                                        alt={`Gallery ${index}`}
                                                    />
                                                </SwiperSlide>

                                            )
                                        })
                                    }
                                </Swiper>
                                {isOpen && (
                                    <Lightbox
                                        mainSrc={images[photoIndex]}
                                        nextSrc={images[(photoIndex + 1) % images.length]}
                                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                                        onCloseRequest={() => setIsOpen(false)}
                                        onMovePrevRequest={() => setPhotoIndex((photoIndex + images.length - 1) % images.length)}
                                        onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % images.length)}
                                    />
                                )}
                            </div>
                        </div>
                        <div className='second-child' data-aos="fade-up">
                            <h1>💡 Why Choose Us?</h1>
                            <div>
                                <p>✅ Pioneering Techniques not available elsewhere
                                </p>
                                <p>✅ Highest Success Rates  for complex

                                    urethral and hypospadias cases
                                </p>
                                <p>✅ Compassionate Care with personalized treatment plans

                                </p>
                            </div>
                        </div>
                        <div className='ourmission' data-aos="fade-up">
                            <div>
                                <img src={Value} width='100' />

                                <h2>Our Result</h2>
                                <p>
                                    90% Success Rates in urethral reconstructive surgery.
                                </p>
                            </div>
                            <div>
                                <img src={OurMission} width='100' />


                                <h2>Our Mission
                                </h2>
                                <p>
                                    Our mission is to provide lasting life-changing results for Patient with complex  urethral conditions.
                                </p>
                            </div>
                            <div>
                                <img src={OurVision} width='100' />

                                <h2>Our Vision</h2>
                                <p>
                                    To be a trusted leader in reconstructive urology and pediatric surgery by delivering world-class, compassionate, and evidence-based care.


                                </p>
                            </div>
                        </div>
                        {/* <div className='ourcustomer' data-aos="fade-up">
                            <div>
                                <h1>What Our Customers Say ?</h1>
                            </div>

                            <div style={{ height: '295px' }}>
                                <Swiper

                                    loop={true}
                                    centeredSlides={true}
                                    autoplay={{
                                        delay: 2500,
                                        disableOnInteraction: false,
                                    }}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}

                                >

                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "A wide range of varity available with reasonable price."

                                            </p>
                                            <img src={TaTa} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "One of the biggest submarsible pump manufacturers.
                                                for this company quality is priority.
                                                they have invented so many different types of panel
                                                "
                                            </p>
                                            <img src={reliance} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>
                                    <SwiperSlide className='swiper-child'>
                                        <div>
                                            <p>
                                                "You find all types of solutions related to Panels. A wide range of varity available with reasonable price.
                                                "
                                            </p>
                                            <img src={wasmo} width='100' />
                                            <h3>
                                                Project Manager
                                            </h3>
                                        </div>
                                    </SwiperSlide>


                                </Swiper>
                            </div>

                        </div> */}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs
