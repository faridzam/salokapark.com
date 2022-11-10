import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {media, eventByIndex} from '../../assets/images/carousel_assets/events';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import "./swiperMainEvents.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App() {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const SLIDE_COUNT = 2;
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
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    preloadImages={false}
                    navigation={true}
                    lazy={true}
                    modules={[Navigation]}
                    className="swiper-events noselect"
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
                                key={`eventCarousel`+index}>
                                    <Grid
                                    container
                                    direction="column"
                                    spacing={0}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>

                                        <Grid
                                        container
                                        direction="row"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                maxHeight: '400px',
                                                width: '100%',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <img
                                                src={media[index]}
                                                loading="lazy"
                                                alt="logo saloka"
                                                style={{
                                                    layout: 'fill',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '80%',
                                                }}></img>
                                            </Box>
                                            <Box
                                            sx={{
                                                marginRight: '11%',
                                                display: 'flex',
                                                alignItems: 'flex-start',
                                                justifyContent: 'flex-start',
                                                backgroundColor: 'rgba(0,0,0,0.7)',
                                                position: 'absolute',
                                                height: '100%',
                                                width: '30%',
                                            }}>
                                                <Grid
                                                container
                                                direction="column"
                                                spacing={0}
                                                sx={{
                                                    width: '100%',
                                                    height: '100%',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                }}>
                                                <Box
                                                sx={{
                                                    display: 'flex',
                                                    width: '80%',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '28px',
                                                        fontWeight: 600,
                                                        color: '#ddd'
                                                    }}
                                                    >{eventByIndex(index).title}</Typography>
                                                </Box>
                                                <Box
                                                sx={{
                                                    marginTop: '20px',
                                                    display: 'flex',
                                                    width: '80%',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                    <Typography
                                                    textAlign="justify"
                                                    sx={{
                                                        fontSize: '18px',
                                                        fontWeight: 400,
                                                        color: '#ddd'
                                                    }}
                                                    >{eventByIndex(index).deskripsi}</Typography>
                                                </Box>
                                                <Box
                                                sx={{
                                                    marginTop: '20px',
                                                    display: 'flex',
                                                    width: '80%',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                }}>
                                                    <Button
                                                    onClick={() => redirect(eventByIndex(index).link)}
                                                    variant="contained"
                                                    sx={{
                                                        borderRadius: 5,
                                                        backgroundColor: 'primary.main',
                                                    }}>
                                                    <Typography
                                                    sx={{
                                                        fontSize: '14px',
                                                        color: '#ddd'
                                                    }}>info lengkap</Typography>
                                                    </Button>
                                                </Box>
                                                </Grid>
                                            </Box>
                                        </Grid>

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
                className="swiper-events noselect"
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
                            key={`eventCarousel`+index}>
                                <Grid
                                container
                                direction="column"
                                spacing={0}
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>

                                    <Grid
                                    container
                                    direction="row"
                                    spacing={0}
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                        alignItems: 'center',
                                    }}>
                                        <Box
                                        sx={{
                                            maxHeight: '400px',
                                            width: '100%',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <img
                                            src={media[index]}
                                            loading="lazy"
                                            alt="logo saloka"
                                            style={{
                                                layout: 'fill',
                                                objectFit: 'cover',
                                                objectPosition: 'top',
                                                width: '100%',
                                            }}></img>
                                        </Box>
                                    </Grid>

                                    <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                        <Grid
                                        container
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            width: '100%',
                                            height: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}>
                                        <Box
                                        sx={{
                                            marginTop: '20px',
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '18px',
                                                fontWeight: 600,
                                                color: '#333'
                                            }}
                                            >{eventByIndex(index).title}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '20px',
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 400,
                                                color: '#333'
                                            }}
                                            >{eventByIndex(index).deskripsi}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '20px',
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Button
                                            onClick={() => redirect(eventByIndex(index).link)}
                                            variant="contained"
                                            sx={{
                                                borderRadius: 5,
                                                backgroundColor: 'primary.main',
                                            }}>
                                            <Typography
                                            sx={{
                                                fontSize: '14px',
                                                color: '#ddd'
                                            }}>info lengkap</Typography>
                                            </Button>
                                        </Box>
                                        </Grid>
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
