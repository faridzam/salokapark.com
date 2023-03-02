import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {getIndexesShowEventByID} from '../../assets/images/showEvent';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button} from '@mui/material';
import {ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import { useTheme } from "@mui/material/styles";
import customStyle from "./swiperEventZona.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const SLIDE_COUNT = getIndexesShowEventByID(props.slugs).length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const [hovered, setHovered] = React.useState(false);
    const handleHovered = () => {
      setHovered(true);
    };
    const handleUnhovered = () => {
      setHovered(false);
    };

    return (
        <>
            {
                desktop
                ?
                <Swiper
                    slidesPerView={1}
                    slidesPerGroup={1}
                    loop={true}
                    preloadImages={true}
                    navigation={{
                        prevEl: '.prev-main-events',
                        nextEl: '.next-main-events',
                    }}
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
                                onMouseOver={handleHovered}
                                onMouseOut={handleUnhovered}
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
                                            width: '80%',
                                            display: 'flex',
                                            justifyContent: 'flex-end',
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                height: '600px',
                                                width: '100%',
                                                cursor: 'pointer',
                                                display: 'flex',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                            }}>
                                                <img
                                                src={getIndexesShowEventByID(props.slugs)[index].image}
                                                loading="lazy"
                                                alt="logo saloka"
                                                style={{
                                                    layout: 'fill',
                                                    objectFit: 'cover',
                                                    objectPosition: 'top',
                                                    width: '100%',
                                                    height: '600px',
                                                }}></img>
                                            </Box>

                                            {
                                                hovered
                                                ?
                                                <Box
                                                sx={{
                                                    marginRight: '0%',
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
                                                        >{getIndexesShowEventByID(props.slugs)[index].title}</Typography>
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
                                                            fontSize: '14px',
                                                            fontWeight: 400,
                                                            color: '#ddd'
                                                        }}
                                                        >{getIndexesShowEventByID(props.slugs)[index].deskripsi}</Typography>
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
                                                        // onClick={() => redirect(getIndexesShowEventByID(props.slugs)[index].link)}
                                                        variant="contained"
                                                        sx={{
                                                            borderRadius: 5,
                                                            backgroundColor: 'primary.main',
                                                        }}>
                                                        <Typography
                                                        sx={{
                                                            fontSize: '14px',
                                                            fontWeight: 500,
                                                            color: '#ddd'
                                                        }}>info lengkap</Typography>
                                                        </Button>
                                                    </Box>
                                                    </Grid>
                                                </Box>
                                                :
                                                <div></div>
                                            }

                                        </Grid>

                                    </Grid>
                                </SwiperSlide>

                            ))}

                        </Box>

                        <div className={`prev-main-events ${customStyle.prevMainEvents}`}>
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
                        <div className={`next-main-events ${customStyle.nextMainEvents}`}>
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
                    prevEl: '.prev-main-events',
                    nextEl: '.next-main-events',
                }}
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
                            onMouseOver={handleHovered}
                            onMouseOut={handleUnhovered}
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
                                            height: '400px',
                                            width: '100%',
                                            cursor: 'pointer',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <img
                                            src={getIndexesShowEventByID(props.slugs)[index].image}
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
                                    </Grid>

                                    <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'flex-start',
                                        height: '100%',
                                        width: '90%',
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
                                            >{getIndexesShowEventByID(props.slugs)[index].title}</Typography>
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
                                            >{getIndexesShowEventByID(props.slugs)[index].deskripsi}</Typography>
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
                                            // onClick={() => redirect(getIndexesShowEventByID(props.slugs)[index].link)}
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

                    <div className={`prev-main-events ${customStyle.prevMainEvents}`}>
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
                    <div className={`next-main-events ${customStyle.nextMainEvents}`}>
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
