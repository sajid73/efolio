import React from "react";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "./NewsEvents.css";


const NewsEvents = () => {
    return (
        <div>
            <h1 className="text-center">News and Events</h1>
            <Swiper
                spaceBetween={30}
                breakpoints={{
                    // when window width is <= 320px     
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10
                    },
                    // when window width is <= 480px     
                    480: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },

                    // when window width is <= 640px     
                    640: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div class="card">
                        <img src={require("../../images/nature-10.jpg")} class="card-img-top" alt="..." height={300} />
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            {/* <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div> */}
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default NewsEvents;