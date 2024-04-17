import { Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

export default function HostvioSwiper() {
    return (
        <Swiper
        className='bg-white w-full rounded-xl shadow-lg'
        spaceBetween={0}
        centeredSlides={true}
        loop={true}
        slidesPerView={1}
        autoplay={{
            delay: 50,
        }}>
            <SwiperSlide><img src="/hostvio/screenshot-1.png"/></SwiperSlide>
            
        
        </Swiper>
    )
}