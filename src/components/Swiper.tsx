// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Swipe() {
  return (
    <>
      <Swiper
        spaceBetween={20}
        centeredSlides={true}
        slidesPerView={3}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img
              src={`https://img.shields.io/badge/-Typescript-007ACC?style=for-the-badge&logo=typescript&logoColor=white`}
              alt="TypeScript"

            />
            </SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-React-007ACC?style=for-the-badge&logo=react&logoColor=white`}
              alt="React"

            /></SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-NodeJS-007ACC?style=for-the-badge&logo=node.js&logoColor=white`}
              alt="NodeJS"

            /></SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-Express-007ACC?style=for-the-badge&logo=express&logoColor=white`}
              alt="Express"

            /></SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-MongoDB-007ACC?style=for-the-badge&logo=mongodb&logoColor=white`}
              alt="MongoDB"

            /></SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-Mysql-007ACC?style=for-the-badge&logo=mysql&logoColor=white`}
              alt="MySQL"

            /></SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-Git-007ACC?style=for-the-badge&logo=git&logoColor=white`}
              alt="Git"

            /></SwiperSlide>
        <SwiperSlide>        <img
              src={`https://img.shields.io/badge/-Github-007ACC?style=for-the-badge&logo=github&logoColor=white`}
              alt="C#"

            /></SwiperSlide>



      </Swiper>
    </>
  );
}
