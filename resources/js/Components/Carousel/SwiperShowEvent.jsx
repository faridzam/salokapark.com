import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {media, promosiListByIndex} from '../../assets/images/carousel_assets/promosiList';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForward, ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import customStyle from "./swiperShowEvent.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App() {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [showEvent, setShowEvent] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-showEvent')
        .then((response) => {
            //
            let Obj = response.data.showEvent;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, link: Obj[i].link, gambar: Obj[i].gambar, desk_singkat: Obj[i].desk_singkat, deskripsi: Obj[i].deskripsi, jadwalwd: Obj[i].jadwalwd, jadwalwe: Obj[i].jadwalwe, jadwalhol: Obj[i].jadwalhol, zona: Obj[i].zona, no_urut: Obj[i].no_urut, status: Obj[i].status});
            }
            setShowEvent(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    const SLIDE_COUNT = showEvent.length;
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
                    prevEl: '.prev-main-showEvent',
                    nextEl: '.next-main-showEvent',
                }}
                modules={[Navigation]}
                className="swiper-showEvent noselect"
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
                                        onClick={() => redirect('/show-event/'+showEvent[index].link)}
                                        src={'https://dashboard.salokapark.com/public/foto/event/daftarevent/'+showEvent[index].gambar}
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
                                            >{showEvent[index].nama}</Typography>
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
                                            >{showEvent[index].desk_singkat.slice(0, 500)+(showEvent[index].desk_singkat.length > 500 ? "..." : "")}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            marginRight: '100px',
                                            marginTop: '20px',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            onClick={() => redirect('/show-event/'+showEvent[index].link)}
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

                    <div className={`prev-main-showEvent ${customStyle.prevMainShowEvent}`}>
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
                    <div className={`next-main-showEvent ${customStyle.nextMainShowEvent}`}>
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
                    prevEl: '.prev-main-showEvent',
                    nextEl: '.next-main-showEvent',
                }}
                modules={[Navigation]}
                className="swiper-showEvent noselect"
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
                                        height: '400px',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        onClick={() => redirect('/show-event/'+showEvent[index].link)}
                                        src={'https://dashboard.salokapark.com/public/foto/event/daftarevent/'+showEvent[index].gambar}
                                        loading="lazy"
                                        alt="logo saloka"
                                        style={{
                                            layout: 'fill',
                                            objectFit: 'cover',
                                            objectPosition: 'top',
                                            width: '100%',
                                            height: '400px'
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
                                            >{showEvent[index].nama}</Typography>
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
                                            >{showEvent[index].desk_singkat.slice(0, 500)+(showEvent[index].desk_singkat.length > 500 ? "..." : "")}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            marginRight: '100px',
                                            marginTop: '20px',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            onClick={() => redirect('/show-event/'+showEvent[index].link)}
                                            className="noselect"
                                            align="justify"
                                            sx={{
                                                cursor: 'pointer',
                                                fontSize: '15px',
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

                    <div className={`prev-main-showEvent ${customStyle.prevMainShowEvent}`}>
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
                    <div className={`next-main-showEvent ${customStyle.nextMainShowEvent}`}>
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