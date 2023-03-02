import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Accordion, AccordionSummary, AccordionDetails, Collapse, Zoom, IconButton, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {AccessTime, DeviceThermostat, ConfirmationNumber, Stars, ArrowForward, CalendarMonth, ExpandMore, KeyboardArrowDown} from '@mui/icons-material';
import { useInView } from 'react-intersection-observer';
import GoogleMapReact from 'google-map-react';
import { Inertia } from '@inertiajs/inertia';
import {Application, Calendar} from 'react-rainbow-components';

import { Header, Footer, ToTopButton} from '../Components';
import { SwiperMainBanner, SwiperMainZones, SwiperMainEvents } from '../Components/Carousel';
import {media} from '../assets/images';
import {mediaHome} from '../assets/images/home';

import styles from "../styles/index.css";
import '../styles/scrollbarHidden.module.css';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

const rainbowTheme = {
    rainbow: {
        palette: {
            brand: '#169870',
        },
    },
};


export default function Welcome(props) {

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const redirect = (route) => {
        Inertia.visit(route);
    }

    const [faq1, setFaq1] = React.useState([]);
    const [faq2, setFaq2] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-faqs')
        .then((response) => {
            //
            let Obj = response.data.faqs;
            var result1=[];
            var result2=[];
            for(var i=0;i<Obj.length;i++){
                if (Obj[i].status === 1) {
                    result1.push({id: Obj[i].id, tanya: Obj[i].tanya, jawab: Obj[i].jawab, nourut: Obj[i].nourut, status: Obj[i].status});
                } if (Obj[i].status === 2) {
                    result2.push({id: Obj[i].id, tanya: Obj[i].tanya, jawab: Obj[i].jawab, nourut: Obj[i].nourut, status: Obj[i].status});
                } else {
                    //
                };
            }
            setFaq1(result1);
            setFaq2(result2);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    // faqs accordion
    const PRIMARY_FAQ_AMOUNT = faq1.length;
    const primaryFaqAmount = Array.from(Array(PRIMARY_FAQ_AMOUNT).keys());
    const SECONDARY_FAQ_AMOUNT = faq2.length;
    const secondaryFaqAmount = Array.from(Array(SECONDARY_FAQ_AMOUNT).keys());
    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    const [showMoreFaqs, setShowMoreFaqs] = React.useState(false);
    const [expandedSecondary, setExpandedSecondary] = React.useState(false);

    // ref scroll
    const tentangScrollRef = React.useRef();
    const zonaScrollRef = React.useRef();
    const mapsScrollRef = React.useRef();
    const eventsScrollRef = React.useRef();
    const faqsScrollRef = React.useRef();
    const contactsScrollRef = React.useRef();

    const [tentangRef, tentangInView] = useInView({
      threshold: 0.3,
    });
    const [zonaRef, zonaInView] = useInView({
      threshold: 0.3,
    });
    const [mapsRef, mapsInView] = useInView({
      threshold: 0.3,
    });
    const [eventsRef, eventsInView] = useInView({
      threshold: 0.3,
    });
    const [faqsRef, faqsInView] = useInView({
      threshold: 0.5,
    });
    const [contactsRef, contactsInView] = useInView({
      threshold: 0.5,
    });

    const setRefs = React.useCallback(
        (node) => {
          // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
          tentangRef(node)
          zonaRef(node)
          eventsRef(node)
          mapsRef(node)
          faqsRef(node)
          contactsRef(node)
        },
        [tentangRef, zonaRef, eventsRef, mapsRef, faqsRef, contactsRef],
    )

    const scrollToRef = (refProp) => {
        refProp.current.scrollIntoView({behavior: 'smooth'});
    };

    const mapsProps = {
        center: {
          lat: -7.280711095665581,
          lng: 110.45955097017394
        },
        zoom: 15
    };

    const [temp, setTemp] = React.useState(false);
    const [weather, setWeather] = React.useState(false);
    React.useEffect(() => {
        axios.get('/api/get-weather-now')
        .then((response) => {
            //
            setTemp(response.data.status.current_weather.temperature)
        }).catch((e) => {
            //
        });
    }, [] );

    const isMounted = useIsMounted();

    // confirmation dialog
    const [openDialog, setOpenDialog] = React.useState(false);

    const handleDialogOpen = () => {
      setOpenDialog(true);
    };
    const handleDialogClose = () => {
      setOpenDialog(false);
    };

    return (
        <>
            <Head title='Home'/>
            <Zoom
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
            {desktop
            ?
                <div>

                    <Dialog
                    open={openDialog}
                    onClose={handleDialogClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description">
                        <DialogTitle id="alert-dialog-title">
                            Kalender
                        </DialogTitle>
                        <DialogContent>
                            <Application theme={rainbowTheme}>
                                <Calendar
                                    variant='single'
                                    id="calendar-5"
                                    locale="id-ID"
                                />
                            </Application>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleDialogClose}>cancel</Button>
                        </DialogActions>
                    </Dialog>

                    {/* header */}
                    <Box
                    sx={{
                        position: 'sticky',
                        zIndex: '1002',
                        width: '100%',
                        top: '0',
                    }}>
                        <Header/>
                    </Box>

                    {/* banner-carousel */}
                    <Box>
                        <SwiperMainBanner/>
                    </Box>

                    {/* ticket-order */}
                    <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box
                        sx={{
                            width: '100%',
                            height: '50px',
                            backgroundColor: '#eee'
                        }}>
                        <Grid
                        container={true}
                        direction="row"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}>

                            <Grid
                            container={true}
                            direction="row"
                            spacing={0}
                            sx={{
                                marginLeft: '20px',
                            }}>

                            <Grid
                            container={true}
                            direction="row"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <AccessTime
                                sx={{
                                    fontSize: 25,
                                    color: '#444'
                                }}/>
                                <Typography
                                noWrap={true}
                                sx={{
                                    marginLeft: '5px',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#444'
                                }}
                                >Jam Operasional Hari Ini:</Typography>
                            </Grid>
                            <Box
                            sx={{
                                marginLeft: '10px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <Grid
                                container={true}
                                direction="column"
                                spacing={0}
                                >
                                <Typography
                                noWrap={true}
                                sx={{
                                    margin: 0,
                                    padding: 0,
                                    fontSize: '15px',
                                    fontWeight: 500,
                                    color: '#444'
                                }}
                                >10:00 am - 6:00 pm</Typography>
                                </Grid>
                            </Box>

                            <Box>
                                <IconButton color="#444" onClick={handleDialogOpen}>
                                    <CalendarMonth/>
                                </IconButton>
                            </Box>

                            <Grid
                            container={true}
                            direction="row"
                            spacing={0}
                            sx={{
                                marginLeft: '30px',
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center'
                            }}>
                                <DeviceThermostat
                                sx={{
                                    fontSize: 25,
                                    color: '#444'
                                }}/>
                                <Typography
                                noWrap={true}
                                sx={{
                                    marginLeft: '5px',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: '#444'
                                }}
                                >Suhu Hari Ini:</Typography>
                            </Grid>
                            {
                                temp
                                ?
                                <Box
                                sx={{
                                    marginLeft: '10px',
                                    display: 'flex',
                                    justifyContent: 'flex-start',
                                    alignItems: 'center'
                                }}>
                                    <Grid
                                    container={true}
                                    direction="column"
                                    spacing={0}
                                    >
                                    <Typography
                                    noWrap={true}
                                    sx={{
                                        margin: 0,
                                        padding: 0,
                                        fontSize: '15px',
                                        fontWeight: 500,
                                        color: '#444'
                                    }}
                                    >{temp}°</Typography>
                                    </Grid>
                                </Box>
                                :
                                <div></div>
                            }
                            

                            </Grid>



                            <Grid
                            container={true}
                            direction="row"
                            spacing={0}>
                            <Box
                            onClick={() => redirect('/ticket')}
                            sx={{
                                width: '200px',
                                height: '50px',
                                backgroundColor: 'primary.light',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'primary.lightest',
                                },
                            }}>
                                <ConfirmationNumber
                                sx={{
                                    marginBottom: '2px',
                                    fontSize: '22px',
                                    color: 'white.lightest',
                                }}/>
                                <Typography
                                noWrap={true}
                                sx={{
                                    marginLeft: '10px',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: 'white.lightest',
                                }}
                                >Tiket</Typography>
                            </Box>
                            <Box
                            onClick={() => redirect('/membership')}
                            sx={{
                                width: '200px',
                                height: '50px',
                                backgroundColor: 'secondary.light',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'secondary.lightest',
                                },
                            }}>
                                <Stars
                                sx={{
                                    marginBottom: '2px',
                                    fontSize: '22px',
                                    color: 'white.lightest',
                                }}/>
                                <Typography
                                noWrap={true}
                                sx={{
                                    marginLeft: '10px',
                                    fontSize: '18px',
                                    fontWeight: 600,
                                    color: 'white.lightest',
                                }}
                                >Membership</Typography>
                            </Box>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>

                    {/* trip advisory */}
                    <Grid
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginY: '10px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Accordion
                        square
                        sx={{
                            width:'60%',
                            boxShadow: 'none',
                            borderBottom: 'solid 2px',
                            borderTop: 'solid 2px',
                            borderColor: 'primary.lightest',
                        }}>
                            <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontFamily: 'AlrightSans',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            color: '#333'
                                        }}>PETUNJUK KUNJUNGAN</Typography>
                                    </Box>
                                    <Button
                                    variant="text"
                                    sx={{
                                        borderRadius: 50,
                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '12px',
                                            color: 'primary.main'
                                        }}>BACA  LEBIH LANJUT</Typography>
                                        <KeyboardArrowDown
                                        sx={{
                                            color: 'primary.main'
                                        }}/>
                                    </Button>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box
                                sx={{
                                    width: '80%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Grid
                                    container={true}
                                    direction="column"
                                    spacing={0}
                                    sx={{
                                    }}>

                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '15px',
                                                color: '#333'
                                            }}>Jam Operasional
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '14px',
                                                color: '#333'
                                            }}>Jam operasional Saloka untuk hari Senin-Kamis adalah 10.00 – 18.00, hari Jumat adalah 12.00 – 19.00 WIB, hari Sabtu dan Minggu adalah 10.00 – 19.00. Pada hari libur nasional, jam operasional dapat berubah sewaktu-waktu.
                                            </Typography>
                                        </Box>

                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '15px',
                                                color: '#333'
                                            }}>Harga Tiket
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '14px',
                                                color: '#333'
                                            }}>Harga tiket pada hari Senin-Jumat adalah Rp 120.000 dan hari Sabtu-Minggu adalah Rp 150.000 yang berlaku sebagai tiket terusan. Anak-anak dengan tinggi badan di bawah 90 cm belum berlaku harga tiket. Lansia di atas 55 tahun berlaku harga khusus dengan menunjukkan KTP di loket Saloka. Pembelian tiket bisa dilakukan di offline/loket tiket dan online pada website (maksimal H-1 kedatangan) dan merchant yang bekerjasama dengan Saloka. Tidak berlaku refund untuk pembatalan tiket yang sudah dibeli.
                                            </Typography>
                                        </Box>

                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '15px',
                                                color: '#333'
                                            }}>Pertunjukan di Saloka
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '14px',
                                                color: '#333'
                                            }}>Pertunjukan spektakuler Baru Klinthing Show hadir di hari Jumat, Sabtu, Minggu, dan di hari libur nasional pada jam 18.15 WIB dan Dancing Fountain setiap hari di jam 15.00 WIB. Lihat lebih lengkap mengenai pertunjukan di Saloka pada bagian Show & Event.
                                            </Typography>
                                        </Box>
                                        
                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 500,
                                                fontSize: '15px',
                                                color: '#333'
                                            }}>Aturan Makanan & Minuman
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '14px',
                                                color: '#333'
                                            }}>Makanan dan minuman dari luar Saloka tidak boleh dibawa masuk ke area Saloka, kecuali minuman dalam tumbler dan makanan khusus bayi.
                                            </Typography>
                                        </Box>

                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>

                    {/* navigation-fixed */}
                    <Box
                    sx={{
                        zIndex: '1001',
                        position: 'sticky',
                        top: '100px',
                        width: '100%',
                        height: '50px',
                        backgroundColor: 'secondary.main'
                    }}>
                        <Grid
                        container={true}
                        direction="row"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                            onClick={() => scrollToRef(tentangScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '10px',
                                marginX: '10px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${tentangInView && !zonaInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >TENTANG</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(zonaScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '10px',
                                marginX: '10px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${zonaInView && !mapsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >ZONA</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(mapsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '10px',
                                marginX: '10px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${mapsInView && !eventsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >PETA</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(eventsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '10px',
                                marginX: '10px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${eventsInView && !faqsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >EVENTS</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(faqsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '10px',
                                marginX: '10px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${faqsInView && !contactsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >FAQs</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(contactsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '10px',
                                marginX: '10px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${contactsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '18px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >KONTAK</Typography>
                            </Box>
                        </Grid>
                    </Box>

                    {/* tentang */}
                    <div ref={tentangScrollRef}></div>
                    <Grid
                    ref={tentangRef}
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                    }}>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '50%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <img
                                src={mediaHome[0]}
                                style={{
                                }}></img>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <Typography
                                sx={{
                                    lineHeight: 1.5,
                                    fontSize: '28px',
                                    fontWeight: 600,
                                    color: '#333'
                                }}
                                >Taman Rekreasi Terbesar di Jawa Tengah</Typography>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <Typography
                                textAlign="justify"
                                sx={{
                                    lineHeight: 1.5,
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}
                                >SALOKA hadir sebagai salah satu destinasi wisata Pesona Indonesia yang berbentuk taman rekreasi tematik keluarga di Jawa Tengah yang mengusung konsep kearifan lokal. Berlokasi di persimpangan antara kota Semarang, Salatiga, Surakarta dan Daerah Istimewa Yogyakarta.</Typography>
                            </Box>
                            <Box
                            onClick={() => redirect('/tentang')}
                            sx={{
                                display: 'flex',
                                marginTop: '20px',
                                width: '80%',
                                alignItems: 'center',
                            }}>
                                <Typography
                                className="noselect"
                                align="justify"
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    color: 'primary.main'
                                }}
                                >Baca Lebih Lanjut Tentang Saloka</Typography>
                                <ArrowForward
                                sx={{
                                    cursor: 'pointer',
                                    marginLeft: '10px',
                                    fontSize: 20,
                                    color: 'primary.main'
                                }}/>
                            </Box>
                        </Grid>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '30%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'flex-start',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <img src={media[0]}></img>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '30px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    color: '#333'
                                }}
                                >Saloka Theme Park</Typography>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '5px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <Typography
                                textAlign="left"
                                sx={{
                                    lineHeight: 1,
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}
                                >Jl. Fatmawati No.154, Tuntang, Semarang, Jawa Tengah 50773</Typography>
                            </Box>
                            <Box
                            sx={{
                                width: '80%',
                                marginTop: '10px',
                            }}>
                                {/* official google maps
                                <div style={{ height: '300px', width: '100%' }}>
                                    <GoogleMapReact
                                        defaultCenter={mapsProps.center}
                                        defaultZoom={mapsProps.zoom}
                                    >
                                        <AnyReactComponent
                                        lat={-7.280711095665581}
                                        lng={110.45955097017394}
                                        />
                                    </GoogleMapReact>
                                </div>
                                */}
                                <div id="my-map-canvas" style={{ height: '300px', width: '100%' }}>
                                    <iframe style={{ height: '100%', width: '100%', border: '0' }} frameborder="0" src="https://www.google.com/maps/embed/v1/place?q=Saloka+Theme+Park,+Jalan+Fatmawati,+Gumuksari,+Lopait,+Semarang+Regency,+Central+Java,+Indonesia&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"></iframe>
                                </div>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '10px',
                                width: '80%',
                                display: 'flex',
                            }}>
                                <Typography
                                noWrap={true}
                                sx={{
                                    fontSize: '18px',
                                    fontWeight: 500,
                                    color: '#333'
                                }}
                                >Show & Events</Typography>
                            </Box>
                            <Box
                            onClick={() => redirect('/show-event')}
                            sx={{
                                marginTop: '10px',
                                width: '80%',
                                display: 'flex',
                            }}>
                                <Typography
                                paragraph={true}
                                textAlign="justify"
                                sx={{
                                    textDecoration: 'underline',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333',
                                    "&:hover": {
                                        color: 'secondary.light',
                                    },
                                }}
                                >Klik di sini untuk info lebih lanjut mengenai show & events di Saloka</Typography>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* banner-zones */}
                    <div ref={zonaScrollRef}></div>
                    <Grid
                    ref={zonaRef}
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box
                        sx={{

                        }}>
                            <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '38px',
                                color: '#333'
                            }}>5 Zona dengan Beragam Tema</Typography>
                        </Box>
                        <Box
                        sx={{
                            marginTop: '50px',
                            height: '100%',
                            width: '90%',
                            paddingX: '10px',
                        }}>
                            <SwiperMainZones/>
                        </Box>
                        <Box
                        sx={{
                            marginTop: '20px',
                        }}>
                            <Button
                            onClick={() => redirect('/zona')}
                            variant="outlined"
                            sx={{
                                width: '200px',
                                height: '50px',
                                borderRadius: 50,
                                border: '2px solid'
                            }}>
                                <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    color: 'primary.main'
                                }}>LIHAT SEMUA ZONA</Typography>
                            </Button>
                        </Box>
                    </Grid>

                    {/* maps */}
                    <div ref={mapsScrollRef}></div>
                    <Grid
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Box
                    ref={mapsRef}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '75vh',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img
                        src={mediaHome[1]}
                        alt="maps-banner"
                        style={{
                            layout: 'fill',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            width: '100%',
                            filter: 'brightness(30%)',
                        }}></img>
                    </Box>
                    <Box
                    sx={{
                        position: 'absolute',
                        marginTop: '50px',
                        width: '100%',
                        height: '70vh',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            paddingBottom: '50px',
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                        <Typography
                        sx={{
                            fontSize: '32px',
                            fontWeight: 600,
                            color: '#ddd'
                        }}
                        >Rasakan Keceriaan Tiada Habisnya di Saloka Theme Park!</Typography>
                        <Typography
                        sx={{
                            marginBottom: '30px',
                            fontSize: '18px',
                            fontWeight: 300,
                            color: '#ddd'
                        }}
                        >Rencanakan petualangan di negeri ajaib dan ajak orang-orang tersayangmu sekarang!</Typography>
                        <Button
                        onClick={() => redirect('/zona')}
                        variant="outlined"
                        sx={{
                            width: '200px',
                            height: '50px',
                            borderRadius: 50,
                            border: '2px solid'
                        }}>
                            <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#ddd'
                            }}>Lihat Peta Saloka</Typography>
                        </Button>
                        </Grid>
                    </Box>
                    </Grid>

                    {/* events */}
                    <div ref={eventsScrollRef}></div>
                    <Grid
                    ref={eventsRef}
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box
                        sx={{

                        }}>
                            <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '38px',
                                color: '#333'
                            }}>What's on Saloka</Typography>
                        </Box>

                        <Box
                        sx={{
                            marginTop: '20px',
                            height: '100%',
                            width: '80%',
                        }}>
                            <SwiperMainEvents/>
                        </Box>

                    </Grid>

                    {/* FAQs */}
                    <div ref={faqsScrollRef}></div>
                    <Grid
                    ref={faqsRef}
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Typography
                            sx={{
                                fontSize: '40px',
                                fontWeight: 600,
                                color: '#333'
                            }}
                            >FAQs</Typography>
                        </Box>

                        <Box
                        sx={{
                            marginTop: '20px',
                            width: '60vw',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box
                                sx={{
                                    width: '100%'
                                }}>
                                    {primaryFaqAmount.map((index) => (
                                        <Accordion
                                        elevation={0}
                                        key={`panel`+index}
                                        expanded={expanded === "primary"+index}
                                        onChange={handleChange("primary"+index)}
                                        sx={{
                                            width: '100%',
                                            '&& .MuiPaper-root-MuiAccordion-root:before': {
                                                backgroundColor: '#ff0000',
                                                height: '0px',
                                            },
                                        }}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMore />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            >
                                                <Typography
                                                sx={{ 
                                                }}
                                                >
                                                    {faq1[index].tanya}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                sx={{
                                                }}>
                                                    {faq1[index].jawab}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Box>

                                <hr
                                    style={{
                                        width: '100%',
                                        color: 'rgba(0, 0, 0, 0.12)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                        height: '1px'
                                    }}
                                />

                                {/* secondary faqs */}
                                <Box
                                sx={{
                                    width: '100%'
                                }}>
                                    <Collapse in={expandedSecondary}>
                                        {secondaryFaqAmount.map((index) => (
                                            <Accordion
                                            elevation={0}
                                            key={`panelSecondary`+index}
                                            expanded={expanded === "secondary"+index}
                                            onChange={handleChange("secondary"+index)}
                                            sx={{
                                                width: '100%',
                                            }}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMore />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                                >
                                                    <Typography
                                                    sx={{
                                                        flexShrink: 0
                                                    }}>
                                                        {faq2[index].tanya}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography
                                                    sx={{
                                                    }}>
                                                        {faq2[index].jawab}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </Collapse>
                                </Box>

                                <Button
                                onClick={() => setExpandedSecondary(!expandedSecondary)}
                                variant="outlined"
                                sx={{
                                    marginTop: '50px',
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: 50,
                                    border: '2px solid',
                                }}>
                                    <Typography
                                    className={styles.fontinBold}
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        color: 'primary.main'
                                    }}>{expandedSecondary ? "Lihat Semua" : "Lihat Semua"}</Typography>
                                </Button>

                            </Grid>
                        </Box>
                        </Grid>
                    </Box>
                    </Grid>

                    {/* footer */}
                    <div ref={contactsScrollRef}></div>
                    <Box
                    ref={contactsRef}
                    sx={{
                        marginTop: '100px',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${media[2]})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                    }}>
                        <Footer/>
                    </Box>

                    {/* scroll to top button */}
                    <ToTopButton/>
                </div>
            :

                <div>
                    {/* header */}
                    <Box
                    sx={{
                        position: 'sticky',
                        zIndex: '1002',
                        width: '100%',
                        top: '0',
                    }}>
                        <Header/>
                    </Box>

                    {/* banner-carousel */}
                    <Box>
                        <SwiperMainBanner/>
                    </Box>

                    {/* ticket-order */}
                    <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box
                        sx={{
                            width: '100%',
                            height: '50px',
                            backgroundColor: '#eee'
                        }}>
                        <Grid
                        container={true}
                        direction="row"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>

                            <Grid
                            container={true}
                            direction="row"
                            spacing={0}
                            sx={{
                                width: '100%'
                            }}>

                            <Box
                            onClick={() => redirect('/ticket')}
                            sx={{
                                width: '50%',
                                height: '50px',
                                backgroundColor: 'primary.light',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'primary.lightest',
                                },
                            }}>
                                <ConfirmationNumber
                                sx={{
                                    marginBottom: '2px',
                                    fontSize: '18px',
                                    color: 'white.lightest',
                                }}/>
                                <Typography
                                noWrap={true}
                                sx={{
                                    marginLeft: '10px',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    color: 'white.lightest',
                                }}
                                >Ticket</Typography>
                            </Box>
                            <Box
                            onClick={() => redirect('/membership')}
                            sx={{
                                width: '50%',
                                height: '50px',
                                backgroundColor: 'secondary.light',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer',
                                '&:hover': {
                                    backgroundColor: 'secondary.lightest',
                                },
                            }}>
                                <Stars
                                sx={{
                                    marginBottom: '2px',
                                    fontSize: '18px',
                                    color: 'white.lightest',
                                }}/>
                                <Typography
                                noWrap={true}
                                sx={{
                                    marginLeft: '10px',
                                    fontSize: '15px',
                                    fontWeight: 600,
                                    color: 'white.lightest',
                                }}
                                >Membership</Typography>
                            </Box>
                            </Grid>
                        </Grid>
                        </Box>
                    </Box>

                    {/* trip advisory */}
                    <Grid
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginY: '10px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>

                        <Accordion
                        square
                        sx={{
                            width:'80%',
                            boxShadow: 'none',
                            borderBottom: 'solid 2px',
                            borderTop: 'solid 2px',
                            borderColor: 'primary.lightest',
                        }}>
                            <AccordionSummary
                            aria-controls="panel1a-content"
                            id="panel1a-header">
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Typography
                                    sx={{
                                        fontFamily: 'AlrightSans',
                                        fontWeight: 600,
                                        fontSize: '12px',
                                        color: '#333'
                                    }}>PETUNJUK KUNJUNGAN</Typography>
                                    <Button
                                    variant="text"
                                    sx={{
                                        borderRadius: 50,
                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '12px',
                                            color: 'primary.main'
                                        }}>BACA LEBIH LANJUT</Typography>
                                        <KeyboardArrowDown
                                        sx={{
                                            color: 'primary.main'
                                        }}/>
                                    </Button>
                                </Box>
                            </AccordionSummary>
                            <AccordionDetails
                            sx={{
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box
                                sx={{
                                    width: '100%',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center'
                                }}>
                                    <Grid
                                    container={true}
                                    direction="column"
                                    spacing={0}
                                    sx={{
                                    }}>

                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: '13px',
                                                color: '#333'
                                            }}>Jam Operasional
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '12px',
                                                color: '#333'
                                            }}>Jam operasional Saloka untuk hari Senin-Kamis adalah 10.00 – 18.00, hari Jumat adalah 12.00 – 19.00 WIB, hari Sabtu dan Minggu adalah 10.00 – 19.00. Pada hari libur nasional, jam operasional dapat berubah sewaktu-waktu.
                                            </Typography>
                                        </Box>

                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: '13px',
                                                color: '#333'
                                            }}>Harga Tiket
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '12px',
                                                color: '#333'
                                            }}>Harga tiket pada hari Senin-Jumat adalah Rp 120.000 dan hari Sabtu-Minggu adalah Rp 150.000 yang berlaku sebagai tiket terusan. Anak-anak dengan tinggi badan di bawah 90 cm belum berlaku harga tiket. Lansia di atas 55 tahun berlaku harga khusus dengan menunjukkan KTP di loket Saloka. Pembelian tiket bisa dilakukan di offline/loket tiket dan online pada website (maksimal H-1 kedatangan) dan merchant yang bekerjasama dengan Saloka. Tidak berlaku refund untuk pembatalan tiket yang sudah dibeli.
                                            </Typography>
                                        </Box>

                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: '13px',
                                                color: '#333'
                                            }}>Pertunjukan di Saloka
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '12px',
                                                color: '#333'
                                            }}>Pertunjukan spektakuler Baru Klinthing Show hadir di hari Jumat, Sabtu, Minggu, dan di hari libur nasional pada jam 18.15 WIB dan Dancing Fountain setiap hari di jam 15.00 WIB. Lihat lebih lengkap mengenai pertunjukan di Saloka pada bagian Show & Event.
                                            </Typography>
                                        </Box>
                                        
                                        <Box
                                        sx={{
                                        }}>
                                            <Typography
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 600,
                                                fontSize: '13px',
                                                color: '#333'
                                            }}>Aturan Makanan & Minuman
                                            </Typography>

                                            <Typography
                                            paragraph={true}
                                            textAlign="justify"
                                            sx={{
                                                fontWeight: 300,
                                                fontSize: '12px',
                                                color: '#333'
                                            }}>Makanan dan minuman dari luar Saloka tidak boleh dibawa masuk ke area Saloka, kecuali minuman dalam tumbler dan makanan khusus bayi.
                                            </Typography>
                                        </Box>

                                    </Grid>
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                    </Grid>

                    {/* navigation-fixed */}
                    <Box
                    className='stickyNavbar'
                    sx={{
                        zIndex: '1001',
                        position: 'sticky',
                        top: '100px',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        overflowX: 'scroll',
                        alignItems: 'center',
                        width: '100%',
                        height: '50px',
                        backgroundColor: 'secondary.main'
                    }}>
                        <Grid
                        container={true}
                        direction="row"
                        wrap="nowrap"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            height: '100%',
                            justifyContent: 'flex-start',
                            alignItems: 'center'
                        }}>
                            <Box
                            onClick={() => scrollToRef(tentangScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '5px',
                                marginX: '5px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${tentangInView && !zonaInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >TENTANG</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(zonaScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '5px',
                                marginX: '5px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${zonaInView && !mapsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >ZONA</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(mapsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '5px',
                                marginX: '5px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${mapsInView && !eventsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >PETA</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(eventsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '5px',
                                marginX: '5px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${eventsInView && !faqsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >EVENTS</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(faqsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '5px',
                                marginX: '5px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${faqsInView && !contactsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >FAQs</Typography>
                            </Box>
                            <Box
                            onClick={() => scrollToRef(contactsScrollRef)}
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                height: '100%',
                                paddingX: '5px',
                                marginX: '5px',
                                cursor: 'pointer',
                            }}>
                                <Typography
                                className={`sticky-nav-text noselect ${contactsInView ? " sticky-nav-text-active" : ""}`}
                                noWrap={true}
                                sx={{
                                    fontFamily: 'AlrightSans',
                                    fontSize: '9px',
                                    fontWeight: 700,
                                    color: 'white.lightest',
                                }}
                                >CONTACTS</Typography>
                            </Box>
                        </Grid>
                    </Box>

                    {/* tentang */}
                    <div ref={tentangScrollRef}></div>
                    <Grid
                    ref={tentangRef}
                    container={true}
                    direction="row"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                    }}>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            width: '100%',
                            height: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <img
                                src={mediaHome[0]}
                                style={{
                                }}></img>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '50px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <Typography
                                sx={{
                                    fontSize: '24px',
                                    fontWeight: 600,
                                    color: '#333',
                                    textAlign: 'center',
                                }}
                                >Taman Rekreasi Terbesar di Jawa Tengah</Typography>
                            </Box>
                            <Box
                            sx={{
                                marginTop: '10px',
                                display: 'flex',
                                alignItems: 'center',
                                width: '80%',
                            }}>
                                <Typography
                                textAlign="justify"
                                sx={{
                                    lineHeight: 1.5,
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}
                                >SALOKA hadir sebagai salah satu destinasi wisata Pesona Indonesia yang berbentuk taman rekreasi tematik keluarga di Jawa Tengah yang mengusung konsep kearifan lokal. Berlokasi di persimpangan antara kota Semarang, Salatiga, Surakarta dan Daerah Istimewa Yogyakarta.</Typography>
                            </Box>
                            <Box
                            onClick={() => redirect('/tentang')}
                            sx={{
                                display: 'flex',
                                marginTop: '20px',
                                width: '80%',
                                alignItems: 'center',
                            }}>
                                <Typography
                                className="noselect"
                                align="justify"
                                sx={{
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    color: 'primary.main'
                                }}
                                >Baca Lebih Lanjut Tentang Saloka</Typography>
                                <ArrowForward
                                sx={{
                                    cursor: 'pointer',
                                    marginLeft: '10px',
                                    fontSize: 20,
                                    color: 'primary.main'
                                }}/>
                            </Box>
                        </Grid>
                    </Grid>

                    {/* banner-zones */}
                    <div ref={zonaScrollRef}></div>
                    <Grid
                    ref={zonaRef}
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Box
                        sx={{

                        }}>
                            <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '24px',
                                color: '#333'
                            }}>5 Zona dengan Beragam Tema</Typography>
                        </Box>
                        <Box
                        sx={{
                            marginTop: '50px',
                            height: '100%',
                            width: '100%',
                        }}>
                            <SwiperMainZones/>
                        </Box>
                        <Box
                        sx={{
                            marginTop: '20px',
                        }}>
                            <Button
                            onClick={() => redirect('/zona')}
                            variant="outlined"
                            sx={{
                                width: '200px',
                                height: '50px',
                                borderRadius: 50,
                                border: '2px solid'
                            }}>
                                <Typography
                                sx={{
                                    fontWeight: 600,
                                    fontSize: '14px',
                                    color: 'primary.main'
                                }}>LIHAT SEMUA ZONA</Typography>
                            </Button>
                        </Box>
                    </Grid>

                    {/* maps */}
                    <div ref={mapsScrollRef}></div>
                    <Grid
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Box
                    ref={mapsRef}
                    sx={{
                        position: 'relative',
                        width: '100%',
                        height: '75vh',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <img
                        src={mediaHome[1]}
                        alt="maps-banner"
                        style={{
                            layout: 'fill',
                            objectFit: 'cover',
                            objectPosition: 'top',
                            width: '100%',
                            filter: 'brightness(30%)',
                        }}></img>
                    </Box>
                    <Box
                    sx={{
                        position: 'absolute',
                        marginTop: '50px',
                        width: '100%',
                        height: '70vh',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            paddingBottom: '50px',
                            display: 'flex',
                            height: '100%',
                            width: '80%',
                            justifyContent: 'flex-end',
                            alignItems: 'center'
                        }}>
                        <Typography
                        sx={{
                            fontSize: '26px',
                            fontWeight: 600,
                            color: '#ddd',
                            textAlign: 'center',
                        }}
                        >Rasakan Keceriaan Tiada Habisnya di Saloka Theme Park!</Typography>
                        <Typography
                        sx={{
                            marginBottom: '30px',
                            fontSize: '13px',
                            fontWeight: 300,
                            color: '#ddd',
                            textAlign: 'center',
                        }}
                        >Rencanakan petualangan di negeri ajaib dan ajak orang-orang tersayangmu sekarang!</Typography>
                        <Button
                        onClick={() => redirect('/zona')}
                        variant="outlined"
                        sx={{
                            width: '200px',
                            height: '50px',
                            borderRadius: 50,
                            border: '2px solid'
                        }}>
                            <Typography
                            sx={{
                                fontSize: '14px',
                                fontWeight: 600,
                                color: '#ddd'
                            }}>Lihat Peta Taman</Typography>
                        </Button>
                        </Grid>
                    </Box>
                    </Grid>

                    {/* events */}
                    <div ref={eventsScrollRef}></div>
                    <Grid
                    ref={eventsRef}
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        height: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Box
                        sx={{
                        }}>
                            <Typography
                            sx={{
                                fontWeight: 600,
                                fontSize: '38px',
                                color: '#333'
                            }}>What's on Saloka</Typography>
                        </Box>

                        <Box
                        sx={{
                            marginTop: '20px',
                            height: '100%',
                            width: '100%',
                        }}>
                            <SwiperMainEvents/>
                        </Box>

                    </Grid>

                    {/* FAQs */}
                    <div ref={faqsScrollRef}></div>
                    <Grid
                    ref={faqsRef}
                    container={true}
                    direction="column"
                    spacing={0}
                    sx={{
                        marginTop: '50px',
                        display: 'flex',
                        height: '100%',
                        width: '100%',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            display: 'flex',
                            height: '100%',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                        <Box
                        sx={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <Typography
                            sx={{
                                fontSize: '40px',
                                fontWeight: 600,
                                color: '#333'
                            }}
                            >FAQs</Typography>
                        </Box>

                        <Box
                        sx={{
                            marginTop: '20px',
                            width: '90%',
                            display: 'flex',
                            justifyContent: 'center',
                        }}>
                            <Grid
                            container={true}
                            direction="column"
                            spacing={0}
                            sx={{
                                display: 'flex',
                                width: '100%',
                                height: '100%',
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Box
                                sx={{
                                    width: '100%'
                                }}>
                                    {primaryFaqAmount.map((index) => (
                                        <Accordion
                                        elevation={0}
                                        key={`panel`+index}
                                        expanded={expanded === "primary"+index}
                                        onChange={handleChange("primary"+index)}
                                        sx={{
                                            width: '100%',
                                            '&& .MuiPaper-root-MuiAccordion-root:before': {
                                                backgroundColor: '#ff0000',
                                                height: '0px',
                                            },
                                        }}>
                                            <AccordionSummary
                                            expandIcon={<ExpandMore />}
                                            aria-controls="panel1bh-content"
                                            id="panel1bh-header"
                                            >
                                                <Typography
                                                sx={{
                                                    flexShrink: 0,
                                                    fontSize: '14px',
                                                    fontWeight: 450,
                                                }}>
                                                    {faq1[index].tanya}
                                                </Typography>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography
                                                sx={{
                                                    flexShrink: 0,
                                                    fontSize: '12px',
                                                }}>
                                                    {faq1[index].jawab}
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    ))}
                                </Box>

                                <hr
                                    style={{
                                        width: '100%',
                                        color: 'rgba(0, 0, 0, 0.12)',
                                        backgroundColor: 'rgba(0, 0, 0, 0.12)',
                                        height: '1px'
                                    }}
                                />

                                {/* secondary faqs */}
                                <Box
                                sx={{
                                    width: '100%'
                                }}>
                                    <Collapse in={expandedSecondary}>
                                        {secondaryFaqAmount.map((index) => (
                                            <Accordion
                                            elevation={0}
                                            key={`panelSecondary`+index}
                                            expanded={expanded === "secondary"+index}
                                            onChange={handleChange("secondary"+index)}
                                            sx={{
                                                width: '100%',
                                            }}>
                                                <AccordionSummary
                                                expandIcon={<ExpandMore />}
                                                aria-controls="panel1bh-content"
                                                id="panel1bh-header"
                                                >
                                                    <Typography
                                                    sx={{
                                                        flexShrink: 0,
                                                        fontSize: '14px',
                                                        fontWeight: 450,
                                                    }}>
                                                        {faq2[index].tanya}
                                                    </Typography>
                                                </AccordionSummary>
                                                <AccordionDetails>
                                                    <Typography
                                                    sx={{
                                                        flexShrink: 0,
                                                        fontSize: '12px',
                                                    }}>
                                                        {faq2[index].jawab}
                                                    </Typography>
                                                </AccordionDetails>
                                            </Accordion>
                                        ))}
                                    </Collapse>
                                </Box>

                                <Button
                                onClick={() => setExpandedSecondary(!expandedSecondary)}
                                variant="outlined"
                                sx={{
                                    marginTop: '20px',
                                    width: '200px',
                                    height: '50px',
                                    borderRadius: 50,
                                    border: '2px solid',
                                }}>
                                    <Typography
                                    className={styles.fontinBold}
                                    sx={{
                                        fontWeight: 600,
                                        fontSize: '14px',
                                        color: 'primary.main'
                                    }}>{expandedSecondary ? "Lihat Semua" : "Lihat Semua"}</Typography>
                                </Button>

                            </Grid>
                        </Box>
                        </Grid>
                    </Box>
                    </Grid>

                    {/* footer */}
                    <div ref={contactsScrollRef}></div>
                    <Box
                    ref={contactsRef}
                    sx={{
                        marginTop: '100px',
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${media[2]})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                    }}>
                        <Footer/>
                    </Box>

                    {/* scroll to top button */}
                    <ToTopButton/>
                </div>
            }
            </Zoom>
        </>
    );
}
