import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import { useTheme } from "@mui/material/styles";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import {useMediaQuery, Box, Typography, Fade} from '@mui/material';
import {} from '@mui/icons-material';

import { Header, Footer, ToTopButton} from '../../Components';
import {media} from '../../assets/images';
import { SwiperPromosiBanner, SwiperPromosiList, SwiperPromosiEventList } from '../../Components/Carousel';

export function useIsMounted() {
    const isMountedRef = React.useRef(true);
    const isMounted = React.useCallback(() => isMountedRef.current, []);

    React.useEffect(() => {
      return () => void (isMountedRef.current = false);
    }, []);

    return isMounted;
}

export default function Promotion(props) {

    const isMounted = useIsMounted();

    //media query
    const theme = useTheme();
    const desktop = useMediaQuery(theme.breakpoints.up('laptop'));

    return(
        <>
            <Head title='Promosi'/>
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
                        <div>

                            {/* banner */}
                            <Box
                            sx={{
                                marginTop: '20px'
                            }}>
                                <SwiperPromosiBanner/>
                            </Box>

                            {/* promo */}
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
                                        fontSize: '38px',
                                        color: '#333'
                                    }}>Promosi Saloka Theme Park</Typography>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    marginTop: '50px'
                                }}>
                                    <SwiperPromosiList/>
                                </Box>
                            </Grid>

                            {/* promo-event */}
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
                                        fontSize: '38px',
                                        color: '#333'
                                    }}>Promosi Event Saloka Theme Park</Typography>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    marginTop: '50px'
                                }}>
                                    <SwiperPromosiEventList/>
                                </Box>
                            </Grid>

                        </div>
                        :
                        <div>

                            {/* banner */}
                            <Box
                            sx={{
                                marginTop: '20px'
                            }}>
                                <SwiperPromosiBanner/>
                            </Box>

                            {/* promo */}
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
                                        fontSize: '28px',
                                        color: '#333',
                                        textAlign: 'center',
                                    }}>Promosi Saloka Theme Park</Typography>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    marginTop: '50px'
                                }}>
                                    <SwiperPromosiList/>
                                </Box>
                            </Grid>

                            {/* promo-event */}
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
                                        fontSize: '28px',
                                        color: '#333',
                                        textAlign: 'center',
                                    }}>Promosi Event Saloka Theme Park</Typography>
                                </Box>
                                <Box
                                sx={{
                                    width: '100%',
                                    marginTop: '50px'
                                }}>
                                    <SwiperPromosiEventList/>
                                </Box>
                            </Grid>


                        </div>
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
    )
}
