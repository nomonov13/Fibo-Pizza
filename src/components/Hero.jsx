import slideOne from '../assets/images/slideOne.jpg'
import slideTwo from '../assets/images/slideTwo.jpg'


// import Swiper core and required modules
import { Navigation, } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';




const Hero = () => {
  return (
    <section>
      <div className="container">
        <Swiper
          
          modules={[Navigation,]}
          spaceBetween={30}
          slidesPerView={2}
          navigation
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
          loop
        >
          <SwiperSlide><img src={slideOne} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slideTwo} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slideOne} alt="" /></SwiperSlide>
          <SwiperSlide><img src={slideTwo} alt="" /></SwiperSlide>
          
        </Swiper>
        
      </div>
    </section>
  )
}

export default Hero