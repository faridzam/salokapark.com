import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {getIndexesMenuRestoByID} from '../../assets/images/carousel_assets/menuResto';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForward, ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import customStyle from "./swiperMenuResto.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const SLIDE_COUNT = getIndexesMenuRestoByID(props.slugs).length;
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
                    prevEl: '.prev-main-menus',
                    nextEl: '.next-main-menus',
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
                            key={`menuResto`+index}>
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
                                        width: '90%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        src={getIndexesMenuRestoByID(props.slugs)[index].image}
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
                                            >{getIndexesMenuRestoByID(props.slugs)[index].nama}</Typography>
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
                                                lineHeight: 1.5,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}
                                            >{getIndexesMenuRestoByID(props.slugs)[index].description}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-menus ${customStyle.prevMainMenus}`}>
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
                    <div className={`next-main-menus ${customStyle.nextMainMenus}`}>
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
                    prevEl: '.prev-main-menus',
                    nextEl: '.next-main-menus',
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
                            key={`menuResto`+index}>
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
                                        height: '300px',
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        src={getIndexesMenuRestoByID(props.slugs)[index].image}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            height: '300px',
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
                                            >{getIndexesMenuRestoByID(props.slugs)[index].title}</Typography>
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
                                                lineHeight: 1.5,
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}
                                            >{getIndexesMenuRestoByID(props.slugs)[index].description}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-menus ${customStyle.prevMainMenus}`}>
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
                    <div className={`next-main-menus ${customStyle.nextMainMenus}`}>
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
