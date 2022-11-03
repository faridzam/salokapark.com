import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectFade, Pagination } from "swiper";

import {mediaRestaurant} from '../../assets/images/carousel_assets/restaurantBanner'
import {Box} from '@mui/material';
import './swiperRestaurantBanner.module.css';

export default function App() {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination]}
        className="main-banner-swiper"
      >
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '85vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaRestaurant[0]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '30vh',
                }}></img>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '30vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaRestaurant[1]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '85vh',
                }}></img>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '30vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaRestaurant[2]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '85vh',
                }}></img>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '30vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaRestaurant[3]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '85vh',
                }}></img>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '30vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaRestaurant[4]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '85vh',
                }}></img>
            </Box>
        </SwiperSlide>
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '30vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaRestaurant[5]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '85vh',
                }}></img>
            </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
