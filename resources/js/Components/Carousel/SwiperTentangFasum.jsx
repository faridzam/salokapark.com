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

import {mediaFasum} from '../../assets/images/carousel_assets/tentangFasum'
import {Box} from '@mui/material';
import './swiperTentangFasum.module.css';

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
        className="promosi-banner-swiper"
      >
        <SwiperSlide>
            <Box
            sx={{
                maxHeight: '85vh',
                cursor: 'pointer',
            }}>
                <img
                src={mediaFasum[0]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
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
                src={mediaFasum[1]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
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
                src={mediaFasum[2]}
                alt="logo saloka"
                style={{
                    layout: 'fill',
                    objectFit: 'cover',
                    objectPosition: 'top',
                    width: '100%',
                }}></img>
            </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
