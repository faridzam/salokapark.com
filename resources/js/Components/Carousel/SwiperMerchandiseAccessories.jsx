import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import {mediaMerchandiseAccessories, merchandiseAccessoriesByIndex} from '../../assets/images/carousel_assets/merchandiseAccessories';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForward} from '@mui/icons-material';
import "./swiperMerchandiseAccessories.module.css";

// import required modules
import { Navigation } from "swiper";

export default function App() {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const SLIDE_COUNT = 4;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    return (
        <>
            {
                desktop
                ?
                <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="swiper-promosi noselect"
                style={{
                    width: '100%',
                }}
                >
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflowX: 'hidden',
                    }}>

                        {slides.map((index) => (

                            <SwiperSlide
                            key={`zoneCarousel`+index}>
                                <Grid
                                container
                                direction="column"
                                spacing={0}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Box
                                    sx={{
                                        maxHeight: '800px',
                                        width: '90%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        src={mediaMerchandiseAccessories[index]}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            minHeight: '400px',
                                        }}></img>
                                    </Box>
                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '90%',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '24px',
                                                fontWeight: 600,
                                                color: '#333'
                                            }}
                                            >{merchandiseAccessoriesByIndex(index).nama}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                </Swiper>
                :
                <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="swiper-promosi noselect"
                style={{
                    width: '100%',
                }}
                >
                    <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        overflowX: 'hidden',
                    }}>

                        {slides.map((index) => (

                            <SwiperSlide
                            key={`zoneCarousel`+index}>
                                <Grid
                                container
                                direction="column"
                                spacing={0}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Box
                                    sx={{
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        src={mediaMerchandiseAccessories[index]}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            minHeight: '300px',
                                            maxHeight: '1000px',
                                        }}></img>
                                    </Box>
                                    <Box
                                    sx={{
                                        marginTop: '50px',
                                        width: '90%',
                                    }}>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <Typography
                                            sx={{
                                                textAlign: 'center',
                                                fontSize: '24px',
                                                fontWeight: 600,
                                                color: '#333'
                                            }}
                                            >{merchandiseAccessoriesByIndex(index).nama}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                </Swiper>
            }
        </>
    );
}
