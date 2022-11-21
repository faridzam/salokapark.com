import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaShowEvent, showEventByIndex, getIndexShowEventBySlugs} from '../../assets/images/showEvent';

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


    return(
        <>
            <Head title={props.slugs}/>
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
                            marginTop: '20px',
                            display: 'flex',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '50px',
                                cursor: 'pointer',
                            }}>
                                <img
                                src={mediaShowEvent[getIndexShowEventBySlugs(props.slugs)]}
                                alt="banner image"
                                style={{
                                    layout: 'fill',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    width: '100%',
                                }}></img>
                            </Box>

                            <Box>
                                <Grid
                                container={true}
                                direction="row"
                                spacing={0}
                                sx={{
                                    marginTop: '50px',
                                    display: 'flex',
                                    width: '100%',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                }}>
                                <Box
                                sx={{
                                    width: '70%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}>
                                    <Box>
                                        <Typography
                                        sx={{
                                            fontFamily: 'fontin',
                                            fontWeight: 600,
                                            fontSize: '32px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>{showEventByIndex(getIndexShowEventBySlugs(props.slugs)).title}</Typography>
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
                                            lineHeight: 2,
                                            fontSize: '18px',
                                            fontWeight: 400,
                                            color: '#333'
                                        }}>{showEventByIndex(getIndexShowEventBySlugs(props.slugs)).deskripsiLengkap}</Typography>
                                    </Box>
                                </Box>
                                <Box
                                sx={{
                                    width: '20%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'flex-start',
                                    justifyContent: 'flex-start'
                                }}>
                                    <Typography
                                    sx={{
                                        fontFamily: 'fontin',
                                        fontWeight: 600,
                                        fontSize: '28px',
                                        color: '#333',
                                        textAlign: 'center',
                                    }}>
                                        Jadwal Show:
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#333'
                                    }}>
                                        weekdays:
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#333'
                                    }}>
                                        {showEventByIndex(getIndexShowEventBySlugs(props.slugs)).jadwal.weekdays}
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#333'
                                    }}>
                                        weekends:
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#333'
                                    }}>
                                        {showEventByIndex(getIndexShowEventBySlugs(props.slugs)).jadwal.weekends}
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontSize: '18px',
                                        fontWeight: 500,
                                        color: '#333'
                                    }}>
                                        Tanggal Merah:
                                    </Typography>
                                    <Typography
                                    sx={{
                                        fontSize: '15px',
                                        fontWeight: 400,
                                        color: '#333'
                                    }}>
                                        {showEventByIndex(getIndexShowEventBySlugs(props.slugs)).jadwal.tanggalMerah}
                                    </Typography>

                                    <Box
                                    sx={{
                                        marginTop: '20px',
                                    }}>
                                        <Typography
                                        sx={{
                                            fontWeight: 600,
                                            fontSize: '24px',
                                            color: '#333',
                                            textAlign: 'center',
                                        }}>
                                            Zona: {showEventByIndex(getIndexShowEventBySlugs(props.slugs)).zona}
                                        </Typography>
                                    </Box>

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

                            <Box
                            sx={{
                                width: '100%',
                                marginTop: '50px',
                                cursor: 'pointer',
                            }}>
                                <img
                                src={mediaShowEvent[getIndexShowEventBySlugs(props.slugs)]}
                                alt="banner image"
                                style={{
                                    layout: 'fill',
                                    objectFit: 'cover',
                                    objectPosition: 'top',
                                    width: '100%',
                                }}></img>
                            </Box>

                            <Box
                            sx={{
                                marginTop: '50px',
                                width: '80%',
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '24px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>{showEventByIndex(getIndexShowEventBySlugs(props.slugs)).title}</Typography>
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
                                    lineHeight: 2,
                                    fontSize: '18px',
                                    fontWeight: 400,
                                    color: '#333'
                                }}
                                >{showEventByIndex(getIndexShowEventBySlugs(props.slugs)).deskripsiLengkap}</Typography>
                            </Box>

                        </Grid>
                    }

                    {/* footer */}
                    <Box
                    sx={{
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
