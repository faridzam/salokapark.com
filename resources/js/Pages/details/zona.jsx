import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Button, Fade} from '@mui/material';
import {ArrowForward} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import {mediaZona, zonaByIndex, getIndexZonaBySlugs} from '../../assets/images/zona';

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
                                src={mediaZona[getIndexZonaBySlugs(props.slugs)]}
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
                            }}>
                                <Typography
                                sx={{
                                    fontFamily: 'fontin',
                                    fontWeight: 600,
                                    fontSize: '32px',
                                    color: '#333',
                                    textAlign: 'center',
                                }}>{zonaByIndex(getIndexZonaBySlugs(props.slugs)).title}</Typography>
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
                                >{zonaByIndex(getIndexZonaBySlugs(props.slugs)).deskripsiLengkap}</Typography>
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
                                src={mediaZona[getIndexZonaBySlugs(props.slugs)]}
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
                                }}>{zonaByIndex(getIndexZonaBySlugs(props.slugs)).title}</Typography>
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
                                >{zonaByIndex(getIndexZonaBySlugs(props.slugs)).deskripsiLengkap}</Typography>
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
