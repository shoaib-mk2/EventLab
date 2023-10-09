import React, { useContext, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './BannerStyles.css';
import { BsCalendar3 } from 'react-icons/bs';
import { MdLocationPin } from 'react-icons/md';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { AuthContext } from '../../provider/AuthProvider';

const Banner = () => {
    const { conferences, formatDate } = useContext(AuthContext);

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div className='mb-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                {
                    conferences.map(conference => <SwiperSlide key={conference.id}>
                        <div className='w-full flex items-center justify-center'
                            style={{
                                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${conference.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center'
                            }}>
                            <div className="w-4/5 items-center py-5 justify-between text-white flex flex-col lg:flex-row">
                                <div className='lg:w-1/2'>
                                    <div className='text-2xl flex items-center gap-3'>
                                        <BsCalendar3></BsCalendar3>
                                        <p className='text-[#007aff]'>{formatDate(conference.date)}</p>
                                    </div>
                                    <h1 className="text-6xl font-bold py-4">{conference.name}</h1>
                                    <div className="py-6 text-xl flex items-center gap-3">
                                        <MdLocationPin className='text-[#007aff]'></MdLocationPin>
                                        <p>{conference.location}</p>
                                    </div>
                                    <button className="btn btn-primary bg-[#007aff] text-white mb-5">Book Now</button>
                                </div>
                                <img src={conference.speaker1_image} className="max-w-sm rounded-lg lg:rounded-r-full lg:rounded-t-full shadow-2xl" />
                            </div>
                        </div>
                    </SwiperSlide>)
                }
                {/* <SwiperSlide>Slide 1</SwiperSlide> */}
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </div>
    );
};

export default Banner;