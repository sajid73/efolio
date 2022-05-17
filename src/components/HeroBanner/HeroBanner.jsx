import React from 'react';
// import required modules
import { Autoplay, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './Banner-style.css';

const HeroBanner = () => {
    return (
        <div>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Autoplay, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="row banner-text">
                        <div class="col-md-6 carousel-left">
                            <div class="p-5">
                                <h1>We work for your career</h1>
                                <p class="pt-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas numquam at
                                    officiis
                                    nostrum
                                    nesciunt,
                                    error quas quaerat nulla velit consectetur sed vero sint laboriosam obcaecati aliquid illo ad soluta
                                    quod.
                                </p>
                                <button type="button" class="btn btn-primary">Read more</button>
                                <button type="button" class="btn btn-light ms-2">Contact us</button>
                            </div>
                        </div>
                        <div class="col-md-6 d-flex justify-content-center">
                            <img src={require("../../images/graph1.png")} alt="" width="50%" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
                <SwiperSlide>Slide 6</SwiperSlide>
                <SwiperSlide>Slide 7</SwiperSlide>
                <SwiperSlide>Slide 8</SwiperSlide>
                <SwiperSlide>Slide 9</SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HeroBanner;