import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {getIndexesRekomendasiRestoByID} from '../../assets/images/restaurant';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import customStyle from "./swiperRekomendasiResto.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [resto, setResto] = React.useState([]);
    React.useEffect(() => {
        axios.post('/api/get-content-rekomendasi-restaurant', {
            id: props.slugs,
        })
        .then((response) => {
            //
            let Obj = response.data.restos;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, idresto: Obj[i].idresto, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, desk_singkat: Obj[i].desk_singkat, deskripsi: Obj[i].deskripsi, nourut: Obj[i].nourut, status: Obj[i].status});
            }
            setResto(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    const SLIDE_COUNT = resto.length;
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
                                        width: '90%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        onClick={() => redirect('/restaurant/'+resto[index].link)}
                                        src={'https://dashboard.salokapark.com/public/foto/resto/daftar/'+resto[index].gambar}
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
                                    onClick={() => redirect('/restaurant/'+resto[index].link)}
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
                                            >{resto[index].nama}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                color: '#333'
                                            }}
                                            >{resto[index].desk_singkat.slice(0, 500)+(resto[index].desk_singkat.length > 500 ? "..." : "")}</Typography>
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
                                        height: '300px',
                                        width: '100%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        onClick={() => redirect('/restaurant/'+resto[index].link)}
                                        src={'https://dashboard.salokapark.com/public/foto/resto/daftar/'+resto[index].gambar}
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
                                    onClick={() => redirect('/restaurant/'+resto[index].link)}
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
                                            >{resto[index].nama}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <Typography
                                            sx={{
                                                fontSize: '14px',
                                                fontWeight: 500,
                                                color: '#333'
                                            }}
                                            >{resto[index].desk_singkat.slice(0, 500)+(resto[index].desk_singkat.length > 500 ? "..." : "")}</Typography>
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
