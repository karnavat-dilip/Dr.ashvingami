import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Banner1 from '../../Assets/ashvingami_assets/Tanu-Complex.jpg'
import 'animate.css'
import Banner2 from '../../Assets/ashvingami_assets/TEJS1124.jpg'
import Banner3 from '../../Assets/greenliving/website photos/3.jpg'
import Banner4 from '../../Assets/greenliving/website photos/4.jpg'
import Banner5 from '../../Assets/greenliving/website photos/5.jpg'
import Banner6 from '../../Assets/greenliving/website photos/6.jpg'
import Banner7 from '../../Assets/greenliving/website photos/7.jpg'
import Banner8 from '../../Assets/greenliving/website photos/8.jpg'
import Banner9 from '../../Assets/greenliving/website photos/9.jpg'
import Banner10 from '../../Assets/greenliving/sliding/13.jpg'
import Banner11 from '../../Assets/greenliving/sliding/14.jpg'
import Banner12 from '../../Assets/greenliving/sliding/15.jpg'
import welcome from '../../Assets/greenliving/welcome.png'

import profile_img from '../../Assets/ashvingami_assets/Hypospadias-Surgery.jpg'
import profile_img2 from '../../Assets/ashvingami_assets/urethral-stricture.jpg'
import Drprofile from '../../Assets/ashvingami_assets/Dr.Ashvin-Gami.jpg'
import companyvideo from '../../Assets/greenliving/companyvideo.mp4'
import companyvideo1 from '../../Assets/greenliving/video2.mp4'
import companyvideo2 from '../../Assets/greenliving/video3.mp4'
import companyvideo3 from '../../Assets/greenliving/video4.mp4'
import companyvideo4 from '../../Assets/greenliving/video5.mp4'
import companyvideo5 from '../../Assets/greenliving/video6.mp4'

import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { v4 as uuidv4 } from 'uuid';
import type1 from '../../Assets/greenliving/type1cylinder.jpg'
import type2 from '../../Assets/greenliving/type2cylinder.jpg'
import type3 from '../../Assets/greenliving/type3cylinder.jpg'
import type4 from '../../Assets/greenliving/type4cylinder.png'
import Engine_Carbon_Cleaning from '../../Assets/greenliving/web photo 2/2.jpg'
import Car_Detailing from '../../Assets/greenliving/web photo 2/3.jpg'
import cngretest from '../../Assets/greenliving/web photo 2/1.jpg'
import { Chart } from "react-google-charts";
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div>
      <p>Dr. Ashvin Gami’s Urethral and hypospadias Clinic,  A branch of Kidneycare hospital, Palanpur.
        Two decades of expertise in urethral reconstructive surgery.
        <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurStrength() {
  return (
    <div>
      <p>Ability to stay updated with the latest research, technology, and guidelines.<a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

function OurService() {
  return (
    <div>
      <p>
        Founder of Endourethroplasty(MSTGM) a groundbreaking surgical technique for stricture urethra, developed for the first time in the world. <a href='/about' style={{ color: '#01a875' }}>Read more...</a></p>
    </div>
  );
}

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
    title: 'Engine Carbon Cleaning'
  },
  {
    id: uuidv4(),
    img: Car_Detailing,
    title: 'Car Detailing (A Car Beauty SPA.)'
  }

];
function Home() {
  const [counteron, setcounteron] = useState(false)
  const [content, setContent] = useState(AboutUs);
  const [activeLink, setActiveLink] = useState('about');
  const [currentLogoIndex, setCurrentLogoIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLogoIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);


  const handleNavigation = (contentComponent, linkName) => {
    setContent(contentComponent);
    setActiveLink(linkName)
  };

  useEffect(() => {
    AOS.init()
  }, [])

  const data = [
    ["West Bangal", "Hours per Day"],
    ["Gujarat", 40],
    ["Maharashtra", 20],
    ["Rajasthan", 9],
    ["Uttar Pradesh", 11],
    ["Delhi", 14],
  ];

  const options = {
    title: "",
  };

  // const productapplication = [
  //   {
  //     id: uuidv4(),
  //     img: Domestic,
  //     Appname: 'Domestic',
  //     moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
  //   },
  //   {
  //     id: uuidv4(),
  //     img: Mining,
  //     Appname: 'Mining',
  //     moreinfo: 'The mining industry which is referred as the world’s toughest industrialized working environments needs a bit of revamping'
  //   },
  //   {
  //     id: uuidv4(),
  //     img: Industry,
  //     Appname: 'Industry',
  //     moreinfo: 'Industries seem to be smaller when put into comparison with the amount of diverse and distinctive pumps that Goodluck is equipped with'
  //   },
  //   {
  //     id: uuidv4(),
  //     img: FireFighting,
  //     Appname: 'Fire Fighting & Dewatering',
  //     moreinfo: 'The most critical component of a Fire Sprinkler system, i.e the fire pump needs due attention, and that’s why we at Goodluck take immense care in designing..'
  //   },
  //   {
  //     id: uuidv4(),
  //     img: Construction,
  //     Appname: 'Construction & Building',
  //     moreinfo: 'Irrespective of the scale of building services Goodluck offers wide varieties of pumps, valves, and systems that perfectly match your building and construction needs.'
  //   },
  //   {
  //     id: uuidv4(),
  //     img: Residential,
  //     Appname: 'Residential',
  //     moreinfo: 'Utility pumps are the most commonly referred residential pumps that serve numerous household needs. Keeping this in mind, we have well placed ourselves ahead of our.'
  //   },

  // ]

  return (
    <>
      <div className='swiper-container'>
        <section className='slide' data-aos="flip-left">
          <div>
            <Swiper
              spaceBetween={30}
              centeredSlides={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              navigation={false}
              modules={[Autoplay, Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide><img src={Banner1} id='img1' /></SwiperSlide>
              <SwiperSlide><img src={Banner2} id='img2' /></SwiperSlide>


            </Swiper>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>🏥 Welcome to <span>Dr. Ashvin Gami’s Urethral & Hypospadias Clinic – Ahmedabad</span></h1>
            </div>
            <div className='intro'>
              <div className='d-flex'>
                <div>
                  <h4>Introduction</h4>
                  <p>Dr. Ashvin Gami’s Urethral and hypospadias Clinic,  A branch of Kidneycare hospital, Palanpur.
                    Two decades of expertise in urethral reconstructive surgery.  </p>
                  <img src={profile_img} id='profile-img' />
                  <img src={profile_img2} id='profile-img' />
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <img src={Drprofile} style={{ width: '100%' }} />
                </div>
              </div>

            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'><h1>Our Services</h1></div>
            <div className='product-container'>
              <div className='service-catagory'>
                <img src={profile_img2} width='200' />
                <h1>Stricture Urethra Treatment</h1>
                <li>Inventor of Endourethroplasty – a revolutionary, scar-free solution for urethral strictures. </li>
                <li> Minimally invasive</li>
                <li> Long term cure for urethral stricture </li>
                <li> Developed by Dr. Gami after years of research </li>
                <li> Treating complex, recurrent, and long-segment strictures with high success and fast recovery.</li>
                <li>Endourethroplasty is endoscopic urethroplasty, where we put skin graft inside urethral defects by endoscopic method. Which till now done by open surgery.

                </li>
                <li>Facility for DVIU,  Open Urethroplasty who are not fit for endourethroplasty.

                </li>
              </div>
              <br></br>
              <div className='service-catagory'>
                <img src={profile_img} width='200' />
                <h1>Hypospadias Surgery</h1>
                <li>Advanced, customized techniques with over 90% success rate</li>
                <li>Reconstructive surgery even for failed or complicated previous cases</li>
                <li>Focus on cosmetic and functional outcomes</li>
              </div>
            </div>

          </div>
        </section >
        <section data-aos="fade-up">
          <div className='container'>
            <div className='count-container'>
              <div className='totalno'>

                {<CountUp start={0} end={24000} duration={2} delay={0} />}+

                <h4>Urology surgery </h4>
              </div>

              <div className='totalno'>

                {<CountUp start={0} end={25} duration={5} delay={0} />}+

                <h4>Years Of Experience</h4>
              </div>
              <div className='totalno'>

                {<CountUp start={0} end={1000} duration={5} delay={0} />}+

                <h4>Urethral Surgery </h4>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-up">
          <div className='container'>
            <div className='nav-container'>
              <div className='b-btm'>
                <h1>Who we are?</h1>
              </div>
              <div>
                <nav>
                  {/* <ul>
                    <li className={activeLink === 'about' ? 'activelink' : ''} onClick={() => handleNavigation(AboutUs, 'about')}>About Us</li>
                    <li className={activeLink === 'strength' ? 'activelink' : ''} onClick={() => handleNavigation(OurStrength, 'strength')}>OurStrength</li>
                    <li className={activeLink === 'service' ? 'activelink' : ''} onClick={() => handleNavigation(OurService, 'service')}>Our Service</li>
                  </ul> */}
                </nav>
              </div>
            </div>
            <div className='text-indent'>

              {content && content}

            </div>
            {/* <div>

              <div style={{ textAlign: 'center' }}>
                <video
                  src={companyvideo1}
                  style={{ height: '344px', padding: '0px 8px' }}
                  loop
                  controls

                  playsInline
                />
                <video
                  src={companyvideo2}
                  style={{ height: '344px', padding: '0px 8px' }}
                  loop
                  controls

                  playsInline
                />
                <video
                  src={companyvideo3}
                  style={{ height: '344px', padding: '0px 8px' }}
                  loop
                  controls

                  playsInline
                />
                <video
                  src={companyvideo4}
                  style={{ height: '344px', padding: '0px 8px' }}
                  loop
                  controls

                  playsInline
                />
                <video
                  src={companyvideo5}
                  style={{ height: '344px', padding: '0px 8px' }}
                  loop
                  controls

                  playsInline
                />
              </div>
            </div> */}
          </div>
        </section>

        <section data-aos="fade-up">
          <div className='container'>
            <div className='h1-container'>
              <h1>Our satisfied Patients who underwent endourethroplasty 
              </h1>
            </div>
            <div className='iframe-container'>
              <div>
                <iframe width="342" height="607" src="https://www.youtube.com/embed/lR5zj7xPy1Q" title="11 July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div>
                <iframe width="342" height="607" src="https://www.youtube.com/embed/_4ha6r-k4Ok" title="11 July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div>
                <iframe width="342" height="607" src="https://www.youtube.com/embed/2wF_DY7EiAc" title="11 July 2025" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
            </div>
          </div>
        </section >
        <section>

        </section>
      </div >
    </>
  )
}

export default Home
