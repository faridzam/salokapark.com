import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/lazy";

import {media, zonaByIndex} from '../../assets/images/carousel_assets/zona';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForward, ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import customStyle from "./swiperMainZones.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App() {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const SLIDE_COUNT = 5;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const redirect = (route) => {
        Inertia.visit(route);
    }

    return (
        <>
            {
                desktop
                ?
                <Swiper
                slidesPerView={2}
                slidesPerGroup={1}
                loop={true}
                preloadImages={true}
                lazy={true}
                navigation={{
                    prevEl: '.prev-main-zones',
                    nextEl: '.next-main-zones',
                }}
                modules={[Navigation]}
                className="swiper-zones noselect"
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
                                            maxHeight: '400px',
                                            width: '90%',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <img
                                            onClick={() => redirect(zonaByIndex(index).link)}
                                            src={media[index]}
                                            loading="lazy"
                                            alt="logo saloka"
                                            style={{
                                                layout: 'fill',
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                width: '100%',
                                                maxHeight: '400px',
                                            }}></img>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '20px',
                                            width: '90%',
                                        }}>
                                            <Box
                                            sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '100%',
                                            }}>
                                                <Typography
                                                sx={{
                                                    fontSize: '24px',
                                                    fontWeight: 600,
                                                    color: '#333'
                                                }}
                                                >{zonaByIndex(index).nama}</Typography>
                                            </Box>
                                            <Box
                                            sx={{
                                                marginTop: '10px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                width: '100%',
                                            }}>
                                                <Typography
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 1,
                                                    fontSize: '18px',
                                                    fontWeight: 400,
                                                    color: '#333'
                                                }}
                                                >{zonaByIndex(index).deskripsi}</Typography>
                                            </Box>
                                            <Box
                                            sx={{
                                                display: 'flex',
                                                marginRight: '100px',
                                                marginTop: '20px',
                                                alignItems: 'center',
                                            }}>
                                                <Typography
                                                onClick={() => redirect(zonaByIndex(index).link)}
                                                className="noselect"
                                                align="justify"
                                                sx={{
                                                    cursor: 'pointer',
                                                    fontSize: '18px',
                                                    fontWeight: 400,
                                                    color: 'primary.main'
                                                }}
                                                >Baca Lebih Lanjut</Typography>
                                                <ArrowForward
                                                sx={{
                                                    cursor: 'pointer',
                                                    marginLeft: '10px',
                                                    fontSize: 20,
                                                    color: 'primary.main'
                                                }}/>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </SwiperSlide>

                            ))}

                    </Box>
                    
                    <div className={`prev-main-zones ${customStyle.prevMainZones}`}>
                        <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                            <ArrowBackIos
                            sx={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: 'secondary.main'
                            }}/>
                        </Box>
                    </div>
                    <div className={`next-main-zones ${customStyle.nextMainZones}`}>
                        <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                            <ArrowForwardIos
                            sx={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: 'secondary.main'
                            }}/>
                        </Box>
                    </div>

                </Swiper>
                :
                <Swiper
                slidesPerView={1}
                slidesPerGroup={1}
                loop={true}
                navigation={{
                    prevEl: '.prev-main-zones',
                    nextEl: '.next-main-zones',
                }}
                modules={[Navigation]}
                className="swiper-zones noselect"
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
                                        maxHeight: '300px',
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        onClick={() => redirect(zonaByIndex(index).link)}
                                        src={media[index]}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            maxHeight: '300px',
                                        }}></img>
                                    </Box>
                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                        width: '90%',
                                    }}>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '24px',
                                                fontWeight: 600,
                                                color: '#333'
                                            }}
                                            >{zonaByIndex(index).nama}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                lineHeight: 1,
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}
                                            >{zonaByIndex(index).deskripsi}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            marginRight: '100px',
                                            marginTop: '20px',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            onClick={() => redirect(zonaByIndex(index).link)}
                                            className="noselect"
                                            align="justify"
                                            sx={{
                                                cursor: 'pointer',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                color: 'primary.main'
                                            }}
                                            >Baca Lebih Lanjut</Typography>
                                            <ArrowForward
                                            sx={{
                                                cursor: 'pointer',
                                                marginLeft: '10px',
                                                fontSize: 20,
                                                color: 'primary.main'
                                            }}/>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-zones ${customStyle.prevMainZones}`}>
                        <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                            <ArrowBackIos
                            sx={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: 'secondary.main'
                            }}/>
                        </Box>
                    </div>
                    <div className={`next-main-zones ${customStyle.nextMainZones}`}>
                        <Box
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                            cursor: 'pointer',
                        }}>
                            <ArrowForwardIos
                            sx={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: 'secondary.main'
                            }}/>
                        </Box>
                    </div>

                </Swiper>
            }
        </>
    );
}
