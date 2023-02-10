import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/lazy";

import {groupByIndex} from '../../assets/images/carousel_assets/groups';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, IconButton, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import { useTheme } from "@mui/material/styles";
import {ArrowForward, WhatsApp, Close, ArrowForwardIos, ArrowBackIos} from '@mui/icons-material';
import customStyle from  "./swiperGroups.module.css";
import { Inertia } from '@inertiajs/inertia';

// import required modules
import { Navigation, Lazy } from "swiper";

export default function App(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [group, setGroup] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-group')
        .then((response) => {
            //
            let Obj = response.data.group;
            var result=[];
            for(var i=0;i<Obj.length;i++){
                result.push({id: Obj[i].id, nama: Obj[i].nama, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi, phone: Obj[i].phone, nourut: Obj[i].nourut, status: Obj[i].status});
            }
            setGroup(result);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    const SLIDE_COUNT = group.length;
    const slides = Array.from(Array(SLIDE_COUNT).keys());

    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(false);
    const [phone, setPhone] = React.useState(false);
    const [title, setTitle] = React.useState(false);
    const [description, setDescription] = React.useState(false);

    const handleClickOpen = (imageProp, titleProp, descriptionProp, phoneProp) => {
        setImage(imageProp);
        setTitle(titleProp);
        setDescription(descriptionProp);
        setPhone(phoneProp);
        setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const contactUs = (number) => {
        window.open('https://wa.me/'+number)
        .then((response) => {
            window.close();
        }).catch((error) => {
            window.close();
        });
    }

    return (
        <>
            {
                desktop
                ?
                <Dialog
                fullScreen={!desktop}
                fullWidth={false}
                open={open}
                maxWidth={'sm'}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    zIndex: '1100'
                }}
                >
                    <DialogTitle id="responsive-dialog-title">
                        <Grid
                        container={true}
                        direction="row"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                            <IconButton aria-label="delete" color="#555" size="large" onClick={handleClose}>
                                <Close fontSize="inherit"/>
                            </IconButton>
                            <Typography
                            sx={{
                                fontSize: '28px',
                                fontWeight: 600,
                                color: '#333'
                            }}
                            >{title}</Typography>
                        </Grid>
                    </DialogTitle>
                    <DialogContent
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <DialogContentText>
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '700px',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box
                                sx={{
                                    marginY: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <img
                                    src={image}
                                    loading="lazy"
                                    alt="logo saloka"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        maxHeight: '500px',
                                    }}></img>
                                </Box>
                                <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <section
                                    dangerouslySetInnerHTML={{__html: description}}>
                                    </section>
                                </Box>
                                <Box
                                sx={{
                                    marginY: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Button variant="contained" color="primary" size="large" startIcon={<WhatsApp/>} onClick={() => contactUs(phone)}>
                                        Hubungi Kami
                                    </Button>
                                </Box>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
                :
                <Dialog
                fullScreen={!desktop}
                fullWidth={false}
                open={open}
                maxWidth={'sm'}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
                sx={{
                    zIndex: '1100'
                }}
                >
                    <DialogTitle id="responsive-dialog-title">
                        <Grid
                        container={true}
                        direction="row"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                        }}>
                            <IconButton aria-label="delete" color="#555" size="large" onClick={handleClose}>
                                <Close fontSize="inherit"/>
                            </IconButton>
                            <Typography
                            sx={{
                                fontSize: '28px',
                                fontWeight: 600,
                                color: '#333'
                            }}
                            >{title}</Typography>
                        </Grid>
                    </DialogTitle>
                    <DialogContent
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <DialogContentText>
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                                <Box
                                sx={{
                                    marginY: '20px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <img
                                    src={image}
                                    loading="lazy"
                                    alt="logo saloka"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        maxHeight: '300px',
                                    }}></img>
                                </Box>
                                <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>
                                    <section
                                    dangerouslySetInnerHTML={{__html: description}}>
                                    </section>
                                </Box>
                                <Box
                                sx={{
                                    marginY: '50px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                    <Button variant="contained" color="primary" size="large" startIcon={<WhatsApp/>} onClick={() => contactUs(phone)}>
                                        Hubungi Kami
                                    </Button>
                                </Box>
                            </Grid>
                        </DialogContentText>
                    </DialogContent>
                </Dialog>
            }

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
                    prevEl: '.prev-main-groups',
                    nextEl: '.next-main-groups',
                }}
                modules={[Navigation]}
                className="swiper-groups noselect"
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
                            key={`zoneCarousel`+index}
                            onClick={() => handleClickOpen('https://dashboard.salokapark.com/public/foto/grup/daftar/'+group[index].gambar, group[index].nama, group[index].deskripsi, group[index].phone)}>
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
                                        width: '80%',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <img
                                        src={'https://dashboard.salokapark.com/public/foto/grup/daftar/'+group[index].gambar}
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
                                        marginTop: '100px',
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
                                            >{group[index].nama}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <section
                                            dangerouslySetInnerHTML={{__html: group[index].deskripsi}}>
                                            </section>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-groups ${customStyle.prevMainGroups}`}>
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
                    <div className={`next-main-groups ${customStyle.nextMainGroups}`}>
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
                    prevEl: '.prev-main-groups',
                    nextEl: '.next-main-groups',
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
                            key={`zoneCarousel`+index}
                            onClick={() => handleClickOpen('https://dashboard.salokapark.com/public/foto/grup/daftar/'+group[index].gambar, group[index].nama, group[index].deskripsi, group[index].phone)}>
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
                                        src={'https://dashboard.salokapark.com/public/foto/grup/daftar/'+group[index].gambar}
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
                                            >{group[index].nama}</Typography>
                                        </Box>
                                        <Box
                                        sx={{
                                            marginTop: '10px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            width: '100%',
                                        }}>
                                            <section
                                            dangerouslySetInnerHTML={{__html: group[index].deskripsi}}>
                                            </section>
                                        </Box>
                                        <Box
                                        sx={{
                                            display: 'flex',
                                            marginRight: '100px',
                                            marginTop: '20px',
                                            alignItems: 'center',
                                        }}>
                                            <Typography
                                            className="noselect"
                                            align="justify"
                                            sx={{
                                                cursor: 'pointer',
                                                fontSize: '18px',
                                                fontWeight: 400,
                                                color: '#789acf'
                                            }}
                                            >Baca Lebih Lanjut</Typography>
                                            <ArrowForward
                                            sx={{
                                                cursor: 'pointer',
                                                marginLeft: '10px',
                                                fontSize: 20,
                                                color: '#789acf'
                                            }}/>
                                        </Box>
                                    </Box>
                                </Grid>
                            </SwiperSlide>

                        ))}

                    </Box>

                    <div className={`prev-main-groups ${customStyle.prevMainGroups}`}>
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
                    <div className={`next-main-groups ${customStyle.nextMainGroups}`}>
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
