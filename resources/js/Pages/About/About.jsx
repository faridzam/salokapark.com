import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade, Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemIcon, ListItemText} from '@mui/material';
import {ExpandMore, FiberManualRecord} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import { SwiperKeanggotaan } from '../../Components/Carousel';

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

    const [expanded, setExpanded] = React.useState("tentang");
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const penghargaan = [
        {
            title: 'Lembaga Prestasi Indonesia Dunia(LEPRID)',
            description: "Piagam Penghargaan Lembaga Prestasi Indonesia Dunia (LEPRID) atas Pertunjukan Spektakuler Pertama di Indonesia yang Mengangkat Legenda Rakyat dengan Menggunakan Teknologi Multimedia dan Fountain menjadi Sebuah Pertunjukan Permanen “BARU KLINTHING” pada tahun 2019.",
        },
        {
            title: 'Pariwisata Award 2019',
            description: "Piagam Penghargaan Pariwisata Award 2019 sebagai New Comers Top Service Execellent oleh LEMPPAR (Lembaga Masyarakat Peduli Pariwisata).",
        },
        {
            title: 'Solo Best Brand and Innovation Awward 2020',
            description: "Penghargaan Solo Best Brand and Innovation Award 2020 sebagai Merek Terbaik di Solo kategori Innovation Wahana Wisata Keluarga yang diumumkan oleh Solopos pada tahun 2020.",
        },
        {
            title: 'Cleanliness, Health, Safety, Enviroment Sustainability(CHSE)',
            description: "Tersertifikasi CHSE (Cleanliness, Health, Safety, Enviroment Sustainability) ruang lingkup Daya Tarik Wisata dengan kategori penilaian Memuaskan dalam memenuhi kriteria sebagaimana ditetapkan oleh Kementrian Pariwisata dan Ekonomi Kreatif / Badan Pariwisata dan Ekonomi Kreatif Republik Indonesia pada tahun 2020.",
        },
        {
            title: 'Anugerah Pariwisata Jawa Tengah 2022',
            description: "Piagam Penghargaan Anugerah Pariwisata Jawa Tengah 2022 sebagai Taman Wisata Terbaik oleh PWI (Persatuan Wartawan Indonesia)",
        },
    ];

    const PENGHARGAAN_COUNT = penghargaan.length;
    const penghargaanContent = Array.from(Array(PENGHARGAAN_COUNT).keys());

    return(
        <>
            <Head title='Zona'/>
            <Fade
            in={isMounted}
            timeout={1000}
            style={{ transitionDelay: isMounted ? '500ms' : '0ms' }}>
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

                    {
                        desktop
                        ?
                        <Grid
                        container={true}
                        direction="column"
                        spacing={0}
                        sx={{
                            marginTop: '20px',
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
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Tentang Saloka</Typography>
                            </Box>

                            {/* tentang */}
                            <Box
                            sx={{
                                width: '80%',
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
                                            fontSize: '24px',
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
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                display: 'flex',
                                                width: '95%',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 1.5,
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>SALOKA hadir sebagai salah satu destinasi wisata Pesona Indonesia yang berbentuk taman rekreasi tematik keluarga di Jawa Tengah yang mengusung konsep kearifan lokal. Berlokasi di persimpangan antara kota Semarang, Salatiga, Surakarta dan Daerah Istimewa Yogyakarta.
                                                </Typography>
                                            </Box>

                                            <Box
                                            sx={{
                                                display: 'flex',
                                                width: '95%',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 1.5,
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>Berdiri di atas lahan seluas 12 Hektare, memiliki 25 wahana yang dibangun dengan peralatan modern oleh tenaga ahli berpengalaman dan berlisensi internasional. 
                                                </Typography>
                                            </Box>

                                            <Box
                                            sx={{
                                                display: 'flex',
                                                width: '95%',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                            }}>
                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    lineHeight: 1.5,
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>Nama SALOKA terinspirasi dari legenda Rawa Pening, suatu Kawasan yang dekat dengan wilayah SALOKA Theme Park berada. Diceritakan pada zaman dahulu hiduplah sepasang suami-istri bernama Ki Hajar Salokantara dan Nyi Endang Sawitri. Mereka mempunyai seorang anak bernama Baru Klinthing yang berwujud naga dan bisa berbicara seperti layaknya manusia. Baru Klinthing dikenal suka menolong. Berangkat dari cerita tersebut, SALOKA berharap mampu menyajikan keceriaan tiada habisnya dengan maskot berbentuk naga yang bernama “LOKA”.
                                                </Typography>
                                            </Box>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            {/* penghargaan */}
                            <Box
                            sx={{
                                width: '80%',
                            }}>
                                <Accordion
                                elevation={0}
                                key={`penghargaan`}
                                expanded={expanded === "penghargaan"}
                                onChange={handleChange("penghargaan")}
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
                                            fontSize: '24px',
                                            fontWeight: 700,
                                        }}>
                                            Penghargaan
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
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <List
                                            sx = {{
                                                width: '95%',
                                                listStyleType: 'disc',
                                                pl: 2,
                                                '& .MuiListItem-root': {
                                                    display: 'list-item',
                                                },
                                            }}>
                                                {penghargaanContent.map((index) => (
                                                    <ListItem>
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
                                                            <Box
                                                            sx={{
                                                                display: 'flex',
                                                                width: '100%',
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'flex-start',
                                                            }}>
                                                                <Typography
                                                                sx={{
                                                                    fontWeight: 600,
                                                                    fontSize: '14px',
                                                                    color: '#333',
                                                                    textAlign: 'justify',
                                                                }}>{penghargaan[index].title}</Typography>
                                                            </Box>
                                                            <Box
                                                            sx={{
                                                                display: 'flex',
                                                                width: '100%',
                                                                justifyContent: 'flex-start',
                                                                alignItems: 'flex-start',
                                                            }}>
                                                                <Typography
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    fontSize: '14px',
                                                                    color: '#333',
                                                                    textAlign: 'justify',
                                                                }}>{penghargaan[index].description}</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </ListItem>
                                                ))}
                                            </List>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            {/* keanggotaan */}
                            <Box
                            sx={{
                                width: '80%',
                            }}>
                                <Accordion
                                elevation={0}
                                key={`keanggotaan`}
                                expanded={expanded === "keanggotaan"}
                                onChange={handleChange("keanggotaan")}
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
                                            fontSize: '24px',
                                            fontWeight: 700,
                                        }}>
                                            Keanggotaan
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
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            <Box
                                            sx={{
                                                display: 'flex',
                                                width: '100%',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                            }}>
                                                <SwiperKeanggotaan/>
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
                            marginTop: '20px',
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
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>Tentang Saloka</Typography>
                            </Box>

                            {/* tentang */}
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
                                            fontSize: '18px',
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
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>SALOKA hadir sebagai salah satu destinasi wisata Pesona Indonesia yang berbentuk taman rekreasi tematik keluarga di Jawa Tengah yang mengusung konsep kearifan lokal. Berlokasi di persimpangan antara kota Semarang, Salatiga, Surakarta dan Daerah Istimewa Yogyakarta.
                                                </Typography>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>Berdiri di atas lahan seluas 12 Hektare, memiliki 25 wahana yang dibangun dengan peralatan modern oleh tenaga ahli berpengalaman dan berlisensi internasional.
                                                </Typography>

                                                <Typography
                                                paragraph={true}
                                                textAlign="justify"
                                                sx={{
                                                    fontWeight: 500,
                                                    fontSize: '14px',
                                                    color: '#333'
                                                }}>Nama SALOKA terinspirasi dari legenda Rawa Pening, suatu Kawasan yang dekat dengan wilayah SALOKA Theme Park berada. Diceritakan pada zaman dahulu hiduplah sepasang suami-istri bernama Ki Hajar Salokantara dan Nyi Endang Sawitri. Mereka mempunyai seorang anak bernama Baru Klinthing yang berwujud naga dan bisa berbicara seperti layaknya manusia. Baru Klinthing dikenal suka menolong. Berangkat dari cerita tersebut, SALOKA berharap mampu menyajikan keceriaan tiada habisnya dengan maskot berbentuk naga yang bernama “LOKA”.
                                                </Typography>

                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            {/* penghargaan */}
                            <Box
                            sx={{
                                width: '80%'
                            }}>
                                <Accordion
                                elevation={0}
                                key={`penghargaan`}
                                expanded={expanded === "penghargaan"}
                                onChange={handleChange("penghargaan")}
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
                                            fontSize: '18px',
                                            fontWeight: 700,
                                        }}>
                                            Penghargaan
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
                                            <List
                                            sx = {{
                                            listStyleType: 'disc',
                                            pl: 2,
                                            '& .MuiListItem-root': {
                                            display: 'list-item',
                                            },
                                            }}>
                                                {penghargaanContent.map((index) => (
                                                    <ListItem>
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
                                                            <Box
                                                            sx={{
                                                            }}>
                                                                <Typography
                                                                sx={{
                                                                    fontWeight: 600,
                                                                    fontSize: '14px',
                                                                    color: '#333',
                                                                    textAlign: 'justify',
                                                                }}>{penghargaan[index].title}</Typography>
                                                            </Box>
                                                            <Box
                                                            sx={{
                                                            }}>
                                                                <Typography
                                                                sx={{
                                                                    fontWeight: 500,
                                                                    fontSize: '14px',
                                                                    color: '#333',
                                                                    textAlign: 'justify',
                                                                }}>{penghargaan[index].description}</Typography>
                                                            </Box>
                                                        </Grid>
                                                    </ListItem>
                                                ))}
                                            </List>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                            {/* keanggotaan */}
                            <Box
                            sx={{
                                width: '80%'
                            }}>
                                <Accordion
                                elevation={0}
                                key={`keanggotaan`}
                                expanded={expanded === "keanggotaan"}
                                onChange={handleChange("keanggotaan")}
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
                                            fontSize: '18px',
                                            fontWeight: 700,
                                        }}>
                                            Keanggotaan
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
                                            <SwiperKeanggotaan/>
                                        </Grid>
                                    </AccordionDetails>
                                </Accordion>
                            </Box>

                        </Grid>
                    }

                    {/* footer */}
                    <Box
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
            </Fade>
        </>
    );
}
