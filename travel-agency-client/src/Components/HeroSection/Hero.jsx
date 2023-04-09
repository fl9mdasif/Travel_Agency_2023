import React from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import './Hero.styles.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import hero1 from '../../assets/HeroImg/1.jpg';
import hero2 from '../../assets/HeroImg/2.jpg';
import hero3 from '../../assets/HeroImg/3.jpg';
import hero4 from '../../assets/HeroImg/4.jpg';
import hero5 from '../../assets/HeroImg/5.jpg';

import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className="hero-section bg-">
            <Swiper
                spaceBetween={0}
                // centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero1} alt="" />
                        <div className="hero-content">
                            <div>
                                <h1 className='hero-h1'>Next level of travel and adventure</h1>
                                <p className='heroP'>Explore the World with Deasil Travel. Unforgettable Journeys, Tailored Just for You. Start Planning Your Dream Vacation Today.</p>
                            </div>
                            <div className="">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#850b56' }}
                                    className="btn drop-shadow-xl heroBtn text-italic btn-sm bg-base"
                                >Book Now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero2} alt="" />
                        <div className="hero-content">
                            <div>
                                <h1 className='hero-h1'>Next level of travel and adventure</h1>
                                <p className='heroP'>Explore the World with Deasil Travel. Unforgettable Journeys, Tailored Just for You. Start Planning Your Dream Vacation Today.</p>
                            </div>
                            <div className=" ">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#232324' }}
                                    className="btn heroBtn text-italic btn-sm   bg-base">Book Now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>

                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero4} alt="" />
                        <div className="hero-content">
                            <div>
                                <h1 className='hero-h1'>Next level of travel and adventure</h1>
                                <p className='heroP'>Explore the World with Deasil Travel. Unforgettable Journeys, Tailored Just for You. Start Planning Your Dream Vacation Today.</p>
                            </div>
                            <div className=" ">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#850b56' }}
                                    className="btn heroBtn text-center btn-sm bg-base ">Book Now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero5} alt="" />
                        <div className="hero-content">
                            <div>
                                <h1 className='hero-h1'>Next level of travel and adventure</h1>
                                <p className='heroP'>Explore the World with Deasil Travel. Unforgettable Journeys, Tailored Just for You. Start Planning Your Dream Vacation Today.</p>
                            </div>
                            <div className=" ">
                                <Link to='/allshoes'
                                    // style={{ backgroundColor: '#850b56' }}
                                    className="btn heroBtn text-center btn-sm bg-base ">Book Now</Link>
                            </div>
                        </div>
                    </ div>

                </SwiperSlide>
                <SwiperSlide>
                    < div div className="relative h-scren w-screen " >
                        <img className="object-fill sliderImg " src={hero3} alt="" />
                        <div className="hero-content">
                            <div>
                                <h1 className='hero-h1'>Next level of travel and adventure</h1>
                                <p className='heroP'>Explore the World with Deasil Travel. Unforgettable Journeys, Tailored Just for You. Start Planning Your Dream Vacation Today.</p>
                            </div>
                            <div className=" ">

                                <Link to='/'
                                    // style={{ backgroundColor: '#850b56' }}
                                    className="btn heroBtn  btn-sm bg-base ">Book Now</Link>

                            </div>
                        </div>
                    </ div>

                </SwiperSlide>

            </Swiper >

        </div>

    );
};

export default Hero;