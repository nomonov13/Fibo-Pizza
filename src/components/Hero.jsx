import slide1 from '../assets/images/slideOne.jpg'
import slide2 from '../assets/images/slideTwo.jpg'

import nextIcon from '../assets/images/icons/next.svg'
import prevIcon from '../assets/images/icons/prev.svg'


import { Autoplay, Navigation, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from 'react';




const Hero = () => {

  const [custom_swiper, set_swiper] = useState({});
  const nextSlide = () => {
    custom_swiper.slideNext();
  };
  const prevSlide = () => {
    custom_swiper.slidePrev();
  };

  return (
    <section>
      <div className="container">
        <Swiper className="w-full relative cursor-pointer"
          slidesPerView={1}
          loop

          onInit={(ev) => {
            set_swiper(ev);
          }}
          modules={[Autoplay]}
          autoplay={{ delay: 1500 }}

          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            868: {
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide >
            <img className="w-full h-auto p-0 m-0" src={slide1} alt="slide" />
          </SwiperSlide>

          <SwiperSlide >
            <img className="w-full h-auto" src={slide2} alt="slide" />
          </SwiperSlide>

          <SwiperSlide >
            <img className="w-full h-auto" src={slide1} alt="slide" />
          </SwiperSlide>

          <SwiperSlide >
            <img className="w-full h-auto" src={slide2} alt="slide" />
          </SwiperSlide>

          <div className="control absolute w-full flex justify-between items-center left-0 top-0 bottom-0 right-0">
            <button className="z-10" onClick={prevSlide}><img src={nextIcon} alt="control icon" /></button>
            <button className="z-10" onClick={nextSlide}><img src={prevIcon} alt="control icon" /></button>
          </div>

        </Swiper>
      </div>
    </section>
  )
}

export default Hero