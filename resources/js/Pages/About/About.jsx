import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {ExpandMore, FiberManualRecord} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import { SwiperTentangFasum } from '../../Components/Carousel';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Zona(props) {
    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [expanded, setExpanded] = React.useState(false);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const fasilitasUmum = [
        "Mushola",
        "ATM Center",
        "Toilet",
        "Informasi Kehilangan",
        "Loker",
        "Ruang Laktasi",
        "Toilet Difabel",
        "Klinik Kesehatan",
        "Loket Informasi",
        "Area Merokok",
        "Halte Bis",
    ];

    return(
        <>
            <Head title='Zona'/>
            <Fade
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
                <div>
                    {/* header */}
                    <Header/>

                    {
                        desktop
                        ?
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '100px',
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
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Tentang Saloka</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '80%'
                            }}>
                                <Accordion
                                elevation={0}
                                key={`tentang`}
                                expanded={expanded === "tentang"}
                                onChange={handleChange("tentang")}
                                sx={{
                                    width: '100%',
                                    '&& .MuiPaper-root-MuiAccordion-root:before': {
                                        backgroundColor: '#ff0000',
                                        height: '0px',
                                    },
                                }}>
                                    <AccordionSummary
                                    expandIcon={
                                        <ExpandMore
                                        sx={{
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                            stroke: 'secondary.main',
                                        }}/>
                                    }
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                        <Typography sx={{
                                            flexShrink: 0,
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                        }}>
                                            Tentang Saloka
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                        }}>
                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 2,
                                                    fontWeight: 500,
                                                    fontSize: '18px',
                                                    color: '#333'
                                                }}>SALOKA hadir sebagai salah satu destinasi wisata Pesona Indonesia yang berbentuk taman rekreasi tematik keluarga di Jawa Tengah yang mengusung konsep kearifan lokal.
                                                Berlokasi di persimpangan antara kota Semarang, Salatiga, Surakarta dan Daerah Istimewa Yogyakarta.
                                                </Typography>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 2,
                                                    fontWeight: 500,
                                                    fontSize: '18px',
                                                    color: '#333'
                                                }}>Berdiri di atas lahan seluas 12 Hektare, memiliki 25 wahana yang terbagi dalam 5 zona permainan, yaitu zona Pesisir, zona Balalantar, zona Kamayayi, zona Ararya, dan zona Segara Prada.
                                                Tidak hanya wahana permainan, di dalamnya juga terdapat pertunjukan Baru Klintihing.
                                                Selain itu, ada pilihan restoran, café, dan foodtruck yang menawarkan berbagai makanan-minuman yang memanjakan lidah untuk bersantai.
                                                </Typography>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 2,
                                                    fontWeight: 500,
                                                    fontSize: '18px',
                                                    color: '#333'
                                                }}>SALOKA dibangun dengan peralatan modern oleh tenaga ahli berpengalaman dan berlisensi internasional.
                                                </Typography>

                                                <Box
                                                sx={{
                                                    backgroundColor: 'primary.main',
                                                    width: '100%',
                                                    paddingX: '30px',
                                                    paddingY: '10px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    borderRadius: '30px',
                                                }}>
                                                    <Typography
                                                    paragraph={true}
                                                    textAlign="justify"
                                                    sx={{
                                                        lineHeight: 2,
                                                        fontWeight: 500,
                                                        fontSize: '24px',
                                                        color: 'secondary.light'
                                                    }}>Fakta Menarik!
                                                    </Typography>

                                                    <Typography
                                                    paragraph={true}
                                                    textAlign="justify"
                                                    sx={{
                                                        lineHeight: 2,
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        color: '#ddd'
                                                    }}>SALOKA telah terdaftar sebagai member International Association of Amusement Parks and Attractions (IAAPA).
                                                    Pada 22 Juni 2019, SALOKA telah diresmikan oleh Menteri Pariwisata, Arief Yahya dan Gubernur Jawa Tengah, Ganjar Pranowo.
                                                    </Typography>
                                                </Box>

                                                <Box
                                                sx={{
                                                    marginTop: '20px'
                                                }}>
                                                    <Typography
                                                    paragraph={true}
                                                    textAlign="justify"
                                                    sx={{
                                                        lineHeight: 2,
                                                        fontWeight: 600,
                                                        fontSize: '18px',
                                                        color: 'secondary.light'
                                                    }}>SALOKA THEME PARK MENGUSUNG KONSEP KEARIFAN LOKAL BERDASARKAN LEGENDA RAKYAT BARU KLINTHING.
                                                    </Typography>
                                                </Box>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 2,
                                                    fontWeight: 500,
                                                    fontSize: '18px',
                                                    color: '#333'
                                                }}>Nama SALOKA terinspirasi dari legenda Rawa Pening, suatu Kawasan yang dekat dengan wilayah SALOKA Theme Park berada.
                                                Diceritakan pada zaman dahulu hiduplah sepasang suami-istri bernama Ki Hajar Salokantara dan Nyi Endang Sawitri.
                                                Mereka mempunyai seorang anak bernama Baru Klinthing yang berwujud naga dan bisa berbicara seperti layaknya manusia. Baru Klinthing dikenal suka menolong.
                                                Berangkat dari cerita tersebut, SALOKA berharap mampu menyajikan keceriaan tiada habisnya dengan maskot berbentuk naga yang bernama “LOKA”.
                                                </Typography>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box
                            sx={{
                                width: '80%'
                            }}>
                                <Accordion
                                elevation={0}
                                key={`fasum`}
                                expanded={expanded === "fasum"}
                                onChange={handleChange("fasum")}
                                sx={{
                                    width: '100%',
                                    '&& .MuiPaper-root-MuiAccordion-root:before': {
                                        backgroundColor: '#ff0000',
                                        height: '0px',
                                    },
                                }}>
                                    <AccordionSummary
                                    expandIcon={
                                        <ExpandMore
                                        sx={{
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                            stroke: 'secondary.main',
                                        }}/>
                                    }
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                        <Typography sx={{
                                            flexShrink: 0,
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                        }}>
                                            Fasilitas Umum
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid
                                        container={true}
                                        direction="row"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                maxWidth: '40%',
                                            }}>
                                                <List
                                                sx={{
                                                    width: '100%',
                                                    maxHeight: '600px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flexWrap: 'wrap',
                                                }}>
                                                {fasilitasUmum.map((value) => (
                                                    <ListItem>
                                                        <ListItemIcon>
                                                        <FiberManualRecord/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                        primary={value}
                                                        secondary=""
                                                        />
                                                    </ListItem>
                                                ))}
                                                </List>
                                            </Box>
                                            <Box
                                            sx={{
                                                maxWidth: '70%',
                                                maxHeight: '600px',
                                            }}>
                                                <SwiperTentangFasum/>
                                            </Box>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                        </Grid>
                        :
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '100px',
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
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Tentang Saloka</Typography>
                            </Box>

                            <Box
                            sx={{
                                width: '80%'
                            }}>
                                <Accordion
                                elevation={0}
                                key={`tentang`}
                                expanded={expanded === "tentang"}
                                onChange={handleChange("tentang")}
                                sx={{
                                    width: '100%',
                                    '&& .MuiPaper-root-MuiAccordion-root:before': {
                                        backgroundColor: '#ff0000',
                                        height: '0px',
                                    },
                                }}>
                                    <AccordionSummary
                                    expandIcon={
                                        <ExpandMore
                                        sx={{
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                            stroke: 'secondary.main',
                                        }}/>
                                    }
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                        <Typography sx={{
                                            flexShrink: 0,
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                        }}>
                                            Tentang Saloka
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid
                                        container={true}
                                        direction="column"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                        }}>
                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '15px',
                                                    color: '#333'
                                                }}>SALOKA hadir sebagai salah satu destinasi wisata Pesona Indonesia yang berbentuk taman rekreasi tematik keluarga di Jawa Tengah yang mengusung konsep kearifan lokal.
                                                Berlokasi di persimpangan antara kota Semarang, Salatiga, Surakarta dan Daerah Istimewa Yogyakarta.
                                                </Typography>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '15px',
                                                    color: '#333'
                                                }}>Berdiri di atas lahan seluas 12 Hektare, memiliki 25 wahana yang terbagi dalam 5 zona permainan, yaitu zona Pesisir, zona Balalantar, zona Kamayayi, zona Ararya, dan zona Segara Prada.
                                                Tidak hanya wahana permainan, di dalamnya juga terdapat pertunjukan Baru Klintihing.
                                                Selain itu, ada pilihan restoran, café, dan foodtruck yang menawarkan berbagai makanan-minuman yang memanjakan lidah untuk bersantai.
                                                </Typography>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '15px',
                                                    color: '#333'
                                                }}>SALOKA dibangun dengan peralatan modern oleh tenaga ahli berpengalaman dan berlisensi internasional.
                                                </Typography>

                                                <Box
                                                sx={{
                                                    backgroundColor: 'primary.main',
                                                    width: '100%',
                                                    paddingX: '30px',
                                                    paddingY: '10px',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    borderRadius: '30px',
                                                }}>
                                                    <Typography
                                                    paragraph={true}
                                                    textAlign="justify"
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '18px',
                                                        color: 'secondary.light'
                                                    }}>Fakta Menarik!
                                                    </Typography>

                                                    <Typography
                                                    paragraph={true}
                                                    textAlign="justify"
                                                    sx={{
                                                        fontWeight: 500,
                                                        fontSize: '15px',
                                                        color: '#ddd'
                                                    }}>SALOKA telah terdaftar sebagai member International Association of Amusement Parks and Attractions (IAAPA).
                                                    Pada 22 Juni 2019, SALOKA telah diresmikan oleh Menteri Pariwisata, Arief Yahya dan Gubernur Jawa Tengah, Ganjar Pranowo.
                                                    </Typography>
                                                </Box>

                                                <Box
                                                sx={{
                                                    marginTop: '20px'
                                                }}>
                                                    <Typography
                                                    paragraph={true}
                                                    textAlign="center"
                                                    sx={{
                                                        fontWeight: 600,
                                                        fontSize: '18px',
                                                        color: 'secondary.light'
                                                    }}>SALOKA THEME PARK MENGUSUNG KONSEP KEARIFAN LOKAL BERDASARKAN LEGENDA RAKYAT BARU KLINTHING.
                                                    </Typography>
                                                </Box>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 2,
                                                    fontWeight: 500,
                                                    fontSize: '15px',
                                                    color: '#333'
                                                }}>Nama SALOKA terinspirasi dari legenda Rawa Pening, suatu Kawasan yang dekat dengan wilayah SALOKA Theme Park berada.
                                                Diceritakan pada zaman dahulu hiduplah sepasang suami-istri bernama Ki Hajar Salokantara dan Nyi Endang Sawitri.
                                                Mereka mempunyai seorang anak bernama Baru Klinthing yang berwujud naga dan bisa berbicara seperti layaknya manusia. Baru Klinthing dikenal suka menolong.
                                                Berangkat dari cerita tersebut, SALOKA berharap mampu menyajikan keceriaan tiada habisnya dengan maskot berbentuk naga yang bernama “LOKA”.
                                                </Typography>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            <Box
                            sx={{
                                width: '80%'
                            }}>
                                <Accordion
                                elevation={0}
                                key={`fasum`}
                                expanded={expanded === "fasum"}
                                onChange={handleChange("fasum")}
                                sx={{
                                    width: '100%',
                                    '&& .MuiPaper-root-MuiAccordion-root:before': {
                                        backgroundColor: '#ff0000',
                                        height: '0px',
                                    },
                                }}>
                                    <AccordionSummary
                                    expandIcon={
                                        <ExpandMore
                                        sx={{
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                            stroke: 'secondary.main',
                                        }}/>
                                    }
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                    >
                                        <Typography sx={{
                                            flexShrink: 0,
                                            color: 'secondary.main',
                                            fontSize: '32px',
                                            fontWeight: 700,
                                        }}>
                                            Fasilitas Umum
                                        </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Grid
                                        container={true}
                                        direction="row"
                                        spacing={0}
                                        sx={{
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}>

                                            <Box
                                            sx={{
                                                maxWidth: '100%',
                                                height: '100%',
                                            }}>
                                                <SwiperTentangFasum/>
                                            </Box>

                                            <Box
                                            sx={{
                                                maxWidth: '100%',
                                            }}>
                                                <List
                                                sx={{
                                                    width: '100%',
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    flexWrap: 'wrap',
                                                }}>
                                                {fasilitasUmum.map((value) => (
                                                    <ListItem>
                                                        <ListItemIcon
                                                        sx={{
                                                            minWidth: '0px',
                                                            marginRight: '10px',
                                                        }}>
                                                        <FiberManualRecord
                                                        sx={{
                                                            fontSize: '15px',
                                                        }}/>
                                                        </ListItemIcon>
                                                        <ListItemText
                                                        primary={value}
                                                        secondary=""
                                                        sx={{
                                                            fontSize: '15px',
                                                        }}
                                                        />
                                                    </ListItem>
                                                ))}
                                                </List>
                                            </Box>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                        </Grid>
                    }

                    {/* footer */}
                    <Box
                    sx={{
                        width: '100%',
                        height: '800px',
                        backgroundImage: `url(${media[2]})`,
                        backgroundRepeat: `no-repeat`,
                        backgroundSize: `cover`
                    }}>
                        <Footer/>
                    </Box>

                    {/* scroll to top button */}
                    <ToTopButton/>
                </div>
            </Fade>
        </>
    );
}
