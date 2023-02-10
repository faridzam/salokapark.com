import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {getZonaBySlugs, RekomendasiWahanaByIndex, getIndexesRekomendasiWahanaBySlugs} from '../../assets/images/wahana';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import customStyle from "./swiperZonaWahana.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const SLIDE_COUNT = getIndexesRekomendasiWahanaBySlugs(props.slugs, getZonaBySlugs(props.slugs)).length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    console.log(getIndexesRekomendasiWahanaBySlugs(props.slugs, getZonaBySlugs(props.slugs)).length)

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
                    prevEl: '.prev-main-wahana',
                    nextEl: '.next-main-wahana',
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
                                        height: '400px',
                                        width: '80%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        src={RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).image}
                                        onClick={() => redirect(RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).link)}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            height: '400px',
                                        }}></img>
                                    </Box>
                                    <Box
                                    onClick={() => redirect(RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).link)}
                                    sx={{
                                        marginTop: '50px',
                                        width: '80%',
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
                                            >{RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).title}</Typography>
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
                                                lineHeight: 2,
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}
                                            >{RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).deskripsi}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-wahana ${customStyle.prevMainWahana}`}>
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
                    <div className={`next-main-wahana ${customStyle.nextMainWahana}`}>
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
                    prevEl: '.prev-main-wahana',
                    nextEl: '.next-main-wahana',
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
                                        onClick={() => redirect(RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).link)}
                                        src={RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).image}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            minHeight: '300px',
                                        }}></img>
                                    </Box>
                                    <Box
                                    onClick={() => redirect(RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).link)}
                                    sx={{
                                        marginTop: '50px',
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
                                            >{RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).title}</Typography>
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
                                                lineHeight: 2,
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}
                                            >{RekomendasiWahanaByIndex(index, props.slugs, getZonaBySlugs(props.slugs)).deskripsi}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-wahana ${customStyle.prevMainWahana}`}>
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
                    <div className={`next-main-wahana ${customStyle.nextMainWahana}`}>
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
