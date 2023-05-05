import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/lazy";

// import required modules
import { Autoplay, EffectFade, Pagination, Lazy } from "swiper";

import {media} from '../../assets/images/carousel_assets'
import {Box} from '@mui/material';
import './swiperMainBanner.module.css';

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
          clickable: false,
        }}
        preloadImages={true}
        lazy= {true}
        loop={true}
        effect={"fade"}
        modules={[Autoplay, EffectFade]}
        className="main-banner-swiper"
      >
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '85vh',
            }}>
                <img
                src={media[1]}
                alt="logo saloka"
                loading="lazy"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                    minHeight: '20vh',
                }}></img>
            </Box>
        </SwiperSlide>
        {/*

        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '30vh',
                cursor: 'pointer',
            }}>
                <img
                src={media[1]}
                loading="lazy"
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
        
        */}
      </Swiper>
    </>
  );
}
