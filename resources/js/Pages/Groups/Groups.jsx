import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade, Button, Accordion, AccordionSummary, AccordionDetails, Collapse} from '@mui/material';
import {ExpandMore} from '@mui/icons-material';

import { Header, Footer, ToTopButton, WhatsAppButton} from '../../Components';
import { SwiperGroups } from '../../Components/Carousel';
import {media} from '../../assets/images';
import {mediaGroups} from '../../assets/images/groups';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Groups(props) {
    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    const [faq1, setFaq1] = React.useState([]);
    const [faq2, setFaq2] = React.useState([]);
    React.useEffect(() => {
        axios.get('/api/get-content-group-faqs')
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

    //faq
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

    const [banner, setBanner] = React.useState(false);
    React.useEffect(() => {
        axios.get('/api/get-content-group-banner')
        .then((response) => {
            //
            // let Obj = response.data.promoBanner;
            // var result=[];
            // for(var i=0;i<Obj.length;i++){
            //     result.push({id: Obj[i].id, gambar: Obj[i].gambar, deskripsi: Obj[i].deskripsi});
            // }
            setBanner(response.data.groupBanner);
        }).catch((error) => {
            //
            console.log(error);
        })
    }, []);

    return(
        <>
            <Head title="Group / Rombongan"/>
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
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            {/* banner */}
                            {
                                banner
                                ?
                                <Box
                                sx={{
                                    width: '100%',
                                    maxHeight: '85vh',
                                    cursor: 'pointer',
                                }}>
                                    <img
                                    src={'https://dashboard.salokapark.com/public/foto/grup/'+banner}
                                    loading="lazy"
                                    alt="logo saloka"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        width: '100%',
                                        minHeight: '30vh',
                                        maxHeight: '85vh',
                                    }}></img>
                                </Box>
                                :
                                <div></div>
                            }

                            <Box
                            sx={{
                                width: '80%',
                                marginTop: '20px',
                            }}>

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
                                        width: '100%',
                                    }}>
                                        <Typography
                                        paragraph={true}
                                        sx={{
                                            lineHeight: 1.5,
                                            textAlign: 'center',
                                            color: '#333',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                        }}
                                        >SEMAKIN HANGAT DAN AKRAB WISATA ANDA BERSAMA ROMBONGAN DENGAN ACARA DAN FASILITAS WAHANA PERMAINAN SERU DAN ASIK. AYO.!! AGENDAKAN WISATA ROMBONGAN ANDA BERSAMA SALOKA THEME PARK</Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '100%',
                                    }}>
                                        <Typography
                                        paragraph={true}
                                        sx={{
                                            lineHeight: 1.5,
                                            textAlign: 'center',
                                            color: '#333',
                                            fontSize: '16px',
                                            fontWeight: 500,
                                        }}
                                        >"CERIA TIADA HABISNYA"</Typography>
                                    </Box>
                                </Grid>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
                                width: '100%',
                            }}>
                                <SwiperGroups/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px'
                            }}>
                                <Grid
                                container={true}
                                direction="column"
                                spacing={0}
                                sx={{
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
                                                            <Typography sx={{ flexShrink: 0 }}>
                                                                {faq1[index].tanya}
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography>
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
                                                                <Typography sx={{ flexShrink: 0 }}>
                                                                    {faq2[index].tanya}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography>
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
                                                sx={{
                                                fontSize: '16px',
                                                color: 'primary.main'
                                                }}>{expandedSecondary ? "Lihat Semua" : "Lihat Semua"}</Typography>
                                            </Button>
            
                                        </Grid>
                                    </Box>
                                    </Grid>
                                </Box>
                                </Grid>
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

                            {/* banner */}
                            {
                                banner
                                ?
                                <Box
                                sx={{
                                    width: '100%',
                                    maxHeight: '85vh',
                                    cursor: 'pointer',
                                }}>
                                    <img
                                    src={'https://dashboard.salokapark.com/public/foto/grup/'+banner}
                                    loading="lazy"
                                    alt="logo saloka"
                                    style={{
                                        layout: 'fill',
                                        objectFit: 'cover',
                                        objectPosition: 'top',
                                        width: '100%',
                                        minHeight: '30vh',
                                        maxHeight: '85vh',
                                    }}></img>
                                </Box>
                                :
                                <div></div>
                            }

                            <Box
                            sx={{
                                width: '80%',
                                marginTop: '20px',
                            }}>

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
                                        width: '100%',
                                    }}>
                                        <Typography
                                        paragraph={true}
                                        sx={{
                                            lineHeight: 1.5,
                                            textAlign: 'center',
                                            color: '#333',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                        }}
                                        >SEMAKIN HANGAT DAN AKRAB WISATA ANDA BERSAMA ROMBONGAN DENGAN ACARA DAN FASILITAS WAHANA PERMAINAN SERU DAN ASIK. AYO.!! AGENDAKAN WISATA ROMBONGAN ANDA BERSAMA SALOKA THEME PARK</Typography>
                                    </Box>
                                    <Box
                                    sx={{
                                        width: '100%',
                                    }}>
                                        <Typography
                                        paragraph={true}
                                        sx={{
                                            lineHeight: 1.5,
                                            textAlign: 'center',
                                            color: '#333',
                                            fontSize: '14px',
                                            fontWeight: 500,
                                        }}
                                        >"CERIA TIADA HABISNYA"</Typography>
                                    </Box>
                                </Grid>
                            </Box>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '20px',
                            }}>
                                <SwiperGroups/>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '20px',
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
                                                                fontSize: '15px',
                                                                fontWeight: 450,
                                                            }}>
                                                                {faq1[index].tanya}
                                                            </Typography>
                                                        </AccordionSummary>
                                                        <AccordionDetails>
                                                            <Typography
                                                            sx={{
                                                                fontSize: '14px',
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
                                                                    fontSize: '15px',
                                                                    fontWeight: 450,
                                                                }}>
                                                                    {faq2[index].tanya}
                                                                </Typography>
                                                            </AccordionSummary>
                                                            <AccordionDetails>
                                                                <Typography
                                                                sx={{
                                                                    flexShrink: 0,
                                                                    fontSize: '14px',
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
                                                sx={{
                                                fontSize: '16px',
                                                color: 'primary.main'
                                                }}>{expandedSecondary ? "Lihat Semua" : "Lihat Semua"}</Typography>
                                            </Button>

                                        </Grid>
                                    </Box>
                                    </Grid>
                                </Box>
                                </Grid>
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
                    {/* whatsapp button */}
                    <WhatsAppButton/>
                </div>
            </Fade>
        </>
    );
}
