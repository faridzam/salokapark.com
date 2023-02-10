import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import "swiper/css/lazy";

// import required modules
import { Autoplay, EffectFade, Pagination, Lazy } from "swiper";

import {media} from '../../assets/images/carousel_assets/promosiBanner'
import {Box} from '@mui/material';
import './swiperPromosiBanner.module.css';

export default function App() {

  const [banner, setBanner] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-promo-banner')
        .then((response) => {
            //
            let Obj = response.data.promoBanner;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi});
            }
            setBanner(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    const SLIDE_COUNT = banner.length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

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
        loop={true}
        preloadImages={true}
        lazy={true}
        effect={"fade"}
        modules={[Autoplay, EffectFade, Pagination]}
        className="promosi-banner-swiper"
      >
        {slides.map((index) => (

          <SwiperSlide>
              <Box
              sx={{
                  maxHeight: '85vh',
                  cursor: 'pointer',
              }}>
                  <img
                  src={'https://dashboard.salokapark.com/public/foto/promosi/'+banner[index].gambar}
                  loading="lazy"
                  alt="logo saloka"
                  style={{
                      layout: 'fill',
                      objectFit: 'cover',
                      objectPosition: 'top',
                      width: '100%',
                      minHeight: '30vh',
                      maxHeight: '85vh',
                  }}></img>
              </Box>
          </SwiperSlide>

        ))}

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
