import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const Slider = () => {
    return (
        <>
      <Swiper  loop={true} slidesPerView={1} autoplay={{
          delay: 2000,
          disableOnInteraction: true,
        }}
         modules={[Pagination, Autoplay]} className="mySwiper" style={{ height:'800px' }}>
         <div className="container">
            <SwiperSlide className='banner'>
                <div className="container">
                    <h4>Mega Sale</h4>
                    <h1>Up To 35% Off</h1>
                    <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                    <a href="">Shop Now</a>
                </div>
            </SwiperSlide>
            <SwiperSlide className='banner'>
                <div className="container">
                    <h4>Mega Sale</h4>
                    <h1>Up To 35% Off</h1>
                    <p>Objectively incubate enabled innovation through leveraged mindshare. Competently.</p>
                    <a href="">Shop Now</a>
                </div>
            </SwiperSlide>
         </div>
      </Swiper>
    </>
    );
};

export default Slider;